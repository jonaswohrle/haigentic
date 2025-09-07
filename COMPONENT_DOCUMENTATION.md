# Component Libraries Documentation

This document provides comprehensive information about using Aceternity and OriginUI components in your project. Both libraries are installed and organized in separate folders for better maintainability.

## Table of Contents
- [Project Structure](#project-structure)
- [Aceternity Components](#aceternity-components)
- [OriginUI Components](#originui-components)
- [Usage Guide](#usage-guide)
- [Dependencies](#dependencies)
- [Best Practices](#best-practices)

## Project Structure

```
components/
├── ui/                 # Base UI components (shared)
├── aceternity/         # Aceternity animation components (86 components)
└── originui/           # OriginUI ready-to-use components (599 components)
```

## Aceternity Components

Aceternity provides stunning animation and effect components built with React, TypeScript, Tailwind CSS, and Framer Motion.

### Component Categories

#### 1. Card Components
- **3d-card** - Interactive 3D transformation card
- **card-stack** - Stacked cards with animations
- **comet-card** - Card with comet animation effect
- **glare-card** - Card with glare/shine effect
- **focus-cards** - Cards that focus on hover
- **wobble-card** - Cards with wobble animation
- **card-spotlight** - Card with spotlight effect
- **draggable-card** - Draggable card component
- **evervault-card** - Evervault-style animated card
- **text-reveal-card** - Card with text reveal animation
- **meteors-card** - Card with meteor shower effect
- **direction-aware-hover** - Directional hover effects
- **three-d-card** - Advanced 3D card transformations

#### 2. Background Effects
- **aurora-background** - Aurora borealis background effect
- **background-beams** - Animated light beams
- **background-beams-with-collision** - Beams with collision detection
- **background-gradient** - Animated gradient backgrounds
- **background-gradient-animation** - Dynamic gradient animations
- **dot-background** - Dot pattern backgrounds
- **grid-background** - Grid pattern backgrounds
- **grid-small-background** - Small grid pattern
- **ripple-background** - Ripple effect backgrounds
- **shooting-stars** - Shooting stars animation
- **spotlight** - Spotlight effect overlay
- **vortex** - Vortex animation background
- **wavy-background** - Wavy animation background

#### 3. Text Effects
- **animated-beam** - Animated beam text effect
- **animated-shiny-text** - Shiny text animation
- **animated-testimonials** - Animated testimonial carousel
- **text-generate-effect** - Text generation animation
- **text-reveal-card** - Text reveal on cards
- **typewriter-effect** - Typewriter text animation
- **wavy-text** - Wavy text animation
- **word-pull-up** - Word pull up animation
- **word-rotate** - Rotating word effects

#### 4. Button Components
- **animated-subscribe-button** - Animated subscription button
- **border-button** - Button with animated border
- **moving-border** - Moving border effect
- **shimmer-button** - Button with shimmer effect
- **tailwindcss-buttons** - Collection of button styles

#### 5. Input Components
- **multi-step-loader** - Multi-step loading indicator
- **placeholders-and-vanish-input** - Input with placeholder animations
- **input-otp** - OTP input component

#### 6. Navigation Components
- **animated-tabs** - Tabs with animations
- **floating-dock** - Floating dock navigation
- **floating-navbar** - Floating navigation bar
- **navbar-menu** - Navigation menu
- **sidebar** - Animated sidebar

#### 7. Modal & Overlay Components
- **animated-modal** - Animated modal dialog
- **modal** - Basic modal component

#### 8. List & Grid Components
- **bento-grid** - Bento box grid layout
- **animated-list** - List with animations
- **infinite-moving-cards** - Infinite scrolling cards
- **sticky-scroll-reveal** - Sticky scroll reveal effect

#### 9. Visual Effects
- **3d-pin** - 3D pin effect
- **aceternity-logo** - Animated logo component
- **animated-gradient** - Animated gradients
- **animated-grid-pattern** - Animated grid patterns
- **border-beam** - Border beam effect
- **box-reveal** - Box reveal animation
- **container-scroll-animation** - Container scroll effects
- **cool-mode** - Cool mode toggle effect
- **cover** - Cover image effects
- **globe** - 3D globe component
- **hero-parallax** - Hero section with parallax
- **images-slider** - Image slider component
- **lamp** - Lamp lighting effect
- **lens** - Lens effect overlay
- **macbook-scroll** - MacBook scroll animation
- **marquee** - Marquee scrolling text
- **meteors** - Meteor shower effect
- **moving-line** - Moving line animation
- **orbiting-circles** - Orbiting circles animation
- **parallax-scroll** - Parallax scrolling
- **pulsating-button** - Pulsating button effect
- **retro-grid** - Retro grid background
- **scroll-based-velocity** - Velocity-based scroll
- **shine-border** - Shine border effect
- **sparkles** - Sparkles effect
- **svg-mask-effect** - SVG mask effects
- **tabs** - Tab component
- **tracing-beam** - Tracing beam effect

### Example Usage - Aceternity

```tsx
// Import from the aceternity folder
import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";
import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation";
import { CardStack } from "@/components/aceternity/card-stack";

// Example: Animated Testimonials
const testimonials = [
  {
    quote: "This library is amazing!",
    name: "John Doe",
    designation: "CEO at TechCorp",
    src: "/avatar1.jpg"
  }
];

function MyComponent() {
  return (
    <AnimatedTestimonials 
      testimonials={testimonials}
      autoplay={true}
    />
  );
}

// Example: Background Gradient Animation
function HeroSection() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(108, 0, 162)"
      gradientBackgroundEnd="rgb(0, 17, 82)"
      interactive={true}
    >
      <h1>Welcome to My Site</h1>
    </BackgroundGradientAnimation>
  );
}
```

## OriginUI Components

OriginUI provides 599 production-ready components organized by number (comp-01 through comp-599). These are complete, self-contained components ready to use in your application.

### Component Organization

OriginUI components are numbered sequentially and cover various UI patterns:
- **comp-01 to comp-100**: Basic UI components and patterns
- **comp-101 to comp-200**: Form and input components
- **comp-201 to comp-300**: Card and list components
- **comp-301 to comp-400**: Navigation and layout components
- **comp-401 to comp-500**: Data display components
- **comp-501 to comp-599**: Complex UI patterns and pages

### Example Usage - OriginUI

```tsx
// Import from the originui folder
import Comp01 from "@/components/originui/comp-01";
import Comp02 from "@/components/originui/comp-02";
import Comp100 from "@/components/originui/comp-100";

// Use directly in your components
function MyPage() {
  return (
    <div>
      <Comp01 />
      <Comp02 />
      {/* Each component is self-contained with its own styling */}
    </div>
  );
}
```

## Usage Guide

### For AI Tools and Developers

When implementing features, follow these patterns:

1. **For animations and effects**: Use Aceternity components
   ```tsx
   import { ComponentName } from "@/components/aceternity/component-name";
   ```

2. **For ready-made UI sections**: Use OriginUI components
   ```tsx
   import CompXX from "@/components/originui/comp-xx";
   ```

3. **For base UI elements**: Use shared UI components
   ```tsx
   import { Button } from "@/components/ui/button";
   import { Input } from "@/components/ui/input";
   ```

### Component Selection Guide

#### Use Aceternity when you need:
- Animated backgrounds
- Text animations
- Interactive cards with effects
- Parallax scrolling
- 3D transformations
- Particle effects
- Loading animations
- Hover effects

#### Use OriginUI when you need:
- Complete page sections
- Ready-to-use forms
- Data tables
- Dashboard components
- E-commerce components
- Marketing sections
- Authentication pages
- Settings panels

## Dependencies

### Core Dependencies
- React 18+
- TypeScript
- Tailwind CSS
- class-variance-authority
- tailwind-merge

### Aceternity-specific
- framer-motion (motion)
- @tabler/icons-react
- Various animation libraries

### OriginUI-specific
- radix-ui components
- lucide-react icons
- Additional UI primitives

## Best Practices

### 1. Import Optimization
```tsx
// Good - Direct imports
import { AnimatedModal } from "@/components/aceternity/animated-modal";

// Avoid - Don't import from index files that don't exist
// import { AnimatedModal } from "@/components/aceternity";
```

### 2. Component Composition
```tsx
// Combine components for complex UIs
function HeroSection() {
  return (
    <div className="relative">
      {/* Background effect from Aceternity */}
      <AuroraBackground>
        {/* Content from OriginUI */}
        <Comp50 />
      </AuroraBackground>
    </div>
  );
}
```

### 3. Styling Consistency
- Both libraries use Tailwind CSS
- Use the `cn()` utility from `@/lib/utils` for className merging
- Respect the existing theme variables

### 4. Performance Considerations
- Lazy load heavy animation components
- Use React.memo for components with complex animations
- Consider viewport-based loading for background effects

```tsx
// Example: Lazy loading
const BackgroundBeams = lazy(() => 
  import("@/components/aceternity/background-beams")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BackgroundBeams />
    </Suspense>
  );
}
```

### 5. Responsive Design
- All components are mobile-responsive
- Test on various screen sizes
- Use Tailwind's responsive utilities for adjustments

## Component Discovery

### Finding the Right Component

1. **Browse by category** - Check the categories above
2. **Search by keyword** - Use your IDE's search in the component folders
3. **Visual inspection** - Components are named descriptively
4. **Check examples** - Look for demo implementations in the components

### Quick Reference for Common Tasks

| Task | Aceternity Component | OriginUI Component |
|------|---------------------|-------------------|
| Hero Section | hero-parallax, aurora-background | comp-01 to comp-50 |
| Navigation | floating-navbar, sidebar | comp-301 to comp-350 |
| Cards | 3d-card, glare-card, card-stack | comp-201 to comp-300 |
| Forms | placeholders-and-vanish-input | comp-101 to comp-200 |
| Buttons | shimmer-button, pulsating-button | Built into various comps |
| Modals | animated-modal | comp-401 to comp-450 |
| Tables | - | comp-451 to comp-500 |
| Testimonials | animated-testimonials | comp-501 to comp-550 |

## Troubleshooting

### Common Issues

1. **Missing dependencies**: Run `pnpm install` to ensure all packages are installed
2. **Import errors**: Check the exact file path and component name
3. **Styling conflicts**: Use the `cn()` utility to merge classes properly
4. **Animation performance**: Reduce animation complexity on lower-end devices

### Getting Help

- Check component source code for usage examples
- Look for TypeScript interfaces for prop definitions
- Components are self-documenting through TypeScript

## Summary

You now have access to:
- **86 Aceternity components** for animations and effects
- **599 OriginUI components** for complete UI sections
- **40+ base UI components** for common elements

All components are:
- ✅ TypeScript ready
- ✅ Tailwind CSS styled
- ✅ Responsive by default
- ✅ Production ready
- ✅ Accessible
- ✅ Customizable

Use this documentation to quickly find and implement the components you need for any UI requirement.