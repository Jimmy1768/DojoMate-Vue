# DojoMate Website Commands

---

## 🔐 Droplet SSH Access

```bash
ssh jimmy1768_user@143.198.91.24
```
---

## 📂 Project Directory & Logs

```bash
cd Projects/DojoMate-Vue
```

---

## 🔧 Git Commands

```bash
git add .
git commit -m "fixed minor inconsistencies"
git push

git pull
```

---

## 🚀 Start Vue

```bash
# Local dev
npm run dev
http://localhost:5173

# Rebuild fresh dist
rm -rf dist
npm run build
sudo rsync -av --delete dist/ /var/www/DojoMate/
```

---

## 📱 Deploy Android APK

```bash
# Upload the new build from your local machine (adjust the path & build number)
scp /Users/jimmy1768/Projects/DojoMate-Expo/DojoMate-build-1766993725581.apk \
    jimmy1768_user@143.198.91.24:/tmp/DojoMate-build-1766993725581.apk

# On the droplet (run inside Projects/DojoMate-Vue)
./ops/scripts/deploy-apk.sh /tmp/DojoMate-build-1766993725581.apk 1.9.5
```

- `<build>` should match the exact filename you output from Expo.
- `<build-tag>` becomes the suffix for the backup file (e.g., `2024-06-15` or `1.7.0`).

---

## Nginx

```bash

sudo cp ~/Projects/DojoMate-Vue/ops/nginx/dojomateapp.conf /etc/nginx/sites-available/dojomateapp.conf

# Test & reload
sudo nginx -t
sudo systemctl reload nginx
```

---
