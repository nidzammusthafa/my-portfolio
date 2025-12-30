# 🚀 Panduan Deployment ke Cloudflare Workers

Dokumen ini berisi panduan lengkap untuk men-deploy aplikasi portfolio ke **Cloudflare Workers** menggunakan adapter **OpenNext**.

> ⚠️ **PENTING untuk Windows Users:** Deploy via CLI dari Windows **TIDAK DIDUKUNG** karena bug Wrangler dengan file WASM. Gunakan salah satu metode alternatif:
>
> 1. Deploy via **WSL (Windows Subsystem for Linux)**
> 2. Deploy via **Cloudflare Dashboard** (Git integration)

---

## 📋 Prasyarat

1. **Akun Cloudflare** — [Daftar gratis di sini](https://dash.cloudflare.com/sign-up)
2. **Node.js** — Versi 18+ (disarankan 20+)
3. **npm** atau **pnpm** terinstal
4. **Git** — Sudah dikonfigurasi dengan repository
5. **WSL** (untuk Windows users) — [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

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
NEXTJS_ENV=development
```

> ⚠️ **Penting:** File `.dev.vars` sudah ada di `.gitignore` dan tidak akan ter-commit.

---

## ☁️ Deployment ke Cloudflare

### Metode 1: Deploy via WSL (Recommended untuk Windows)

#### 1. Buka WSL Terminal

```bash
wsl
```

#### 2. Navigate ke Project

```bash
cd /mnt/e/Projects/portfolio  # Sesuaikan path
```

#### 3. Login ke Cloudflare

```bash
npx wrangler login
```

#### 4. Deploy

```bash
npm run deploy:cloudflare
```

---

### Metode 2: Deploy via Cloudflare Dashboard (Git Integration)

#### 1. Buka Cloudflare Dashboard

Navigasi ke [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**

#### 2. Create Application

1. Klik **"Create"**
2. Pilih **"Workers"** → **"Import from Git"**
3. Authorize dan pilih repository Anda
4. Pilih branch: `deploy/cloudflare`

#### 3. Configure Build Settings

| Setting            | Value                                                   |
| ------------------ | ------------------------------------------------------- |
| **Build command**  | `npm run build:cloudflare`                              |
| **Deploy command** | `npx wrangler deploy` (otomatis dihandle oleh Wrangler) |

#### 4. Environment Variables

Tambahkan environment variables berikut di **Settings → Variables**:

| Variable Name        | Description                     |
| -------------------- | ------------------------------- |
| `NOTION_API_KEY`     | API key dari Notion Integration |
| `NOTION_DATABASE_ID` | Database ID untuk blog posts    |

> 💡 **Tip:** Dapatkan Notion API key dari [notion.so/my-integrations](https://www.notion.so/my-integrations)

#### 5. Deploy

Klik **"Save and Deploy"**. Cloudflare akan:

1. Clone repository
2. Install dependencies
3. Build aplikasi dengan OpenNext
4. Deploy ke Workers

---

### Metode 3: Deploy via CLI (Linux/macOS Only)

> ⛔ **Windows Users:** Metode ini TIDAK BEKERJA di Windows karena bug Wrangler. Gunakan WSL atau Dashboard.

#### 1. Login ke Cloudflare

```bash
npx wrangler login
```

#### 2. Deploy

```bash
npm run deploy:cloudflare
```

---

## 🏗️ Build & Preview Lokal

### Build untuk Cloudflare (Linux/macOS/WSL)

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

## 🌐 Custom Domain (Opsional)

### 1. Navigasi ke Worker Settings

Di dashboard Cloudflare → **Workers & Pages** → Project Anda → **Settings** → **Triggers**

### 2. Add Custom Domain

1. Klik **"Add Custom Domain"**
2. Masukkan domain Anda (contoh: `portfolio.yourdomain.com`)
3. Cloudflare akan otomatis mengonfigurasi DNS jika domain dikelola di Cloudflare

---

## 🔄 Continuous Deployment

Setelah setup selesai dengan Git integration, setiap push ke branch `deploy/cloudflare` akan:

1. Trigger build otomatis
2. Deploy ke production

---

## 🐛 Troubleshooting

### ❌ Error: WASM file not found (Windows)

```
ENOENT: no such file or directory, open '...-resvg.wasm?module'
```

**Penyebab:** Bug Wrangler di Windows dengan file WASM.

**Solusi:** Deploy dari WSL atau gunakan Cloudflare Dashboard.

### ❌ Error: 404 After Deployment

**Penyebab:** Project dikonfigurasi sebagai Pages biasa, bukan Workers.

**Solusi:**

1. Hapus project Pages yang ada
2. Buat ulang sebagai **Workers** dengan Git integration
3. Atau deploy via CLI dari WSL/Linux

### ❌ Build Gagal

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

---

## 📊 Monitoring

### 1. Logs

```bash
npx wrangler tail
```

Atau via Dashboard → **Workers & Pages** → Project → **Logs**

### 2. Analytics

Dashboard Cloudflare → **Analytics**

---

## 🔗 Useful Links

- [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [WSL Installation Guide](https://learn.microsoft.com/en-us/windows/wsl/install)

---

## 📝 Scripts Reference

| Script                       | Description                            |
| ---------------------------- | -------------------------------------- |
| `npm run dev`                | Development server (Next.js)           |
| `npm run build`              | Build untuk Vercel/Node.js             |
| `npm run build:cloudflare`   | Build untuk Cloudflare Workers         |
| `npm run preview:cloudflare` | Preview lokal (WSL/Linux/macOS)        |
| `npm run deploy:cloudflare`  | Deploy ke Cloudflare (WSL/Linux/macOS) |
