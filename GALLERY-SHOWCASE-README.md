# Gallery Showcase Template

A minimal, accessible one-page digital business card template designed for designers and artists to showcase their work.

## Features

- Horizontal image carousel with autoplay, keyboard navigation, and touch support
- Sticky contact button (mobile-friendly)
- Configurable light/dark themes
- Full accessibility support (WCAG AA compliant)
- SEO optimized with structured data
- Responsive design (mobile-first)

## Customization

All content is configured in `src/pages/Index.tsx` at the top of the file. Edit these configuration objects to customize your gallery:

### Site Configuration

```typescript
const siteConfig = {
  title: "Your Name — Designer",
  logo: null, // Set to image path for logo, or null to use text
  logoAlignment: "left" as "left" | "center", // "left" or "center"
}
```

### Contact Configuration

```typescript
const contactConfig = {
  email: "you@domain.com",
  socials: [
    { label: "Instagram", url: "https://instagram.com/yourusername", icon: Instagram },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: Linkedin },
  ],
}
```

Available social icons from `lucide-react`:
- Instagram
- Linkedin
- Twitter
- Facebook
- Github
- Dribbble
- Behance

### Gallery Configuration

```typescript
const galleryConfig = {
  showCaptions: true,
  slides: [
    {
      src: "path/to/image.jpg",
      alt: "Descriptive alt text",
      caption: "Optional caption text",
    },
    // Add 5-8 slides
  ],
}
```

**Image guidelines:**
- Recommended ratio: 3:2 (e.g., 1200×800px)
- Format: WebP or AVIF for best performance
- Size: Keep under 300KB per image
- Alt text: Required for accessibility

### About Section

```typescript
const aboutConfig = {
  text: "Designer working across objects, spaces, and film.",
}
```

Keep it brief (1-2 short sentences).

### Theme Configuration

```typescript
const themeConfig = {
  mode: "light" as "light" | "dark", // "light" or "dark"
}
```

### Footer Configuration

```typescript
const footerConfig = {
  location: "Based in Copenhagen, Denmark",
  copyright: `© ${new Date().getFullYear()} Your Name`,
}
```

## Variants

### Logo Alignment

- **Left**: Logo on left, contact button on right (default)
- **Center**: Logo centered, contact button appears in mobile sticky bar

Change in `siteConfig.logoAlignment`

### Captions

- **On**: Shows captions below carousel
- **Off**: No captions displayed

Change in `galleryConfig.showCaptions`

### Theme

- **Light**: Clean white background
- **Dark**: Ultra-dark background (#0B0B0B)

Change in `themeConfig.mode`

## SEO & Meta Tags

Update these files for proper SEO:

### index.html

- `<title>` - Page title
- `<meta name="description">` - Page description
- Open Graph tags - Social media preview
- Structured Data - JSON-LD schema

Make sure to update:
- Your name
- Your email
- Your social media URLs
- Your website URL

### First Gallery Image

The first image in `galleryConfig.slides` is used as the social media preview image. Choose a compelling hero image.

## Accessibility Features

- Proper ARIA labels and roles
- Keyboard navigation (arrow keys)
- Focus management
- Alt text for all images
- High contrast ratios (WCAG AA)
- Screen reader friendly

## Performance Optimization

- Lazy loading for carousel images
- Prefetch next/prev slides
- 200-300ms transitions
- Optimized for LCP < 2.5s

## Carousel Controls

- **Autoplay**: 5 seconds (pauses on hover/focus)
- **Arrows**: Previous/Next buttons
- **Dots**: Click to jump to specific slide
- **Keyboard**: Arrow keys to navigate
- **Touch**: Swipe left/right on mobile
- **Mouse**: Hover to pause autoplay

## Mobile Optimizations

- Single column layout
- Edge-to-edge carousel
- Sticky bottom contact bar
- Touch-friendly tap targets
- Social icons in footer bar

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android 90+

## Tips

1. **Choose strong images**: First impression matters. Lead with your best work.
2. **Keep captions short**: 3-5 words max (e.g., "Project Name, 2025")
3. **Optimize images**: Use modern formats (WebP/AVIF) and compress
4. **Test on mobile**: 60%+ of visitors will view on mobile devices
5. **Update regularly**: Keep your gallery fresh with recent work

## Common Customizations

### Change Accent Color

Edit `src/index.css`:

```css
--accent: 217 91% 60%; /* Change these HSL values */
```

### Adjust Carousel Speed

In `src/pages/Index.tsx`:

```tsx
<GalleryCarousel
  autoplayInterval={5000} // Change milliseconds (5000 = 5 seconds)
/>
```

### Add More Social Icons

Import from `lucide-react` and add to `contactConfig.socials`:

```typescript
import { Instagram, Twitter, Dribbble } from "lucide-react"

const contactConfig = {
  socials: [
    { label: "Instagram", url: "...", icon: Instagram },
    { label: "Twitter", url: "...", icon: Twitter },
    { label: "Dribbble", url: "...", icon: Dribbble },
  ],
}
```

### Use a Logo Image

Replace `null` with your logo path:

```typescript
const siteConfig = {
  logo: "/images/logo.svg", // or .png, .jpg
}
```

## Development

```bash
bun run dev     # Start development server
bun run build   # Build for production
```

## Questions?

This template follows a minimal, content-first philosophy. If something feels missing, it's probably intentional. Less is more.
