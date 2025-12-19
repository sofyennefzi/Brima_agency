import { Injectable, NgZone } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && gsap && (gsap as any).registerPlugin) {
  gsap.registerPlugin(ScrollTrigger);
}

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  constructor(private zone: NgZone) {}

  /**
   * Create a scroll-triggered timeline with sane defaults for smooth easing.
   */
  createTimeline(options: ScrollTrigger.Vars & { defaults?: gsap.TweenVars } & { scrub?: boolean } & { snap?: any }): gsap.core.Timeline {
    let timeline!: gsap.core.Timeline;

    this.zone.runOutsideAngular(() => {
      timeline = gsap.timeline({
        defaults: {
          ease: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
          duration: 1,
        },
        scrollTrigger: {
          ...options,
        },
      });
    });

    return timeline;
  }
}

