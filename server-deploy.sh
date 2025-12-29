#!/bin/bash

# Server-side deployment script
# Run this on the server: bash /var/www/islam-pm.dev/server-deploy.sh

echo "🚀 Starting server-side deployment..."

cd /var/www/islam-pm.dev

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ Git pull failed!"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Copy built files to root
echo "📋 Copying files..."
cp -r dist/* .
rm -rf dist

# Set permissions
echo "🔐 Setting permissions..."
chown -R www-data:www-data /var/www/islam-pm.dev
chmod -R 755 /var/www/islam-pm.dev

# Reload Nginx
echo "🔄 Reloading Nginx..."
systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "🌐 Site is live at: https://islam-pm.dev"

