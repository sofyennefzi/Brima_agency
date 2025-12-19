import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="footer__container">

        <!-- Main Footer Content -->
        <div class="footer__grid">

          <!-- Brand Section -->
          <div class="footer__brand">
            <img src="assets/images/logo-white.png" alt="{{ siteConfig.name }}" class="footer__logo">
            <p class="footer__tagline">{{ siteConfig.description }}</p>
          </div>

          <!-- Social Links -->
          <div class="footer__section">
            <h4 class="footer__heading">Follow Us</h4>
            <div class="footer__links">
              <a [href]="siteConfig.social.instagram" target="_blank" rel="noopener noreferrer" class="footer__link">
                Instagram
              </a>
              <a [href]="siteConfig.social.tiktok" target="_blank" rel="noopener noreferrer" class="footer__link">
                TikTok
              </a>
              <a [href]="siteConfig.social.linkedin" target="_blank" rel="noopener noreferrer" class="footer__link">
                LinkedIn
              </a>
            </div>
          </div>

          <!-- Legal Links -->
          <div class="footer__section">
            <h4 class="footer__heading">Legal</h4>
            <div class="footer__links">
              <a routerLink="/imprint" class="footer__link">Imprint</a>
              <a routerLink="/privacy" class="footer__link">Privacy Policy</a>
              <a routerLink="/terms" class="footer__link">General Terms</a>
            </div>
          </div>

          <!-- Contact -->
          <div class="footer__section">
            <h4 class="footer__heading">Contact</h4>
            <div class="footer__links">
              <a [href]="'mailto:' + siteConfig.contact.email" class="footer__link">
                {{ siteConfig.contact.email }}
              </a>
              <a [href]="siteConfig.contact.whatsappLink" target="_blank" rel="noopener noreferrer" class="footer__link">
                WhatsApp
              </a>
            </div>
          </div>

        </div>


        <!-- Copyright -->
        <div class="footer__copyright">
          <p>&copy; {{ currentYear }} {{ siteConfig.name }}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0a0a0f;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 6rem 2rem 3rem;

      &__container {
        max-width: 1400px;
        margin: 0 auto;
      }

      &__grid {
        display: grid;
        grid-template-columns: 2fr repeat(3, 1fr);
        gap: 4rem;
        margin-bottom: 5rem;
      }

      &__brand {
        padding-right: 2rem;
      }

      &__logo {
        height: 40px;
        width: auto;
        margin-bottom: 1rem;
        display: block;
      }

      &__tagline {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
        margin: 0;
      }

      &__section {
        // Spacing handled by grid
      }

      &__heading {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.5);
        margin: 0 0 1.5rem;
      }

      &__links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      &__link {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #fff;
        }
      }


      &__copyright {
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        text-align: center;

        p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }
      }
    }

    @media (max-width: 1024px) {
      .footer {
        &__grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        &__brand {
          grid-column: 1 / -1;
          padding-right: 0;
        }
      }
    }

    @media (max-width: 640px) {
      .footer {
        padding: 4rem 1.5rem 2rem;

        &__grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
      }
    }
  `]
})
export class FooterComponent {
  siteConfig = siteConfig;
  currentYear = new Date().getFullYear();
}

