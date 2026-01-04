# Automated GitHub Deployment for nit9451
# Run this AFTER creating the repository on GitHub

Write-Host "=== Deploying Portfolio to GitHub ===" -ForegroundColor Cyan
Write-Host ""

$username = "nit9451"
$repoName = "portfolio-nextjs"

Write-Host "GitHub Username: $username" -ForegroundColor Green
Write-Host "Repository: $repoName" -ForegroundColor Green
Write-Host ""

# Check if remote exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Update it? (y/n)"
    if ($overwrite -eq 'y' -or $overwrite -eq 'Y') {
        git remote remove origin
        Write-Host "Removed old remote." -ForegroundColor Yellow
    } else {
        Write-Host "Keeping existing remote. Exiting." -ForegroundColor Yellow
        exit
    }
}

Write-Host ""
Write-Host "IMPORTANT: Make sure you've created the repository on GitHub first!" -ForegroundColor Yellow
Write-Host "Go to: https://github.com/new" -ForegroundColor White
Write-Host "Repository name: $repoName" -ForegroundColor White
Write-Host "DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host ""
$confirm = Read-Host "Have you created the repository? (y/n)"

if ($confirm -ne 'y' -and $confirm -ne 'Y') {
    Write-Host "Please create the repository first at: https://github.com/new" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Setting up remote repository..." -ForegroundColor Yellow
git remote add origin "https://github.com/$username/$repoName.git"

Write-Host "Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "Pushing code to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== SUCCESS! ===" -ForegroundColor Green
    Write-Host "Your portfolio is now on GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository URL: https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Yellow
    Write-Host "1. Visit your repository: https://github.com/$username/$repoName" -ForegroundColor White
    Write-Host "2. Deploy to Vercel (free hosting):" -ForegroundColor White
    Write-Host "   - Go to: https://vercel.com/new" -ForegroundColor White
    Write-Host "   - Sign up with GitHub" -ForegroundColor White
    Write-Host "   - Import your repository" -ForegroundColor White
    Write-Host "   - Click Deploy!" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "=== ERROR ===" -ForegroundColor Red
    Write-Host "Failed to push. Common issues:" -ForegroundColor Red
    Write-Host "1. Repository doesn't exist - Create it at https://github.com/new" -ForegroundColor White
    Write-Host "2. Authentication required - You may need to enter your GitHub credentials" -ForegroundColor White
    Write-Host "3. Check your internet connection" -ForegroundColor White
}

