# Kepler-pop

**Kepler-pop** is a cosmic puzzle adventure game where you explore the universe with adorable plant characters, solve puzzles, and enjoy various challenges.

## Key Features

- **Distinct Modes**: Enjoy the game in either casual mode or challenge mode, depending on your preference!
- **Power-ups & Boosters**: Collect a variety of power-ups to overcome difficult levels and aim for the highest score.
- **Leaderboard**: Compete for the top spot in the global ranking system.

## Tech Stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS** (custom theme & animations)
- **GSAP** (scroll/text/floating/parallax and more animations)
- **Radix UI** (various UI components)
- **Others**: react-hook-form, zod, recharts, embla-carousel, lucide-react, etc.

## Project Structure

- `app/` : Next.js entry point, pages, and layout
- `components/` : UI and game-related components
  - `ui/` : Reusable UI components such as buttons, cards, dialogs, etc.
- `hooks/` : Custom React hooks
- `lib/` : GSAP animation utilities, class merging, etc.
- `styles/` : Tailwind and global styles
- `public/` : Static resources such as images and sounds

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
pnpm start

# Lint check
pnpm lint
```

## Customization & Configuration

- **Tailwind**: Extend custom colors, fonts, and animations in `tailwind.config.ts`
- **GSAP**: Initialize various animations (scroll, text, floating, parallax) in `lib/gsap-utils.ts`
- **Global Fonts**: Inter, Press Start 2P (Google Fonts)
- **Dark Mode**: Supports system/manual switching via `ThemeProvider`

## Download & Community

- **Mobile App**: Available for download on Google Play and App Store (with in-app guidance)
- **Community**: Stay updated and share tips on Discord, Twitter, Instagram, and more

