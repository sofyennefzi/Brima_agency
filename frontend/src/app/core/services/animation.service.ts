import { Injectable, NgZone } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger once at app startup
if (typeof window !== 'undefined' && gsap && (gsap as any).registerPlugin) {
  gsap.registerPlugin(ScrollTrigger);
}

@Injectable({ providedIn: 'root' })
export class AnimationService {
  constructor(private zone: NgZone) {}

  /**
   * Run a GSAP animation outside Angular's zone to avoid triggering change detection
   * on every animation frame, which keeps scrolling at 60fps.
   */
  runOutsideAngular(fn: () => void): void {
    this.zone.runOutsideAngular(fn);
  }
}

