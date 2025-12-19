import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-creator-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creator-sign-up.component.html',
  styleUrls: ['./auth.shared.scss'],
})
export class CreatorSignUpComponent {
  showPassword = false;
  form;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.nonNullable.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
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

    this.auth.signupCreator(this.form.getRawValue()).subscribe();
  }
}
