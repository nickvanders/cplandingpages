# Design Guidelines: Contemporary Psychology ADHD Services Landing Page

## Design Approach
**Brand-Aligned**: Based on Contemporary Psychology's geometric cube logo featuring a cyan-to-magenta gradient, creating a modern, professional healthcare aesthetic.

## Color System
- **Primary**: Cyan #16BAC5 (HSL 187 71% 51%) - CTAs, key headings, trust elements
- **Accent**: Magenta #D946EF (HSL 292 84% 61%) - highlights, hover states, decorative elements
- **Background**: Clean White #FFFFFF
- **Text**: Deep Charcoal #2E2E2E
- **Muted**: Neutral Grey for secondary text and borders

## Logo
- Geometric cube with cyan-to-magenta gradient
- File: `attached_assets/Screenshot_2025-12-04_at_1.58.41_pm-removebg-preview_1764817148139.png`
- Usage: Header (40x40px), Footer (48x48px)

## Typography
- **Primary Font**: Montserrat (headings, navigation, CTAs)
  - H1: 48px/56px, semibold
  - H2: 36px/44px, semibold
  - H3: 24px/32px, medium
- **Secondary Font**: Open Sans (body text, descriptions)
  - Body: 16px/26px, regular
  - Small: 14px/22px, regular

## Navigation
Simplified to focus on core services:
- ADHD Assessment
- ADHD Coaching
- Book Consultation button

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent vertical and horizontal rhythm.
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 between cards, gap-6 within components
- Container max-width: max-w-7xl with px-6

## Layout Structure

### Hero Section (Full viewport ~90vh)
- Large hero image: Professional therapy setting
- Overlay: Dark gradient for text readability
- Content: Left-aligned with trust badges
- Primary CTA button with backdrop blur

### Service Overview Section
- 2-column grid (desktop), single column (mobile)
- ADHD Assessment and ADHD Coaching cards
- Each card: Icon + title + feature list
- Background: Alternating white/subtle grey

### Pathway Visualization
- 4-step horizontal flow: Free Intake Call → ADHD Assessment → Diagnosis & Plan → Coaching Program
- Visual elements: Numbered circles (primary color) connected by lines
- Mobile: Vertical stack

### Why Choose Us Section
- 2x2 grid of feature cards
- Icons: Neuroscience, Compassionate Care, Experience, Accreditation
- Credential badges: AHPRA, Medicare, No Referral Required

### Testimonials Section
- Quote cards with decorative quotation marks
- Background: Light tint

### Contact Section
- Split layout: Form + Info sidebar
- Melbourne location details: St Kilda, Victoria
- Phone: 03 9081 4270
- Email: info@contemporarypsychology.com.au
- Telehealth Australia-wide

### Footer
- Logo + brand name
- Quick links (ADHD Assessment, ADHD Coaching)
- Contact info
- Social links (LinkedIn)

## Component Library

### Buttons
- Primary: Cyan bg, white text, rounded-lg
- Secondary: White bg, cyan border and text
- Blurred overlay buttons: backdrop-blur-md bg-white/20

### Cards
- Border: Subtle grey, rounded-xl
- Padding: p-8
- Hover: hover-elevate utility class

### Icons
- Use Lucide React icons
- Size: w-7 h-7 for feature icons
- Color: Primary (cyan) or Accent (magenta)

## Accessibility
- Minimum contrast ratio 4.5:1 maintained
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images

## Mobile Responsiveness
- Navigation: Hamburger menu at lg breakpoint
- All grids: Single column on mobile
- Touch-friendly: Minimum 44px tap targets
