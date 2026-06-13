# Vitafoam Brookfields

**Premium mattresses, bedding & home essentials for Sierra Leonean homes.**

A modern, single-page storefront for Vitafoam Brookfields — a trusted home comfort retailer located at 29B King Harman Road, Brookfields, Freetown, Sierra Leone. Serving families since 2015.

---

## Preview

### Sections

| Section | Description |
|---------|-------------|
| **Hero** | Asymmetric split layout with animated entrance and parallax scrolling |
| **Shop by Category** | Browse mattresses, bedding, pillows, cushions, kids' beds & more |
| **Trust Features** | Quality guarantee, nationwide coordination & WhatsApp support |
| **Featured Products** | Curated product cards with ratings and prices in Leones |
| **WhatsApp Banner** | One-tap CTA to chat directly with the store |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **TypeScript 5.9** | Type safety |
| **Vite 7** | Build tool & dev server |
| **Tailwind CSS 3.4** | Utility-first styling |
| **GSAP 3** | Scroll-triggered animations & timeline sequences |
| **Lenis** | Butter-smooth inertia scrolling |
| **Lucide React** | Icon system |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/mkk2026/vitafoam-website.git
cd vitafoam-website/app

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
app/
├── public/
│   └── images/            # Product & brand images (16 assets)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Fixed navbar with scroll blur + mobile menu
│   │   ├── Footer.tsx      # 4-column footer with contact & socials
│   │   └── ui/             # shadcn/ui component library (40+ components)
│   ├── sections/
│   │   ├── HeroSection.tsx       # Animated hero with parallax image
│   │   ├── ShopByCategory.tsx    # 6-card category grid
│   │   ├── TrustFeatures.tsx     # 3 feature cards
│   │   ├── FeaturedProducts.tsx  # 5-column product grid with ratings
│   │   └── WhatsAppBanner.tsx    # Full-width WhatsApp CTA
│   ├── hooks/
│   │   ├── useScrollReveal.ts    # GSAP ScrollTrigger wrapper
│   │   └── use-mobile.ts        # Mobile breakpoint detection
│   ├── lib/
│   │   └── utils.ts              # Tailwind class merge utility
│   ├── pages/
│   │   └── Home.tsx              # Main page composing all sections
│   ├── App.tsx                   # Root component + Lenis smooth scroll
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles + custom utilities
├── index.html                    # HTML entry with Google Fonts
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Animations

The site features a rich animation layer powered by GSAP:

- **Hero entrance** — 8-step timeline sequence (badge, heading, body, CTAs, trust row, image)
- **Parallax scrolling** — Hero image translates at 0.3x scroll speed
- **Scroll reveals** — Every section fades in with `useScrollReveal` hook
- **Hover effects** — Cards lift with shadow intensification, images scale subtly
- **Smooth scrolling** — Lenis provides inertia-based scroll with `lerp: 0.1`
- **Mobile menu** — Staggered link fade-in with GSAP

---

## Contact

| Channel | Details |
|---------|---------|
| **Location** | 29B King Harman Road, Brookfields, Freetown, Sierra Leone |
| **Phone** | 076 271 771 |
| **WhatsApp** | [Chat with us](https://wa.me/23276271771) |
| **Email** | info@vitafoambrookfields.com |

---

## Deployment

This project is configured for deployment on **Vercel**:

1. Import the repository on [vercel.com](https://vercel.com)
2. Set the **Root Directory** to `app`
3. Vercel auto-detects Vite — no additional config needed
4. Deploy

---

## License

&copy; 2026 Vitafoam Brookfields. All Rights Reserved.
