# Deploy ke GitHub

Repository sudah di-initialize dan first commit sudah dibuat. Ikuti langkah-langkah berikut untuk push ke GitHub:

## 1. Buat Repository Baru di GitHub

- Pergi ke https://github.com/new
- Beri nama repository: `bobanad-website` (atau nama pilihan Anda)
- Jangan inisialisasi dengan README, .gitignore, atau license (sudah ada locally)
- Klik "Create repository"

## 2. Tambah Remote dan Push

Jalankan perintah berikut di terminal PowerShell (ganti `YOUR_USERNAME` dengan username GitHub Anda):

```powershell
cd "c:\MemeCoin Web portofolio\BOBANAD"
git remote add origin https://github.com/YOUR_USERNAME/bobanad-website.git
git branch -M main
git push -u origin main
```

## 3. Authentication

Jika diminta, gunakan salah satu:
- **GitHub CLI** (recommended): `gh auth login`
- **Personal Access Token**: Generate di https://github.com/settings/tokens (scope: `repo`)
- **SSH Key**: Setup SSH key di GitHub settings

## 4. Deploy ke Vercel/Netlify (Optional tapi Recommended)

### Deploy ke Vercel (Recommended untuk React/Vite):

1. Pergi ke https://vercel.com/new
2. Import dari GitHub repository Anda
3. Framework: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy! 🚀

### Deploy ke Netlify:

1. Pergi ke https://netlify.com
2. Connect GitHub
3. Select repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy! 🚀

## Repository Structure

```
bobanad-website/
├── src/
│   ├── components/       # React components
│   ├── hooks/           # Custom hooks (useScrollAnimation)
│   ├── assets/          # Images, SVGs
│   ├── App.jsx          # Main app
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind + custom styles
├── public/              # Static assets (optional)
├── index.html           # Vite entry HTML
├── package.json         # Dependencies
├── vite.config.js       # Vite config
├── tailwind.config.cjs  # Tailwind config
├── postcss.config.cjs   # PostCSS config
├── .gitignore           # Git ignore rules
└── README.md            # Project readme
```

## Quick Start untuk Development

```powershell
npm install
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (creates dist/)
npm run preview      # Preview production build
```

## Environment Variables (Optional)

Jika butuh env variables, buat `.env` file:

```
VITE_API_URL=https://api.example.com
VITE_CONTRACT_ADDRESS=0x...
```

Reference di code: `import.meta.env.VITE_*`

## Next Steps

- [ ] Create GitHub repository
- [ ] Push code dengan commands di atas
- [ ] Deploy ke Vercel/Netlify
- [ ] Update repository description di GitHub
- [ ] Add topics: `cryptocurrency`, `meme-token`, `react`, `vite`, `tailwind`
- [ ] Enable GitHub Pages (optional) atau gunakan Vercel/Netlify

---

Happy deploying! 🚀✨
