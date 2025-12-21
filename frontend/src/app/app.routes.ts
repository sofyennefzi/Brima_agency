import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Brima Agency - Create hype with creators' },
  {
    path: 'for-brands',
    loadComponent: () => import('./pages/for-brands.component').then(m => m.ForBrandsComponent),
    title: 'For Brands - Brima Agency'
  },
  {
    path: 'for-creators',
    loadComponent: () => import('./pages/for-creators.component').then(m => m.ForCreatorsComponent),
    title: 'For Creators - Brima Agency'
  },
  {
    path: 'cases',
    loadComponent: () => import('./pages/cases.component').then(m => m.CasesComponent),
    title: 'Case Studies - Brima Agency'
  },
  {
    path: 'career',
    loadComponent: () => import('./pages/career.component').then(m => m.CareerComponent),
    title: 'Career - Brima Agency'
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/legal.component').then(m => m.ImprintComponent),
    title: 'Imprint - Brima Agency'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/legal.component').then(m => m.PrivacyComponent),
    title: 'Privacy Policy - Brima Agency'
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal.component').then(m => m.TermsComponent),
    title: 'General Terms - Brima Agency'
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/videos.component').then(m => m.VideosPageComponent),
    title: 'Videos - Brima Agency'
  },

  // Keep old routes for backward compatibility
  { path: 'landing', loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'reels', loadComponent: () => import('./features/reels/reels.component').then(m => m.ReelsComponent) },
  { path: 'start', loadComponent: () => import('./features/role-select/role-select.component').then(m => m.RoleSelectComponent) },
  {
    path: 'auth',
    children: [
      { path: 'role-select', loadComponent: () => import('./features/role-select/role-select.component').then(m => m.RoleSelectComponent) },
      { path: 'sign-in', loadComponent: () => import('./features/auth/sign-in.component').then(m => m.SignInComponent) },
      { path: 'creator-sign-up', loadComponent: () => import('./features/auth/creator-sign-up.component').then(m => m.CreatorSignUpComponent) },
      { path: 'brand-sign-up', loadComponent: () => import('./features/auth/brand-sign-up.component').then(m => m.BrandSignUpComponent) },
    ],
  },

  { path: '**', redirectTo: '' }
];
