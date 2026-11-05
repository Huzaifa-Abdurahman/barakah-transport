// Artikel dalam Bahasa Indonesia untuk jamaah Indonesia.
// Aturan: tidak mencantumkan harga yang belum dikonfirmasi; kebijakan pembayaran
// dan pembatalan mengikuti yang disepakati saat pemesanan (lihat TODO-CLIENT.md).
// Native speaker review disarankan sebelum dipakai untuk iklan berbayar.

import type { BlogPost } from "./blog";

export const INDONESIAN_POSTS: BlogPost[] = [
  {
    slug: "taksi-vip-makkah",
    lang: "id",
    title: "Taksi VIP Makkah untuk Jamaah Umrah",
    description:
      "Taksi VIP Makkah untuk jamaah Indonesia: kendaraan premium, sopir berpengalaman, penjemputan di bandara, dan cara memesan dengan harga yang jelas.",
    category: "Transport Guide",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "taksi VIP Makkah",
    keywords: ["taksi VIP Makkah", "taksi VIP umrah", "sewa mobil VIP Makkah", "transfer VIP Jeddah Makkah", "taksi premium Makkah"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/taksi-vip-makkah.jpg",
    imageAlt: "Mobil SUV premium putih untuk layanan taksi VIP Barakah Transport Service di Makkah",
    imageCredit: "Foto armada: Barakah Transport Service",
    summary:
      "Taksi VIP adalah layanan private dengan kendaraan kelas atas, sopir yang mengenal rute, dan layanan yang bisa dipesan untuk perjalanan bandara, hotel, dan ziarah. Pesan lewat WhatsApp dan sepakati harga serta jenis kendaraan sebelum berangkat.",
    intro:
      "Bagi jamaah yang ingin perjalanan lebih nyaman, terutama lansia, keluarga besar, atau rombongan kecil, taksi VIP menjadi pilihan. Artikel ini menjelaskan apa yang biasanya termasuk dalam layanan VIP dan apa yang perlu Anda tanyakan sebelum memesan.",
    sections: [
      {
        heading: "Apa yang dimaksud taksi VIP?",
        paragraphs: [
          "Taksi VIP adalah layanan private dengan kendaraan yang lebih lapang dan lebih nyaman dibanding taksi biasa. Kendaraan dipilih agar cukup untuk penumpang dan koper, dan sopir mendampingi perjalanan dari awal sampai tujuan.",
        ],
      },
      {
        heading: "Yang biasanya didapat jamaah",
        paragraphs: [
          "Setiap perusahaan memiliki paket yang berbeda. Berikut hal yang sebaiknya Anda pastikan ada dalam layanan VIP.",
        ],
        bullets: [
          "Kendaraan premium dengan AC, bersih, dan terawat.",
          "Sopir yang mengenal rute Jeddah, Makkah, dan Madinah.",
          "Penjemputan di bandara dengan papan nama (meet and greet).",
          "Bantuan membawa koper dari bandara sampai ke mobil.",
          "Harga yang disepakati tertulis sebelum perjalanan.",
        ],
      },
      {
        heading: "Cocok untuk siapa?",
        paragraphs: [
          "Taksi VIP cocok untuk jamaah lansia yang perlu kursi yang nyaman, keluarga dengan anak kecil, jamaah yang tiba malam hari, dan rombongan yang ingin satu kendaraan khusus tanpa harus berbagi dengan penumpang lain.",
        ],
      },
      {
        heading: "Hal yang perlu ditanyakan sebelum memesan",
        paragraphs: [
          "Tanyakan hal-hal berikut agar tidak ada kejutan saat perjalanan.",
        ],
        bullets: [
          "Jenis kendaraan dan jumlah kursi serta ruang koper.",
          "Apakah harga sudah termasuk tol, parkir, dan waktu tunggu.",
          "Apakah ada biaya tambahan untuk perjalanan malam.",
          "Cara pembayaran dan kapan pembayaran dilakukan (lihat artikel cara pesan taksi).",
        ],
      },
    ],
    faqs: [
      {
        q: "Apa beda taksi VIP dengan taksi private biasa?",
        a: "Taksi VIP menggunakan kendaraan kelas atas dengan layanan yang lebih lengkap, seperti bantuan koper dan penjemputan dengan papan nama. Taksi private biasa juga khusus untuk satu rombongan, tetapi kendaraannya bisa lebih sederhana.",
      },
      {
        q: "Berapa harga taksi VIP dari Jeddah ke Makkah?",
        a: "Harga bergantung pada jenis kendaraan, jumlah penumpang, dan waktu perjalanan. Hubungi Barakah Transport Service lewat WhatsApp untuk mendapatkan harga tetap sebelum memesan.",
      },
      {
        q: "Apakah taksi VIP bisa untuk perjalanan Makkah ke Madinah?",
        a: "Ya, layanan VIP bisa dipesan untuk perjalanan antarkota. Sebutkan tanggal, jam berangkat, dan jumlah penumpang saat memesan.",
      },
    ],
  },
  {
    slug: "taksi-sharing-makkah",
    lang: "id",
    title: "Taksi Sharing Makkah: Hemat untuk Jamaah Mandiri",
    description:
      "Taksi sharing Makkah untuk jamaah mandiri yang ingin hemat: cara kerjanya, kelebihan dan risikonya, serta tips aman sebelum naik dan pastikan tarifnya.",
    category: "Travel Tips",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "taksi sharing Makkah",
    keywords: ["taksi sharing Makkah", "taksi share Makkah", "taksi murah Makkah", "naik taksi bareng Makkah", "taksi umrah hemat"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/taksi-sharing-makkah.jpg",
    imageAlt: "Van untuk layanan taksi sharing Barakah Transport Service di Makkah",
    imageCredit: "Foto armada: Barakah Transport Service",
    summary:
      "Taksi sharing berbagi kendaraan dengan penumpang lain dan biasanya lebih murah per orang. Pilihan ini cocok untuk jamaah yang bepergian sendiri dan membawa sedikit bagasi. Pastikan tujuan, tarif per orang, dan jumlah penumpang sebelum naik.",
    intro:
      "Banyak jamaah mandiri mencari taksi sharing karena lebih hemat. Namun, ada hal yang perlu dipahami agar perjalanan tetap nyaman dan aman.",
    sections: [
      {
        heading: "Bagaimana taksi sharing bekerja?",
        paragraphs: [
          "Dalam taksi sharing, satu kendaraan membawa beberapa penumpang yang menuju arah yang sama. Biaya dibagi antar penumpang, sehingga harga per orang lebih rendah dibanding menyewa kendaraan sendiri.",
        ],
      },
      {
        heading: "Kelebihan dan kekurangan",
        paragraphs: [
          "Sebelum memilih, timbang kelebihan dan kekurangannya sesuai kondisi Anda.",
        ],
        bullets: [
          "Kelebihan: biaya per orang lebih rendah, cocok untuk jamaah sendiri atau pasangan.",
          "Kekurangan: waktu berhenti tergantung penumpang lain, dan ruang bagasi terbatas.",
          "Kekurangan: sulit beribadah atau istirahat sesuai keinginan Anda saat perjalanan.",
        ],
      },
      {
        heading: "Siapa yang sebaiknya memilih sharing?",
        paragraphs: [
          "Taksi sharing paling cocok untuk jamaah dewasa yang bepergian sendiri, membawa bagasi kecil, dan tidak keberatan dengan jadwal yang fleksibel. Untuk keluarga, lansia, atau jamaah dengan banyak koper, taksi private atau VIP biasanya lebih nyaman.",
        ],
      },
      {
        heading: "Tips sebelum naik taksi sharing",
        paragraphs: [
          "Dalam panduan keselamatan untuk jamaah, petugas menyarankan agar jamaah tidak bepergian sendirian, terutama lansia, dan menanyakan perkiraan harga kepada sopir sebelum berangkat.",
        ],
        bullets: [
          "Pastikan tujuan akhir Anda sama dengan tujuan kendaraan.",
          "Sepakati tarif per orang sebelum naik, dan minta bukti pemesanan.",
          "Simpan nomor sopir dan nomor hotel di ponsel Anda.",
          "Kirim lokasi perjalanan kepada keluarga atau rekan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah taksi sharing aman untuk jamaah perempuan sendirian?",
        a: "Pilih layanan yang jelas identitas dan izin operasinya, kirim lokasi perjalanan ke keluarga, dan pastikan tujuan serta tarif disepakati sebelum naik.",
      },
      {
        q: "Berapa lama perjalanan taksi sharing dari Jeddah ke Makkah?",
        a: "Perjalanan dari bandara Jeddah ke Makkah sekitar 85 km dan biasanya memakan waktu 1 hingga 1,5 jam. Waktu bisa bertambah saat ramai atau karena penumpang lain turun di tengah jalan.",
      },
      {
        q: "Apakah barang bawaan bisa banyak di taksi sharing?",
        a: "Ruang bagasi terbatas. Jika membawa banyak koper, pilih taksi private atau VIP.",
      },
    ],
  },
  {
    slug: "taksi-private-makkah",
    lang: "id",
    title: "Taksi Private Makkah: Mobil Sendiri untuk Keluarga",
    description:
      "Taksi private Makkah untuk keluarga dan rombongan: satu mobil khusus, jadwal sesuai keinginan Anda, bagasi lebih lega, dan harga tetap sebelum berangkat.",
    category: "Transport Guide",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "taksi private Makkah",
    keywords: ["taksi private Makkah", "sewa mobil private Makkah", "taksi keluarga Makkah", "carter mobil Makkah umrah", "taksi rombongan Makkah"],
    relatedRoute: "makkah-ziyarat-tour",
    image: "/blog/taksi-private-makkah.jpg",
    imageAlt: "Mobil sedan putih di jalan dengan pegunungan, untuk layanan taksi private Barakah Transport Service",
    imageCredit: "Foto: K Munggaran, Unsplash (Unsplash License)",
    summary:
      "Taksi private adalah satu mobil khusus untuk rombongan Anda. Jadwal, rute, dan berhenti mengikuti kebutuhan Anda, sehingga cocok untuk keluarga dan rombongan. Sepakati harga tetap dan kapasitas kendaraan sebelum memesan.",
    intro:
      "Taksi private memberi Anda satu mobil untuk seluruh rombongan. Anda tidak perlu menunggu penumpang lain atau berbagi tujuan. Artikel ini membantu Anda memutuskan apakah taksi private cocok untuk perjalanan Anda.",
    sections: [
      {
        heading: "Apa keunggulan taksi private?",
        paragraphs: [
          "Dengan taksi private, Anda menentukan jadwal berangkat, rute, dan tempat berhenti. Sopir menunggu saat Anda istirahat atau beribadah, dan bagasi dibawa tanpa khawatir ruang penuh.",
        ],
        bullets: [
          "Satu kendaraan khusus untuk Anda dan rombongan.",
          "Jadwal dan tempat berhenti sesuai kebutuhan.",
          "Bagasi lebih lega dan koper tidak perlu dibagi.",
          "Lebih mudah untuk keluarga dengan anak dan lansia.",
        ],
      },
      {
        heading: "Kapan taksi private paling tepat?",
        paragraphs: [
          "Taksi private cocok untuk keluarga yang membawa anak, rombongan yang ingin berangkat bersama, perjalanan ziarah dengan banyak tempat, dan perjalanan yang sudah Anda rencanakan dengan jadwal ketat.",
        ],
      },
      {
        heading: "Cara memastikan kendaraan sesuai",
        paragraphs: [
          "Sebelum memesan, sampaikan jumlah penumpang dan bagasi Anda. Minta konfirmasi kapasitas kendaraan secara tertulis.",
        ],
        bullets: [
          "Hitung jumlah orang dewasa dan anak-anak.",
          "Hitung koper besar, koper kabin, dan barang bawaan lain.",
          "Jika rombongan lebih dari satu keluarga, tanyakan apakah perlu dua kendaraan.",
        ],
      },
      {
        heading: "Harga tetap, bukan tawar-menawar",
        paragraphs: [
          "Harga taksi private sebaiknya disepakati sebelum berangkat dan tertulis. Hindari perjalanan yang harganya baru dibicarakan di dalam mobil.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah taksi private bisa berhenti di tengah jalan?",
        a: "Ya, selama sudah disepakati sebelum berangkat. Tanyakan apakah waktu berhenti termasuk dalam harga.",
      },
      {
        q: "Berapa penumpang yang bisa naik taksi private?",
        a: "Tergantung jenis kendaraan. Sedan cocok untuk 4 penumpang, sedangkan SUV dan van bisa lebih banyak. Sampaikan jumlah penumpang saat memesan.",
      },
      {
        q: "Bagaimana cara memesan taksi private?",
        a: "Hubungi Barakah Transport Service lewat WhatsApp dengan tanggal, jam, lokasi jemput dan antar, serta jumlah penumpang dan bagasi.",
      },
    ],
  },
  {
    slug: "driver-pribadi-umrah-makkah",
    lang: "id",
    title: "Driver Pribadi Umrah di Makkah dan Madinah",
    description:
      "Driver pribadi untuk umrah di Makkah dan Madinah: kapan layak dipakai, apa yang dilakukan sopir, cara memilih, dan cara membuat kesepakatan yang jelas.",
    category: "Travel Tips",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "driver pribadi umrah",
    keywords: ["driver pribadi umrah", "driver pribadi Makkah", "sopir pribadi umrah", "sewa driver Madinah", "driver umrah Indonesia"],
    relatedRoute: "makkah-ziyarat-tour",
    image: "/blog/driver-pribadi-umrah.jpg",
    imageAlt: "Foto kota Makkah dari armada Barakah Transport Service, untuk layanan driver pribadi umrah",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Driver pribadi menemani Anda selama beberapa hari di Makkah atau Madinah, untuk antar-jemput, ziarah, dan urusan transportasi lain. Pilih sopir yang jelas identitasnya, sepakati paket harian atau jam, dan tulis tugas yang diharapkan.",
    intro:
      "Bagi jamaah yang tidak nyaman menggunakan transportasi umum atau ingin satu orang yang siap membantu setiap hari, driver pribadi bisa menjadi solusi. Berikut cara memahami dan memilih layanan ini.",
    sections: [
      {
        heading: "Apa tugas driver pribadi?",
        paragraphs: [
          "Driver pribadi bekerja untuk satu rombongan dalam jangka waktu yang disepakati. Tugasnya biasanya mencakup antar-jemput ke Masjidil Haram atau Masjid Nabawi, ziarah, dan perjalanan ke bandara.",
        ],
        bullets: [
          "Antar-jemput dari hotel ke Masjidil Haram atau Masjid Nabawi.",
          "Mendampingi ziarah sesuai rencana.",
          "Membantu membawa koper saat berangkat dan tiba.",
          "Mengatur jadwal sesuai waktu shalat dan istirahat.",
        ],
      },
      {
        heading: "Kapan memilih driver pribadi?",
        paragraphs: [
          "Driver pribadi cocok untuk jamaah yang tinggal beberapa hari dan sering bepergian, lansia yang perlu bantuan, atau keluarga yang ingin satu orang yang mengenal kota.",
        ],
      },
      {
        heading: "Cara memilih dan membuat kesepakatan",
        paragraphs: [
          "Kesepakatan yang jelas membuat perjalanan lebih tenang. Minta detail berikut sebelum memulai.",
        ],
        bullets: [
          "Nama sopir, nomor telepon, dan foto kendaraan.",
          "Paket harian atau per jam, dan apa yang termasuk di dalamnya.",
          "Daftar tujuan, dan apakah perlu menunggu saat Anda berziarah.",
          "Cara pembayaran dan bukti pembayaran.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah driver pribadi bisa berbahasa Indonesia?",
        a: "Ketersediaan bahasa bergantung pada sopir. Tanyakan saat memesan, dan gunakan WhatsApp untuk komunikasi jika perlu.",
      },
      {
        q: "Bisakah driver pribadi dipesan hanya untuk satu hari?",
        a: "Bisa. Sebutkan jumlah jam dan tujuan saat memesan.",
      },
      {
        q: "Apakah driver pribadi termasuk biaya tol dan parkir?",
        a: "Tanyakan sebelum berangkat. Biaya tambahan sebaiknya dituliskan dalam kesepakatan.",
      },
    ],
  },
  {
    slug: "cara-pesan-taksi-makkah",
    lang: "id",
    title: "Cara Pesan Taksi Makkah: Drop Dulu, Bayar Kemudian",
    description:
      "Cara pesan taksi Makkah dengan sistem drop dulu lalu bayar: langkah pemesanan, data yang perlu dikirim, dan apa yang terjadi setelah tiba di tujuan.",
    category: "Travel Tips",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "cara pesan taksi Makkah",
    keywords: ["cara pesan taksi Makkah", "pesan taksi Makkah WhatsApp", "taksi Makkah bayar setelah sampai", "booking taksi umrah", "taksi Makkah drop dulu bayar kemudian"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/cara-pesan-taksi-makkah.jpg",
    imageAlt: "Hotel di Makkah, tempat turun penumpang taksi Barakah Transport Service",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Pesan taksi Makkah lewat WhatsApp dengan mengirim tanggal, jam, lokasi jemput dan antar, dan jumlah penumpang. Barakah Transport Service mengantar Anda lebih dulu, lalu pembayaran dilakukan setelah tiba di tujuan, sesuai kesepakatan yang tertulis saat pemesanan.",
    intro:
      "Banyak jamaah ingin tahu kapan harus membayar sebelum naik taksi. Di Barakah Transport Service, sistemnya adalah drop dulu, bayar kemudian. Artikel ini menjelaskan langkah pemesanan dan apa yang perlu Anda siapkan.",
    sections: [
      {
        heading: "Langkah pemesanan",
        paragraphs: [
          "Pemesanan dilakukan lewat WhatsApp agar semua detail tercatat dan bisa Anda simpan.",
        ],
        bullets: [
          "Kirim pesan WhatsApp ke nomor resmi kami dengan rute dan waktu.",
          "Tulis tujuan jemput, tujuan antar, tanggal, dan jam.",
          "Sebutkan jumlah penumpang dewasa dan anak-anak, serta jumlah koper.",
          "Tunggu konfirmasi harga dan jenis kendaraan secara tertulis.",
          "Simpan bukti konfirmasi di ponsel Anda.",
        ],
      },
      {
        heading: "Drop dulu, bayar kemudian",
        paragraphs: [
          "Sistem kami: Anda diantar sampai tujuan dulu, baru melakukan pembayaran. Anda tidak perlu membayar di muka saat naik. Rincian cara pembayaran yang diterima akan disampaikan saat konfirmasi pemesanan.",
        ],
      },
      {
        heading: "Setelah sampai di tujuan",
        paragraphs: [
          "Periksa kembali barang bawaan sebelum sopir pergi. Pastikan jumlah koper sesuai dan tidak ada barang yang tertinggal.",
        ],
        bullets: [
          "Cek jumlah koper dan barang kecil.",
          "Lakukan pembayaran sesuai harga yang sudah disepakati.",
          "Minta bukti pembayaran atau kwitansi.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah benar pembayaran dilakukan setelah sampai?",
        a: "Ya, sistem Barakah Transport Service adalah drop dulu, bayar kemudian, sesuai kesepakatan saat pemesanan. Rincian lengkap disampaikan lewat WhatsApp sebelum perjalanan.",
      },
      {
        q: "Apa yang harus saya kirim saat memesan?",
        a: "Tanggal, jam, lokasi jemput dan antar, jumlah penumpang, jumlah koper, dan nomor telepon yang bisa dihubungi.",
      },
      {
        q: "Bisakah pesan untuk penjemputan di bandara?",
        a: "Bisa. Kirimkan nomor penerbangan agar sopir bisa memantau keterlambatan.",
      },
    ],
  },
  {
    slug: "syarat-ketentuan-taksi-makkah",
    lang: "id",
    title: "Syarat dan Ketentuan Taksi Makkah: Ringkasan untuk Jamaah",
    description:
      "Ringkasan syarat dan ketentuan layanan taksi Makkah dari Barakah Transport Service: pemesanan, harga, pembayaran setelah sampai, bagasi, dan perubahan jadwal.",
    category: "Travel Tips",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "syarat dan ketentuan taksi Makkah",
    keywords: ["syarat dan ketentuan taksi Makkah", "ketentuan taksi umrah", "kebijakan pembatalan taksi Makkah", "syarat pesan taksi Makkah", "ketentuan layanan transportasi umrah"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/syarat-ketentuan-taksi-makkah.jpg",
    imageAlt: "Kawasan lama Jeddah dengan bangunan balkon, sebagai latar informasi ketentuan layanan taksi",
    imageCredit: "Foto: Yasser Mutwakil, Unsplash (Unsplash License)",
    summary:
      "Ringkasan ini menjelaskan hal pokok dalam layanan taksi kami: pemesanan dikonfirmasi lewat WhatsApp, harga disepakati di awal, pembayaran dilakukan setelah sampai tujuan, dan perubahan jadwal harus dikabarkan. Ketentuan lengkap ada di halaman Syarat dan Ketentuan.",
    intro:
      "Sebelum memesan, Anda berhak tahu aturan dasar layanan. Artikel ini merangkum poin penting. Ini bukan pengganti halaman ketentuan resmi, yang tetap menjadi acuan.",
    sections: [
      {
        heading: "Pemesanan dan konfirmasi",
        paragraphs: [
          "Pemesanan dianggap sah setelah Anda menerima konfirmasi tertulis dari kami lewat WhatsApp, yang memuat tanggal, jam, rute, jenis kendaraan, dan harga.",
        ],
      },
      {
        heading: "Harga dan pembayaran",
        paragraphs: [
          "Harga disepakati sebelum perjalanan. Sistem pembayaran kami adalah drop dulu, bayar kemudian. Biaya tambahan yang berlaku, seperti tol atau waktu tunggu, harus disebutkan sejak awal.",
        ],
      },
      {
        heading: "Bagasi dan jumlah penumpang",
        paragraphs: [
          "Sampaikan jumlah penumpang dan koper saat memesan. Jumlah yang melebihi kapasitas kendaraan yang dipesan dapat menyebabkan perubahan kendaraan atau tambahan biaya, dan akan dikonfirmasi sebelum berangkat.",
        ],
      },
      {
        heading: "Perubahan jadwal dan pembatalan",
        paragraphs: [
          "Beri tahu kami sesegera mungkin jika jadwal berubah. Kebijakan pembatalan dan perubahan jadwal mengikuti ketentuan yang disampaikan saat konfirmasi pemesanan, sehingga Anda tahu dengan jelas sebelum membayar.",
        ],
      },
      {
        heading: "Keselamatan dan tanggung jawab",
        paragraphs: [
          "Mohon ikuti petunjuk keselamatan sopir, pakai sabuk pengaman, dan laporkan barang yang tertinggal secepatnya. Tanggung jawab atas barang bawaan mengikuti ketentuan lengkap yang berlaku.",
        ],
      },
    ],
    faqs: [
      {
        q: "Di mana saya bisa membaca ketentuan lengkap?",
        a: "Ketentuan lengkap ada di halaman Syarat dan Ketentuan di situs kami. Jika ada perbedaan, ketentuan lengkap yang berlaku.",
      },
      {
        q: "Apakah ada biaya pembatalan?",
        a: "Biaya pembatalan, jika ada, disampaikan saat konfirmasi pemesanan. Tanyakan kepada kami sebelum membayar.",
      },
    ],
  },
  {
    slug: "taksi-bandara-jeddah-makkah",
    lang: "id",
    title: "Taksi Bandara Jeddah ke Makkah untuk Jamaah Indonesia",
    description:
      "Taksi bandara Jeddah ke Makkah untuk jamaah Indonesia: jarak sekitar 85 km, waktu tempuh, pilihan transportasi, dan tips agar kedatangan Anda lancar.",
    category: "Transport Guide",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 6,
    primaryKeyword: "taksi bandara Jeddah ke Makkah",
    keywords: ["taksi bandara Jeddah ke Makkah", "bandara Jeddah ke Makkah", "jarak Jeddah ke Makkah", "transportasi Jeddah Makkah jamaah", "taksi Jeddah Makkah umrah"],
    relatedRoute: "jeddah-airport-to-makkah-taxi",
    image: "/blog/taksi-bandara-jeddah-makkah.jpg",
    imageAlt: "Terminal bandara King Abdulaziz Jeddah, titik kedatangan jamaah menuju Makkah",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Dari Bandara King Abdulaziz (JED) ke Makkah berjarak sekitar 85 km dan biasanya 1 hingga 1,5 jam, lebih lama saat ramai. Pilihan utamanya taksi private atau VIP untuk keluarga dan bagasi banyak, taksi sharing untuk jamaah mandiri, dan bus untuk yang ingin paling hemat.",
    intro:
      "Kebanyakan jamaah Indonesia tiba di Jeddah sebelum melanjutkan ke Makkah. Artikel ini membantu Anda merencanakan perjalanan bandara dengan tenang, terutama jika tiba malam hari atau membawa banyak bagasi.",
    sections: [
      {
        heading: "Jarak dan waktu tempuh",
        paragraphs: [
          "Jarak dari Bandara King Abdulaziz (JED) ke Makkah sekitar 85 km melalui jalan utama. Dalam kondisi lalu lintas normal, perjalanan biasanya 1 hingga 1,5 jam. Saat musim umrah ramai, Ramadan, atau musim haji, waktunya bisa lebih lama.",
        ],
      },
      {
        heading: "Pilihan transportasi",
        paragraphs: [
          "Setiap pilihan cocok untuk kebutuhan yang berbeda.",
        ],
        bullets: [
          "Taksi private atau VIP: paling nyaman untuk keluarga dan bagasi banyak, dengan penjemputan langsung.",
          "Taksi sharing: lebih hemat untuk jamaah mandiri dengan bagasi kecil.",
          "Bus: pilihan paling hemat dengan jadwal dan titik berhenti tetap.",
        ],
      },
      {
        heading: "Tips agar kedatangan lancar",
        paragraphs: [
          "Penerbangan malam dan antrean bandara sering membuat jamaah lelah. Persiapan kecil membantu.",
        ],
        bullets: [
          "Kirim nomor penerbangan saat memesan, agar sopir bisa memantau keterlambatan.",
          "Minta penjemputan dengan papan nama di area kedatangan.",
          "Sepakati harga dan jenis kendaraan sebelum berangkat.",
          "Simpan alamat hotel di Makkah dalam bahasa Arab dan Inggris.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa jarak Jeddah ke Makkah?",
        a: "Sekitar 85 km melalui jalan utama, tergantung jalur yang diambil.",
      },
      {
        q: "Berapa lama perjalanan dari bandara Jeddah ke Makkah?",
        a: "Biasanya 1 hingga 1,5 jam dalam kondisi normal. Saat ramai bisa lebih lama.",
      },
      {
        q: "Apakah ada kereta dari bandara Jeddah ke Makkah?",
        a: "Kereta Haramain memiliki stasiun di area bandara. Batas bagasinya ketat, dan Anda perlu taksi lagi dari stasiun ke hotel. Periksa jadwal dan aturan terbaru sebelum berangkat.",
      },
    ],
  },
  {
    slug: "taksi-bandara-madinah-hotel",
    lang: "id",
    title: "Taksi Bandara Madinah ke Hotel untuk Jamaah Indonesia",
    description:
      "Taksi dari Bandara Madinah (MED) ke hotel dekat Masjid Nabawi untuk jamaah Indonesia: penjemputan, bagasi, pemantauan penerbangan, dan hal yang perlu dikonfirmasi.",
    category: "Transport Guide",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "taksi bandara Madinah ke hotel",
    keywords: ["taksi bandara Madinah ke hotel", "bandara Madinah ke hotel", "taksi Madinah bandara", "transfer bandara Madinah", "taksi Madinah Masjid Nabawi"],
    relatedRoute: "madinah-airport-transfer",
    image: "/blog/taksi-bandara-madinah-hotel.jpg",
    imageAlt: "Bandara Madinah, titik penjemputan taksi ke hotel dekat Masjid Nabawi",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Bandara Madinah (MED) berada di luar kota, sehingga perjalanan ke hotel dekat Masjid Nabawi memerlukan kendaraan. Pesan penjemputan lebih dulu dengan nomor penerbangan, minta papan nama di area kedatangan, dan konfirmasi harga serta bagasi sebelum berangkat.",
    intro:
      "Setelah mendarat di Madinah, Anda biasanya lelah dan membawa banyak koper. Penjemputan yang sudah dipesan membuat perjalanan ke hotel lebih tenang.",
    sections: [
      {
        heading: "Sebelum mendarat",
        paragraphs: [
          "Kirim nomor penerbangan dan jam perkiraan mendarat saat memesan. Sopir yang memantau penerbangan bisa menyesuaikan jam jemput jika pesawat terlambat atau datang lebih awal.",
        ],
      },
      {
        heading: "Di bandara",
        paragraphs: [
          "Minta penjemputan dengan papan nama di area kedatangan. Simpan nomor sopir di ponsel Anda, dan beri tahu sopir jika Anda membawa banyak koper.",
        ],
      },
      {
        heading: "Hal yang perlu dikonfirmasi",
        paragraphs: [
          "Pastikan semua detail berikut tertulis sebelum berangkat.",
        ],
        bullets: [
          "Harga tetap dan apakah sudah termasuk waktu tunggu di bandara.",
          "Nama hotel dan titik turun di depan hotel.",
          "Jumlah koper dan jenis kendaraan yang sesuai.",
          "Pemesanan antar-jemput kembali ke bandara, jika Anda membutuhkannya.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah bisa sekalian dipesan jemput dan antar ke bandara?",
        a: "Bisa. Pesan keduanya bersamaan agar harga dan kendaraannya konsisten.",
      },
      {
        q: "Bagaimana jika pesawat terlambat?",
        a: "Kirim nomor penerbangan. Sopir akan memantau jadwal, dan jam jemput dapat disesuaikan.",
      },
    ],
  },
  {
    slug: "ziarah-makkah-private",
    lang: "id",
    title: "Ziarah Makkah dengan Mobil Private: Gua Hira dan Arafah",
    description:
      "Panduan ziarah Makkah dengan mobil private untuk jamaah Indonesia: rute Gua Hira, Gua Tsur, Arafah, dan Mina, serta cara merencanakan waktu dan istirahat.",
    category: "Ziyarat",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 6,
    primaryKeyword: "ziarah Makkah private",
    keywords: ["ziarah Makkah private", "ziarah Makkah", "tempat ziarah Makkah", "ziarah Gua Hira", "ziarah Arafah Mina mobil"],
    relatedRoute: "makkah-ziyarat-tour",
    image: "/blog/ziarah-makkah-private.jpg",
    imageAlt: "Pegunungan di sekitar Makkah, lokasi ziarah Gua Hira dan Gua Tsur",
    imageCredit: "Foto: Barakah Transport Service",
    summary:
      "Ziarah Makkah dengan mobil private memungkinkan Anda mengunjungi Gua Hira, Gua Tsur, Arafah, dan Mina sesuai kecepatan rombongan. Mulai pagi hari, sepakati jam berangkat, jam tunggu di tiap lokasi, dan total harga sebelum berangkat.",
    intro:
      "Banyak jamaah ingin berziarah ke tempat-tempat bersejarah di sekitar Makkah. Dengan mobil private, Anda bisa berhenti sesuai kebutuhan dan tidak perlu berpindah kendaraan.",
    sections: [
      {
        heading: "Tempat ziarah yang biasa dikunjungi",
        paragraphs: [
          "Berikut tempat yang paling sering dikunjungi jamaah. Informasi jam buka dan aturan akses dapat berubah, jadi periksa kembali sebelum berangkat.",
        ],
        bullets: [
          "Jannat al-Mu'alla, pemakaman tua di dekat Masjidil Haram.",
          "Gua Hira (Jabal an-Nur), tempat wahyu pertama turun.",
          "Gua Tsur (Jabal Tsur), tempat Nabi dan Abu Bakar berlindung saat hijrah.",
          "Arafah (Jabal ar-Rahmah), tempat khutbah terakhir Nabi.",
          "Mina dan Muzdalifah, tempat rangkaian ibadah haji.",
        ],
      },
      {
        heading: "Rencana satu hari yang nyaman",
        paragraphs: [
          "Mulai pagi hari saat udara lebih sejuk. Gua Hira memerlukan pendakian yang curam, jadi beri waktu lebih dan istirahat yang cukup di sela-sela perjalanan.",
        ],
      },
      {
        heading: "Persiapan",
        paragraphs: [
          "Persiapan kecil membuat ziarah lebih nyaman dan aman.",
        ],
        bullets: [
          "Bawa air minum dan camilan ringan untuk setiap orang.",
          "Pakai sepatu yang nyaman dan punya pegangan, terutama untuk pendakian.",
          "Minta sopir menunggu saat Anda mendaki Gua Hira.",
          "Sepakati total jam dan harga sebelum berangkat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa lama ziarah Makkah dengan mobil private?",
        a: "Tergantung jumlah tempat yang dikunjungi. Rute setengah hari cocok untuk Gua Hira dan Gua Tsur. Rute seharian bisa mencakup Arafah dan Mina.",
      },
      {
        q: "Apakah pendakian Gua Hira sulit?",
        a: "Jalurnya curam dan banyak anak tangga. Pertimbangkan kondisi fisik Anda sebelum berangkat.",
      },
      {
        q: "Apakah sopir bisa menunggu saat saya berziarah?",
        a: "Bisa, jika disepakati sebelum berangkat. Tanyakan apakah waktu tunggu termasuk dalam harga.",
      },
    ],
  },
  {
    slug: "tips-aman-taksi-arab-saudi",
    lang: "id",
    title: "Tips Aman Naik Taksi di Arab Saudi untuk Jamaah Indonesia",
    description:
      "Tips aman naik taksi di Arab Saudi untuk jamaah Indonesia: pilih layanan yang jelas, sepakati harga sebelum naik, jangan bepergian sendirian, dan kirim lokasi ke keluarga.",
    category: "Travel Tips",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-05",
    readMinutes: 5,
    primaryKeyword: "tips aman naik taksi Arab Saudi",
    keywords: ["tips aman naik taksi Arab Saudi", "taksi aman Makkah", "tips taksi jamaah haji", "naik taksi Makkah aman", "keamanan jamaah umrah taksi"],
    relatedRoute: "makkah-to-madinah-taxi",
    image: "/blog/tips-aman-taksi-arab-saudi.jpg",
    imageAlt: "Bangunan besar dengan menara jam, ilustrasi suasana kota suci bagi jamaah",
    imageCredit: "Foto: Juned Khatri, Unsplash (Unsplash License)",
    summary:
      "Untuk naik taksi dengan aman di Arab Saudi: pilih layanan yang jelas identitas dan izinnya, sepakati harga sebelum naik, jangan bepergian sendirian bila memungkinkan, dan kirim lokasi perjalanan ke keluarga. Hindari tawaran di jalan yang tidak jelas.",
    intro:
      "Naik taksi di kota yang ramai seperti Makkah dan Madinah memerlukan kewaspadaan. Panduan ini merangkum saran yang sering disampaikan petugas dan pengalaman jamaah.",
    sections: [
      {
        heading: "Pilih layanan yang jelas",
        paragraphs: [
          "Pesan taksi dari layanan yang bisa dihubungi dan jelas identitasnya. Konfirmasi harga dan kendaraan secara tertulis, bukan hanya lewat percakapan di jalan.",
        ],
      },
      {
        heading: "Sepakati harga sebelum naik",
        paragraphs: [
          "Petugas di Arab Saudi menyarankan jamaah menanyakan perkiraan harga kepada sopir sebelum berangkat. Tarif yang dinegosiasi di jalan sering berubah saat ramai, terutama saat musim umrah atau haji.",
        ],
      },
      {
        heading: "Jangan bepergian sendirian bila bisa dihindari",
        paragraphs: [
          "Petugas juga menyarankan jamaah tidak naik taksi sendirian, terutama lansia. Jika harus sendiri, kirim lokasi perjalanan dan nomor kendaraan kepada keluarga atau rekan.",
        ],
      },
      {
        heading: "Checklist sebelum berangkat",
        paragraphs: [
          "Lakukan langkah sederhana ini setiap kali naik taksi.",
        ],
        bullets: [
          "Catat nomor kendaraan dan nama sopir.",
          "Pastikan tujuan sudah benar sebelum berangkat.",
          "Simpan alamat hotel dalam bahasa Arab dan Inggris.",
          "Bawa uang tunai secukupnya dan pastikan kembalian sudah jelas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bagaimana cara memastikan taksi yang saya naiki resmi?",
        a: "Pesan melalui layanan yang bisa Anda hubungi dan verifikasi, dan periksa nama sopir dan nomor kendaraan yang dikonfirmasi.",
      },
      {
        q: "Apa yang harus dilakukan jika harga berubah di tengah jalan?",
        a: "Ingatkan kesepakatan awal. Jika tidak selesai, hubungi layanan Anda atau keluarga, dan minta bantuan petugas jika diperlukan.",
      },
    ],
  },
];
