# Brima Agency Platform - notnice.io Style

A premium creator x brand platform with motion-crafted animations inspired by notnice.io.

## Key Features

### 🎬 Hero Animation (notnice.io style)
- 5 vertical video cards at the top
- Smooth scroll animation: cards collapse into a single phone mockup
- GSAP ScrollTrigger pinning for smooth 60fps animation
- Text animates word-by-word with gradient colors

### 📱 Platform Features
- Full marketing landing page with scroll transitions
- Role selector (Brand vs Creator)
- Creator sign-up flow
- Brand sign-up with interview calendar
- JWT authentication
- PostgreSQL database

## Tech Stack

**Frontend:**
- Angular 21 (Standalone Components)
- TypeScript
- SCSS with dark gradients
- GSAP + ScrollTrigger

**Backend:**
- FastAPI (Python)
- PostgreSQL
- JWT authentication

## Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run start
```

Visit: `http://localhost:4200`

## Routes
- `/` - Landing page with hero animation
- `/start` - Role selection (Brand or Creator)
- `/auth/sign-in` - Login
- `/auth/creator-sign-up` - Creator registration
- `/auth/brand-sign-up` - Brand registration + interview scheduler

## API Endpoints
- `POST /auth/signup/creator`
- `POST /auth/signup/brand`
- `POST /auth/login`
- `POST /brand/interview`

## Animation Features
- Hero cards → phone collapse animation
- Vertical timeline with scroll-triggered feature reveals
- Text masking and gradient effects
- Counter animations
- Smooth page transitions
- 60fps performance

---

Built with premium motion design for creators and brands.
