import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoScrollComponent } from '../components/video-scroll/video-scroll.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, VideoScrollComponent],
  template: `
    <app-video-scroll></app-video-scroll>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
  `]
})
export class VideosPageComponent {}

