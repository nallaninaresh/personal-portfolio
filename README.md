# Naresh Nallani — Java Full Stack Developer Portfolio

A world-class, premium, modern, and recruiter-focused personal portfolio website designed and engineered for **Naresh Nallani**, an entry-level Java Full Stack Developer (B.Tech CSE, 2026 Batch, CGPA: 8.3/10).

Designed with inspiration from Linear, modern SaaS platforms, and Apple minimalism: minimal in appearance, powerful in functionality, professional in presentation, and memorable in recruiter experience.

---

## 🌟 Highlights & Key Features

- **Recruiter-Centric First 10 Seconds**: Instantly establishes candidate identity (*Java Full Stack Developer*), core capability (*Scalable Web & Backend Architecture*), and recruitment viability (*2026 Batch, ALITS, CGPA 8.3/10*).
- **Interactive Code Window & Architecture Diagrams**: Realistic IntelliJ IDEA code preview highlighting Spring Boot REST controllers, DTOs, and application configuration.
- **Deep-Dive Project System Design Modals**: Detailed architectural breakdowns for each featured project:
  1. **ReUseHub**: Full-stack sustainable item exchange platform (Spring Boot, React, MySQL, JPA).
  2. **E-Commerce Management System**: Enterprise MVC retail platform (Pure Java Servlets, JSP, JDBC, MySQL).
  3. **Job Portal Application**: Role-based candidate and recruiter ecosystem (Spring Boot, React, MySQL).
  - Includes: System architecture & data flow, normalized 3NF database schemas, RESTful API endpoints documentation, and technical challenges with engineering solutions.
- **Honest Technical Skill Breakdown**: Categorized into Backend, Frontend, Database, Tools, and Core CS with genuine depth indicators (no fake percentage meters).
- **Interactive & Downloadable ATS-Friendly Resume**:
  - Embedded one-click **"Quick View Resume"** interactive modal.
  - Generates and downloads a real, formatted PDF resume: `nallani_naresh_resume.pdf`.
- **Academic Background**: Clean academic showcase highlighting B.Tech in CSE at ALITS, 8.3/10 CGPA, and core coursework.
- **Validated Contact System**: Client-side validation, direct email copy with tooltip feedback, native mail client integration, and celebratory confetti effects.
- **Dark & Light Mode**: Smooth theme transitions persisted in `localStorage`.
- **Production-Ready SEO**: Open Graph tags, Twitter card tags, Schema.org JSON-LD structured data, sitemap, and robots.txt.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, JavaScript (ES6+), HTML5, CSS3
- **Styling & Design System**: Tailwind CSS, PostCSS, Custom Design System
- **Icons**: Lucide React
- **Animations & Effects**: Custom CSS Keyframes, Canvas-Confetti, Backdrop Glassmorphism
- **Build Tool**: Vite 6 (Ultra-fast HMR and optimized production bundles)
- **PDF Generation**: `pdf-lib` (Native vector PDF document generator)

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation
Clone the repository or open the project folder:
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Re-Generate Resume PDF
If you update your credentials or profile information in `src/data/portfolioData.js` and want to re-render the official PDF:
```bash
node scripts/generateResumePdf.js
```

---

## 📁 Project Structure

```
personal-portfolio/
├── dist/                      # Production build output
├── public/                    # Static assets
│   ├── favicon.svg            # Custom NN monogram favicon
│   ├── nallani_naresh_resume.pdf            # Real ATS-compliant PDF resume
│   ├── robots.txt             # Search engine crawling rules
│   └── sitemap.xml            # Search engine sitemap
├── scripts/
│   └── generateResumePdf.js   # Programmatic PDF resume generator script
├── src/
│   ├── components/
│   │   ├── About.jsx          # Professional overview & verified metrics
│   │   ├── Contact.jsx        # Contact form, mail links, and clipboard helper
│   │   ├── Education.jsx      # Academic background (ALITS, B.Tech CSE, 8.3 CGPA)
│   │   ├── Footer.jsx         # Footer branding, dynamic copyright, navigation
│   │   ├── Hero.jsx           # First impression, animated role typing, code window
│   │   ├── Navbar.jsx         # Sticky navigation bar with active indicators
│   │   ├── ProjectModal.jsx   # Architectural deep-dive and REST API modal
│   │   ├── Projects.jsx       # Featured project cards and problem-solution pairs
│   │   ├── ResumeModal.jsx    # Instant interactive CV preview dialog
│   │   ├── Skills.jsx         # Categorized engineering competencies
│   │   └── ThemeToggle.jsx    # Light / dark mode toggle
│   ├── data/
│   │   └── portfolioData.js   # Centralized verified data store
│   ├── App.jsx                # Root application layout
│   ├── index.css              # Custom Tailwind directives and utilities
│   └── main.jsx               # React entry point
├── index.html                 # HTML template with SEO & Schema.org JSON-LD
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom theme colors, fonts, and animations
└── vite.config.js             # Vite development and bundle configuration
```

---

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Select your repository.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Click **"Deploy"**.

### Netlify
1. Go to [netlify.com](https://netlify.com) and choose **"Import from Git"**.
2. Select your repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **"Deploy site"**.

### GitHub Pages
1. Install `gh-pages` (`npm i -D gh-pages`).
2. Add `"deploy": "gh-pages -d dist"` to `package.json`.
3. Run `npm run build && npm run deploy`.

---

## 👤 Developer Profile

- **Name**: Naresh Nallani
- **Role**: Java Full Stack Developer
- **Degree**: B.Tech in Computer Science and Engineering (Graduated • First Class with Distinction)
- **Institution**: Anantha Lakshmi Institute of Technology and Science (ALITS)
- **CGPA**: 8.3 / 10
- **Email**: [nallaninaresh15@gmail.com](mailto:nallaninaresh15@gmail.com)
- **GitHub**: [github.com/nallaninaresh](https://github.com/nallaninaresh)
- **LinkedIn**: [linkedin.com/in/nallaninaresh](https://www.linkedin.com/in/nallaninaresh/)
