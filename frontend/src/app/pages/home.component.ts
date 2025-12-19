import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero__container">
          <p class="hero__tagline">Over 200 Brands work with us. Are you the next?</p>

          <!-- Brand Logos -->
          <div class="hero__brands">
            <img *ngFor="let brand of brands" [src]="brand.src" [alt]="brand.alt" class="hero__brand-logo" loading="lazy" />
          </div>

          <h1 class="hero__headline">
            <span class="hero__line">Create impact</span>
            <span class="hero__line">with creators.</span>
          </h1>
          <p class="hero__description">The everything platform for videos</p>
          <a [href]="siteConfig.externalUrls.brandSignUp" class="hero__cta" target="_blank" rel="noopener noreferrer">
            Become a Brand
          </a>
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

      <!-- Features Section -->
      <section class="features-section">
        <h2 class="section-title">Features that bring your vision to life</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-card__number">[ 01 ]</div>
            <h3 class="feature-card__title">7+ LANGUAGES</h3>
            <p class="feature-card__description">
              Discover a wide range of languages and work with native speaking creators based all over the world.
            </p>
            <a href="#" class="feature-card__link">Choose your language →</a>
          </div>

          <div class="feature-card">
            <div class="feature-card__number">[ 02 ]</div>
            <h3 class="feature-card__title">100% CUSTOMIZEABLE CREATIONS</h3>
            <p class="feature-card__description">
              Take full control of your videos with custom briefings and an easy way to communicate with creators. Everything on one platform.
            </p>
            <a href="#" class="feature-card__link">Create and customize →</a>
          </div>

          <div class="feature-card">
            <div class="feature-card__number">[ 03 ]</div>
            <h3 class="feature-card__title">AI SCRIPTER</h3>
            <p class="feature-card__description">
              Discover the latest version of our AI-generated scripter. Create performing scripts using data from over 750 campaigns.
            </p>
            <a href="#" class="feature-card__link">Work smarter with our scripter →</a>
          </div>

          <div class="feature-card">
            <div class="feature-card__number">[ 04 ]</div>
            <h3 class="feature-card__title">MANAGED SERVICE</h3>
            <p class="feature-card__description">
              Let us handle your next campaign with our managed service, giving you back the most valuable thing - your time.
            </p>
            <a href="#" class="feature-card__link">Save more time →</a>
          </div>
        </div>
      </section>


      <!-- Second Testimonial -->
      <section class="testimonial-section">
        <div class="testimonial">
          <blockquote class="testimonial__quote">
            "Brima Agency is the platform for connecting your brand with creators, globally and sets a new standard for content creation."
          </blockquote>
          <div class="testimonial__author">
            <strong>Dhia Mazhoud</strong>
            <span>Entrepreneur</span>
          </div>
        </div>
      </section>

      <!-- Brand Trust CTA -->
      <section class="brand-trust-section">
        <h2 class="brand-trust__title">120+ Brands already use our platform!</h2>
        <a [href]="siteConfig.externalUrls.brandSignUp" class="brand-trust__button" target="_blank" rel="noopener noreferrer">
          Become a Brand
        </a>
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
          <a [href]="siteConfig.externalUrls.brandSignUp" class="final-cta__button final-cta__button--primary" target="_blank" rel="noopener noreferrer">
            Become a Brand
          </a>
          <a [href]="siteConfig.externalUrls.creatorSignUp" class="final-cta__button final-cta__button--secondary" target="_blank" rel="noopener noreferrer">
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

  brands = [
    { src: 'assets/images/brand1.jpg', alt: 'Brand 1' },
    { src: 'assets/images/brand2.jpg', alt: 'Brand 2' },
    { src: 'assets/images/brand3.jpg', alt: 'Brand 3' },
    { src: 'assets/images/brand4.jpg', alt: 'Brand 4' },
    { src: 'assets/images/brand5.jpg', alt: 'Brand 5' },
  ];

  videos = [
    { src: 'assets/videos/video1.mp4', title: 'Video 1' },
    { src: 'assets/videos/video2.mp4', title: 'Video 2' },
    { src: 'assets/videos/video3.mp4', title: 'Video 3' },
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
