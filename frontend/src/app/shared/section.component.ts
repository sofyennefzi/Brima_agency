import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" [class.section--dark]="dark" [class.section--light]="light">
      <div class="section__container" [class.section__container--narrow]="narrow" [class.section__container--wide]="wide">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 5rem 2rem;
      background: #050509;

      &--dark {
        background: #0a0a0f;
      }

      &--light {
        background: rgba(255, 255, 255, 0.02);
      }

      &__container {
        max-width: 1200px;
        margin: 0 auto;

        &--narrow {
          max-width: 800px;
        }

        &--wide {
          max-width: 1400px;
        }
      }
    }

    @media (max-width: 768px) {
      .section {
        padding: 3.5rem 1.5rem;
      }
    }
  `]
})
export class SectionComponent {
  @Input() dark = false;
  @Input() light = false;
  @Input() narrow = false;
  @Input() wide = false;
}

