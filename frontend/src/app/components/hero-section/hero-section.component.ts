import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('header') header!: ElementRef<HTMLElement>;
  @ViewChild('videoCards') videoCards!: ElementRef<HTMLElement>;

  brandLogos = [
    { name: 'Brand 1', image: 'assets/images/brand1.jpg' },
    { name: 'Brand 2', image: 'assets/images/brand2.jpg' },
    { name: 'Brand 3', image: 'assets/images/brand3.jpg' },
    { name: 'Brand 4', image: 'assets/images/brand4.jpg' },
    { name: 'Brand 5', image: 'assets/images/brand5.jpg' },
  ];

  videoCardData = [
    {
      id: 1,
      rotation: -8,
      zIndex: 1,
      videoUrl: 'assets/videos/video1.mp4',
      posterUrl: 'assets/images/brand1.jpg',
      title: 'Case Study 1'
    },
    {
      id: 2,
      rotation: -4,
      zIndex: 2,
      videoUrl: 'assets/videos/video2.mp4',
      posterUrl: 'assets/images/brand2.jpg',
      title: 'Case Study 2'
    },
    {
      id: 3,
      rotation: 0,
      zIndex: 3,
      videoUrl: 'assets/videos/video3.mp4',
      posterUrl: 'assets/images/brand3.jpg',
      title: 'Case Study 3'
    },
    {
      id: 4,
      rotation: 4,
      zIndex: 2,
      videoUrl: 'assets/videos/video4.mp4',
      posterUrl: 'assets/images/brand4.jpg',
      title: 'Case Study 4'
    },
    {
      id: 5,
      rotation: 8,
      zIndex: 1,
      videoUrl: 'assets/videos/video5.mp4',
      posterUrl: 'assets/images/brand5.jpg',
      title: 'Case Study 5'
    },
  ];

  private scrollTriggers: ScrollTrigger[] = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setupHeaderScrollEffect();
      this.setupVideoCardsAnimationImproved();
      this.playAllVideos();
    }, 100);
  }

  private setupVideoCardsAnimationImproved(): void {
    const cards = this.videoCards.nativeElement.querySelectorAll('.hero__video-card');

    // Simple entrance animation without scrub - just fade in and slide up
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotation: (index - 2) * 10,
        duration: 1.2,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }

  private playAllVideos(): void {
    // Ensure all videos start playing
    const videoElements = document.querySelectorAll('.hero__video-card-video');
    videoElements.forEach((video: any) => {
      video.muted = true; // Ensure muted for autoplay
      video.play().catch((error: any) => {
        console.log('Video autoplay prevented:', error);
        // Retry after user interaction
        document.addEventListener('click', () => {
          video.play();
        }, { once: true });
      });
    });
  }

  ngOnDestroy(): void {
    this.scrollTriggers.forEach(st => st.kill());
    ScrollTrigger.getAll().forEach(st => st.kill());
  }

  private setupHeaderScrollEffect(): void {
    const headerEl = this.header.nativeElement;

    const st = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: '+=100',
      onUpdate: (self) => {
        const opacity = Math.min(self.progress * 0.3, 0.3);
        gsap.to(headerEl, {
          backgroundColor: `rgba(5, 5, 9, ${0.8 + opacity})`,
          duration: 0.3,
          ease: 'none',
        });
      },
    });

    this.scrollTriggers.push(st);
  }

  private setupVideoCardsAnimation(): void {
    const cards = this.videoCards.nativeElement.querySelectorAll('.hero__video-card');

    cards.forEach((card, index) => {
      gsap.to(card, {
        y: (index - 2) * 30,
        scrollTrigger: {
          trigger: this.videoCards.nativeElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from(card, {
        y: 100,
        opacity: 0,
        rotation: (index - 2) * 15,
        scale: 0.8,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }
}

