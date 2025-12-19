import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { caseStudies } from '../../config/site';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="cases">
      <section class="hero">
        <div class="hero__container">
          <h1 class="hero__headline">Case Studies</h1>
          <p class="hero__subtitle">Real results from real campaigns with our creator network</p>
        </div>
      </section>

      <app-section>
        <div class="cases-grid">
          <div class="case-card" *ngFor="let case of caseStudies">
            <div class="case-card__image">
              <div class="case-card__placeholder">{{ case.brand }}</div>
            </div>
            <div class="case-card__content">
              <h3 class="case-card__title">{{ case.title }}</h3>
              <p class="case-card__brand">{{ case.brand }}</p>
              <p class="case-card__description">{{ case.description }}</p>
              <div class="case-card__results">
                <strong>Results:</strong> {{ case.results }}
              </div>
            </div>
          </div>
        </div>
        <p class="swipe-hint">← Swipe for more →</p>
      </app-section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  caseStudies = caseStudies;
}

