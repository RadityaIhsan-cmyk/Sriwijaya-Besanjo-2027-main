# Scroll stack Beranda → Menuju Main Event

Beranda ditahan menggunakan CSS sticky. Timer bergerak di atasnya tepat mengikuti posisi scroll halaman; scroll ke atas membuka Beranda kembali. Smooth scroll berbobot tetap aktif, tanpa animasi tambahan yang tertinggal dari posisi scroll.

Komponen baru: components/hero-countdown-stack.tsx. app/page.tsx memakai komponen ini untuk menggantikan dua wrapper AnimatedContent pertama. CSS stack ditambahkan ke app/globals.css. Overflow horizontal body di app/layout.tsx memakai clip agar tidak membentuk scroll container yang mengganggu sticky.

ResizeObserver mengukur tinggi Beranda dan navigasi. Beranda yang tinggi di HP dapat dibaca sampai bagian bawah sebelum ditahan. Timer minimal setinggi area layar di bawah navigasi agar menutup Beranda sepenuhnya. Reduced motion menggunakan alur section biasa.

Validasi: pemeriksaan integrasi dan simulasi geometri sticky desktop/mobile lulus. Pengujian browser belum dapat dijalankan karena executable Chromium tidak tersedia; build Next.js penuh belum dijalankan.

Jalankan npm install lalu npm run dev dari folder yang berisi package.json.
