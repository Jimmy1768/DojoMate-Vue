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
git commit -m "client request changes"
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
```

---

## Nginx

```bash
ops -> root@143.198.91.24:/etc/nginx/sites-available/

# Test & reload
sudo nginx -t
sudo systemctl reload nginx
```

---