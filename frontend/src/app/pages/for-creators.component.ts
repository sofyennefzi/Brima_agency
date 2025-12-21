import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { siteConfig, faqsCreators } from '../../config/site';

@Component({
  selector: 'app-for-creators',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="for-creators">
      <section class="hero">
        <div class="hero__container">
          <h1 class="hero__headline">
            <span class="hero__word">Turn your creativity</span>
            <span class="hero__word hero__word--accent">into income</span>
          </h1>
          <p class="hero__subtitle">
            Join our network of professional creators and get paid to create engaging video content for top brands.
          </p>
          <a [routerLink]="siteConfig.externalUrls.creatorSignUp" class="btn btn--primary btn--large">
            Become a Creator
          </a>
        </div>
      </section>

      <app-section [dark]="true">
        <h2 class="section-title">Why Join Our Creator Network?</h2>
        <div class="benefits">
          <div class="benefit">
            <div class="benefit__icon">💰</div>
            <h3>Set Your Own Rates</h3>
            <p>You control your pricing and choose projects that match your expertise and interests.</p>
          </div>
          <div class="benefit">
            <div class="benefit__icon">📅</div>
            <h3>Flexible Schedule</h3>
            <p>Work when you want, where you want. Perfect for full-time creators or side hustlers.</p>
          </div>
          <div class="benefit">
            <div class="benefit__icon">🎯</div>
            <h3>Quality Brands</h3>
            <p>Create content for established brands across various industries and niches.</p>
          </div>
          <div class="benefit">
            <div class="benefit__icon">📈</div>
            <h3>Grow Your Portfolio</h3>
            <p>Build your portfolio and reputation with diverse, high-quality brand collaborations.</p>
          </div>
          <div class="benefit">
            <div class="benefit__icon">🎓</div>
            <h3>Learn & Improve</h3>
            <p>Access educational resources, feedback, and tips to level up your creator skills.</p>
          </div>
          <div class="benefit">
            <div class="benefit__icon">🤝</div>
            <h3>Dedicated Support</h3>
            <p>Our creator support team is here to help you succeed and resolve any issues quickly.</p>
          </div>
        </div>
      </app-section>

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

      <app-section [dark]="true">
        <div class="support">
          <h2>Need Help Getting Started?</h2>
          <p>Our creator support team is ready to answer your questions.</p>
          <div class="support__links">
            <a [href]="'mailto:' + siteConfig.contact.creatorSupportEmail" class="btn btn--secondary">
              Email Support
            </a>
            <a [href]="siteConfig.contact.whatsappLink" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">
              WhatsApp Us
            </a>
          </div>
        </div>
      </app-section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./for-creators.component.scss']
})
export class ForCreatorsComponent {
  siteConfig = siteConfig;
  faqs = faqsCreators.map(faq => ({ ...faq, open: false }));

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}

