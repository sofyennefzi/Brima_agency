import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { BrandInterviewCalendarComponent } from './brand.interview-calendar.component';

@Component({
  selector: 'app-brand-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BrandInterviewCalendarComponent],
  templateUrl: './brand-sign-up.component.html',
  styleUrls: ['./auth.shared.scss'],
})
export class BrandSignUpComponent {
  showPassword = false;
  step: 'form' | 'calendar' = 'form';
  created = false;
  form;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.nonNullable.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company_name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.auth.signupBrand(this.form.getRawValue()).subscribe(() => {
      this.step = 'calendar';
      this.created = true;
    });
  }

  onInterviewChosen(isoDateTime: string): void {
    this.auth.scheduleInterview(isoDateTime).subscribe();
  }
}

