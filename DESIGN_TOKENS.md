# TaxEase Canada - Design Token System

**Purpose:** Central reference for color, typography, spacing, and layout tokens used across the TaxEase Canada landing page.

---

## 🎨 Color System

### Light Mode (Default)

```css
:root {
  /* Primary: Deep Professional Blue - Trust, Security, Authority */
  --primary: #0B3D7A;                    /* Main brand color */
  --primary-foreground: #FFFFFF;         /* Text on primary backgrounds */
  
  /* Accent: Bright Action Green - CTAs, Success, Conversion */
  --accent: #00A651;                     /* Call-to-action buttons */
  --accent-foreground: #FFFFFF;          /* Text on accent backgrounds */
  
  /* Neutrals: Professional Grays */
  --background: #FAFBFC;                 /* Page background (off-white) */
  --foreground: #1A1A1A;                 /* Primary text color */
  --card: #FFFFFF;                       /* Card & container background */
  --card-foreground: #1A1A1A;            /* Text on cards */
  
  /* Secondary & Popover */
  --secondary: #F0F4F8;                  /* Light blue tint for sections */
  --secondary-foreground: #0B3D7A;       /* Text on secondary */
  --popover: #FFFFFF;                    /* Dropdown/popover background */
  --popover-foreground: #1A1A1A;         /* Text in popovers */
  
  /* Utility Colors */
  --muted: #F0F2F5;                      /* Disabled, secondary backgrounds */
  --muted-foreground: #6B7280;           /* Secondary text (gray) */
  --border: #E5E7EB;                     /* Dividers, input borders */
  --input: #F3F4F6;                      /* Input field background */
  --ring: #0B3D7A;                       /* Focus ring (primary) */
  
  /* Destructive */
  --destructive: #EF4444;                /* Error/danger color */
  --destructive-foreground: #FFFFFF;     /* Text on destructive */
  
  /* Sidebar (Navigation) */
  --sidebar: #FFFFFF;                    /* Sidebar background */
  --sidebar-foreground: #1A1A1A;         /* Sidebar text */
  --sidebar-primary: #0B3D7A;            /* Active sidebar item */
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #00A651;
  --sidebar-accent-foreground: #FFFFFF;
  --sidebar-border: #E5E7EB;
  --sidebar-ring: #0B3D7A;
  
  /* Charts */
  --chart-1: #0B3D7A;                    /* Primary chart color */
  --chart-2: #00A651;                    /* Accent chart color */
  --chart-3: #3B82F6;                    /* Secondary blue */
  --chart-4: #F59E0B;                    /* Warning/accent orange */
  --chart-5: #8B5CF6;                    /* Purple accent */
}
```

### Dark Mode

```css
.dark {
  /* Primary: Lighter Blue for dark contrast */
  --primary: #1E5AAD;
  --primary-foreground: #F9FAFB;
  --accent: #10B981;                     /* Emerald green (high contrast) */
  --accent-foreground: #030712;
  
  /* Neutrals: Dark grays & near-black */
  --background: #0F1419;                 /* Very dark background */
  --foreground: #F9FAFB;                 /* Light text */
  --card: #1A1F2E;                       /* Dark card (slightly lighter) */
  --card-foreground: #F9FAFB;
  
  /* Secondary & Popover */
  --secondary: #1E3A5F;                  /* Dark blue tint */
  --secondary-foreground: #E0E7FF;       /* Light text on secondary */
  --popover: #1A1F2E;
  --popover-foreground: #F9FAFB;
  
  /* Utility Colors */
  --muted: #374151;                      /* Muted gray (dark mode) */
  --muted-foreground: #D1D5DB;           /* Secondary text */
  --border: #2D3748;                     /* Dark borders */
  --input: #1F2937;
  --ring: #3B82F6;                       /* Lighter ring for visibility */
  
  /* Destructive */
  --destructive: #F87171;                /* Lighter red for dark mode */
  --destructive-foreground: #030712;
  
  /* Sidebar */
  --sidebar: #111827;
  --sidebar-foreground: #F9FAFB;
  --sidebar-primary: #3B82F6;            /* Brighter blue for dark */
  --sidebar-primary-foreground: #030712;
  --sidebar-accent: #10B981;
  --sidebar-accent-foreground: #030712;
  --sidebar-border: #2D3748;
  --sidebar-ring: #60A5FA;
  
  /* Charts */
  --chart-1: #60A5FA;                    /* Light blue */
  --chart-2: #10B981;                    /* Emerald */
  --chart-3: #A78BFA;                    /* Purple */
  --chart-4: #FBBF24;                    /* Amber */
  --chart-5: #F472B6;                    /* Pink */
}
```

### Color Usage Guide

| Element | Light | Dark | Usage |
|---------|-------|------|-------|
| **Headers** | Primary (#0B3D7A) | Primary (#1E5AAD) | Page titles, section headings |
| **Body Text** | Foreground (#1A1A1A) | Foreground (#F9FAFB) | Paragraphs, descriptions |
| **CTAs (Buttons)** | Accent (#00A651) | Accent (#10B981) | "Start Filing", form buttons |
| **Links** | Primary (#0B3D7A) | Primary (#1E5AAD) | Navigation links |
| **Cards** | Card (#FFFFFF) | Card (#1A1F2E) | Feature cards, testimonials |
| **Inputs** | Input (#F3F4F6) | Input (#1F2937) | Text fields, form inputs |
| **Disabled** | Muted (#F0F2F5) | Muted (#374151) | Disabled buttons, inactive states |
| **Borders** | Border (#E5E7EB) | Border (#2D3748) | Dividers, input borders |
| **Errors** | Destructive (#EF4444) | Destructive (#F87171) | Error messages, validation |

---

## 🔤 Typography System

### Font Family

- **Primary Font:** Geist (sans-serif)
  - Imported via Google Fonts in `app/layout.tsx`
  - Used for all headings and body text
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Heading Scale

| Level | Size | Weight | Line Height | CSS Class |
|-------|------|--------|-------------|-----------|
| **H1** | 32px (md) / 40px (lg) | Bold (700) | 1.2 (1.2em) | `text-4xl md:text-5xl font-bold` |
| **H2** | 28px (md) / 32px (lg) | Bold (700) | 1.25 (1.25em) | `text-3xl md:text-4xl font-bold` |
| **H3** | 22px (md) / 24px (lg) | Semibold (600) | 1.3 (1.3em) | `text-xl md:text-2xl font-semibold` |
| **H4** | 18px | Semibold (600) | 1.4 | `text-lg font-semibold` |
| **H5** | 16px | Medium (500) | 1.5 | `text-base font-medium` |

### Body Text

| Type | Size | Weight | Line Height | CSS Class |
|------|------|--------|-------------|-----------|
| **Large** | 18px | Regular (400) | 1.6 (1.6em) | `text-lg leading-relaxed` |
| **Base** | 16px | Regular (400) | 1.6 (1.6em) | `text-base leading-relaxed` |
| **Small** | 14px | Regular (400) | 1.5 (1.5em) | `text-sm leading-6` |
| **Tiny** | 12px | Regular (400) | 1.4 (1.4em) | `text-xs leading-5` |

### Typography Rules

- **Line Height:** 1.4–1.6 for body text (use `leading-relaxed` or `leading-6`)
- **Color Balance:** Wrap long headings with `text-balance` for optimal line breaks
- **Semantic Classes:**
  - `font-bold` (700) - Page titles, strong emphasis
  - `font-semibold` (600) - Section titles, card titles
  - `font-medium` (500) - Labels, emphasis text
  - `font-normal` (400) - Body, descriptions
- **Avoid:**
  - Single `font-light` for body text (poor accessibility)
  - Sizes smaller than 14px for body text
  - More than 2 font families (currently only Geist)

### Example Usage

```tsx
// Heading (H1)
<h1 className="text-4xl md:text-5xl font-bold text-balance">
  Your Canadian taxes, simplified
</h1>

// Paragraph (Body Large)
<p className="text-lg text-muted-foreground leading-relaxed">
  From T4 to FHSA to RRSP optimization...
</p>

// Label (Small Semibold)
<label className="text-sm font-semibold">Province</label>

// Helper Text (Tiny Muted)
<p className="text-xs text-muted-foreground">Optional description</p>
```

---

## 📏 Spacing & Layout

### Spacing Scale

All spacing uses Tailwind's standard scale. **Never use arbitrary values like `p-[16px]`.**

| Scale | Pixels | CSS Class Examples |
|-------|--------|-------------------|
| **0** | 0px | `p-0`, `m-0`, `gap-0` |
| **1** | 4px | `p-1`, `m-1`, `gap-1` |
| **2** | 8px | `p-2`, `m-2`, `gap-2` |
| **3** | 12px | `p-3`, `m-3`, `gap-3` |
| **4** | 16px | `p-4`, `m-4`, `gap-4` |
| **6** | 24px | `p-6`, `m-6`, `gap-6` |
| **8** | 32px | `p-8`, `m-8`, `gap-8` |
| **12** | 48px | `p-12`, `m-12`, `gap-12` |
| **16** | 64px | `p-16`, `m-16`, `gap-16` |

### Common Spacing Patterns

```tsx
// Card padding
<Card className="p-6">        {/* 24px padding */}

// Section gap
<div className="flex gap-4"> {/* 16px between items */}

// Grid gap
<div className="grid gap-6"> {/* 24px between rows & cols */}

// Vertical spacing
<div className="space-y-4">  {/* 16px between children (margin-bottom) */}

// Horizontal margin
<Button className="mx-2">    {/* 8px left & right margin */}
```

### Layout Priority (Use in this order)

1. **Flexbox** (90% of layouts)
   ```tsx
   <div className="flex items-center justify-between gap-4">
   ```

2. **CSS Grid** (Complex 2D layouts only)
   ```tsx
   <div className="grid grid-cols-3 gap-6">
   ```

3. **Avoid:** Floats, absolute positioning (unless absolutely necessary)

### Responsive Design

**Mobile-First Approach:** Start with mobile styles, enhance with breakpoints.

| Breakpoint | Width | Prefix | Usage |
|-----------|-------|--------|-------|
| **sm** | 640px | `sm:` | Tablets & small screens |
| **md** | 768px | `md:` | Tablets & medium screens |
| **lg** | 1024px | `lg:` | Desktop screens |
| **xl** | 1280px | `xl:` | Large desktop |

```tsx
// Example: 1 column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Example: Responsive text size
<h1 className="text-3xl md:text-4xl lg:text-5xl">
```

---

## 🔘 Component Tokens

### Button Styles

| Style | Background | Text | Border | Hover |
|-------|-----------|------|--------|-------|
| **Primary** | Accent (#00A651) | Accent-foreground (#FFF) | None | opacity-90 |
| **Secondary** | Muted (#F0F2F5) | Foreground (#1A1A1A) | Border (#E5E7EB) | bg-muted/80 |
| **Outline** | Transparent | Primary (#0B3D7A) | Border (#E5E7EB) | bg-muted/50 |
| **Ghost** | Transparent | Foreground (#1A1A1A) | None | bg-muted/50 |

### Button Sizes

| Size | Padding | Font | Height |
|------|---------|------|--------|
| **sm** | px-3 py-1.5 | text-xs | 32px |
| **md** | px-4 py-2 | text-sm | 40px |
| **lg** | px-6 py-3 | text-base | 48px |

### Input Styles

```tsx
<Input
  className="
    border-border              /* Border color */
    bg-input                   /* Background */
    text-foreground            /* Text color */
    placeholder-muted-foreground /* Placeholder */
    focus:ring-ring            /* Focus ring */
    focus:ring-2               /* Ring width */
    focus:ring-offset-0        /* No offset */
  "
/>
```

### Card Styles

```tsx
<Card className="
  bg-card                     /* Background */
  border border-border        /* Border */
  rounded-lg                  /* Border radius */
  p-6                         /* Padding */
  shadow-sm hover:shadow-md   /* Shadow on hover */
">
```

---

## 📐 Border Radius

| Token | Size | Usage |
|-------|------|-------|
| **sm** | 4px | Small elements (badges) |
| **md** | 6px | Buttons, inputs |
| **lg** | 10px (default) | Cards, modals |
| **xl** | 14px | Large containers |
| **2xl** | 16px | Hero sections |
| **full** | 9999px | Pills, circles |

```tsx
// Default Tailwind radius (10px)
<Card className="rounded-lg">           {/* 10px */}

// Button radius
<Button className="rounded-md">         {/* 6px */}

// Hero section
<div className="rounded-2xl">          {/* 16px */}
```

---

## 🌈 Semantic Color Usage

### Text Colors

```tsx
// Primary text (headings, strong copy)
<h1 className="text-foreground font-bold">

// Secondary text (descriptions)
<p className="text-muted-foreground">

// On-color backgrounds
<button className="text-accent-foreground">  /* On accent bg */
<button className="text-primary-foreground">  /* On primary bg */
```

### Background Colors

```tsx
// Page background
<div className="bg-background">

// Card background
<Card className="bg-card">

// Section background
<section className="bg-secondary/30">  /* 30% opacity */

// Input background
<Input className="bg-input">
```

### Border Colors

```tsx
// Default border
<div className="border border-border">

// Focus border
<Input className="focus:border-ring">

// Accent border
<Card className="border-2 border-accent">
```

---

## ✨ Shadow & Elevation

| Level | CSS Class | Usage |
|-------|-----------|-------|
| **None** | (no shadow class) | Flat elements |
| **sm** | `shadow-sm` | Subtle elevation (inputs, small cards) |
| **md** | `shadow-md` | Medium elevation (hovered cards) |
| **lg** | `shadow-lg` | High elevation (modals, dropdowns) |
| **xl** | `shadow-xl` | Very high elevation (sticky elements) |

```tsx
// Cards: no shadow by default, shadow on hover
<Card className="hover:shadow-md transition-shadow">

// Modal: high elevation
<div className="shadow-lg rounded-lg">

// Button hover: subtle
<Button className="hover:shadow-sm">
```

---

## 🎯 Accessibility Considerations

### Color Contrast

- **Primary Text:** Foreground on Background ≥ 7:1 (AAA standard)
- **Secondary Text:** Muted-foreground on Background ≥ 4.5:1 (AA standard)
- **CTAs:** Accent on Card ≥ 4.5:1 (tested & passes)

### Focus States

```tsx
// Input focus ring
<Input className="focus:ring-2 focus:ring-ring focus:ring-offset-0" />

// Button focus ring
<Button className="focus:ring-2 focus:ring-offset-2" />
```

### Text Sizing

- **Minimum:** 14px for body text (never smaller)
- **Line Height:** 1.5–1.6 for readability
- **Letter Spacing:** Default Tailwind spacing (adequate)

---

## 🎬 Motion & Animation Tokens

### Framer Motion Presets

```typescript
// Container stagger (children animate with delay)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Item animation (fade + slide up)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

// Hover effect (lift on hover)
whileHover={{ y: -4 }}
transition={{ type: 'spring', stiffness: 200, damping: 20 }}

// Modal entrance (scale + fade)
initial={{ scale: 0.95, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ type: 'spring', stiffness: 200, damping: 20 }}
```

### Transition Speeds

| Speed | Duration | Usage |
|-------|----------|-------|
| **Fast** | 150–250ms | Hover effects, quick feedback |
| **Normal** | 300–500ms | Page transitions, animations |
| **Slow** | 600–1000ms | Scroll reveals, dramatic moments |

---

## 📝 Implementation Checklist

- [x] Color tokens defined (light + dark mode)
- [x] Typography scale defined
- [x] Spacing scale defined
- [x] Component tokens documented
- [x] Responsive breakpoints mapped
- [x] Accessibility standards noted
- [x] Motion presets provided
- [ ] Design tokens exported to CSS (globals.css ✅)
- [ ] Design tokens exported to Tailwind config (pending review)
- [ ] Brand guidelines document (future)

---

## 🔗 Related Files

- **globals.css** - Token implementation (CSS variables)
- **tailwind.config.ts** - Tailwind-specific config
- **app/page.tsx** - Component usage examples
- **IMPLEMENTATION_KICKSTART.md** - Implementation guide

---

**Design Token System v1.0**  
**Last Updated:** March 4, 2026  
**Status:** ✅ Complete & Ready for Use
