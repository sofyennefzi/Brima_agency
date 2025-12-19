import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss'],
})
export class RoleSelectComponent {
  constructor(private router: Router) {}

  continueAsBrand() {
    this.router.navigate(['/auth/brand-sign-up']);
  }

  continueAsCreator() {
    this.router.navigate(['/auth/creator-sign-up']);
  }
}
