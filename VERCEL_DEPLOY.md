# Deploy ke Vercel - Panduan Lengkap

Vercel adalah platform deploy terbaik untuk React/Vite apps. Website akan live dalam hitungan menit!

## Step 1: Persiapan

✅ Code sudah di GitHub: https://github.com/VenJean/bobanad-website
✅ Git push sudah selesai
✅ Siap untuk deploy

## Step 2: Deploy ke Vercel (3 Menit)

### Opsi A: Deploy via Web (Paling Mudah - RECOMMENDED)

1. **Buka** https://vercel.com/new

2. **Login dengan GitHub**
   - Klik "Continue with GitHub"
   - Authorize Vercel untuk akses repository

3. **Import Repository**
   - Cari "bobanad-website" 
   - Klik "Import"

4. **Configure Project**
   - **Project Name**: `bobanad` (atau nama pilihan)
   - **Framework Preset**: `Vite` (auto-detect atau pilih manual)
   - **Root Directory**: `./` (leave default)
   - Klik "Deploy"

5. **Build & Deploy**
   - Vercel akan otomatis:
     - Clone code dari GitHub
     - Run `npm install`
     - Run `npm run build`
     - Deploy ke CDN global
   - Tunggu sampai "Congratulations! Your project has been successfully deployed"

6. **Akses Website**
   - URL akan otomatis: `https://bobanad.vercel.app`
   - Share ke investor! 🚀

---

### Opsi B: Deploy via Vercel CLI (Advanced)

```powershell
# Install Vercel CLI
npm install -g vercel

# Navigate ke project
cd "c:\MemeCoin Web portofolio\BOBANAD"

# Login ke Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts dan selesai!
```

---

## Step 3: Setelah Deploy (Setup Optional)

### A. Custom Domain (Opsional)
```
Vercel Dashboard → Settings → Domains
- Tambah domain kamu
- Update DNS di registrar domain
- Contoh: bobanad.io → Vercel
```

### B. Environment Variables (Jika diperlukan)
```
Vercel Dashboard → Settings → Environment Variables
- Tambah VITE_* variables
- Redeploy otomatis
```

### C. Auto-Deploy dari GitHub
```
Sudah enabled by default!
- Push ke main branch
- Vercel otomatis rebuild & deploy
```

---

## Struktur Build untuk Production

```
bobanad-website/
├── src/                    # Source code (tidak diupload)
├── dist/                   # Production build (hasil npm run build)
│   ├── index.html
│   ├── assets/
│   └── js, css files
├── package.json
└── vite.config.js
```

Vercel hanya upload file di `dist/` folder ke server.

---

## Verifikasi Deploy

Setelah deploy selesai:

```
✅ Website accessible di https://bobanad.vercel.app
✅ Can refresh halaman (tidak 404)
✅ Animasi berjalan smooth
✅ Images loading properly
✅ Responsive di mobile
✅ HTTPS secure badge ✓
```

## Troubleshooting

### ❌ Build Failed
**Solusi**: Check Vercel Build Logs
- Vercel Dashboard → Deployments → Klik deployment yang failed
- Lihat error message
- Push fix ke GitHub
- Vercel auto-redeploy

### ❌ Assets 404
**Solusi**: Check asset paths
- Pastikan `/src/assets/` path correct di components
- Build local: `npm run build` → check dist/
- Lihat console browser (F12)

### ❌ Styling Tidak Apply
**Solusi**: Tailwind CSS build issue
- Delete `node_modules/` dan `package-lock.json`
- Run `npm install` fresh
- Push ke GitHub
- Vercel redeploy

---

## Tahapan Deploy Anda

- [x] Code ready & tested locally
- [x] Push ke GitHub VenJean/bobanad-website
- [ ] **Deploy ke Vercel** ← YOU ARE HERE
  - [ ] Pergi ke vercel.com/new
  - [ ] Login dengan GitHub
  - [ ] Import bobanad-website
  - [ ] Configure (Vite, dist folder)
  - [ ] Deploy!
- [ ] Setup custom domain (optional)
- [ ] Share link ke investor 🚀

---

## Monitoring Live Website

Setelah live, monitor dengan:

### Analytics
```
Vercel Dashboard → Analytics
- Page views
- Response time
- Errors
```

### Performance
```
Google PageSpeed Insights: https://pagespeed.web.dev
- Check mobile speed
- Check desktop speed
```

---

## Ringkasan

| Step | Action | Time |
|------|--------|------|
| 1 | Buka https://vercel.com/new | 30 detik |
| 2 | Login GitHub | 1 menit |
| 3 | Import bobanad-website | 1 menit |
| 4 | Configure & Deploy | 2-3 menit |
| **TOTAL** | **Website Live!** | **~5 menit** ✅ |

---

## Hasil Akhir

```
Sebelum Deploy:
- Website hanya di local: http://localhost:5173
- Hanya Anda yang bisa akses

Setelah Deploy:
- Website live: https://bobanad.vercel.app
- Investor bisa akses dari mana saja
- HTTPS secure ✓
- Global CDN ✓
- Auto-redeploy saat push GitHub ✓
```

---

## Next Steps Setelah Deploy

1. ✅ Website live & accessible
2. Share URL ke investor/community:
   - Twitter/X
   - Telegram
   - Discord
3. Setup analytics & monitor traffic
4. Iterate & improve berdasarkan feedback
5. Plan next features (swap widget, DAO, dll)

---

**Siap deploy? Buka https://vercel.com/new sekarang! 🚀**

Jika ada issue atau pertanyaan saat deploy, screenshot error dan kita solve bareng.
