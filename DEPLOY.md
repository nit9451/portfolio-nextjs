# Deploy to GitHub - Step by Step Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `portfolio-nextjs` (or your preferred name)
   - **Description**: "Fullstack Developer Portfolio - Nitish Kumar"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-nextjs.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Verify Deployment

1. Go to your GitHub repository page
2. You should see all your files there
3. Your portfolio is now on GitHub!

## Optional: Deploy to Vercel (Free Hosting)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js
6. Click "Deploy"
7. Your portfolio will be live in minutes!

## Optional: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

**Your portfolio is now on GitHub! 🎉**

