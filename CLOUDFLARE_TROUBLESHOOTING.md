# 🐛 Troubleshooting: Cloudflare Workers Deployment

Dokumen ini mencatat error yang pernah terjadi dan solusinya saat deploy ke Cloudflare Workers. Gunakan sebagai referensi untuk menghindari kesalahan yang sama.

> ⚠️ **CATATAN PENTING:** Deploy dari Windows via CLI **TIDAK DIDUKUNG** karena bug Wrangler dengan file WASM. Gunakan WSL atau Cloudflare Dashboard.

---

## Error 0: 404 After Successful Deployment

### Error Message

```
HTTP ERROR 404 - This page can't be found
```

### Penyebab

Format `open-next.config.ts` tidak sesuai dengan versi terbaru `@opennextjs/cloudflare`.
Versi baru menggunakan `defineCloudflareConfig()` dari package.

### Solusi

1. Update `open-next.config.ts`:

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Konfigurasi opsional
});
```

2. Update scripts di `package.json`:

```json
{
  "scripts": {
    "build:cloudflare": "opennextjs-cloudflare build",
    "preview:cloudflare": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy:cloudflare": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
  }
}
```

3. Tambahkan `public/_headers`:

```
/_next/static/*
  Cache-Control: public,max-age=31536000,immutable
```

---

## Error 1: Dependency Conflict (wrangler version)

### Error Message

```
npm error ERESOLVE could not resolve
npm error peer wrangler@"^4.53.0" from @opennextjs/cloudflare@1.14.7
npm error Conflicting peer dependency: wrangler@4.54.0
```

### Penyebab

`@opennextjs/cloudflare` membutuhkan `wrangler@^4.53.0`, tetapi `package-lock.json` masih menyimpan versi lama.

### Solusi

```bash
# Hapus package-lock.json dan install ulang
rm package-lock.json
npm install --legacy-peer-deps
git add . && git commit -m "fix: resolve wrangler dependency conflict"
git push
```

---

## Error 2: Invalid open-next.config.ts Format

### Error Message

```
Error: The `open-next.config.ts` should have a default export like this:
{
  default: { override: {...} },
  edgeExternals: ["node:crypto"],
  middleware: { external: true, override: {...} },
}
```

### Penyebab

Format konfigurasi OpenNext berubah di versi terbaru. Versi lama tidak menyertakan:

- `proxyExternalRequest: "fetch"`
- `edgeExternals: ["node:crypto"]`
- `middleware.override` dengan wrapper dan converter yang tepat

### Solusi

Update `open-next.config.ts` dengan format berikut:

```typescript
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};

export default config;
```

---

## Error 3: OpenNext Not Compatible with Windows

### Error Message

```
WARN OpenNext is not fully compatible with Windows.
```

### Penyebab

OpenNext CLI memiliki limitasi di Windows karena beberapa operasi file system.

### Solusi

1. **Recommended:** Deploy via Cloudflare Dashboard (CI/CD berjalan di Linux)
2. **Alternative:** Gunakan WSL (Windows Subsystem for Linux) untuk build lokal

---

## Error 4: Entry-point file not found

### Error Message

```
X [ERROR] The entry-point file at ".open-next\worker.js" was not found.
```

### Penyebab

Mencoba `npm run deploy:cloudflare` tanpa menjalankan `npm run build:cloudflare` terlebih dahulu.

### Solusi

```bash
# Selalu build terlebih dahulu sebelum deploy
npm run build:cloudflare
npm run deploy:cloudflare
```

---

## Tips Umum

1. **Selalu gunakan versi terbaru:**

   ```bash
   npm install @opennextjs/cloudflare@latest wrangler@latest --save-dev
   ```

2. **Regenerate lock file jika ada konflik:**

   ```bash
   rm package-lock.json && npm install --legacy-peer-deps
   ```

3. **Cek dokumentasi OpenNext terbaru:**
   - [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)
   - [GitHub Issues](https://github.com/opennextjs/opennextjs-cloudflare/issues)
