# 🎮 Navaraja's Gaming-Inspired Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.169-black?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A stunning, gaming-themed portfolio website showcasing ML/Data Engineering expertise**

[🌐 Live Demo](#) | [📖 Documentation](#features) | [🚀 Quick Start](#-getting-started)

</div>

---

## ✨ Overview

This is a modern, gaming-inspired portfolio website built for Navaraja, a Master's student in Computer Science at EPITA, France, actively seeking ML Engineer, Data Engineer, and Data Scientist internship opportunities. The portfolio features a futuristic design with 3D graphics, smooth animations, and dynamic content integration.

### 🎯 Key Highlights

- **3D Interactive Background** - WebGL particle system using Three.js
- **Dynamic GitHub Integration** - Auto-fetches repositories, stats, and tech stack
- **Gaming Aesthetics** - ROG-inspired design with neon colors and glass effects
- **Achievement System** - Gamified user interactions with unlock notifications
- **Responsive Design** - Fully optimized for all screen sizes
- **SEO Optimized** - Meta tags, Open Graph, and structured data

---

## 🚀 Features

### 🎨 Visual Design
- ⚡ Gaming-inspired UI with neon highlights and deep colors
- 🌟 3D WebGL particle background with interactive effects
- 💫 GSAP-powered animations and Framer Motion transitions
- 🎭 Glass morphism effects and neon borders
- 🌓 Dark/Light theme toggle with persistent preferences
- 📱 Fully responsive across all devices

### 🔧 Technical Features
- 🔄 Real-time GitHub repository integration
- 📊 Dynamic skill visualization with animated bars
- 🏆 XP and leveling system
- 🎮 Achievement unlock notifications
- ✉️ Contact form with validation (React Hook Form + Zod)
- 🎯 Parallax scrolling effects
- ⚡ Optimized performance with Next.js 14

### 📑 Sections
1. **Hero** - 3D animated landing with XP system and social links
2. **About** - Education, objectives, skills, and certifications
3. **Projects** - GitHub repositories with live stats and tech stack
4. **Experience** - Work history and education timeline
5. **Skills** - Animated proficiency bars and language distribution
6. **Contact** - Interactive form with validation

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router), TypeScript |
| **Styling** | Tailwind CSS, Custom CSS |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animations** | GSAP, Framer Motion |
| **Forms** | React Hook Form, Zod |
| **Icons** | Lucide React |
| **API Integration** | GitHub REST API, Axios |
| **Deployment** | Vercel / Netlify |

---

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- GitHub Personal Access Token (for API integration)
- Git

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/navaraja20/Personal_Portfolio.git
cd Personal_Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file:

```env
# GitHub Configuration
NEXT_PUBLIC_GITHUB_USERNAME=navaraja20
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Get GitHub Token:**
1. Go to [GitHub Settings → Tokens](https://github.com/settings/tokens)
2. Generate new token (classic)
3. Select: `public_repo`, `read:user`
4. Copy token to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Customization Guide

### Update Personal Information

1. **Contact Details** - Edit `src/components/sections/Contact.tsx`
2. **Experience** - Update `src/services/linkedin.ts`
3. **Skills** - Modify `src/components/sections/Skills.tsx`
4. **Resume** - Replace `public/resume.pdf`

### Modify Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  neon: {
    blue: '#00f0ff',
    purple: '#b800ff',
    pink: '#ff006e',
    cyan: '#00ffff',
    green: '#00ff88',
  },
}
```

---

## 🐳 Docker Support

### Using Docker Compose

```bash
docker-compose up
```

### Using Docker CLI

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

See [DOCKER.md](DOCKER.md) for detailed instructions.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/navaraja20/Personal_Portfolio)

1. Click the button above
2. Connect your GitHub repository
3. Add environment variables
4. Deploy!

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod
```

---

## 📁 Project Structure

```
Personal_Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── sections/            # Page sections
│   │   ├── Scene3D.tsx          # Three.js background
│   │   ├── Navigation.tsx       # Nav bar
│   │   ├── Footer.tsx           # Footer
│   │   └── ThemeProvider.tsx    # Theme context
│   ├── context/
│   │   └── AchievementContext.tsx
│   ├── services/
│   │   ├── github.ts            # GitHub API
│   │   └── linkedin.ts          # Experience data
│   └── lib/
│       └── utils.ts             # Utilities
├── public/
│   └── resume.pdf               # Resume file
├── .env.local.example           # Environment template
├── tailwind.config.ts           # Tailwind config
└── package.json                 # Dependencies
```

---

## 🎮 Gaming Features

### Achievement System
- 🎯 First Visit
- 💻 Code Inspector
- 🎯 Skill Seeker
- 📧 Communicator
- 🌓 Light Bringer
- 🏆 Full Explorer

### XP System
XP calculated from:
- Projects (50 XP each)
- Contributions (2 XP each)
- Skills (10 XP each)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <process_id> /F
```

### GitHub API Rate Limit
Add your personal access token to `.env.local`

### Build Errors
```bash
rm -rf node_modules .next
npm install
npm run dev
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Navaraja Mannepalli**

- 🌐 Website: [Portfolio](https://navaraja-portfolio.vercel.app)
- 💼 LinkedIn: [navaraja-mannepalli](https://www.linkedin.com/in/navaraja-mannepalli/)
- 🐙 GitHub: [@navaraja20](https://github.com/navaraja20)
- 📧 Email: nava-raja.mannepalli@epita.fr

---

## 🙏 Acknowledgments

- Design inspiration: [ASUS ROG Flow Z13](https://rog.asus.com/laptops/rog-flow/rog-flow-z13-2025/)
- Icons: [Lucide React](https://lucide.dev/)
- 3D Graphics: [Three.js](https://threejs.org/)
- Animations: [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and lots of ☕ by Navaraja

</div>

## ✨ Features

### 🎨 Design & Aesthetics
- **Gaming-Inspired UI**: Deep colors, neon highlights, high contrast design inspired by ASUS ROG Flow Z13
- **3D WebGL Background**: Interactive particle system using Three.js
- **Smooth Animations**: GSAP-powered animations and Framer Motion transitions
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between themes with persistent preferences

### 🚀 Interactive Elements
- **Achievement System**: Gamified user interactions with unlock notifications
- **XP Progress Bar**: Dynamic level and experience point tracking
- **Animated Skill Bars**: GSAP-powered skill proficiency visualization
- **Parallax Effects**: Smooth scrolling with depth perception
- **Hover Effects**: Interactive cards and buttons with neon glow effects

### 📊 Dynamic Data Integration
- **GitHub API**: Automatically fetches and displays:
  - Repository information
  - Tech stack from code languages
  - Stars, forks, and update dates
  - Contribution statistics
- **LinkedIn Data**: Integrates experience, education, and certifications
- **Real-time Updates**: Auto-refresh project data

### 🎯 Sections
1. **Hero Landing**: 3D animated background, level system, social links
2. **About**: Education, career objectives, skills overview
3. **Projects**: GitHub repository cards with live data
4. **Experience**: Timeline of work experience and education
5. **Skills**: Animated skill bars and language distribution charts
6. **Contact**: Interactive form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: GSAP, Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **APIs**: GitHub REST API, LinkedIn API

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- GitHub account and Personal Access Token
- (Optional) LinkedIn API credentials

## 🚀 Getting Started

### 1. Clone the Repository

```powershell
git clone https://github.com/navaraja20/portfolio.git
cd Navarajas-portfolio
```

### 2. Install Dependencies

```powershell
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# GitHub Configuration
NEXT_PUBLIC_GITHUB_USERNAME=navaraja20
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token

# LinkedIn API (Optional)
NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Get GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo`, `read:user`
4. Copy the token and add it to `.env.local`

### 5. Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Navarajas-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Landing section
│   │   │   ├── About.tsx        # About section
│   │   │   ├── Projects.tsx     # Projects showcase
│   │   │   ├── Experience.tsx   # Work & education timeline
│   │   │   ├── Skills.tsx       # Skills visualization
│   │   │   └── Contact.tsx      # Contact form
│   │   ├── Scene3D.tsx          # Three.js background
│   │   ├── Navigation.tsx       # Navigation bar
│   │   ├── Footer.tsx           # Footer component
│   │   └── ThemeProvider.tsx    # Theme context
│   ├── context/
│   │   └── AchievementContext.tsx # Achievement system
│   ├── services/
│   │   ├── github.ts            # GitHub API integration
│   │   └── linkedin.ts          # LinkedIn data (mock/API)
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── types/                   # TypeScript types
├── public/
│   └── resume.pdf               # Your resume (add this!)
├── .env.local.example           # Environment variables template
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **GitHub Username**: Update in `.env.local`
2. **LinkedIn Data**: Edit `src/services/linkedin.ts` with your actual experience
3. **Contact Info**: Update email and location in `src/components/sections/Contact.tsx`
4. **Resume**: Add your resume PDF to `public/resume.pdf`

### Modify Colors and Theme

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  neon: {
    blue: '#00f0ff',    // Customize these colors
    purple: '#b800ff',
    pink: '#ff006e',
    cyan: '#00ffff',
    green: '#00ff88',
  },
}
```

### Add More Skills

Update the `skillsData` array in `src/components/sections/Skills.tsx`:

```typescript
const skillsData: SkillData[] = [
  { name: 'Your Skill', level: 90, category: 'Programming' },
  // Add more skills...
]
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables in project settings
4. Deploy!

### Deploy to Netlify

```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

## 📝 SEO Optimization

The site includes:
- Meta tags for SEO
- Open Graph tags for social sharing
- Structured data
- Sitemap generation
- Dynamic metadata

Update the metadata in `src/app/layout.tsx` with your information.

## 🎮 Gaming Features

### Achievement System
Users unlock achievements by:
- Visiting different sections
- Toggling the theme
- Exploring all content

### XP System
XP is calculated based on:
- Number of projects (50 XP each)
- GitHub contributions (2 XP each)
- Skills mastered (10 XP each)

## 🐛 Troubleshooting

### "Cannot find module" errors
```powershell
rm -rf node_modules package-lock.json
npm install
```

### GitHub API rate limit
Add a personal access token to `.env.local` to increase rate limits from 60 to 5000 requests/hour.

### Three.js performance issues
The 3D background is optimized, but on low-end devices, you can reduce particle count in `src/components/Scene3D.tsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Navaraja**
- GitHub: [@navaraja20](https://github.com/navaraja20)
- LinkedIn: [/in/navaraja](https://linkedin.com/in/navaraja)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration: [ASUS ROG Flow Z13](https://rog.asus.com/laptops/rog-flow/rog-flow-z13-2025/)
- Icons: [Lucide React](https://lucide.dev/)
- 3D Graphics: [Three.js](https://threejs.org/)
- Animations: [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ and lots of ☕ by Navaraja
