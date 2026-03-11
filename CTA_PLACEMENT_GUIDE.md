# TaxEase Canada - CTA Placement & Analytics Guide

**Purpose:** Visual reference for all Call-to-Action placements, button copy, and analytics tracking events.

---

## 📍 CTA Map (Visual Layout)

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                        │
│                                                          │
│  Logo    Features    Pricing    FAQ      [START FILING] │ ← CTA #1 (Desktop)
│                                    [START FILING]       │ ← CTA #2 (Mobile Menu)
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    HERO SECTION                         │
│                                                          │
│  "Your Canadian taxes,        ┌─────────────────┐     │
│   simplified"                 │  QUICK START    │     │
│                               │                 │     │
│  "From T4 to FHSA..."         │  Province...    │     │
│                               │  Complexity...  │     │
│  [GET MY MAX REFUND] ← CTA #3 │  Contact...     │     │
│  [WATCH DEMO]                 │                 │     │
│                               │ [BEGIN NOW] ← CTA #4 │
│  50K+ Users | $12M Refunds    └─────────────────┘     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                  TRUST BADGES                           │
│  CRA EFILE | 10 Min Filing | Maximum Refund | 24/7 Support
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              FEATURES (6 Cards)                         │
│  T4/T4A | FHSA Ready | Deduction Finder               │
│  Audit Defense | RRSP Optimizer | Expert Review       │
│                                                        │
│                    [START FILING TODAY] ← CTA #5       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           HOW TAXEASE WORKS (3-Step)                   │
│  1. Quick Q's → 2. We Prepare → 3. File & Refund     │
│                                                        │
│                [BEGIN YOUR FILING] ← CTA #6           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         TESTIMONIALS (3 Cards with ⭐)                │
│  Marcus C. | Sarah L. | David K.                       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         PRICING ($149 BEST VALUE)                      │
│  Complete Filing / $149 CAD                            │
│  ✓ T4/T4A, FHSA, RRSP                                 │
│  ✓ Deduction optimization                             │
│  ✓ 24/7 expert support                                │
│  ✓ CRA EFILE included                                 │
│                                                        │
│                    [START FILING] ← CTA #7            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    FAQ (5 Questions)                    │
│  Q1: How long does filing take?                        │
│  Q2: Is my data secure?                                │
│  Q3: Can I file for self-employed income?              │
│  Q4: What if I made a mistake?                         │
│  Q5: Do you guarantee my refund?                       │
│                                                        │
│  Still have questions?                                 │
│  [CONTACT SUPPORT] ← CTA #8 (Bonus)                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                FOOTER CTA (Dark Blue)                   │
│  "Ready to get your maximum refund?"                   │
│  "Join thousands of Canadians..."                      │
│                                                        │
│                    [FILE NOW] ← CTA #9                 │
│                                                        │
│                  Footer Links                          │
│                  © 2024 TaxEase Canada                 │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 CTA Inventory & Specifications

### CTA #1: Navigation Bar (Desktop)

| Property | Value |
|----------|-------|
| **Text** | "Start Filing" |
| **Location** | Right side of sticky navbar (desktop only) |
| **Style** | Solid button, accent green background |
| **Dimensions** | Medium size (~48px height) |
| **Trigger** | Opens multi-step modal |
| **Visible On** | Desktop only (hidden on mobile) |
| **Accessibility** | Keyboard navigable, focus ring |
| **Analytics Event** | `nav_cta_click` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Start Filing
</Button>
```

---

### CTA #2: Navigation Bar (Mobile)

| Property | Value |
|----------|-------|
| **Text** | "Start Filing" |
| **Location** | Mobile hamburger menu dropdown |
| **Style** | Full-width button in mobile menu |
| **Dimensions** | Full width, ~48px height |
| **Trigger** | Opens modal, closes hamburger menu |
| **Visible On** | Mobile (<640px) only |
| **Accessibility** | Touch-friendly, focus ring |
| **Analytics Event** | `mobile_nav_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={() => {
    openModal()
    setIsMenuOpen(false)
  }}
  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Start Filing
</Button>
```

---

### CTA #3: Hero Section (Main Button)

| Property | Value |
|----------|-------|
| **Text** | "Get My Max Refund" |
| **Subtext** | ChevronRight icon after text |
| **Location** | Left side of hero, below hero copy |
| **Style** | Solid accent green button |
| **Dimensions** | Large (~48px height, 100% on mobile) |
| **Trigger** | Opens multi-step modal |
| **Prominence** | HIGH - Primary CTA |
| **Visible On** | All screen sizes |
| **Animation** | Hover: opacity-90, subtle scale |
| **Analytics Event** | `hero_primary_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Get My Max Refund <ChevronRight className="w-4 h-4 ml-2" />
</Button>
```

---

### CTA #4: Hero Section (Right Card)

| Property | Value |
|----------|-------|
| **Text** | "Begin Now" |
| **Subtext** | ChevronRight icon |
| **Location** | Right sidebar "QUICK START" card (desktop) / Below hero (mobile) |
| **Style** | Accent green button on primary background |
| **Dimensions** | Full width within card, ~48px |
| **Trigger** | Opens multi-step modal |
| **Prominence** | HIGH - Secondary CTA |
| **Visible On** | All screen sizes |
| **Background** | Primary blue (#0B3D7A) card |
| **Text Color** | White on blue |
| **Analytics Event** | `hero_card_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  size="lg"
  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Begin Now <ChevronRight className="w-4 h-4 ml-2" />
</Button>
```

---

### CTA #5: Features Section

| Property | Value |
|----------|-------|
| **Text** | "Start Filing Today" |
| **Subtext** | ChevronRight icon |
| **Location** | Center, below 6 feature cards |
| **Style** | Solid accent green button |
| **Dimensions** | Large (~48px height) |
| **Trigger** | Opens multi-step modal |
| **Prominence** | MEDIUM - Conversion reinforcement |
| **Visible On** | All screen sizes |
| **Spacing** | 48px top margin (mt-12) |
| **Animation** | Fade-in on scroll view |
| **Analytics Event** | `features_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Start Filing Today <ChevronRight className="w-4 h-4 ml-2" />
</Button>
```

---

### CTA #6: Process Section

| Property | Value |
|----------|-------|
| **Text** | "Begin Your Filing" |
| **Subtext** | ChevronRight icon |
| **Location** | Center, below 3-step process |
| **Style** | Solid accent green button |
| **Dimensions** | Large (~48px height) |
| **Trigger** | Opens multi-step modal |
| **Prominence** | MEDIUM - Conversion reinforcement |
| **Visible On** | All screen sizes |
| **Background Section** | Light secondary (#F0F4F8) |
| **Spacing** | 48px top margin (mt-12) |
| **Animation** | Fade-in on scroll view |
| **Analytics Event** | `process_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Begin Your Filing <ChevronRight className="w-4 h-4 ml-2" />
</Button>
```

---

### CTA #7: Pricing Section

| Property | Value |
|----------|-------|
| **Text** | "Start Filing" |
| **Subtext** | ChevronRight icon |
| **Location** | Inside pricing card, full width button |
| **Style** | Solid accent green button |
| **Dimensions** | Full width, ~48px |
| **Trigger** | Opens multi-step modal |
| **Prominence** | HIGH - Primary conversion point |
| **Visible On** | All screen sizes |
| **Card Border** | 2px accent green accent (BEST VALUE badge) |
| **Animation** | Scale + fade on scroll |
| **Analytics Event** | `pricing_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  size="lg"
  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  Start Filing <ChevronRight className="w-4 h-4 ml-2" />
</Button>
```

---

### CTA #8: FAQ Support

| Property | Value |
|----------|-------|
| **Text** | "Contact Support" |
| **Location** | Below FAQ section in support card |
| **Style** | Outline button (secondary style) |
| **Trigger** | Links to support/contact (Phase 2) |
| **Prominence** | LOW - Secondary support option |
| **Visible On** | All screen sizes |
| **Background** | Muted (#F0F2F5) |
| **Analytics Event** | `faq_contact` |

**CSS Classes:**
```tsx
<Button 
  variant="outline"
  className="border-primary text-primary hover:bg-primary/5"
>
  Contact Support
</Button>
```

---

### CTA #9: Footer CTA Section

| Property | Value |
|----------|-------|
| **Text** | "File Now" |
| **Subtext** | ChevronRight icon |
| **Location** | Center of footer CTA section |
| **Style** | Solid accent green button |
| **Dimensions** | Large (~48px height) |
| **Trigger** | Opens multi-step modal |
| **Prominence** | HIGH - Final conversion opportunity |
| **Visible On** | All screen sizes |
| **Background Section** | Primary blue (#0B3D7A) with light text |
| **Text Color** | White on blue |
| **Animation** | Fade-in on scroll |
| **Analytics Event** | `footer_cta` |

**CSS Classes:**
```tsx
<Button 
  onClick={openModal}
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
>
  File Now <ChevronRight className="w-4 h-4 ml-2" />
</Button>
```

---

## 🎯 Analytics Tracking Events

### Event Naming Convention

**Format:** `{location}_{action}` or `{location}_cta`

**Examples:**
- `nav_cta_click` - Navigation CTA clicked
- `hero_primary_cta` - Hero main button clicked
- `pricing_cta` - Pricing button clicked
- `footer_cta` - Footer button clicked

### Funnel Events (Multi-Step Modal)

| Step | Event Name | Trigger |
|------|-----------|---------|
| **Step 1** | `modal_opened` | User clicks any CTA |
| **Step 1** | `province_selected` | User selects province |
| **Step 1** | `province_next_clicked` | User clicks Next button |
| **Step 2** | `complexity_selected` | User selects complexity option |
| **Step 2** | `complexity_next_clicked` | User clicks Next button |
| **Step 3** | `contact_info_entered` | User fills name + phone |
| **Step 3** | `contact_submit_clicked` | User clicks Complete |
| **Step 4** | `form_success` | Success screen displayed |
| **Any** | `modal_abandoned` | User closes without completing |
| **Any** | `modal_error` | Validation error triggered |

### Implementation (Phase 2)

```typescript
// Example GA4 event tracking
const trackEvent = (eventName: string, params?: Record<string, any>) => {
  gtag.event(eventName, {
    event_category: 'engagement',
    event_label: location.pathname,
    ...params,
  })
}

// Usage
const openModal = () => {
  trackEvent('modal_opened', { cta_location: 'hero_primary' })
  setIsModalOpen(true)
}
```

---

## 🔄 Conversion Funnel Map

```
                          CTA CLICK
                          (8 sources)
                               ↓
                         Modal Opens
                         └─ Track: modal_opened
                               ↓
         ┌─────────────────────────────────────────┐
         │        STEP 1: PROVINCE SELECTION       │
         │                                         │
         │  Ontario / BC / Alberta / etc.         │
         │                                         │
         │  [BACK] → [NEXT (Disabled until sel)]  │
         │                                         │
         │  Track: province_selected               │
         │  Track: province_next_clicked           │
         └────────────────────┬────────────────────┘
                              ↓
         ┌─────────────────────────────────────────┐
         │       STEP 2: INCOME COMPLEXITY        │
         │                                         │
         │  ☑ T4 Employment                       │
         │  ☑ T4A Contract Work                   │
         │  ☑ Self-Employment                     │
         │  ... (multiple selections)              │
         │                                         │
         │  [BACK] → [NEXT (Disabled until sel)]  │
         │                                         │
         │  Track: complexity_selected             │
         │  Track: complexity_next_clicked         │
         └────────────────────┬────────────────────┘
                              ↓
         ┌─────────────────────────────────────────┐
         │      STEP 3: CONTACT INFORMATION       │
         │                                         │
         │  Full Name: _______________            │
         │  Phone:     _______________            │
         │                                         │
         │  [BACK] → [COMPLETE (Disabled)]        │
         │                                         │
         │  Track: contact_info_entered            │
         │  Track: contact_submit_clicked          │
         └────────────────────┬────────────────────┘
                              ↓
         ┌─────────────────────────────────────────┐
         │          STEP 4: SUCCESS! ✓            │
         │                                         │
         │  ✓ "You're all set, Marcus!"          │
         │  "Expert will contact in 24 hrs"      │
         │                                         │
         │  Filing Summary:                        │
         │  • Province: Ontario                    │
         │  • Income: T4, Self-Emp                │
         │                                         │
         │  [CLOSE]                               │
         │                                         │
         │  Track: form_success                    │
         │  Track: form_completion_time            │
         │  Track: completion_source (CTA source)  │
         └─────────────────────────────────────────┘


ABANDONMENT PATHS:
├─ Click back multiple times → modal_abandoned
├─ Close modal during any step → modal_abandoned + step_abandoned_{step_number}
├─ Validation error (skip step) → modal_error + error_type_{field}
└─ Leave page → session_end (GA4 built-in)
```

---

## 📊 CTA Performance Metrics (Phase 2 Targets)

### Click-Through Rates (CTR)

| CTA | Target CTR | Rationale |
|-----|-----------|-----------|
| **Nav CTA** | 3–5% | Above fold, always visible |
| **Hero Primary CTA** | 8–12% | Hero focus, high visibility |
| **Hero Card CTA** | 5–8% | Secondary position |
| **Features CTA** | 4–6% | Conversion reinforcement |
| **Process CTA** | 3–5% | Mid-page |
| **Pricing CTA** | 10–15% | High-intent moment |
| **Footer CTA** | 2–4% | Last chance conversion |

### Form Completion Rates

| Step | Target Completion | Drop-off Tolerance |
|------|------------------|------------------|
| **Step 1 → Step 2** | 90% | Allow 10% drop-off |
| **Step 2 → Step 3** | 85% | Allow 15% drop-off |
| **Step 3 → Step 4** | 95% | Keep < 5% drop-off |
| **Overall Completion** | 70% | 30% abandonment acceptable |

---

## 🎨 Button Style Variants

### Primary CTA (Accent Green)

```tsx
// Default state
bg-accent                          // #00A651
text-accent-foreground             // White
hover:bg-accent/90                 // 90% opacity on hover

// Disabled state
disabled:opacity-50                // Grayed out
disabled:cursor-not-allowed        // Disabled cursor

// Focus state
focus:ring-2                        // 2px ring
focus:ring-primary                 // Ring color
focus:ring-offset-2                // 2px offset
```

### Secondary CTA (Outline)

```tsx
// Default state
border-2 border-primary            // Blue border
text-primary                       // Blue text
bg-transparent                     // Transparent background
hover:bg-primary/5                 // Light blue tint on hover

// Dark mode
dark:border-primary                // Same border
dark:text-primary                  // Same text
dark:hover:bg-primary/10           // Slightly darker tint
```

---

## 📱 Responsive CTA Behavior

| Screen | Changes |
|--------|---------|
| **Mobile (<640px)** | Full-width buttons, increased padding for touch, stacked layout |
| **Tablet (640–1024px)** | Medium width, normal padding, may remain inline |
| **Desktop (>1024px)** | Constrained width, normal padding, inline with text |

### Mobile Optimization

```tsx
// Mobile: Full width
<Button className="w-full md:w-auto">

// Mobile: Increased touch target (48px minimum)
size="lg"  // 48px height

// Mobile: Proper spacing for thumb reach
mb-4       // Below hero text on mobile
mt-4       // Above features on mobile
```

---

## ✅ CTA Implementation Checklist

- [x] CTA #1 (Nav Desktop) - Implemented
- [x] CTA #2 (Nav Mobile) - Implemented
- [x] CTA #3 (Hero Primary) - Implemented
- [x] CTA #4 (Hero Card) - Implemented
- [x] CTA #5 (Features) - Implemented
- [x] CTA #6 (Process) - Implemented
- [x] CTA #7 (Pricing) - Implemented
- [x] CTA #8 (FAQ Support) - Implemented
- [x] CTA #9 (Footer) - Implemented
- [ ] Analytics events tracking (Phase 2)
- [ ] Conversion funnel analysis (Phase 2)
- [ ] A/B testing setup (Phase 2)
- [ ] Performance metrics dashboard (Phase 2)

---

## 🎯 CTA Hierarchy Summary

```
TIER 1 (Highest Priority - Most Visible)
├─ Hero Primary CTA ("Get My Max Refund")
└─ Pricing CTA ("Start Filing")

TIER 2 (High Priority - Frequently Visible)
├─ Navigation CTA ("Start Filing")
├─ Hero Card CTA ("Begin Now")
└─ Footer CTA ("File Now")

TIER 3 (Medium Priority - Mid-Page Reinforcement)
├─ Features CTA ("Start Filing Today")
└─ Process CTA ("Begin Your Filing")

TIER 4 (Lower Priority - Support/Secondary)
└─ FAQ Support ("Contact Support")
```

---

## 📋 Testing Checklist (Phase 1 QA)

- [ ] All CTAs clickable and functional
- [ ] Modal opens on all CTA clicks
- [ ] Modal closes properly (X button, outside click)
- [ ] Form steps progress correctly
- [ ] Form validation prevents empty submissions
- [ ] Success screen displays after completion
- [ ] Mobile: All CTAs accessible (thumb reach)
- [ ] Mobile: Buttons full width
- [ ] Tablet: Responsive layout maintained
- [ ] Desktop: All CTAs visible without scrolling (nav)
- [ ] Hover states work (color change, slight scale)
- [ ] Focus states visible (ring visible)
- [ ] Keyboard navigation works (Tab through CTAs)
- [ ] No console errors on modal open/close
- [ ] Animation smooth (no jank)

---

**Document Version:** 1.0  
**Last Updated:** March 4, 2026  
**Status:** ✅ Complete & Ready for Implementation
