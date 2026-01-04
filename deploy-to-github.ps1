# GitHub Deployment Script
# Run this script after creating your GitHub repository

Write-Host "=== GitHub Deployment Script ===" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username and repository name
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (default: portfolio-nextjs)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio-nextjs"
}

Write-Host ""
Write-Host "Step 1: Adding remote repository..." -ForegroundColor Yellow
git remote add origin "https://github.com/$username/$repoName.git"

Write-Host "Step 2: Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "=== Deployment Complete! ===" -ForegroundColor Green
Write-Host "Your portfolio is now on GitHub: https://github.com/$username/$repoName" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Visit your repository on GitHub" -ForegroundColor White
Write-Host "2. Consider deploying to Vercel for free hosting:" -ForegroundColor White
Write-Host "   - Go to https://vercel.com" -ForegroundColor White
Write-Host "   - Sign up with GitHub" -ForegroundColor White
Write-Host "   - Import your repository" -ForegroundColor White
Write-Host "   - Deploy automatically!" -ForegroundColor White

