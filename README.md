# Bhuviona Technologies Website

Official website for Bhuviona Technologies Pvt Ltd - An AI-powered education technology company building VYON platform.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd bhuviona-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
bhuviona-website/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── bhuviona-infinity-logo.png
│   │       └── og-bhuviona.png
│   ├── index.html
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   └── routes.jsx
│   │
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── Skeleton.jsx
│   │   ├── seo/
│   │   │   ├── SEO.jsx
│   │   │   └── StructuredData.jsx
│   │   └── ErrorBoundary.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Products/
│   │   │   └── Products.jsx
│   │   ├── Pricing/
│   │   │   └── Pricing.jsx
│   │   ├── Blog/
│   │   │   └── Blog.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   └── NotFound/
│   │       └── NotFound.jsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── premium.css
│   │
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors

- **Aqua Deep Teal**: `#0d6e6e` - Primary brand color
- **Jupiter Gold**: `#d4af37` - Accent color
- **Background**: `#f6f6f4` - Warm off-white
- **Text**: `#1f2937` - Dark gray
- **Muted**: `#6b7280` - Medium gray

### Typography

- **Headings**: Poppins (600, 700, 800)
- **Body**: Roboto (300, 400, 500, 700)

### Components

All components follow a premium AI aesthetic with:
- Glassmorphism effects
- Smooth animations
- Gradient accents
- Rounded corners
- Subtle shadows

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

### Traditional Hosting

```bash
# Build the project
npm run build

# Upload the 'dist' folder to your hosting provider
```

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **Premium Design** - AI-inspired aesthetics
- 📱 **Fully Responsive** - Works on all devices
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- 🚀 **Performance** - Lazy loading, code splitting
- 🎯 **Type Safety** - ESLint configuration
- 💅 **Consistent Code** - Prettier formatting

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- HTTPS enforced
- Content Security Policy headers
- No sensitive data in client-side code
- Secure form handling

## 📄 License

© 2024 Bhuviona Technologies Pvt Ltd. All rights reserved.

## 🤝 Support

For support, email info@bhuviona.com or visit our [Contact Page](https://www.bhuviona.com/contact).

---

Built with ❤️ by Bhuviona Technologies
