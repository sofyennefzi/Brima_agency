import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss'],
})
export class ReelsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  videos = [
    { id: 1, src: 'assets/videos/video1.mp4', title: 'Video 1' },
    { id: 2, src: 'assets/videos/video2.mp4', title: 'Video 2' },
    { id: 3, src: 'assets/videos/video3.mp4', title: 'Video 3' },
    { id: 4, src: 'assets/videos/video4.mp4', title: 'Video 4' },
    { id: 5, src: 'assets/videos/video5.mp4', title: 'Video 5' },
  ];

  private observer: IntersectionObserver | null = null;
  private currentlyPlaying: HTMLVideoElement | null = null;

  ngAfterViewInit(): void {
    this.setupObserver();

    // Ensure first video starts
    setTimeout(() => {
      const first = this.videoElements?.first?.nativeElement;
      if (first) this.playOnly(first);
    }, 50);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  onVideoLoaded(video: HTMLVideoElement): void {
    // iOS/Safari sometimes needs an explicit mute to allow autoplay
    video.muted = true;
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
            this.playOnly(video);
          } else {
            this.pauseAndReset(video);
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    this.videoElements.forEach((ref) => this.observer!.observe(ref.nativeElement));
  }

  private playOnly(video: HTMLVideoElement): void {
    if (this.currentlyPlaying && this.currentlyPlaying !== video) {
      this.pauseAndReset(this.currentlyPlaying);
    }

    video.muted = true;
    video.loop = true;

    video.play().catch(() => {
      // Autoplay may be blocked until interaction; that's okay.
    });

    this.currentlyPlaying = video;
  }

  private pauseAndReset(video: HTMLVideoElement): void {
    if (!video) return;
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      // ignore
    }
  }
}

