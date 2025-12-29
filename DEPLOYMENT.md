# 🚀 Deployment Guide for islam-pm.dev

## Server Information
- **IP**: 80.66.64.9
- **Domain**: islam-pm.dev
- **Server Path**: /var/www/islam-pm.dev

## Initial Server Setup (One-time)

### 1. Connect to Server
```bash
ssh root@80.66.64.9
```

### 2. Install Required Packages
```bash
# Update system
apt update && apt upgrade -y

# Install Nginx
apt install nginx -y

# Install Certbot for SSL
apt install certbot python3-certbot-nginx -y

# Enable Nginx
systemctl enable nginx
systemctl start nginx
```

### 3. Create Nginx Configuration
```bash
nano /etc/nginx/sites-available/islam-pm.dev
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name islam-pm.dev www.islam-pm.dev;

    root /var/www/islam-pm.dev;
    index index.html;

    # Block search engine indexing
    add_header X-Robots-Tag "noindex, nofollow, noarchive, nosnippet" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # robots.txt
    location = /robots.txt {
        add_header Content-Type text/plain;
    }

    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|pdf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Robots-Tag "noindex, nofollow" always;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

### 4. Enable Site
```bash
# Create website directory
mkdir -p /var/www/islam-pm.dev

# Enable site
ln -s /etc/nginx/sites-available/islam-pm.dev /etc/nginx/sites-enabled/

# Test configuration
nginx -t

# Reload Nginx
systemctl reload nginx
```

### 5. Setup SSL Certificate
```bash
# Get SSL certificate from Let's Encrypt
certbot --nginx -d islam-pm.dev -d www.islam-pm.dev

# Follow prompts:
# 1. Enter email for notifications
# 2. Agree to terms (Y)
# 3. Choose option 2 (redirect HTTP -> HTTPS)
```

### 6. Setup Firewall (if needed)
```bash
ufw allow 'Nginx Full'
ufw status
```

## Deployment (Every Update)

### Option 1: Automatic Deployment Script (Recommended)

#### Windows PowerShell:
```powershell
.\deploy.ps1
```

#### Linux/Mac:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual Deployment

#### Step 1: Build locally
```bash
npm run build
```

#### Step 2: Upload to server
**Windows (PowerShell):**
```powershell
scp -r dist\* root@80.66.64.9:/var/www/islam-pm.dev/
```

**Linux/Mac:**
```bash
scp -r dist/* root@80.66.64.9:/var/www/islam-pm.dev/
```

#### Step 3: Set permissions on server
```bash
ssh root@80.66.64.9 "chown -R www-data:www-data /var/www/islam-pm.dev && chmod -R 755 /var/www/islam-pm.dev"
```

#### Step 4: Reload Nginx
```bash
ssh root@80.66.64.9 "systemctl reload nginx"
```

## Troubleshooting

### Check Nginx status
```bash
ssh root@80.66.64.9 "systemctl status nginx"
```

### Check Nginx logs
```bash
ssh root@80.66.64.9 "tail -f /var/log/nginx/error.log"
```

### Test SSL certificate
```bash
ssh root@80.66.64.9 "certbot certificates"
```

### Renew SSL certificate manually
```bash
ssh root@80.66.64.9 "certbot renew"
```

### Check disk space
```bash
ssh root@80.66.64.9 "df -h"
```

## DNS Configuration

Make sure A records are pointing to the server:
```
islam-pm.dev        A    80.66.64.9
www.islam-pm.dev    A    80.66.64.9
```

## Quick Commands

### Deploy new version
```powershell
.\deploy.ps1
```

### Check if site is live
```powershell
curl https://islam-pm.dev
```

### View server nginx config
```bash
ssh root@80.66.64.9 "cat /etc/nginx/sites-available/islam-pm.dev"
```

---

**🎉 Your site will be live at: https://islam-pm.dev**

