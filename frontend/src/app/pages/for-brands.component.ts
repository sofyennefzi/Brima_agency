import { Component } from '@angular/core';
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

      <!-- Studios Section -->
      <app-section [dark]="true" id="studios">
        <h2 class="section-title">Tailored Video Solutions</h2>
        <div class="studios">
          <div class="studio-card">
            <h3>Product Studios</h3>
            <p>Professional product videos, unboxings, and reviews optimized for e-commerce and social media.</p>
          </div>
          <div class="studio-card">
            <h3>Brand Storytelling</h3>
            <p>Authentic creator content that builds trust and connection with your target audience.</p>
          </div>
          <div class="studio-card">
            <h3>Performance Marketing</h3>
            <p>Data-driven video ads created and tested by creators who understand what converts.</p>
          </div>
        </div>
      </app-section>

      <!-- Brand Logos -->
      <app-section>
        <h2 class="section-title">Trusted by Leading Brands</h2>
        <div class="brand-logos">
          <div class="brand-logo" *ngFor="let brand of brandLogos">
            <div class="brand-logo__placeholder">{{ brand.name }}</div>
          </div>
        </div>
      </app-section>

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
export class ForBrandsComponent {
  siteConfig = siteConfig;
  brandLogos = brandLogos;
  faqs = faqsBrands.map(faq => ({ ...faq, open: false }));

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}

