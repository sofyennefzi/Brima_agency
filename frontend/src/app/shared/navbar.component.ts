import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { siteConfig } from '../../config/site';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="navbar__container">
        <!-- Logo -->
        <a routerLink="/" class="navbar__logo" aria-label="Home">
          <img src="assets/images/logo-white.png" alt="{{ siteConfig.name }}" class="navbar__logo-img">
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          class="navbar__toggle"
          [class.navbar__toggle--active]="mobileMenuOpen"
          (click)="toggleMobileMenu()"
          aria-label="Toggle navigation menu"
          aria-expanded="{{mobileMenuOpen}}"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation Links -->
        <div class="navbar__nav" [class.navbar__nav--open]="mobileMenuOpen">
          <a
            *ngFor="let item of navigation"
            [routerLink]="item.href"
            routerLinkActive="navbar__link--active"
            class="navbar__link"
            (click)="closeMobileMenu()"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Auth Buttons -->
        <div class="navbar__actions">
          <a
            [routerLink]="siteConfig.externalUrls.login"
            class="navbar__btn navbar__btn--ghost"
          >
            LOGIN
          </a>
          <a
            [routerLink]="siteConfig.externalUrls.signUp"
            class="navbar__btn navbar__btn--primary"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: #0c082d;
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;

      &__container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
      }

      &__logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.8;
        }
      }

      &__logo-img {
        height: 48px;
        width: auto;
        display: block;
      }

      &__toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;

        span {
          width: 24px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }

        &--active span:nth-child(1) {
          transform: rotate(45deg) translateY(7px);
        }

        &--active span:nth-child(2) {
          opacity: 0;
        }

        &--active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-7px);
        }
      }

      &__nav {
        display: flex;
        align-items: center;
        gap: 3rem;
        flex: 1;
        justify-content: center;
      }

      &__link {
        position: relative;
        font-size: 1.05rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        transition: color 0.3s ease;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color, #00d9ff);
          transition: width 0.3s ease;
        }

        &:hover, &--active {
          color: #fff;

          &::after {
            width: 100%;
          }
        }
      }

      &__actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      &__btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.75rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
        cursor: pointer;
        white-space: nowrap;

        &--ghost {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);

          &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
        }

        &--primary {
          background: linear-gradient(135deg, #00d9ff, #00a8cc);
          color: #fff;
          border: none;
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0, 217, 255, 0.5);
          }
        }
      }
    }

    @media (max-width: 968px) {
      .navbar {
        &__toggle {
          display: flex;
        }

        &__nav {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          flex-direction: column;
          background: #0c082d;
          backdrop-filter: blur(20px);
          padding: 2rem;
          gap: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;

          &--open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
        }

        &__actions {
          display: none;
        }
      }
    }

    @media (max-width: 640px) {
      .navbar {
        &__container {
          padding: 1rem 1.5rem;
        }

        &__logo-img {
          height: 40px;
        }
      }
    }
  `]
})
export class NavbarComponent {
  siteConfig = siteConfig;
  navigation = siteConfig.navigation;
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}

