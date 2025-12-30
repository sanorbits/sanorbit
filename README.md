# SanOrbit - Digital Transformation Portfolio

Personal portfolio website for Sanjeev Kumar Sharma showcasing 29 years of experience in IT leadership, digital transformation, and enterprise systems.

## 🌐 Live Website
**Domain:** sanorbit.com

## 📋 About

This portfolio website features:
- **Home:** Professional summary, career contour, and achievements
- **Certificates:** 49+ LinkedIn Learning certifications across AI, Microsoft Copilot, Cybersecurity, IT Leadership, and Marketing
- **Learning Guides:** Step-by-step certification roadmaps based on actual learning experience
- **Professional Tips:** Career advice and profile enhancement strategies

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v4.0
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Build Tool:** Vite

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sanorbit.git
cd sanorbit
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## 🌍 Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

2. In GitHub repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

3. Push to main branch and deployment will happen automatically

### Option 2: Manual Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/sanorbit",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔗 Custom Domain Setup (sanorbit.com)

1. Create `CNAME` file in `public` folder:
```
sanorbit.com
```

2. In domain registrar (GoDaddy, Namecheap, etc.):
   - Add A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add CNAME record:
     ```
     www.sanorbit.com → yourusername.github.io
     ```

3. In GitHub repository settings:
   - Go to Settings → Pages
   - Custom domain: `sanorbit.com`
   - Check "Enforce HTTPS"

## 📁 Project Structure

```
sanorbit/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Home.tsx              # Homepage with career details
│   │   │   ├── Certificates.tsx      # All 49+ certifications
│   │   │   ├── LearningGuides.tsx    # Learning roadmaps
│   │   │   ├── ProfessionalTips.tsx  # Career advice
│   │   │   ├── Navigation.tsx        # Main navigation
│   │   │   └── ui/                   # Reusable UI components
│   │   ├── App.tsx                   # Main app component
│   │   └── main.tsx                  # Entry point
│   ├── styles/
│   │   ├── theme.css                 # Global theme
│   │   └── fonts.css                 # Font imports
│   └── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit `/src/app/components/Home.tsx` to update:
- Professional summary
- Career history
- Skills and competencies
- Contact information

### Update Certificates
Edit `/src/app/components/Certificates.tsx` to add/modify certificates

### Modify Theme Colors
Edit `/src/styles/theme.css` to change:
- Primary colors
- Typography
- Spacing

## 📱 Features

- ✅ Fully responsive design
- ✅ Professional photo integration
- ✅ SanOrbit branding
- ✅ 49+ LinkedIn Learning certificates
- ✅ 6 comprehensive learning guides
- ✅ Career timeline and achievements
- ✅ SEO optimized
- ✅ Fast loading (Vite build)
- ✅ Accessible UI (Radix UI)

## 📝 License

© 2025 Sanjeev Kumar Sharma. All rights reserved.

## 📧 Contact

- **Email:** goforgrowth@gmail.com
- **Phone:** +91 8800987666
- **Location:** Delhi NCR, India
- **Website:** sanorbit.com
- **LinkedIn:** [Connect on LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- UI components from Radix UI
- Icons from Lucide React
- Hosted on GitHub Pages
