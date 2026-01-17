# Premium Dog Food Landing Page

A modern, responsive landing page for premium healthy dog food products, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library for building the interface |
| TypeScript | 5.9 | Type-safe JavaScript superset |
| Vite | 7.2.4 | Fast build tool and dev server |
| Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| ESLint | 9.39.1 | Code linting and quality |

## Project Structure

```
landing-page/
├── src/
│   ├── assets/
│   │   ├── images/          # Product and brand images
│   │   │   ├── applepay.png
│   │   │   ├── dogFood.jpg
│   │   │   ├── feeding.gif
│   │   │   ├── googlepay.png
│   │   │   ├── happyDog.png
│   │   │   ├── healthyMeal.png
│   │   │   ├── mastercard.png
│   │   │   ├── paypal.png
│   │   │   ├── react.svg
│   │   │   └── visa.png
│   │   └── svg/             # Custom SVG icons
│   │       ├── RealFoodIcon.tsx
│   │       ├── PremiumIngredientIcon.tsx
│   │       ├── MadeFreshIcon.tsx
│   │       └── VetDevelopedIcon.tsx
│   ├── components/
│   │   └── pages/
│   │       └── Landing.tsx  # Main landing page component
│   ├── App.tsx              # Root application component
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles (Tailwind imports)
│   └── main.tsx             # Application entry point
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

##  Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/parsimeikoikai/product-page.git
cd  product-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build production-ready bundle with TypeScript checking |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check for code quality issues |

##  Code Architecture

### Application Entry Point (`src/main.tsx`)

This file is the entry point of the React application:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Key Points:**
- Uses `StrictMode` for development checks (double-invokes functions to detect side effects)
- `createRoot` is React 18+'s new rendering API for concurrent features
- Imports global styles including Tailwind CSS
- Mounts the `App` component to the `#root` DOM element

### Root Component (`src/App.tsx`)

The main application wrapper:

```tsx
import './App.css'
import Landing from './components/pages/Landing'

function App() {
  return <Landing />;
}

export default App
```

**Key Points:**
- Minimal root component that renders the Landing page
- Imports App-level styles for global app styling

### Landing Page Component (`src/components/pages/Landing.tsx`)

This is the main component containing the entire landing page. It includes:

#### 1. Feature Section ("What makes us different")

```tsx
<h2 className="text-4xl font-semibold text-center mb-16 text-gray-900">
  What makes us different <br />
  <span>makes them stronger</span>
</h2>
```

**Features displayed:**
- **Real Food** - Wholesome recipes with real meat and veggies
- **Premium Ingredient** - Unmatched safety and quality
- **Made Fresh** - Maintaining whole food integrity
- **Vet Developed** - Surpassing industry expectations

**Split Image Design:** The central image uses a creative split design showing:
- Left half: `healthyMeal.png` (healthy meal display)
- Right half: `dogFood.jpg` (product packaging)
- Orange divider line for visual separation

#### 2. Call-to-Action Section

```tsx
<button className="h-12 w-115.5 text-white bg-[#EE6F4B] ...">
  Get your dog's healthy meal today!
</button>
```

**Payment Options Supported:**
- PayPal, Visa, Mastercard, Apple Pay, Google Pay
- 30-day money back guarantee badge

#### 3. Statistics Section

Displays key product statistics:
- 97% of dogs choose their food over leading brands
- 84% superior nutrition with patented probiotics
- 92% high protein/fat digestibility for ideal stool quality

#### 4. Content Sections

**Section A - Nutrition Foundation:**
```tsx
<h3 className="text-4xl font-semibold mb-4 text-gray-900 leading-tight">
  Nutrition is the foundation for longer, healthier lives in dogs.
</h3>
```

**Section B - Gastrointestinal Health:**
- Explains scientific studies and veterinarian consultations
- 91% customer satisfaction rate

**Section C - Prebiotics:**
- Describes prebiotic benefits for gut health
- Supports beneficial bacteria growth

### SVG Icons (`src/assets/svg/`)

Custom SVG icons created with detailed vector graphics:

#### RealFoodIcon.tsx
- Food/bowl related vector paths
- Shows healthy food concepts
- 36x36 viewport

#### PremiumIngredientIcon.tsx
- Shield/protection symbolism
- Quality assurance representation
- 38x36 viewport

#### MadeFreshIcon.tsx
- Freshness/health indicators
- Natural elements
- 36x37 viewport

#### VetDevelopedIcon.tsx
- Medical/health cross symbols
- Professional endorsement
- 37x37 viewport

**Icon Design:**
- All icons use `#424153` (dark gray) stroke/fill
- Consistent 1.3px stroke width where applicable
- Clean, professional vector paths

### Styling (`src/index.css`)

```css
@import "tailwindcss";

body {
  font-family: "Inter Tight", system-ui, -apple-system, sans-serif;
}
```

**Styling Approach:**
- Tailwind CSS v4 with `@import` syntax
- "Inter Tight" font family from Google Fonts
- Responsive design using Tailwind's utility classes

### Configuration Files

#### Vite Config (`vite.config.ts`)

```tsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

**Key Features:**
- React plugin for JSX transformation
- Tailwind CSS v4 plugin integration
- `@` alias for clean imports (e.g., `@/assets/images/`)

#### TypeScript Config (`tsconfig.json`)

- Targets ES2020+ for modern browser support
- Strict type checking enabled
- JSX support for React

##  Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#EE6F4B` | Coral/orange for CTAs, accents, highlights |
| Dark Gray | `#424153` | Icons and text |
| Light Gray | `#F8F8F8` | Section backgrounds |
| White | `#FFFFFF` | Cards and content areas |

### Typography

- **Font:** Inter Tight (Google Fonts)
- **Headings:** 4xl (36px+), semibold weight
- **Body:** Standard sizes, relaxed leading for readability

### Responsive Breakpoints

| Breakpoint | Prefix | Target |
|------------|--------|--------|
| Mobile | Default | < 768px |
| Tablet | `md:` | ≥ 768px |
| Desktop | `lg:` | ≥ 1024px |

##  Assets Overview

### Images

| Image | Purpose | Dimensions |
|-------|---------|------------|
| `dogFood.jpg` | Product packaging display | Varies |
| `happyDog.png` | Customer/pet testimonial | 142.5px height |
| `healthyMeal.png` | Food presentation | Varies |
| `feeding.gif` | Animated feeding content | Animated |
| `applepay.png` | Payment option | ~20px height |
| `googlepay.png` | Payment option | ~20px height |
| `mastercard.png` | Payment option | ~24px height |
| `paypal.png` | Payment option | ~20px height |
| `visa.png` | Payment option | ~16px height |

## Customization

### Colors

The primary brand color is `#EE6F4B` (coral/orange). This color is used in:
- Call-to-action buttons
- Highlight accents
- Divider lines
- Statistics numbers

To change the primary color, update all occurrences of `#EE6F4B` in `Landing.tsx`.

### Images

Replace images in `src/assets/images/` with your own product images:
- `dogFood.jpg` - Product packaging
- `happyDog.png` - Happy dog imagery
- `healthyMeal.png` - Healthy meal display
- `feeding.gif` - Feeding animation
- Payment logos in respective files

### Icons

Custom SVG icons are located in `src/assets/svg/`:
- `RealFoodIcon.tsx` - Real food feature icon
- `PremiumIngredientIcon.tsx` - Premium quality icon
- `MadeFreshIcon.tsx` - Freshness icon
- `VetDevelopedIcon.tsx` - Vet endorsement icon

All icons are built as functional React components returning SVG elements, making them:
- Easily customizable via props
- Tree-shakeable for optimal bundle size
- Type-safe with TypeScript

##  Responsive Design

The landing page is fully responsive with the following breakpoints:

### Mobile (< 768px)
- Single column layout
- Stacked feature cards
- Centered content
- Scaled images

### Tablet (768px - 1024px)
- Two-column grids where applicable
- Adjusted padding and margins
- Larger touch targets

### Desktop (> 1024px)
- Full split layouts
- Multi-column grids
- Maximum width containers (6xl / ~72rem)
- Hover effects and transitions

##  Key Features Explained

### Split Product Image
The central product image uses a clever split design technique:

```tsx
<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl overflow-hidden">
  <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
    <img src={healthyMeal} alt="Healthy meal side" 
         className="h-full w-[200%] object-cover object-left" />
  </div>
  <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
    <img src={dogFood} alt="Dry dog food side"
         className="h-full w-[200%] object-cover object-right" />
  </div>
  <div className="absolute top-0 left-1/2 w-1 h-full bg-[#EE6F4B] transform -translate-x-1/2 z-10"></div>
</div>
```

This creates a circular container with two images split down the middle.

### Statistics Display
The statistics section uses large bold numbers to draw attention:

```tsx
<span className="text-4xl font-bold text-[#EE6F4B] w-24">97%</span>
```

Each stat includes:
- Large font size (4xl)
- Bold weight for emphasis
- Brand color for visual hierarchy
- Fixed width for alignment

## Build Process

### Development Build
```bash
npm run dev
```
- Fast HMR (Hot Module Replacement)
- Source maps for debugging
- No minification

### Production Build
```bash
npm run build
```
- TypeScript compilation
- Minification and tree-shaking
- Asset optimization
- Output to `dist/` folder

### Preview Production
```bash
npm run preview
```
- Serve the built application locally
- Test production build behavior

## Contributing

Feel free to fork this project and customize it for your own dog food brand or pet-related business!

## License

This project is open source and available for personal & commercial use.

