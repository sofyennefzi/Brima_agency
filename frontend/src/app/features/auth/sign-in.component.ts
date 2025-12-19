import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./auth.shared.scss'],
})
export class SignInComponent {
  showPassword = false;
  form;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.nonNullable.group({
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

    this.auth.login(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}

