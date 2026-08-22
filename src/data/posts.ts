export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  content: string;
}

export const blogPosts: Post[] = [
  {
    id: 1,
    title: "Cara Mulai Investasi dari Rp100 Ribu (Panduan Lengkap untuk Pemula)",
    slug: "cara-mulai-investasi-100-ribu",
    excerpt: "Mau investasi tapi modal cuma Rp100 ribu? Ini panduan lengkap cara mulai investasi dari nol, aman dan gampang dipraktikkan.",
    date: "2026-08-15",
    category: "Panduan Dasar",
    readTime: 6,
    content: `
      <p>Banyak orang mikir investasi itu cuma buat mereka yang udah punya gaji besar atau tabungan menumpuk. Padahal enggak gitu. Sekarang, dengan Rp100 ribu aja, kamu udah bisa mulai investasi.</p>
      <h2>Kenapa Rp100 Ribu Sudah Cukup untuk Mulai?</h2>
      <p>Banyak platform investasi digital yang membuka akses reksadana mulai dari nominal kecil. Yang penting dipahami: di tahap awal, fokusnya bukan seberapa besar modal kamu, tapi seberapa konsisten kamu berinvestasi.</p>
      <h2>Langkah-Langkah Praktis Mulai Investasi</h2>
      <p><strong>1. Tentukan Tujuan Investasi Kamu.</strong> Tujuan ini menentukan jangka waktu dan jenis instrumen yang cocok.</p>
      <p><strong>2. Pilih Instrumen Sesuai Profil Risiko.</strong> Buat pemula, reksadana pasar uang biasanya jadi pilihan paling aman untuk belajar dulu.</p>
      <p><strong>3. Pilih Platform yang Terdaftar OJK.</strong> Pastikan platform terdaftar dan diawasi oleh Otoritas Jasa Keuangan.</p>
      <p><strong>4. Mulai dengan Nominal Kecil, Tambah Bertahap.</strong> Setelah beberapa bulan dan kamu makin paham, baru tambah nominal investasi secara bertahap.</p>
      <h2>Kesalahan yang Harus Dihindari Pemula</h2>
      <p>All-in di satu instrumen, panik jual saat harga turun, dan ikut-ikutan tanpa riset adalah kesalahan paling umum yang harus dihindari.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan. Selalu lakukan riset sendiri sebelum berinvestasi.</em></p>
    `
  },
  {
    id: 2,
    title: "Reksadana vs Saham vs Emas: Mana yang Cocok untuk Pemula?",
    slug: "reksadana-vs-saham-vs-emas",
    excerpt: "Bingung mau mulai investasi dari mana? Ini perbandingan lengkap reksadana, saham, dan emas biar kamu bisa pilih yang paling cocok.",
    date: "2026-08-14",
    category: "Panduan Dasar",
    readTime: 7,
    content: `
      <p>Setelah paham cara mulai investasi, pertanyaan berikutnya: mending investasi di reksadana, saham, atau emas? Ketiganya punya karakteristik beda.</p>
      <h2>Reksadana: Pilihan Paling Ramah untuk Pemula</h2>
      <p>Dikelola manajer investasi profesional, modal awal kecil, dan terdiversifikasi otomatis. Cocok untuk pemula yang belum punya waktu analisis pasar sendiri.</p>
      <h2>Saham: Potensi Untung Lebih Besar, Risiko Juga Lebih Besar</h2>
      <p>Potensi return jangka panjang lebih tinggi, tapi butuh waktu belajar analisis dan siap dengan fluktuasi harga yang tajam.</p>
      <h2>Emas: Aset Aman di Tengah Ketidakpastian</h2>
      <p>Nilainya cenderung stabil, likuiditas tinggi, cocok sebagai pelindung nilai kekayaan.</p>
      <h2>Jadi, Pilih yang Mana?</h2>
      <p>Kombinasi ketiganya sering jadi strategi paling seimbang. Contoh alokasi pemula: 50% reksadana, 30% saham, 20% emas — disesuaikan lagi dengan usia dan toleransi risiko.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan. Selalu lakukan riset sendiri sebelum berinvestasi.</em></p>
    `
  },
  {
    id: 3,
    title: "Bibit vs Ajaib vs Reku: Mana Platform Investasi Terbaik untuk Pemula?",
    slug: "bibit-vs-ajaib-vs-reku",
    excerpt: "Bingung pilih platform investasi? Ini perbandingan jujur Bibit, Ajaib, dan Reku dari sisi fitur, biaya, dan kemudahan untuk pemula.",
    date: "2026-08-13",
    category: "Review Platform",
    readTime: 6,
    content: `
      <h2>Bibit</h2>
      <p>Fokus pada reksadana dengan fitur robo advisor. Tampilan simpel, cocok untuk pemula total yang mau mulai reksadana tanpa pusing mikirin alokasi sendiri.</p>
      <h2>Ajaib</h2>
      <p>Menawarkan akses ke saham dan reksadana dalam satu aplikasi. Cocok buat pemula yang sudah mulai berani coba saham individual.</p>
      <h2>Reku</h2>
      <p>Awalnya dikenal sebagai platform kripto, sekarang merambah instrumen lain. Cocok untuk eksplorasi diversifikasi aset digital dengan porsi kecil.</p>
      <h2>Hal yang Wajib Dicek</h2>
      <p>Terdaftar OJK, biaya transaksi, kemudahan penarikan dana, dan review pengguna lain sebelum daftar di platform manapun.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan dan bukan endorsement resmi dari platform manapun.</em></p>
    `
  },
  {
    id: 4,
    title: "Cara Cek Legalitas Platform Investasi di OJK",
    slug: "cara-cek-legalitas-ojk",
    excerpt: "Sebelum daftar di platform investasi manapun, wajib cek legalitasnya dulu di OJK. Ini cara ceknya, gampang dan cuma butuh 5 menit.",
    date: "2026-08-12",
    category: "Edukasi",
    readTime: 4,
    content: `
      <p>Salah satu langkah paling penting sebelum mulai investasi adalah memastikan platform yang kamu pakai legal dan diawasi OJK.</p>
      <h2>Ciri-Ciri Investasi Bodong</h2>
      <p>Menjanjikan keuntungan tetap tanpa risiko, skema merekrut anggota baru, tidak transparan soal pengelolaan dana, dan memaksa buru-buru daftar.</p>
      <h2>Cara Cek Legalitas di OJK</h2>
      <p>Kunjungi situs resmi OJK, cari daftar perusahaan berizin, masukkan nama platform, dan periksa status izinnya. Bisa juga hubungi call center OJK 157.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan. Selalu lakukan verifikasi mandiri melalui kanal resmi OJK.</em></p>
    `
  },
  {
    id: 5,
    title: "Cara Beli Reksadana Pertama Kali (Step by Step)",
    slug: "cara-beli-reksadana-pertama-kali",
    excerpt: "Baru pertama kali mau beli reksadana? Ini panduan langkah demi langkah dari daftar akun sampai transaksi pertama.",
    date: "2026-08-11",
    category: "Panduan Dasar",
    readTime: 6,
    content: `
      <h2>Langkah 1: Siapkan Dokumen</h2>
      <p>KTP, NPWP (opsional), rekening bank atas nama sendiri, dan foto selfie untuk verifikasi.</p>
      <h2>Langkah 2: Pilih Platform dan Daftar Akun</h2>
      <p>Isi data diri, upload KTP dan selfie, isi kuisioner profil risiko, lalu tunggu verifikasi 1-2 hari kerja.</p>
      <h2>Langkah 3: Pilih Jenis Reksadana</h2>
      <p>Untuk pembelian pertama, banyak yang menyarankan mulai dari reksadana pasar uang dulu untuk membiasakan diri dengan platform.</p>
      <h2>Langkah 4: Lakukan Pembelian Pertama</h2>
      <p>Pilih produk, masukkan nominal, bayar sesuai metode tersedia, tunggu konfirmasi transaksi.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan.</em></p>
    `
  },
  {
    id: 6,
    title: "7 Kesalahan Umum Investor Pemula yang Bikin Rugi",
    slug: "kesalahan-umum-investor-pemula",
    excerpt: "Banyak pemula rugi bukan karena instrumen yang salah, tapi karena kesalahan kebiasaan. Ini 7 kesalahan yang paling sering terjadi.",
    date: "2026-08-10",
    category: "Edukasi",
    readTime: 5,
    content: `
      <p>Rugi dalam investasi nggak selalu karena salah pilih instrumen, tapi karena kebiasaan dan pola pikir yang keliru.</p>
      <h2>Kesalahan yang Sering Terjadi</h2>
      <p>Investasi pakai uang yang sebenarnya dibutuhkan, all-in di satu instrumen, panik jual saat harga turun, ikut-ikutan tanpa riset sendiri, terlalu fokus cari cuan cepat, tidak punya tujuan investasi yang jelas, dan mengabaikan biaya serta legalitas platform.</p>
      <p>Sebagian besar kesalahan investor pemula sebenarnya bisa dihindari dengan kesadaran dan kesabaran, bukan strategi yang rumit.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan.</em></p>
    `
  },
  {
    id: 7,
    title: "Compound Interest Dijelaskan Simpel",
    slug: "compound-interest-dijelaskan-simpel",
    excerpt: "Compound interest sering disebut keajaiban dunia finansial. Ini penjelasan simpel kenapa konsepnya penting banget buat investor pemula.",
    date: "2026-08-09",
    category: "Edukasi",
    readTime: 5,
    content: `
      <p>Compound interest adalah konsep di mana keuntungan investasi kamu ikut menghasilkan keuntungan lagi, bukan cuma modal awal yang berkembang.</p>
      <h2>Kenapa Waktu Jadi Faktor Paling Penting?</h2>
      <p>Efek compound interest baru kelihatan signifikan setelah bertahun-tahun. Investor yang mulai lebih awal dengan modal kecil tapi konsisten bisa mengungguli investor yang mulai lebih lambat.</p>
      <h2>Cara Memanfaatkan Compound Interest</h2>
      <p>Mulai sedini mungkin, konsisten menambah modal, hindari menarik dana terlalu sering, dan pilih instrumen dengan potensi pertumbuhan jangka panjang.</p>
      <p><em>Disclaimer: Artikel ini bukan nasihat keuangan.</em></p>
    `
  }
];
