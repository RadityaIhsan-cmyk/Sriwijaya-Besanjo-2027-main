# Smooth scroll berbobot

Scroll mouse/trackpad vertikal memakai momentum berbasis requestAnimationFrame, tanpa dependency tambahan. Scroll turun melambat lebih lembut (380 ms damping); scroll naik lebih responsif (280 ms). Delta roda dikalikan 0.72 dan antrean momentum dibatasi supaya halaman tidak terus meluncur terlalu jauh.

Pengaturan berada di components/smooth-scroll.tsx: DOWN_DAMPING, UP_DAMPING, WHEEL_MULTIPLIER, INPUT_LAG. Naikkan DOWN_DAMPING sedikit untuk rasa lebih berat. Angka damping bukan durasi total animasi.

Scroll sentuh tetap native. Navigasi anchor, keyboard, klik, perubahan ukuran layar, dan drag scrollbar dapat menghentikan momentum. Area scroll di dalam komponen dan dialog tetap native. Preferensi reduced motion menonaktifkan momentum. Posisi halaman tetap menggunakan scroll browser sehingga animasi GSAP tetap menerima event scroll.

File yang diubah: app/page.tsx, app/globals.css. Komponen baru: components/smooth-scroll.tsx.

Jalankan dari folder yang berisi package.json:

```sh
npm install
npm run dev
```

Validasi: sintaks TypeScript komponen serta simulasi momentum, pembalikan arah, batas bawah, pembatalan keyboard/klik, reduced motion, zoom, nested scroll, dan cleanup lulus. Build Next.js penuh dan pemeriksaan visual browser belum dijalankan di lingkungan pengerjaan ini.

Revisi rasa scroll: dua tahap smoothing dengan INPUT_LAG 85 ms membuat awal gerakan lebih tertahan, lalu mengikuti input secara halus. Posisi pecahan piksel disimpan agar scroll pelan tidak meloncat akibat pembulatan browser.
