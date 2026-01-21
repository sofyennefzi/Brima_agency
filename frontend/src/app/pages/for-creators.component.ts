import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { CommunitySectionComponent } from '../components/community-section/community-section.component';
import { siteConfig, faqsCreators } from '../../config/site';

@Component({
  selector: 'app-for-creators',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, SectionComponent, CommunitySectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="for-creators">
      <!-- Hero -->
      <section class="hero">
        <div class="hero__container">
          <h1 class="hero__headline">
            <span class="hero__word">Ready to showcase</span>
            <span class="hero__word hero__word--accent">your talent?</span>
          </h1>
          <p class="hero__subtitle">
            Designers, videographers, musicians, athletes, and creators of all kinds, Brima is your spot.
          </p>
          <div class="hero__cta-buttons">
            <a [routerLink]="siteConfig.externalUrls.creatorSignUp" class="btn btn--primary btn--large">
              Become a Creator
            </a>
            <a href="#benefits" class="btn btn--secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <!-- Animated Quote Section -->
      <section class="quote-section" #quoteSection>
        <div class="quote-section__container">
          <div class="quote-section__content">
            <div class="quote-section__text">
              <p class="quote-section__quote">
                <span class="word" *ngFor="let word of quoteWords; let i = index">
                  {{ word }}
                </span>
              </p>
            </div>
            <div class="quote-section__image animate-on-scroll">
              <img src="assets/images/logo-white.png" alt="Brima Digital" class="quote-section__logo" />
            </div>
          </div>
        </div>
      </section>

      <!-- Why Creators Love Us -->
      <section class="video-hero">
        <div class="video-hero__container">
          <h1 class="video-hero__headline">
            Create <span class="video-hero__gradient">videos</span> for brands.
          </h1>
          <div class="video-hero__videos">
            <div class="video-hero__card" *ngFor="let video of heroVideos">
              <video
                class="video-hero__video"
                [src]="video"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
              ></video>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Stats with Scroll Animation -->
      <section class="stats-showcase" #statsSection>
        <div class="stats-showcase__container">
          <h2 class="stats-showcase__title">Creator Platform Stats</h2>
          <div class="stats-showcase__grid">
            <div class="stat-card animate-on-scroll" *ngFor="let stat of stats; let i = index" [style.animation-delay]="(i * 0.15) + 's'">
              <div class="stat-card__value">{{ stat.value }}</div>
              <div class="stat-card__label">{{ stat.label }}</div>
              <div class="stat-card__description">{{ stat.description }}</div>
            </div>
          </div>
        </div>
      </section>


      <!-- How It Works -->
      <app-section [dark]="true">
        <h2 class="section-title">How it works</h2>
        <div class="steps">
          <div class="step animate-on-scroll" *ngFor="let step of steps; let i = index" [style.animation-delay]="(i * 0.15) + 's'">
            <div class="step__number">{{ i + 1 }}</div>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__description">{{ step.description }}</p>
          </div>
        </div>
      </app-section>

      <!-- Community Section -->
      <app-community-section></app-community-section>

      <!-- FAQ -->
      <app-section>
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq">
          <div class="faq__item" *ngFor="let faq of faqs; let i = index" [class.faq__item--open]="faq.open">
            <button class="faq__question" (click)="toggleFaq(i)">
              <span>{{ faq.question }}</span>
              <svg class="faq__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
            <div class="faq__answer" *ngIf="faq.open">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </app-section>

      <!-- Final CTA -->
      <app-section [dark]="true">
        <div class="final-cta">
          <h2 class="final-cta__title">Ready to start earning?</h2>
          <p class="final-cta__subtitle">Join {{ stats[1].value }} creators already making money on our platform</p>
          <div class="final-cta__support">
            <p>Need help? Contact our creator support team</p>
            <div class="final-cta__links">
              <a [href]="'mailto:' + siteConfig.contact.creatorSupportEmail" class="btn btn--secondary btn--small">
                Email Support
              </a>
              <a [href]="siteConfig.contact.whatsappLink" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--small">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </app-section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./for-creators.component.scss']
})
export class ForCreatorsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('quoteSection') quoteSection!: ElementRef;
  @ViewChild('statsSection') statsSection!: ElementRef;

  siteConfig = siteConfig;
  faqs = faqsCreators.map(faq => ({ ...faq, open: false }));
  private observer?: IntersectionObserver;

  quoteText = "Join 1,400+ creators earning $150-$500 per video while building your portfolio with top brands.";
  quoteWords: string[] = [];

  heroVideos = [
    'assets/videos/video4.mp4',
    'assets/videos/video5.mp4',
    'assets/videos/video6.mp4',
    'assets/videos/Jannah.mp4',
    'assets/videos/sidi-bou.mov'
  ];

  stats = [
    {
      value: '$2.5M+',
      label: 'Paid to Creators',
      description: 'Total earnings distributed'
    },
    {
      value: '1,488',
      label: 'Active Creators',
      description: 'Growing community'
    },
    {
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Creator satisfaction'
    },
    {
      value: '200+',
      label: 'Brand Partners',
      description: 'Diverse opportunities'
    }
  ];

  steps = [
    {
      title: 'Apply & Get Approved',
      description: 'Submit your application with portfolio examples. Our team reviews and approves creators within 48 hours.'
    },
    {
      title: 'Browse Projects',
      description: 'Access our project marketplace. Choose brands and campaigns that match your style and interests.'
    },
    {
      title: 'Create Content',
      description: 'Use our AI tools and guidelines to create high-quality content. Get support from our team throughout.'
    },
    {
      title: 'Get Paid Fast',
      description: 'Submit your content for approval. Once approved, receive payment within 48 hours via your preferred method.'
    }
  ];

  constructor() {
    this.quoteWords = this.quoteText.split(' ');
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
    this.initTextAnimation();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initScrollAnimations(): void {
    const options = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      if (this.observer) {
        this.observer.observe(el);
      }
    });
  }

  private initTextAnimation(): void {
    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const words = entry.target.querySelectorAll('.word');

        if (entry.isIntersecting) {
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('is-visible');
            }, index * 80);
          });
        } else {
          words.forEach((word) => {
            word.classList.remove('is-visible');
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px'
    });

    if (this.quoteSection) {
      textObserver.observe(this.quoteSection.nativeElement);
    }
  }


  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}

