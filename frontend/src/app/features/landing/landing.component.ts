import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Complete Landing Page Component matching notnice.io
 * Features:
 * - Hero with 5 video cards → phone collapse animation
 * - Timeline features with scroll-triggered content
 * - Stats counters
 * - Testimonials
 * - FAQ accordion
 * - All scroll-based animations
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  // Pinned hero (sticky wrapper + scroll progress)
  @ViewChild('pinnedWrapper') pinnedWrapper!: ElementRef<HTMLElement>;
  @ViewChild('pinnedStage') pinnedStage!: ElementRef<HTMLElement>;
  @ViewChild('phoneTarget') phoneTarget!: ElementRef<HTMLElement>;
  @ViewChild('phoneVideo') phoneVideo!: ElementRef<HTMLVideoElement>;

  // Other sections
  @ViewChild('featurePhone') featurePhone!: ElementRef<HTMLElement>;
  @ViewChild('statsSection') statsSection!: ElementRef<HTMLElement>;

  // Brand logos data
  brandLogos = [
    { name: 'Brand 1' },
    { name: 'Brand 2' },
    { name: 'Brand 3' },
    { name: 'Brand 4' },
    { name: 'Brand 5' },
  ];

  // 5 vertical video cards for hero animation
  videoCards = [
    {
      id: 1,
      rotation: -12,
      x: -300,
      posterUrl: 'https://via.placeholder.com/300x533/6366f1/ffffff?text=Case+1',
      title: 'Case Study 1'
    },
    {
      id: 2,
      rotation: -6,
      x: -150,
      posterUrl: 'https://via.placeholder.com/300x533/8b5cf6/ffffff?text=Case+2',
      title: 'Case Study 2'
    },
    {
      id: 3,
      rotation: 0,
      x: 0,
      posterUrl: 'https://via.placeholder.com/300x533/d946ef/ffffff?text=Case+3',
      title: 'Case Study 3'
    },
    {
      id: 4,
      rotation: 6,
      x: 150,
      posterUrl: 'https://via.placeholder.com/300x533/f43f5e/ffffff?text=Case+4',
      title: 'Case Study 4'
    },
    {
      id: 5,
      rotation: 12,
      x: 300,
      posterUrl: 'https://via.placeholder.com/300x533/f59e0b/ffffff?text=Case+5',
      title: 'Case Study 5'
    },
  ];

  // Gallery brands for brand showcase section
  galleryBrands = [
    { name: 'Brand Partner 1', image: 'assets/images/brand1.jpg', tagline: 'Partner since 2024' },
    { name: 'Brand Partner 2', image: 'assets/images/brand2.jpg', tagline: 'Partner since 2024' },
    { name: 'Brand Partner 3', image: 'assets/images/brand3.jpg', tagline: 'Partner since 2024' },
    { name: 'Brand Partner 4', image: 'assets/images/brand4.jpg', tagline: 'Partner since 2024' },
    { name: 'Brand Partner 5', image: 'assets/images/brand5.jpg', tagline: 'Partner since 2024' },
    { name: 'Brand Partner 6', image: 'assets/images/brand1.jpg', tagline: 'Partner since 2025' },
  ];

  // Features for timeline section
  features = [
    {
      number: '01',
      title: '7+ LANGUAGES',
      description: 'Create content in multiple languages with native-speaking creators.',
      image: 'assets/videos/video1.mp4'
    },
    {
      number: '02',
      title: '100% CUSTOMIZEABLE CREATIONS',
      description: 'Full control over every aspect of your video content.',
      image: 'assets/videos/video2.mp4'
    },
    {
      number: '03',
      title: 'AI SCRIPTER',
      description: 'Advanced AI generates compelling scripts for your videos.',
      image: 'assets/videos/video3.mp4'
    },
    {
      number: '04',
      title: 'MANAGED SERVICE',
      description: 'End-to-end production management by our expert team.',
      image: 'assets/videos/video4.mp4'
    },
  ];

  // FAQ items
  faqs = [
    {
      question: 'Who is responsible for creating the content?',
      answer: 'Our network of professional creators produces all content under your brand guidelines.',
      open: false
    },
    {
      question: 'What kind of videos do creators make?',
      answer: 'Product reviews, unboxings, tutorials, testimonials, and more - all customized to your needs.',
      open: false
    },
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery is 5-7 business days. Rush delivery available for urgent projects.',
      open: false
    },
    {
      question: 'How fast can creators start producing content?',
      answer: 'Once approved, creators can begin within 24-48 hours.',
      open: false
    },
  ];

  activeFeatureIndex = 0;
  statsAnimated = false;

  private timelines: gsap.core.Timeline[] = [];
  private scrollTriggers: ScrollTrigger[] = [];

  private rafId: number | null = null;
  private boundOnScroll = () => this.requestTick();
  private boundOnResize = () => this.requestTick();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setupPinnedHeroAnimation();

      this.setupFeaturesTimelineAnimation();
      this.setupStatsCounter();
      this.setupScrollRevealAnimations();
    }, 100);
  }

  ngOnDestroy(): void {
    this.timelines.forEach(tl => tl.kill());
    this.scrollTriggers.forEach(st => st.kill());
    ScrollTrigger.getAll().forEach(st => st.kill());

    window.removeEventListener('scroll', this.boundOnScroll);
    window.removeEventListener('resize', this.boundOnResize);
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private setupPinnedHeroAnimation(): void {
    const phoneVideo = this.phoneVideo?.nativeElement;
    if (phoneVideo) {
      phoneVideo.muted = true;
      phoneVideo.play().catch(() => undefined);
    }

    window.addEventListener('scroll', this.boundOnScroll, { passive: true } as any);
    window.addEventListener('resize', this.boundOnResize, { passive: true } as any);
    this.updatePinnedHeroProgress();
  }

  private requestTick(): void {
    if (this.rafId != null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.updatePinnedHeroProgress();
    });
  }

  private clamp01(v: number): number {
    return Math.max(0, Math.min(1, v));
  }

  private lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  private updatePinnedHeroProgress(): void {
    const wrapper = this.pinnedWrapper?.nativeElement;
    const stage = this.pinnedStage?.nativeElement;
    const phone = this.phoneTarget?.nativeElement;
    if (!wrapper || !stage || !phone) return;

    const rect = wrapper.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const totalScrollable = rect.height - vh;
    if (totalScrollable <= 0) return;

    const p = this.clamp01((-rect.top) / totalScrollable);

    const cards = document.querySelectorAll<HTMLElement>('.hero__video-card');
    if (!cards.length) return;

    const tStraighten = this.clamp01(p / 0.35);
    const tFadeSides = this.clamp01((p - 0.35) / 0.25);
    const tPhone = this.clamp01((p - 0.60) / 0.40);

    const centerIdx = 2;

    cards.forEach((card, i) => {
      const isCenter = i === centerIdx;

      const startRot = (i - centerIdx) * 4;
      const rot = this.lerp(startRot, 0, tStraighten);

      const stackY = (i - centerIdx) * 14;
      const y = this.lerp(0, stackY, tStraighten);

      const scale = this.lerp(1, 0.9, tStraighten);

      let opacity = 1;
      if (!isCenter) opacity = this.lerp(1, 0, tFadeSides);
      if (isCenter) opacity = this.lerp(1, 0, tPhone);

      const extraCenterY = isCenter ? this.lerp(0, 180, tPhone) : 0;

      card.style.transform = `translate3d(0, ${y + extraCenterY}px, 0) rotate(${rot}deg) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.willChange = 'transform, opacity';
      card.style.pointerEvents = opacity < 0.2 ? 'none' : 'auto';
    });

    const phoneOpacity = this.lerp(0, 1, tPhone);
    const phoneScale = this.lerp(0.85, 1, tPhone);
    const phoneY = this.lerp(80, 0, tPhone);

    phone.style.opacity = String(phoneOpacity);
    phone.style.transform = `translate3d(-50%, calc(-50% + ${phoneY}px), 0) scale(${phoneScale})`;
    phone.style.willChange = 'transform, opacity';
  }

  /**
   * Features Timeline Animation
   * Vertical timeline with markers that update as user scrolls
   */
  private setupFeaturesTimelineAnimation(): void {
    const phone = this.featurePhone.nativeElement;
    const timeline = document.querySelector('.timeline');
    const items = document.querySelectorAll('.timeline__item');

    items.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          this.activeFeatureIndex = index;
          this.updateFeaturePhone(index);
        },
        onEnterBack: () => {
          this.activeFeatureIndex = index;
          this.updateFeaturePhone(index);
        },
      });
    });
  }

  private updateFeaturePhone(index: number): void {
    const phone = this.featurePhone.nativeElement;
    const screen = phone.querySelector('.phone__screen-content');

    if (screen) {
      gsap.to(screen, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Update phone content here
          gsap.to(screen, { opacity: 1, duration: 0.3 });
        },
      });
    }
  }

  /**
   * Stats Counter Animation
   * Counts from 0 to target number when in viewport
   */
  private setupStatsCounter(): void {
    if (!this.statsSection) return;

    ScrollTrigger.create({
      trigger: this.statsSection.nativeElement,
      start: 'top center',
      onEnter: () => {
        if (!this.statsAnimated) {
          this.animateStatsCounter();
          this.statsAnimated = true;
        }
      },
    });
  }

  private animateStatsCounter(): void {
    const counter = { value: 0 };
    const target = 1488;

    gsap.to(counter, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        const el = document.querySelector('.stats__number');
        if (el) {
          el.textContent = Math.floor(counter.value).toString();
        }
      },
    });
  }

  /**
   * Generic scroll reveal animations for various sections
   */
  private setupScrollRevealAnimations(): void {
    // Animate all sections with fade + slide up
    const sections = document.querySelectorAll('.reveal-section');

    sections.forEach((section) => {
      gsap.from(section, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }

  /**
   * Toggle FAQ accordion
   */
  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
