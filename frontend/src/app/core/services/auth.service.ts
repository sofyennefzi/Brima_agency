import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

const API_BASE = 'http://localhost:8000';

export interface SignupCreatorPayload {
  first_name: string;
  last_name: string;
  phone?: string;
  email: string;
  password: string;
}

export interface SignupBrandPayload extends SignupCreatorPayload {
  company_name: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private readonly TOKEN_KEY = 'brima_token';

  login(payload: LoginPayload) {
    const body = new URLSearchParams();
    body.set('username', payload.email);
    body.set('password', payload.password);

    return this.http
      .post<{ access_token: string }>(`${API_BASE}/auth/login`, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.TOKEN_KEY, res.access_token);
        }),
      );
  }

  signupCreator(payload: SignupCreatorPayload) {
    return this.http.post(`${API_BASE}/auth/signup/creator`, payload);
  }

  signupBrand(payload: SignupBrandPayload) {
    return this.http.post(`${API_BASE}/auth/signup/brand`, payload);
  }

  scheduleInterview(preferredDate: string) {
    const token = this.getToken();
    return this.http.post(
      `${API_BASE}/brand/interview`,
      { preferred_date: preferredDate },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      },
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigateByUrl('/auth/sign-in');
  }
}
