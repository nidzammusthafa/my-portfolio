# 🚀 Panduan Deployment ke Cloudflare Pages

Dokumen ini berisi panduan lengkap untuk men-deploy aplikasi portfolio ke **Cloudflare Pages** menggunakan adapter **OpenNext**.

---

## 📋 Prasyarat

1. **Akun Cloudflare** — [Daftar gratis di sini](https://dash.cloudflare.com/sign-up)
2. **Node.js** — Versi 18+ (disarankan 20+)
3. **npm** atau **pnpm** terinstal
4. **Git** — Sudah dikonfigurasi dengan repository

---

## 🔧 Setup Lokal

### 1. Checkout Branch Cloudflare

```bash
git checkout deploy/cloudflare
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.dev.vars` di root proyek (untuk development lokal):

```bash
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

> ⚠️ **Penting:** File `.dev.vars` sudah ada di `.gitignore` dan tidak akan ter-commit.

---

## 🏗️ Build & Preview Lokal

### Build untuk Cloudflare

```bash
npm run build:cloudflare
```

Perintah ini akan:

- Menjalankan `next build`
- Mengkonversi output ke format Cloudflare Workers

### Preview Lokal

```bash
npm run preview:cloudflare
```

Akses aplikasi di `http://localhost:8787`

---

## ☁️ Deployment ke Cloudflare

### Metode 1: Manual Deploy via CLI

#### 1. Login ke Cloudflare

```bash
npx wrangler login
```

Browser akan terbuka untuk autentikasi.

#### 2. Deploy

```bash
npm run deploy:cloudflare
```

### Metode 2: Deploy via Cloudflare Dashboard (Recommended)

#### 1. Buka Cloudflare Dashboard

Navigasi ke [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**

#### 2. Create Application

1. Klik **"Create"**
2. Pilih **"Pages"** → **"Connect to Git"**
3. Authorize dan pilih repository Anda
4. Pilih branch: `deploy/cloudflare`

#### 3. Configure Build Settings

| Setting                    | Value                      |
| -------------------------- | -------------------------- |
| **Framework preset**       | None                       |
| **Build command**          | `npm run build:cloudflare` |
| **Build output directory** | `.open-next/assets`        |
| **Root directory**         | `/`                        |

#### 4. Environment Variables

Tambahkan environment variables berikut:

| Variable Name        | Description                     |
| -------------------- | ------------------------------- |
| `NOTION_API_KEY`     | API key dari Notion Integration |
| `NOTION_DATABASE_ID` | Database ID untuk blog posts    |

> 💡 **Tip:** Dapatkan Notion API key dari [notion.so/my-integrations](https://www.notion.so/my-integrations)

#### 5. Deploy

Klik **"Save and Deploy"**. Cloudflare akan:

1. Clone repository
2. Install dependencies
3. Build aplikasi
4. Deploy ke edge network

---

## 🌐 Custom Domain (Opsional)

### 1. Navigasi ke Project Settings

Di dashboard Cloudflare Pages → Project Anda → **Custom domains**

### 2. Add Domain

1. Klik **"Set up a custom domain"**
2. Masukkan domain Anda (contoh: `portfolio.yourdomain.com`)
3. Cloudflare akan memberikan instruksi DNS

### 3. Konfigurasi DNS

Jika domain dikelola di Cloudflare:

- DNS akan otomatis dikonfigurasi

Jika domain di registrar lain:

- Tambahkan CNAME record pointing ke `your-project.pages.dev`

---

## 🔄 Continuous Deployment

Setelah setup selesai, setiap push ke branch `deploy/cloudflare` akan:

1. Trigger build otomatis
2. Deploy ke preview URL
3. Jika sukses, promote ke production

---

## 🐛 Troubleshooting

### Build Gagal

**Error: "Module not found"**

```bash
# Hapus cache dan rebuild
rm -rf .open-next .next node_modules
npm install
npm run build:cloudflare
```

**Error: "Environment variables not set"**

- Pastikan environment variables sudah diset di Cloudflare Dashboard
- Untuk lokal, pastikan `.dev.vars` ada dan benar

### Preview Tidak Bisa Diakses

**Error: "Port already in use"**

```bash
# Jalankan di port berbeda
npx wrangler dev --port 8788
```

### Gambar Tidak Muncul

- Cloudflare Pages tidak mendukung Next.js Image Optimization secara penuh
- Gambar dari external URL (Notion) seharusnya tetap bekerja

---

## 📊 Monitoring

### 1. Analytics

Dashboard Cloudflare → **Analytics** → **Web Analytics**

### 2. Logs

```bash
npx wrangler tail
```

Atau via Dashboard → **Workers & Pages** → Project → **Logs**

---

## 🔗 Useful Links

- [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

## 📝 Scripts Reference

| Script                       | Description                   |
| ---------------------------- | ----------------------------- |
| `npm run dev`                | Development server (Next.js)  |
| `npm run build`              | Build untuk Vercel/Node.js    |
| `npm run build:cloudflare`   | Build untuk Cloudflare        |
| `npm run preview:cloudflare` | Preview lokal dengan Wrangler |
| `npm run deploy:cloudflare`  | Deploy ke Cloudflare          |
