import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { caseStudies, siteConfig } from '../../config/site';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="cases">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero__container">
          <h1 class="hero__headline">Real Creators.<br/>Real Results.</h1>
          <p class="hero__subtitle">
            See how brands partnered with our creator network to produce authentic,
            high-performing video content that drives real business results.
          </p>
          <div class="hero__stats">
            <div class="hero__stat">
              <div class="hero__stat-value">25M+</div>
              <div class="hero__stat-label">Total Views</div>
            </div>
            <div class="hero__stat">
              <div class="hero__stat-value">200+</div>
              <div class="hero__stat-label">Brands</div>
            </div>
            <div class="hero__stat">
              <div class="hero__stat-value">1,488</div>
              <div class="hero__stat-label">Creators</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Cases Grid -->
      <app-section>
        <div class="video-cases">
          <div class="video-case" *ngFor="let caseStudy of caseStudies; let i = index" [class.video-case--featured]="i === 0">
            <div class="video-case__container">
              <video
                #videoElement
                class="video-case__video"
                [src]="caseStudy.video"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
              ></video>
              <div class="video-case__overlay">
                <div class="video-case__content">
                  <span class="video-case__category">{{ caseStudy.category }}</span>
                  <h3 class="video-case__title">{{ caseStudy.title }}</h3>
                  <p class="video-case__brand">{{ caseStudy.brand }}</p>
                  <p class="video-case__description">{{ caseStudy.description }}</p>
                  <div class="video-case__metrics">
                    <div class="video-case__metric">
                      <span class="video-case__metric-icon">👁️</span>
                      <span class="video-case__metric-value">{{ caseStudy.results }}</span>
                    </div>
                    <div class="video-case__metric">
                      <span class="video-case__metric-icon">📈</span>
                      <span class="video-case__metric-value">{{ caseStudy.metric }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-section>

      <!-- Process Section -->
      <app-section [dark]="true">
        <div class="process-section">
          <h2 class="section-title">How We Create Success</h2>
          <p class="section-subtitle">Our proven process for delivering high-performing creator content</p>
          <div class="process-steps">
            <div class="process-step">
              <div class="process-step__number">01</div>
              <h3 class="process-step__title">Brief & Strategy</h3>
              <p class="process-step__description">We work with you to understand your goals, target audience, and key messaging to create a winning content strategy.</p>
            </div>
            <div class="process-step">
              <div class="process-step__number">02</div>
              <h3 class="process-step__title">Creator Matching</h3>
              <p class="process-step__description">Our AI-powered platform matches your brand with the perfect creators based on audience, style, and performance history.</p>
            </div>
            <div class="process-step">
              <div class="process-step__number">03</div>
              <h3 class="process-step__title">Content Creation</h3>
              <p class="process-step__description">Creators produce authentic, engaging content using our AI scripter and best practices from 750+ successful campaigns.</p>
            </div>
            <div class="process-step">
              <div class="process-step__number">04</div>
              <h3 class="process-step__title">Review & Deliver</h3>
              <p class="process-step__description">You review the content, request revisions if needed, and receive final assets ready for distribution across all channels.</p>
            </div>
          </div>
        </div>
      </app-section>

      <!-- FAQ Section -->
      <app-section>
        <div class="faq-section">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Everything you need to know about our case studies and creator campaigns</p>
          <div class="faq-grid">
            <div class="faq-column">
              <div class="faq-item" *ngFor="let faq of leftFaqs; let i = index" [class.faq-item--open]="faq.open">
                <button class="faq-question" (click)="toggleLeftFaq(i)">
                  <span>{{ faq.question }}</span>
                  <span class="faq-icon">{{ faq.open ? '−' : '+' }}</span>
                </button>
                <div class="faq-answer" *ngIf="faq.open">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
            <div class="faq-column">
              <div class="faq-item" *ngFor="let faq of rightFaqs; let i = index" [class.faq-item--open]="faq.open">
                <button class="faq-question" (click)="toggleRightFaq(i)">
                  <span>{{ faq.question }}</span>
                  <span class="faq-icon">{{ faq.open ? '−' : '+' }}</span>
                </button>
                <div class="faq-answer" *ngIf="faq.open">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-section>

      <!-- CTA Section -->
      <app-section [dark]="true">
        <div class="cta-section">
          <h2 class="cta-section__title">Ready to Create Your Success Story?</h2>
          <p class="cta-section__subtitle">Join 200+ brands leveraging creator content to drive results</p>
          <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="btn btn--primary btn--large">
            Start Your Campaign
          </a>
        </div>
      </app-section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements AfterViewInit {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  caseStudies = caseStudies;
  siteConfig = siteConfig;

  ngAfterViewInit(): void {
    // Synchronize all videos to start at the same time and ensure they're muted
    setTimeout(() => {
      const videos = this.videoElements.toArray().map((el: ElementRef<HTMLVideoElement>) => el.nativeElement);

      // Pause all videos first and ensure they're muted
      videos.forEach((video: HTMLVideoElement) => {
        video.pause();
        video.currentTime = 0;
        video.muted = true; // Force mute
        video.volume = 0; // Set volume to 0
      });

      // Play all videos simultaneously
      setTimeout(() => {
        videos.forEach((video: HTMLVideoElement) => {
          video.play().catch((err: any) => console.log('Video autoplay prevented:', err));
        });
      }, 100);
    }, 500);
  }

  leftFaqs = [
    {
      question: 'How long does a typical campaign take?',
      answer: 'Most campaigns take 2-4 weeks from brief to delivery. This includes creator matching, content creation, review, and revisions. Rush campaigns can be completed in 7-10 days with our express service.',
      open: false
    },
    {
      question: 'Can I choose specific creators?',
      answer: 'Yes! You can browse our creator network and select specific creators you\'d like to work with, or let our AI matching system recommend the best creators based on your campaign goals, target audience, and budget.',
      open: false
    },
    {
      question: 'What\'s included in the content rights?',
      answer: 'You receive full commercial usage rights for all content created. Use it across any platform (social media, ads, website, etc.) without restrictions or additional fees. Creators retain portfolio rights only.',
      open: false
    }
  ];

  rightFaqs = [
    {
      question: 'What types of content can creators make?',
      answer: 'Our creators produce product reviews, unboxings, tutorials, testimonials, lifestyle content, app demos, educational videos, and more. All content is optimized for platforms like TikTok, Instagram, YouTube, and Facebook.',
      open: false
    },
    {
      question: 'How do you ensure quality?',
      answer: 'All creators are vetted and trained. We provide AI-powered scripts based on 750+ successful campaigns, offer feedback during creation, and include revision rounds. You approve all content before final delivery.',
      open: false
    },
    {
      question: 'What makes these campaigns successful?',
      answer: 'Authenticity is key. Our creators build genuine trust with their audiences. Combined with data-driven scripts, platform optimization, and native content formats, this drives higher engagement and conversions than traditional ads.',
      open: false
    }
  ];

  toggleLeftFaq(index: number): void {
    this.leftFaqs[index].open = !this.leftFaqs[index].open;
  }

  toggleRightFaq(index: number): void {
    this.rightFaqs[index].open = !this.rightFaqs[index].open;
  }
}

