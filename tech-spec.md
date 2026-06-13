# Vitafoam Brookfields — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0 | UI framework |
| react-dom | ^19.0 | DOM rendering |
| vite | ^6.0 | Build tool |
| @vitejs/plugin-react | ^4.4 | Vite React plugin |
| typescript | ^5.7 | Type safety |
| tailwindcss | ^3.4 | Utility CSS |
| gsap | ^3.12 | Animation engine (ScrollTrigger, tweens) |
| lenis | ^1.1 | Smooth scroll with inertia |
| lucide-react | ^0.460 | Icons (ShieldCheck, MapPin, MessageCircle, Phone, etc.) |
| @types/react | ^19.0 | React type definitions |
| @types/react-dom | ^19.0 | React DOM type definitions |

**GSAP plugins used**: ScrollTrigger (free, bundled with gsap)

## Component Inventory

### Layout Components (shared)

| Component | Source | Reuse |
|-----------|--------|-------|
| **Navbar** | Custom | Fixed across all pages — logo, nav links, WhatsApp CTA, mobile hamburger menu |
| **Footer** | Custom | Single instance — 4-column footer with brand, links, contact info |
| **MobileMenu** | Custom | Used by Navbar — fullscreen overlay with staggered link animation |

### Page Sections (Home page only — single page site)

| Component | Source | Notes |
|-----------|--------|-------|
| **HeroSection** | Custom | 45/55 asymmetric split, GSAP timeline entrance, parallax on scroll |
| **ShopByCategory** | Custom | 2+4 card grid, category cards with image+overlay |
| **TrustFeatures** | Custom | 3-column feature cards on lavender background |
| **FeaturedProducts** | Custom | Header row + 5-column product card grid |
| **WhatsAppBanner** | Custom | Full-width CTA band, deep purple background |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| **CategoryCard** | Custom | ShopByCategory (×6) — image bg + overlay + label |
| **ProductCard** | Custom | FeaturedProducts (×5) — image + name + stars + price |
| **FeatureCard** | Custom | TrustFeatures (×3) — icon + title + description |
| **PrimaryButton** | Custom | HeroSection, WhatsAppBanner — orange CTA |
| **WhatsAppButton** | Custom | Navbar, HeroSection — green CTA with phone icon |

### Hooks

| Hook | Purpose |
|------|---------|
| **useScrollReveal** | GSAP ScrollTrigger wrapper for section entrance animations |
| **useLenis** | Initialize and manage Lenis smooth scroll instance |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Smooth scrolling | Lenis | Global instance in App.tsx, config: lerp 0.1 | Low |
| Hero entrance sequence | GSAP | Timeline with 8 sequential tweens (label→heading→body→CTAs→trust→image) | **High** |
| Hero image parallax | GSAP ScrollTrigger | scrub-based translateY at 0.3x speed | Medium |
| Navbar background transition | CSS | scroll event listener toggles class, CSS transition | Low |
| Nav link underline hover | CSS | `::after` pseudo-element with scaleX transform | Low |
| Mobile menu overlay | GSAP | Stagger fade-in of links (0.05s delay) | Medium |
| Section scroll reveals | GSAP ScrollTrigger | Reusable pattern: opacity+translateY with stagger via useScrollReveal hook | Medium |
| Category card hover | CSS | translateY(-6px) + box-shadow + img scale(1.05) | Low |
| Product card hover | CSS | translateY(-8px) + box-shadow + img scale(1.05) | Low |
| Feature card hover | CSS | translateY(-4px) | Low |
| Button hover effects | CSS | translateY(-2px) + bg darken + shadow intensify | Low |
| WhatsApp banner reveal | GSAP ScrollTrigger | opacity+translateY, single element | Low |

## State & Logic

### Mobile Menu Toggle
- State: `isMobileMenuOpen` in Navbar component
- Toggles body scroll lock when open
- Close on escape key and swipe-down gesture

### Navbar Scroll Detection
- Scroll listener tracks `scrollY > 50`
- Toggles `scrolled` class for background blur + shadow transition
- No external state — handled within Navbar via useEffect

### Lenis Integration
- Single Lenis instance created in App.tsx useEffect
- Connected to GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`
- RAF loop: `gsap.ticker.add((time) => lenis.raf(time * 1000))`
- Cleanup on unmount

## Other Key Decisions

- **Single-page site**: No routing needed — all content on Home page
- **No shadcn/ui components used**: All components are custom-built with Tailwind; shadcn/ui is available in the project but not needed for this design
- **Images**: All 16 provided images copied to `public/images/` — referenced via `/images/filename` paths
- **Font loading**: Playfair Display (display) + Inter (body) via Google Fonts in index.html
- **WhatsApp integration**: Links use `https://wa.me/23276271771` format for direct WhatsApp chat
