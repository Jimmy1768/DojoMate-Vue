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
git commit -m "added Deletion.vue"
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
scp /Users/jimmy1768/Projects/DojoMate-Expo/build-<id>.apk \
    jimmy1768_user@143.198.91.24:/tmp/build-<id>.apk

# On the droplet (run inside Projects/DojoMate-Vue)
./ops/scripts/deploy-apk.sh /tmp/build-1766993725581.apk 1.9.5
```

- `<id>` should match the exact unique suffix Expo generates for the build (e.g., `1766993725581`).
- `<build-tag>` should describe the new build (e.g., `1.9.5`); the script stores a snapshot at `DojoMate-<build-tag>.apk` before replacing `DojoMate-latest.apk`.

---

## Nginx

```bash

sudo cp ~/Projects/DojoMate-Vue/ops/nginx/dojomateapp.conf /etc/nginx/sites-available/dojomateapp.conf

# Test & reload
sudo nginx -t
sudo systemctl reload nginx
```

---
