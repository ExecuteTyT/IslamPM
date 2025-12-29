#!/bin/bash

# Deployment script for islam-pm.dev
# Usage: ./deploy.sh

SERVER="root@80.66.64.9"
REMOTE_PATH="/var/www/islam-pm.dev"
LOCAL_BUILD_PATH="dist"

echo "🚀 Starting deployment to islam-pm.dev..."

# Step 1: Build project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Step 2: Upload files to server
echo "📤 Uploading files to server..."
rsync -avz --progress --delete $LOCAL_BUILD_PATH/ $SERVER:$REMOTE_PATH/

if [ $? -ne 0 ]; then
    echo "❌ Upload failed!"
    exit 1
fi

echo "✅ Files uploaded successfully!"

# Step 3: Set permissions on server
echo "🔐 Setting permissions..."
ssh $SERVER "chown -R www-data:www-data $REMOTE_PATH && chmod -R 755 $REMOTE_PATH"

if [ $? -ne 0 ]; then
    echo "⚠️  Warning: Could not set permissions"
fi

# Step 4: Reload Nginx
echo "🔄 Reloading Nginx..."
ssh $SERVER "systemctl reload nginx"

if [ $? -ne 0 ]; then
    echo "⚠️  Warning: Could not reload Nginx"
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site is live at: https://islam-pm.dev"

