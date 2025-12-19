import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { jobs, siteConfig } from '../../config/site';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="career">
      <section class="hero">
        <div class="hero__container">
          <h1 class="hero__headline">Join Our Team</h1>
          <blockquote class="hero__quote">
            "We're building the future of creator-driven content marketing. Join us in empowering brands and creators worldwide."
          </blockquote>
          <p class="hero__author">— Founder, {{ siteConfig.name }}</p>
        </div>
      </section>

      <app-section [dark]="true">
        <h2 class="section-title">Open Positions</h2>
        <div class="jobs">
          <div class="job-card" *ngFor="let job of jobs">
            <div class="job-card__header">
              <div>
                <h3 class="job-card__title">{{ job.title }}</h3>
                <div class="job-card__meta">
                  <span class="job-card__workload">{{ job.workload }}</span>
                  <span class="job-card__location">{{ job.location }}</span>
                  <span class="job-card__languages">{{ job.languages.join(', ') }}</span>
                </div>
              </div>
            </div>

            <div class="job-card__section">
              <h4>Your Mission</h4>
              <ul>
                <li *ngFor="let item of job.mission">{{ item }}</li>
              </ul>
            </div>

            <div class="job-card__section">
              <h4>Your Skill Set</h4>
              <ul>
                <li *ngFor="let item of job.skillSet">{{ item }}</li>
              </ul>
            </div>

            <div class="job-card__section">
              <h4>What We Offer</h4>
              <ul>
                <li *ngFor="let item of job.weOffer">{{ item }}</li>
              </ul>
            </div>

            <a [href]="siteConfig.externalUrls.jobApplicationForm" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
              Apply Now
            </a>
          </div>
        </div>
      </app-section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  jobs = jobs;
  siteConfig = siteConfig;
}

