import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
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
      <!-- Hero Section - Solid Background (No Video) -->
      <section class="hero">
        <!-- Bottom Gradient Transition -->
        <div class="hero__gradient-transition"></div>

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

      <!-- Video Showcase Grid -->
      <section class="videos-section">
                <div class="collaborate-strip__container">
          <h2 class="collaborate-strip__title">Create, Collaborate And Help Brands Telling Their Stories!</h2>
        </div>
        <div class="videos-container">
          <div class="video-card" *ngFor="let v of videos; let i = index">
            <video
              #videoElement
              class="video-card__video"
              [src]="v.src"
              [title]="v.title"
              muted
              autoplay
              loop
              playsinline
              preload="auto"
              (error)="onVideoError($event, i)"
              (loadeddata)="onVideoLoaded($event, i)"
            ></video>
          </div>
        </div>
      </section>
      <!-- Brand Story Tagline -->
      <section class="brand-story-strip">
        <div class="brand-story-strip__container">
          <p class="brand-story-strip__tagline">
            Every brand has a <span class="brand-story-strip__accent">story</span>, that deserves to <span class="brand-story-strip__accent">be heard</span>.
          </p>
        </div>
      </section>
      <!-- Brand Logos Bar -->
      <section class="brand-logos-bar">
        <div class="brand-logos-bar__container">
          <div class="brand-logos-bar__scroll">
            <img *ngFor="let brand of brandLogos" [src]="brand.src" [alt]="brand.alt" class="brand-logos-bar__logo" loading="lazy" />
            <img *ngFor="let brand of brandLogos" [src]="brand.src" [alt]="brand.alt" class="brand-logos-bar__logo" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- For Content Creators Section -->
      <section class="creators-section">
        <!-- Floating Ambassador Images (8 avatars around edges) -->
        <img src="assets/ambassadors picture/Arwa TIOUAJNI.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--1" />
        <img src="assets/ambassadors picture/emna kaaniche.png" alt="Ambassador" class="floating-ambassador floating-ambassador--2" />
        <img src="assets/ambassadors picture/IMG_7863.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--3" />
        <img src="assets/ambassadors picture/eya.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--4" />
        <img src="assets/ambassadors picture/helmi.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--5" />
        <img src="assets/ambassadors picture/mazhoud.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--6" />
        <img src="assets/ambassadors picture/Arwa TIOUAJNI.jpg" alt="Ambassador" class="floating-ambassador floating-ambassador--7" />
        <img src="assets/ambassadors picture/emna kaaniche.png" alt="Ambassador" class="floating-ambassador floating-ambassador--8" />

        <div class="creators-section__container">
          <!-- Title -->
          <h2 class="creators-section__title">
            FOR CONTENT <span class="creators-section__title-highlight">CREATORS</span>
          </h2>

          <!-- Subtitle -->
          <p class="creators-section__subtitle">
            We welcome gifted individuals into our exclusive network and access real collaboration opportunities with brands and marketing campaigns.
          </p>


          <!-- 3-Step Process (Horizontal Row with Timeline) -->
          <div class="creators-section__steps">
            <!-- Horizontal Timeline -->
            <div class="creators-timeline"></div>

            <!-- Step 1: Connection (with social icons) -->
            <div class="creator-step">
              <div class="creator-step__icon-wrapper">
                <!-- Social Media Icons Group -->
                <div class="creator-step__social-group">
                  <div class="social-icon social-icon--facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div class="social-icon social-icon--instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div class="social-icon social-icon--tiktok">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 class="creator-step__title">You start with connection</h3>
              <p class="creator-step__text">Become part of a growing creative community.</p>
            </div>

            <!-- Step 2: Matching (with cyan badge) -->
            <div class="creator-step">
              <div class="creator-step__icon-wrapper">
                <div class="creator-step__timeline-badge">
                  <svg class="timeline-badge__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
              </div>
              <h3 class="creator-step__title">It's Matching Time</h3>
              <p class="creator-step__text">We align your creativity with the right brands.</p>
            </div>

            <!-- Step 3: Action (with cyan badge) -->
            <div class="creator-step">
              <div class="creator-step__icon-wrapper">
                <div class="creator-step__timeline-badge">
                  <svg class="timeline-badge__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
              </div>
              <h3 class="creator-step__title">Real Action now</h3>
              <p class="creator-step__text">You take part in real marketing projects.</p>
            </div>
          </div>

          <!-- CTA Button (Centered) -->
          <div class="creators-section__cta">
            <a [routerLink]="siteConfig.externalUrls.creatorSignUp" class="creators-cta-button">
              <span class="creators-cta-button__text">Join the Network</span>
              <svg class="creators-cta-button__icon" width="20" height="20" viewBox="0 0 20 20">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- For Brands and Agencies Section -->
      <section class="brands-section">
        <!-- Section Title (Above Everything) -->
        <h2 class="brands-section__main-title">FOR BRANDS AND AGENCIES</h2>

        <div class="brands-section__container">
          <!-- Left Column: Video -->
          <div class="brands-section__video-block">
            <div class="brands-video-wrapper">
              <video
                #brandsVideo
                class="brands-video"
                src="assets/videos/main.mp4"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
              ></video>
              <div class="brands-video__overlay" (click)="toggleBrandsVideo()">
                <button class="brands-video__play-btn" [class.brands-video__play-btn--playing]="brandsVideoPlaying">
                  <svg *ngIf="!brandsVideoPlaying" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <svg *ngIf="brandsVideoPlaying" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="brands-section__content-block">
            <p class="brands-section__subtitle">
              Brima connects brands, startups, and agencies with exceptional creators who perfectly align with your vision, ready to elevate your projects and campaigns.
            </p>

            <!-- Service List -->
            <div class="brands-section__services">
              <div class="service-item" *ngFor="let service of brandServices; let i = index" [style.animation-delay.ms]="i * 100">
                <div class="service-item__badge">{{ service.number }}</div>
                <p class="service-item__text">{{ service.text }}</p>
              </div>
            </div>

            <!-- CTA Button -->
            <a [routerLink]="siteConfig.externalUrls.brandSignUp" class="brands-section__cta">
              Book a Call
            </a>
          </div>
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
        <h2 class="final-cta__title">Join the Brima Digital way</h2>
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
  @ViewChild('brandsVideo') brandsVideoRef!: ElementRef<HTMLVideoElement>;

  siteConfig = siteConfig;
  brandsVideoPlaying = true;

  brandServices = [
    { number: '01', text: 'Direct creator-client connections' },
    { number: '02', text: 'Integrated content into marketing campaigns' },
    { number: '03', text: 'Talent sourcing for events, ads, and content production' },
    { number: '04', text: 'Strategic creator-based storytelling' }
  ];

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
    { src: 'assets/videos/video8.mp4', title: 'Video 8' },
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
      this.videoElements.forEach((videoRef, index) => {
        const video = videoRef.nativeElement;

        // Ensure video attributes are set
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        video.autoplay = true;

        // Load the video
        video.load();

        // Try to play
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log(`Video ${index + 1} playing successfully`);
            })
            .catch((error) => {
              console.warn(`Video ${index + 1} autoplay failed:`, error);

              // Retry playing on user interaction
              const retryPlay = () => {
                video.play().then(() => {
                  console.log(`Video ${index + 1} started after user interaction`);
                }).catch(() => {
                  console.error(`Video ${index + 1} still failed to play`);
                });
              };

              document.addEventListener('click', retryPlay, { once: true });
              document.addEventListener('touchstart', retryPlay, { once: true });
            });
        }
      });
    }, 300);
  }

  toggleLeftFaq(index: number): void {
    this.leftFaqs[index].open = !this.leftFaqs[index].open;
  }

  toggleRightFaq(index: number): void {
    this.rightFaqs[index].open = !this.rightFaqs[index].open;
  }

  onVideoError(event: Event, index: number): void {
    const video = event.target as HTMLVideoElement;
    const videoInfo = this.videos[index];
    console.error(`❌ Video ${index + 1} failed to load:`, videoInfo.src);
    console.error('Error details:', video.error);

    // Log the specific error type
    if (video.error) {
      switch (video.error.code) {
        case 1:
          console.error('MEDIA_ERR_ABORTED: Video loading was aborted');
          break;
        case 2:
          console.error('MEDIA_ERR_NETWORK: Network error while loading video');
          break;
        case 3:
          console.error('MEDIA_ERR_DECODE: Video format not supported or corrupted');
          break;
        case 4:
          console.error('MEDIA_ERR_SRC_NOT_SUPPORTED: Video format/codec not supported by browser');
          console.error('⚠️ This usually means the video format is incompatible (e.g., AVI files)');
          break;
      }
    }
  }

  onVideoLoaded(event: Event, index: number): void {
    const videoInfo = this.videos[index];
    console.log(`✅ Video ${index + 1} loaded successfully:`, videoInfo.title);
  }

  toggleBrandsVideo(): void {
    const video = this.brandsVideoRef?.nativeElement;
    if (!video) return;

    if (this.brandsVideoPlaying) {
      video.pause();
      this.brandsVideoPlaying = false;
    } else {
      video.play();
      this.brandsVideoPlaying = true;
    }
  }
}
