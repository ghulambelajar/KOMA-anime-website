<div align="center">

<img src="screenshots/banner.png" alt="Banner KOMA — kolase tiga potongan adegan anime dengan gaya panel manga" width="100%">

# KOMA.
### Catatan & Rekomendasi Anime

Submission Tugas Akhir — Kelas *Belajar Dasar Pemrograman Web*, Dicoding Indonesia

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/Framework-Tanpa%20Library-14141A?style=flat)
![Status](https://img.shields.io/badge/Status-Siap%20Submit-E63946?style=flat)

</div>

---

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Tangkapan Layar](#tangkapan-layar)
- [Fitur](#fitur)
  - [Kriteria Wajib Submission](#kriteria-wajib-submission)
  - [Saran Reviewer yang Diterapkan](#saran-reviewer-yang-diterapkan)
  - [Fitur JavaScript](#fitur-javascript)
- [Konsep Desain](#konsep-desain)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Folder](#struktur-folder)
- [Cara Menjalankan](#cara-menjalankan)
- [Checklist Sebelum Submit](#checklist-sebelum-submit)
- [Aksesibilitas & Responsivitas](#aksesibilitas--responsivitas)
- [Kredit & Sumber](#kredit--sumber)
- [Tentang Penulis](#tentang-penulis)
- [Lisensi](#lisensi)

---

## Tentang Proyek

**KOMA** adalah situs statis satu halaman berisi catatan dan rekomendasi anime pribadi. Namanya diambil dari istilah *koma* (コマ) dalam bahasa Jepang yang berarti **"panel"** — istilah yang dipakai untuk menyebut satu kotak gambar dalam manga. Ide itu jadi dasar seluruh arah visual situs ini: border tebal, tekstur halftone, dan palet duotone tinta-hitam & merah, alih-alih tema anime bertema pastel/gradient yang generik.

Proyek ini dibuat murni dengan **HTML, CSS, dan JavaScript tanpa framework atau library eksternal** (tanpa Bootstrap, Tailwind, dsb.), sesuai ketentuan submission.

## Tangkapan Layar

> **Catatan:** empat gambar di bawah masih berupa placeholder bawaan. Buka `index.html` di browser, lalu ganti file di folder `screenshots/` dengan tangkapan layar asli sebelum dipakai untuk portofolio (nama filenya sudah disiapkan, tinggal timpa).

### Desktop — Beranda (Hero Slider)
![Placeholder screenshot desktop beranda](screenshots/desktop-beranda.png)

### Desktop — Rekomendasi & Tentang Penulis
![Placeholder screenshot desktop rekomendasi](screenshots/desktop-rekomendasi.png)

### Mode Gelap
![Placeholder screenshot mode gelap](screenshots/dark-mode.png)

### Mobile — Menu Hamburger Terbuka
<img src="screenshots/mobile-menu.png" alt="Placeholder screenshot mobile" width="280">

## Fitur

### Kriteria Wajib Submission

- [x] Elemen `<header>`, `<nav>`, `<footer>`, `<main>`, `<article>` (×4), dan `<aside>` ada di `index.html`
- [x] `<nav>` memuat `<a>` yang mengarah ke [profil Dicoding penulis](https://www.dicoding.com/users/ghulam_mushthofa/academies)
- [x] `<aside>` menampilkan foto (saat ini masih placeholder — lihat [Checklist Sebelum Submit](#checklist-sebelum-submit))
- [x] Layout disusun dengan **flexbox**, tanpa `float` sama sekali
- [x] Tema bebas → tema *panel manga* "KOMA"

### Saran Reviewer yang Diterapkan

- [x] Kode styling terpisah di `css/style.css`
- [x] Semua elemen `<img>` memiliki `alt` yang deskriptif
- [x] Heading tersusun rapi: hanya satu `<h1>`, urutan level tidak ada yang meloncat (h1 → h2 → h3)
- [x] Media query diterapkan di tiga breakpoint (860px, 720px, 480px) untuk mendukung responsivitas

### Fitur JavaScript

Semua ditulis manual dengan *vanilla JS* (`js/script.js`), memanipulasi DOM secara langsung:

| Fitur | Deskripsi |
|---|---|
| Hamburger menu | Membuka/menutup navigasi di layar sempit, lengkap dengan atribut `aria-expanded` |
| Dark / Light mode | Toggle tema dengan `data-theme`, preferensi disimpan di `localStorage` sehingga tetap konsisten saat halaman dibuka ulang |
| Slider gambar | Slide otomatis tiap 5 detik + tombol navigasi manual & indikator titik, jeda otomatis saat kursor di atas slider |
| Scroll to top | Tombol melayang muncul setelah scroll melewati 420px, klik untuk kembali ke atas dengan animasi halus |
| Reveal saat scroll | Kartu rekomendasi anime muncul dengan animasi fade-in memakai `IntersectionObserver` |

## Konsep Desain

| Token | Nilai | Peran |
|---|---|---|
| `--color-ink` | `#14141A` | Warna teks & border utama (mode terang) |
| `--color-paper` | `#F7F5F0` | Warna latar utama (mode terang) |
| `--color-paper-alt` | `#EDEAE2` | Latar panel/kartu |
| `--color-accent` | `#E63946` | Aksen tunggal — tombol, tag, hover |
| `--color-muted` | `#6B6B75` | Teks sekunder |

Di mode gelap, token-token ini dibalik (`--color-ink` jadi terang, `--color-paper` jadi gelap, aksen sedikit dicerahkan ke `#FF5C6A` agar tetap kontras).

Tipografi memakai dua font dari Google Fonts:
- **Bebas Neue** — logotype "KOMA." dan judul besar pada hero, kesan tebal ala judul manga
- **Inter** — seluruh teks isi, supaya tetap mudah dibaca di layar kecil

Elemen visual berulang: border tebal 3px (bukan bayangan lembut ala kartu SaaS), tekstur titik halftone di area dekoratif, dan satu animasi *reveal* yang dipicu scroll — dijaga agar tidak berlebihan.

## Teknologi yang Digunakan

- **HTML5** — markup semantik
- **CSS3** — custom properties, flexbox, `clamp()`, media query, `prefers-reduced-motion`
- **JavaScript (ES6+)** — tanpa dependensi eksternal
- **Google Fonts** — Bebas Neue & Inter

## Struktur Folder

```
koma-anime-website/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── Bocci.jpg
│   ├── Byouko.jpg
│   ├── Solo_Leveling.jpg
│   ├── AOT.jpg              ← belum ditambahkan
│   ├── Frieren.jpg          ← belum ditambahkan
│   ├── SxF.jpg               ← belum ditambahkan
│   ├── MSG.jpg               ← belum ditambahkan
│   └── Men.jpeg               ← belum ditambahkan (foto profil asli)
└── screenshots/
    ├── banner.png             ← dipakai di README ini
    ├── desktop-beranda.png    ← placeholder, ganti dengan screenshot asli
    ├── desktop-rekomendasi.png← placeholder, ganti dengan screenshot asli
    ├── dark-mode.png          ← placeholder, ganti dengan screenshot asli
    └── mobile-menu.png        ← placeholder, ganti dengan screenshot asli
```

## Cara Menjalankan

Tidak perlu instalasi apa pun karena proyek ini murni HTML/CSS/JS statis.

1. Unduh atau extract folder proyek ini.
2. Buka `index.html` langsung dengan dobel klik di file explorer, **atau**
3. Jika pakai VSCode, install ekstensi **Live Server**, klik kanan pada `index.html` → `Open with Live Server` supaya perubahan kode langsung terlihat.

## Checklist Sebelum Submit

- [x] Link profil Dicoding di `<nav>` sudah diarahkan ke akun asli
- [ ] Tambahkan file `AOT.jpg`, `Frieren.jpg`, `SxF.jpg`, `MSG.jpg` ke folder `images/` untuk keempat kartu rekomendasi
- [ ] Ganti `images/Men.jpeg` dengan foto profil asli (kriteria wajib: elemen `<aside>` harus menampilkan foto)
- [ ] Ambil screenshot asli dari browser dan timpa file placeholder di folder `screenshots/`
- [ ] Buka di berbagai lebar layar untuk memastikan hamburger menu, slider, dan dark mode berjalan lancar
- [ ] Kompres folder proyek jadi satu file **.zip** yang isinya tepat satu `index.html`, lalu unggah ke halaman submission Dicoding

## Aksesibilitas & Responsivitas

- Tautan *skip to content* untuk pengguna keyboard/pembaca layar
- Semua gambar punya teks alternatif
- Kontras warna dijaga di kedua mode (terang & gelap)
- Fokus keyboard terlihat jelas (`:focus-visible`)
- Menghormati preferensi `prefers-reduced-motion` — animasi otomatis dipangkas untuk pengguna yang sensitif terhadap gerakan
- Layout responsif dari lebar mobile (≥320px) sampai desktop lebar

## Kredit & Sumber

- Cuplikan gambar anime **Bocchi the Rock!**, **5 Centimeters per Second**, dan **Solo Leveling** dipakai sebagai ilustrasi untuk keperluan ulasan/komentar pribadi non-komersial. Hak cipta gambar sepenuhnya milik studio dan pemegang lisensi masing-masing.
- Font **Bebas Neue** dan **Inter** disediakan gratis oleh [Google Fonts](https://fonts.google.com/).
- Dibuat untuk memenuhi submission kelas **Belajar Dasar Pemrograman Web** di [Dicoding Indonesia](https://www.dicoding.com/).

## Tentang Penulis

**Ghulam Mushthofa**
Sedang belajar dasar pemrograman web dengan cita-cita menjadi Full Stack Web Developer. Penikmat anime lintas genre dan suka mencatat kesan singkat dari judul-judul yang ditonton.

- Instagram: [@ghulammush_](https://www.instagram.com/ghulammush_/)
- LinkedIn: [ghulam-mushthofa](https://id.linkedin.com/in/ghulam-mushthofa)
- Dicoding: [profil akademi](https://www.dicoding.com/users/ghulam_mushthofa/academies)

## Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan submission akademik pribadi. Silakan jadikan referensi belajar, tapi mohon tidak disalin utuh untuk submission lain — reviewer Dicoding menandai kemiripan proyek sebagai indikasi plagiat dan submission tersebut bisa ditolak.