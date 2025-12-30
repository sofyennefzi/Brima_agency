import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="home">
      <!-- Hero Section - Full Screen Video Background -->
      <section class="hero">
        <!-- Video Background -->
        <video
          class="hero__video-bg"
          src="assets/videos/main.mp4"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
        ></video>

        <!-- Dark Overlay -->
        <div class="hero__overlay"></div>

        <!-- Centered Content -->
        <div class="hero__content">
          <div class="hero__avatar">
            <img src="assets/images/logo-white.png" alt="Brima" class="hero__avatar-img" />
          </div>

          <h1 class="hero__headline">
            Connecting Talent to <span class="hero__highlight">Real Opportunities</span>
          </h1>

          <p class="hero__description">
            BRIMA empowers you to showcase your story, connect with clients, and position your creativity at the center of impactful marketing stories.
          </p>
        </div>
      </section>

      <!-- Create Collaborate Strip -->
      <section class="collaborate-strip">
        <div class="collaborate-strip__container">
          <h2 class="collaborate-strip__title">CREATE, COLLABORATE AND HELP BRANDS TELLING THEIR STORIES!</h2>
          <div class="collaborate-strip__tagline">
            <p>Every brand has a story, that deserves to be heard.</p>
          </div>
        </div>
      </section>

      <!-- Video Showcase Grid -->
      <section class="videos-section">
        <div class="videos-container">
          <div class="video-card" *ngFor="let v of videos">
            <video
              #videoElement
              class="video-card__video"
              [src]="v.src"
              muted
              autoplay
              loop
              playsinline
              preload="auto"
            ></video>
          </div>
        </div>
      </section>

      <!-- Brand Logos Bar -->
      <section class="brand-logos-bar">
        <div class="brand-logos-bar__container">
          <div class="brand-logos-bar__scroll">
            <img *ngFor="let brand of brandLogos" [src]="brand.src" [alt]="brand.alt" class="brand-logos-bar__logo" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- For Content Creators Section -->
      <section class="creators-section">
        <!-- Floating Ambassador Images -->
        <img src="assets/ambassadors picture/Arwa TIOUAJNI.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--top-left" />
        <img src="assets/ambassadors picture/emna kaaniche.png" alt="Ambassador" class="floating-ambassador floating-ambassador--top-right" />
        <img src="assets/ambassadors picture/IMG_7863.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--left" />
        <img src="assets/ambassadors picture/Arwa TIOUAJNI.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--right" />
        <img src="assets/ambassadors picture/emna kaaniche.png" alt="Ambassador" class="floating-ambassador floating-ambassador--bottom-left" />
        <img src="assets/ambassadors picture/IMG_7863.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--bottom-right" />

        <div class="creators-section__container">
          <h2 class="creators-section__title">
            FOR CONTENT <span class="creators-section__title-highlight">CREATORS</span>
          </h2>
          <p class="creators-section__subtitle">
            We welcome gifted individuals into our exclusive network and access real collaboration opportunities with brands and marketing campaigns.
          </p>
          <div class="creators-section__separator"></div>
          <div class="creators-section__cards">
            <div class="creator-card">
              <div class="creator-card__icon">🤝</div>
              <h3 class="creator-card__title">You start with connection</h3>
              <p class="creator-card__text">Become part of a growing creative community.</p>
            </div>
            <div class="creator-card">
              <div class="creator-card__icon">✨</div>
              <h3 class="creator-card__title">It's Matching Time</h3>
              <p class="creator-card__text">We align your creativity with the right brands.</p>
            </div>
            <div class="creator-card">
              <div class="creator-card__icon">🚀</div>
              <h3 class="creator-card__title">Real Action now</h3>
              <p class="creator-card__text">You take part in real marketing projects.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- For Brands and Agencies Section -->
      <section class="brands-section">
        <div class="brands-section__container">
          <h2 class="brands-section__title">FOR BRANDS AND AGENCIES</h2>
          <p class="brands-section__subtitle">
            Brima connects brands, startups, and agencies with exceptional creators who perfectly align with your vision, ready to elevate your projects and campaigns.
          </p>
          <div class="brands-section__services">
            <div class="service-item">
              <span class="service-item__number">01</span>
              <p class="service-item__text">Direct creator-client connections</p>
            </div>
            <div class="service-item">
              <span class="service-item__number">02</span>
              <p class="service-item__text">Integrated content into marketing campaigns</p>
            </div>
            <div class="service-item">
              <span class="service-item__number">03</span>
              <p class="service-item__text">Talent sourcing for events, ads, and content production</p>
            </div>
            <div class="service-item">
              <span class="service-item__number">04</span>
              <p class="service-item__text">Strategic creator-based storytelling</p>
            </div>
          </div>
          <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="brands-section__cta">
            Book a Call
          </a>
        </div>
      </section>

      <!-- Final Statement Strip -->
      <section class="final-statement">
        <div class="final-statement__container">
          <h2 class="final-statement__text">Relax.. We take care of it.</h2>
        </div>
      </section>


      <!-- FAQ Section -->
      <section class="faq-section">
        <h2 class="section-title">Frequently asked questions</h2>
        <div class="faq-grid">
          <!-- Left Column -->
          <div class="faq-column">
            <div class="faq__item" *ngFor="let faq of leftFaqs; let i = index" [class.faq__item--open]="faq.open">
              <button class="faq__question" (click)="toggleLeftFaq(i)">
                <span>{{ faq.question }}</span>
                <span class="faq__icon">{{ faq.open ? '−' : '+' }}</span>
              </button>
              <div class="faq__answer" *ngIf="faq.open">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="faq-column">
            <div class="faq__item" *ngFor="let faq of rightFaqs; let i = index" [class.faq__item--open]="faq.open">
              <button class="faq__question" (click)="toggleRightFaq(i)">
                <span>{{ faq.question }}</span>
                <span class="faq__icon">{{ faq.open ? '−' : '+' }}</span>
              </button>
              <div class="faq__answer" *ngIf="faq.open">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="final-cta-section">
        <h2 class="final-cta__title">Join the Brima Agency way</h2>
        <div class="final-cta__buttons">
          <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="final-cta__button final-cta__button--primary">
            Become a Brand
          </a>
          <a [routerLink]="siteConfig.externalUrls.creatorSignUp" class="final-cta__button final-cta__button--secondary">
            Become a Creator
          </a>
        </div>
      </section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  siteConfig = siteConfig;

  brandLogos = [
    { src: 'assets/brand/5.png', alt: 'Brand 5' },
    { src: 'assets/brand/6.png', alt: 'Brand 6' },
    { src: 'assets/brand/8.png', alt: 'Brand 8' },
    { src: 'assets/brand/9.png', alt: 'Brand 9' },
    { src: 'assets/brand/12.png', alt: 'Brand 12' },
    { src: 'assets/brand/13.png', alt: 'Brand 13' },
  ];

  videos = [
    { src: 'assets/videos/Jannah.mp4', title: 'Jannah' },
    { src: 'assets/videos/sidi-bou.mov', title: 'Sidi Bou' },
    { src: 'assets/videos/Offtopic.mov', title: 'Offtopic' },
    { src: 'assets/videos/video4.mp4', title: 'Video 4' },
    { src: 'assets/videos/video5.mp4', title: 'Video 5' },
  ];

  leftFaqs = [
    { question: 'Who is responsible for creating the content?', answer: 'Our network of professional creators produce all content based on your brief and requirements.', open: false },
    { question: 'What are the benefits with managed service?', answer: 'With managed service, we handle the entire campaign process, saving you time while ensuring quality results.', open: false },
    { question: 'Do I get AI created videos or stock images?', answer: 'No, all content is created by real creators. Our AI tools assist with scripting and optimization.', open: false }
  ];

  rightFaqs = [
    { question: 'What happens if the creators don\'t deliver the content?', answer: 'We have quality guarantees and backup creators to ensure your content is delivered on time.', open: false },
    { question: 'Can I use the content for commercial purposes?', answer: 'Yes, you receive full commercial usage rights for all content created through our platform.', open: false },
    { question: 'What if I have more questions? How can I contact Brima Agency?', answer: 'You can reach us via email at hello@brimaagency.io or through WhatsApp for immediate assistance.', open: false }
  ];

  ngAfterViewInit(): void {
    // Force all videos to play after view is initialized
    setTimeout(() => {
      this.videoElements.forEach((videoRef) => {
        const video = videoRef.nativeElement;
        video.muted = true; // Ensure muted
        video.play().catch((error) => {
          console.log('Video autoplay failed:', error);
          // Retry playing on user interaction
          document.addEventListener('click', () => {
            video.play().catch(() => {});
          }, { once: true });
        });
      });
    }, 100);
  }

  toggleLeftFaq(index: number): void {
    this.leftFaqs[index].open = !this.leftFaqs[index].open;
  }

  toggleRightFaq(index: number): void {
    this.rightFaqs[index].open = !this.rightFaqs[index].open;
  }
}
