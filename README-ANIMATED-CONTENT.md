# AnimatedContent

Komponen reveal saat scroll dari React Bits sudah ditambahkan ke template Next.js ini.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. GSAP sudah dicantumkan sebagai dependency di `package.json` dan `package-lock.json`, sehingga tidak perlu memasangnya terpisah.

## Memakai di halaman lain

```tsx
import AnimatedContent from "@/components/AnimatedContent"

<AnimatedContent distance={40} duration={0.8} threshold={0.12}>
  <section>Konten muncul ketika masuk ke layar.</section>
</AnimatedContent>
```

Untuk animasi langsung saat halaman dimuat, pakai `trigger="mount"`. Untuk masuk dari arah berlawanan, pakai `reverse`. `direction` bisa diisi `"vertical"` atau `"horizontal"`. Animasi dimatikan ketika perangkat mengaktifkan `prefers-reduced-motion`.

## Penerapan di halaman utama

`app/page.tsx` membungkus bagian halaman yang ada dengan `AnimatedContent`: hero tampil saat halaman dibuka, sedangkan bagian lain muncul saat pengunjung menggulir. Beberapa bagian memakai arah dan jeda yang berbeda.

Sumber komponen: [React Bits — Animated Content](https://www.reactbits.dev/animations/animated-content). Dependensi animasinya adalah GSAP.
