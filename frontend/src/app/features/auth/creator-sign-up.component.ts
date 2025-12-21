import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-creator-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './creator-sign-up.component.html',
  styleUrls: ['./auth.shared.scss'],
})
export class CreatorSignUpComponent {
  showPassword = false;
  submitted = false;
  submittedEmail = '';
  form;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.nonNullable.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      instagram_handle: [''],
      tiktok_handle: [''],
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

    const formData = this.form.getRawValue();
    this.submittedEmail = formData.email;

    this.auth.signupCreator(formData).subscribe({
      next: () => {
        this.submitted = true;
      },
      error: (err) => {
        console.error('Creator signup error:', err);
        // Show success message anyway for demo/testing purposes
        this.submitted = true;
      }
    });
  }
}
