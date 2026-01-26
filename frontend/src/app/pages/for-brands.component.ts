import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { siteConfig, brandLogos, faqsBrands } from '../../config/site';

@Component({
  selector: 'app-for-brands',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="for-brands">
      <!-- Hero -->
      <section class="hero">
        <div class="hero__container">
          <h1 class="hero__headline">
            <span class="hero__word">Scale your brand</span>
            <span class="hero__word hero__word--accent">with creator content</span>
          </h1>
          <p class="hero__subtitle">
            Access a network of professional creators and AI-powered tools to produce high-performing video content at scale.
          </p>
          <div class="hero__cta-buttons">
            <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="btn btn--primary">
              Become a Brand
            </a>
            <a href="#studios" class="btn btn--secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <!-- UGC Impact Section -->
      <section class="ugc-impact">
        <div class="ugc-impact__container">
          <div class="ugc-impact__header">
            <h2 class="ugc-impact__title">Let UGC Drive Your Brand’s Success</h2>
            <p class="ugc-impact__subtitle">INCREASE TRUST, SALES, AND ENGAGEMENT</p>
          </div>

          <div class="ugc-impact__grid">
            <div class="ugc-stat">
              <div class="ugc-stat__value">28%</div>
              <div class="ugc-stat__label">Boost in Social Media Engagement with UGC</div>
            </div>

            <div class="ugc-stat">
              <div class="ugc-stat__value">92%</div>
              <div class="ugc-stat__label">of consumers trust UGC over traditional advertising</div>
            </div>

            <div class="ugc-stat">
              <div class="ugc-stat__value">62%</div>
              <div class="ugc-stat__label">More Likely to Buy When Seeing User-Generated Content</div>
            </div>
          </div>

          <div class="ugc-impact__cta">
            <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="btn btn--primary">Start now</a>
          </div>
        </div>
      </section>

      <!-- All-in-one UGC Solution -->
      <section class="ugc-solution">
        <div class="ugc-solution__container">
          <div class="ugc-solution__content">
            <p class="ugc-solution__eyebrow">YOUR ALL-IN-ONE SOLUTION FOR UGC CAMPAIGNS</p>
            <h2 class="ugc-solution__title">Everything you need to launch, manage, and scale creator campaigns</h2>

            <div class="ugc-solution__features">
              <div class="ugc-feature">
                <div class="ugc-feature__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div class="ugc-feature__body">
                  <h3 class="ugc-feature__title">Authentic Engagement</h3>
                  <p class="ugc-feature__text">Work with creators to develop content that connects with your audience.</p>
                </div>
              </div>

              <div class="ugc-feature">
                <div class="ugc-feature__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div class="ugc-feature__body">
                  <h3 class="ugc-feature__title">Easy Campaign Management</h3>
                  <p class="ugc-feature__text">Simplify your campaign management from brief creation to final approval.</p>
                </div>
              </div>

              <div class="ugc-feature">
                <div class="ugc-feature__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div class="ugc-feature__body">
                  <h3 class="ugc-feature__title">Secure Payments</h3>
                  <p class="ugc-feature__text">Easily recharge your balance and make secure payments to creators.</p>
                </div>
              </div>

              <div class="ugc-feature">
                <div class="ugc-feature__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div class="ugc-feature__body">
                  <h3 class="ugc-feature__title">Measurable Results</h3>
                  <p class="ugc-feature__text">Track performance and optimize your content pipeline with clear reporting.</p>
                </div>
              </div>
            </div>

            <div class="ugc-solution__cta">
              <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="btn btn--primary">Start now</a>
              <a href="#studios" class="btn btn--secondary">See services</a>
            </div>
          </div>

          <div class="ugc-solution__media">
            <div class="ugc-solution__video-card">
              <video
                class="ugc-solution__video"
                src="assets/videos/Jannah.mp4"
                autoplay
                loop
                muted
                playsinline
              ></video>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Section with Scroll Animation -->
      <section class="platform-section" #platformSection>
        <div class="platform-section__container">
          <div class="platform-section__content">
            <div class="platform-section__text">
              <p class="platform-section__quote">
                <span class="word" *ngFor="let word of quoteWords; let i = index" [style.animation-delay]="(i * 0.1) + 's'">
                  {{ word }}
                </span>
              </p>
            </div>
            <div class="platform-section__image animate-on-scroll">
              <img src="assets/images/slogan-white.png" alt="Brima Digital Slogan" class="platform-section__slogan" />
            </div>
          </div>
        </div>
      </section>

      <!-- Brand Logos Section -->
      <section class="brand-logos-section">
        <div class="brand-logos-section__container">
          <h2 class="brand-logos-section__title">Trusted by Leading Brands</h2>
          <div class="brand-logos-bar">
            <div class="brand-logos-bar__scroll">
              <img *ngFor="let brand of displayBrandLogos" [src]="brand.src" [alt]="brand.alt" class="brand-logos-bar__logo" loading="lazy" />
              <img *ngFor="let brand of displayBrandLogos" [src]="brand.src" [alt]="brand.alt" class="brand-logos-bar__logo" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


      <!-- FAQ -->
      <app-section [dark]="true">
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
      <app-section>
        <div class="final-cta">
          <h2 class="final-cta__title">Join the {{ siteConfig.name }} way</h2>
          <p class="final-cta__subtitle">Start creating content that drives results</p>
          <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="btn btn--primary btn--large">
            Become a Brand
          </a>
        </div>
      </app-section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./for-brands.component.scss']
})
export class ForBrandsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('platformSection') platformSection!: ElementRef;

  siteConfig = siteConfig;
  brandLogos = brandLogos;
  faqs = faqsBrands.map(faq => ({ ...faq, open: false }));
  private observer?: IntersectionObserver;

  quoteText = "This platform is a must if you need creator made videos enhanced with ultimate AI-Tools.";
  quoteWords: string[] = [];

  displayBrandLogos = [
    { src: 'assets/brand/5.png', alt: 'Brand 5' },
    { src: 'assets/brand/6.png', alt: 'Brand 6' },
    { src: 'assets/brand/8.png', alt: 'Brand 8' },
    { src: 'assets/brand/9.png', alt: 'Brand 9' },
    { src: 'assets/brand/12.png', alt: 'Brand 12' },
    { src: 'assets/brand/13.png', alt: 'Brand 13' },
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
      threshold: 0.2,
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
          // Animate in when scrolling into view
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('is-visible');
            }, index * 100);
          });
        } else {
          // Reset animation when scrolling out of view
          words.forEach((word) => {
            word.classList.remove('is-visible');
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px'
    });

    if (this.platformSection) {
      textObserver.observe(this.platformSection.nativeElement);
    }
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
