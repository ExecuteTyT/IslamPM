# Deployment script for islam-pm.dev (Windows PowerShell)
# Usage: .\deploy.ps1

$SERVER = "root@80.66.64.9"
$REMOTE_PATH = "/var/www/islam-pm.dev"
$LOCAL_BUILD_PATH = "dist"

Write-Host "🚀 Starting deployment to islam-pm.dev..." -ForegroundColor Cyan

# Step 1: Build project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Step 2: Upload files to server using SCP
Write-Host "📤 Uploading files to server..." -ForegroundColor Yellow

# Use SCP to upload files (requires OpenSSH client on Windows)
scp -r "$LOCAL_BUILD_PATH\*" "${SERVER}:${REMOTE_PATH}/"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Upload failed!" -ForegroundColor Red
    Write-Host "💡 Make sure OpenSSH client is installed and you have SSH access to the server" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Files uploaded successfully!" -ForegroundColor Green

# Step 3: Set permissions on server
Write-Host "🔐 Setting permissions..." -ForegroundColor Yellow
ssh $SERVER "chown -R www-data:www-data $REMOTE_PATH && chmod -R 755 $REMOTE_PATH"

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Warning: Could not set permissions" -ForegroundColor Yellow
}

# Step 4: Reload Nginx
Write-Host "🔄 Reloading Nginx..." -ForegroundColor Yellow
ssh $SERVER "systemctl reload nginx"

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Warning: Could not reload Nginx" -ForegroundColor Yellow
}

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your site is live at: https://islam-pm.dev" -ForegroundColor Cyan

