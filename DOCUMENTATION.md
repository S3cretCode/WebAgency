# Premium WebServices & Co. — Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Design System](#design-system)
6. [Pages & Routes](#pages--routes)
7. [Contact Form & API](#contact-form--api)
8. [Email Integration (Resend)](#email-integration-resend)
9. [Deployment to Vercel](#deployment-to-vercel)
10. [Customization Guide](#customization-guide)
11. [Environment Variables](#environment-variables)

---

## Project Overview

A corporate "prestige" agency website for **Premium WebServices & Co.**, targeting moderate-sized businesses (15–100 employees). The homepage acts as a scrolling executive summary, supported by dedicated sub-pages for About, Services, Contact, and a Free Audit landing page.

**Key Features:**
- Minimalist obsidian-and-gold aesthetic
- Fully responsive (mobile-first)
- CSS-only animations (no JS animation libraries)
- Production-ready contact form with rate limiting
- SEO-optimized with proper meta tags
- Vercel-ready deployment

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.x | React framework (App Router) |
| Tailwind CSS | 3.x | Utility-first CSS |
| React | 18.x | UI library |
| Google Fonts | — | Inter (body) + Playfair Display (headings) |

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run
```bash
# Navigate to the project
cd WebAgency

# Install dependencies
npm install

# Start development server
npm run dev
```
The site will be available at `http://localhost:3000`.

### Build for Production
```bash
npm run build
npm start
```

---

## Project Structure

```
WebAgency/
├── public/
│   └── images/
│       ├── logo.png              # Company logo (PW monogram)
│       └── partners/             # Partner logo directory
├── src/
│   ├── app/
│   │   ├── layout.js             # Root layout (fonts, header, footer)
│   │   ├── page.js               # Homepage (scrolling executive summary)
│   │   ├── globals.css           # Design tokens + global styles
│   │   ├── about/page.js         # About page
│   │   ├── services/page.js      # Services page
│   │   ├── contact/page.js       # Contact page
│   │   ├── audit/page.js         # Free audit landing page
│   │   └── api/contact/route.js  # Form submission API
│   └── components/
│       ├── Button.js             # Reusable button (primary/outline)
│       ├── Header.js             # Sticky nav + mobile hamburger
│       ├── Footer.js             # Minimal dark footer
│       ├── Hero.js               # Hero section
│       ├── TrustBar.js           # Partner logos marquee
│       ├── Services.js           # Service cards
│       ├── Incentive.js          # Free audit highlight
│       ├── ScrollPath.js         # Process timeline
│       ├── ContactForm.js        # Qualification form
│       └── ScrollObserver.js     # Intersection Observer for animations
├── tailwind.config.js            # Custom theme configuration
├── jsconfig.json                 # Path aliases (@/*)
├── DOCUMENTATION.md              # This file
└── README.md                     # Quick-start readme
```

---

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `obsidian` | `#0D0D0D` | Primary background |
| `obsidian-light` | `#1A1A1A` | Card backgrounds, elevation |
| `obsidian-mid` | `#2A2A2A` | Borders, dividers |
| `gold` | `#C5A059` | Primary accent, CTAs |
| `gold-light` | `#D4B06A` | Hover states |
| `gold-dark` | `#A8863E` | Active/pressed states |
| `ivory` | `#F5F0E8` | Primary text |
| `silver` | `#9A9A9A` | Secondary text |

### Typography
- **Headings:** Playfair Display (serif) — `font-heading`
- **Body:** Inter (sans-serif) — `font-body`

### CSS Animations
All animations are CSS-only. Scroll-triggered animations use an Intersection Observer (`ScrollObserver.js`):
- `.reveal` — Elements start hidden and animate in when they enter the viewport
- `.reveal-delay-1` through `.reveal-delay-4` — Staggered animation delays
- `.btn-shimmer` — Gold shimmer effect on CTA buttons
- `.text-gold-gradient` — Gradient text utility
- `.glass-card` — Glassmorphic card background

### Utility Classes
- `.section-padding` — Consistent vertical/horizontal padding for sections
- `.input-gold` — Input fields with gold bottom-border focus effect
- `.header-blur` — Backdrop blur for the sticky header

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `page.js` | Homepage — scrolling executive summary |
| `/about` | `about/page.js` | Company mission, values, and approach |
| `/services` | `services/page.js` | Detailed service descriptions |
| `/contact` | `contact/page.js` | Full contact form + direct info |
| `/audit` | `audit/page.js` | Free performance audit landing page |

---

## Contact Form & API

### Frontend (`ContactForm.js`)
- Client component with controlled form state
- Fields: Name, Email, Company URL, Company Size, Business Goal, Message
- Validates required fields before submission
- Shows loading, success, and error states
- `variant="full"` includes the message textarea; `variant="compact"` omits it

### Backend (`api/contact/route.js`)
- **POST** endpoint at `/api/contact`
- Server-side validation of required fields and email format
- In-memory rate limiting: max 5 submissions per IP per 15-minute window
- Currently logs submissions to the server console
- Ready for production email integration (see below)

---

## Email Integration (Resend)

To enable email notifications when forms are submitted:

### Step 1: Create a Resend Account
1. Go to [resend.com](https://resend.com) and sign up (free tier: 3,000 emails/month)
2. Verify your domain or use the sandbox for testing
3. Generate an API key from the dashboard

### Step 2: Install Resend SDK
```bash
npm install resend
```

### Step 3: Add Environment Variable
Create a `.env.local` file in the project root:
```env
RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Uncomment Email Code
In `src/app/api/contact/route.js`, uncomment the Resend integration block (clearly marked with `TODO: Production email integration`) and update the `from` address to use your verified domain.

### Step 5: Deploy
Push to GitHub and Vercel will pick up the environment variable if you've added it in the Vercel project settings.

---

## Deployment to Vercel

### Step 1: Push to GitHub
```bash
cd WebAgency
git add .
git commit -m "Initial commit — Premium WebServices & Co."
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** and import your repository
3. Framework preset will auto-detect **Next.js**
4. Click **Deploy**

### Step 3: Environment Variables (Optional)
If you've set up Resend, add `RESEND_API_KEY` in:
**Vercel Dashboard → Project → Settings → Environment Variables**

### Step 4: Custom Domain (Optional)
In Vercel project settings, add your custom domain and update DNS records as instructed.

---

## Customization Guide

### Changing Content
All text content is directly in the component files. To update:
- **Company name/branding:** Search for "Premium WebServices" across files
- **Contact info:** Update in `Footer.js` and `contact/page.js`
- **Service descriptions:** Edit arrays in `Services.js` and `services/page.js`
- **Audit details:** Edit arrays in `Incentive.js` and `audit/page.js`

### Changing Colors
Edit `tailwind.config.js` → `theme.extend.colors` to update the palette. Also update the gradient values in `globals.css` (`.text-gold-gradient` and `.btn-shimmer`).

### Replacing the Logo
Replace `public/images/logo.png` with your own. Recommended: square, minimum 200×200px.

### Adding Partner Logos
Add images to `public/images/partners/` and update the `partners` array in `TrustBar.js`.

### Adding New Pages
1. Create `src/app/your-page/page.js`
2. Add the route to navigation in `Header.js` and `Footer.js`
3. Include `<ScrollObserver />` for scroll animations

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | No (dev) / Yes (prod) | Resend API key for email notifications |

Create a `.env.local` file for local development. For Vercel, add variables in the project settings dashboard.
