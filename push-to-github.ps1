# Quick GitHub Push Script
# Run this AFTER creating your repository on GitHub.com

Write-Host "=== Push Portfolio to GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to update it? (y/n)"
    if ($overwrite -eq 'y' -or $overwrite -eq 'Y') {
        git remote remove origin
    } else {
        Write-Host "Keeping existing remote. Exiting." -ForegroundColor Yellow
        exit
    }
}

Write-Host ""
Write-Host "Please create a repository on GitHub first:" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: portfolio-nextjs" -ForegroundColor White
Write-Host "3. Choose Public or Private" -ForegroundColor White
Write-Host "4. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host "5. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter repository name (default: portfolio-nextjs)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio-nextjs"
}

Write-Host ""
Write-Host "Setting up remote and pushing..." -ForegroundColor Yellow

# Add remote
git remote add origin "https://github.com/$username/$repoName.git"

# Rename branch to main
git branch -M main

# Push to GitHub
Write-Host "Pushing code to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== SUCCESS! ===" -ForegroundColor Green
    Write-Host "Your portfolio is now on GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next: Deploy to Vercel for free hosting:" -ForegroundColor Yellow
    Write-Host "https://vercel.com/new" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "=== ERROR ===" -ForegroundColor Red
    Write-Host "Failed to push. Please check:" -ForegroundColor Red
    Write-Host "1. Repository exists on GitHub" -ForegroundColor White
    Write-Host "2. You have access to the repository" -ForegroundColor White
    Write-Host "3. Your GitHub credentials are correct" -ForegroundColor White
}

