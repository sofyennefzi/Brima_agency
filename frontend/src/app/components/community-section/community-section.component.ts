import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../../config/site';

@Component({
  selector: 'app-community-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.scss']
})
export class CommunitySectionComponent {
  siteConfig = siteConfig;

  // Array of 9 community images for the arc
  communityImages = [
    'assets/community pictuers/021501FB-AB8E-45C4-93B0-696BF21AA95C.jpg',
    'assets/community pictuers/0c579caa-f59b-4012-a981-ddca97fe974f.jpg',
    'assets/community pictuers/3DF04101-99FC-4824-A331-271F7F21D3F8.jpg',
    'assets/community pictuers/983928a0-df57-4bf7-bd22-dcb5dd02f093.jpg',
    'assets/community pictuers/B17BED53-9390-402B-8791-EA7C6623D471.jpg',
    'assets/community pictuers/IMG_5970.JPG',
    'assets/community pictuers/IMG_7572.PNG',
    'assets/community pictuers/IMG_7573.PNG',
    'assets/community pictuers/IMG_7574.PNG'
  ];
}

