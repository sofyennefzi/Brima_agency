import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar.component';
import { FooterComponent } from '../shared/footer.component';
import { SectionComponent } from '../shared/section.component';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="legal-page">
      <app-section>
        <div class="legal-content">
          <h1>Imprint</h1>

          <h2>Company Information</h2>
          <p><strong>{{ siteConfig.name }}</strong></p>
          <p>
            Address Line 1<br>
            City, Postal Code<br>
            Country
          </p>

          <h2>Contact</h2>
          <p>
            Email: <a [href]="'mailto:' + siteConfig.contact.email">{{ siteConfig.contact.email }}</a><br>
            WhatsApp: {{ siteConfig.contact.whatsapp }}
          </p>

          <h2>Legal Representatives</h2>
          <p>
            Managing Director: [Name]<br>
            Commercial Register: [Register Number]<br>
            Registry Court: [Court Location]<br>
            VAT ID: [VAT Number]
          </p>

          <h2>Responsible for Content</h2>
          <p>
            [Name]<br>
            [Address]
          </p>

          <p class="last-updated">Last updated: December 2025</p>
        </div>
      </app-section>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./legal.component.scss']
})
export class ImprintComponent {
  siteConfig = siteConfig;
}

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="legal-page">
      <app-section>
        <div class="legal-content">
          <h1>Privacy Policy</h1>

          <h2>1. Data Controller</h2>
          <p>{{ siteConfig.name }} is responsible for processing your personal data. For questions regarding data protection, please contact us at <a [href]="'mailto:' + siteConfig.contact.email">{{ siteConfig.contact.email }}</a>.</p>

          <h2>2. Data We Collect</h2>
          <p>We collect and process the following types of personal data:</p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Account information (username, password, profile data)</li>
            <li>Usage data (pages visited, features used, time spent)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Creator portfolio content (videos, images, descriptions)</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Processing transactions and managing accounts</li>
            <li>Matching brands with suitable creators</li>
            <li>Communicating about campaigns and opportunities</li>
            <li>Analytics and service optimization</li>
            <li>Legal compliance and fraud prevention</li>
          </ul>

          <h2>4. Your Rights</h2>
          <p>You have the right to access, correct, delete, restrict, object to, and port your data. Contact us to exercise these rights.</p>

          <p class="last-updated">Last updated: December 2025</p>
        </div>
      </app-section>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./legal.component.scss']
})
export class PrivacyComponent {
  siteConfig = siteConfig;
}

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SectionComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="legal-page">
      <app-section>
        <div class="legal-content">
          <h1>General Terms and Conditions</h1>

          <h2>1. Scope</h2>
          <p>These General Terms and Conditions ("Terms") govern the use of services provided by {{ siteConfig.name }}. By accessing or using our platform, you agree to be bound by these Terms.</p>

          <h2>2. Services</h2>
          <p>We provide a platform connecting brands with content creators for video production and marketing campaigns.</p>

          <h2>3. User Accounts</h2>
          <p>To use our services, you must be at least 18 years old and provide accurate registration information.</p>

          <h2>4. Content Ownership and Rights</h2>
          <p>For Brands: You receive full commercial rights to content created through our platform. For Creators: You retain ownership but grant necessary licenses as agreed in campaign briefs.</p>

          <h2>5. AI-Generated Content Disclaimer</h2>
          <p>AI-generated scripts and suggestions are provided for creative purposes only. Users are solely responsible for reviewing all content for accuracy, appropriateness, and compliance with applicable laws.</p>

          <h2>6. Termination</h2>
          <p>We reserve the right to suspend or terminate accounts for violations of these Terms.</p>

          <p class="last-updated">Last updated: December 2025</p>
        </div>
      </app-section>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./legal.component.scss']
})
export class TermsComponent {
  siteConfig = siteConfig;
}

