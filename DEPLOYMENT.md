# 🚀 Bhuviona Website - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Setup

Create a `.env` file in the project root:

```env
# Optional: Add any environment variables here
VITE_API_URL=https://api.bhuviona.com
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://www.bhuviona.com
```

### 2. Update Configuration

Update these files with your actual information:

**public/sitemap.xml**
- Update all `<lastmod>` dates to current date
- Verify all URLs are correct

**src/components/seo/StructuredData.jsx**
- Add actual social media URLs
- Update contact information
- Verify addresses

**src/components/navigation/Footer.jsx**
- Add real social media links
- Update contact email if different

### 3. Build and Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build
npm run build
npm run preview
```

Visit `http://localhost:3000` and test:
- [ ] All pages load correctly
- [ ] Navigation works (including mobile menu)
- [ ] Forms submit properly
- [ ] Images display correctly
- [ ] Links work
- [ ] SEO meta tags are present
- [ ] No console errors

## Deployment Options

### Option 1: Vercel (Recommended for React/Vite)

**Why Vercel?**
- Zero configuration for Vite
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Free tier available

**Steps:**

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Deploy to Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Scope: Your account
# - Link to existing project: N
# - Project name: bhuviona-website
# - Directory: ./
# - Override settings: N
```

3. Configure domain:
   - Go to Vercel dashboard
   - Settings → Domains
   - Add `www.bhuviona.com`
   - Follow DNS instructions

4. Set up environment variables (if any):
   - Settings → Environment Variables
   - Add production variables

**Deploy Updates:**
```bash
# Any push to main branch auto-deploys
git add .
git commit -m "Update content"
git push

# Or manual deploy
vercel --prod
```

### Option 2: Netlify

**Why Netlify?**
- Simple deployment
- Automatic HTTPS
- Form handling built-in
- Good for static sites

**Steps:**

1. Build your project:
```bash
npm run build
```

2. Deploy via Netlify CLI:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

**Or deploy via Netlify UI:**
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

### Option 3: Traditional Hosting (cPanel/FTP)

**For hosts like Hostinger, Bluehost, GoDaddy:**

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder contents to your hosting:
   - Via FTP client (FileZilla)
   - Or cPanel File Manager
   - Upload to `public_html` or `www` directory

3. Configure .htaccess for SPA routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. Set up SSL certificate (Let's Encrypt via cPanel)

### Option 4: AWS Amplify

1. Push code to GitHub
2. Connect repository in AWS Amplify Console
3. Build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Post-Deployment Tasks

### 1. DNS Configuration

Add these DNS records at your domain registrar:

```
Type    Name    Value                       TTL
A       @       <your-server-ip>           3600
A       www     <your-server-ip>           3600
CNAME   www     bhuviona.com               3600
```

For Vercel/Netlify, follow their specific DNS instructions.

### 2. SSL Certificate

Ensure HTTPS is enabled:
- Vercel/Netlify: Automatic
- cPanel: Let's Encrypt (free)
- Cloudflare: SSL/TLS encryption

### 3. Setup Google Analytics

1. Create GA4 property
2. Add tracking ID to `.env`:
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

3. Add to `public/index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Submit Sitemap to Search Engines

**Google Search Console:**
1. Go to search.google.com/search-console
2. Add property: www.bhuviona.com
3. Verify ownership
4. Submit sitemap: https://www.bhuviona.com/sitemap.xml

**Bing Webmaster Tools:**
1. Go to bing.com/webmasters
2. Add site
3. Submit sitemap

### 5. Setup Monitoring

**Recommended tools:**
- **Uptime monitoring**: UptimeRobot (free)
- **Error tracking**: Sentry
- **Analytics**: Google Analytics 4
- **Performance**: Google Lighthouse CI

### 6. Configure Email

For contact form submissions:
1. Set up email service (SendGrid, AWS SES, etc.)
2. Create API endpoint for form submissions
3. Update Contact.jsx with API endpoint

### 7. Security Headers

Add security headers (via hosting provider or Cloudflare):

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Performance Optimization

### 1. Enable Compression

Ensure gzip/brotli compression is enabled on your server.

### 2. Configure Caching

Set cache headers for static assets:
```
Cache-Control: public, max-age=31536000, immutable  # For /assets/*
Cache-Control: no-cache                               # For index.html
```

### 3. CDN (Optional)

For global performance, use Cloudflare:
1. Sign up at cloudflare.com
2. Add website
3. Update nameservers
4. Enable:
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
   - Polish (image optimization)

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm outdated
npm update

# Test after updates
npm run build
npm run preview
```

### Backup

Regularly backup:
- Source code (Git repository)
- Configuration files
- Environment variables
- Database (if applicable)

### Monitoring Checklist

Weekly:
- [ ] Check site is accessible
- [ ] Review Google Analytics
- [ ] Check for broken links
- [ ] Monitor server uptime

Monthly:
- [ ] Review performance metrics
- [ ] Update dependencies
- [ ] Check SSL certificate expiry
- [ ] Review error logs

## Troubleshooting

### Issue: White screen after deployment

**Solution:**
1. Check browser console for errors
2. Verify base URL in vite.config.js
3. Check .htaccess or server routing configuration

### Issue: Images not loading

**Solution:**
1. Verify images are in `public/assets/images/`
2. Check image paths (should be `/assets/images/...`)
3. Ensure build includes public folder

### Issue: Routes not working (404 on refresh)

**Solution:**
1. Add .htaccess redirect rules (see Traditional Hosting section)
2. Or configure server for SPA routing
3. For Vercel/Netlify, this is automatic

### Issue: Forms not submitting

**Solution:**
1. Implement backend API endpoint
2. Update form submission URL
3. Add CORS headers if needed

## Support

Need help with deployment?
- Email: info@bhuviona.com
- Documentation: Check README.md
- Issues: Create GitHub issue

---

**Last Updated:** February 2024
**Version:** 1.0.0
