import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-scroll',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="video-scroll-container">
      <section
        class="video-section"
        *ngFor="let video of videos; let i = index"
        [attr.data-index]="i"
      >
        <video
          #videoElement
          class="video-player"
          [src]="video.src"
          [muted]="true"
          [loop]="true"
          playsinline
          preload="auto"
        ></video>
        <div class="video-overlay">
          <h2 class="video-title">{{ video.title }}</h2>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    .video-scroll-container {
      width: 100%;
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }

    .video-section {
      width: 100%;
      height: 100vh;
      scroll-snap-align: start;
      scroll-snap-stop: always;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
    }

    .video-player {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .video-overlay {
      position: absolute;
      bottom: 4rem;
      left: 2rem;
      right: 2rem;
      z-index: 10;
      color: #fff;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    }

    .video-title {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      font-weight: 700;
      margin: 0;
    }

    @media (max-width: 768px) {
      .video-overlay {
        bottom: 2rem;
        left: 1rem;
        right: 1rem;
      }
    }
  `]
})
export class VideoScrollComponent implements OnInit, AfterViewInit {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  videos = [
    { src: 'assets/videos/video1.mp4', title: 'Video 1' },
    { src: 'assets/videos/video2.mp4', title: 'Video 2' },
    { src: 'assets/videos/video3.mp4', title: 'Video 3' },
    { src: 'assets/videos/video4.mp4', title: 'Video 4' },
    { src: 'assets/videos/video5.mp4', title: 'Video 5' }
  ];

  private observer!: IntersectionObserver;
  private currentVideoIndex = 0;

  ngOnInit(): void {
    // Intersection Observer setup will happen after view init
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();

    // Auto-play first video on load
    setTimeout(() => {
      const firstVideo = this.videoElements.first?.nativeElement;
      if (firstVideo) {
        firstVideo.play().catch(err => console.log('Autoplay prevented:', err));
      }
    }, 100);
  }

  private setupIntersectionObserver(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75 // Video must be 75% visible to be considered "active"
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const videoElement = entry.target.querySelector('video') as HTMLVideoElement;
        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);

        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          // This video is now the active one
          this.currentVideoIndex = index;
          this.playVideo(videoElement);
        } else {
          // This video is no longer visible
          this.pauseAndResetVideo(videoElement);
        }
      });
    }, options);

    // Observe all video sections
    const sections = document.querySelectorAll('.video-section');
    sections.forEach(section => this.observer.observe(section));
  }

  private playVideo(video: HTMLVideoElement): void {
    if (video && video.paused) {
      video.play().catch(err => console.log('Play failed:', err));
    }
  }

  private pauseAndResetVideo(video: HTMLVideoElement): void {
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; // Reset to beginning
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

