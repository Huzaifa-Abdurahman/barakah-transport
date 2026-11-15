// Halaman landing Bahasa Indonesia untuk jamaah Indonesia.
// Catatan: jamaah Indonesia sering menulis "umroh", bukan "umrah", jadi istilah itu
// dipakai di judul dan kata kunci. Volume pencarian Indonesia belum terukur (API
// kata kunci tidak tersedia); lihat KEYWORD-RESEARCH.md bagian 8.
// Tanpa harga tertulis. Tarif dikonfirmasi per perjalanan lewat WhatsApp.

import type { LandingPage } from "./landing";

export const ID_LANDING_PAGES: LandingPage[] = [
  {
    slug: "id/taksi-makkah",
    lang: "id",
    group: "taxi-makkah",
    title: "Taksi Makkah: Private, VIP, Sharing",
    description:
      "Pesan taksi Makkah untuk hotel, bandara dan ziarah. Pilihan private, VIP dan sharing, layanan 24 jam. Kirim rencana lewat WhatsApp, tarif dikonfirmasi dulu.",
    h1: "Taksi Makkah untuk Jamaah: Private, VIP dan Sharing",
    primaryKeyword: "taksi makkah",
    keywords: ["taksi makkah", "taksi makkah umroh", "taksi umroh makkah", "taksi private makkah", "taksi sharing makkah", "taxi makkah"],
    summary:
      "Barakah Transport Service menyediakan taksi private, VIP dan sharing di Makkah, 24 jam sehari. Kirim titik jemput, tujuan dan jam lewat WhatsApp. Kami konfirmasi kendaraan dan tarif secara tertulis sebelum Anda berangkat.",
    intro:
      "Anda mungkin butuh antar-jemput dari bandara ke hotel, perjalanan ke Masjidil Haram saat waktu shalat, atau seharian ziarah. Kami sesuaikan kendaraan dan layanan dengan rombongan Anda, lalu memberi tarif sebelum Anda memutuskan.",
    areaServed: ["Makkah", "Jeddah"],
    serviceType: "Layanan taksi",
    sections: [
      {
        heading: "Jenis taksi di Makkah",
        bullets: [
          "Private: satu kendaraan untuk rombongan Anda, dengan jadwal dan titik henti yang Anda pilih.",
          "VIP: mobil private premium untuk kenyamanan lebih. Lihat halaman taksi VIP untuk detailnya.",
          "Sharing: satu kursi pada rute dan tanggal yang tersedia. Biasanya paling hemat per orang.",
        ],
      },
      {
        heading: "Perjalanan yang sering kami atur",
        bullets: [
          "Hotel ke Masjidil Haram dan kembali, termasuk saat waktu shalat sedang ramai.",
          "Bandara Jeddah ke hotel di Makkah, dengan penjemputan di area kedatangan.",
          "Ziarah setengah hari atau seharian di Makkah, dengan waktu tunggu yang disepakati.",
          "Makkah ke Madinah sebagai perjalanan private antarkota.",
        ],
      },
      {
        heading: "Cara pemesanan",
        paragraphs: ["Pesan cukup lewat satu pesan WhatsApp. Sertakan detail ini agar kami bisa memberi penawaran yang tepat:"],
        bullets: [
          "Titik jemput, tujuan, tanggal dan jam.",
          "Jumlah dewasa dan anak, serta jumlah dan ukuran koper.",
          "Nomor penerbangan jika perjalanan dari atau ke bandara.",
          "Kebutuhan khusus, seperti kursi roda atau alat bantu jalan.",
        ],
      },
      {
        heading: "Sopir dan bahasa",
        paragraphs: [
          "Jika Anda butuh sopir yang berbicara bahasa tertentu, sampaikan saat memesan. Kami konfirmasi ketersediaannya sebelum perjalanan.",
        ],
      },
      {
        heading: "Bukan taksi pemerintah",
        paragraphs: [
          "Di Makkah ada layanan Makkah Taxi dari pemerintah, yang dikelola Royal Commission for Makkah City and Holy Sites dan beroperasi terpisah. Barakah Transport Service adalah layanan pemesanan private: Anda pesan lebih dulu, dan tarifnya disepakati sebelum berangkat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah ada tarif tetap untuk taksi di Makkah?",
        a: "Tarif bergantung pada kendaraan, rute, waktu dan titik henti, jadi kami memberi penawaran untuk setiap perjalanan. Halaman harga taksi Makkah menjelaskan apa saja yang mengubah tarif.",
      },
      {
        q: "Bisakah pesan taksi Makkah untuk beberapa jam?",
        a: "Bisa. Sebutkan jumlah jam dan tempat yang ingin dikunjungi, lalu kami beri penawaran sebelum berangkat.",
      },
      {
        q: "Apakah bisa jemput dari hotel dekat Masjidil Haram?",
        a: "Bisa. Kirim nama dan alamat hotel. Jalan di sekitar Masjidil Haram sering ditutup saat ramai, jadi titik turun disepakati sebelumnya.",
      },
      {
        q: "Apakah ini sama dengan Makkah Taxi dari pemerintah?",
        a: "Tidak. Barakah adalah layanan pemesanan private. Makkah Taxi adalah layanan transportasi umum yang dikelola pemerintah dan beroperasi terpisah.",
      },
      {
        q: "Apakah ada layanan dari bandara Jeddah ke Makkah?",
        a: "Ada. Lihat halaman rute bandara Jeddah ke Makkah untuk detail rute dan cara pemesanan.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-ziyarat-tour", "makkah-to-madinah-taxi"],
    relatedGuides: ["taksi-hotel-ke-masjidil-haram", "taksi-sharing-makkah", "cara-pesan-taksi-makkah"],
    whatsappText: "Assalamu alaikum, saya ingin pesan taksi di Makkah (dari website, halaman taksi Makkah)",
  },
  {
    slug: "id/taksi-madinah",
    lang: "id",
    group: "taxi-madinah",
    title: "Taksi Madinah: Private untuk Jamaah",
    description:
      "Taksi private di Madinah untuk hotel dekat Masjid Nabawi, ziarah dan transfer bandara. Layanan 24 jam. Kirim rencana lewat WhatsApp dan dapatkan tarifnya.",
    h1: "Taksi Madinah: Private dekat Masjid Nabawi",
    primaryKeyword: "taksi madinah",
    keywords: ["taksi madinah", "taksi madinah umroh", "taksi private madinah", "taksi masjid nabawi", "transfer bandara madinah"],
    summary:
      "Kami menjalankan taksi private di Madinah sepanjang hari: perjalanan antara hotel dan Masjid Nabawi, ziarah Madinah, dan transfer bandara. Kirim rencana Anda lewat WhatsApp, kami konfirmasi kendaraan dan tarif sebelum berangkat.",
    intro:
      "Kebanyakan jamaah di Madinah ingin dua hal dari taksi: sampai di Masjid Nabawi tanpa jalan kaki jauh di panas, dan bisa mengunjungi tempat bersejarah tanpa kehilangan satu hari di jalan.",
    areaServed: ["Madinah"],
    serviceType: "Layanan taksi",
    sections: [
      {
        heading: "Perjalanan yang kami atur di Madinah",
        bullets: [
          "Hotel ke Masjid Nabawi dan kembali, sesuai waktu yang Anda perlukan.",
          "Ziarah Madinah: Masjid Quba, Masjid Qiblatain, Gunung Uhud dan Masjid Tujuh dalam satu rute.",
          "Transfer bandara Madinah ke hotel, dan antar kembali ke bandara. Lihat halaman transfer bandara Madinah.",
          "Madinah ke Makkah sebagai perjalanan private antarkota.",
        ],
      },
      {
        heading: "Memilih kendaraan",
        paragraphs: [
          "Sedan cocok untuk empat orang dengan bawaan ringan. Untuk keluarga, rombongan besar atau koper banyak, pilih SUV atau van. Sampaikan jumlah orang dan koper, dan kami akan sarankan kendaraannya.",
        ],
      },
      {
        heading: "Yang perlu dikonfirmasi sebelum berangkat",
        bullets: [
          "Tarif, dan apakah sudah termasuk waktu tunggu di bandara atau di tempat ziarah.",
          "Titik turun di depan hotel, dan seberapa dekat mobil bisa masuk ke area masjid.",
          "Jam kembali, jika Anda ingin sopir menunggu atau kembali menjemput.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa lama perjalanan dari bandara Madinah ke kota?",
        a: "Bandara berada di luar kota, jadi perjalanannya lebih lama daripada berjalan kaki. Minta perkiraan waktu saat memesan, karena kepadatan lalu lintas memengaruhi durasi.",
      },
      {
        q: "Bisakah taksi dipesan untuk ziarah seharian di Madinah?",
        a: "Bisa. Sebutkan tempat yang ingin dikunjungi, kami atur satu rute dan beri tarif sebelum perjalanan.",
      },
      {
        q: "Apakah ada sopir yang berbicara bahasa tertentu?",
        a: "Sampaikan saat memesan. Kami konfirmasi ketersediaan sopir sebelum perjalanan.",
      },
    ],
    relatedRoutes: ["madinah-airport-transfer", "madinah-ziyarat-tour", "madinah-to-makkah-taxi"],
    relatedGuides: ["taksi-bandara-madinah-hotel", "ziarah-madinah-private", "taksi-madinah-ke-makkah-miqat"],
    whatsappText: "Assalamu alaikum, saya ingin pesan taksi private di Madinah (dari website, halaman taksi Madinah)",
  },
  {
    slug: "id/transportasi-umroh",
    lang: "id",
    group: "umrah-transport",
    title: "Transportasi Umroh: Mobil Private",
    description:
      "Transportasi umroh di Makkah dan Madinah dengan mobil private untuk keluarga, lansia dan rombongan: jemput bandara, antar hotel, ziarah. Pesan lewat WhatsApp.",
    h1: "Transportasi Umroh: Mobil Private untuk Keluarga dan Rombongan",
    primaryKeyword: "transportasi umroh",
    keywords: ["transportasi umroh", "transportasi umrah", "sewa mobil umroh", "transportasi umroh keluarga", "transportasi umroh makkah madinah", "sewa mobil umrah keluarga"],
    summary:
      "Kami menyediakan transportasi umroh dengan mobil private di Makkah, Madinah dan Jeddah: dari bandara ke hotel, antarkota, dan ziarah. Kirim data perjalanan Anda lewat WhatsApp, lalu kami konfirmasi mobil dan tarif secara tertulis sebelum berangkat.",
    intro:
      "Berumroh bersama keluarga biasanya berarti banyak koper, anggota keluarga yang perlu istirahat, dan jadwal yang terikat waktu shalat. Transportasi umroh yang baik memikirkan semua itu sejak perjalanan pertama.",
    areaServed: ["Makkah", "Madinah", "Jeddah"],
    serviceType: "Transportasi umroh",
    sections: [
      {
        heading: "Layanan yang kami sediakan",
        bullets: [
          "Penjemputan dari bandara Jeddah atau Madinah, dengan pemantauan nomor penerbangan.",
          "Antar-jemput dari hotel ke Masjidil Haram atau Masjid Nabawi, lalu kembali.",
          "Perjalanan antara Makkah dan Madinah dengan mobil private, dengan berhenti sesuai kebutuhan.",
          "Ziarah ke tempat-tempat bersejarah di Makkah dan Madinah.",
        ],
      },
      {
        heading: "Untuk siapa layanan ini",
        bullets: [
          "Keluarga dengan anak kecil.",
          "Lansia yang butuh kursi nyaman dan waktu istirahat.",
          "Rombongan atau kelompok yang ingin satu atau beberapa mobil untuk seluruh perjalanan.",
        ],
      },
      {
        heading: "Informasi yang kami perlukan",
        bullets: [
          "Jumlah orang dewasa dan anak.",
          "Jumlah dan ukuran koper, serta apakah membawa kursi roda atau alat bantu jalan.",
          "Tanggal dan jam kedatangan atau keberangkatan, beserta nomor penerbangan.",
          "Apakah perlu berhenti untuk shalat atau istirahat di jalan.",
        ],
      },
      {
        heading: "Kesepakatan sebelum berangkat",
        paragraphs: [
          "Harga, mobil, dan apa saja yang termasuk (waktu tunggu, berhenti di jalan) kami tulis dalam konfirmasi. Pembayaran dilakukan setelah tiba di tujuan, sesuai yang tertulis di konfirmasi.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah bisa satu mobil untuk keluarga besar?",
        a: "Tergantung jumlah orang dan koper. Kirim jumlahnya, kami sarankan mobil yang sesuai, dan kabari jika perlu dua mobil.",
      },
      {
        q: "Bagaimana dengan lansia yang memakai kursi roda?",
        a: "Sampaikan jenis dan ukuran kursi roda saat memesan, agar kami pastikan mobil dan ruangnya sesuai sebelum perjalanan.",
      },
      {
        q: "Apakah bisa perjalanan Makkah ke Madinah dalam satu paket?",
        a: "Bisa, sebagai perjalanan private. Lihat juga halaman taksi Makkah ke Madinah, atau kirim permintaan Anda langsung lewat WhatsApp.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-to-madinah-taxi", "madinah-airport-transfer"],
    relatedGuides: ["taksi-umrah-keluarga", "taksi-umrah-lansia", "kapasitas-koper-taksi-umrah"],
    whatsappText: "Assalamu alaikum, saya ingin tanya transportasi umroh dengan mobil private (dari website, halaman transportasi umroh)",
  },
  {
    slug: "id/taksi-vip-makkah",
    lang: "id",
    group: "vip-taxi-makkah",
    title: "Taksi VIP Makkah: Mobil Premium",
    description:
      "Taksi VIP di Makkah dengan mobil premium dan sopir khusus untuk keluarga, tamu dan perjalanan bisnis. Atur jadwal sendiri. Minta penawaran via WhatsApp, 24 jam.",
    h1: "Taksi VIP Makkah: Mobil Premium dengan Sopir Pribadi",
    primaryKeyword: "taksi VIP Makkah",
    keywords: ["taksi VIP Makkah", "taksi VIP umroh", "sewa mobil VIP Makkah", "taksi premium Makkah", "transfer VIP Jeddah Makkah", "taksi VIP umrah"],
    summary:
      "Taksi VIP di Makkah adalah mobil private premium dengan satu sopir untuk rombongan Anda, sesuai jadwal yang Anda tentukan. Kami memberi penawaran lewat WhatsApp dan mengonfirmasi mobil serta tarif secara tertulis sebelum berangkat.",
    intro:
      "Ada perjalanan yang butuh lebih dari sekadar nyaman: orang tua yang butuh ruang lega, tamu bisnis, atau keluarga yang tiba larut malam. Layanan VIP kami memberi mobil premium dan sopir untuk seluruh perjalanan, dari penjemputan sampai tujuan.",
    areaServed: ["Makkah", "Jeddah"],
    serviceType: "Layanan taksi VIP",
    sections: [
      {
        heading: "Apa arti VIP bagi Anda",
        bullets: [
          "Mobil premium keluaran terbaru, khusus untuk rombongan Anda.",
          "Satu sopir yang mengikuti jadwal dan titik henti Anda.",
          "Penjemputan di area kedatangan bandara Jeddah.",
          "Waktu fleksibel untuk shalat, istirahat dan ziarah.",
        ],
      },
      {
        heading: "Mobil untuk perjalanan VIP",
        paragraphs: [
          "Jumlah kursi di bawah sesuai halaman armada kami. Kapasitas bagasi tergantung koper yang Anda bawa.",
        ],
        bullets: [
          "GMC Yukon XL: 7 kursi, muat 7 koper.",
          "Mercedes V-Class: 7 kursi, muat 7 koper.",
          "Hyundai Staria: 8 sampai 9 kursi, muat 7 koper.",
        ],
      },
      {
        heading: "Siapa yang memesan VIP",
        bullets: [
          "Keluarga dengan lansia yang butuh ruang dan perjalanan yang tenang.",
          "Pelaku bisnis dan tamu yang butuh jadwal yang tepat.",
          "Rombongan yang ingin satu mobil seharian, bukan beberapa perjalanan.",
        ],
      },
      {
        heading: "Yang perlu dikonfirmasi saat memesan",
        bullets: [
          "Model mobil, jumlah kursi dan jumlah koper yang muat.",
          "Waktu tunggu di bandara atau saat ziarah, dan apakah sudah termasuk tarif.",
          "Titik henti di jalan, dan perubahan rute setelah berangkat.",
          "Bahasa sopir, jika penting bagi Anda.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apa bedanya taksi VIP dan taksi private?",
        a: "Taksi private adalah kendaraan khusus untuk rombongan. VIP menambahkan mobil premium dan sopir yang mengikuti jadwal Anda selama perjalanan.",
      },
      {
        q: "Bisakah pesan mobil VIP seharian?",
        a: "Bisa. Sebutkan jam dan tempat yang ingin dikunjungi, kami beri penawaran sebelum hari keberangkatan.",
      },
      {
        q: "Apakah tarif VIP tetap?",
        a: "Kami memberi penawaran untuk setiap perjalanan VIP lewat WhatsApp dan mengonfirmasinya secara tertulis. Halaman harga taksi Makkah menjelaskan apa yang termasuk.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-ziyarat-tour", "makkah-to-madinah-taxi"],
    relatedGuides: ["taksi-vip-makkah", "taksi-private-makkah", "driver-pribadi-umrah-makkah"],
    whatsappText: "Assalamu alaikum, saya ingin pesan taksi VIP di Makkah (dari website, halaman taksi VIP Makkah)",
  },
  {
    slug: "id/taksi-murah-makkah",
    lang: "id",
    group: "cheap-taxi-makkah",
    title: "Taksi Murah Makkah: Sharing & Private",
    description:
      "Taksi murah di Makkah: pilihan sharing saat ada kursi kosong, atau mobil private yang dibagi rombongan. Bandingkan biaya per orang, pesan via WhatsApp, 24 jam.",
    h1: "Taksi Murah di Makkah: Pilihan Sharing dan Private",
    primaryKeyword: "taksi murah Makkah",
    keywords: ["taksi murah Makkah", "taksi murah umroh", "taksi sharing Makkah", "taksi hemat Makkah", "taksi Makkah murah", "taksi umroh murah"],
    summary:
      "Untuk biaya lebih hemat di Makkah, pilih sharing pada rute yang masih ada kursi kosong, atau mobil private jika rombongan Anda cukup banyak. Kami beri penawaran keduanya lewat WhatsApp, supaya Anda bisa membandingkan biaya per orang sebelum memesan.",
    intro:
      "Budget itu penting saat berhaji dan berumroh. Pilihan dengan total tarif terendah belum tentu paling murah per orang. Halaman ini membantu Anda membandingkan sharing dan private, supaya keputusan didasarkan pada angka yang jelas.",
    areaServed: ["Makkah", "Jeddah"],
    serviceType: "Layanan taksi sharing dan private",
    sections: [
      {
        heading: "Cara membandingkan sharing dan private",
        paragraphs: [
          "Bagi total tarif dengan jumlah orang yang membayar kursi. Mobil private dengan tarif yang sama, dibagi empat orang, lebih murah per orang dibanding satu orang saja. Kursi sharing lebih murah untuk satu orang, tetapi hanya jika kursi kosong tersedia di rute dan tanggal Anda.",
        ],
      },
      {
        heading: "Kapan sharing cocok",
        bullets: [
          "Anda bepergian sendiri, atau berdua dengan bawaan ringan.",
          "Rutenya pendek dan sederhana, tanpa banyak berhenti.",
          "Anda fleksibel soal jam keberangkatan.",
        ],
      },
      {
        heading: "Kapan private lebih hemat",
        bullets: [
          "Anda bepergian bertiga, berempat, atau lebih.",
          "Membawa koper besar, anak kecil, atau keluarga yang lebih tua.",
          "Anda ingin mengatur jam dan titik berhenti sendiri.",
        ],
      },
      {
        heading: "Cara menekan biaya",
        bullets: [
          "Pesan lebih dulu, supaya tarif disepakati tanpa tawar-menawar di bandara.",
          "Pilih kendaraan yang paling pas untuk jumlah orang dan koper, tidak lebih besar.",
          "Gabungkan tempat tujuan dalam satu rute.",
          "Minta tarif tertulis beserta apa saja yang termasuk di dalamnya.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah taksi sharing lebih murah dari private?",
        a: "Per kursi biasanya lebih murah jika ada kursi kosong di rute dan tanggal Anda. Untuk keluarga dengan koper, private sering lebih hemat per orang. Minta penawaran keduanya.",
      },
      {
        q: "Apakah taksi sharing aman untuk lansia?",
        a: "Petugas menyarankan jamaah lansia tidak bepergian sendirian naik taksi. Untuk keluarga lansia, mobil private biasanya pilihan yang lebih baik.",
      },
      {
        q: "Apakah ada tarif tetap untuk semua perjalanan?",
        a: "Tidak ada satu tarif untuk semua perjalanan, karena rute dan kendaraan berbeda. Setiap tarif dikonfirmasi tertulis sebelum berangkat.",
      },
      {
        q: "Apakah tarif berubah di malam hari?",
        a: "Perjalanan malam dan musim ramai bisa mengubah tarif. Kami sebutkan jumlahnya sebelum berangkat.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-to-madinah-taxi", "makkah-ziyarat-tour"],
    relatedGuides: ["taksi-sharing-makkah", "taksi-umrah-keluarga", "taksi-umrah-lansia"],
    whatsappText: "Assalamu alaikum, saya ingin taksi murah di Makkah, sharing atau private (dari website, halaman taksi murah Makkah)",
  },
  {
    slug: "id/harga-taksi-makkah",
    lang: "id",
    group: "taxi-price-makkah",
    title: "Harga Taksi Makkah: Tarif WhatsApp",
    description:
      "Cara harga taksi Makkah ditentukan dan cara mendapat tarif pasti lewat telepon atau WhatsApp. Kami jelaskan apa yang mengubah tarif dan hal yang perlu dicek.",
    h1: "Harga Taksi Makkah: Tarif Dikonfirmasi Sebelum Berangkat",
    primaryKeyword: "harga taksi Makkah",
    keywords: ["harga taksi Makkah", "tarif taksi Makkah", "berapa harga taksi Makkah", "harga taksi bandara Jeddah ke Makkah", "harga taksi umroh", "tarif taksi umroh Makkah"],
    summary:
      "Kami tidak menerbitkan satu harga untuk semua perjalanan di Makkah, karena tarif bergantung pada kendaraan, rute, waktu dan titik henti. Kirim rencana Anda lewat WhatsApp atau telepon, lalu kami kirim tarifnya secara tertulis sebelum berangkat.",
    intro:
      "Orang yang mencari harga taksi Makkah biasanya ingin dua hal: tidak membayar berlebihan, dan bisa merencanakan anggaran sebelum sampai. Halaman ini menjelaskan apa yang mengubah tarif, dan cara mendapatkan penawaran pasti dalam beberapa menit.",
    areaServed: ["Makkah", "Jeddah", "Madinah"],
    serviceType: "Pemesanan taksi dan penawaran tarif",
    sections: [
      {
        heading: "Apa yang mengubah tarif",
        bullets: [
          "Jenis dan jumlah kursi: sedan, SUV atau van.",
          "Rute dan jarak: transfer bandara, perjalanan hotel dan antarkota dihitung berbeda.",
          "Waktu: perjalanan malam dan musim ramai bisa mengubah jumlah.",
          "Waktu tunggu di bandara atau saat ziarah.",
          "Titik henti dan rute memutar.",
          "Bagasi: koper besar mungkin butuh mobil yang lebih besar.",
        ],
      },
      {
        heading: "Cara mendapatkan tarif pasti",
        paragraphs: ["Kirim detail berikut lewat WhatsApp atau telepon. Kami balas dengan kendaraan dan tarifnya:"],
        bullets: [
          "Titik jemput dan tujuan.",
          "Tanggal dan jam, serta jam kembali jika perlu.",
          "Jumlah penumpang dan koper.",
          "Titik henti yang Anda inginkan di jalan.",
        ],
      },
      {
        heading: "Yang perlu dicek di setiap penawaran",
        bullets: [
          "Apakah tol, waktu tunggu, dan titik henti sudah termasuk.",
          "Biaya malam atau musim ramai, jika berlaku untuk perjalanan Anda.",
          "Cara dan waktu pembayaran: kebijakan kami, bayar setelah tiba, sesuai tertulis di konfirmasi.",
          "Syarat pembatalan atau perubahan, yang kami kirim bersama konfirmasi.",
        ],
      },
      {
        heading: "Membandingkan penawaran dengan adil",
        paragraphs: [
          "Bandingkan kendaraan yang sama, rute yang sama, dan apa yang termasuk. Angka yang lebih rendah hanya lebih baik jika menutup perjalanan yang sama.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kenapa harga tidak ditampilkan di halaman ini?",
        a: "Tarif bergantung pada kendaraan, rute, waktu dan titik henti. Perjalanan yang sama bisa berbeda tarifnya di jam ramai, jadi kami beri harga untuk perjalanan Anda, bukan angka umum yang belum tentu cocok.",
      },
      {
        q: "Apakah bayar sebelum atau sesudah perjalanan?",
        a: "Kebijakan kami: bayar setelah tiba di tujuan, sesuai yang tertulis di konfirmasi pemesanan.",
      },
      {
        q: "Berapa lama saya bisa mendapat harga?",
        a: "Kirim detail perjalanan lewat WhatsApp. Kami balas dengan kendaraan dan tarif setelah detailnya kami pastikan.",
      },
      {
        q: "Apakah tarif dari bandara sama dengan dari hotel?",
        a: "Tidak. Perjalanan dari bandara, rute jauh dan perjalanan malam dihitung terpisah, jadi minta penawaran untuk tiap perjalanan.",
      },
    ],
    relatedRoutes: ["jeddah-airport-to-makkah-taxi", "makkah-to-madinah-taxi", "madinah-airport-transfer"],
    relatedGuides: ["cara-pesan-taksi-makkah", "taksi-bandara-jeddah-pulang", "syarat-ketentuan-taksi-makkah"],
    whatsappText: "Assalamu alaikum, saya ingin minta penawaran harga taksi di Makkah (dari website, halaman harga taksi Makkah)",
  },
];
