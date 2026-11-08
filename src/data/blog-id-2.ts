// Artikel Bahasa Indonesia batch 2 (8 November 2026).
// Aturan: tanpa harga yang belum dikonfirmasi; kebijakan pembayaran sesuai pernyataan
// pemilik (drop dulu, bayar kemudian). Native speaker review disarankan (TODO-CLIENT.md).

import type { BlogPost } from "./blog";

const DATE = "2026-11-08";

export const INDONESIAN_POSTS_2: BlogPost[] = [
  {
    slug: "taksi-umrah-keluarga",
    lang: "id",
    title: "Taksi Umrah Keluarga: Panduan Pilih Mobil",
    description:
      "Panduan taksi umrah untuk keluarga Indonesia: sesuaikan mobil dengan jumlah anggota dan koper, atur jadwal anak dan lansia, dan pesan dengan harga tetap.",
    category: "Travel Tips",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "taksi umrah keluarga",
    keywords: ["taksi umrah keluarga", "sewa mobil umrah keluarga", "taksi umrah bawa anak", "mobil besar umrah keluarga", "transportasi umrah keluarga Makkah"],
    relatedRoute: "makkah-to-madinah-taxi",
    image: "/blog/taksi-umrah-keluarga.jpg",
    imageAlt: "Mobil SUV Hyundai Staria untuk keluarga, layanan taksi umrah Barakah Transport Service",
    imageCredit: "Foto armada: Barakah Transport Service",
    summary:
      "Untuk keluarga, pilih kendaraan berdasarkan jumlah anggota dan koper, bukan hanya jumlah kursi. Van atau SUV lebih lega untuk keluarga dengan anak dan lansia. Sepakati harga tetap dan jadwal istirahat sebelum berangkat.",
    intro:
      "Berangkat umrah bersama keluarga berarti mengurus banyak hal sekaligus: anak yang mudah lelah, orang tua yang butuh kursi nyaman, dan koper yang tidak sedikit. Artikel ini membantu Anda memilih mobil dan mengatur perjalanan agar tetap nyaman.",
    sections: [
      {
        heading: "Hitung dulu sebelum memilih mobil",
        paragraphs: [
          "Kesalahan yang paling sering terjadi adalah memilih mobil hanya dari jumlah kursi. Padahal koper besar memakan tempat lebih banyak daripada yang terlihat.",
        ],
        bullets: [
          "Hitung jumlah anggota keluarga, termasuk anak kecil.",
          "Hitung koper besar, koper kabin, dan tas perlengkapan ibadah.",
          "Jika jumlah koper banyak, pilih van daripada sedan.",
        ],
      },
      {
        heading: "Atur jadwal untuk anak dan lansia",
        paragraphs: [
          "Anak dan lansia perlu waktu istirahat lebih sering. Dalam perjalanan jauh seperti Makkah ke Madinah, rencanakan berhenti sekitar setiap dua jam, dan sebutkan kebutuhan ini kepada sopir saat memesan.",
        ],
      },
      {
        heading: "Pastikan kendaraan nyaman",
        paragraphs: [
          "Tanyakan apakah kursi cukup lapang untuk orang dewasa dan apakah tersedia kursi untuk anak. Untuk lansia, tanyakan juga tinggi pijakan masuk kendaraan.",
        ],
      },
      {
        heading: "Kesepakatan yang perlu dicatat",
        paragraphs: [
          "Harga, jumlah kendaraan, dan jadwal jemput sebaiknya tertulis di WhatsApp. Simpan pesan konfirmasi tersebut, dan minta nomor sopir.",
        ],
      },
    ],
    faqs: [
      {
        q: "Mobil apa yang cocok untuk keluarga dengan dua anak?",
        a: "Umumnya van atau SUV lebih nyaman, karena ruang kaki dan bagasinya lebih lega. Sampaikan jumlah anggota dan koper saat memesan agar kendaraan yang dipilih sesuai.",
      },
      {
        q: "Apakah anak kecil dihitung sebagai penumpang?",
        a: "Ya, sampaikan jumlah anak saat memesan agar kursi dan kendaraan yang disiapkan sesuai kebutuhan.",
      },
      {
        q: "Bisakah satu keluarga memakai dua mobil?",
        a: "Bisa, jika rombongan besar. Tanyakan kepada kami apakah dua kendaraan lebih nyaman dan berapa total biayanya sebelum berangkat.",
      },
    ],
  },
  {
    slug: "taksi-makkah-ke-madinah-jamaah",
    lang: "id",
    title: "Taksi Makkah ke Madinah: Panduan Jamaah",
    description:
      "Panduan taksi dari Makkah ke Madinah untuk jamaah Indonesia: jarak sekitar 450 km, waktu tempuh 4 hingga 5 jam, titik berhenti, dan hal yang perlu disepakati.",
    category: "Transport Guide",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 6,
    primaryKeyword: "taksi Makkah ke Madinah",
    keywords: ["taksi Makkah ke Madinah", "Makkah ke Madinah naik apa", "jarak Makkah ke Madinah", "travel Makkah Madinah", "sewa mobil Makkah Madinah"],
    relatedRoute: "makkah-to-madinah-taxi",
    image: "/blog/taksi-makkah-ke-madinah.jpg",
    imageAlt: "Jalan panjang menuju Madinah, rute taksi Makkah ke Madinah Barakah Transport Service",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Jarak Makkah ke Madinah sekitar 450 km dan biasanya 4 hingga 5 jam dengan lalu lintas normal. Taksi private memberi Anda kendali atas jadwal dan titik berhenti. Sepakati harga tetap dan tempat berhenti, termasuk Miqat jika Anda ingin berihram di sana.",
    intro:
      "Banyak jamaah menempuh perjalanan Makkah ke Madinah dengan darat. Jalannya lurus dan jelas, tetapi perjalanan panjang butuh persiapan agar tidak melelahkan.",
    sections: [
      {
        heading: "Waktu tempuh dan faktor yang memengaruhinya",
        paragraphs: [
          "Dengan lalu lintas normal, perjalanan sekitar 4 hingga 5 jam. Waktu bisa bertambah saat musim ramai, pada akhir pekan panjang, atau saat banyak rombongan bepergian bersamaan.",
        ],
      },
      {
        heading: "Titik berhenti di sepanjang jalan",
        paragraphs: [
          "Di jalan utama tersedia SPBU, rest area, dan toilet. Miqat untuk jamaah dari arah Madinah berada di jalur ini, dekat Madinah. Jika Anda ingin berihram di sana, sampaikan kepada sopir sebelum memesan.",
        ],
        bullets: [
          "Rencanakan istirahat sekitar setiap dua jam.",
          "Bawa air minum, camilan, dan obat pribadi.",
          "Tanyakan waktu shalat dan tempat berhenti yang disarankan sopir.",
        ],
      },
      {
        heading: "Hal yang disepakati sebelum berangkat",
        paragraphs: [
          "Perjalanan yang lancar dimulai dari kesepakatan yang jelas.",
        ],
        bullets: [
          "Harga tetap, dan apakah sudah termasuk tol dan waktu berhenti.",
          "Alamat jemput di Makkah dan alamat turun di Madinah.",
          "Jumlah kursi dan ruang bagasi sesuai rombongan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa lama perjalanan Makkah ke Madinah dengan taksi?",
        a: "Sekitar 4 hingga 5 jam dalam kondisi normal, tergantung lalu lintas dan waktu berhenti.",
      },
      {
        q: "Apakah bisa berhenti di Miqat?",
        a: "Bisa, jika disepakati sebelum berangkat. Sampaikan kepada kami saat memesan.",
      },
      {
        q: "Apakah lebih baik naik kereta Haramain?",
        a: "Kereta lebih cepat, tetapi perlu transfer ke stasiun di kedua kota dan batasan bagasinya ketat. Taksi private lebih fleksibel untuk keluarga dan bagasi banyak.",
      },
    ],
  },
  {
    slug: "taksi-madinah-ke-makkah-miqat",
    lang: "id",
    title: "Taksi Madinah ke Makkah dan Miqat: Panduan",
    description:
      "Taksi Madinah ke Makkah dengan berhenti di Miqat Dzulhulaifah: cara mengatur perhentian, persiapan ihram, dan hal yang perlu ditanyakan sebelum memesan.",
    category: "Travel Tips",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "taksi Madinah ke Makkah miqat",
    keywords: ["taksi Madinah ke Makkah", "miqat Dzulhulaifah", "miqat dari Madinah", "taksi Madinah Makkah miqat", "ihram Bir Ali"],
    relatedRoute: "madinah-to-makkah-taxi",
    image: "/blog/taksi-madinah-ke-makkah-miqat.jpg",
    imageAlt: "Pemandangan Madinah, titik awal perjalanan taksi ke Makkah dengan berhenti di Miqat",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Jamaah dari Madinah berihram di Miqat Dzulhulaifah (Bir Ali). Jika Anda naik taksi ke Makkah, sampaikan rencana berhenti di Miqat sebelum memesan agar sopir bisa mengatur waktunya.",
    intro:
      "Miqat adalah batas tempat jamaah wajib memulai ihram. Bagi jamaah dari Madinah, Miqatnya adalah Dzulhulaifah. Artikel ini membantu Anda merencanakan perhentian itu saat naik taksi.",
    sections: [
      {
        heading: "Apa itu Miqat Dzulhulaifah?",
        paragraphs: [
          "Dzulhulaifah, yang juga dikenal sebagai Bir Ali, adalah Miqat bagi jamaah yang datang dari arah Madinah. Di sana terdapat Masjid Dzulhulaifah yang juga disebut Masjid Asy-Syajarah.",
        ],
      },
      {
        heading: "Cara merencanakan perhentian dengan taksi",
        paragraphs: [
          "Perhentian di Miqat biasanya singkat, cukup untuk mandi, berwudhu, memakai pakaian ihram, dan shalat sunnah. Atur waktunya agar tidak terburu-buru.",
        ],
        bullets: [
          "Sampaikan niat berhenti di Miqat saat memesan.",
          "Siapkan pakaian ihram sebelum sampai di Miqat.",
          "Minta sopir menunggu sekitar waktu yang disepakati.",
        ],
      },
      {
        heading: "Persiapan ihram sebelum berangkat",
        paragraphs: [
          "Sebagian jamaah memakai pakaian ihram sejak dari hotel, sebagian lain menunggu sampai di Miqat. Ikuti panduan kelompok atau pembimbing Anda.",
        ],
        bullets: [
          "Bawa pakaian ihram di tas kabin.",
          "Pastikan niat dan doa ihram sudah dipelajari.",
          "Jangan lupa membawa air dan tisu basah.",
        ],
      },
    ],
    faqs: [
      {
        q: "Di mana Miqat untuk jamaah dari Madinah?",
        a: "Di Dzulhulaifah, yang juga dikenal sebagai Bir Ali. Miqat ini berada di jalur antara Madinah dan Makkah.",
      },
      {
        q: "Apakah taksi bisa menunggu saat saya berihram?",
        a: "Bisa, jika disepakati sebelum berangkat. Tanyakan juga berapa lama waktu tunggu yang termasuk dalam harga.",
      },
    ],
  },
  {
    slug: "ziarah-madinah-private",
    lang: "id",
    title: "Ziarah Madinah Private: Rute Quba dan Uhud",
    description:
      "Ziarah Madinah dengan mobil private untuk jamaah Indonesia: rute Masjid Quba, Masjid Qiblatain, Gunung Uhud, dan Masjid Tujuh, dengan urutan yang hemat waktu.",
    category: "Ziyarat",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 6,
    primaryKeyword: "ziarah Madinah private",
    keywords: ["ziarah Madinah private", "ziarah Madinah", "tempat ziarah Madinah", "masjid Quba ziarah", "ziarah Uhud Madinah mobil"],
    relatedRoute: "madinah-ziyarat-tour",
    image: "/blog/ziarah-madinah-private.jpg",
    imageAlt: "Kawasan ziarah Madinah, rute mobil private Barakah Transport Service ke Quba dan Uhud",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Ziarah Madinah dengan mobil private paling hemat waktu jika rutenya disusun melingkar: mulai dari sekitar Masjid Nabawi, lalu Quba dan Qiblatain, kemudian Uhud dan Masjid Tujuh. Sepakati jam tunggu di setiap tempat sebelum berangkat.",
    intro:
      "Tempat ziarah di Madinah tersebar. Tanpa rute yang tepat, Anda bisa menghabiskan banyak waktu di jalan. Artikel ini menyusun urutan yang masuk akal untuk satu hari penuh.",
    sections: [
      {
        heading: "Pagi: sekitar Masjid Nabawi",
        paragraphs: [
          "Mulai pagi hari sebelum kota ramai. Jannat al-Baqi berada dekat Masjid Nabawi, dan cocok dikunjungi sebagai pembuka. Periksa jadwal kunjungan Raudhah sebelum berangkat, karena aturannya ditentukan pengelola Masjid Nabawi.",
        ],
      },
      {
        heading: "Siang: Quba dan Qiblatain",
        paragraphs: [
          "Masjid Quba berjarak sekitar 3,5 hingga 4 km di selatan Masjid Nabawi. Masjid Qiblatain sekitar 4 hingga 5 km di barat laut. Kedua tempat bisa dikunjungi dalam satu perjalanan.",
        ],
        bullets: [
          "Quba: banyak ulama menyebutkan hadits tentang keutamaan shalat dua rakaat di sana.",
          "Qiblatain: tempat arah kiblat diubah dari Baitul Maqdis ke Ka'bah.",
        ],
      },
      {
        heading: "Sore: Uhud dan Masjid Tujuh",
        paragraphs: [
          "Gunung Uhud dan Pemakaman Syuhada berjarak sekitar 5 hingga 6 km di utara Masjid Nabawi. Tutup hari dengan Masjid Tujuh di dekat lokasi Perang Khandaq.",
        ],
        bullets: [
          "Uhud: lokasi Perang Uhud dan makam para syuhada.",
          "Masjid Tujuh: kumpulan masjid kecil di sekitar lokasi Perang Khandaq.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa lama ziarah Madinah dengan mobil private?",
        a: "Satu hari penuh untuk rute utama. Tanyakan kepada kami jika Anda ingin memilih sebagian tempat saja.",
      },
      {
        q: "Apakah Masjid Quba bisa dikunjungi sendiri?",
        a: "Bisa. Mobil private bisa mengantar ke Quba saja, atau digabung dengan rute yang lebih panjang.",
      },
    ],
  },
  {
    slug: "taksi-hotel-ke-masjidil-haram",
    lang: "id",
    title: "Taksi Hotel ke Masjidil Haram: Tips Titik Turun",
    description:
      "Taksi dari hotel ke Masjidil Haram di Makkah: pilih pintu terdekat, hindari jalan yang ditutup saat ramai, dan sepakati titik turun serta jam jemput pulang.",
    category: "Travel Tips",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "taksi hotel ke Masjidil Haram",
    keywords: ["taksi hotel ke Masjidil Haram", "taksi ke Masjidil Haram", "titik turun Masjidil Haram", "pintu Masjidil Haram terdekat", "taksi hotel Makkah"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/taksi-hotel-ke-masjidil-haram.jpg",
    imageAlt: "Kawasan Masjidil Haram di Makkah, tujuan taksi dari hotel jamaah",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Jalan di sekitar Masjidil Haram sering dibatasi saat ramai. Sepakati titik turun dan pintu terdekat dengan hotel Anda sebelum naik taksi. Jika sering bolak-balik, pesan sopir untuk beberapa perjalanan sekaligus.",
    intro:
      "Banyak jamaah naik taksi dari hotel ke Masjidil Haram beberapa kali sehari. Jarak yang terlihat dekat di peta bisa terasa jauh jika titik turunnya tidak tepat.",
    sections: [
      {
        heading: "Mengapa titik turun penting",
        paragraphs: [
          "Masjidil Haram memiliki banyak pintu, dan jalan di sekitarnya sering ditutup atau dibatasi saat shalat Jumat dan pada bulan Ramadan. Sopir mungkin tidak bisa masuk sampai pintu yang paling dekat dengan hotel Anda.",
        ],
      },
      {
        heading: "Cara memilih pintu",
        paragraphs: [
          "Tanyakan kepada sopir pintu mana yang paling dekat dan apakah pintu itu sedang dibuka. Simpan nama pintu di ponsel Anda agar mudah ditunjukkan kepada sopir atau petugas.",
        ],
        bullets: [
          "Sebutkan pintu yang Anda inginkan saat memesan.",
          "Untuk lansia, pilih titik turun yang tidak terlalu jauh berjalan kaki.",
          "Sepakati titik jemput saat pulang sebelum turun dari mobil.",
        ],
      },
      {
        heading: "Jika sering bolak-balik",
        paragraphs: [
          "Untuk beberapa perjalanan dalam sehari, sopir yang menunggu lebih praktis daripada memesan satu per satu. Sepakati jumlah perjalanan dan harga hariannya.",
        ],
        bullets: [
          "Simpan alamat hotel dalam bahasa Arab dan Inggris.",
          "Beri waktu lebih saat waktu shalat, ketika lalu lintas lebih padat.",
          "Simpan nomor sopir dan nomor hotel di ponsel.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah taksi bisa masuk sampai ke pintu Masjidil Haram?",
        a: "Tidak selalu. Pada waktu tertentu jalan dibatasi. Sepakati titik turun terdekat sebelum berangkat.",
      },
      {
        q: "Apakah bisa pesan sopir untuk beberapa perjalanan dalam sehari?",
        a: "Bisa. Sebutkan jumlah perjalanan dan jam yang diinginkan saat memesan.",
      },
    ],
  },
  {
    slug: "taksi-bandara-jeddah-ke-madinah",
    lang: "id",
    title: "Taksi Bandara Jeddah ke Madinah: Panduan",
    description:
      "Taksi dari Bandara Jeddah ke Madinah untuk jamaah Indonesia: jarak sekitar 420 km, waktu tempuh, pilihan kendaraan, dan hal penting yang perlu dikonfirmasi.",
    category: "Transport Guide",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 6,
    primaryKeyword: "taksi bandara Jeddah ke Madinah",
    keywords: ["taksi bandara Jeddah ke Madinah", "bandara Jeddah ke Madinah", "jarak Jeddah ke Madinah", "transfer Jeddah Madinah", "taksi Jeddah Madinah"],
    relatedRoute: "jeddah-airport-to-madinah-taxi",
    image: "/blog/taksi-bandara-jeddah-ke-madinah.jpg",
    imageAlt: "Terminal Bandara Jeddah, titik kedatangan jamaah menuju Madinah",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Dari Bandara King Abdulaziz Jeddah ke Madinah sekitar 420 km dan biasanya 4 hingga 5 jam. Pesan transfer private dengan nomor penerbangan dan harga yang disepakati, agar Anda tidak perlu mencari transportasi setelah mendarat.",
    intro:
      "Sebagian jamaah langsung menuju Madinah setelah mendarat di Jeddah. Perjalanan ini cukup panjang, jadi pilihan kendaraan dan persiapan sejak awal sangat membantu.",
    sections: [
      {
        heading: "Jarak dan waktu tempuh",
        paragraphs: [
          "Jarak dari bandara Jeddah ke Madinah sekitar 420 km. Dengan lalu lintas normal, perjalanan sekitar 4 hingga 5 jam, ditambah waktu istirahat.",
        ],
      },
      {
        heading: "Pilihan transportasi",
        paragraphs: [
          "Pilihan yang paling nyaman untuk keluarga dan bagasi banyak adalah taksi private atau van. Bus lebih murah tetapi jadwalnya terbatas, dan Anda perlu naik taksi lagi dari terminal ke hotel.",
        ],
      },
      {
        heading: "Hal yang harus dikonfirmasi",
        paragraphs: [
          "Konfirmasi detail ini sebelum penjemputan.",
        ],
        bullets: [
          "Nomor penerbangan dan jam perkiraan mendarat.",
          "Harga tetap, dan apakah sudah termasuk tol dan waktu tunggu.",
          "Alamat hotel di Madinah dan titik turunnya.",
          "Kapasitas kendaraan untuk jumlah penumpang dan koper.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa jarak Jeddah ke Madinah?",
        a: "Sekitar 420 km melalui jalan utama, tergantung rute yang diambil.",
      },
      {
        q: "Apakah penjemputan bisa dilakukan malam hari?",
        a: "Bisa. Kirimkan nomor penerbangan agar sopir bisa menyesuaikan jam jemput.",
      },
    ],
  },
  {
    slug: "taksi-bandara-jeddah-pulang",
    lang: "id",
    title: "Taksi ke Bandara Jeddah saat Pulang",
    description:
      "Panduan taksi ke Bandara Jeddah saat pulang dari Makkah: perkiraan waktu tempuh, kapan harus berangkat, dan hal yang perlu dikonfirmasi malam sebelumnya.",
    category: "Transport Guide",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "taksi ke bandara Jeddah pulang",
    keywords: ["taksi ke bandara Jeddah", "Makkah ke bandara Jeddah", "taksi pulang umrah", "jadwal taksi bandara Jeddah", "transfer bandara Jeddah keberangkatan"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/taksi-bandara-jeddah-pulang.jpg",
    imageAlt: "Bandara Jeddah, tujuan taksi saat jamaah pulang dari Makkah",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Perjalanan dari Makkah ke Bandara Jeddah sekitar 80 km dan biasanya 1 hingga 1,5 jam. Tanyakan kepada maskapai jam check-in yang disarankan, lalu mundurkan jam jemput dengan margin untuk macet dan istirahat.",
    intro:
      "Saat pulang, banyak jamaah khawatir terlambat. Perjalanan ke bandara sebenarnya tidak lama, tetapi waktu yang kurang tepat bisa membuat Anda tertinggal pesawat.",
    sections: [
      {
        heading: "Berapa lama perjalanannya?",
        paragraphs: [
          "Jarak dari Makkah ke Bandara Jeddah sekitar 80 km. Dengan lalu lintas normal, perjalanan sekitar 1 hingga 1,5 jam. Saat ramai atau di hari Jumat, bisa lebih lama.",
        ],
      },
      {
        heading: "Kapan harus berangkat?",
        paragraphs: [
          "Cek jam check-in yang disarankan maskapai untuk penerbangan internasional, lalu hitung mundur. Tambahkan margin untuk macet dan istirahat.",
        ],
        bullets: [
          "Tanyakan jam check-in yang disarankan maskapai sebelum memesan taksi.",
          "Beri margin minimal 30 hingga 60 menit untuk lalu lintas.",
          "Sesuaikan dengan jam check-out hotel.",
        ],
      },
      {
        heading: "Konfirmasi malam sebelumnya",
        paragraphs: [
          "Kirim ulang detail keberangkatan ke sopir malam sebelumnya agar tidak ada salah jadwal.",
        ],
        bullets: [
          "Jam jemput dan alamat hotel.",
          "Nomor penerbangan dan jam berangkat.",
          "Nomor telepon Anda dan sopir.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa jam sebelum penerbangan sebaiknya saya berangkat dari Makkah?",
        a: "Ikuti jam check-in yang disarankan maskapai, lalu tambahkan waktu perjalanan dan margin. Tanyakan kepada maskapai dan kepada kami saat memesan.",
      },
      {
        q: "Apakah barang bawaan harus ditimbang di hotel?",
        a: "Sebaiknya ya, agar Anda tahu jumlah koper sebelum hari keberangkatan, dan bisa menyampaikannya kepada kami.",
      },
    ],
  },
  {
    slug: "kapasitas-koper-taksi-umrah",
    lang: "id",
    title: "Kapasitas Koper Taksi Umrah: Cara Menghitung",
    description:
      "Cara menghitung kapasitas koper taksi umrah: hitung koper besar dan kabin, pilih kendaraan yang tepat, dan hindari bagasi yang tidak muat saat berangkat.",
    category: "Travel Tips",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "kapasitas koper taksi umrah",
    keywords: ["kapasitas koper taksi umrah", "bagasi taksi umrah", "koper taksi Makkah", "muat koper mobil umrah", "taksi umrah banyak koper"],
    relatedRoute: "makkah-to-madinah-taxi",
    image: "/blog/kapasitas-koper-taksi-umrah.jpg",
    imageAlt: "SUV Hyundai H1 untuk rombongan dengan banyak koper, layanan taksi umrah Barakah Transport Service",
    imageCredit: "Foto armada: Barakah Transport Service",
    summary:
      "Hitung koper besar, koper kabin, dan tas kecil secara terpisah, lalu pilih kendaraan yang ruang bagasinya cukup, bukan hanya jumlah kursinya. Sebutkan jumlah koper saat memesan agar kendaraan yang dipilih sesuai.",
    intro:
      "Koper yang tidak muat adalah masalah yang sering muncul di hari keberangkatan. Dengan sedikit perhitungan di awal, Anda bisa memilih kendaraan yang tepat.",
    sections: [
      {
        heading: "Pisahkan jenis barang bawaan",
        paragraphs: [
          "Koper besar memakan ruang bagasi paling banyak. Koper kabin dan tas kecil bisa diletakkan di kursi atau di sela-sela bagasi.",
        ],
        bullets: [
          "Koper besar: hitung satu per satu.",
          "Koper kabin dan tas: hitung terpisah.",
          "Barang ibadah dan perlengkapan anak: hitung juga.",
        ],
      },
      {
        heading: "Pilih kendaraan berdasarkan bagasi",
        paragraphs: [
          "Sedan cocok untuk satu atau dua orang dengan koper sedikit. Untuk keluarga dengan banyak koper, van atau SUV yang lebih besar lebih aman.",
        ],
      },
      {
        heading: "Jika koper melebihi kapasitas",
        paragraphs: [
          "Jika bagasi ternyata melebihi kapasitas kendaraan, Anda perlu mengganti kendaraan atau memesan dua mobil. Lebih baik ketahui hal ini sebelum hari keberangkatan.",
        ],
        bullets: [
          "Timbang koper di hotel sebelum berangkat.",
          "Sampaikan jumlah dan ukuran koper saat memesan.",
          "Konfirmasi tambahan biaya jika ada.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa koper yang muat di sedan?",
        a: "Tergantung ukuran koper. Sampaikan jumlah dan ukuran koper saat memesan agar kami bisa mencocokkan kendaraannya.",
      },
      {
        q: "Bagaimana jika koper lebih banyak dari perkiraan?",
        a: "Hubungi kami sebelum hari keberangkatan agar kendaraan bisa diganti atau ditambah.",
      },
    ],
  },
  {
    slug: "taksi-umrah-lansia",
    lang: "id",
    title: "Taksi Umrah untuk Lansia: Hal yang Perlu Dicek",
    description:
      "Taksi umrah untuk lansia: cek tinggi pijakan kendaraan, ruang alat bantu jalan, jadwal istirahat, dan bantuan sopir saat membawa dan menurunkan koper.",
    category: "Travel Tips",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "taksi umrah lansia",
    keywords: ["taksi umrah lansia", "umrah orang tua", "taksi umrah orang tua", "transportasi lansia Makkah", "umrah lansia kendaraan nyaman"],
    relatedRoute: "makkah-ziyarat-tour",
    image: "/blog/taksi-umrah-lansia.jpg",
    imageAlt: "Kendaraan Hyundai Staria yang lapang untuk jamaah lansia, layanan taksi umrah Barakah Transport Service",
    imageCredit: "Foto armada: Barakah Transport Service",
    summary:
      "Untuk lansia, yang paling penting adalah kenyamanan masuk dan keluar kendaraan, ruang untuk alat bantu jalan, dan jadwal istirahat yang cukup. Sampaikan kebutuhan ini saat memesan, dan minta sopir membantu koper.",
    intro:
      "Mengajak orang tua umrah membutuhkan perhatian lebih. Perjalanan darat yang nyaman bisa membuat ibadah terasa lebih ringan bagi mereka.",
    sections: [
      {
        heading: "Masuk dan keluar kendaraan",
        paragraphs: [
          "Tinggi pijakan kendaraan berbeda-beda. Untuk lansia, mobil yang pintunya lebar dan kursinya tidak terlalu rendah biasanya lebih mudah.",
        ],
        bullets: [
          "Tanyakan tinggi pijakan masuk kendaraan.",
          "Pilih kursi depan atau tengah yang lebih lapang.",
          "Minta sopir membantu saat turun di titik tujuan.",
        ],
      },
      {
        heading: "Ruang dan alat bantu jalan",
        paragraphs: [
          "Kursi roda atau tongkat perlu ruang di bagasi. Sebutkan alat bantu yang dibawa saat memesan, agar kami bisa mengecek kendaraan dan ruang yang tersedia.",
        ],
      },
      {
        heading: "Jadwal istirahat",
        paragraphs: [
          "Lansia mudah lelah di perjalanan panjang. Rencanakan berhenti sekitar setiap dua jam, dan beri waktu lebih untuk setiap perpindahan.",
        ],
        bullets: [
          "Bawa air minum dan obat yang biasa diminum.",
          "Atur jadwal shalat dan istirahat.",
          "Simpan nomor keluarga atau pembimbing di ponsel.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah bisa memesan kendaraan dengan kursi roda?",
        a: "Sebutkan kebutuhan kursi roda saat memesan. Kami akan mengecek ketersediaan kendaraan dan ruang bagasinya sebelum mengonfirmasi.",
      },
      {
        q: "Apakah sopir membantu membawa koper lansia?",
        a: "Sampaikan kebutuhan ini saat memesan. Bantuan sopir dalam membawa koper biasanya bisa diatur.",
      },
    ],
  },
  {
    slug: "bus-shalawat-atau-taksi-makkah",
    lang: "id",
    title: "Bus Shalawat atau Taksi di Makkah?",
    description:
      "Bus shalawat atau taksi di Makkah: perbedaan layanan, siapa yang bisa memakai bus shalawat, kelebihan taksi private, dan cara memilih yang sesuai rombongan.",
    category: "Transport Guide",
    publishedAt: DATE,
    updatedAt: DATE,
    readMinutes: 5,
    primaryKeyword: "bus shalawat atau taksi Makkah",
    keywords: ["bus shalawat Makkah", "bus shalawat jamaah haji", "bus shalawat atau taksi", "transportasi Masjidil Haram jamaah", "bus shalawat Makkah gratis"],
    relatedRoute: "makkah-ziyarat-tour",
    image: "/blog/bus-shalawat-atau-taksi-makkah.jpg",
    imageAlt: "Foto kota Makkah dari armada Barakah Transport Service, perbandingan transportasi bagi jamaah",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Bus shalawat adalah layanan gratis yang disediakan pemerintah Indonesia untuk jamaah haji dari hotel ke Masjidil Haram. Jamaah umrah mandiri perlu memastikan dengan penyelenggaranya. Taksi private memberi jadwal dan tujuan yang fleksibel.",
    intro:
      "Banyak jamaah bertanya apakah mereka perlu naik taksi atau cukup memakai bus shalawat. Jawabannya bergantung pada jenis perjalanan, rombongan, dan jadwal Anda.",
    sections: [
      {
        heading: "Apa itu bus shalawat?",
        paragraphs: [
          "Bus shalawat adalah layanan antar-jemput gratis dari hotel ke Masjidil Haram yang disediakan untuk jamaah haji Indonesia. Pemerintah menganjurkan jamaah memanfaatkannya agar tidak kesulitan mencari taksi.",
        ],
      },
      {
        heading: "Untuk jamaah umrah mandiri",
        paragraphs: [
          "Jika Anda berumrah mandiri, tanyakan kepada penyelenggara perjalanan atau hotel apakah layanan serupa tersedia dan bagaimana caranya. Jangan berasumsi bahwa layanan untuk jamaah haji berlaku untuk Anda.",
        ],
      },
      {
        heading: "Kapan taksi private lebih cocok?",
        paragraphs: [
          "Taksi private lebih fleksibel jika Anda ingin jadwal sendiri, membawa keluarga atau lansia, membawa banyak koper, atau berziarah ke beberapa tempat.",
        ],
        bullets: [
          "Jadwal sesuai keinginan Anda, bukan jadwal bus.",
          "Tujuan yang bisa diubah di tengah perjalanan.",
          "Bagasi lebih lega untuk keluarga dan koper besar.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah bus shalawat gratis untuk semua jamaah?",
        a: "Layanan tersebut disediakan untuk jamaah haji Indonesia. Untuk jamaah umrah, tanyakan kepada penyelenggara perjalanan Anda.",
      },
      {
        q: "Apakah taksi lebih mahal dari bus?",
        a: "Umumnya taksi private lebih mahal per perjalanan, tetapi lebih fleksibel. Bandingkan dengan jumlah orang dan kebutuhan Anda.",
      },
    ],
  },
];
