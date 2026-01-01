# Vercel Deployment Guide

## Quick Deploy to Vercel

Your portfolio is ready to deploy! Follow these steps:

### Prerequisites
- GitHub account
- Vercel account (free) - https://vercel.com

---

## Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - AI Chatbot Developer Portfolio"

# Create a new repository on GitHub named 'prathyuushraj-portfolio'
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/prathyuushraj-portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Project Name:** `prathyuushraj` (This sets the URL)
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
   - **Install Command:** `yarn install`
5. Click **"Deploy"**
6. Wait 2-3 minutes ⏳
7. Your site will be live at: **https://prathyuushraj.vercel.app** 🎉

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from the /app directory
cd /app
vercel --prod

# Follow the prompts:
# - Set project name as: prathyuushraj
# - Root directory: frontend
```

---

## Step 3: Verify Deployment

Once deployed, check:
- ✅ Site loads at https://prathyuushraj.vercel.app
- ✅ All sections render correctly
- ✅ Buttons work (smooth scroll)
- ✅ Links open properly (email, Upwork)
- ✅ Responsive on mobile

---

## How to Redeploy After Changes

### Automatic Redeployment (Recommended)
Once connected to GitHub, any push to the `main` branch will auto-deploy:

```bash
# Make your changes in the code
nano /app/frontend/src/data/mockData.js

# Commit and push
git add .
git commit -m "Updated projects"
git push origin main

# Vercel will automatically rebuild and deploy! 🚀
```

### Manual Redeployment
```bash
cd /app
vercel --prod
```

---

## Editing Portfolio Content

To update your portfolio:

**Edit projects, personal info, skills:**
```bash
nano /app/frontend/src/data/mockData.js
```

Then commit and push to trigger auto-deployment.

---

## Troubleshooting

### Build fails on Vercel?
- Check Vercel build logs
- Ensure `yarn build` works locally first
- Verify all dependencies are in package.json

### Wrong URL?
- Go to Vercel Dashboard → Project Settings → Domains
- The default domain is based on project name
- Make sure project name is exactly `prathyuushraj`

### 404 errors?
- Ensure `vercel.json` routing is correct (already configured)
- React Router needs proper routing rules (already set up)

---

## Project Structure

```
/app/
├── frontend/              # React app
│   ├── src/
│   │   ├── data/mockData.js   # Edit this for content
│   │   ├── pages/Portfolio.jsx
│   │   └── ...
│   ├── build/             # Production build (after yarn build)
│   └── package.json
├── vercel.json            # Vercel configuration
└── DEPLOYMENT.md          # This file
```

---

## Need Help?

If deployment fails:
1. Check Vercel deployment logs in dashboard
2. Test build locally: `cd /app/frontend && yarn build`
3. Verify GitHub repo is public or Vercel has access

**Your portfolio is production-ready!** 🚀
