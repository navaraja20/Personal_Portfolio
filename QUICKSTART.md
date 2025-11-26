# 🚀 Quick Start Guide

## Prerequisites Installation

Before you can run this portfolio, you need to install Node.js and npm.

### 1. Install Node.js

1. Download Node.js from: https://nodejs.org/
2. Choose the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Restart PowerShell after installation

Verify installation:
```powershell
node --version
npm --version
```

## 🎯 Setup Steps

### 1. Install Dependencies

```powershell
cd e:\Navarajas-portfolio
npm install
```

This will install all required packages (~500MB).

### 2. Configure Environment Variables

Edit `.env.local` file and add your GitHub token:

```env
NEXT_PUBLIC_GITHUB_USERNAME=navaraja20
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
```

**Get GitHub Token:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo`, `read:user`
4. Copy the token and paste it in `.env.local`

### 3. Customize Your Data

**Update LinkedIn Experience:**
Edit `src/services/linkedin.ts` and replace the mock data with your actual:
- Work experience
- Education details
- Certifications

**Update Contact Information:**
Edit `src/components/sections/Contact.tsx`:
- Change email address
- Update location
- Modify LinkedIn URL if different

**Add Your Resume:**
Replace `public/resume.pdf` with your actual resume file

### 4. Run Development Server

```powershell
npm run dev
```

Open http://localhost:3000 in your browser

### 5. Build for Production

```powershell
npm run build
npm start
```

## 🎨 Customization Checklist

- [ ] Add GitHub Personal Access Token to `.env.local`
- [ ] Update experience data in `src/services/linkedin.ts`
- [ ] Replace contact email in `src/components/sections/Contact.tsx`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Update skills in `src/components/sections/Skills.tsx`
- [ ] Customize colors in `tailwind.config.ts` (optional)
- [ ] Add your photo/avatar (optional)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Add environment variables in settings
6. Deploy!

### Option 2: Netlify

1. Build the project: `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `.next` folder
4. Configure environment variables

### Option 3: Custom Server

```powershell
npm run build
npm start
```

## 🐛 Common Issues

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: GitHub API rate limit exceeded
**Solution:** Add your GitHub token to `.env.local`

### Issue: Build errors
**Solution:** 
```powershell
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

### Issue: Three.js performance problems
**Solution:** Reduce particle count in `src/components/Scene3D.tsx` (line 8)

## 📱 Features Showcase

Once running, you can:
- ✅ View your GitHub projects automatically
- ✅ See live repository stats (stars, forks)
- ✅ Unlock achievements as you explore
- ✅ Toggle dark/light themes
- ✅ Send messages via contact form
- ✅ Experience 3D particle background
- ✅ View animated skill bars

## 🎮 Achievement System

The portfolio includes a gamified experience:
- **First Visit**: Unlocked on page load
- **Code Inspector**: View projects section
- **Skill Seeker**: Explore skills section
- **Communicator**: Open contact form
- **Light Bringer**: Toggle theme
- **Full Explorer**: Visit all sections

## 💡 Tips

1. **Use your GitHub token** to avoid API rate limits
2. **Add real data** to LinkedIn service for best results
3. **Customize colors** to match your personal brand
4. **Test on mobile** to ensure responsive design works
5. **Add your photo** for a personal touch

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the code comments for implementation details
- Open an issue on GitHub if you encounter problems

---

**Ready to launch?** Follow the steps above and you'll have your portfolio running in minutes! 🚀
