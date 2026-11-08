// SPM Mastery — Sejarah (1249), KSSM Tingkatan 4 & 5. Kandungan dalam Bahasa Melayu.
(function () {
var CH = [], Q = [];
var KMJ = 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Sejarah/';

var META = {
  id: 'sejarah',
  name: 'Sejarah',
  code: '1249',
  lang: 'ms',
  formats: {
    objektif: 'Objektif (Kertas 1)',
    struktur: 'Struktur (Kertas 2, Bahagian A)',
    sumber: 'Berasaskan Sumber / Stimulus (Kertas 2)',
    kbat: 'KBAT (respons terbuka)',
    esei: 'Esei (Kertas 2, Bahagian B)',
    latihan: 'Latihan Pantas (isi tempat kosong / padanan)'
  },
  coverage: `## Apa yang diliputi

- **Semua 20 bab** buku teks KSSM Sejarah Tingkatan 4 (Bab 1–10) dan Tingkatan 5 (Bab 1–10). Tajuk bab dan subtopik disemak dengan dokumen *Perincian DSKP dan Buku Teks Sejarah Tingkatan 4 / Tingkatan 5* (Institut Pendidikan Islam, JMM) dan senarai bab Pandai.
- Nota ringkasan setiap bab: peristiwa utama, tarikh, tokoh, sebab–akibat, jadual kronologi/perbandingan, kesilapan lazim, tip dan contoh jawapan.
- **Bank soalan asal (original)** gaya SPM: objektif, struktur, sumber/stimulus, KBAT, esei serta latihan isi tempat kosong dan padanan. **Tiada soalan disalin daripada kertas SPM sebenar.**

## Had dan kelemahan (baca!)

- Nota ini ialah **ringkasan ulang kaji**, bukan pengganti buku teks. Butiran kecil (contoh: senarai penuh semua ahli jawatankuasa, statistik terperinci) sengaja tidak dimasukkan jika tidak dapat disahkan.
- Fakta disemak berdasarkan pengetahuan sejarah yang mantap dan dokumen DSKP; namun **penomboran subtopik dan istilah tepat** mungkin berbeza sedikit daripada buku teks anda. Jika bercanggah, **ikut buku teks KSSM**.
- Trend topik 2021–2024 hanya untuk **Kertas 2** (berdasarkan Kupasan Mutu Jawapan LP). **Trend Kertas 1 (objektif) tidak dianalisis** kerana tiada dokumen rasmi ditemui.
- **SPM 2025: topik soalan tidak dapat disahkan** (tiada KMJ 2025 ditemui semasa kajian).
- Pemberat gred antara Kertas 1 dan Kertas 2 tidak dinyatakan kerana tidak disahkan.
- Skema markah dalam app ini ialah **anggaran gaya SPM**, bukan skema rasmi LP.`,
  sources: [
    { title: 'LP KPM — Kupasan Mutu Jawapan SPM 2021 Sejarah 1249/2 (salinan di spmpaper.me)', url: KMJ + '2021%20SPM%20Sejarah%20K2%20KMJ.pdf' },
    { title: 'LP KPM — Kupasan Mutu Jawapan SPM 2022 Sejarah 1249/2 (salinan di spmpaper.me)', url: KMJ + '2022%20SPM%20Sejarah%20K2%20KMJ.pdf' },
    { title: 'LP KPM — Kupasan Mutu Jawapan SPM 2023 Sejarah 1249/2 (salinan di spmpaper.me)', url: KMJ + '2023%20SPM%20Sejarah%20K2%20KMJ.pdf' },
    { title: 'LP KPM — Kupasan Mutu Jawapan SPM 2024 Sejarah 1249/2 (salinan di spmpaper.me)', url: KMJ + '2024%20SPM%20Sejarah%20K2%20KMJ.pdf' },
    { title: 'IPIM JMM — Perincian DSKP dan Buku Teks Sejarah Tingkatan 4', url: 'https://ipim.jmm.gov.my/sites/default/files/dockokurikulum/T4_%20DSKP%20VS%20BUKU%20TEKS_ZAR.pdf' },
    { title: 'IPIM JMM — Perincian DSKP dan Buku Teks Sejarah Tingkatan 5', url: 'https://ipim.jmm.gov.my/sites/default/files/dockokurikulum/T5_DSKP%20VS%20BUKU%20TEKS%20_ZAR.pdf' },
    { title: 'Pandai — Sejarah Tingkatan 5 (senarai bab KSSM)', url: 'https://app.pandai.org/app/learn/kssm-f5/kssm-sj/kssm-f5-sj-01/videos' },
    { title: 'Pandai — SPM Sejarah Kertas 2 Set 1 (contoh susun atur kertas)', url: 'https://app.pandai.org/spm/read/sj-spmprep-k2-s1' },
    { title: 'MPSM Pulau Pinang — Kertas Percubaan SPM 2024 Sejarah K1 (arahan kulit: 40 soalan, 1 jam)', url: 'https://trial.spmpaper.me/2024/Sejarah/Pulau%20Pinang/Trial%20K1%20Sejarah%20SPM%202024%20-%20Pulau%20Pinang.pdf' },
    { title: 'Berita RTM — KPM nafi kebocoran kertas Sejarah SPM 2024 (rujukan Kertas 1 dan 2)', url: 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/tiada-keperluan-jawab-semula-kertas-sejarah-spm-2024-dakwaan-bocor-dinafikan/' }
  ],
  exam: {
    verified: `## Status pengesahan format

| Perkara | Status | Sumber |
|---|---|---|
| Kertas 2 (1249/2): subjektif, 100 markah, 2 jam 30 minit | **Disahkan** | Kupasan Mutu Jawapan (KMJ) LP 2021, 2022, 2023, 2024 — reka bentuk instrumen sama setiap tahun |
| K2 Bahagian A: 4 soalan struktur, jawab semua, 10 markah setiap satu | **Disahkan** | KMJ 2021–2024 |
| K2 Bahagian B: 5 soalan esei, jawab 3, 20 markah setiap satu | **Disahkan** | KMJ 2021–2024 |
| Kertas 1 (1249/1): 40 soalan objektif aneka pilihan (A–D), 1 jam | **Dilaporkan** | Kulit kertas percubaan negeri (cth. MPSM Pulau Pinang 2024); tiada dokumen LP K1 ditemui |
| Hanya dua kertas (K1 & K2) sejak SPM 2021 | **Dilaporkan** | KMJ hanya untuk K2; kenyataan KPM 2025 merujuk "Kertas 1 dan 2". Kertas 3 era KBSM tidak lagi muncul dalam bahan SPM 2021–2024 — tarikh rasmi pemansuhannya tidak ditemui |
| Pemberat markah K1 vs K2 dalam gred akhir | **Tidak disahkan** | — |

**Catatan:** soalan KSSM sering bermula dengan fakta (aras rendah) dan berakhir dengan KBAT berstimulus — petikan, poster, gambar atau infografik (KMJ 2021–2024 menunjukkan ini dalam hampir setiap soalan).`,
    overview: `## Strategi umum Sejarah SPM

**1. Fahami kata tugas.** *Nyatakan* = fakta ringkas. *Jelaskan / Huraikan* = fakta + huraian/contoh. *Buktikan* = fakta + bukti spesifik (tarikh, tokoh, peristiwa). *Ulas / Beri pendapat / Wajarkan* = KBAT: hujah + kaitan sejarah + nilai.

**2. Formula Fakta + Huraian (F + H).** Pemeriksa lazimnya memberi markah untuk setiap fakta (F) dan huraian/contoh (H) yang tepat. Satu perenggan = satu isi.

> Contoh: "British memperkenalkan Malayan Union untuk menyatukan pentadbiran (F). Sebelum perang, Tanah Melayu dipecahkan kepada NNS, NNMB dan NNMTB yang mempunyai pentadbiran berbeza dan membazir (H)."

**3. KBAT berstimulus.** Baca stimulus dua kali. Jawapan mesti (a) merujuk stimulus, (b) dikaitkan dengan fakta sejarah, dan (c) dikaitkan dengan masa kini/nilai. KMJ 2021–2024 berulang kali menegur calon yang menjawab "logik akal" tanpa fakta sejarah.

**4. Pengurusan masa Kertas 2 (150 minit).** Cadangan (bukan rasmi): ±50 minit Bahagian A (4 × ±12 minit), ±95 minit Bahagian B (3 × ±30 minit), 5 minit semak. Pilih esei yang anda **paling yakin**, bukan ikut nombor (saranan KMJ 2024).

**5. Kertas 1 (60 minit, 40 soalan).** ±1.5 minit satu soalan. Bagi soalan gabungan I, II, III, IV — singkirkan pernyataan yang pasti salah dahulu.

**6. Bahasa.** Ayat lengkap, perenggan, tulisan jelas, gunakan istilah sejarah yang tepat (contoh: *jus soli*, *kedaulatan*, *Perkara 153*).`,
    papers: [
      {
        id: 'k1', name: 'Kertas 1 (1249/1)', duration: 60, marks: 40,
        desc: `40 soalan objektif aneka pilihan (A, B, C, D), jawab semua. Meliputi Tingkatan 4 dan 5. Termasuk soalan gabungan pernyataan (I, II, III, IV) dan soalan berstimulus ringkas. *Format dilaporkan berdasarkan kulit kertas percubaan; tiada dokumen LP K1 ditemui.*`,
        sections: [{ name: 'Objektif', questions: '40 soalan aneka pilihan', marks: 40, desc: 'Jawab semua soalan' }],
        mock: { formats: ['objektif'], n: 40, minutes: 60 }
      },
      {
        id: 'k2', name: 'Kertas 2 (1249/2)', duration: 150, marks: 100,
        desc: `Ujian subjektif (disahkan melalui KMJ LP 2021–2024). Bahagian A: 4 soalan struktur wajib (10 markah setiap satu). Bahagian B: 5 soalan esei, jawab 3 (20 markah setiap satu). Kedua-dua bahagian lazimnya mempunyai bahagian KBAT berstimulus (petikan, poster, gambar, infografik).`,
        sections: [
          { name: 'Bahagian A', questions: '4 soalan struktur', marks: 40, desc: 'Jawab semua; 10 markah setiap soalan' },
          { name: 'Bahagian B', questions: '5 soalan esei', marks: 60, desc: 'Jawab 3 soalan sahaja; 20 markah setiap soalan' }
        ],
        mock: { formats: ['struktur', 'sumber', 'esei'], n: 7, minutes: 150 }
      }
    ]
  },
  trends: {
    disclaimer: `> **Trend bukan ramalan pasti.** Senarai di bawah diringkaskan daripada Kupasan Mutu Jawapan (KMJ) Kertas 2 terbitan Lembaga Peperiksaan bagi 2021–2024. Ia menunjukkan bab yang *pernah* diuji, bukan soalan yang *akan* keluar. LP boleh menguji mana-mana standard pembelajaran dalam DSKP. Kertas 1 meliputi semua bab dan tidak dianalisis di sini.

Topik diringkaskan dengan kata-kata sendiri (bukan teks soalan sebenar). Pemetaan ke bab dibuat oleh penyusun berdasarkan DSKP. Pada Januari 2025 KPM menafikan dakwaan kebocoran kertas Sejarah SPM 2024 — "senarai ramalan" yang tular bukan soalan sebenar; jangan bergantung pada ramalan tular.`,
    years: [
      {
        year: 2021, confidence: 'verified',
        summary: `SPM KSSM pertama (diduduki awal 2022). Kertas 2 meliputi: ciri negara bangsa sebelum kedatangan Barat (T4 B1); teras sistem pendidikan kebangsaan & Jawatankuasa Pelajaran 1956 (T4 B7); pemerintahan beraja Melaka → zaman British → prinsip kedua Rukun Negara (T5 B3/B7); wilayah pembentukan Malaysia & reaksi Brunei (T5 B5); BMA & penentangan Malayan Union (T4 B4); keganasan komunis & usaha kerajaan semasa Darurat (T4 B6); konsep & ciri negara berdaulat (T5 B1); latar belakang & pelaksanaan DEB (T5 B8); hubungan luar Melaka & faktor dasar luar (T5 B9). *Sumber: KMJ LP 2021 (salinan pihak ketiga).*`,
        sources: [{ title: 'KMJ SPM 2021 Sejarah K2', url: KMJ + '2021%20SPM%20Sejarah%20K2%20KMJ.pdf' }]
      },
      {
        year: 2022, confidence: 'verified',
        summary: `Kertas 2 meliputi: sebab Malayan Union & penyerahan Sarawak (T4 B4); maksud merdeka & rundingan London 1956 (T4 B9/B10); fungsi Badan Perundangan, Eksekutif, Kehakiman & pengasingan kuasa (T5 B3); sukan & perpaduan (T5 B7); ciri negara bangsa Melaka & Pembesar Empat Lipatan (T4 B1); faktor & dasar pendudukan Jepun (T4 B3); asas undang-undang & sejarah penggubalan Perlembagaan (T5 B2); Singapura menyertai & berpisah daripada Malaysia (T5 B6); Malaysia dalam PBB (T5 B9). *Sumber: KMJ LP 2022.*`,
        sources: [{ title: 'KMJ SPM 2022 Sejarah K2', url: KMJ + '2022%20SPM%20Sejarah%20K2%20KMJ.pdf' }]
      },
      {
        year: 2023, confidence: 'verified',
        summary: `Kertas 2 meliputi: propaganda Jepun & sebab Jepun menjajah Asia Tenggara (T4 B3); Sistem Ahli (T4 B7); Durbar 1897 & Majlis Raja-Raja di bawah PTM 1948 (T5 B3, kait T4 B5); perpaduan & integrasi nasional (T5 B7); intelektual agama & kesan nasionalisme (T4 B2); kronologi pemasyhuran kemerdekaan 31 Ogos 1957 (T4 B10); faktor pembentukan Malaysia & reaksi Indonesia (T5 B5); kejayaan perindustrian (teknologi tinggi, kawasan perindustrian, kereta nasional) (T5 B8); Deklarasi Langkawi & Antartika (T5 B10). *Sumber: KMJ LP 2023.*`,
        sources: [{ title: 'KMJ SPM 2023 Sejarah K2', url: KMJ + '2023%20SPM%20Sejarah%20K2%20KMJ.pdf' }]
      },
      {
        year: 2024, confidence: 'verified',
        summary: `Kertas 2 meliputi: faktor kemunculan nasionalisme awal abad ke-20 (T4 B2); penyerahan Sabah kepada British & reaksi penduduk (T4 B4); bidang kuasa Kerajaan Persekutuan, pembahagian kuasa & kerajaan tempatan (T5 B4); ancaman komunis selepas pembentukan Malaysia (T5 B6); faktor & penamatan Perang Dunia Kedua di Eropah (T4 B3); Ordinan Pelajaran 1952 & Laporan Woodhead 1955 (T4 B7); ciri tradisional & moden Perlembagaan (T5 B2); Dasar Kebudayaan Kebangsaan & Bahasa Melayu (T5 B7); matlamat & faktor dasar luar (T5 B9). *Sumber: KMJ LP 2024.*`,
        sources: [{ title: 'KMJ SPM 2024 Sejarah K2', url: KMJ + '2024%20SPM%20Sejarah%20K2%20KMJ.pdf' }]
      },
      {
        year: 2025, confidence: 'unverified',
        summary: `**Tidak dapat disahkan.** SPM 2025 bermula 3 November 2025, tetapi tiada Kupasan Mutu Jawapan atau analisis bereputasi tentang topik Sejarah 2025 ditemui semasa kajian. Jangan percaya senarai "soalan bocor/ramalan" tular.`,
        sources: []
      }
    ],
    recurring: [
      { topic: 'Era Peralihan Kuasa British (Malayan Union, penyerahan Sarawak & Sabah)', ch: 's4c4', level: 'high', basis: 'K2 2021, 2022, 2024 (KMJ)' },
      { topic: 'Konflik Dunia & Pendudukan Jepun', ch: 's4c3', level: 'high', basis: 'K2 2022, 2023, 2024 (KMJ)' },
      { topic: 'Usaha ke Arah Kemerdekaan (pendidikan kebangsaan, Sistem Ahli)', ch: 's4c7', level: 'high', basis: 'K2 2021, 2023, 2024 (KMJ)' },
      { topic: 'Raja Berperlembagaan & Demokrasi Berparlimen', ch: 's5c3', level: 'high', basis: 'K2 2021, 2022, 2023 (KMJ)' },
      { topic: 'Membina Kesejahteraan Negara (perpaduan, sukan, Rukun Negara, DKK)', ch: 's5c7', level: 'high', basis: 'K2 2022, 2023, 2024 + Rukun Negara 2021 (KMJ)' },
      { topic: 'Dasar Luar Malaysia', ch: 's5c9', level: 'high', basis: 'K2 2021, 2022, 2024 (KMJ)' },
      { topic: 'Warisan Negara Bangsa', ch: 's4c1', level: 'med', basis: 'K2 2021, 2022 (KMJ)' },
      { topic: 'Kebangkitan Nasionalisme', ch: 's4c2', level: 'med', basis: 'K2 2023, 2024 (KMJ)' },
      { topic: 'Perlembagaan Persekutuan (ciri, sejarah penggubalan)', ch: 's5c2', level: 'med', basis: 'K2 2022, 2024 (KMJ)' },
      { topic: 'Pembentukan Malaysia', ch: 's5c5', level: 'med', basis: 'K2 2021, 2023 (KMJ)' },
      { topic: 'Cabaran selepas Pembentukan Malaysia', ch: 's5c6', level: 'med', basis: 'K2 2022, 2024 (KMJ)' },
      { topic: 'Membina Kemakmuran Negara (DEB, DPN)', ch: 's5c8', level: 'med', basis: 'K2 2021, 2023 (KMJ)' },
      { topic: 'Pemasyhuran Kemerdekaan', ch: 's4c10', level: 'med', basis: 'K2 2022, 2023 (KMJ)' },
      { topic: 'Ancaman Komunis & Darurat', ch: 's4c6', level: 'med', basis: 'K2 2021 (KMJ); tema komunis juga 2024 melalui T5 B6' },
      { topic: 'Perlembagaan PTM 1957 (rundingan London)', ch: 's4c9', level: 'med', basis: 'K2 2022 (KMJ)' },
      { topic: 'Kedaulatan Negara', ch: 's5c1', level: 'med', basis: 'K2 2021 (KMJ)' },
      { topic: 'Sistem Persekutuan', ch: 's5c4', level: 'med', basis: 'K2 2024 (KMJ)' },
      { topic: 'Kecemerlangan Malaysia di Persada Dunia', ch: 's5c10', level: 'med', basis: 'K2 2023 (KMJ)' },
      { topic: 'Persekutuan Tanah Melayu 1948', ch: 's4c5', level: 'low', basis: 'Tiada soalan K2 khusus 2021–2024; hanya disentuh (Majlis Raja-Raja PTM 1948) pada 2023. Tetap diuji dalam K1.' },
      { topic: 'Pilihan Raya', ch: 's4c8', level: 'low', basis: 'Tiada soalan K2 khusus 2021–2024 (KMJ). Tetap boleh diuji dalam K1/K2.' }
    ],
    changes: `- **SPM 2021** ialah SPM pertama berasaskan KSSM. Kandungan Sejarah disusun semula secara kronologi kepada 10 bab T4 dan 10 bab T5 (KPM menyatakan tiada bahagian dimansuhkan, hanya disusun semula).
- **Kertas 2 KSSM (2021–2024):** reka bentuk sama setiap tahun — Bahagian A 4 struktur (40 markah), Bahagian B 5 esei pilih 3 (60 markah), 2 jam 30 minit (KMJ).
- Soalan KSSM menekankan **KBAT berstimulus** (petikan, poster, gambar, infografik) dan nilai/iktibar sejarah dalam hampir setiap soalan.
- Era KBSM mempunyai Kertas 3 (esei berasaskan tugasan); kertas ini tidak wujud dalam bahan SPM KSSM 2021–2024 yang dikaji. Tarikh rasmi pemansuhan tidak ditemui.
- Tiada perubahan format K2 dikesan antara 2021 dan 2024. Status 2025 tidak disahkan.`
  },
  chapters: CH,
  questions: Q
};

// ============ TINGKATAN 4 ============
CH.push({
  id: 's4c1', form: 4, num: 1, title: 'Warisan Negara Bangsa', weight: 'med',
  summary: 'Ciri negara bangsa kerajaan Alam Melayu dan Kesultanan Melayu Melaka, sistem pentadbiran, undang-undang dan peranan pemerintah–rakyat.',
  notes: `## Konsep negara bangsa

**Negara bangsa** ialah negara berdaulat yang rakyatnya terikat oleh kesetiaan kepada pemerintah, wilayah, undang-undang dan identiti yang sama. Di Alam Melayu, ciri negara bangsa telah wujud **sebelum kedatangan Barat**.

## Kerajaan Alam Melayu awal

| Kerajaan | Catatan penting |
|---|---|
| Funan | Antara kerajaan terawal di Asia Tenggara (lembah Mekong) |
| Champa | Kerajaan di pesisir Vietnam tengah |
| Srivijaya | Berpusat di Palembang; kuasa maritim; prasasti seperti Kedukan Bukit (683 M) dan Kota Kapur (686 M) mengandungi sumpah taat setia rakyat |
| Majapahit | Di Jawa Timur; undang-undang **Kutara Manawa** |

**Ciri negara bangsa kerajaan Alam Melayu:** raja sebagai pemerintah tertinggi, undang-undang, wilayah pengaruh, dan rakyat yang taat setia.

## Kesultanan Melayu Melaka (KMM)

Diasaskan oleh **Parameswara** sekitar tahun 1400. Ciri negara bangsa KMM:

1. **Raja** — pemerintah tertinggi, berdaulat; konsep *daulat* dan *derhaka*. Asas: **waadat** antara Sang Sapurba dan Demang Lebar Daun (raja tidak menzalimi rakyat; rakyat tidak menderhaka).
2. **Rakyat** — taat setia, membayar cukai, menjalankan kerah.
3. **Kedaulatan** — Melaka bebas daripada kuasa luar, diiktiraf oleh kerajaan lain (contoh: hubungan dengan China).
4. **Wilayah pengaruh** — meliputi sebahagian besar Semenanjung dan pesisir timur Sumatera.
5. **Undang-undang** — Hukum Kanun Melaka dan Undang-undang Laut Melaka.
6. **Lambang kebesaran** — alat kebesaran diraja seperti nobat, payung putih/kuning, cogan.

## Sistem pentadbiran: Sistem Pembesar Empat Lipatan

| Pembesar Berempat | Peranan utama |
|---|---|
| **Bendahara** | Pembesar tertinggi; ketua pentadbiran dan penasihat sultan; pemangku raja |
| **Penghulu Bendahari** | Mengurus perbendaharaan dan hasil negeri; ketua kepada syahbandar |
| **Temenggung** | Menjaga keamanan dan keselamatan dalam negeri, ketua polis/penjara |
| **Laksamana** | Ketua angkatan laut; mengetuai utusan; pengawal sultan |

Di bawahnya: Pembesar Berlapan, Pembesar Enam Belas dan Pembesar Tiga Puluh Dua. **Syahbandar** mengurus pelabuhan dan pedagang asing.

## Undang-undang

- **Hukum Kanun Melaka** — meliputi jenayah, peranan sultan dan pembesar, kekeluargaan (nikah kahwin) dan ekonomi (jual beli). Gabungan hukum Islam dan adat.
- **Undang-undang Laut Melaka** — peranan **nakhoda** (berkuasa seperti raja di atas kapal), pelayaran, jenayah di laut dan percukaian.

## Peranan pemerintah dan rakyat

- **Sultan:** ketua negara, ketua agama Islam, sumber undang-undang, melindungi rakyat.
- **Pembesar:** membantu sultan mentadbir, memungut cukai, mengetuai rakyat dalam peperangan.
- **Rakyat:** taat setia, kerah (membina istana/jalan), menjadi tentera, membayar ufti/cukai.

> **Kaitan masa kini:** ciri tradisional (raja, Islam, bahasa Melayu) diwarisi dalam **Perlembagaan Persekutuan** — lihat T5 Bab 2.

## Kesinambungan

Ciri negara bangsa diwarisi oleh **Kesultanan Johor-Riau** dan kesultanan Melayu lain selepas kejatuhan Melaka (1511).`,
  keyPoints: [
    'Negara bangsa telah wujud di Alam Melayu sebelum kedatangan Barat.',
    'Ciri negara bangsa KMM: raja, rakyat, kedaulatan, wilayah pengaruh, undang-undang, lambang kebesaran.',
    'Waadat Sang Sapurba–Demang Lebar Daun: asas hubungan raja–rakyat (daulat dan derhaka).',
    'Pembesar Berempat: Bendahara, Penghulu Bendahari, Temenggung, Laksamana.',
    'Hukum Kanun Melaka (darat) dan Undang-undang Laut Melaka (laut; nakhoda berkuasa di kapal).',
    'Kutara Manawa ialah undang-undang Majapahit.'
  ],
  mistakes: [
    'Menukar peranan Temenggung (keselamatan darat) dengan Laksamana (laut).',
    'Menyebut "ciri" tanpa huraian — contoh tulis "raja" sahaja tanpa menerangkan daulat/kuasa raja.',
    'Mengaitkan Kutara Manawa dengan Srivijaya (sebenarnya Majapahit).'
  ],
  tips: [
    'Hafal 6 ciri negara bangsa KMM dengan akronim RRKWUL (Raja, Rakyat, Kedaulatan, Wilayah, Undang-undang, Lambang).',
    'Untuk soalan "keunggulan sistem pentadbiran", gunakan jadual Pembesar Empat Lipatan sebagai fakta + peranan sebagai huraian.',
    'Soalan KBAT bab ini lazim bertanya nilai: kesetiaan kepada raja dan negara, kepimpinan, mematuhi undang-undang.'
  ],
  modelAnswer: `### Contoh: "Jelaskan ciri-ciri negara bangsa Kesultanan Melayu Melaka." (8 markah)

**F1:** Raja merupakan pemerintah tertinggi. **H1:** Raja mempunyai daulat; rakyat yang menentang dianggap derhaka.
**F2:** Mempunyai rakyat yang taat setia. **H2:** Rakyat menjalankan kerah dan membayar cukai.
**F3:** Mempunyai undang-undang bertulis. **H3:** Hukum Kanun Melaka dan Undang-undang Laut Melaka.
**F4:** Mempunyai wilayah pengaruh yang luas. **H4:** Meliputi sebahagian besar Semenanjung dan pesisir timur Sumatera.

*Cara markah diberi:* 1 markah setiap fakta (F) + 1 markah setiap huraian (H) yang tepat, sehingga maksimum. Fakta tanpa huraian hanya separuh markah — pastikan setiap isi ada contoh.`
});

CH.push({
  id: 's4c2', form: 4, num: 2, title: 'Kebangkitan Nasionalisme', weight: 'med',
  summary: 'Maksud nasionalisme, perkembangannya di Barat, Asia dan Asia Tenggara, faktor kemunculan dan perkembangan nasionalisme di negara kita serta kesannya.',
  notes: `## Maksud nasionalisme

**Nasionalisme** ialah perasaan cinta dan taat setia yang tinggi kepada bangsa dan tanah air, yang mendorong usaha membebaskan negara daripada penjajahan dan membina negara bangsa. Tokoh yang mentakrifkannya dalam buku teks termasuk Hans Kohn dan William R. Roff.

## Perkembangan idea nasionalisme di Barat

| Peristiwa | Tahun | Idea penting |
|---|---|---|
| Revolusi Keagungan (England) | 1688 | Mengehadkan kuasa raja; kuasa Parlimen |
| Revolusi Amerika | 1776 | Deklarasi Kemerdekaan (4 Julai 1776); hak rakyat menentukan kerajaan |
| Revolusi Perancis | 1789 | Kebebasan, kesamarataan, persaudaraan |

## Nasionalisme di Asia

- **India:** Kongres Kebangsaan India (1885); **Mahatma Gandhi** — *satyagraha* (penentangan tanpa kekerasan) dan *swadeshi* (guna barangan tempatan).
- **China:** **Dr Sun Yat Sen** — Revolusi 1911 menjatuhkan Dinasti Qing; *Tiga Prinsip Rakyat* (nasionalisme, demokrasi, kebajikan rakyat).
- **Asia Barat/Mesir:** Gerakan **Islah** dan **Pan-Islamisme** (Jamaluddin al-Afghani, Muhammad Abduh).
- **Jepun:** Pemulihan Meiji (1868) memodenkan Jepun; kemenangan Jepun ke atas Rusia (1905) membuktikan bangsa Asia mampu mengalahkan Barat.

## Nasionalisme di Asia Tenggara

| Negara | Tokoh / pertubuhan |
|---|---|
| Filipina | Jose Rizal (novel *Noli Me Tangere*), La Liga Filipina, Katipunan |
| Burma | YMBA (1906), Dobama Asiayone / golongan Thakin, Aung San |
| Vietnam | Phan Boi Chau, Ho Chi Minh |
| Indonesia | Budi Utomo (1908), Sarekat Islam, PNI (Sukarno, 1927), Sumpah Pemuda (1928) |
| Thailand | Revolusi 1932: raja mutlak → raja berperlembagaan |

## Nasionalisme di negara kita

### Faktor kemunculan
1. **Peranan agama** — Kaum Muda (Syed Sheikh al-Hadi, Sheikh Tahir Jalaluddin) menyeru pembaharuan; majalah **Al-Imam (1906)**.
2. **Penulisan kreatif** — novel *Hikayat Faridah Hanum* (Syed Sheikh al-Hadi), *Putera Gunung Tahan* (Ishak Haji Muhammad) mengkritik penjajah.
3. **Media cetak** — akhbar *Utusan Melayu* (1907, Mohd Eunos Abdullah; diterbitkan semula 1939), *Warta Malaya*, *Majlis*.
4. **Sistem pendidikan** — **Maktab Melayu Kuala Kangsar (1905)**, **Maktab Perguruan Sultan Idris (SITC, 1922)**, sekolah agama/madrasah.
5. **Golongan intelektual** — berpendidikan agama, Melayu dan Inggeris.
6. **Pengaruh luar** — gerakan di Turki, Mesir, Indonesia dan kejayaan Jepun.

### Perkembangan
- **Intelektual agama** — membanteras khurafat, menyeru umat Islam maju melalui pendidikan.
- **Intelektual Melayu** (lepasan SITC) — menulis dan menubuhkan **Kesatuan Melayu Muda (KMM, 1938)**, Ibrahim Haji Yaakob.
- **Intelektual Inggeris** — memperjuangkan hak orang Melayu dalam pentadbiran; **Kesatuan Melayu Singapura (1926)**, Mohd Eunos Abdullah.
- **Persaudaraan Sahabat Pena Malaya (PASPAM, 1934)** — menyatukan orang Melayu melalui sahabat pena.
- Persatuan negeri seperti Persatuan Melayu Selangor dan Pahang; **Kongres Persatuan Melayu Se-Malaya** (1939, 1940).
- Masyarakat Cina dan India — akhbar dan persatuan yang lebih berorientasikan negara asal.

### Kesan
- **Politik:** kesedaran menuntut hak dan pemerintahan sendiri; lahir pemimpin yang kemudian memperjuangkan kemerdekaan.
- **Ekonomi:** kesedaran memajukan ekonomi orang Melayu (contoh: menggalakkan perniagaan dan koperasi).
- **Sosial:** kesedaran pendidikan, bahasa Melayu sebagai alat penyatuan, pembaharuan agama.`,
  keyPoints: [
    'Revolusi Keagungan 1688, Revolusi Amerika 1776, Revolusi Perancis 1789 — asas idea nasionalisme Barat.',
    'Faktor nasionalisme tempatan: agama, penulisan kreatif, media cetak, pendidikan, intelektual, pengaruh luar.',
    'Al-Imam (1906) — majalah Kaum Muda.',
    'MCKK (1905) dan SITC (1922) — institusi yang melahirkan pemimpin dan intelektual.',
    'Kesatuan Melayu Singapura (1926), PASPAM (1934), KMM (1938).',
    'Kesan nasionalisme: politik, ekonomi, sosial.'
  ],
  mistakes: [
    'Mencampurkan peranan intelektual agama (pembaharuan Islam) dengan intelektual Inggeris (hak dalam pentadbiran).',
    'Menyebut KMM ditubuhkan oleh Dato\' Onn — sebenarnya Ibrahim Haji Yaakob.',
    'Hanya menyenaraikan nama akhbar tanpa menerangkan bagaimana ia membangkitkan kesedaran.'
  ],
  tips: [
    'Soalan "faktor kemunculan" (diuji K2 2024) — gunakan 6 faktor DSKP; setiap faktor beri satu contoh nama (akhbar, sekolah, tokoh).',
    'Bezakan tiga golongan intelektual dalam jadual: latar pendidikan, tokoh, cara perjuangan.',
    'KBAT bab ini: semangat cinta akan negara, kepentingan ilmu, peranan media.'
  ],
  modelAnswer: `### Contoh: "Jelaskan peranan golongan intelektual berpendidikan agama dalam membangkitkan semangat nasionalisme." (6 markah)

**F1:** Menyeru pembaharuan dalam kalangan umat Islam. **H1:** Kaum Muda seperti Syed Sheikh al-Hadi menegaskan Islam agama progresif yang menggalakkan kemajuan.
**F2:** Menerbitkan majalah. **H2:** *Al-Imam* (1906) mengkritik kemunduran masyarakat dan amalan khurafat.
**F3:** Menubuhkan madrasah. **H3:** Madrasah menggabungkan ilmu agama dan akademik untuk melahirkan generasi berilmu.

*Tip markah:* setiap F + H yang berpasangan memberi markah penuh untuk satu isi. Elakkan menulis "mereka berjuang untuk bangsa" — terlalu umum, tiada markah.`
});

CH.push({
  id: 's4c3', form: 4, num: 3, title: 'Konflik Dunia dan Pendudukan Jepun di Negara Kita', weight: 'high',
  summary: 'Perang Dunia Pertama dan Kedua, peluasan kuasa Jepun, dasar pendudukan Jepun, penentangan rakyat dan keadaan selepas Jepun menyerah kalah.',
  notes: `## Perang Dunia Pertama (1914–1918)

**Sebab:** persaingan kuasa imperialis, pakatan tentera (Pakatan Tiga: Jerman, Austria-Hungary, Itali lawan Entente: Britain, Perancis, Rusia), krisis rantau Balkan. Pencetus: pembunuhan Archduke Franz Ferdinand di Sarajevo (28 Jun 1914).

**Penamatan:** Persidangan Damai Paris (1919) dan **Perjanjian Versailles (1919)** yang menghukum Jerman dengan berat. Liga Bangsa ditubuhkan.

**Kesan:** keruntuhan pemerintahan beraja (contoh: Rusia, Jerman, Austria-Hungary, Uthmaniyah), kemunculan negara baharu. **Di negara kita:** kapal perang Jerman *Emden* menyerang Pulau Pinang (Oktober 1914); ekonomi getah dan bijih timah terjejas.

## Perang Dunia Kedua di Eropah (1939–1945)

**Faktor tercetus:**
1. **Ideologi baharu** — Nazisme (Hitler, Jerman), Fasisme (Mussolini, Itali).
2. **Ketidakpuasan hati terhadap Perjanjian Versailles** — Jerman kehilangan wilayah dan dikenakan pampasan perang.
3. **Kegagalan Liga Bangsa** — tiada tentera sendiri, gagal menghalang pencerobohan.

**Perkembangan:** Jerman menyerang Poland (1 September 1939); Britain dan Perancis mengisytiharkan perang (3 September 1939); penaklukan Eropah Barat; pengeboman Britain (1940); Itali menyertai perang; Jerman menyerang Rusia (Jun 1941).

**Penamatan di Eropah:** kerjasama kuasa Bersekutu (Britain, Amerika Syarikat, Soviet Union), kegagalan Jerman menawan Rusia, kejayaan pendaratan Normandy (6 Jun 1944). Jerman menyerah kalah pada Mei 1945.

## Perang Dunia Kedua di Asia Pasifik

**Peluasan kuasa Jepun:** dasar *Asia untuk Asia* dan *Kawasan Kemakmuran Bersama Asia Timur Raya*; sekatan ekonomi (minyak) oleh Amerika Syarikat; rancangan menakluk wilayah selatan yang kaya bahan mentah.

| Tarikh | Peristiwa |
|---|---|
| 8 Dis 1941 | Jepun mendarat di Kota Bharu, Kelantan; serangan ke atas Pearl Harbor (7 Dis waktu Hawaii) |
| 10 Dis 1941 | Kapal *Prince of Wales* dan *Repulse* ditenggelamkan |
| 16 Dis 1941 | Jepun mendarat di Miri, Sarawak |
| Jan 1942 | Jepun menguasai Labuan dan Borneo Utara |
| 15 Feb 1942 | Singapura jatuh ke tangan Jepun |
| 6 & 9 Ogos 1945 | Bom atom di Hiroshima dan Nagasaki |
| 15 Ogos 1945 | Jepun mengumumkan penyerahan kalah |

**Faktor kedatangan Jepun:** eksploitasi bahan mentah (getah, bijih timah, minyak) dan kepentingan strategik ketenteraan.

## Dasar pendudukan Jepun

- **Pentadbiran:** pentadbiran tentera; Raja-raja Melayu dikekalkan sebagai ketua agama Islam dan adat; empat negeri utara (Kedah, Perlis, Kelantan, Terengganu) diserahkan kepada Thailand (1943); Sarawak dan Sabah ditadbir bersama sebagai satu wilayah.
- **Ekonomi:** mata wang "duit pisang"; tanaman makanan; buruh paksa (contoh: Jalan Kereta Api Maut Siam–Burma).
- **Sosial:** bahasa Jepun diajar, lagu *Kimigayo*; catuan makanan; layanan berbeza — orang Cina ditindas (operasi *Sook Ching*), orang Melayu dan India diberi layanan agak baik untuk mendapat sokongan.

## Penentangan rakyat

| Penentang | Keterangan |
|---|---|
| Rejimen Askar Melayu | Leftenan **Adnan Saidi** di Bukit Candu (Pasir Panjang), Februari 1942 |
| MPAJA | Gerila anti-Jepun; bekerjasama dengan **Force 136** |
| Force 136 | Pasukan khas British; termasuk **Lim Bo Seng** |
| Individu | **Sybil Kathigasu**, **Gurchan Singh** |
| Sabah | **Pemberontakan Jesselton** (Oktober 1943) dipimpin Albert Kwok |
| Sarawak | **Operasi Semut** (1945) bersama penduduk pedalaman |

## Selepas Jepun menyerah kalah

Tentera **Bintang Tiga (MPAJA)** menguasai Tanah Melayu kira-kira 14 hari sebelum British kembali; berlaku keganasan dan pembalasan dendam, mencetuskan ketegangan kaum. Orang Melayu bangkit menentang (contoh: Panglima Salleh di Batu Pahat). British kembali dan membentuk **BMA** (September 1945).

> **Kesan kepada nasionalisme:** Jepun memusnahkan mitos keunggulan Barat, membangkitkan semangat anti-penjajah dan kesedaran politik termasuk di Sarawak dan Sabah.`,
  keyPoints: [
    'PD1: 1914–1918; Perjanjian Versailles 1919.',
    'PD2 Eropah: ideologi baharu, dendam Versailles, kegagalan Liga Bangsa.',
    'Jepun mendarat di Kota Bharu 8 Disember 1941; Singapura jatuh 15 Februari 1942.',
    'Faktor kedatangan Jepun: bahan mentah dan strategik ketenteraan.',
    'Penentangan: Rejimen Askar Melayu, MPAJA, Force 136, Pemberontakan Jesselton, Operasi Semut.',
    'Jepun menyerah 15 Ogos 1945; Bintang Tiga berkuasa ±14 hari; BMA ditubuhkan.'
  ],
  mistakes: [
    'Menyatakan Jepun mula menyerang Pearl Harbor dahulu — pendaratan di Kota Bharu berlaku pada malam yang sama, beberapa jam lebih awal.',
    'Mengelirukan MPAJA (gerila) dengan Bintang Tiga — Bintang Tiga ialah nama popular MPAJA; selepas perang ia melakukan keganasan.',
    'Menganggap Jepun memerdekakan Tanah Melayu — Jepun ialah penjajah baharu.'
  ],
  tips: [
    'Bab ini muncul dalam K2 2022, 2023 dan 2024 (KMJ) — beri keutamaan tinggi.',
    'Hafal jadual kronologi serangan Jepun; tarikh kerap diuji dalam K1.',
    'Untuk KBAT "keamanan dunia", kaitkan kesan perang (kebuluran, buruh paksa) dengan peranan PBB masa kini.'
  ],
  modelAnswer: `### Contoh: "Terangkan dasar pentadbiran Jepun di negara kita." (6 markah)

**F1:** Menubuhkan pentadbiran tentera. **H1:** Semua urusan dikawal pegawai tentera Jepun.
**F2:** Mengekalkan Raja-raja Melayu. **H2:** Raja hanya berkuasa dalam hal agama Islam dan adat Melayu untuk mendapat sokongan orang Melayu.
**F3:** Menyerahkan empat negeri utara kepada Thailand. **H3:** Kedah, Perlis, Kelantan dan Terengganu diserahkan pada 1943 sebagai balasan sokongan Thailand.

*Tip:* jika soalan menyebut "aspek politik, ekonomi dan sosial", susun jawapan ikut aspek supaya pemeriksa nampak liputan lengkap.`
});

CH.push({
  id: 's4c4', form: 4, num: 4, title: 'Era Peralihan Kuasa British di Negara Kita', weight: 'high',
  summary: 'BMA, gagasan Malayan Union dan penentangannya, penyerahan Sarawak oleh Brooke dan Sabah oleh SBUB kepada British serta reaksi penduduk.',
  notes: `## British Military Administration (BMA)

Ditubuhkan pada **September 1945** hingga **31 Mac 1946**. Tujuan: mengembalikan **kestabilan dan keamanan** (melucutkan senjata Bintang Tiga, membanteras jenayah) dan **memulihkan kepercayaan rakyat** (bekalan makanan, perkhidmatan asas, membuka semula sekolah dan hospital).

## Gagasan Malayan Union (1 April 1946)

**Sebab British memperkenalkan Malayan Union:**
1. Menyatukan pentadbiran negeri-negeri Melayu yang berbeza (NNS, NNMB, NNMTB) supaya cekap dan jimat.
2. Mengurangkan kuasa Raja-raja Melayu.
3. Menyediakan kewarganegaraan sama rata untuk semua kaum (persediaan berkerajaan sendiri).
4. Mengawal ekonomi Tanah Melayu bagi membiayai pemulihan Britain selepas perang.

**Ciri Malayan Union:**

| Aspek | Ciri |
|---|---|
| Wilayah | 9 negeri Melayu + Pulau Pinang + Melaka; **Singapura dipisahkan** |
| Pentadbiran | Diketuai **Gabenor British** (Sir Edward Gent); Majlis Mesyuarat Kerajaan dan Majlis Undangan |
| Raja | Hilang kuasa politik; hanya mengetuai hal agama Islam dan adat (melalui Majlis Penasihat Melayu) |
| Kewarganegaraan | Prinsip **jus soli** — sesiapa yang lahir di Tanah Melayu/Singapura; syarat longgar bagi pendatang |

**Tandatangan raja:** **Sir Harold MacMichael** mendapatkan tandatangan Raja-raja Melayu (Oktober–Disember 1945) melalui ugutan — raja diancam akan disiasat kerana didakwa bekerjasama dengan Jepun.

## Penentangan terhadap Malayan Union

- **Raja-raja Melayu:** memboikot upacara pelantikan Gabenor (1 April 1946), menghantar bantahan ke London.
- **Akhbar Melayu:** *Utusan Melayu*, *Majlis* mengkritik.
- **Orang Melayu:** berhimpun memakai kain putih lilit songkok tanda berkabung.
- **Kongres Melayu Se-Malaya** (1–4 Mac 1946, Kelab Sultan Sulaiman, Kampung Baru) → **UMNO** ditubuhkan **11 Mei 1946** di Johor Bahru, presiden **Dato' Onn Jaafar**.
- Pegawai British bersara seperti **Frank Swettenham** dan **Richard Winstedt** turut menentang.

Akibatnya, Malayan Union digantikan oleh **Persekutuan Tanah Melayu (1 Februari 1948)**.

## Penyerahan Sarawak (1 Julai 1946)

**Faktor:** kemusnahan akibat perang dan kos pemulihan yang tinggi; Brooke tiada waris lelaki yang sesuai; British ingin menguasai Sarawak secara langsung.

**Proses:** Rang undang-undang penyerahan diluluskan Majlis Negeri (Council Negri) dengan undi tipis (19 lawan 16) pada Mei 1946; Sarawak menjadi tanah jajahan mahkota British pada 1 Julai 1946.

**Penentangan:** Persatuan Kebangsaan Melayu Sarawak (PKMS), Barisan Pemuda Sarawak, Pergerakan Pemuda Melayu; Anthony Brooke turut membantah. Kakitangan kerajaan meletak jawatan apabila **Pekeliling No. 9** melarang mereka menyertai gerakan anti-penyerahan. Kemuncak: **Rosli Dhobi** (Rukun 13) membunuh Gabenor **Duncan Stewart** di Sibu (3 Disember 1949). Ada juga golongan yang menyokong penyerahan (sebahagian masyarakat Cina dan pedalaman).

## Penyerahan Sabah (15 Julai 1946)

**Faktor:** **Syarikat Borneo Utara British (SBUB)** kekurangan modal untuk membangunkan semula Sabah yang musnah teruk akibat perang. Labuan turut digabungkan dengan Sabah.

**Reaksi penduduk:** tidak sekeras Sarawak. Dasar British mengehadkan kegiatan berpersatuan dan peluang penduduk tempatan dalam pentadbiran menimbulkan rasa tidak puas hati; penduduk lebih memberi tumpuan kepada kepentingan sosioekonomi.

| Perkara | Sarawak | Sabah |
|---|---|---|
| Diserahkan oleh | Charles Vyner Brooke | SBUB |
| Tarikh | 1 Julai 1946 | 15 Julai 1946 |
| Reaksi | Penentangan kuat (Rosli Dhobi) | Penentangan terhad |`,
  keyPoints: [
    'BMA: September 1945 – 31 Mac 1946.',
    'Malayan Union diisytiharkan 1 April 1946; Gabenor Sir Edward Gent; Singapura dipisahkan.',
    'Kewarganegaraan Malayan Union berasaskan jus soli.',
    'Harold MacMichael mendapatkan tandatangan raja melalui ugutan.',
    'Kongres Melayu Se-Malaya Mac 1946; UMNO ditubuhkan 11 Mei 1946 (Dato\' Onn Jaafar).',
    'Sarawak diserahkan 1 Julai 1946; Sabah 15 Julai 1946.',
    'Rosli Dhobi membunuh Gabenor Duncan Stewart di Sibu, 3 Disember 1949.'
  ],
  mistakes: [
    'Menyatakan Singapura termasuk dalam Malayan Union — Singapura dipisahkan.',
    'Menyebut Sabah diserahkan oleh Brooke — Sabah diserahkan oleh SBUB.',
    'Menulis "orang Melayu menentang kerana tidak suka British" — terlalu umum; nyatakan sebab spesifik (kuasa raja hilang, jus soli, cara MacMichael).'
  ],
  tips: [
    'Bab ini diuji dalam K2 2021, 2022 dan 2024 (KMJ) — utamakan.',
    'Buat jadual perbandingan Sarawak vs Sabah: faktor, tarikh, reaksi.',
    'Soalan "pengajaran/iktibar" (seperti KMJ 2021): kaitkan dengan perpaduan, berani mempertahankan maruah bangsa, kepimpinan.'
  ],
  modelAnswer: `### Contoh esei (bahagian): "Jelaskan sebab orang Melayu menentang Malayan Union." (8 markah)

**F1:** Kedudukan Raja-raja Melayu terhakis. **H1:** Raja hanya berkuasa dalam hal agama Islam dan adat; kuasa politik diserahkan kepada Gabenor British.
**F2:** Kewarganegaraan prinsip jus soli. **H2:** Syarat yang longgar dibimbangi menjejaskan kedudukan orang Melayu sebagai penduduk asal.
**F3:** Cara MacMichael mendapatkan tandatangan. **H3:** Raja-raja diugut dan diberi masa singkat tanpa berunding dengan pembesar.
**F4:** Malayan Union menjadikan Tanah Melayu tanah jajahan. **H4:** Kedaulatan negeri-negeri Melayu hilang.

*Cara markah:* F + H = 2 markah setiap isi. Esei 20 markah biasanya memerlukan 4–5 isi berhuraian bagi setiap bahagian ditambah KBAT di akhir.`
});

CH.push({
  id: 's4c5', form: 4, num: 5, title: 'Persekutuan Tanah Melayu 1948', weight: 'low',
  summary: 'Latar belakang (Jawatankuasa Kerja, PUTERA-AMCJA), faktor penubuhan, ciri dan kesan Persekutuan Tanah Melayu 1948.',
  notes: `## Latar belakang

Penentangan hebat terhadap Malayan Union memaksa British berunding. **Jawatankuasa Kerja** ditubuhkan pada **Julai 1946**, dianggotai wakil **Raja-raja Melayu, UMNO** dan **pegawai British**, untuk merangka perlembagaan baharu. Pandangan kaum lain didengar melalui sebuah jawatankuasa perundingan.

### Golongan nasionalis Melayu radikal

- **Parti Kebangsaan Melayu Malaya (PKMM, 1945)** — Dr Burhanuddin al-Helmi, Ishak Haji Muhammad.
- **Angkatan Pemuda Insaf (API, 1946)** — Ahmad Boestamam.
- **Angkatan Wanita Sedar (AWAS, 1946)**.

### Gabungan PUTERA–AMCJA

- **PUTERA** (Pusat Tenaga Rakyat) — gabungan pertubuhan Melayu radikal.
- **AMCJA** (All-Malaya Council of Joint Action) — dipimpin **Tan Cheng Lock**.
- Mengemukakan **Perlembagaan Rakyat** (1947): antaranya kerajaan sendiri, Singapura disatukan, kewarganegaraan sama rata, Melayu sebagai bahasa rasmi.
- Melancarkan **hartal** (mogok perniagaan) seluruh negara pada **20 Oktober 1947**.
- British menolak cadangan ini kerana menganggap UMNO dan Raja-raja Melayu lebih mewakili orang Melayu.

## Faktor penubuhan PTM 1948

1. **Penentangan orang Melayu** terhadap Malayan Union.
2. **Cadangan Raja-raja Melayu dan UMNO** dalam Jawatankuasa Kerja.
3. **Sokongan pentadbir British** — pegawai British bersara dan pentadbir di Tanah Melayu menyedari Malayan Union tidak dapat dilaksanakan.

## Ciri Persekutuan Tanah Melayu 1948 (1 Februari 1948)

| Aspek | Ciri |
|---|---|
| Wilayah | 9 negeri Melayu + Pulau Pinang + Melaka (Singapura kekal tanah jajahan berasingan) |
| Pentadbiran | **Pesuruhjaya Tinggi British** (pertama: Sir Edward Gent); Majlis Mesyuarat Kerajaan Persekutuan; Majlis Perundangan Persekutuan |
| Kuasa raja | Kedaulatan dikembalikan; raja ketua negeri; **Majlis Raja-Raja** ditubuhkan; setiap negeri ada Menteri Besar |
| Perundangan | Majlis Perundangan Persekutuan menggubal undang-undang; Majlis Negeri bagi negeri |
| Kewarganegaraan | Lebih **ketat** daripada Malayan Union — secara kuat kuasa undang-undang atau permohonan (syarat bermastautin, berkelakuan baik, boleh berbahasa Melayu atau Inggeris, berikrar taat setia) |
| Kedudukan Melayu | **Hak istimewa orang Melayu** dijamin; Pesuruhjaya Tinggi bertanggungjawab melindunginya |

## Kesan penubuhan PTM 1948

- **Mengembalikan kedudukan Raja-raja Melayu** sebagai ketua negeri dan simbol kedaulatan.
- **Menjaga kedudukan istimewa orang Melayu.**
- **Membuka ruang kewarganegaraan** kepada bukan Melayu secara terkawal.
- **Mewujudkan kerjasama kaum** — menjadi asas perkongsian kuasa dan, kemudiannya, Perlembagaan 1957.

> **Perbandingan penting:** Malayan Union = Gabenor, raja hilang kuasa, jus soli longgar. PTM 1948 = Pesuruhjaya Tinggi, raja berdaulat, kewarganegaraan ketat.

| Perkara | Malayan Union 1946 | PTM 1948 |
|---|---|---|
| Ketua | Gabenor | Pesuruhjaya Tinggi |
| Raja-raja | Hilang kuasa politik | Kedaulatan dikembalikan |
| Kewarganegaraan | Longgar (jus soli) | Ketat |
| Hak istimewa Melayu | Tidak dijamin | Dijamin |`,
  keyPoints: [
    'Jawatankuasa Kerja (Julai 1946): wakil Raja-raja Melayu, UMNO dan British.',
    'PUTERA–AMCJA mengemukakan Perlembagaan Rakyat; hartal 20 Oktober 1947.',
    'PTM 1948 diisytiharkan 1 Februari 1948.',
    'Ketua: Pesuruhjaya Tinggi British; Majlis Raja-Raja ditubuhkan.',
    'Kewarganegaraan diperketat; hak istimewa Melayu dijamin.',
    'Singapura kekal tanah jajahan berasingan.'
  ],
  mistakes: [
    'Mengatakan PTM 1948 memberi kemerdekaan — Tanah Melayu masih di bawah naungan British.',
    'Mengelirukan Pesuruhjaya Tinggi (PTM 1948) dengan Gabenor (Malayan Union).',
    'Menganggap Perlembagaan Rakyat diterima British.'
  ],
  tips: [
    'Hafal jadual perbandingan Malayan Union vs PTM 1948 — sesuai untuk soalan banding beza dan K1.',
    'Bab ini tidak diuji khusus dalam K2 2021–2024 (KMJ) tetapi Majlis Raja-Raja di bawah PTM 1948 disentuh pada 2023 — jangan abaikan.',
    'KBAT: semangat waja, mempertahankan kedaulatan, tolak ansur kaum.'
  ],
  modelAnswer: `### Contoh: "Jelaskan kesan penubuhan Persekutuan Tanah Melayu 1948." (6 markah)

**F1:** Kedudukan Raja-raja Melayu dikembalikan. **H1:** Raja menjadi ketua negeri dan Majlis Raja-Raja ditubuhkan.
**F2:** Hak istimewa orang Melayu terpelihara. **H2:** Pesuruhjaya Tinggi bertanggungjawab melindungi kedudukan istimewa orang Melayu.
**F3:** Kerjasama kaum mula terbina. **H3:** Kewarganegaraan dibuka kepada bukan Melayu yang memenuhi syarat, menjadi asas perkongsian kuasa menjelang merdeka.

*Tip:* gunakan perkataan "kesan" yang jelas (mengembalikan, menjamin, membuka ruang) supaya fakta mudah dikenal pasti pemeriksa.`
});

CH.push({
  id: 's4c6', form: 4, num: 6, title: 'Ancaman Komunis dan Perisytiharan Darurat', weight: 'med',
  summary: 'Kemasukan pengaruh komunis, ancaman PKM, pengisytiharan Darurat 1948, usaha menangani (Rancangan Briggs, perang saraf, Rundingan Baling) dan kesan Darurat.',
  notes: `## Kemasukan pengaruh komunis

- **Dari China:** ideologi komunis dibawa oleh ejen dan buruh dari China pada 1920-an; menyusup melalui kesatuan sekerja dan sekolah.
- **Dari Indonesia:** ejen Parti Komunis Indonesia (PKI) menyebarkan pengaruh kepada orang Melayu.
- **Parti Komunis Malaya (PKM)** ditubuhkan pada **1930**. Semasa pendudukan Jepun, PKM menubuhkan MPAJA; selepas perang ia berusaha menguasai Tanah Melayu melalui mogok dan kesatuan sekerja, kemudian melalui keganasan bersenjata.

## Ancaman dan pengisytiharan Darurat

Pada **16 Jun 1948**, tiga pengurus ladang Eropah dibunuh di **Sungai Siput, Perak**. Kerajaan mengisytiharkan **Darurat** pada hari yang sama (bermula di Perak dan Johor, kemudian seluruh Tanah Melayu). PKM diharamkan pada Julai 1948.

**Bentuk ancaman komunis:**
1. **Melumpuhkan ekonomi** — membakar ladang getah, memusnahkan lombong bijih timah.
2. **Merosakkan infrastruktur** — menyerang kereta api, jambatan, balai polis.
3. **Mengancam keselamatan rakyat** — membunuh, mengugut dan memeras orang awam.
4. **Mengancam pasukan keselamatan** — serang hendap; contoh: Pesuruhjaya Tinggi **Sir Henry Gurney** dibunuh di Bukit Fraser (6 Oktober 1951).

## Usaha menangani ancaman komunis

| Langkah | Keterangan |
|---|---|
| Undang-undang Darurat | Kuasa menahan tanpa bicara, hukuman berat bagi memiliki senjata |
| Pasukan keselamatan | Polis (Cawangan Khas, Special Constables, Polis Hutan, **Senoi Praaq**), Askar Melayu, tentera Komanwel, Sarawak Rangers, **Home Guard** |
| Pendaftaran Kebangsaan | Kad pengenalan diperkenalkan (1948) untuk mengesan anggota komunis |
| **Rancangan Briggs (1950)** | Lt. Jen. Sir Harold Briggs: memindahkan penduduk pinggir hutan ke **kampung baru** untuk memutuskan bekalan makanan, maklumat dan anggota kepada komunis |
| Tawaran pengampunan | Komunis yang menyerah diri diberi pengampunan |
| Kempen & perintah berkurung | Kempen Bulan Rakyat Melawan Penjahat; perintah berkurung di kawasan hitam |
| **Perang saraf** | Strategi "memenangi hati dan fikiran" (**Sir Gerald Templer**, Pesuruhjaya Tinggi 1952–1954): melonggarkan syarat kewarganegaraan, pilihan raya, hadiah wang tunai, memenangi kepercayaan Orang Asli, **Kawasan Putih** (kawasan bebas komunis; sekatan dilonggarkan) dan Kawasan Hitam |
| **Rundingan Baling (28–29 Dis 1955)** | Tunku Abdul Rahman, Tan Cheng Lock dan David Marshall bertemu **Chin Peng**; **gagal** kerana PKM enggan membubarkan diri dan menyerah tanpa syarat |

## Kesan zaman Darurat

**Politik:**
- Jumlah warganegara bertambah (syarat dilonggarkan untuk mendapatkan sokongan bukan Melayu).
- **MCA** ditubuhkan (1949) oleh Tan Cheng Lock, antaranya untuk membantu penduduk kampung baru.
- **Mempercepat kemerdekaan** — British yakin kerajaan tempatan berbilang kaum mampu menangani komunis.

**Sosioekonomi:**
- Kos perbelanjaan keselamatan meningkat.
- Penderitaan rakyat — kehilangan nyawa, harta dan sekatan pergerakan.
- Hubungan kaum menjadi renggang.

**Penamatan:** Darurat **ditamatkan secara rasmi pada 31 Julai 1960**. Ancaman komunis berterusan sehingga **Perjanjian Damai Haadyai (2 Disember 1989)** — lihat T5 Bab 6.

> **Iktibar:** berhati-hati dengan anasir yang menggugat kestabilan, pemikiran strategik dan sikap sedia berkorban untuk negara.`,
  keyPoints: [
    'PKM ditubuhkan 1930.',
    'Darurat diisytiharkan 16 Jun 1948 selepas pembunuhan pengurus ladang di Sungai Siput.',
    'Rancangan Briggs 1950: kampung baru memutuskan bekalan kepada komunis.',
    'Sir Henry Gurney dibunuh 6 Oktober 1951; Templer memperkenalkan perang saraf.',
    'Rundingan Baling 28–29 Disember 1955 gagal.',
    'Darurat tamat 31 Julai 1960.'
  ],
  mistakes: [
    'Menyatakan Rundingan Baling berjaya.',
    'Mengelirukan Rancangan Briggs (Briggs, 1950) dengan strategi hati dan fikiran (Templer).',
    'Mengatakan Darurat tamat 1957 — Darurat tamat 1960 walaupun merdeka pada 1957.'
  ],
  tips: [
    'Diuji dalam K2 2021 (KMJ): usaha kerajaan semasa Darurat dan sebab PKM mahu menguasai Tanah Melayu.',
    'Gunakan jadual langkah untuk soalan "usaha kerajaan" — 8–9 langkah dengan contoh.',
    'Jangan keliru Darurat 1948–1960 (T4 B6) dengan ancaman komunis selepas pembentukan Malaysia (T5 B6).'
  ],
  modelAnswer: `### Contoh: "Huraikan usaha kerajaan mengatasi ancaman komunis semasa Darurat." (8 markah)

**F1:** Melaksanakan Rancangan Briggs. **H1:** Penduduk pinggir hutan dipindahkan ke kampung baru supaya komunis kehilangan bekalan makanan dan maklumat.
**F2:** Memperkenalkan pendaftaran kebangsaan. **H2:** Kad pengenalan memudahkan pasukan keselamatan mengenal pasti orang awam dan komunis.
**F3:** Melancarkan perang saraf. **H3:** Templer memperkenalkan Kawasan Putih dan hadiah wang tunai bagi maklumat.
**F4:** Menawarkan pengampunan. **H4:** Rundingan Baling 1955 diadakan tetapi gagal kerana PKM enggan menyerah.

*Tip:* sertakan nama tokoh dan tahun — ini membezakan jawapan "tinggi" daripada "sederhana" (KMJ).`
});

CH.push({
  id: 's4c7', form: 4, num: 7, title: 'Usaha ke Arah Kemerdekaan', weight: 'high',
  summary: 'Pertubuhan politik awal, Jawatankuasa Hubungan Antara Kaum, Sistem Ahli, usaha sistem pendidikan kebangsaan (Barnes hingga Penyata Razak) dan kerjasama politik Perikatan.',
  notes: `## Latar belakang idea negara merdeka

Selepas Perang Dunia Kedua, banyak pertubuhan politik muncul: KMM, **PKMM**, **API**, Persatuan Kebangsaan Melayu Sarawak, Pergerakan Pemuda Melayu, **UMNO (1946)**, Parti Kebangsaan Melayu Labuan, **MIC (1946)**, Hizbul Muslimin, **MCA (1949)**, **PAS (1951)** dan **Independence of Malaya Party (IMP, 1951)** yang ditubuhkan Dato' Onn Jaafar selepas keluar UMNO.

## Jawatankuasa Hubungan Antara Kaum (JHAK / CLC)

Ditubuhkan pada **1949** atas inisiatif **Malcolm MacDonald** (Pesuruhjaya Agung British di Asia Tenggara). Dianggotai pemimpin pelbagai kaum (antaranya Dato' Onn Jaafar dan Tan Cheng Lock). **Peranan:** membincangkan isu kewarganegaraan, kedudukan ekonomi orang Melayu, pendidikan dan pilihan raya — membina persefahaman kaum.

## Sistem Ahli (April 1951)

**Sebab British memperkenalkan:** melatih pemimpin tempatan mentadbir sebagai persediaan berkerajaan sendiri; memenuhi tuntutan nasionalis; mendapatkan sokongan penduduk menentang komunis.

**Ciri:** pemimpin tempatan dilantik menjadi "Ahli" yang bertanggungjawab ke atas jabatan tertentu (seperti menteri), tetapi **bertanggungjawab kepada Pesuruhjaya Tinggi**, bukan kepada rakyat; British masih mengawal portfolio utama.

| Ahli tempatan (1951) | Portfolio |
|---|---|
| Dato' Onn Jaafar | Hal Ehwal Dalam Negeri |
| Dato' E.E.C. Thuraisingham | Pelajaran |
| Dato' Dr Lee Tiang Keng | Kesihatan |
| Dato' Mahmud Mat | Tanah, Galian dan Perhubungan |
| Tunku Yaacob | Pertanian dan Perhutanan |

**Kepentingan:** pengalaman pentadbiran kepada pemimpin tempatan; asas kepada sistem kabinet selepas Pilihan Raya 1955.

## Sistem pendidikan kebangsaan

| Laporan / akta | Tahun | Intipati |
|---|---|---|
| **Laporan Barnes** | 1951 | Sekolah kebangsaan menggunakan bahasa Melayu dan Inggeris; sekolah vernakular digantikan |
| **Laporan Fenn-Wu** | 1951 | Mengekalkan sekolah vernakular Cina; bahasa Cina diajar bersama Melayu dan Inggeris |
| **Ordinan Pelajaran** | 1952 | Sekolah kebangsaan dwibahasa (Melayu & Inggeris); bahasa Cina dan Tamil boleh diajar jika ada permintaan; sekolah vernakular tidak dijadikan sekolah kebangsaan |
| **Laporan Woodhead** | 1955 | Di **Sarawak dan Sabah** — memperbaiki pendidikan rendah dan menengah, latihan guru, bahasa Inggeris diperluas |
| **Penyata Razak** (Jawatankuasa Pelajaran 1956) | 1956 | **Bahasa Melayu bahasa kebangsaan** dan bahasa pengantar utama; **sukatan pelajaran yang sama** untuk semua sekolah; sekolah rendah: Sekolah Umum dan Sekolah Jenis Umum; asas **Ordinan Pelajaran 1957** |

> **Matlamat akhir Penyata Razak:** menjadikan bahasa Melayu bahasa pengantar utama dan menyatupadukan murid pelbagai kaum melalui sukatan yang sama.

## Kerjasama politik ke arah kemerdekaan

- **Pakatan PUTERA–AMCJA (1947)** — gabungan radikal pelbagai kaum (lihat Bab 5).
- **Pakatan UMNO–MCA** dalam **Pilihan Raya Majlis Perbandaran Kuala Lumpur (Februari 1952)** — menang 9 daripada 12 kerusi.
- **MIC** menyertai pada **1954** → **Parti Perikatan**.
- **Tunku Abdul Rahman** menjadi Presiden UMNO pada **1951**, menggantikan Dato' Onn.
- Perikatan menuntut pilihan raya Majlis Perundangan Persekutuan diadakan segera, membawa kepada **Pilihan Raya Umum 1955** (Bab 8).

**Pengajaran:** kerjasama kaum adalah syarat utama British memberi kemerdekaan.`,
  keyPoints: [
    'JHAK/CLC 1949 — Malcolm MacDonald; membina persefahaman kaum.',
    'Sistem Ahli April 1951 — Dato\' Onn (Hal Ehwal Dalam Negeri), Thuraisingham (Pelajaran), Lee Tiang Keng (Kesihatan).',
    'Laporan Barnes 1951 vs Fenn-Wu 1951.',
    'Ordinan Pelajaran 1952; Laporan Woodhead 1955 (Sarawak & Sabah).',
    'Penyata Razak 1956: bahasa Melayu bahasa kebangsaan; sukatan sama.',
    'UMNO–MCA bekerjasama dalam pilihan raya Majlis Perbandaran KL 1952; MIC menyertai 1954.'
  ],
  mistakes: [
    'Mengatakan Ahli bertanggungjawab kepada rakyat — mereka bertanggungjawab kepada Pesuruhjaya Tinggi.',
    'Mencampurkan Laporan Barnes (dwibahasa Melayu–Inggeris) dengan Fenn-Wu (kekalkan sekolah Cina).',
    'Menyatakan Laporan Woodhead untuk Tanah Melayu — ia untuk Sarawak dan Sabah.'
  ],
  tips: [
    'Diuji dalam K2 2021 (Jawatankuasa Pelajaran 1956), 2023 (Sistem Ahli) dan 2024 (Ordinan 1952, Woodhead) — keutamaan tinggi.',
    'Hafal jadual laporan pendidikan mengikut tahun; soalan K1 suka tanya padanan laporan–cadangan.',
    'KBAT: kerjasama kaum, pengorbanan pemimpin, pendidikan sebagai alat perpaduan.'
  ],
  modelAnswer: `### Contoh: "Jelaskan ciri-ciri Sistem Ahli." (4 markah)

**F1:** Pemimpin tempatan dilantik mengetuai jabatan. **H1:** Contoh: Dato' Onn Jaafar sebagai Ahli Hal Ehwal Dalam Negeri.
**F2:** Ahli bertanggungjawab kepada Pesuruhjaya Tinggi. **H2:** Mereka tidak dipilih rakyat, jadi tiada tanggungjawab kepada pengundi.

### Contoh KBAT: "Pada pendapat anda, mengapakah pendidikan penting dalam usaha ke arah kemerdekaan?" (4 markah)

Jawapan berkualiti: (1) pendidikan melahirkan pemimpin berilmu yang mampu berunding dengan British; (2) sukatan pelajaran yang sama memupuk perpaduan kaum (Penyata Razak 1956); (3) bahasa Melayu sebagai bahasa kebangsaan menjadi identiti negara merdeka; (4) relevan kini — pendidikan membentuk warganegara yang patriotik. *Setiap hujah wajar yang dikaitkan dengan fakta sejarah = 1 markah.*`
});

CH.push({
  id: 's4c8', form: 4, num: 8, title: 'Pilihan Raya', weight: 'low',
  summary: 'Perkembangan pilihan raya peringkat tempatan, Pilihan Raya Umum Pertama 1955, Majlis Perundangan Persekutuan dan peranan kabinet pertama.',
  notes: `## Perkembangan pilihan raya di Persekutuan Tanah Melayu

Pilihan raya diperkenalkan secara berperingkat sebagai persediaan berkerajaan sendiri:

| Tahun | Pilihan raya |
|---|---|
| Disember 1951 | Pilihan raya **Majlis Perbandaran George Town**, Pulau Pinang — pilihan raya pertama di Tanah Melayu |
| Februari 1952 | Pilihan raya Majlis Perbandaran **Kuala Lumpur** — pakatan UMNO–MCA menang 9 daripada 12 kerusi |
| 1952–1954 | Pilihan raya majlis tempatan dan negeri di pelbagai tempat |
| **27 Julai 1955** | **Pilihan Raya Umum Pertama** (Majlis Perundangan Persekutuan) |

**Sarawak dan Sabah:** pilihan raya awal di peringkat tempatan diadakan kemudian (Sarawak lewat 1950-an, Sabah awal 1960-an), sebagai langkah memperkenalkan demokrasi sebelum pembentukan Malaysia.

## Rundingan sebelum pilihan raya umum

Parti Perikatan menuntut **majoriti ahli Majlis Perundangan Persekutuan dipilih** rakyat. British pada mulanya enggan; Perikatan menghantar rombongan ke London (1954) dan memboikot jawatan kerajaan. Akhirnya dicapai kompromi: **52 daripada 98 kerusi** Majlis Perundangan Persekutuan dipilih melalui pilihan raya — majoriti dipilih buat pertama kali.

## Pilihan Raya Umum 1955

- Bertanding: Perikatan, Parti Negara (Dato' Onn), PAS dan lain-lain.
- Keputusan: **Perikatan menang 51 daripada 52 kerusi**; PAS menang 1 kerusi.
- Faktor kejayaan Perikatan: kerjasama tiga kaum (UMNO–MCA–MIC), manifesto menuntut kemerdekaan dalam masa empat tahun, kepimpinan Tunku Abdul Rahman, pembahagian kerusi yang adil.
- **Tunku Abdul Rahman** dilantik **Ketua Menteri**.

## Majlis Perundangan Persekutuan

| Aspek | 1948 | 1955 |
|---|---|---|
| Cara pelantikan ahli | Semua dilantik | 52 dipilih, selebihnya dilantik |
| Kesan | Suara rakyat terhad | Kerajaan bertanggungjawab kepada rakyat; asas sistem demokrasi berparlimen |

**Kesan penubuhan Majlis Perundangan Persekutuan 1955:** rakyat memilih wakil sendiri, pemimpin tempatan mendapat pengalaman menggubal undang-undang, menguatkan hujah untuk menuntut kemerdekaan.

## Kabinet pertama Persekutuan Tanah Melayu (1955)

Kabinet dianggotai menteri tempatan dari UMNO, MCA dan MIC serta beberapa pegawai British. Antaranya **Tunku Abdul Rahman** (Ketua Menteri dan Hal Ehwal Dalam Negeri), **Tun Abdul Razak** (Pelajaran) dan **Kolonel H.S. Lee** (Pengangkutan).

**Peranan kabinet pertama:**
1. **Menuntut kemerdekaan** — membawa kepada Rundingan London 1956.
2. **Menangani komunis** — tawaran pengampunan, Rundingan Baling (1955).
3. **Membentuk dasar pendidikan** — Jawatankuasa Pelajaran 1956 (Penyata Razak).
4. **Pembangunan ekonomi** — FELDA (1956), Rancangan Malaya Pertama (1956–1960).
5. **Malayanisasi** — menggantikan pegawai British dengan pegawai tempatan.

> **Nilai:** amalan demokrasi, menghormati keputusan rakyat, kerjasama kaum.`,
  keyPoints: [
    'Pilihan raya pertama: Majlis Perbandaran George Town, Disember 1951.',
    'Pilihan raya Majlis Perbandaran KL, Februari 1952 — UMNO–MCA menang 9/12.',
    'PRU pertama: 27 Julai 1955; 52 kerusi dipilih daripada 98 ahli.',
    'Perikatan menang 51/52; PAS 1.',
    'Tunku Abdul Rahman menjadi Ketua Menteri.',
    'Kabinet pertama: menuntut merdeka, menangani komunis, pendidikan, Malayanisasi.'
  ],
  mistakes: [
    'Menyebut PRU 1955 memilih Parlimen/Dewan Rakyat — sebenarnya Majlis Perundangan Persekutuan.',
    'Menyatakan Tunku dilantik Perdana Menteri pada 1955 — jawatannya Ketua Menteri; Perdana Menteri selepas merdeka.',
    'Mengatakan Perikatan menang semua kerusi — PAS menang 1.'
  ],
  tips: [
    'Bab ini tidak diuji khusus dalam K2 2021–2024 (KMJ), tetapi angka 52/98 dan 51/52 sangat sesuai untuk soalan K1.',
    'Untuk soalan peranan kabinet, susun ikut bidang: politik, keselamatan, pendidikan, ekonomi.',
    'Kaitkan dengan T5 Bab 3 (amalan pilihan raya dalam demokrasi berparlimen).'
  ],
  modelAnswer: `### Contoh: "Jelaskan faktor kejayaan Parti Perikatan dalam Pilihan Raya Umum 1955." (6 markah)

**F1:** Kerjasama tiga kaum. **H1:** UMNO, MCA dan MIC bersatu dan berkongsi kerusi, menarik sokongan pengundi pelbagai kaum.
**F2:** Manifesto menuntut kemerdekaan. **H2:** Perikatan berjanji mencapai kemerdekaan dalam tempoh empat tahun.
**F3:** Kepimpinan berwibawa. **H3:** Tunku Abdul Rahman diterima ramai sebagai pemimpin yang bertolak ansur.

*Tip:* untuk soalan "faktor kejayaan", setiap faktor perlu bukti (angka kerusi, nama parti, isi manifesto).`
});

CH.push({
  id: 's4c9', form: 4, num: 9, title: 'Perlembagaan Persekutuan Tanah Melayu 1957', weight: 'med',
  summary: 'Rundingan kemerdekaan di London 1956, Suruhanjaya Reid, langkah penggubalan perlembagaan dan intipati Perjanjian Persekutuan Tanah Melayu 1957.',
  notes: `## Rundingan kemerdekaan di London (1956)

Rombongan **8 orang** — **4 wakil Raja-raja Melayu** dan **4 wakil Parti Perikatan** (diketuai **Tunku Abdul Rahman**) — berlepas ke London pada awal Januari 1956. Rundingan diadakan di **Lancaster House** (18 Januari – 6 Februari 1956); perjanjian ditandatangani pada **8 Februari 1956**.

**Kepentingan gabungan wakil Raja dan Perikatan:** menunjukkan perpaduan pemimpin tempatan; British tidak dapat memecahbelahkan mereka.

**Perkara yang dipersetujui:**
- Kemerdekaan akan diberikan pada **31 Ogos 1957** jika boleh.
- Sebuah **suruhanjaya bebas** akan menggubal perlembagaan.
- Jawatan Pesuruhjaya Tinggi dikekalkan sehingga merdeka; menteri tempatan mengambil alih portfolio hal ehwal dalam negeri, kewangan, perdagangan dan perindustrian.
- Pegawai British (Malayanisasi) akan digantikan secara berperingkat.
- Bantuan ketenteraan British — perjanjian pertahanan selepas merdeka.

**Sambutan bersejarah:** Tunku mengumumkan tarikh kemerdekaan di **Padang Pahlawan, Bandar Hilir, Melaka** pada **20 Februari 1956**.

## Suruhanjaya Reid

| Anggota | Negara |
|---|---|
| **Lord Reid** (pengerusi) | Britain |
| Sir Ivor Jennings | Britain |
| Sir William McKell | Australia |
| B. Malik | India |
| Hakim Abdul Hamid | Pakistan |

**Terma rujukan:** mewujudkan kerajaan persekutuan yang kuat, mengekalkan kedudukan Raja-raja sebagai raja berperlembagaan, menjamin kedudukan istimewa orang Melayu dan kepentingan sah kaum lain, mewujudkan kewarganegaraan yang sama, Yang di-Pertuan Agong.

**Gerak kerja:** bermesyuarat dan menerima memorandum daripada pelbagai pihak (antaranya memorandum Parti Perikatan yang mengandungi persetujuan antara kaum). Laporan Suruhanjaya Reid diterbitkan pada **Februari 1957**.

## Langkah penggubalan perlembagaan

1. Suruhanjaya Reid menerima memorandum dan mendengar pandangan rakyat.
2. Laporan Reid dikaji oleh **Jawatankuasa Kerja** (wakil Raja-raja, Perikatan dan British).
3. Rundingan lanjut di London (Mei 1957).
4. Perlembagaan diluluskan Majlis Perundangan Persekutuan.
5. **Perjanjian Persekutuan Tanah Melayu 1957** ditandatangani pada **5 Ogos 1957**.

## Intipati perlembagaan / perjanjian 1957

| Perkara | Intipati |
|---|---|
| Pemerintahan | **Raja Berperlembagaan** dan **Demokrasi Berparlimen**; Yang di-Pertuan Agong sebagai Ketua Negara |
| Kewarganegaraan | Melalui kuat kuasa undang-undang, pendaftaran dan naturalisasi; prinsip **jus soli** bagi yang lahir selepas merdeka |
| Kedudukan istimewa | Hak istimewa orang Melayu dijamin, **kepentingan sah kaum lain** dihormati |
| Agama | **Islam agama Persekutuan**; agama lain bebas diamalkan |
| Bahasa | **Bahasa Melayu bahasa kebangsaan**; bahasa lain bebas digunakan (bukan bagi maksud rasmi) |

> **Kontrak sosial / tolak ansur kaum:** orang bukan Melayu mendapat kewarganegaraan yang lebih longgar; orang Melayu mendapat jaminan kedudukan istimewa, Islam, bahasa Melayu dan institusi raja.`,
  keyPoints: [
    'Rombongan London: 4 wakil Raja + 4 wakil Perikatan; Tunku ketua.',
    'Perjanjian London ditandatangani 8 Februari 1956; tarikh merdeka 31 Ogos 1957 diumumkan di Melaka 20 Februari 1956.',
    'Suruhanjaya Reid: Reid, Jennings, McKell, Malik, Abdul Hamid.',
    'Perjanjian PTM 1957 ditandatangani 5 Ogos 1957.',
    'Intipati: raja berperlembagaan, kewarganegaraan, kedudukan istimewa, Islam, bahasa Melayu.',
    'Tolak ansur kaum menjadi asas perlembagaan.'
  ],
  mistakes: [
    'Mengatakan Suruhanjaya Reid dianggotai wakil tempatan — semua anggota dari luar (Britain dan negara Komanwel).',
    'Mencampurkan tarikh 8 Februari 1956 (perjanjian London) dengan 20 Februari 1956 (pengumuman di Melaka).',
    'Menyatakan bahasa lain dilarang — bahasa lain bebas digunakan.'
  ],
  tips: [
    'K2 2022 (KMJ) bertanya perkara yang dipersetujui dalam rundingan London — hafal 4–5 perkara.',
    'Hafal anggota Suruhanjaya Reid mengikut negara — soalan K1 popular.',
    'Kaitkan dengan T5 Bab 2: ciri tradisional dan moden Perlembagaan Persekutuan.'
  ],
  modelAnswer: `### Contoh: "Jelaskan dua perkara yang dipersetujui dalam rundingan kemerdekaan di London 1956." (4 markah)

**F1:** Tanah Melayu akan merdeka pada 31 Ogos 1957 jika boleh. **H1:** Tarikh ini diumumkan oleh Tunku di Padang Pahlawan, Melaka pada 20 Februari 1956.
**F2:** Suruhanjaya bebas akan menggubal perlembagaan. **H2:** Suruhanjaya Reid dipengerusikan oleh Lord Reid dan dianggotai pakar perundangan Komanwel.

*Tip:* "jelaskan" bermaksud perlu ada huraian. Menulis senarai sahaja hanya mendapat separuh markah.`
});

CH.push({
  id: 's4c10', form: 4, num: 10, title: 'Pemasyhuran Kemerdekaan', weight: 'med',
  summary: 'Pengertian kemerdekaan, persediaan sambutan, detik pemasyhuran 31 Ogos 1957, kesan kemerdekaan dan prinsip kedaulatan Persekutuan Tanah Melayu.',
  notes: `## Pengertian kemerdekaan

**Merdeka** bermaksud bebas daripada penjajahan; negara berhak menentukan pemerintahan, undang-undang, ekonomi dan hubungan luar sendiri. Buku teks memaparkan pandangan tokoh seperti **Mahatma Gandhi, Nelson Mandela, Sukarno** dan **Tunku Abdul Rahman**, serta tokoh Sarawak dan Sabah (Tun Temenggung Jugah, Tun Fuad Stephens).

## Persediaan menyambut kemerdekaan

- **Jawatankuasa Persediaan Fizikal** — menyiapkan prasarana termasuk **Stadium Merdeka** di Kuala Lumpur.
- **Jawatankuasa Sambutan** — mengatur upacara, tetamu kenamaan, perarakan dan sambutan di seluruh negara.
- Bendera Persekutuan Tanah Melayu dan lagu kebangsaan **Negaraku** disediakan.

## Detik pemasyhuran

| Masa | Peristiwa |
|---|---|
| 30 Ogos 1957, tengah malam | Di **Padang Kelab Selangor** (kini Dataran Merdeka), lampu dipadamkan; **bendera Union Jack diturunkan** dan **bendera Persekutuan Tanah Melayu dinaikkan** tepat jam 12:00 tengah malam |
| 31 Ogos 1957, pagi | Upacara rasmi di **Stadium Merdeka**: wakil Ratu Elizabeth II, **Duke of Gloucester**, menyerahkan dokumen kemerdekaan kepada Tunku Abdul Rahman |
| 31 Ogos 1957 | Tunku membaca **Pemasyhuran Kemerdekaan** dan melaungkan "Merdeka!" sebanyak tujuh kali; lagu Negaraku dimainkan |

**Yang di-Pertuan Agong pertama:** **Tuanku Abdul Rahman ibni Almarhum Tuanku Muhammad** (Yang di-Pertuan Besar Negeri Sembilan). **Perdana Menteri pertama:** Tunku Abdul Rahman Putra Al-Haj.

## Kesan kemerdekaan

**Politik:**
- Kerajaan sendiri; British tidak lagi campur tangan dalam pentadbiran.
- Persekutuan Tanah Melayu diterima menjadi anggota **Pertubuhan Bangsa-Bangsa Bersatu (PBB)** pada **17 September 1957** dan kekal dalam **Komanwel**.
- Pentadbiran oleh pegawai tempatan (Malayanisasi).

**Ekonomi:**
- Kerajaan merancang pembangunan sendiri — **Rancangan Malaya Pertama (1956–1960)**, **FELDA (1956)** membuka tanah untuk rakyat luar bandar.
- Pembangunan luar bandar dan infrastruktur.

**Sosial:**
- Dasar pendidikan kebangsaan (Ordinan Pelajaran 1957) berasaskan Penyata Razak.
- Bahasa Melayu dimartabatkan; identiti kebangsaan dibina.

## Prinsip kedaulatan Persekutuan Tanah Melayu

1. **Kedaulatan** — kuasa tertinggi pada negara, bebas daripada kuasa asing.
2. **Wilayah** — sempadan yang jelas.
3. **Kerajaan** — kerajaan yang sah dipilih rakyat.
4. **Kedaulatan undang-undang** — Perlembagaan sebagai undang-undang tertinggi.
5. **Lambang kebangsaan** — bendera, lagu kebangsaan, jata negara.
6. **Pengiktirafan sebagai rakyat** — kewarganegaraan.

> **Iktibar:** kemerdekaan dicapai melalui **rundingan secara aman** dan **kerjasama kaum**, bukan pertumpahan darah. Generasi kini bertanggungjawab mengisi kemerdekaan.`,
  keyPoints: [
    'Union Jack diturunkan di Padang Kelab Selangor tengah malam 30/31 Ogos 1957.',
    'Pemasyhuran di Stadium Merdeka pagi 31 Ogos 1957; laungan Merdeka 7 kali.',
    'Duke of Gloucester mewakili Ratu Elizabeth II.',
    'Yang di-Pertuan Agong pertama: Tuanku Abdul Rahman (Negeri Sembilan).',
    'PTM menjadi anggota PBB 17 September 1957.',
    'Kesan kemerdekaan: politik, ekonomi, sosial.'
  ],
  mistakes: [
    'Menyatakan bendera diturunkan di Stadium Merdeka — penurunan Union Jack berlaku di Padang Kelab Selangor.',
    'Menyebut Tunku Abdul Rahman sebagai Yang di-Pertuan Agong pertama — YDPA pertama ialah Tuanku Abdul Rahman (Negeri Sembilan).',
    'Mengatakan Malaysia merdeka pada 1957 — yang merdeka ialah Persekutuan Tanah Melayu; Malaysia dibentuk 1963.'
  ],
  tips: [
    'K2 2023 (KMJ) meminta kronologi pemasyhuran — hafal urutan tengah malam → pagi.',
    'K2 2022 meminta maksud merdeka — sediakan definisi yang menyebut kebebasan politik, ekonomi dan sosial.',
    'Untuk "buktikan kemerdekaan membawa kebaikan", beri bukti konkrit: PBB, FELDA, Penyata Razak.'
  ],
  modelAnswer: `### Contoh: "Buktikan bahawa kemerdekaan membawa kebaikan kepada negara." (6 markah)

**F1:** Negara bebas menentukan hubungan luar. **H1:** PTM menjadi anggota PBB pada 17 September 1957.
**F2:** Kerajaan merancang ekonomi sendiri. **H2:** FELDA ditubuhkan untuk membuka tanah baharu kepada rakyat miskin luar bandar.
**F3:** Identiti kebangsaan dibina. **H3:** Bahasa Melayu dijadikan bahasa kebangsaan dan sistem pendidikan kebangsaan dilaksanakan.

*Tip:* kata tugas "buktikan" memerlukan **bukti spesifik** (tarikh, nama agensi). Jawapan umum seperti "negara jadi maju" tidak mendapat markah.`
});

// ============ TINGKATAN 5 ============
CH.push({
  id: 's5c1', form: 5, num: 1, title: 'Kedaulatan Negara', weight: 'med',
  summary: 'Konsep dan jenis kedaulatan, ciri negara berdaulat, kepentingan mewujudkan negara berdaulat dan langkah mempertahankan kedaulatan.',
  notes: `## Konsep kedaulatan

**Takrif:** kedaulatan ialah **kuasa tertinggi** sesebuah negara untuk memerintah wilayah dan rakyatnya tanpa campur tangan kuasa luar. Perkataan "daulat" berasal daripada bahasa Arab *daulah* (negara/kerajaan). Dalam konteks Barat, istilah *sovereignty* dikaitkan dengan kuasa tertinggi pemerintah.

**Pandangan tokoh (buku teks):** Aristotle, Ibn Khaldun, Jean Bodin, Tunku Abdul Rahman dan Tun Dr Mohamed Salleh Abas — secara umum, kedaulatan ialah kuasa mutlak dan tertinggi yang menjadi asas pemerintahan negara.

## Jenis kedaulatan

| Jenis | Maksud | Contoh di Malaysia |
|---|---|---|
| **Tradisional** | Kuasa raja sebagai pemerintah tertinggi | Daulat Sultan Melaka |
| **Moden** | Kuasa berasaskan rakyat dan perlembagaan | Raja Berperlembagaan, Demokrasi Berparlimen |
| **Undang-undang** | Kuasa tertinggi pada perlembagaan/undang-undang | Perkara 4 — Perlembagaan undang-undang utama |
| **Antarabangsa** | Pengiktirafan negara lain dan pertubuhan antarabangsa | Keanggotaan PBB (1957) |

## Ciri negara yang berdaulat

1. **Mempunyai pemerintahan** — kerajaan yang sah dan stabil.
2. **Mempunyai sempadan** — wilayah darat, laut dan udara yang jelas.
3. **Mempunyai perundangan** — undang-undang dan perlembagaan sendiri.
4. **Mempunyai rakyat** — penduduk yang taat setia kepada negara.

## Kepentingan mewujudkan negara berdaulat

- **Keberkesanan pentadbiran** — kerajaan bebas merancang dasar tanpa campur tangan asing.
- **Kemakmuran ekonomi** — negara mengawal sumber dan pelaburan sendiri.
- **Kesejahteraan sosial** — rakyat dilindungi undang-undang dan menikmati keamanan.
- **Kecemerlangan hubungan luar** — negara diiktiraf dan dihormati di persada antarabangsa.

## Langkah mempertahankan kedaulatan

| Langkah | Contoh |
|---|---|
| Kestabilan politik & kemakmuran ekonomi | Pilihan raya berkala, dasar ekonomi seimbang |
| Mengekalkan perpaduan kaum | Rukun Negara, program integrasi |
| Memupuk patriotisme | Sambutan Hari Kebangsaan, Program Latihan Khidmat Negara, pendidikan Sejarah |
| Mengukuhkan pertahanan negara | Angkatan Tentera Malaysia, polis, kerjasama pertahanan |

### Contoh isu kedaulatan wilayah

| Isu | Keputusan |
|---|---|
| Pulau Sipadan dan Ligitan | Mahkamah Keadilan Antarabangsa (ICJ) memutuskan milik **Malaysia** (2002) |
| Pulau Batu Puteh | ICJ memutuskan Batu Puteh milik **Singapura**, **Batuan Tengah milik Malaysia** (2008) |
| Pencerobohan Lahad Datu | Pasukan keselamatan Malaysia menumpaskan pencerobohan bersenjata (2013) |

> **Ancaman kedaulatan** boleh datang dari luar (pencerobohan, pertikaian sempadan) dan dalam (perpecahan kaum, keganasan, ekstremisme). Rakyat berperanan mempertahankannya.

## Kaitan dengan bab lain

- Prinsip kedaulatan PTM 1957 — T4 Bab 10.
- Kedaulatan dalam Perlembagaan — T5 Bab 2 dan Bab 3.
- Pertikaian sempadan sebagai isu global — T5 Bab 10.`,
  keyPoints: [
    'Kedaulatan = kuasa tertinggi negara tanpa campur tangan luar.',
    'Jenis: tradisional, moden, undang-undang, antarabangsa.',
    'Ciri negara berdaulat: pemerintahan, sempadan, perundangan, rakyat.',
    'Kepentingan: pentadbiran berkesan, ekonomi makmur, sosial sejahtera, hubungan luar cemerlang.',
    'Langkah: kestabilan politik, perpaduan, patriotisme, pertahanan.',
    'ICJ: Sipadan & Ligitan milik Malaysia (2002); Batu Puteh milik Singapura (2008).'
  ],
  mistakes: [
    'Hanya menyebut "kedaulatan ialah kuasa" tanpa "tertinggi" dan "tanpa campur tangan luar".',
    'Menyatakan Pulau Batu Puteh milik Malaysia — ICJ memberikannya kepada Singapura.',
    'Mencampurkan "ciri negara berdaulat" (4 ciri) dengan "langkah mempertahankan" (4 langkah).'
  ],
  tips: [
    'K2 2021 (KMJ) menguji konsep dan ciri negara berdaulat serta poster — sediakan takrif lengkap.',
    'Untuk KBAT poster/kempen, kaitkan dengan peranan rakyat: patriotisme, mematuhi undang-undang, menjaga perpaduan.',
    'Gunakan contoh semasa (ICJ, Lahad Datu) sebagai bukti — tetapi pastikan fakta tepat.'
  ],
  modelAnswer: `### Contoh: "Jelaskan konsep kedaulatan." (4 markah)

**F1:** Kedaulatan ialah kuasa tertinggi sesebuah negara. **H1:** Kuasa ini digunakan untuk memerintah wilayah dan rakyat.
**F2:** Negara berdaulat bebas daripada campur tangan kuasa luar. **H2:** Contohnya Malaysia menggubal undang-undang dan dasar luar sendiri serta diiktiraf PBB.

*Tip markah:* KMJ 2021 memuji calon yang menerangkan konsep dari aspek **takrif** dan **contoh/bukti**.`
});

CH.push({
  id: 's5c2', form: 5, num: 2, title: 'Perlembagaan Persekutuan', weight: 'med',
  summary: 'Asas pembentukan (undang-undang negeri Melayu dan Inggeris), sejarah penggubalan, ciri tradisional dan moden serta pindaan 1963 dan 1965.',
  notes: `## Latar belakang: asas pembentukan perlembagaan

**1. Undang-undang Negeri Melayu**
- Hukum Kanun Melaka, Undang-undang Laut Melaka, Undang-undang 99 Perak, Hukum Kanun Pahang.
- **Undang-undang Tubuh Kerajaan Johor (1895)** — perlembagaan bertulis pertama negeri Melayu (Sultan Abu Bakar).
- **Itqan al-Muluk bi Ta'dil al-Suluk, Terengganu (1911)**.
- Ciri: raja sebagai pemerintah, Islam, adat Melayu.

**2. Undang-undang Inggeris**
- **Piagam Keadilan Pertama (1807)** di Pulau Pinang; **Piagam Keadilan Kedua (1826)** untuk Negeri-negeri Selat.
- Sistem mahkamah, undang-undang jenayah, sivil dan konsep keadilan Inggeris diperkenalkan.

## Sejarah penggubalan perlembagaan

| Tahun | Perkembangan |
|---|---|
| 1877 | Majlis Mesyuarat Negeri Perak — permulaan pentadbiran berasaskan majlis dan undang-undang bertulis di bawah British |
| 1946 | Perlembagaan Malayan Union |
| 1948 | Perjanjian Persekutuan Tanah Melayu |
| 1957 | **Perlembagaan Persekutuan Tanah Melayu** (Suruhanjaya Reid) |
| 1963 | Pindaan untuk pembentukan Malaysia |
| 1965 | Pindaan berikutan pemisahan Singapura |

## Ciri utama Perlembagaan Persekutuan

### Ciri tradisional (warisan negara bangsa)
| Ciri | Perkara |
|---|---|
| Pemerintahan beraja | Perkara 32 (Yang di-Pertuan Agong), Perkara 38 (Majlis Raja-Raja) |
| Agama Islam | **Perkara 3** — Islam agama Persekutuan; agama lain bebas diamalkan |
| Bahasa Melayu | **Perkara 152** — bahasa kebangsaan |
| Kedudukan istimewa orang Melayu dan Bumiputera Sabah & Sarawak | **Perkara 153** |

### Ciri moden
| Ciri | Keterangan |
|---|---|
| Kerajaan Persekutuan | Pembahagian kuasa Persekutuan–Negeri (**Perkara 74**, Jadual Kesembilan) |
| Demokrasi berparlimen | Rakyat memilih wakil melalui pilihan raya; Parlimen (**Perkara 44**) |
| Kewarganegaraan | **Perkara 14–31**: kuat kuasa undang-undang, pendaftaran, naturalisasi |

**Keluhuran perlembagaan:** **Perkara 4** — Perlembagaan ialah undang-undang tertinggi; undang-undang yang bercanggah adalah tidak sah. **Kebebasan asasi**: Perkara 5–13.

**Pindaan perlembagaan (Perkara 159):** kebanyakan pindaan memerlukan sokongan **dua pertiga** ahli setiap Dewan; perkara sensitif (seperti kedudukan Raja-raja, Perkara 153, Perkara 152) memerlukan juga **persetujuan Majlis Raja-Raja**.

## Pindaan 1963 dan 1965

**Pindaan 1963 (pembentukan Malaysia):**
- Nama negara menjadi **Malaysia**; Sabah, Sarawak dan Singapura dimasukkan.
- **Struktur mahkamah atasan** disusun semula: Mahkamah Persekutuan; Mahkamah Tinggi Malaya dan **Mahkamah Tinggi Borneo**.
- Jawatan **Yang di-Pertua Negeri** bagi negeri tanpa raja (Pulau Pinang, Melaka, Sabah, Sarawak).
- Perlindungan kepentingan khas Sabah dan Sarawak (contoh: imigresen, kedudukan Bumiputera).

**Pindaan 1965:**
- Mengeluarkan **Singapura** daripada Malaysia (9 Ogos 1965) dan meminda peruntukan berkaitan Singapura.

> **Kenapa penting?** Perlembagaan ialah hasil tolak ansur kaum (kontrak sosial) yang menjamin keharmonian dan kedaulatan negara.`,
  keyPoints: [
    'Asas: undang-undang negeri Melayu + undang-undang Inggeris.',
    'Undang-undang Tubuh Kerajaan Johor 1895; Itqan al-Muluk Terengganu 1911.',
    'Piagam Keadilan 1807 (Pulau Pinang) dan 1826 (NNS).',
    'Ciri tradisional: raja, Islam (Perkara 3), bahasa Melayu (Perkara 152), kedudukan istimewa (Perkara 153).',
    'Ciri moden: kerajaan persekutuan, demokrasi berparlimen, kewarganegaraan.',
    'Perkara 4: Perlembagaan undang-undang tertinggi.',
    'Pindaan 1963: Mahkamah Tinggi Borneo, Yang di-Pertua Negeri; 1965: Singapura keluar.'
  ],
  mistakes: [
    'Meletakkan kewarganegaraan sebagai ciri tradisional — ia ciri moden.',
    'Mengelirukan Perkara 152 (bahasa) dengan Perkara 153 (kedudukan istimewa).',
    'Mengatakan semua pindaan perlu persetujuan Majlis Raja-Raja — hanya perkara tertentu.'
  ],
  tips: [
    'K2 2022 (asas undang-undang, sejarah penggubalan) dan 2024 (ciri tradisional & moden) — fokus pada jadual ciri.',
    'Hafal nombor Perkara utama: 3, 4, 32, 38, 44, 74, 152, 153, 159.',
    'Soalan KBAT: kesan jika perlembagaan tidak dipatuhi / cara rakyat mempertahankan perlembagaan.'
  ],
  modelAnswer: `### Contoh: "Jelaskan ciri tradisional dalam Perlembagaan Persekutuan." (8 markah)

**F1:** Pemerintahan beraja. **H1:** Yang di-Pertuan Agong ialah Ketua Utama Negara dan Majlis Raja-Raja dikekalkan.
**F2:** Islam agama Persekutuan. **H2:** Perkara 3 — agama lain boleh diamalkan dengan aman.
**F3:** Bahasa Melayu bahasa kebangsaan. **H3:** Perkara 152 — digunakan untuk maksud rasmi.
**F4:** Kedudukan istimewa orang Melayu dan Bumiputera. **H4:** Perkara 153 — termasuk kuota perkhidmatan awam, biasiswa dan permit.

*Tip:* menyebut nombor Perkara menunjukkan ketepatan fakta dan menguatkan huraian.`
});

CH.push({
  id: 's5c3', form: 5, num: 3, title: 'Raja Berperlembagaan dan Demokrasi Berparlimen', weight: 'high',
  summary: 'Latar belakang pemerintahan beraja, sejarah Majlis Raja-Raja (Durbar 1897 hingga kini), kuasa Yang di-Pertuan Agong, pengasingan kuasa dan keunikan demokrasi berparlimen Malaysia.',
  notes: `## Latar belakang pemerintahan beraja dan demokrasi

| Zaman | Kedudukan raja |
|---|---|
| Kesultanan Melayu Melaka | Raja berkuasa mutlak, berdaulat (konsep daulat & derhaka) |
| Sebelum Perang Dunia Kedua | Raja kekal ketua negeri tetapi kuasa sebenar dipegang Residen/Penasihat British (kecuali agama Islam dan adat) |
| Pendudukan Jepun | Raja dikekalkan untuk hal agama dan adat sahaja |
| Selepas Perang (Malayan Union) | Kuasa raja dihapuskan — dibantah hebat |
| PTM 1948 | Kedaulatan raja dikembalikan |
| Selepas merdeka (1957) | **Raja Berperlembagaan** — raja bertindak mengikut perlembagaan dan nasihat kerajaan |

## Sejarah Majlis Raja-Raja

1. **Durbar pertama (1897)** di **Kuala Kangsar** — persidangan raja-raja **Negeri-negeri Melayu Bersekutu** (Perak, Selangor, Negeri Sembilan, Pahang).
2. **Majlis Sultan-sultan** semasa Malayan Union — badan penasihat tanpa kuasa sebenar.
3. **Majlis Raja-Raja di bawah PTM 1948** — ditubuhkan secara rasmi; persetujuan diperlukan bagi undang-undang tertentu dan hal imigresen; raja menjadi lambang kedaulatan negeri.
4. **Selepas merdeka** — Majlis Raja-Raja diperuntukkan dalam **Perkara 38**.

**Peranan Majlis Raja-Raja (Perkara 38):** memilih Yang di-Pertuan Agong dan Timbalan; memberi persetujuan kepada pindaan berkaitan kedudukan raja, kedudukan istimewa Melayu dan perkara sensitif; perbincangan dasar negara; hal ehwal agama Islam di peringkat Persekutuan.

## Yang di-Pertuan Agong (YDPA)

- **Ketua Utama Negara** (Perkara 32), dipilih oleh Majlis Raja-Raja untuk tempoh **5 tahun** secara giliran dalam kalangan 9 raja.
- **Kuasa eksekutif** — melantik Perdana Menteri dan menteri; bertindak atas nasihat Jemaah Menteri (Perkara 40).
- **Kuasa perundangan** — sebahagian daripada Parlimen; memanggil, menangguhkan dan membubarkan Parlimen; memperkenan rang undang-undang.
- **Kuasa kehakiman** — melantik hakim atas nasihat PM; memberi pengampunan (Wilayah Persekutuan dan mahkamah tentera).
- **Pemerintah Tertinggi Angkatan Tentera**.
- **Ketua agama Islam** bagi negeri tiada raja dan Wilayah Persekutuan.
- **Kuasa budi bicara:** melantik PM, tidak memperkenankan permintaan membubarkan Parlimen, memanggil mesyuarat Majlis Raja-Raja berkaitan keistimewaan raja.

## Amalan demokrasi dan pengasingan kuasa

**Pilihan raya:** rakyat memilih wakil (Dewan Rakyat dan Dewan Undangan Negeri); dikendalikan oleh **Suruhanjaya Pilihan Raya** (ditubuhkan 1957). **Kebebasan asasi** dijamin (Perkara 5–13).

**Pengasingan kuasa** (idea Montesquieu):

| Badan | Komponen | Fungsi |
|---|---|---|
| **Perundangan (Legislatif)** | Parlimen: YDPA, Dewan Negara, Dewan Rakyat | Menggubal dan meminda undang-undang; meluluskan belanjawan |
| **Eksekutif** | YDPA, Jemaah Menteri diketuai PM | Melaksanakan undang-undang dan dasar kerajaan |
| **Kehakiman** | Mahkamah Persekutuan, Mahkamah Rayuan, Mahkamah Tinggi dan mahkamah rendah | Mentafsir undang-undang, mengadili kes, memastikan keadilan |

**Kepentingan pengasingan kuasa:** mengelakkan penyalahgunaan kuasa, menjamin keadilan, mewujudkan semak dan imbang.

## Keunikan demokrasi berparlimen Malaysia

1. **Gabungan unsur tradisional dan moden** — raja + demokrasi.
2. **Mekanisme semak dan imbang** — tiga badan saling mengawal; raja sebagai penimbang.
3. **Kuasa budi bicara raja**.
4. **Kerjasama politik** — perkongsian kuasa parti pelbagai kaum (contoh: Perikatan, Barisan Nasional).

> Di Malaysia, pengasingan kuasa **tidak mutlak**: contohnya menteri (eksekutif) juga ahli Parlimen (perundangan).`,
  keyPoints: [
    'Durbar pertama 1897 di Kuala Kangsar — raja-raja NNMB.',
    'Majlis Raja-Raja ditubuhkan secara rasmi di bawah PTM 1948; Perkara 38 selepas merdeka.',
    'YDPA dipilih untuk 5 tahun oleh Majlis Raja-Raja.',
    'Pengasingan kuasa: perundangan, eksekutif, kehakiman (Montesquieu).',
    'Parlimen = YDPA + Dewan Negara + Dewan Rakyat.',
    'Keunikan: tradisional + moden, semak dan imbang, budi bicara raja, kerjasama politik.'
  ],
  mistakes: [
    'Menyatakan Durbar 1897 dihadiri semua raja Melayu — hanya raja NNMB.',
    'Menganggap Parlimen hanya Dewan Rakyat — Parlimen juga merangkumi YDPA dan Dewan Negara.',
    'Mengatakan YDPA bertindak sesuka hati — kebanyakan kuasa dijalankan atas nasihat.'
  ],
  tips: [
    'Bab ini diuji K2 2021, 2022 dan 2023 (KMJ) — keutamaan tinggi.',
    'Sediakan jadual tiga badan pemerintahan — fungsi tiga setiap badan (seperti K2 2022).',
    'Untuk KBAT poster raja–rakyat (seperti K2 2023), kaitkan dengan waadat, kesetiaan kepada raja dan negara (Rukun Negara prinsip kedua).'
  ],
  modelAnswer: `### Contoh: "Jelaskan kepentingan konsep pengasingan kuasa." (4 markah)

**F1:** Mengelakkan penyalahgunaan kuasa. **H1:** Kuasa tidak tertumpu pada satu badan sahaja.
**F2:** Mewujudkan semak dan imbang. **H2:** Contoh: mahkamah boleh mengisytiharkan undang-undang yang bercanggah dengan perlembagaan sebagai tidak sah.

*Tip:* untuk soalan fungsi badan pemerintahan, gunakan kata kerja jelas — "menggubal", "melaksanakan", "mentafsir".`
});

CH.push({
  id: 's5c4', form: 5, num: 4, title: 'Sistem Persekutuan', weight: 'med',
  summary: 'Latar belakang sistem persekutuan (1896–1963), pembahagian kuasa Persekutuan, Negeri dan Bersama, kerajaan tempatan, kerjasama Persekutuan–Negeri dan faktor yang mengukuhkannya.',
  notes: `## Konsep

**Sistem persekutuan** ialah sistem pemerintahan yang membahagikan kuasa antara **Kerajaan Pusat (Persekutuan)** dan **Kerajaan Negeri**, dengan pembahagian itu ditetapkan dalam perlembagaan.

## Latar belakang sistem persekutuan di negara kita

| Tahun | Perkembangan |
|---|---|
| **1896** | **Negeri-negeri Melayu Bersekutu (NNMB)** — Perak, Selangor, Negeri Sembilan, Pahang; diketuai **Residen Jeneral** (pertama: Frank Swettenham); pemusatan kuasa |
| 1927 | Penyusunan semula Majlis Mesyuarat Persekutuan sebagai sebahagian usaha mengurangkan pemusatan |
| 1946 | Malayan Union — kerajaan kesatuan, bukan persekutuan (kuasa negeri dihapuskan) |
| **1948** | **Persekutuan Tanah Melayu** — 11 negeri; kuasa negeri dikembalikan |
| **1957** | PTM merdeka — sistem persekutuan dalam Perlembagaan |
| **1963** | **Malaysia** — Sabah, Sarawak dan Singapura menyertai; Sabah dan Sarawak diberi kuasa tambahan |

## Pembahagian kuasa (Perkara 74, Jadual Kesembilan)

| Senarai | Contoh bidang kuasa |
|---|---|
| **Senarai Persekutuan** | Hal ehwal luar, pertahanan, keselamatan dalam negeri, kewarganegaraan, kewangan, perdagangan & perindustrian, pendidikan, kesihatan, pengangkutan |
| **Senarai Negeri** | Tanah, agama Islam & adat Melayu, pertanian & perhutanan, kerajaan tempatan, hari kelepasan negeri |
| **Senarai Bersama** | Kebajikan masyarakat, biasiswa, perancangan bandar, kesihatan awam, perparitan & pengairan |

- Jika undang-undang Negeri bercanggah dengan undang-undang Persekutuan, **undang-undang Persekutuan diutamakan** (Perkara 75).
- **Sabah dan Sarawak** mempunyai kuasa tambahan (contoh: imigresen, undang-undang adat anak negeri).

**Sebab pembahagian kuasa:** mengelakkan pertindihan dan konflik; perkara kepentingan nasional diurus Pusat manakala hal tempatan diurus Negeri; memelihara identiti dan kepentingan negeri; mewujudkan pentadbiran sistematik.

## Kerajaan tempatan

Kerajaan peringkat ketiga di bawah kuasa **Kerajaan Negeri**: Majlis Bandaraya, Majlis Perbandaran, Majlis Daerah. **Peranan:** kebersihan dan pengurusan sisa, lampu jalan, lesen perniagaan, taman rekreasi, kawalan bangunan dan perancangan tempatan — menyentuh kesejahteraan harian rakyat.

## Kerjasama Persekutuan–Negeri

| Bidang | Contoh |
|---|---|
| Pembangunan tanah | FELDA, FELCRA |
| Pembangunan wilayah | KEJORA, DARA, KETENGAH |
| Koridor wilayah | Iskandar Malaysia, NCER (Utara), ECER (Pantai Timur), SCORE (Sarawak), SDC (Sabah) |
| Pemuliharaan khazanah | Taman Negara, taman laut |
| Perumahan | Rumah awal kemerdekaan, Program Perumahan Rakyat (PPR), rumah mampu milik |
| Keselamatan | RASCOM — Pemerintahan Keselamatan Kawasan Rajang (Sarawak); ESSCOM — Kawasan Keselamatan Khas Pantai Timur Sabah (2013) |

## Faktor yang mengukuhkan sistem persekutuan

1. **Keluhuran perlembagaan** — pembahagian kuasa jelas dan dihormati.
2. **Penyelarasan Persekutuan–Negeri** — Mesyuarat Menteri Besar dan Ketua Menteri; majlis dalam perlembagaan (**Majlis Tanah Negara**, **Majlis Kerajaan Tempatan Negara**, **Majlis Kewangan Negara**); majlis yang ditubuhkan kerajaan bagi isu tertentu.
3. **Peruntukan kewangan** Persekutuan kepada negeri (geran).

> Sistem persekutuan berjaya jika ada **tolak ansur dan kerjasama** antara Pusat dan Negeri demi rakyat.`,
  keyPoints: [
    'NNMB 1896 — persekutuan pertama; Residen Jeneral Frank Swettenham.',
    'Malayan Union 1946 bersifat kesatuan; PTM 1948 kembali kepada persekutuan.',
    'Jadual Kesembilan: Senarai Persekutuan, Negeri, Bersama.',
    'Undang-undang Persekutuan mengatasi undang-undang Negeri jika bercanggah.',
    'Kerajaan tempatan di bawah Kerajaan Negeri.',
    'Majlis Tanah Negara, Majlis Kerajaan Tempatan Negara, Majlis Kewangan Negara menyelaraskan Pusat–Negeri.'
  ],
  mistakes: [
    'Meletakkan tanah atau agama Islam dalam Senarai Persekutuan — kedua-duanya Senarai Negeri.',
    'Menyatakan pendidikan di bawah kerajaan negeri — pendidikan Senarai Persekutuan.',
    'Menganggap kerajaan tempatan di bawah Persekutuan secara langsung.'
  ],
  tips: [
    'K2 2024 (KMJ) menguji bidang kuasa Persekutuan, sebab pembahagian kuasa dan peranan kerajaan tempatan.',
    'Hafal 3–4 contoh setiap senarai; sering keluar dalam K1 sebagai padanan.',
    'KBAT: bukti kerajaan tempatan penting kepada kesejahteraan — beri contoh harian (sampah, lampu jalan, lesen).'
  ],
  modelAnswer: `### Contoh: "Buktikan kerajaan tempatan berperanan penting dalam kesejahteraan rakyat." (4 markah)

**F1:** Menjaga kebersihan kawasan. **H1:** Mengutip sampah dan menyelenggara longkang bagi mengelakkan wabak seperti denggi.
**F2:** Menyediakan kemudahan awam. **H2:** Membina taman rekreasi dan memasang lampu jalan demi keselamatan.

*Tip:* soalan "buktikan" memerlukan contoh konkrit yang dilihat dalam kehidupan — KMJ menegur jawapan umum tanpa contoh.`
});

CH.push({
  id: 's5c5', form: 5, num: 5, title: 'Pembentukan Malaysia', weight: 'med',
  summary: 'Idea gagasan Malaysia, rasional pembentukan, reaksi tempatan dan negara jiran, langkah pembentukan (JSKM, Cobbold, JAK), Perjanjian Malaysia 1963 dan Konfrontasi.',
  notes: `## Idea gagasan Malaysia

Idea menyatukan Tanah Melayu, Singapura dan wilayah Borneo telah lama dibincangkan (contoh: Lord Brassey pada 1887; Malcolm MacDonald pada awal 1950-an). Idea ini diumumkan secara rasmi oleh **Tunku Abdul Rahman** pada **27 Mei 1961** di **Hotel Adelphi, Singapura**, dalam ucapan kepada Persatuan Wartawan Luar Negeri Asia Tenggara.

## Rasional pembentukan Malaysia

1. **Keselamatan** — membendung ancaman komunis, terutamanya di Singapura.
2. **Keseimbangan komposisi penduduk** — penyertaan Sabah dan Sarawak mengimbangi penduduk Cina Singapura.
3. **Mempercepat kemerdekaan** Sabah, Sarawak (dan Brunei).
4. **Pembangunan wilayah** — memajukan ekonomi dan sosial Sabah dan Sarawak.

## Reaksi tempatan

| Wilayah | Reaksi |
|---|---|
| PTM | Menyokong |
| Singapura | **Lee Kuan Yew (PAP)** menyokong; Barisan Sosialis menentang. **Referendum 1 September 1962** — majoriti menyokong |
| Sarawak | Pada awalnya ramai menentang (contoh: SUPP); kemudian menyokong selepas penerangan |
| Sabah | **Donald Stephens** pada mulanya menentang, kemudian menyokong; **Tun Datu Mustapha** menyokong |
| Brunei | Sultan Omar Ali Saifuddien III pada awalnya berminat; **Parti Rakyat Brunei (A.M. Azahari)** menentang dan mencetuskan **Pemberontakan Brunei (Disember 1962)**. Brunei akhirnya **tidak menyertai** (isu hasil minyak, kedudukan Sultan dalam Majlis Raja-Raja) |

## Reaksi negara jiran

- **Indonesia** (Presiden **Sukarno**) — menentang; menganggap Malaysia projek neokolonialisme British → **Konfrontasi** (1963–1966), slogan "Ganyang Malaysia".
- **Filipina** (Presiden Macapagal) — menuntut Sabah.
- **Thailand** — menyokong.

## Langkah pembentukan Malaysia

| Langkah | Keterangan |
|---|---|
| Siri lawatan | Pemimpin Sabah dan Sarawak melawat Tanah Melayu untuk melihat pembangunan |
| **Jawatankuasa Setia Kawan Malaysia (JSKM)** | 1961, dipengerusikan **Donald Stephens**; mengumpul pandangan dan memberi penerangan |
| Rundingan London | Tunku berunding dengan British (November 1961) — bersetuju menubuhkan suruhanjaya meninjau pendapat |
| **Suruhanjaya Cobbold** | 1962, pengerusi **Lord Cobbold**; meninjau pendapat rakyat Sabah dan Sarawak — kira-kira 1/3 menyokong penuh, 1/3 menyokong dengan syarat, 1/3 menentang/mahu merdeka dahulu |
| Referendum Singapura | 1 September 1962 |
| **Jawatankuasa Antara Kerajaan (JAK)** | Pengerusi **Lord Lansdowne**; merangka perlindungan hak Sabah dan Sarawak (Perkara 20 Sabah, Perkara 18 Sarawak) |

## Perjanjian Malaysia dan pengisytiharan

- **Perjanjian Malaysia** ditandatangani di **London** pada **9 Julai 1963**.
- **Misi PBB** (atas arahan Setiausaha Agung U Thant) meninjau pendapat rakyat Sabah dan Sarawak dan mengesahkan majoriti menyokong.
- Malaysia diisytiharkan pada **16 September 1963** (tarikh asal 31 Ogos 1963 ditangguhkan untuk memberi laluan kepada misi PBB).

## Konfrontasi dan usaha menamatkan

**Peristiwa penentangan:** serangan di Kalabakan, Sabah (Disember 1963); pendaratan tentera Indonesia di Pontian dan Labis, Johor (1964); pengeboman di Singapura (MacDonald House, 1965).

**Langkah menamatkan:** pertukaran pemerintahan di Indonesia (Suharto); rundingan **Tun Abdul Razak** dengan **Adam Malik** di Bangkok (1966); **perjanjian damai ditandatangani di Jakarta pada 11 Ogos 1966**.`,
  keyPoints: [
    'Tunku mengumumkan idea Malaysia 27 Mei 1961 di Hotel Adelphi, Singapura.',
    'Rasional: keselamatan, keseimbangan kaum, mempercepat kemerdekaan, pembangunan wilayah.',
    'JSKM 1961 (Donald Stephens); Suruhanjaya Cobbold 1962; JAK (Lord Lansdowne).',
    'Referendum Singapura 1 September 1962.',
    'Perjanjian Malaysia 9 Julai 1963 (London); Malaysia diisytiharkan 16 September 1963.',
    'Konfrontasi Indonesia berakhir dengan perjanjian 11 Ogos 1966.'
  ],
  mistakes: [
    'Menyebut Brunei menyertai Malaysia — Brunei menarik diri.',
    'Menyatakan Malaysia dibentuk 31 Ogos 1963 — tarikh sebenar 16 September 1963.',
    'Mengelirukan Suruhanjaya Cobbold (pendapat rakyat) dengan JAK (merangka perlembagaan/syarat).'
  ],
  tips: [
    'K2 2021 (wilayah & reaksi Brunei) dan 2023 (faktor & reaksi Indonesia) — fokus pada reaksi.',
    'Buat jadual reaksi setiap wilayah dan negara jiran — sesuai untuk esei dan K1.',
    'KBAT: kepentingan hubungan baik dengan negara jiran; diplomasi dan rundingan.'
  ],
  modelAnswer: `### Contoh: "Terangkan reaksi Indonesia terhadap gagasan Malaysia." (6 markah)

**F1:** Indonesia menentang pembentukan Malaysia. **H1:** Presiden Sukarno menganggap Malaysia sebagai projek neokolonialisme British.
**F2:** Melancarkan Konfrontasi. **H2:** Slogan "Ganyang Malaysia" dan serangan bersenjata seperti di Kalabakan, Sabah.
**F3:** Menghantar tentera ke Semenanjung. **H3:** Pendaratan di Pontian dan Labis, Johor pada 1964.

*Tip:* dalam esei, akhiri dengan bagaimana konfrontasi tamat (rundingan Bangkok, perjanjian Jakarta 1966) untuk menunjukkan kefahaman menyeluruh.`
});

CH.push({
  id: 's5c6', form: 5, num: 6, title: 'Cabaran selepas Pembentukan Malaysia', weight: 'med',
  summary: 'Cabaran dalaman Sabah dan Sarawak, pemisahan Singapura 1965, ancaman komunis di Sarawak dan Semenanjung, isu pembangunan ekonomi dan Tragedi 13 Mei 1969.',
  notes: `## Cabaran dalaman Malaysia

**Pembangunan dan sosioekonomi di Sarawak dan Sabah:** ekonomi bergantung pada pertanian dan bahan mentah; perhubungan dan pengangkutan terhad; kemudahan pendidikan kurang. Langkah: **mempelbagaikan kegiatan ekonomi**, **memajukan sistem perhubungan dan pengangkutan** (jalan raya, lapangan terbang), **memajukan sistem pendidikan** (sekolah dan latihan guru).

**Cabaran politik di Sarawak** dan **cabaran perpaduan kaum** di seluruh negara akibat jurang ekonomi dan politik perkauman.

## Pemisahan Singapura (9 Ogos 1965)

**Faktor pemisahan:**

| Aspek | Keterangan |
|---|---|
| **Politik** | PAP bertanding dalam Pilihan Raya Umum 1964 di Semenanjung (menang 1 kerusi) — dilihat melanggar persefahaman; slogan **"Malaysian Malaysia"** (kesamarataan mutlak) mencabar Perkara 153; penubuhan Malaysian Solidarity Convention (1965) |
| **Ekonomi** | Pertikaian sumbangan hasil Singapura kepada Kerajaan Pusat; isu pasaran bersama dan pembangunan Sabah–Sarawak |
| **Perkauman** | **Rusuhan kaum di Singapura (Julai dan September 1964)**; ketegangan semakin memuncak |

**Kronologi ringkas:** ketegangan politik 1964 → rusuhan kaum 1964 → Tunku (ketika itu di London) memutuskan pemisahan adalah jalan terbaik bagi mengelakkan pertumpahan darah → **Parlimen meluluskan pindaan perlembagaan** → **Singapura berpisah pada 9 Ogos 1965**.

## Menangani ancaman komunis

### Sarawak
- **Bentuk ancaman:** Pertubuhan Komunis Sarawak (SCO) dan pasukan gerila (antaranya PARAKU) menyerang pasukan keselamatan, memeras penduduk dan menyebarkan propaganda.
- **Usaha mengatasi:** perang saraf, operasi ketenteraan, **Operasi Hammer (1965)** — memindahkan penduduk ke kawasan berkawal untuk memutuskan bekalan, langkah pembanterasan lain. Ramai komunis meletak senjata melalui **Perjanjian Sri Aman (1973/1974)**.

### Semenanjung Malaysia (Darurat Kedua, 1968–1989)
- **Bentuk ancaman:** PKM melancarkan semula perjuangan bersenjata (1968); pembunuhan anggota keselamatan dan orang awam (contoh: Ketua Polis Negara Tan Sri Abdul Rahman Hashim dibunuh pada 1974); **pengeboman Tugu Negara (1975)**.
- **Usaha mengatasi:** **strategi Counterinsurgency (COIN)** — gabungan operasi ketenteraan dan pembangunan (Keselamatan dan Pembangunan, KESBAN); **perjanjian kerjasama sempadan dengan Thailand**; pembangunan kawasan pedalaman.
- **Penamatan:** **Perjanjian Damai Haadyai, 2 Disember 1989** — PKM meletakkan senjata.

## Isu pembangunan dan ekonomi

**Rancangan Malaysia Pertama (RMP, 1966–1970)** memberi tumpuan kepada pembangunan luar bandar, pertanian dan prasarana. Namun **jurang ekonomi antara kaum dan wilayah** (bandar–luar bandar) berterusan — kemiskinan tinggi dalam kalangan Bumiputera luar bandar, menjadi punca ketidakpuasan hati.

## Tragedi hubungan antara kaum — 13 Mei 1969

**Latar:** selepas **Pilihan Raya Umum 10 Mei 1969**, perarakan kemenangan dan provokasi perkauman mencetuskan **rusuhan kaum di Kuala Lumpur pada 13 Mei 1969**. Punca jangka panjang: jurang ekonomi, politik perkauman, pengasingan kaum mengikut kawasan dan pekerjaan.

**Langkah mengatasi:**

| Langkah | Keterangan |
|---|---|
| **Darurat** | Diisytiharkan oleh YDPA; Parlimen digantung; perintah berkurung |
| **Majlis Gerakan Negara (MAGERAN)** | Diketuai **Tun Abdul Razak**; mentadbir negara sehingga Parlimen bersidang semula (1971) |
| Peranan Raja | YDPA mengisytiharkan darurat dan menjadi simbol perpaduan |
| Majlis Perundingan Negara | Membincangkan punca dan penyelesaian jangka panjang |
| Hasil jangka panjang | **Rukun Negara (31 Ogos 1970)**, **Dasar Ekonomi Baru (1971)**, Jabatan Perpaduan Negara, Akta Hasutan dipinda (isu sensitif) |

> **Iktibar:** perpaduan kaum ialah asas keamanan; jurang ekonomi perlu dirapatkan; rundingan lebih baik daripada konflik.`,
  keyPoints: [
    'Singapura berpisah 9 Ogos 1965 — faktor politik, ekonomi, perkauman.',
    'Slogan "Malaysian Malaysia" oleh PAP mencabar kedudukan istimewa Melayu.',
    'Operasi Hammer (1965) di Sarawak; Perjanjian Sri Aman.',
    'Darurat Kedua 1968–1989; pengeboman Tugu Negara 1975; Perjanjian Damai Haadyai 2 Disember 1989.',
    'RMP 1966–1970.',
    'Tragedi 13 Mei 1969 → Darurat, MAGERAN (Tun Abdul Razak), Rukun Negara 1970, DEB 1971.'
  ],
  mistakes: [
    'Menyatakan Singapura dipecat tanpa sebab — terangkan faktor politik, ekonomi, perkauman.',
    'Mengelirukan Darurat 1948–1960 dengan Darurat Kedua 1968–1989.',
    'Menyebut MAGERAN diketuai Tunku — diketuai Tun Abdul Razak.'
  ],
  tips: [
    'K2 2022 (Singapura) dan 2024 (komunis di Semenanjung) — hafal faktor dan kronologi.',
    'Soalan KBAT 2022 bertanya "boleh dielakkan atau tidak" — pilih pendirian, beri 3–4 hujah berfakta.',
    'Kaitkan 13 Mei dengan Bab 7 (Rukun Negara) dan Bab 8 (DEB) untuk jawapan bersepadu.'
  ],
  modelAnswer: `### Contoh: "Terangkan faktor pemisahan Singapura daripada Malaysia." (8 markah)

**F1:** Faktor politik. **H1:** PAP bertanding dalam PRU 1964 di Semenanjung, menimbulkan ketegangan dengan Perikatan.
**F2:** Slogan "Malaysian Malaysia". **H2:** Menuntut kesamarataan mutlak yang mencabar kedudukan istimewa orang Melayu (Perkara 153).
**F3:** Faktor ekonomi. **H3:** Pertikaian sumbangan hasil Singapura kepada Kerajaan Pusat.
**F4:** Faktor perkauman. **H4:** Rusuhan kaum di Singapura pada 1964 menimbulkan kebimbangan pertumpahan darah.

*Tip:* susun mengikut aspek (politik, ekonomi, sosial) — memudahkan pemeriksa dan memastikan liputan.`
});

CH.push({
  id: 's5c7', form: 5, num: 7, title: 'Membina Kesejahteraan Negara', weight: 'high',
  summary: 'Perpaduan dan integrasi nasional, Dasar Pendidikan Kebangsaan, bahasa Melayu sebagai bahasa ilmu dan perpaduan, Dasar Kebudayaan Kebangsaan, sukan dan Rukun Negara.',
  notes: `## Perpaduan dan integrasi nasional

- **Perpaduan kaum:** keadaan rakyat pelbagai kaum hidup bersatu, harmoni dan saling menghormati.
- **Integrasi nasional:** proses menyatupadukan rakyat dan wilayah (termasuk Semenanjung, Sabah, Sarawak) di bawah satu identiti nasional.
- **Latar:** dasar "pecah dan perintah" British memisahkan kaum mengikut kawasan dan pekerjaan; Tragedi 13 Mei 1969 menunjukkan bahaya perpecahan.
- **Memperkasa:** dasar kerajaan, sekolah, sukan, budaya, Rukun Negara.

## Dasar Pendidikan Kebangsaan

| Dokumen | Tahun | Intipati |
|---|---|---|
| Penyata Razak | 1956 | Bahasa Melayu bahasa kebangsaan; sukatan sama (asas dasar) |
| **Laporan Rahman Talib** | 1960 | Mengkaji pelaksanaan Penyata Razak; pendidikan percuma peringkat rendah; asas **Akta Pelajaran 1961** |
| **Laporan Jawatankuasa Kabinet** | 1979 | Diketuai Dr Mahathir; penekanan **3M** (membaca, menulis, mengira), pendidikan kerohanian dan vokasional |
| **Falsafah Pendidikan Kebangsaan** | 1988 | Insan seimbang dan harmonis dari segi intelek, rohani, emosi dan jasmani |
| **Akta Pendidikan 1996** | 1996 | Menggantikan Akta 1961; bahasa kebangsaan bahasa pengantar utama sistem pendidikan kebangsaan |

## Bahasa Melayu sebagai bahasa ilmu dan perpaduan

- **Dewan Bahasa dan Pustaka (DBP)** ditubuhkan pada **1956** — membina istilah, menerbitkan buku, memartabatkan bahasa.
- **Akta Bahasa Kebangsaan 1963/67** — bahasa Melayu bahasa rasmi tunggal pentadbiran.
- Bahasa Melayu sebagai bahasa pengantar sekolah dan universiti.
- **Universiti Kebangsaan Malaysia (UKM, 1970)** — pusat keilmuan berbahasa Melayu.

**Langkah memartabatkan bahasa Melayu:** kempen Bulan Bahasa Kebangsaan, penggunaan dalam urusan rasmi, penerbitan ilmiah, penggunaan di persada antarabangsa.

## Dasar Kebudayaan Kebangsaan (DKK)

Berasaskan **Kongres Kebudayaan Kebangsaan (1971)**. **Tiga prinsip:**
1. Berteraskan **kebudayaan rakyat asal rantau ini**.
2. **Unsur kebudayaan lain yang sesuai dan wajar** boleh diterima.
3. **Islam menjadi unsur penting** dalam pembentukan kebudayaan kebangsaan.

**Matlamat:** mengukuhkan perpaduan melalui kebudayaan, memupuk identiti kebangsaan, memperkaya kebudayaan. **Pelaksanaan:** agensi kebudayaan kerajaan, festival seperti **Citrawarna Malaysia**, penggiat budaya (seniman, karyawan).

## Sukan sebagai alat perpaduan

- Sukan di sekolah dan institusi: **MSSM**, **Majlis Sukan Universiti Malaysia (MASUM)**, **Sukan Malaysia (SUKMA)**.
- **Penganjuran sukan** besar seperti **Sukan Komanwel 1998 di Kuala Lumpur**.
- **"Kejayaan Malaysia, kejayaan bersama"** — kejayaan atlet pelbagai kaum (contoh: Piala Thomas) dirai seluruh rakyat.
- Laungan **"Malaysia Boleh"** membangkitkan semangat.
- Peranan organisasi sukan dan **kepimpinan berwibawa**.

## Rukun Negara — tonggak kesejahteraan

Diisytiharkan pada **31 Ogos 1970** sebagai respons kepada Tragedi 13 Mei 1969.

| Cita-cita (matlamat) | Prinsip |
|---|---|
| Mencapai perpaduan yang lebih erat | 1. Kepercayaan kepada Tuhan |
| Memelihara cara hidup demokratik | 2. Kesetiaan kepada Raja dan Negara |
| Mencipta masyarakat yang adil | 3. Keluhuran Perlembagaan |
| Menjamin cara liberal terhadap tradisi kebudayaan yang pelbagai | 4. Kedaulatan Undang-undang |
| Membina masyarakat progresif berasaskan sains dan teknologi | 5. Kesopanan dan Kesusilaan |

> **Kesejahteraan** dibina melalui perpaduan, pendidikan, bahasa, budaya, sukan dan nilai bersama.`,
  keyPoints: [
    'Perpaduan = harmoni antara kaum; integrasi nasional = penyatuan rakyat dan wilayah.',
    'Laporan Rahman Talib 1960 → Akta Pelajaran 1961; Laporan Jawatankuasa Kabinet 1979; FPK 1988; Akta Pendidikan 1996.',
    'DBP 1956; Akta Bahasa Kebangsaan; UKM 1970.',
    'DKK (Kongres Kebudayaan Kebangsaan 1971): 3 prinsip.',
    'Rukun Negara 31 Ogos 1970: 5 prinsip, 5 cita-cita.',
    'Sukan: SUKMA, MASUM, Sukan Komanwel 1998, "Malaysia Boleh".'
  ],
  mistakes: [
    'Menyusun prinsip Rukun Negara tidak mengikut urutan — urutan sering diuji (contoh: prinsip kedua).',
    'Mencampurkan Laporan Rahman Talib (1960) dengan Penyata Razak (1956).',
    'Menyatakan DKK menolak semua budaya lain — budaya lain yang sesuai boleh diterima.'
  ],
  tips: [
    'Bab paling kerap muncul K2 (2022 sukan, 2023 perpaduan & integrasi, 2024 DKK & bahasa Melayu, 2021 prinsip Rukun Negara) — keutamaan tinggi.',
    'Hafal Rukun Negara secara verbatim mengikut urutan.',
    'Soalan cadangan/KBAT: beri langkah praktikal (aktiviti sekolah, media sosial positif, rumah terbuka) + kaitkan dengan dasar.'
  ],
  modelAnswer: `### Contoh: "Jelaskan prinsip utama Dasar Kebudayaan Kebangsaan." (6 markah)

**F1:** Berteraskan kebudayaan rakyat asal rantau ini. **H1:** Budaya Melayu dan Bumiputera menjadi asas identiti kebangsaan.
**F2:** Unsur budaya lain yang sesuai dan wajar diterima. **H2:** Contoh: unsur budaya Cina dan India yang tidak bercanggah dengan prinsip pertama dan ketiga.
**F3:** Islam unsur penting. **H3:** Nilai Islam membentuk akhlak dan moral masyarakat.

### Contoh KBAT: "Cadangkan langkah memperkukuh perpaduan selain melalui sukan." (4 markah)
Contoh hujah: Rancangan Integrasi Murid Untuk Perpaduan (RIMUP) di sekolah; sambutan rumah terbuka; penggunaan bahasa Melayu sebagai bahasa perpaduan; menghayati Rukun Negara. *1 markah setiap cadangan munasabah yang dihuraikan.*`
});

CH.push({
  id: 's5c8', form: 5, num: 8, title: 'Membina Kemakmuran Negara', weight: 'med',
  summary: 'Pembentukan dan pelaksanaan Dasar Ekonomi Baru (1971–1990), Dasar Pembangunan Nasional (1991–2000) dan pencapaian kedua-duanya.',
  notes: `## Dasar Ekonomi Baru (DEB), 1971–1990

### Latar belakang pembentukan
- **Jurang ekonomi antara kaum dan wilayah** — Bumiputera banyak di sektor pertanian tradisional luar bandar, kadar kemiskinan tinggi.
- Pengenalan kaum mengikut fungsi ekonomi (warisan dasar British).
- **Tragedi 13 Mei 1969** menunjukkan ketidakseimbangan ekonomi mengancam perpaduan.
- Dilancarkan melalui **Rancangan Malaysia Kedua (1971–1975)**.

### Matlamat: strategi serampang dua mata
1. **Membasmi kemiskinan** tanpa mengira kaum.
2. **Menyusun semula masyarakat** untuk menghapuskan pengenalan kaum mengikut fungsi ekonomi.

Sasaran penting: pemilikan modal saham Bumiputera **30%** menjelang 1990.

### Pelaksanaan DEB
| Strategi | Contoh |
|---|---|
| Meningkatkan taraf hidup | Kemudahan asas luar bandar, subsidi pertanian |
| **Rancangan Buku Hijau (1974)** | Menggalakkan rakyat menanam sayur dan menternak untuk menambah pendapatan dan bekalan makanan |
| Peranan agensi kerajaan | **MARA**, **PERNAS**, **UDA**, **PNB** (Amanah Saham Nasional) |
| Pembangunan tanah | **FELDA**, **FELCRA**, **RISDA** |
| Pembangunan wilayah | Lembaga kemajuan wilayah seperti **KEJORA**, **DARA**, **KETENGAH**; bandar baharu |
| Pemilikan modal saham | PNB dan ASN membolehkan Bumiputera memiliki saham |
| Industri kecil dan sederhana (IKS) | Latihan, pinjaman, bimbingan usahawan |
| Pendidikan tenaga kerja mahir | Biasiswa, institusi seperti ITM dan maktab latihan |

## Dasar Pembangunan Nasional (DPN), 1991–2000

### Latar belakang
DEB tamat pada 1990; sasaran belum tercapai sepenuhnya; perlu pembangunan yang **seimbang**. DPN dilaksanakan melalui **Rangka Rancangan Jangka Panjang Kedua (RRJP2)** dan selaras dengan **Wawasan 2020** (dilancarkan 1991 oleh Tun Dr Mahathir Mohamad — matlamat negara maju menjelang 2020).

### Matlamat dan strategi
- **Pembangunan seimbang** antara sektor, kaum dan wilayah.
- Mengekalkan serampang dua mata DEB tetapi dengan pendekatan baharu: memberi tumpuan kepada **golongan termiskin**, mewujudkan **Masyarakat Perdagangan dan Perindustrian Bumiputera (MPPB)**, penyertaan sektor swasta, pembangunan **sumber manusia** dan **sains & teknologi**.

### Pelaksanaan DPN
| Bidang | Contoh |
|---|---|
| Pembasmian kemiskinan | Program Pembangunan Rakyat Termiskin (PPRT) |
| Penyusunan semula masyarakat | Usahawan Bumiputera, MPPB |
| Penyusunan semula modal saham | Penswastaan, pelaburan |
| Pembangunan wilayah | Kawasan perindustrian baharu, koridor |

## Pencapaian DEB dan DPN

**Aspek ekonomi:**
- Perindustrian berteknologi tinggi — elektronik, semikonduktor; **Koridor Raya Multimedia (MSC, 1996)**, **Cyberjaya** dan **Putrajaya**.
- **Kawasan perindustrian baharu** dan zon perdagangan bebas (contoh: Bayan Lepas, Pulau Pinang).
- **Industri kereta nasional** — **PROTON** (projek di bawah dasar perindustrian berat HICOM; kereta pertama **Proton Saga, 1985**) dan **Perodua** (1990-an).
- Kadar kemiskinan menurun dengan ketara; struktur ekonomi beralih daripada pertanian kepada perindustrian.

**Aspek sosial:**
- Lebih ramai Bumiputera dalam profesion dan sektor moden.
- Akses pendidikan dan kesihatan bertambah baik; prasarana luar bandar meningkat.
- Kelas menengah pelbagai kaum berkembang.

> **Kesimpulan:** kemakmuran menjadi asas kestabilan dan perpaduan; ia memerlukan dasar yang adil dan penglibatan rakyat.`,
  keyPoints: [
    'DEB 1971–1990: membasmi kemiskinan + menyusun semula masyarakat.',
    'Sasaran 30% modal saham Bumiputera menjelang 1990.',
    'Agensi: MARA, PERNAS, UDA, PNB, FELDA, FELCRA, RISDA.',
    'Rancangan Buku Hijau 1974.',
    'DPN 1991–2000: pembangunan seimbang; Wawasan 2020 (1991).',
    'Pencapaian: MSC 1996, Proton Saga 1985, kawasan perindustrian, kemiskinan menurun.'
  ],
  mistakes: [
    'Menulis matlamat DEB "membasmi kemiskinan orang Melayu" — sebenarnya tanpa mengira kaum.',
    'Mengelirukan DEB (1971–1990) dengan DPN (1991–2000).',
    'Memberi angka kemiskinan yang tidak pasti — lebih selamat sebut "menurun dengan ketara" jika tidak hafal angka buku teks.'
  ],
  tips: [
    'K2 2021 (latar DEB & langkah) dan 2023 (kejayaan perindustrian) — kuasai jadual pelaksanaan.',
    'Sebut nama agensi bersama fungsinya: contoh "MARA — membantu usahawan dan pendidikan Bumiputera".',
    'KBAT: peranan rakyat dalam pembangunan, menjaga harta awam, kelestarian alam sekitar (nilai DSKP).'
  ],
  modelAnswer: `### Contoh: "Jelaskan latar belakang pembentukan Dasar Ekonomi Baru." (6 markah)

**F1:** Jurang ekonomi antara kaum. **H1:** Bumiputera ramai dalam pertanian tradisional berpendapatan rendah.
**F2:** Pengenalan kaum mengikut fungsi ekonomi. **H2:** Warisan dasar British memisahkan kaum mengikut pekerjaan dan kawasan.
**F3:** Tragedi 13 Mei 1969. **H3:** Ketidakseimbangan ekonomi dikenal pasti sebagai salah satu punca rusuhan kaum.

*Tip:* soalan "langkah kerajaan mencapai matlamat DEB" — berikan agensi + fungsi + contoh program.`
});

CH.push({
  id: 's5c9', form: 5, num: 9, title: 'Dasar Luar Malaysia', weight: 'high',
  summary: 'Latar belakang hubungan luar (Melaka hingga selepas merdeka), matlamat dan faktor penggubalan dasar luar, peranan Malaysia dalam PBB, Komanwel, ASEAN, NAM dan OIC serta cabarannya.',
  notes: `## Latar belakang dasar luar

| Zaman | Ciri hubungan luar |
|---|---|
| Sebelum Melaka | Kerajaan Alam Melayu berdagang dan menjalin hubungan dengan China dan India |
| Kesultanan Melayu Melaka | Hubungan diplomatik dan perdagangan dengan **China** (perlindungan daripada ancaman Siam), Siam, Pasai, Majapahit, Ryukyu; menghantar utusan |
| Zaman British | Hubungan luar dikawal sepenuhnya oleh British |
| Selepas merdeka | Malaysia menggubal dasar luar sendiri |

**Perkembangan selepas merdeka:**
- **Tunku Abdul Rahman (1957–1970):** pro-Barat dan anti-komunis; Komanwel; perjanjian pertahanan dengan Britain (AMDA, 1957).
- **Tun Abdul Razak (1970–1976):** **berkecuali**; **ZOPFAN (1971)**; hubungan diplomatik dengan **China (1974)**.
- **Tun Hussein Onn (1976–1981):** mengukuhkan ASEAN.
- **Tun Dr Mahathir (1981–2003):** **Dasar Pandang ke Timur (1982)**, kerjasama Selatan–Selatan, aktif dalam NAM dan OIC.

## Asas penggubalan dasar luar

**Matlamat:** menjaga **kedaulatan dan kepentingan nasional**, keselamatan, kemakmuran ekonomi, keamanan serantau dan dunia.

**Faktor penggubalan:**
1. **Kedudukan geografi** — di laluan strategik (Selat Melaka, Laut China Selatan).
2. **Ekonomi** — bergantung kepada perdagangan antarabangsa.
3. **Sejarah** — pengalaman penjajahan dan ancaman komunis.
4. **Politik dan ideologi** — sistem demokrasi; menentang komunisme pada era awal.
5. **Kepimpinan** — pendekatan setiap Perdana Menteri.
6. **Keselamatan** — mengelakkan konflik dan ancaman luar.

## Malaysia dalam PBB

- PTM menjadi anggota pada **17 September 1957**.
- Mendukung Piagam PBB; terlibat dalam agensi seperti UNESCO, WHO, FAO.
- **Misi pengaman:** Congo (1960) — misi pertama; juga Namibia, Somalia, Bosnia, Lubnan dan lain-lain.
- Anggota tidak tetap **Majlis Keselamatan PBB** (antaranya 1989–1990, 1999–2000, 2015–2016).
- Tokoh: **Tan Sri Razali Ismail** — Presiden Perhimpunan Agung PBB (1996–1997).

## Malaysia dalam Komanwel

- **Rancangan Colombo** — bantuan teknikal dan biasiswa.
- Kerjasama pertahanan — **Perjanjian Pertahanan Lima Kuasa (FPDA, 1971)**: Malaysia, Singapura, Britain, Australia, New Zealand.
- **Menentang dasar aparteid** Afrika Selatan.
- Tuan rumah **CHOGM 1989** di Kuala Lumpur (Deklarasi Langkawi) dan **Sukan Komanwel 1998**.

## Malaysia dalam ASEAN

- **ASA (1961)** dan **MAPHILINDO (1963)** — percubaan awal kerjasama serantau.
- **ASEAN ditubuhkan 8 Ogos 1967** melalui **Deklarasi Bangkok** — 5 pengasas: Indonesia, Malaysia, Filipina, Singapura, Thailand (Malaysia diwakili Tun Abdul Razak).
- **ZOPFAN (Deklarasi Kuala Lumpur, 27 November 1971)** — Asia Tenggara sebagai Zon Aman, Bebas dan Berkecuali.
- Penyelesaian konflik serantau, kerjasama ekonomi (contoh: AFTA) dan sosial.

## Malaysia dalam NAM dan OIC

- **NAM (Pergerakan Negara-negara Berkecuali):** Malaysia menyertai pada 1970; **tuan rumah Sidang Kemuncak NAM 2003** dan menjadi pengerusi; memperjuangkan kepentingan negara membangun.
- **OIC:** **Tunku Abdul Rahman Setiausaha Agung pertama OIC**; Malaysia tuan rumah Sidang Kemuncak OIC 2003 (Putrajaya) dan pengerusi; isu Palestin, pendidikan (contoh: Universiti Islam Antarabangsa Malaysia), ekonomi.

## Cabaran mengukuhkan dasar luar

Politik antarabangsa (persaingan kuasa besar), politik serantau (tuntutan bertindih, contoh Laut China Selatan), keselamatan dan pertahanan, pembangunan ekonomi (persaingan global).`,
  keyPoints: [
    'Melaka menjalin hubungan dengan China, Siam, Pasai, Majapahit, Ryukyu.',
    'Tunku: pro-Barat, anti-komunis; Tun Razak: berkecuali, ZOPFAN 1971, hubungan dengan China 1974.',
    'Faktor dasar luar: geografi, ekonomi, sejarah, ideologi, kepimpinan, keselamatan.',
    'PBB: anggota 17 September 1957; misi pengaman pertama di Congo 1960.',
    'ASEAN 8 Ogos 1967 (Deklarasi Bangkok).',
    'Tunku Abdul Rahman Setiausaha Agung pertama OIC.'
  ],
  mistakes: [
    'Menyatakan Malaysia pengasas NAM — Malaysia menyertai pada 1970.',
    'Mengelirukan ZOPFAN (1971) dengan ASEAN (1967).',
    'Menyebut dasar luar Tunku sebagai berkecuali — berkecuali bermula era Tun Abdul Razak.'
  ],
  tips: [
    'Diuji K2 2021, 2022 dan 2024 (KMJ) — keutamaan tinggi; matlamat dan faktor penggubalan paling kerap.',
    'Jadual era Perdana Menteri membantu esei "perkembangan dasar luar".',
    'KBAT: hubungan harmoni dengan negara lain — kaitkan dengan ekonomi, keselamatan, isu semasa (diplomasi, bukan konfrontasi).'
  ],
  modelAnswer: `### Contoh: "Terangkan faktor penggubalan dasar luar Malaysia." (8 markah)

**F1:** Kedudukan geografi. **H1:** Malaysia terletak di laluan perdagangan strategik Selat Melaka dan Laut China Selatan.
**F2:** Faktor ekonomi. **H2:** Malaysia bergantung kepada eksport, maka perlu hubungan baik dengan rakan dagang.
**F3:** Faktor keselamatan. **H3:** Pengalaman ancaman komunis dan Konfrontasi mendorong kerjasama pertahanan seperti FPDA.
**F4:** Faktor kepimpinan. **H4:** Tun Abdul Razak memperkenalkan dasar berkecuali dan ZOPFAN.

*Tip:* gabungkan fakta + contoh dasar sebenar; elakkan isi yang bertindih (contoh: "ekonomi" dan "perdagangan" dikira satu isi).`
});

CH.push({
  id: 's5c10', form: 5, num: 10, title: 'Kecemerlangan Malaysia di Persada Dunia', weight: 'med',
  summary: 'Malaysia dalam isu global kontemporari, hubungan ekonomi antarabangsa, isu kemanusiaan, kelestarian global (Deklarasi Langkawi, Sidang Kemuncak Bumi, Antartika) dan wawasan masa hadapan.',
  notes: `## Malaysia dalam isu global kontemporari

| Isu | Peranan Malaysia |
|---|---|
| **Penyalahgunaan dadah** | Undang-undang tegas, kerjasama ASEAN membanteras dadah, program pemulihan |
| **Pertindihan sempadan** | Diselesaikan secara aman melalui **ICJ** — Sipadan & Ligitan (2002, milik Malaysia), Batu Puteh (2008, milik Singapura; Batuan Tengah milik Malaysia) |
| **Kempen antiminyak sawit** | Menangkis kempen negatif negara Barat; pensijilan **MSPO** (Minyak Sawit Mampan Malaysia); diplomasi perdagangan |
| **Pemerdagangan orang** | **Akta Antipemerdagangan Orang 2007**; kerjasama serantau |
| **Penyakit berjangkit** | Kawalan wabak (contoh: Nipah, SARS, COVID-19) dan kerjasama kesihatan antarabangsa |

## Peranan dalam hubungan ekonomi antarabangsa

1. **Meluaskan pasaran** — perjanjian perdagangan bebas, misi perdagangan.
2. **Menentang dominasi negara maju** — memperjuangkan kepentingan negara membangun (kerjasama Selatan–Selatan, G-15).
3. **Kerjasama pembangunan ekonomi segi tiga** — **IMT-GT** (Indonesia–Malaysia–Thailand), **IMS-GT** (Indonesia–Malaysia–Singapura), **BIMP-EAGA** (Brunei–Indonesia–Malaysia–Filipina).
4. **Menangani kemelesetan ekonomi** — semasa **Krisis Kewangan Asia 1997–1998**: **Majlis Tindakan Ekonomi Negara (MTEN)**, kawalan modal dan penambatan ringgit (RM3.80 = USD1) — pendekatan sendiri tanpa pinjaman IMF.
5. **Mengantarabangsakan sistem kewangan Islam** — **Bank Islam Malaysia (1983)**, sukuk, Malaysia sebagai hab kewangan Islam.

## Pelibatan rakyat dalam isu kemanusiaan dan keamanan

- **Palestin** — sokongan diplomatik di PBB dan OIC; bantuan kemanusiaan oleh kerajaan dan NGO.
- **Syria** — bantuan kemanusiaan kepada pelarian.
- **Tsunami 26 Disember 2004 (Aceh dan Sri Lanka)** — pasukan **SMART**, NGO seperti **MERCY Malaysia**, sukarelawan dan sumbangan rakyat.

## Usaha mengekalkan kelestarian global

| Usaha | Keterangan |
|---|---|
| **Deklarasi Langkawi (1989)** | Dikeluarkan semasa **CHOGM 1989** yang dihoskan Malaysia; komitmen negara Komanwel terhadap **alam sekitar** (pemanasan global, pencemaran, pembangunan lestari) |
| **Sidang Kemuncak Bumi (Rio de Janeiro, 1992)** | Malaysia lantang memperjuangkan hak negara membangun; negara maju perlu bertanggungjawab atas pencemaran |
| **Antartika warisan sejagat** | **Tun Dr Mahathir** di Perhimpunan Agung PBB (**1982**) mencadangkan Antartika diurus untuk manfaat seluruh manusia; Malaysia kemudian menjalankan penyelidikan saintifik di Antartika dan menyertai Perjanjian Antartika (2011) |

**Manfaat kepada Malaysia:** imej antarabangsa sebagai jurucakap negara membangun, kerjasama saintifik, kesedaran alam sekitar rakyat.

## Wawasan Malaysia menuju masa hadapan

- **Komuniti ASEAN** (dilancarkan 2015, semasa Malaysia pengerusi ASEAN): tiga tonggak — Politik-Keselamatan, Ekonomi, Sosiobudaya.
- **Keselamatan makanan** — mengurangkan kebergantungan import.
- **Alam sekitar** — tenaga boleh baharu, pemuliharaan hutan.
- **Zon bebas senjata nuklear** — Perjanjian Zon Bebas Senjata Nuklear Asia Tenggara (SEANWFZ, 1995).
- **Kerelevanan organisasi antarabangsa** — reformasi PBB.
- **Hak asasi manusia, pelarian dan PATI** — mengimbangi kemanusiaan dan keselamatan negara.

> **Kecemerlangan** dibina melalui diplomasi aktif, kerjasama serantau dan sumbangan rakyat.`,
  keyPoints: [
    'Isu global: dadah, pertindihan sempadan (ICJ), antiminyak sawit, pemerdagangan orang, penyakit berjangkit.',
    'Segi tiga pertumbuhan: IMT-GT, IMS-GT, BIMP-EAGA.',
    'Krisis 1997–1998: MTEN, kawalan modal, ringgit ditambat RM3.80.',
    'Deklarasi Langkawi 1989 (CHOGM) — alam sekitar.',
    'Sidang Kemuncak Bumi Rio 1992.',
    'Mahathir di PBB 1982: Antartika warisan sejagat.'
  ],
  mistakes: [
    'Menyatakan Deklarasi Langkawi berkaitan ASEAN — ia dikeluarkan dalam CHOGM (Komanwel).',
    'Menyebut Malaysia meminjam daripada IMF semasa krisis 1997–98 — Malaysia memilih pendekatan sendiri.',
    'Jawapan isu kemanusiaan tanpa contoh spesifik (tsunami 2004, SMART, MERCY).'
  ],
  tips: [
    'K2 2023 (KMJ): Deklarasi Langkawi, Antartika, infografik PBB — hafal usaha dan manfaat.',
    'Bab ini sangat sesuai untuk KBAT isu semasa: baca berita tentang peranan Malaysia di ASEAN/PBB.',
    'Gunakan struktur: isu → tindakan Malaysia → manfaat kepada negara/dunia.'
  ],
  modelAnswer: `### Contoh: "Jelaskan usaha dan manfaat yang diperoleh Malaysia melalui Deklarasi Langkawi." (6 markah)

**F1:** Malaysia menjadi tuan rumah CHOGM 1989. **H1:** Deklarasi Langkawi dihasilkan bagi komitmen Komanwel terhadap alam sekitar.
**F2:** Memperjuangkan pembangunan lestari. **H2:** Negara maju digesa membantu negara membangun menangani pencemaran.
**F3 (manfaat):** Imej antarabangsa meningkat. **H3:** Malaysia dilihat sebagai pemimpin isu alam sekitar dalam kalangan negara membangun.

*Tip:* soalan dwi-fokus (usaha **dan** manfaat) — pastikan kedua-dua bahagian dijawab, kerana markah dibahagikan.`
});

// ============ SOALAN ============
// Semua soalan ialah ciptaan asal gaya SPM. Tiada soalan disalin daripada kertas SPM sebenar.
var SRC = 'SPM-style (original)', N = 0;
function nid() { N++; return 'sejarah-' + ('00' + N).slice(-3); }
function rb(s) { return s.split('|').map(function (p) { return { p: p, m: 1 }; }); }
function mcq(ch, diff, q, o, a, e) { Q.push({ id: nid(), ch: ch, type: 'mcq', format: 'objektif', diff: diff, marks: 1, q: q, options: o, answer: a, explain: e, source: SRC }); }
function fill(ch, diff, q, blanks, e) { Q.push({ id: nid(), ch: ch, type: 'fill', format: 'latihan', diff: diff, marks: blanks.length, q: q, blanks: blanks, explain: e, source: SRC }); }
function mt(ch, diff, q, pairs, e) { Q.push({ id: nid(), ch: ch, type: 'match', format: 'latihan', diff: diff, marks: pairs.length, q: q, pairs: pairs, explain: e, source: SRC }); }
function op(label, marks, q, model, rubric) { return { label: label, type: 'open', marks: marks, q: q, model: model, rubric: rubric }; }
function st(ch, format, diff, stimulus, q, parts, kbat) {
  var o = { id: nid(), ch: ch, type: 'struct', format: format, diff: diff, marks: parts.reduce(function (a, p) { return a + p.marks; }, 0), q: q, parts: parts, source: SRC };
  if (stimulus) o.stimulus = stimulus; if (kbat) o.kbat = true; Q.push(o);
}
function opn(ch, format, diff, marks, q, model, rubric, opt) {
  var o = { id: nid(), ch: ch, type: 'open', format: format, diff: diff, marks: marks, q: q, model: model, rubric: rubric, source: SRC };
  if (opt && opt.stimulus) o.stimulus = opt.stimulus; if (opt && opt.kbat) o.kbat = true; Q.push(o);
}
var I4 = ['I, II dan III', 'I, II dan IV', 'I, III dan IV', 'II, III dan IV'];

// ---------- T4 Bab 1 ----------
mcq('s4c1', 1, 'Undang-undang manakah menetapkan bahawa nakhoda berkuasa seperti raja di atas kapal?',
  ['Hukum Kanun Melaka', 'Kutara Manawa', 'Undang-undang Laut Melaka', 'Undang-undang 99 Perak'], 2,
  'Undang-undang Laut Melaka mengatur pelayaran dan memberi nakhoda kuasa tertinggi di atas kapal. Hukum Kanun Melaka pula mengatur hal di darat (jenayah, kekeluargaan, ekonomi), manakala Kutara Manawa ialah undang-undang Majapahit.');
mcq('s4c1', 1, 'Pembesar Kesultanan Melayu Melaka yang bertanggungjawab menjaga keamanan dan keselamatan dalam negeri ialah',
  ['Bendahara', 'Temenggung', 'Laksamana', 'Penghulu Bendahari'], 1,
  'Temenggung mengetuai keselamatan dalam negeri (seperti ketua polis). Laksamana ialah ketua angkatan laut — distraktor ini sering mengelirukan kerana kedua-duanya berkaitan keselamatan, tetapi Laksamana di laut.');
mcq('s4c1', 2, `Antara berikut, yang manakah ciri negara bangsa Kesultanan Melayu Melaka?

I Raja sebagai pemerintah tertinggi
II Wilayah pengaruh yang luas
III Parlimen yang dipilih rakyat
IV Undang-undang bertulis`, I4, 1,
  'Raja, wilayah pengaruh dan undang-undang (Hukum Kanun Melaka) ialah ciri negara bangsa KMM. Parlimen yang dipilih rakyat ialah ciri demokrasi moden, tidak wujud pada zaman Melaka.');
st('s4c1', 'struktur', 2, null, 'Kesultanan Melayu Melaka mempunyai sistem pentadbiran yang tersusun.', [
  op('(a)', 2, 'Namakan **dua** pembesar dalam Pembesar Berempat.', 'Bendahara; Temenggung (juga diterima: Laksamana, Penghulu Bendahari).', rb('Bendahara / Penghulu Bendahari / Temenggung / Laksamana — mana-mana satu|Pembesar kedua yang betul')),
  op('(b)', 4, 'Jelaskan peranan **dua** pembesar yang anda namakan dalam (a).', 'Bendahara ialah pembesar tertinggi selepas sultan (F); beliau mengetuai pentadbiran dan menjadi penasihat sultan serta pemangku raja (H). Temenggung menjaga keamanan dalam negeri (F); beliau menangkap penjenayah dan mengurus penjara (H).', rb('F: peranan pembesar pertama|H: huraian/contoh peranan pertama|F: peranan pembesar kedua|H: huraian/contoh peranan kedua')),
  op('(c)', 4, 'Pada pendapat anda, mengapakah sistem pentadbiran yang tersusun penting kepada kemakmuran sesebuah negara?', 'Sistem tersusun memastikan setiap tugas diurus oleh pihak yang bertanggungjawab, maka pentadbiran cekap. Pelabuhan Melaka diurus syahbandar sehingga pedagang yakin untuk berdagang, menjana hasil negeri. Undang-undang dikuatkuasakan, maka rakyat hidup aman. Hari ini, pentadbiran cekap menarik pelaburan dan menjamin kesejahteraan rakyat.', rb('Pentadbiran cekap/tiada pertindihan tugas|Contoh sejarah: syahbandar/pelabuhan Melaka menarik pedagang|Keamanan kerana undang-undang dikuatkuasakan|Kaitan masa kini: pelaburan/kesejahteraan rakyat'))
], true);
mt('s4c1', 1, 'Padankan pembesar Melaka dengan peranannya.', [
  ['Bendahara', 'Ketua pentadbiran dan penasihat sultan'],
  ['Penghulu Bendahari', 'Mengurus perbendaharaan dan hasil negeri'],
  ['Temenggung', 'Menjaga keamanan dalam negeri'],
  ['Laksamana', 'Ketua angkatan laut'],
  ['Syahbandar', 'Mengurus pelabuhan dan pedagang asing']
], 'Pembesar Berempat ialah Bendahara, Penghulu Bendahari, Temenggung dan Laksamana. Syahbandar berada di bawah Penghulu Bendahari dan mengurus pelabuhan.');

// ---------- T4 Bab 2 ----------
mcq('s4c2', 1, 'Majalah yang diterbitkan oleh golongan Kaum Muda pada tahun 1906 untuk menyeru pembaharuan ialah',
  ['Utusan Melayu', 'Warta Malaya', 'Majlis', 'Al-Imam'], 3,
  'Al-Imam (1906) diterbitkan oleh Kaum Muda seperti Syed Sheikh al-Hadi dan Sheikh Tahir Jalaluddin. Utusan Melayu dan Warta Malaya ialah akhbar, bukan majalah islah Kaum Muda.');
mcq('s4c2', 2, 'Maktab Perguruan Sultan Idris (1922) penting dalam perkembangan nasionalisme kerana',
  ['melatih anak golongan bangsawan menjadi pegawai British', 'melahirkan guru dan penulis yang menyemarakkan semangat kebangsaan', 'menggunakan bahasa Inggeris sebagai bahasa pengantar', 'menjadi pusat pengajian agama Kaum Muda'], 1,
  'SITC melahirkan guru Melayu yang menjadi penulis dan pemimpin (contoh: pengasas KMM). Pilihan A menggambarkan MCKK (1905), yang melatih anak golongan atasan untuk perkhidmatan pentadbiran.');
mcq('s4c2', 1, 'Revolusi yang menyebarkan idea kebebasan, kesamarataan dan persaudaraan ialah',
  ['Revolusi Perancis', 'Revolusi Keagungan', 'Revolusi Amerika', 'Revolusi China 1911'], 0,
  'Revolusi Perancis (1789) terkenal dengan slogan kebebasan, kesamarataan, persaudaraan. Revolusi Keagungan (1688) pula mengehadkan kuasa raja England.');
st('s4c2', 'sumber', 2, `> *Petikan (rekaan untuk latihan):* "Wahai bangsaku, sampai bilakah kita mahu tidur? Lihatlah bangsa lain maju kerana ilmu. Akhbar dan sekolah ialah pelita yang menerangi jalan kita. Bangunlah, bersatulah, dan tuntutlah hak kita di tanah air sendiri."`,
  'Berdasarkan petikan dan pengetahuan sejarah anda, jawab soalan berikut.', [
  op('(a)', 2, 'Nyatakan **dua** saluran yang membangkitkan kesedaran dalam petikan.', 'Akhbar; sekolah (pendidikan).', rb('Akhbar/media cetak|Sekolah/pendidikan')),
  op('(b)', 4, 'Jelaskan **dua** faktor kemunculan gerakan nasionalisme di negara kita.', 'Media cetak (F): akhbar seperti Utusan Melayu mengkritik penjajah dan menyebarkan idea kemajuan (H). Pendidikan (F): SITC melahirkan guru dan penulis yang menyemarakkan semangat kebangsaan (H).', rb('F: faktor pertama|H: huraian dengan contoh|F: faktor kedua|H: huraian dengan contoh')),
  op('(c)', 4, 'Pada pendapat anda, bagaimanakah semangat cinta akan negara boleh dizahirkan oleh pelajar hari ini?', 'Menuntut ilmu bersungguh-sungguh supaya dapat menyumbang kepada negara; menggunakan media sosial secara bertanggungjawab untuk menyebarkan maklumat positif; menghormati lambang negara dan mematuhi undang-undang; menyertai aktiviti kemasyarakatan dan perpaduan.', rb('Menuntut ilmu (kaitan intelektual dahulu)|Media secara positif (kaitan akhbar dahulu)|Menghormati lambang negara/undang-undang|Aktiviti perpaduan/kemasyarakatan'))
], true);
fill('s4c2', 1, 'Kesatuan Melayu Singapura ditubuhkan pada tahun ___ dan Kesatuan Melayu Muda ditubuhkan pada tahun ___ oleh Ibrahim Haji Yaakob.',
  [['1926'], ['1938']], 'KMS (1926) dipimpin Mohd Eunos Abdullah; KMM (1938) diasaskan Ibrahim Haji Yaakob dan lepasan SITC.');

// ---------- T4 Bab 3 ----------
mcq('s4c3', 1, 'Di manakah tentera Jepun mula mendarat di Tanah Melayu pada 8 Disember 1941?',
  ['Singapura', 'Kota Bharu', 'Miri', 'Pulau Pinang'], 1,
  'Jepun mendarat di Kota Bharu, Kelantan. Miri (16 Disember 1941) ialah pendaratan di Sarawak, dan Singapura jatuh hanya pada 15 Februari 1942.');
mcq('s4c3', 2, 'Mengapakah Jepun menyerahkan Kedah, Perlis, Kelantan dan Terengganu kepada Thailand pada tahun 1943?',
  ['Negeri-negeri itu menentang Jepun', 'Thailand menawan negeri-negeri itu', 'Sebagai balasan atas sokongan Thailand kepada Jepun', 'Untuk ditadbir semula oleh British'], 2,
  'Penyerahan ini ialah ganjaran kepada Thailand yang bekerjasama dengan Jepun. Thailand tidak menawan negeri itu secara ketenteraan, dan British tidak terlibat kerana sedang berperang dengan Jepun.');
mcq('s4c3', 2, `Antara berikut, yang manakah faktor tercetusnya Perang Dunia Kedua di Eropah?

I Ketidakpuasan hati terhadap Perjanjian Versailles
II Kegagalan Liga Bangsa
III Kemunculan ideologi Nazi dan Fasis
IV Pembunuhan Archduke Franz Ferdinand`, I4, 0,
  'I, II dan III ialah faktor PD2. Pembunuhan Archduke Franz Ferdinand (1914) ialah pencetus Perang Dunia Pertama — distraktor biasa.');
opn('s4c3', 'esei', 2, 20, `(a) Jelaskan faktor kedatangan Jepun ke negara kita. (6 markah)
(b) Huraikan dasar pendudukan Jepun dari aspek pentadbiran, ekonomi dan sosial. (10 markah)
(c) Apakah iktibar yang boleh diambil daripada pendudukan Jepun? (4 markah)`,
`**(a)** Jepun memerlukan bahan mentah (F) seperti getah, bijih timah dan minyak untuk industri dan peperangannya (H). Sekatan ekonomi Amerika Syarikat (F) menyekat bekalan minyak kepada Jepun (H). Kepentingan strategik ketenteraan (F): Tanah Melayu dan Singapura merupakan pangkalan penting British di Asia Tenggara (H).

**(b)** *Pentadbiran:* pentadbiran tentera ditubuhkan (F); Raja-raja Melayu dikekalkan untuk hal agama dan adat sahaja (H); empat negeri utara diserahkan kepada Thailand pada 1943 (F/H). *Ekonomi:* duit pisang dikeluarkan (F) menyebabkan inflasi (H); rakyat dipaksa menjadi buruh, contohnya Jalan Kereta Api Maut Siam–Burma (F/H). *Sosial:* bahasa Jepun diajar dan lagu Kimigayo dinyanyikan (F/H); layanan berbeza kepada kaum — orang Cina ditindas melalui Sook Ching (F/H); catuan makanan menyebabkan kebuluran (F/H).

**(c)** Kita perlu menjaga kedaulatan dan pertahanan negara; perpaduan kaum penting kerana penjajah memecahbelahkan rakyat; peperangan membawa penderitaan, maka keamanan dunia perlu dipertahankan; rakyat perlu bersedia berkorban seperti Leftenan Adnan.`,
  rb('(a) F: bahan mentah|(a) H: contoh getah/bijih timah/minyak|(a) F: sekatan ekonomi AS|(a) H: bekalan minyak tersekat|(a) F: strategik ketenteraan|(a) H: pangkalan British|(b) Pentadbiran tentera|(b) Raja dikekalkan untuk agama dan adat|(b) Empat negeri utara diserahkan kepada Thailand|(b) Duit pisang/inflasi|(b) Buruh paksa (Jalan Kereta Api Maut)|(b) Tanaman makanan/catuan|(b) Bahasa Jepun/Kimigayo|(b) Layanan berbeza kaum/Sook Ching|(b) Kebuluran/penderitaan|(b) Huraian tambahan yang tepat|(c) Iktibar 1: kedaulatan/pertahanan|(c) Iktibar 2: perpaduan|(c) Iktibar 3: keamanan|(c) Iktibar 4: sedia berkorban'));
opn('s4c3', 'kbat', 3, 4, 'Berdasarkan stimulus, jelaskan mesej yang ingin disampaikan kepada pemimpin dunia hari ini.',
  'Peperangan memusnahkan nyawa dan harta, contohnya bom atom 1945 meragut ratusan ribu nyawa. Pemimpin dunia perlu menyelesaikan konflik melalui rundingan dan diplomasi, seperti melalui PBB. Persenjataan nuklear perlu dihadkan (contoh: zon bebas nuklear). Keamanan menjamin pembangunan dan kesejahteraan rakyat.',
  rb('Peperangan memusnahkan nyawa/harta (bukti sejarah)|Konflik diselesaikan secara rundingan/diplomasi|Mengehadkan senjata nuklear/pemusnah|Keamanan menjamin pembangunan/kesejahteraan'),
  { kbat: true, stimulus: `> *Stimulus (rekaan):* Sebuah poster menunjukkan awan cendawan letupan bom atom tahun 1945 dengan kata-kata: **"Jangan biarkan sejarah berulang."**` });

// ---------- T4 Bab 4 ----------
mcq('s4c4', 1, 'Siapakah yang ditugaskan mendapatkan tandatangan Raja-raja Melayu bagi gagasan Malayan Union?',
  ['Sir Edward Gent', 'Sir Gerald Templer', 'Sir Harold MacMichael', 'Malcolm MacDonald'], 2,
  'Sir Harold MacMichael mendapatkan tandatangan raja pada Oktober–Disember 1945, termasuk melalui ugutan. Sir Edward Gent ialah Gabenor Malayan Union, bukan perunding tandatangan.');
mcq('s4c4', 1, 'Prinsip kewarganegaraan Malayan Union yang dibantah orang Melayu ialah',
  ['jus soli', 'jus sanguinis', 'naturalisasi ketat', 'kewarganegaraan negeri'], 0,
  'Jus soli memberi kewarganegaraan kepada sesiapa yang lahir di Tanah Melayu/Singapura dengan syarat longgar, dibimbangi menggugat kedudukan orang Melayu.');
mcq('s4c4', 2, 'Mengapakah Syarikat Borneo Utara British menyerahkan Sabah kepada Kerajaan British pada 1946?',
  ['Desakan Persatuan Kebangsaan Melayu Sarawak', 'Kekurangan modal untuk membangunkan semula Sabah selepas perang', 'Tuntutan Filipina ke atas Sabah', 'Arahan Pertubuhan Bangsa-Bangsa Bersatu'], 1,
  'Sabah musnah teruk akibat perang dan SBUB tidak mampu membiayai pemulihan. Persatuan Kebangsaan Melayu Sarawak berkaitan penentangan di Sarawak, bukan Sabah.');
opn('s4c4', 'esei', 2, 20, `(a) Jelaskan sebab British memperkenalkan Malayan Union. (6 markah)
(b) Huraikan cara orang Melayu menentang Malayan Union. (10 markah)
(c) Apakah pengajaran daripada penentangan terhadap Malayan Union? (4 markah)`,
`**(a)** Menyatukan pentadbiran (F): sebelum perang terdapat NNS, NNMB dan NNMTB yang berbeza, membazir kos (H). Mengurangkan kuasa raja (F): kuasa politik diserahkan kepada Gabenor (H). Menyediakan kewarganegaraan sama rata (F) sebagai persediaan berkerajaan sendiri (H).

**(b)** Raja-raja Melayu memboikot upacara pelantikan Gabenor Edward Gent pada 1 April 1946 (F/H). Raja menghantar bantahan ke London (F). Akhbar Melayu seperti Utusan Melayu dan Majlis mengkritik Malayan Union (F/H). Rakyat berhimpun dan memakai kain putih lilit songkok tanda berkabung (F/H). Kongres Melayu Se-Malaya diadakan pada Mac 1946 di Kelab Sultan Sulaiman (F) yang membawa kepada penubuhan UMNO pada 11 Mei 1946 dipimpin Dato' Onn Jaafar (H). Bekas pegawai British seperti Frank Swettenham turut menyokong bantahan (F/H).

**(c)** Perpaduan membolehkan bangsa mempertahankan hak; perjuangan perlu secara aman dan teratur; kepimpinan berwibawa penting; berani mempertahankan maruah bangsa.`,
  rb('(a) F: menyatukan pentadbiran|(a) H: NNS/NNMB/NNMTB berbeza|(a) F: mengurangkan kuasa raja|(a) H: kuasa kepada Gabenor|(a) F: kewarganegaraan sama rata|(a) H: persediaan kerajaan sendiri|(b) Raja memboikot pelantikan Gabenor|(b) Bantahan ke London|(b) Akhbar Melayu mengkritik|(b) Contoh akhbar|(b) Himpunan/kain putih tanda berkabung|(b) Kongres Melayu Se-Malaya Mac 1946|(b) Penubuhan UMNO 11 Mei 1946|(b) Dato\' Onn Jaafar|(b) Sokongan bekas pegawai British|(b) Huraian tambahan tepat|(c) Perpaduan|(c) Perjuangan aman/teratur|(c) Kepimpinan|(c) Maruah bangsa'));
st('s4c4', 'sumber', 2, `> *Petikan (rekaan):* "Pada Mei 1946, Majlis Negeri meluluskan penyerahan negeri ini kepada Kerajaan British dengan undi yang tipis. Ramai penduduk Melayu dan Dayak membantah. Kakitangan kerajaan sanggup meletak jawatan apabila dilarang menyertai gerakan menentang penyerahan."`,
  'Berdasarkan petikan dan pengetahuan sejarah anda, jawab soalan berikut.', [
  { label: '(a)', type: 'mcq', marks: 1, q: 'Negeri manakah yang dimaksudkan dalam petikan?', options: ['Sabah', 'Sarawak', 'Labuan', 'Brunei'], answer: 1, explain: 'Majlis Negeri (Council Negri) Sarawak meluluskan penyerahan dengan undi 19–16 pada Mei 1946; Sabah pula diserahkan oleh SBUB.' },
  op('(b)', 1, 'Namakan arahan yang melarang kakitangan kerajaan menyertai gerakan menentang penyerahan.', 'Pekeliling No. 9.', rb('Pekeliling No. 9')),
  op('(c)', 4, 'Jelaskan **dua** bentuk penentangan penduduk tempatan terhadap penyerahan tersebut.', 'Penubuhan persatuan (F): Persatuan Kebangsaan Melayu Sarawak dan Barisan Pemuda Sarawak menganjurkan bantahan (H). Tindakan keras (F): Rosli Dhobi dari Rukun 13 membunuh Gabenor Duncan Stewart di Sibu pada 3 Disember 1949 (H).', rb('F: penentangan melalui persatuan|H: contoh PKMS/Barisan Pemuda|F: tindakan keras/pembunuhan Gabenor|H: Rosli Dhobi, Sibu 1949')),
  op('(d)', 4, 'Pada pendapat anda, wajarkah tindakan kakitangan kerajaan meletak jawatan? Berikan alasan.', 'Wajar dari sudut semangat: mereka sanggup berkorban demi mempertahankan maruah tanah air dan menunjukkan bantahan secara aman. Namun, tindakan itu menjejaskan pendapatan mereka dan pentadbiran; perjuangan juga boleh diteruskan melalui rundingan. Iktibar: berani menyuarakan pandangan secara beretika.', rb('Pendirian jelas|Hujah 1 dengan kaitan fakta (pengorbanan/maruah)|Hujah 2 (bantahan aman/kesan)|Nilai/iktibar masa kini'))
], true);

// ---------- T4 Bab 5 ----------
mcq('s4c5', 1, 'Persekutuan Tanah Melayu diisytiharkan pada',
  ['1 April 1946', '16 Jun 1948', '1 Februari 1948', '31 Ogos 1957'], 2,
  'PTM diisytiharkan pada 1 Februari 1948 menggantikan Malayan Union (1 April 1946). 16 Jun 1948 ialah tarikh Darurat diisytiharkan.');
mcq('s4c5', 1, 'Siapakah ketua pentadbiran Persekutuan Tanah Melayu 1948?',
  ['Pesuruhjaya Tinggi British', 'Gabenor British', 'Residen Jeneral', 'Ketua Menteri'], 0,
  'PTM 1948 diketuai Pesuruhjaya Tinggi British. Gabenor ialah ketua Malayan Union; Residen Jeneral ialah ketua NNMB (1896).');
mcq('s4c5', 2, 'Hartal pada 20 Oktober 1947 dianjurkan oleh gabungan PUTERA–AMCJA untuk',
  ['menyokong penubuhan Malayan Union', 'membantah cadangan perlembagaan Persekutuan yang dirangka tanpa mengambil kira Perlembagaan Rakyat', 'menuntut Singapura dipisahkan', 'menyokong pengisytiharan Darurat'], 1,
  'Hartal ialah mogok perniagaan seluruh negara untuk membantah cadangan Persekutuan dan menuntut Perlembagaan Rakyat diterima. Gabungan ini sebenarnya mahu Singapura disatukan, bukan dipisahkan.');
st('s4c5', 'struktur', 2, null, 'Persekutuan Tanah Melayu 1948 menggantikan Malayan Union.', [
  op('(a)', 2, 'Nyatakan **dua** pihak yang menganggotai Jawatankuasa Kerja 1946.', 'Wakil Raja-raja Melayu; wakil UMNO (juga: pegawai British).', rb('Raja-raja Melayu|UMNO / pegawai British')),
  op('(b)', 4, 'Bandingkan Malayan Union dengan PTM 1948 dari aspek **kedudukan raja** dan **kewarganegaraan**.', 'Kedudukan raja: Malayan Union menghapuskan kuasa politik raja (hanya agama dan adat) manakala PTM 1948 mengembalikan kedaulatan raja sebagai ketua negeri dan menubuhkan Majlis Raja-Raja. Kewarganegaraan: Malayan Union berasaskan jus soli yang longgar manakala PTM 1948 memperketat syarat (bermastautin, berkelakuan baik, bahasa, ikrar).', rb('Raja dalam Malayan Union hilang kuasa politik|Raja dalam PTM 1948 berdaulat/Majlis Raja-Raja|Kewarganegaraan Malayan Union longgar (jus soli)|Kewarganegaraan PTM 1948 ketat (syarat)')),
  op('(c)', 4, 'Pada pendapat anda, mengapakah PTM 1948 dianggap asas kepada kerjasama kaum?', 'Kewarganegaraan dibuka kepada bukan Melayu yang memenuhi syarat, menjadikan mereka sebahagian rakyat; hak istimewa Melayu dijamin, maka orang Melayu berasa selamat; keseimbangan kepentingan ini mengurangkan ketegangan dan menjadi asas tolak ansur dalam Perlembagaan 1957; contoh kerjasama UMNO–MCA selepas itu.', rb('Kewarganegaraan bukan Melayu terbuka|Hak istimewa Melayu dijamin|Keseimbangan/tolak ansur → Perlembagaan 1957|Contoh kerjasama kaum (UMNO–MCA/Perikatan)'))
], true);
fill('s4c5', 2, 'Gabungan pertubuhan Melayu radikal dikenali sebagai ___ manakala gabungan bukan Melayu yang dipimpin Tan Cheng Lock ialah ___. Kedua-duanya mengemukakan Perlembagaan ___.',
  [['PUTERA', 'Pusat Tenaga Rakyat'], ['AMCJA', 'All-Malaya Council of Joint Action'], ['Rakyat']],
  'PUTERA (Pusat Tenaga Rakyat) dan AMCJA bergabung dan mengemukakan Perlembagaan Rakyat (1947), tetapi ditolak British.');

// ---------- T4 Bab 6 ----------
mcq('s4c6', 1, 'Rancangan Briggs (1950) bertujuan',
  ['memberi kemerdekaan kepada Tanah Melayu', 'memutuskan bekalan makanan, maklumat dan anggota kepada komunis', 'menubuhkan Persatuan Cina Malaya', 'mengadakan pilihan raya majlis perbandaran'], 1,
  'Penduduk pinggir hutan dipindahkan ke kampung baru supaya komunis kehilangan sokongan. MCA memang membantu penduduk kampung baru, tetapi penubuhannya bukan tujuan Rancangan Briggs.');
mcq('s4c6', 2, 'Mengapakah Rundingan Baling (1955) gagal?',
  ['British enggan menghantar wakil', 'Tunku Abdul Rahman enggan bertemu Chin Peng', 'PKM enggan membubarkan parti dan menyerah tanpa syarat', 'Rundingan dibatalkan kerana pilihan raya'], 2,
  'Kerajaan menuntut PKM dibubarkan dan anggotanya menyerah; Chin Peng mahu PKM diiktiraf sebagai parti sah. Tunku sendiri mengetuai rundingan bersama Tan Cheng Lock dan David Marshall.');
mcq('s4c6', 2, `Antara berikut, yang manakah kesan politik zaman Darurat?

I Penubuhan MCA
II Syarat kewarganegaraan dilonggarkan
III Mempercepat kemerdekaan
IV Penubuhan Malayan Union`, I4, 0,
  'MCA (1949), pelonggaran kewarganegaraan dan pemercepatan kemerdekaan ialah kesan Darurat. Malayan Union (1946) berlaku sebelum Darurat (1948).');
opn('s4c6', 'kbat', 3, 6, 'Strategi "memenangi hati dan fikiran rakyat" dianggap lebih berkesan daripada kekuatan senjata semata-mata dalam menghadapi komunis. Wajarkan pernyataan ini.',
  'Rakyat yang diberi layanan baik tidak lagi membantu komunis — contoh Kawasan Putih melonggarkan sekatan bagi kawasan bebas komunis, memberi insentif kepada rakyat bekerjasama. Pelonggaran syarat kewarganegaraan menarik sokongan masyarakat Cina kepada kerajaan. Hadiah wang tunai menggalakkan maklumat tentang komunis. Usaha memenangi kepercayaan Orang Asli memutuskan bantuan di hutan. Kekuatan senjata tetap perlu, tetapi tanpa sokongan rakyat komunis sukar ditewaskan. Iktibar: keselamatan negara bergantung pada keyakinan rakyat kepada kerajaan.',
  rb('Kawasan Putih + huraian|Kewarganegaraan dilonggarkan + huraian|Hadiah wang tunai/maklumat|Memenangi Orang Asli|Pengakuan peranan senjata tetapi rakyat penentu|Kesimpulan/iktibar masa kini'), { kbat: true });
st('s4c6', 'struktur', 2, null, 'Ancaman komunis menyebabkan Darurat diisytiharkan di Tanah Melayu.', [
  op('(a)', 2, 'Nyatakan peristiwa yang mencetuskan pengisytiharan Darurat pada 16 Jun 1948.', 'Pembunuhan tiga pengurus ladang Eropah di Sungai Siput, Perak.', rb('Pembunuhan pengurus ladang Eropah|Sungai Siput, Perak')),
  op('(b)', 4, 'Jelaskan **dua** bentuk ancaman komunis.', 'Melumpuhkan ekonomi (F) dengan membakar ladang getah dan memusnahkan lombong (H). Mengancam pasukan keselamatan (F) melalui serang hendap, contohnya pembunuhan Sir Henry Gurney pada 1951 (H).', rb('F: ancaman pertama|H: contoh|F: ancaman kedua|H: contoh')),
  op('(c)', 4, 'Pada pendapat anda, mengapakah keamanan negara perlu dipertahankan oleh semua rakyat?', 'Keamanan membolehkan ekonomi berkembang; Darurat menunjukkan kos keselamatan yang tinggi dan penderitaan rakyat; rakyat berperanan memberi maklumat dan menolak anasir subversif; keamanan menjamin perpaduan dan masa depan generasi muda.', rb('Ekonomi berkembang|Bukti kos/penderitaan Darurat|Peranan rakyat (maklumat/menolak anasir)|Perpaduan/masa depan'))
], true);

// ---------- T4 Bab 7 ----------
mcq('s4c7', 1, 'Laporan yang mencadangkan sekolah vernakular Cina dikekalkan ialah',
  ['Laporan Barnes', 'Laporan Woodhead', 'Penyata Razak', 'Laporan Fenn-Wu'], 3,
  'Laporan Fenn-Wu (1951) mencadangkan sekolah Cina dikekalkan. Laporan Barnes (1951) pula mencadangkan sekolah kebangsaan dwibahasa Melayu–Inggeris menggantikan sekolah vernakular.');
mcq('s4c7', 2, 'Dalam Sistem Ahli (1951), ahli tempatan yang mengetuai jabatan bertanggungjawab kepada',
  ['Pesuruhjaya Tinggi British', 'rakyat yang memilih mereka', 'Majlis Raja-Raja', 'Ketua Menteri'], 0,
  'Ahli dilantik, bukan dipilih, dan bertanggungjawab kepada Pesuruhjaya Tinggi. Jawatan Ketua Menteri hanya wujud selepas PRU 1955.');
mcq('s4c7', 1, 'Jawatankuasa Hubungan Antara Kaum (1949) ditubuhkan atas inisiatif',
  ['Sir Harold Briggs', 'Malcolm MacDonald', 'Sir Edward Gent', 'Lord Reid'], 1,
  'Malcolm MacDonald, Pesuruhjaya Agung British di Asia Tenggara, memulakan JHAK untuk membina persefahaman kaum. Briggs dikaitkan dengan Rancangan Briggs (1950).');
opn('s4c7', 'esei', 2, 20, `(a) Jelaskan usaha ke arah pembentukan sistem pendidikan kebangsaan dari tahun 1951 hingga 1956. (12 markah)
(b) Mengapakah Penyata Razak 1956 penting kepada negara? (4 markah)
(c) Pada pendapat anda, bagaimanakah sekolah boleh memupuk perpaduan hari ini? (4 markah)`,
`**(a)** Laporan Barnes 1951 (F) mencadangkan sekolah kebangsaan menggunakan bahasa Melayu dan Inggeris (H). Laporan Fenn-Wu 1951 (F) mencadangkan sekolah Cina dikekalkan (H). Ordinan Pelajaran 1952 (F) menetapkan sekolah kebangsaan dwibahasa; bahasa Cina dan Tamil diajar jika ada permintaan (H). Laporan Woodhead 1955 (F) memperbaiki pendidikan rendah dan menengah di Sarawak dan Sabah (H). Penyata Razak 1956 (F) menjadikan bahasa Melayu bahasa kebangsaan dan bahasa pengantar utama (H) serta sukatan pelajaran yang sama untuk semua sekolah (H).

**(b)** Menjadi asas Ordinan Pelajaran 1957 dan dasar pendidikan kebangsaan; menyatukan murid pelbagai kaum melalui sukatan yang sama; memartabatkan bahasa Melayu sebagai bahasa kebangsaan; membentuk identiti nasional.

**(c)** Aktiviti kokurikulum pelbagai kaum (contoh: RIMUP); penggunaan bahasa Melayu sebagai bahasa perpaduan; sambutan perayaan bersama; projek berkumpulan yang mencampurkan murid pelbagai kaum.`,
  rb('(a) Laporan Barnes 1951|(a) Huraian Barnes|(a) Laporan Fenn-Wu 1951|(a) Huraian Fenn-Wu|(a) Ordinan Pelajaran 1952|(a) Huraian Ordinan 1952|(a) Laporan Woodhead 1955|(a) Huraian Woodhead (Sarawak & Sabah)|(a) Penyata Razak 1956|(a) Bahasa Melayu bahasa kebangsaan|(a) Sukatan pelajaran sama|(a) Huraian tambahan tepat|(b) Asas Ordinan 1957|(b) Menyatukan murid|(b) Martabat bahasa Melayu|(b) Identiti nasional|(c) Cadangan 1|(c) Cadangan 2|(c) Cadangan 3|(c) Cadangan 4'));
mt('s4c7', 2, 'Padankan laporan/akta pendidikan dengan intipatinya.', [
  ['Laporan Barnes 1951', 'Sekolah kebangsaan dwibahasa Melayu–Inggeris'],
  ['Laporan Fenn-Wu 1951', 'Mengekalkan sekolah vernakular Cina'],
  ['Laporan Woodhead 1955', 'Memperbaiki pendidikan di Sarawak dan Sabah'],
  ['Penyata Razak 1956', 'Bahasa Melayu bahasa pengantar utama; sukatan sama']
], 'Hafal laporan mengikut tahun dan cadangan utamanya — soalan padanan seperti ini lazim dalam Kertas 1.');

// ---------- T4 Bab 8 ----------
mcq('s4c8', 1, 'Pilihan raya pertama di Tanah Melayu ialah pilihan raya',
  ['Majlis Perbandaran Kuala Lumpur, 1952', 'Majlis Perundangan Persekutuan, 1955', 'Majlis Perbandaran George Town, 1951', 'Parlimen, 1959'], 2,
  'Pilihan raya Majlis Perbandaran George Town (Disember 1951) ialah yang pertama. Pilihan raya KL (Februari 1952) terkenal kerana kerjasama UMNO–MCA.');
mcq('s4c8', 1, 'Berapakah kerusi yang dimenangi Parti Perikatan dalam Pilihan Raya Umum 1955?',
  ['44 daripada 52', '51 daripada 52', '52 daripada 52', '35 daripada 52'], 1,
  'Perikatan menang 51 daripada 52 kerusi; satu kerusi dimenangi PAS. Pilihan C salah kerana Perikatan tidak menang semua kerusi.');
mcq('s4c8', 2, 'Antara berikut, yang manakah peranan kabinet pertama Persekutuan Tanah Melayu (1955)?',
  ['Menubuhkan Malayan Union', 'Menandatangani Perjanjian Malaysia', 'Melancarkan Dasar Ekonomi Baru', 'Menuntut kemerdekaan melalui rundingan di London'], 3,
  'Kabinet pertama yang diketuai Tunku menghantar rombongan ke London (1956). Perjanjian Malaysia (1963) dan DEB (1971) berlaku jauh kemudian.');
st('s4c8', 'struktur', 1, null, 'Pilihan Raya Umum Pertama diadakan pada 27 Julai 1955.', [
  { label: '(a)', type: 'fill', marks: 2, q: 'Daripada ___ ahli Majlis Perundangan Persekutuan, seramai ___ dipilih melalui pilihan raya.', blanks: [['98'], ['52']], explain: 'Kompromi Perikatan–British: 52 daripada 98 ahli dipilih — majoriti dipilih buat pertama kali.' },
  op('(b)', 4, 'Jelaskan **dua** faktor kejayaan Parti Perikatan dalam pilihan raya tersebut.', 'Kerjasama tiga kaum (F): UMNO, MCA dan MIC berkongsi kerusi dan menarik pengundi pelbagai kaum (H). Manifesto menuntut kemerdekaan (F) dalam tempoh empat tahun menarik sokongan rakyat (H).', rb('F: kerjasama kaum|H: huraian|F: manifesto/kepimpinan Tunku|H: huraian')),
  op('(c)', 4, 'Pada pendapat anda, apakah kepentingan mengundi kepada rakyat hari ini?', 'Mengundi ialah hak demokrasi untuk memilih pemimpin; menentukan dasar dan hala tuju negara; memastikan kerajaan bertanggungjawab kepada rakyat; menyumbang kepada kestabilan politik.', rb('Hak memilih pemimpin|Menentukan dasar negara|Kerajaan bertanggungjawab|Kestabilan politik'))
], true);
fill('s4c8', 1, 'Hasil Pilihan Raya Umum 1955, ___ dilantik sebagai Ketua Menteri Persekutuan Tanah Melayu.',
  [['Tunku Abdul Rahman', 'Tunku Abdul Rahman Putra', 'Tunku Abdul Rahman Putra Al-Haj']],
  'Tunku Abdul Rahman menjadi Ketua Menteri (1955) dan kemudian Perdana Menteri pertama selepas merdeka.');

// ---------- T4 Bab 9 ----------
mcq('s4c9', 1, 'Siapakah pengerusi suruhanjaya yang menggubal Perlembagaan Persekutuan Tanah Melayu 1957?',
  ['Lord Cobbold', 'Lord Lansdowne', 'Lord Reid', 'Lord Brassey'], 2,
  'Lord Reid mengetuai Suruhanjaya Reid. Lord Cobbold dan Lord Lansdowne berkaitan pembentukan Malaysia (1962), manakala Lord Brassey dikaitkan dengan idea awal gagasan Malaysia.');
mcq('s4c9', 1, 'Rombongan rundingan kemerdekaan ke London pada 1956 dianggotai oleh',
  ['wakil UMNO, MCA dan PAS', 'wakil Raja-raja Melayu dan wakil Parti Perikatan', 'pegawai British dan Pesuruhjaya Tinggi', 'wakil Sabah, Sarawak dan Singapura'], 1,
  'Rombongan terdiri daripada 4 wakil Raja-raja Melayu dan 4 wakil Parti Perikatan diketuai Tunku — membuktikan perpaduan pemimpin tempatan.');
mcq('s4c9', 2, 'Antara berikut, yang manakah menunjukkan tolak ansur kaum dalam Perlembagaan Persekutuan Tanah Melayu 1957?',
  ['Bahasa Inggeris dijadikan bahasa kebangsaan', 'Singapura dimasukkan dalam Persekutuan', 'Kewarganegaraan dilonggarkan bagi bukan Melayu manakala kedudukan istimewa orang Melayu dijamin', 'Raja-raja Melayu kehilangan kuasa'], 2,
  'Inilah inti kontrak sosial: bukan Melayu mendapat kewarganegaraan lebih mudah, orang Melayu mendapat jaminan kedudukan istimewa, Islam, bahasa Melayu dan institusi raja.');
st('s4c9', 'sumber', 2, `> *Petikan (rekaan):* "Pada 20 Februari 1956, ribuan rakyat berhimpun di Padang Pahlawan, Bandar Hilir. Seorang pemimpin yang baru pulang dari London mengumumkan bahawa negara akan mencapai kemerdekaan pada 31 Ogos 1957. Rakyat bersorak dengan laungan merdeka."`,
  'Berdasarkan petikan dan pengetahuan sejarah anda, jawab soalan berikut.', [
  op('(a)', 2, 'Siapakah pemimpin yang dimaksudkan dan di negeri manakah pengumuman dibuat?', 'Tunku Abdul Rahman; Melaka.', rb('Tunku Abdul Rahman|Melaka')),
  op('(b)', 4, 'Jelaskan **dua** perkara yang dipersetujui dalam rundingan di London.', 'Kemerdekaan pada 31 Ogos 1957 jika boleh (F) — diumumkan di Melaka (H). Suruhanjaya bebas menggubal perlembagaan (F) — Suruhanjaya Reid (H). (Juga diterima: menteri tempatan mengambil alih portfolio dalam negeri/kewangan; Malayanisasi; perjanjian pertahanan.)', rb('F: perkara pertama|H: huraian|F: perkara kedua|H: huraian')),
  op('(c)', 4, 'Pada pendapat anda, mengapakah kemerdekaan negara dicapai melalui rundingan dan bukan peperangan? Apakah iktibarnya?', 'Pemimpin bersatu (Raja-raja dan Perikatan), menunjukkan kematangan; kerjasama kaum memenuhi syarat British; British juga sedang mengurangkan tanah jajahan selepas perang; rundingan mengelakkan pertumpahan darah. Iktibar: diplomasi dan perpaduan lebih berkesan.', rb('Perpaduan pemimpin|Kerjasama kaum/syarat British|Elak pertumpahan darah|Iktibar diplomasi/perpaduan'))
], true);
mt('s4c9', 2, 'Padankan anggota Suruhanjaya Reid dengan keterangan yang betul.', [
  ['Lord Reid', 'Pengerusi suruhanjaya'],
  ['Sir William McKell', 'Wakil Australia'],
  ['B. Malik', 'Wakil India'],
  ['Hakim Abdul Hamid', 'Wakil Pakistan']
], 'Suruhanjaya Reid dianggotai pakar perundangan Komanwel: Lord Reid dan Sir Ivor Jennings (Britain), Sir William McKell (Australia), B. Malik (India), Hakim Abdul Hamid (Pakistan).');

// ---------- T4 Bab 10 ----------
mcq('s4c10', 1, 'Di manakah bendera Union Jack diturunkan pada tengah malam 30 Ogos 1957?',
  ['Stadium Merdeka', 'Padang Pahlawan, Melaka', 'Istana Negara', 'Padang Kelab Selangor'], 3,
  'Union Jack diturunkan di Padang Kelab Selangor (kini Dataran Merdeka). Upacara pemasyhuran rasmi pula berlangsung di Stadium Merdeka pada pagi 31 Ogos 1957.');
mcq('s4c10', 1, 'Yang di-Pertuan Agong pertama Persekutuan Tanah Melayu ialah',
  ['Tunku Abdul Rahman Putra Al-Haj', 'Tuanku Abdul Rahman ibni Almarhum Tuanku Muhammad', 'Sultan Hisamuddin Alam Shah', 'Sultan Ibrahim'], 1,
  'Tuanku Abdul Rahman, Yang di-Pertuan Besar Negeri Sembilan, ialah YDPA pertama. Tunku Abdul Rahman Putra ialah Perdana Menteri pertama — dua nama hampir sama yang sering dikelirukan.');
mcq('s4c10', 2, 'Antara berikut, yang manakah bukti kemerdekaan politik Persekutuan Tanah Melayu?',
  ['Menjadi anggota Pertubuhan Bangsa-Bangsa Bersatu pada 17 September 1957', 'Penubuhan British Military Administration', 'Pelaksanaan Rancangan Briggs', 'Pengenalan Sistem Ahli'], 0,
  'Keanggotaan PBB membuktikan negara diiktiraf sebagai negara berdaulat. BMA, Rancangan Briggs dan Sistem Ahli berlaku semasa penjajahan British.');
opn('s4c10', 'kbat', 2, 4, 'Sebagai generasi muda, cadangkan **dua** cara mengisi kemerdekaan dan huraikan.',
  'Menuntut ilmu dan menguasai kemahiran (F) supaya dapat menyumbang kepada pembangunan negara seperti pemimpin terdahulu yang berilmu (H). Memelihara perpaduan (F) dengan menghormati kaum lain dan menolak provokasi perkauman, kerana kemerdekaan dicapai melalui kerjasama kaum (H).',
  rb('Cadangan 1|Huraian berkaitan sejarah/masa kini|Cadangan 2|Huraian berkaitan sejarah/masa kini'), { kbat: true });
fill('s4c10', 1, 'Upacara pemasyhuran kemerdekaan diadakan di Stadium ___ pada 31 Ogos 1957, dan Tunku Abdul Rahman melaungkan "Merdeka!" sebanyak ___ kali.',
  [['Merdeka'], ['7', 'tujuh']], 'Pemasyhuran dibaca oleh Tunku di Stadium Merdeka; laungan "Merdeka" sebanyak tujuh kali.');

// ---------- T5 Bab 1 ----------
mcq('s5c1', 1, `Antara berikut, yang manakah ciri negara yang berdaulat?

I Mempunyai pemerintahan
II Mempunyai sempadan
III Mempunyai perundangan
IV Mempunyai kuasa veto di PBB`, I4, 0,
  'Empat ciri negara berdaulat: pemerintahan, sempadan, perundangan dan rakyat. Kuasa veto hanya dimiliki lima anggota tetap Majlis Keselamatan PBB — bukan syarat kedaulatan.');
mcq('s5c1', 2, 'Kedaulatan undang-undang bermaksud',
  ['raja berkuasa mutlak ke atas rakyat', 'Perlembagaan menjadi undang-undang tertinggi negara', 'negara diiktiraf oleh negara lain', 'tentera mengawal pemerintahan'], 1,
  'Kedaulatan undang-undang meletakkan Perlembagaan sebagai undang-undang tertinggi (Perkara 4). Pengiktirafan negara lain ialah kedaulatan antarabangsa; kuasa mutlak raja ialah kedaulatan tradisional.');
mcq('s5c1', 1, 'Pada tahun 2002, Mahkamah Keadilan Antarabangsa memutuskan bahawa Pulau Sipadan dan Pulau Ligitan milik',
  ['Indonesia', 'Filipina', 'Malaysia', 'Brunei'], 2,
  'ICJ memutuskan Sipadan dan Ligitan milik Malaysia (2002). Jangan keliru dengan kes Pulau Batu Puteh (2008) yang diputuskan milik Singapura.');
st('s5c1', 'struktur', 2, null, 'Kedaulatan ialah asas kewujudan sesebuah negara.', [
  op('(a)', 2, 'Apakah maksud kedaulatan?', 'Kuasa tertinggi sesebuah negara untuk memerintah wilayah dan rakyatnya tanpa campur tangan kuasa luar.', rb('Kuasa tertinggi negara|Tanpa campur tangan kuasa luar')),
  op('(b)', 4, 'Jelaskan **dua** kepentingan mewujudkan negara berdaulat.', 'Keberkesanan pentadbiran (F): kerajaan bebas merancang dan melaksanakan dasar sendiri (H). Kecemerlangan hubungan luar (F): negara diiktiraf dan boleh menyertai PBB serta ASEAN (H).', rb('F: kepentingan pertama|H: huraian|F: kepentingan kedua|H: huraian')),
  op('(c)', 4, 'Cadangkan **dua** peranan rakyat dalam mempertahankan kedaulatan negara.', 'Memupuk patriotisme (F) — menghormati lambang negara, menyertai sambutan Hari Kebangsaan (H). Menjaga perpaduan (F) — menolak isu perkauman yang boleh memecahbelahkan rakyat (H).', rb('Peranan 1|Huraian/contoh|Peranan 2|Huraian/contoh'))
], true);
opn('s5c1', 'kbat', 3, 6, 'Ancaman terhadap kedaulatan negara pada abad ke-21 bukan sahaja datang daripada pencerobohan bersenjata. Bincangkan.',
  'Selain pencerobohan bersenjata (contoh: Lahad Datu 2013), ancaman lain termasuk: pertikaian sempadan/wilayah yang perlu diselesaikan melalui ICJ (contoh Sipadan–Ligitan); ancaman siber terhadap sistem kerajaan dan ekonomi; berita palsu dan hasutan perkauman yang menggugat perpaduan; pemerdagangan orang dan penyeludupan dadah merentas sempadan; kebergantungan ekonomi yang melemahkan keupayaan membuat keputusan sendiri. Oleh itu, kedaulatan dipertahankan melalui pertahanan, diplomasi, undang-undang dan perpaduan rakyat.',
  rb('Mengakui ancaman bersenjata dengan contoh|Pertikaian sempadan (contoh ICJ)|Ancaman siber|Berita palsu/hasutan perkauman|Jenayah rentas sempadan|Kesimpulan langkah pertahanan menyeluruh'), { kbat: true });

// ---------- T5 Bab 2 ----------
mcq('s5c2', 1, 'Perkara dalam Perlembagaan Persekutuan yang menetapkan Islam sebagai agama Persekutuan ialah',
  ['Perkara 4', 'Perkara 152', 'Perkara 153', 'Perkara 3'], 3,
  'Perkara 3: Islam agama Persekutuan, agama lain bebas diamalkan. Perkara 152 berkaitan bahasa Melayu; Perkara 153 kedudukan istimewa; Perkara 4 keluhuran perlembagaan.');
mcq('s5c2', 1, 'Antara berikut, yang manakah ciri moden Perlembagaan Persekutuan?',
  ['Kewarganegaraan', 'Pemerintahan beraja', 'Bahasa Melayu', 'Agama Islam'], 0,
  'Ciri moden: kerajaan persekutuan, demokrasi berparlimen dan kewarganegaraan. Raja, Islam dan bahasa Melayu ialah ciri tradisional warisan negara bangsa.');
mcq('s5c2', 2, 'Pindaan Perlembagaan 1963 telah',
  ['mengeluarkan Singapura daripada Malaysia', 'menubuhkan Mahkamah Tinggi Borneo', 'memperkenalkan Malayan Union', 'menubuhkan Majlis Raja-Raja buat kali pertama'], 1,
  'Pindaan 1963 menyusun semula mahkamah atasan termasuk Mahkamah Tinggi Borneo, dan mewujudkan Yang di-Pertua Negeri. Penyingkiran Singapura berlaku melalui pindaan 1965.');
opn('s5c2', 'esei', 2, 20, `(a) Jelaskan asas pembentukan Perlembagaan Persekutuan dari aspek undang-undang Negeri Melayu dan undang-undang Inggeris. (8 markah)
(b) Huraikan ciri tradisional dan ciri moden Perlembagaan Persekutuan. (8 markah)
(c) Bagaimanakah rakyat boleh mempertahankan Perlembagaan Persekutuan? (4 markah)`,
`**(a)** *Undang-undang Negeri Melayu:* Hukum Kanun Melaka dan Undang-undang Laut Melaka menjadi asas pemerintahan beraja dan Islam (F/H). Undang-undang Tubuh Kerajaan Johor 1895 ialah perlembagaan bertulis awal (F/H). Itqan al-Muluk bi Ta'dil al-Suluk Terengganu 1911 (F/H). *Undang-undang Inggeris:* Piagam Keadilan 1807 di Pulau Pinang (F) memperkenalkan sistem mahkamah Inggeris (H); Piagam Keadilan Kedua 1826 untuk Negeri-negeri Selat (F/H).

**(b)** *Tradisional:* pemerintahan beraja (YDPA, Majlis Raja-Raja); Islam agama Persekutuan (Perkara 3); bahasa Melayu bahasa kebangsaan (Perkara 152); kedudukan istimewa Melayu dan Bumiputera (Perkara 153). *Moden:* kerajaan persekutuan (pembahagian kuasa, Jadual Kesembilan); demokrasi berparlimen (pilihan raya); kewarganegaraan (Perkara 14–31).

**(c)** Memahami dan menghormati isi perlembagaan; mematuhi undang-undang; tidak mempersoalkan perkara sensitif yang dilindungi; menggunakan saluran sah (mahkamah, wakil rakyat) apabila tidak bersetuju.`,
  rb('(a) Hukum Kanun Melaka/Undang-undang Laut Melaka|(a) Huraian (raja/Islam)|(a) Undang-undang Tubuh Kerajaan Johor 1895|(a) Itqan al-Muluk Terengganu 1911|(a) Piagam Keadilan 1807|(a) Huraian sistem mahkamah Inggeris|(a) Piagam Keadilan Kedua 1826|(a) Huraian tambahan|(b) Pemerintahan beraja|(b) Islam (Perkara 3)|(b) Bahasa Melayu (Perkara 152)|(b) Kedudukan istimewa (Perkara 153)|(b) Kerajaan persekutuan|(b) Demokrasi berparlimen|(b) Kewarganegaraan|(b) Huraian tambahan|(c) Cara 1|(c) Cara 2|(c) Cara 3|(c) Cara 4'));
mt('s5c2', 2, 'Padankan Perkara dalam Perlembagaan Persekutuan dengan isinya.', [
  ['Perkara 3', 'Islam agama Persekutuan'],
  ['Perkara 4', 'Perlembagaan undang-undang tertinggi'],
  ['Perkara 152', 'Bahasa Melayu bahasa kebangsaan'],
  ['Perkara 153', 'Kedudukan istimewa Melayu dan Bumiputera'],
  ['Perkara 159', 'Cara meminda perlembagaan']
], 'Nombor Perkara menguatkan huraian dalam jawapan esei dan kerap diuji dalam Kertas 1.');

// ---------- T5 Bab 3 ----------
mcq('s5c3', 1, 'Durbar pertama pada tahun 1897 diadakan di',
  ['Kuala Lumpur', 'Seri Menanti', 'Kuala Kangsar', 'Klang'], 2,
  'Durbar pertama diadakan di Kuala Kangsar, Perak, melibatkan raja-raja Negeri-negeri Melayu Bersekutu.');
mcq('s5c3', 1, 'Badan yang berperanan mentafsir undang-undang dan mengadili kes ialah',
  ['Badan Perundangan', 'Badan Eksekutif', 'Majlis Raja-Raja', 'Badan Kehakiman'], 3,
  'Badan Kehakiman (mahkamah) mentafsir undang-undang. Badan Perundangan menggubal undang-undang; Badan Eksekutif melaksanakannya.');
mcq('s5c3', 2, 'Antara berikut, yang manakah kuasa budi bicara Yang di-Pertuan Agong?',
  ['Melantik Perdana Menteri', 'Meluluskan belanjawan negara', 'Menjatuhkan hukuman di mahkamah', 'Menggubal undang-undang negeri'], 0,
  'YDPA melantik ahli Dewan Rakyat yang pada pendapat baginda mendapat kepercayaan majoriti sebagai PM — kuasa budi bicara. Belanjawan diluluskan Parlimen; hukuman dijatuhkan mahkamah.');
st('s5c3', 'struktur', 2, null, 'Malaysia mengamalkan Raja Berperlembagaan dan Demokrasi Berparlimen.', [
  op('(a)', 2, 'Nyatakan **dua** fungsi Majlis Raja-Raja.', 'Memilih Yang di-Pertuan Agong dan Timbalan; memberi persetujuan kepada pindaan berkaitan kedudukan raja / kedudukan istimewa.', rb('Memilih YDPA/Timbalan|Persetujuan pindaan tertentu / hal agama Islam')),
  op('(b)', 4, 'Jelaskan fungsi Badan Perundangan dan Badan Eksekutif.', 'Badan Perundangan (Parlimen) menggubal dan meminda undang-undang (F) serta meluluskan belanjawan (H). Badan Eksekutif (Jemaah Menteri diketuai PM) melaksanakan undang-undang dan dasar (F) melalui kementerian dan jabatan (H).', rb('F: Perundangan menggubal undang-undang|H: belanjawan/meminda|F: Eksekutif melaksanakan dasar|H: kementerian/jabatan')),
  op('(c)', 4, 'Pada pendapat anda, apakah keunikan amalan demokrasi berparlimen di Malaysia?', 'Gabungan unsur tradisional (raja) dan moden (pilihan raya); mekanisme semak dan imbang antara tiga badan; kuasa budi bicara raja sebagai penimbang; kerjasama politik pelbagai kaum dalam kerajaan.', rb('Tradisional + moden|Semak dan imbang|Budi bicara raja|Kerjasama politik'))
], true);
opn('s5c3', 'esei', 3, 20, `(a) Huraikan perkembangan institusi Majlis Raja-Raja dari Durbar 1897 hingga selepas merdeka. (10 markah)
(b) Jelaskan kuasa Yang di-Pertuan Agong dalam Perlembagaan Persekutuan. (6 markah)
(c) Mengapakah prinsip "Kesetiaan kepada Raja dan Negara" penting kepada rakyat Malaysia? (4 markah)`,
`**(a)** Durbar pertama 1897 di Kuala Kangsar (F) — persidangan raja-raja NNMB (Perak, Selangor, Negeri Sembilan, Pahang) (H). Durbar memberi peluang raja menyuarakan pandangan, walaupun kuasa sebenar pada British (H). Majlis Sultan-sultan semasa Malayan Union (F) — hanya badan penasihat tanpa kuasa (H). Majlis Raja-Raja di bawah PTM 1948 (F) — ditubuhkan secara rasmi, persetujuannya diperlukan bagi perkara tertentu (H). Selepas merdeka, Majlis Raja-Raja diperuntukkan dalam Perkara 38 (F) — memilih YDPA dan memberi persetujuan pindaan sensitif (H).

**(b)** Kuasa eksekutif — melantik PM dan menteri; kuasa perundangan — memanggil, memprorog dan membubarkan Parlimen, memperkenan rang undang-undang; kuasa kehakiman — melantik hakim atas nasihat PM, memberi pengampunan; Pemerintah Tertinggi ATM; ketua agama Islam bagi negeri tanpa raja dan Wilayah Persekutuan; kuasa budi bicara.

**(c)** Raja ialah lambang kedaulatan dan perpaduan; kesetiaan memupuk patriotisme; raja berperanan sebagai penimbang semasa krisis (contoh: 1969); memperkukuh kestabilan negara.`,
  rb('(a) Durbar 1897 Kuala Kangsar|(a) Raja-raja NNMB|(a) Peranan Durbar|(a) Majlis Sultan-sultan (Malayan Union)|(a) Tiada kuasa sebenar|(a) Majlis Raja-Raja PTM 1948|(a) Persetujuan perkara tertentu|(a) Perkara 38|(a) Memilih YDPA|(a) Persetujuan pindaan sensitif|(b) Kuasa eksekutif|(b) Kuasa perundangan|(b) Kuasa kehakiman/pengampunan|(b) Pemerintah Tertinggi ATM|(b) Ketua agama Islam|(b) Kuasa budi bicara|(c) Lambang kedaulatan/perpaduan|(c) Patriotisme|(c) Penimbang semasa krisis|(c) Kestabilan negara'));

// ---------- T5 Bab 4 ----------
mcq('s5c4', 1, 'Negeri-negeri Melayu Bersekutu yang dibentuk pada tahun 1896 terdiri daripada',
  ['Kedah, Perlis, Kelantan dan Terengganu', 'Perak, Selangor, Negeri Sembilan dan Pahang', 'Johor, Melaka, Pulau Pinang dan Singapura', 'Perak, Kedah, Johor dan Pahang'], 1,
  'NNMB (1896): Perak, Selangor, Negeri Sembilan, Pahang. Kedah, Perlis, Kelantan, Terengganu dan Johor ialah Negeri-negeri Melayu Tidak Bersekutu; Melaka, Pulau Pinang, Singapura ialah Negeri-negeri Selat.');
mcq('s5c4', 1, 'Bidang kuasa manakah tersenarai dalam Senarai Negeri?',
  ['Pertahanan', 'Hal ehwal luar negeri', 'Tanah', 'Pendidikan'], 2,
  'Tanah ialah bidang kuasa negeri. Pendidikan sering disangka bidang negeri, tetapi ia Senarai Persekutuan.');
mcq('s5c4', 2, 'Sekiranya undang-undang Negeri bercanggah dengan undang-undang Persekutuan,',
  ['undang-undang Negeri diutamakan', 'Yang di-Pertuan Agong memilih salah satu', 'Majlis Raja-Raja membuat keputusan', 'undang-undang Persekutuan diutamakan'], 3,
  'Perkara 75: undang-undang Persekutuan mengatasi undang-undang Negeri setakat yang bercanggah. Ini menjamin keseragaman dasar nasional.');
st('s5c4', 'sumber', 2, `> *Sumber (rekaan):* Notis sebuah majlis perbandaran: "Kutipan sampah di Taman Seri Murni akan dibuat tiga kali seminggu. Orang ramai diingatkan memperbaharui lesen perniagaan sebelum 31 Disember. Taman permainan baharu dibuka minggu hadapan."`,
  'Berdasarkan sumber dan pengetahuan sejarah anda, jawab soalan berikut.', [
  op('(a)', 2, 'Kerajaan peringkat manakah yang mengeluarkan notis ini, dan di bawah kawalan kerajaan manakah ia diletakkan?', 'Kerajaan tempatan (majlis perbandaran); di bawah Kerajaan Negeri.', rb('Kerajaan tempatan|Di bawah Kerajaan Negeri')),
  op('(b)', 4, 'Jelaskan **dua** sebab wujudnya pembahagian kuasa antara Kerajaan Persekutuan dan Kerajaan Negeri.', 'Mengelakkan pertindihan dan konflik kuasa (F) kerana setiap kerajaan tahu tanggungjawabnya dalam Jadual Kesembilan (H). Perkara kepentingan nasional diurus Pusat (F), contohnya pertahanan, manakala hal setempat seperti tanah diurus Negeri (H).', rb('F: elak pertindihan|H: Jadual Kesembilan|F: kepentingan nasional vs setempat|H: contoh pertahanan/tanah')),
  op('(c)', 4, 'Buktikan bahawa kerajaan tempatan berperanan penting dalam kesejahteraan rakyat. Gunakan sumber dan contoh lain.', 'Kebersihan — kutipan sampah mengelakkan wabak; ekonomi — pelesenan perniagaan memastikan perniagaan teratur dan selamat; rekreasi — taman permainan menyokong gaya hidup sihat; keselamatan — lampu jalan dan kawalan bangunan.', rb('Kebersihan (dari sumber)|Pelesenan perniagaan (dari sumber)|Rekreasi (dari sumber)|Contoh tambahan di luar sumber'))
], true);
mt('s5c4', 1, 'Padankan bidang kuasa dengan senarai yang betul dalam Jadual Kesembilan.', [
  ['Pertahanan', 'Senarai Persekutuan'],
  ['Agama Islam dan adat Melayu', 'Senarai Negeri'],
  ['Biasiswa', 'Senarai Bersama']
], 'Senarai Persekutuan: pertahanan, hal ehwal luar, pendidikan. Senarai Negeri: tanah, agama Islam, kerajaan tempatan. Senarai Bersama: kebajikan, biasiswa, perancangan bandar.');

// ---------- T5 Bab 5 ----------
mcq('s5c5', 1, 'Tunku Abdul Rahman mengumumkan idea gagasan Malaysia secara rasmi pada',
  ['31 Ogos 1957 di Kuala Lumpur', '27 Mei 1961 di Singapura', '9 Julai 1963 di London', '16 September 1963 di Kuala Lumpur'], 1,
  'Ucapan di Hotel Adelphi, Singapura pada 27 Mei 1961. 9 Julai 1963 ialah tarikh Perjanjian Malaysia ditandatangani; 16 September 1963 tarikh Malaysia diisytiharkan.');
mcq('s5c5', 1, 'Suruhanjaya Cobbold ditubuhkan untuk',
  ['meninjau pendapat rakyat Sabah dan Sarawak tentang Malaysia', 'menggubal Perlembagaan Persekutuan Tanah Melayu', 'mengendalikan referendum Singapura', 'menamatkan Konfrontasi'], 0,
  'Suruhanjaya Cobbold (1962) meninjau pendapat rakyat Sabah dan Sarawak. Penggubalan perlembagaan 1957 ialah tugas Suruhanjaya Reid.');
mcq('s5c5', 2, `Mengapakah Brunei akhirnya tidak menyertai Malaysia?

I Isu pembahagian hasil minyak
II Isu kedudukan Sultan Brunei dalam Majlis Raja-Raja
III Brunei telah mencapai kemerdekaan pada 1957
IV Desakan Thailand`, ['I dan II', 'I dan III', 'II dan IV', 'III dan IV'], 0,
  'Dua isu utama ialah hasil minyak dan kekananan Sultan dalam Majlis Raja-Raja. Brunei hanya merdeka pada 1984, dan Thailand sebenarnya menyokong pembentukan Malaysia.');
opn('s5c5', 'esei', 2, 20, `(a) Jelaskan rasional pembentukan Malaysia. (8 markah)
(b) Huraikan langkah-langkah ke arah pembentukan Malaysia. (8 markah)
(c) Pada pendapat anda, mengapakah hubungan baik dengan negara jiran penting kepada Malaysia? (4 markah)`,
`**(a)** Keselamatan (F): membendung pengaruh komunis yang kuat di Singapura (H). Keseimbangan penduduk (F): penyertaan Sabah dan Sarawak mengimbangi komposisi kaum apabila Singapura menyertai (H). Mempercepat kemerdekaan (F) Sabah, Sarawak dan Brunei daripada British (H). Pembangunan wilayah (F): Sabah dan Sarawak dapat dimajukan melalui kerjasama dalam persekutuan (H).

**(b)** Siri lawatan pemimpin Sabah dan Sarawak ke Tanah Melayu (F/H); Jawatankuasa Setia Kawan Malaysia 1961 dipengerusikan Donald Stephens (F/H); Suruhanjaya Cobbold 1962 meninjau pendapat rakyat (F/H); Referendum Singapura 1 September 1962 (F/H); Jawatankuasa Antara Kerajaan (Lord Lansdowne) merangka perlindungan hak Sabah dan Sarawak (F/H); Perjanjian Malaysia 9 Julai 1963 dan Misi PBB (F/H).

**(c)** Menjamin keselamatan serantau (pengalaman Konfrontasi menunjukkan kos konflik); meningkatkan perdagangan dan pelaburan; menyelesaikan pertikaian secara aman (contoh ICJ); kerjasama ASEAN menangani isu bersama seperti jerebu dan jenayah rentas sempadan.`,
  rb('(a) F: keselamatan|(a) H: komunis di Singapura|(a) F: keseimbangan penduduk|(a) H: Sabah/Sarawak imbangi|(a) F: mempercepat kemerdekaan|(a) H: Sabah/Sarawak/Brunei|(a) F: pembangunan wilayah|(a) H: huraian|(b) Siri lawatan|(b) JSKM 1961|(b) Donald Stephens|(b) Suruhanjaya Cobbold 1962|(b) Referendum Singapura 1962|(b) JAK/Lord Lansdowne|(b) Perjanjian Malaysia 9 Julai 1963|(b) Misi PBB|(c) Keselamatan (iktibar Konfrontasi)|(c) Ekonomi/perdagangan|(c) Penyelesaian aman|(c) Kerjasama ASEAN'));
mt('s5c5', 2, 'Padankan tokoh dengan peranannya dalam pembentukan Malaysia.', [
  ['Tunku Abdul Rahman', 'Mengumumkan idea Malaysia pada 1961'],
  ['Donald Stephens', 'Pengerusi Jawatankuasa Setia Kawan Malaysia'],
  ['Lord Cobbold', 'Mengetuai suruhanjaya meninjau pendapat rakyat Sabah dan Sarawak'],
  ['Lord Lansdowne', 'Pengerusi Jawatankuasa Antara Kerajaan'],
  ['Lee Kuan Yew', 'Pemimpin PAP yang menyokong Singapura menyertai Malaysia']
], 'Tokoh dan jawatankuasa ini sering diuji secara padanan dalam Kertas 1.');

// ---------- T5 Bab 6 ----------
mcq('s5c6', 1, 'Singapura berpisah daripada Malaysia pada',
  ['16 September 1963', '31 Ogos 1965', '13 Mei 1969', '9 Ogos 1965'], 3,
  'Singapura berpisah pada 9 Ogos 1965. 16 September 1963 ialah tarikh pembentukan Malaysia.');
mcq('s5c6', 1, 'Majlis Gerakan Negara (MAGERAN) yang ditubuhkan selepas Tragedi 13 Mei 1969 diketuai oleh',
  ['Tunku Abdul Rahman', 'Tun Abdul Razak', 'Tun Dr Ismail', 'Tun Hussein Onn'], 1,
  'Tun Abdul Razak mengetuai MAGERAN yang mentadbir negara semasa Parlimen digantung. Tunku masih Perdana Menteri tetapi MAGERAN dipimpin Tun Razak.');
mcq('s5c6', 2, 'Perjanjian Damai Haadyai pada 2 Disember 1989 ditandatangani antara Kerajaan Malaysia, Kerajaan Thailand dan',
  ['Parti Komunis Malaya', 'Pertubuhan Komunis Sarawak', 'Kerajaan Indonesia', 'Barisan Sosialis'], 0,
  'Perjanjian Haadyai menamatkan perjuangan bersenjata PKM. Di Sarawak, ancaman komunis (SCO) ditangani antaranya melalui Perjanjian Sri Aman (1973/74).');
st('s5c6', 'sumber', 3, `> *Petikan (rekaan):* "Ketegangan politik semakin memuncak. Slogan yang menuntut kesamarataan mutlak bagi semua kaum dilihat mencabar kedudukan istimewa yang dijamin perlembagaan. Pertikaian tentang sumbangan hasil kepada Kerajaan Pusat berlarutan. Akhirnya, demi mengelakkan pertumpahan darah, keputusan sukar terpaksa dibuat."`,
  'Berdasarkan petikan dan pengetahuan sejarah anda, jawab soalan berikut.', [
  op('(a)', 2, 'Namakan slogan yang dimaksudkan dan parti yang memperjuangkannya.', '"Malaysian Malaysia"; Parti Tindakan Rakyat (PAP).', rb('"Malaysian Malaysia"|PAP')),
  op('(b)', 4, 'Jelaskan **dua** faktor pemisahan Singapura selain yang dinyatakan dalam petikan.', 'Penyertaan PAP dalam PRU 1964 di Semenanjung (F) dianggap melanggar persefahaman politik dengan Perikatan (H). Rusuhan kaum di Singapura pada 1964 (F) menunjukkan ketegangan perkauman yang membimbangkan (H).', rb('F: PRU 1964|H: huraian|F: rusuhan kaum 1964|H: huraian')),
  op('(c)', 4, 'Nyatakan pendirian anda: adakah pemisahan Singapura boleh dielakkan? Berikan hujah.', 'Contoh pendirian "sukar dielakkan": perbezaan ideologi politik yang mendalam; ketegangan kaum yang sudah mencetuskan rusuhan; Tunku memilih pemisahan untuk mengelakkan pertumpahan darah. (Pendirian "boleh dielakkan" juga diterima jika disokong hujah: rundingan berterusan, tolak ansur politik, mekanisme perkongsian hasil.) Iktibar: perbincangan dan tolak ansur penting.', rb('Pendirian jelas|Hujah 1 berfakta|Hujah 2 berfakta|Iktibar/kesimpulan'))
], true);
opn('s5c6', 'kbat', 3, 6, 'Tragedi 13 Mei 1969 menjadi titik perubahan dalam pembinaan negara. Huraikan pernyataan ini.',
  'Selepas tragedi, kerajaan menyedari jurang ekonomi dan perpecahan kaum mengancam negara. Rukun Negara (31 Ogos 1970) diisytiharkan sebagai ideologi kebangsaan untuk menyatukan rakyat. Dasar Ekonomi Baru (1971) diperkenalkan untuk membasmi kemiskinan dan menyusun semula masyarakat. Dasar Kebudayaan Kebangsaan (1971) dan dasar pendidikan dimantapkan untuk membina identiti nasional. Perkara sensitif dilindungi melalui pindaan undang-undang. Kesannya, negara mengalami kestabilan politik dan pertumbuhan ekonomi dalam dekad berikutnya.',
  rb('Kesedaran punca (jurang ekonomi/perpecahan)|Rukun Negara 1970|DEB 1971|DKK/pendidikan|Perlindungan perkara sensitif|Kesan positif jangka panjang'), { kbat: true });

// ---------- T5 Bab 7 ----------
mcq('s5c7', 1, 'Prinsip kedua Rukun Negara ialah',
  ['Kepercayaan kepada Tuhan', 'Keluhuran Perlembagaan', 'Kesetiaan kepada Raja dan Negara', 'Kedaulatan Undang-undang'], 2,
  'Urutan: (1) Kepercayaan kepada Tuhan, (2) Kesetiaan kepada Raja dan Negara, (3) Keluhuran Perlembagaan, (4) Kedaulatan Undang-undang, (5) Kesopanan dan Kesusilaan.');
mcq('s5c7', 2, 'Laporan yang menekankan kemahiran asas membaca, menulis dan mengira (3M) ialah',
  ['Laporan Rahman Talib 1960', 'Laporan Jawatankuasa Kabinet 1979', 'Penyata Razak 1956', 'Laporan Barnes 1951'], 1,
  'Laporan Jawatankuasa Kabinet 1979 (diketuai Dr Mahathir) menekankan 3M. Laporan Rahman Talib (1960) mengkaji pelaksanaan Penyata Razak dan menjadi asas Akta Pelajaran 1961.');
mcq('s5c7', 2, `Antara berikut, yang manakah prinsip Dasar Kebudayaan Kebangsaan?

I Berteraskan kebudayaan rakyat asal rantau ini
II Unsur kebudayaan lain yang sesuai dan wajar boleh diterima
III Islam menjadi unsur penting
IV Kebudayaan Barat dijadikan teras`, I4, 0,
  'Tiga prinsip DKK ialah I, II dan III (Kongres Kebudayaan Kebangsaan 1971). Budaya Barat tidak dijadikan teras.');
opn('s5c7', 'esei', 2, 20, `(a) Jelaskan maksud perpaduan kaum dan integrasi nasional. (4 markah)
(b) Huraikan usaha kerajaan memperkasa perpaduan melalui pendidikan, bahasa dan sukan. (12 markah)
(c) Cadangkan langkah yang boleh diambil oleh pelajar untuk memperkukuh perpaduan. (4 markah)`,
`**(a)** Perpaduan kaum: rakyat pelbagai kaum hidup harmoni, saling menghormati dan bekerjasama (F/H). Integrasi nasional: proses menyatukan rakyat dan wilayah (Semenanjung, Sabah, Sarawak) di bawah satu identiti nasional (F/H).

**(b)** *Pendidikan:* sukatan pelajaran yang sama sejak Penyata Razak (F/H); Akta Pendidikan 1996 menetapkan bahasa kebangsaan sebagai bahasa pengantar utama (F/H); Falsafah Pendidikan Kebangsaan membentuk insan seimbang (F/H). *Bahasa:* DBP (1956) memartabatkan bahasa Melayu (F/H); Akta Bahasa Kebangsaan menjadikan bahasa Melayu bahasa rasmi (F/H); UKM (1970) pusat ilmu berbahasa Melayu (F/H). *Sukan:* SUKMA dan MASUM menghimpunkan atlet pelbagai kaum (F/H); kejayaan atlet dirai bersama — "kejayaan Malaysia, kejayaan bersama" (F/H); laungan "Malaysia Boleh" (F/H).

**(c)** Menyertai aktiviti kokurikulum pelbagai kaum; menggunakan bahasa Melayu dalam komunikasi; meraikan perayaan bersama rakan; menolak kandungan media sosial yang berbaur perkauman.`,
  rb('(a) Takrif perpaduan|(a) Huraian|(a) Takrif integrasi nasional|(a) Huraian|(b) Sukatan sama (Penyata Razak)|(b) Akta Pendidikan 1996|(b) Falsafah Pendidikan Kebangsaan|(b) Huraian pendidikan|(b) DBP 1956|(b) Akta Bahasa Kebangsaan|(b) UKM 1970|(b) Huraian bahasa|(b) SUKMA/MASUM|(b) Kejayaan dirai bersama|(b) Malaysia Boleh|(b) Huraian sukan|(c) Cadangan 1|(c) Cadangan 2|(c) Cadangan 3|(c) Cadangan 4'));
fill('s5c7', 1, 'Rukun Negara diisytiharkan pada 31 Ogos ___. Prinsip ketiganya ialah Keluhuran ___ dan prinsip kelimanya ialah Kesopanan dan ___.',
  [['1970'], ['Perlembagaan'], ['Kesusilaan']],
  'Rukun Negara diisytiharkan pada Hari Kebangsaan 1970 sebagai respons kepada Tragedi 13 Mei 1969.');

// ---------- T5 Bab 8 ----------
mcq('s5c8', 1, 'Strategi serampang dua mata Dasar Ekonomi Baru ialah',
  ['membasmi kemiskinan tanpa mengira kaum dan menyusun semula masyarakat', 'membasmi kemiskinan orang Melayu sahaja dan memajukan bandar', 'menswastakan syarikat kerajaan dan menarik pelabur asing', 'membina kereta nasional dan Koridor Raya Multimedia'], 0,
  'DEB: membasmi kemiskinan tanpa mengira kaum dan menyusun semula masyarakat untuk menghapuskan pengenalan kaum mengikut fungsi ekonomi. Pilihan B salah kerana DEB tidak terhad kepada satu kaum.');
mcq('s5c8', 1, 'Rancangan Buku Hijau (1974) bertujuan',
  ['menubuhkan bank Islam', 'menambah pendapatan dan bekalan makanan melalui pertanian', 'membina kawasan perindustrian bebas cukai', 'melatih tenaga mahir teknologi maklumat'], 1,
  'Rancangan Buku Hijau menggalakkan rakyat menanam sayur dan menternak di tanah terbiar untuk menambah pendapatan dan bekalan makanan.');
mcq('s5c8', 2, 'Kereta nasional pertama, Proton Saga, diperkenalkan pada tahun',
  ['1975', '1993', '1996', '1985'], 3,
  'Proton Saga dilancarkan pada 1985 sebagai simbol perindustrian berat. 1996 ialah tahun MSC dilancarkan.');
st('s5c8', 'struktur', 2, null, 'Dasar Pembangunan Nasional (DPN) dilaksanakan pada 1991–2000.', [
  op('(a)', 2, 'Nyatakan **dua** sebab DPN diperkenalkan.', 'DEB tamat pada 1990 dan sasarannya belum tercapai sepenuhnya; keperluan pembangunan yang lebih seimbang (selaras Wawasan 2020).', rb('DEB tamat/sasaran belum tercapai|Pembangunan seimbang/Wawasan 2020')),
  op('(b)', 4, 'Jelaskan **dua** pelaksanaan DPN.', 'Pembasmian kemiskinan (F) dengan memberi tumpuan kepada golongan termiskin melalui program khas seperti PPRT (H). Pembangunan Masyarakat Perdagangan dan Perindustrian Bumiputera (F) melalui latihan dan bantuan usahawan (H).', rb('F: pelaksanaan pertama|H: huraian|F: pelaksanaan kedua|H: huraian')),
  op('(c)', 4, 'Pada pendapat anda, bagaimanakah rakyat boleh menyumbang kepada kemakmuran negara?', 'Menguasai kemahiran (termasuk TVET dan teknologi); berusaha dalam keusahawanan; menjaga harta awam; menyokong kelestarian alam sekitar dan produk tempatan.', rb('Kemahiran/TVET|Keusahawanan|Menjaga harta awam|Kelestarian/produk tempatan'))
], true);
opn('s5c8', 'kbat', 3, 6, `Berdasarkan stimulus, ulas sejauh manakah perindustrian mengubah ekonomi Malaysia.`,
  'Stimulus menunjukkan peralihan daripada ekonomi pertanian kepada perindustrian. Kawasan perindustrian dan zon perdagangan bebas (contoh Bayan Lepas) menarik pelaburan dan mewujudkan pekerjaan. Industri kereta nasional (Proton Saga 1985) memindahkan teknologi dan membina industri vendor tempatan. MSC (1996) membawa Malaysia ke ekonomi berasaskan teknologi maklumat. Namun, cabaran kekal: kebergantungan pada pelaburan asing dan keperluan tenaga kerja mahir. Kesimpulan: perindustrian meningkatkan pendapatan dan taraf hidup rakyat dengan ketara.',
  rb('Tafsir stimulus: peralihan pertanian → perindustrian|Kawasan perindustrian/pelaburan/pekerjaan|Kereta nasional/pemindahan teknologi|MSC/ekonomi digital|Cabaran/had (penilaian seimbang)|Kesimpulan'),
  { kbat: true, stimulus: `> *Stimulus (rekaan, ilustrasi tanpa angka rasmi):* Rajah menunjukkan sumbangan sektor pertanian kepada ekonomi negara semakin mengecil manakala sumbangan sektor pembuatan semakin membesar dari tahun 1970 hingga 2000.` });

// ---------- T5 Bab 9 ----------
mcq('s5c9', 1, 'ASEAN ditubuhkan melalui',
  ['Deklarasi Kuala Lumpur 1971', 'Deklarasi Langkawi 1989', 'Deklarasi Bangkok 1967', 'Perjanjian Manila 1963'], 2,
  'ASEAN ditubuhkan melalui Deklarasi Bangkok pada 8 Ogos 1967. Deklarasi Kuala Lumpur 1971 ialah deklarasi ZOPFAN.');
mcq('s5c9', 2, 'Dasar luar berkecuali dan gagasan ZOPFAN diperkenalkan semasa pentadbiran',
  ['Tunku Abdul Rahman', 'Tun Hussein Onn', 'Tun Dr Mahathir Mohamad', 'Tun Abdul Razak'], 3,
  'Tun Abdul Razak mengubah dasar luar daripada pro-Barat kepada berkecuali, memperkenalkan ZOPFAN (1971) dan menjalin hubungan diplomatik dengan China (1974).');
mcq('s5c9', 1, 'Setiausaha Agung pertama Pertubuhan Kerjasama Islam (OIC) ialah',
  ['Tunku Abdul Rahman', 'Tun Abdul Razak', 'Tan Sri Razali Ismail', 'Tun Dr Ismail'], 0,
  'Tunku Abdul Rahman menjadi Setiausaha Agung pertama OIC selepas bersara sebagai PM. Tan Sri Razali Ismail pula Presiden Perhimpunan Agung PBB (1996–1997).');
opn('s5c9', 'esei', 2, 20, `(a) Jelaskan matlamat penggubalan dasar luar Malaysia. (6 markah)
(b) Huraikan penglibatan Malaysia dalam Pertubuhan Bangsa-Bangsa Bersatu. (10 markah)
(c) Mengapakah hubungan yang harmoni dengan negara lain penting kepada Malaysia? (4 markah)`,
`**(a)** Menjaga kedaulatan dan kepentingan nasional (F) — melindungi wilayah dan sumber negara (H). Menjamin keselamatan (F) — mengelakkan ancaman luar melalui kerjasama pertahanan dan diplomasi (H). Memajukan ekonomi (F) — meluaskan perdagangan dan pelaburan (H).

**(b)** Menjadi anggota PBB pada 17 September 1957 (F/H). Mendukung Piagam PBB — menyelesaikan konflik secara aman (F/H). Terlibat dalam agensi PBB seperti UNESCO, WHO dan FAO (F/H). Menghantar pasukan pengaman — misi pertama ke Congo pada 1960, kemudian Somalia dan Bosnia (F/H). Menjadi anggota tidak tetap Majlis Keselamatan (contoh 1989–1990, 2015–2016) (F/H). Tokoh Malaysia — Tan Sri Razali Ismail Presiden Perhimpunan Agung PBB 1996–1997 (F/H). Memperjuangkan isu seperti Antartika dan Palestin (F/H).

**(c)** Menjamin keamanan serantau; membuka pasaran eksport; mendapatkan sokongan antarabangsa dalam isu kedaulatan; kerjasama menangani isu global seperti pengganasan dan pandemik.`,
  rb('(a) F: kedaulatan/kepentingan nasional|(a) H: huraian|(a) F: keselamatan|(a) H: huraian|(a) F: ekonomi|(a) H: huraian|(b) Anggota PBB 17 September 1957|(b) Mendukung Piagam PBB|(b) Agensi PBB|(b) Contoh agensi|(b) Misi pengaman Congo 1960|(b) Misi pengaman lain|(b) Majlis Keselamatan|(b) Razali Ismail|(b) Isu Antartika/Palestin|(b) Huraian tambahan|(c) Keamanan|(c) Ekonomi|(c) Sokongan antarabangsa|(c) Isu global'));
st('s5c9', 'sumber', 2, `> *Petikan (rekaan):* "Pada 8 Ogos 1967, lima menteri luar dari Asia Tenggara menandatangani sebuah deklarasi. Mereka berikrar mempercepat pertumbuhan ekonomi, kemajuan sosial dan pembangunan budaya, serta memupuk keamanan dan kestabilan serantau."`,
  'Berdasarkan petikan dan pengetahuan sejarah anda, jawab soalan berikut.', [
  op('(a)', 2, 'Namakan pertubuhan yang ditubuhkan dan deklarasi yang dimaksudkan.', 'ASEAN; Deklarasi Bangkok.', rb('ASEAN|Deklarasi Bangkok')),
  op('(b)', 4, 'Jelaskan **dua** peranan Malaysia dalam pertubuhan tersebut.', 'Mencadangkan ZOPFAN (F) melalui Deklarasi Kuala Lumpur 1971 supaya Asia Tenggara aman, bebas dan berkecuali (H). Kerjasama ekonomi (F) seperti AFTA dan segi tiga pertumbuhan IMT-GT (H). (Juga diterima: menyelesaikan konflik serantau; pengerusi ASEAN 2015 — Komuniti ASEAN.)', rb('F: peranan pertama|H: huraian|F: peranan kedua|H: huraian')),
  op('(c)', 4, 'Buktikan bahawa penglibatan dalam pertubuhan serantau memberi manfaat kepada Malaysia.', 'Pasaran lebih besar untuk eksport; keamanan serantau mengurangkan risiko konflik (berbeza dengan zaman Konfrontasi); kerjasama menangani isu bersama (jerebu, dadah, jenayah rentas sempadan); suara lebih kuat di pentas antarabangsa.', rb('Ekonomi/pasaran|Keamanan (banding Konfrontasi)|Isu rentas sempadan|Suara antarabangsa'))
], true);

// ---------- T5 Bab 10 ----------
mcq('s5c10', 1, 'Deklarasi Langkawi (1989) berkaitan dengan isu',
  ['alam sekitar', 'perdagangan bebas ASEAN', 'pembasmian dadah', 'hak asasi manusia'], 0,
  'Deklarasi Langkawi dikeluarkan semasa CHOGM 1989 di Malaysia sebagai komitmen Komanwel terhadap alam sekitar. Ia bukan deklarasi ASEAN.');
mcq('s5c10', 1, 'Pemimpin Malaysia yang membangkitkan isu Antartika sebagai warisan sejagat di Perhimpunan Agung PBB pada 1982 ialah',
  ['Tunku Abdul Rahman', 'Tun Dr Mahathir Mohamad', 'Tun Hussein Onn', 'Tun Abdul Razak'], 1,
  'Tun Dr Mahathir membangkitkan isu Antartika di PBB pada 1982 supaya benua itu dimanfaatkan untuk seluruh manusia, bukan segelintir negara.');
mcq('s5c10', 2, 'Kerjasama segi tiga pertumbuhan IMT-GT melibatkan',
  ['Indonesia, Malaysia dan Singapura', 'Brunei, Indonesia dan Filipina', 'India, Myanmar dan Thailand', 'Indonesia, Malaysia dan Thailand'], 3,
  'IMT-GT = Indonesia–Malaysia–Thailand. IMS-GT ialah Indonesia–Malaysia–Singapura; BIMP-EAGA melibatkan Brunei, Indonesia, Malaysia dan Filipina.');
opn('s5c10', 'kbat', 3, 6, 'Berdasarkan infografik, jelaskan mengapa isu ini perlu ditangani secara bersama oleh masyarakat antarabangsa dan cadangkan peranan Malaysia.',
  'Isu seperti pemerdagangan orang dan penyakit berjangkit merentas sempadan, maka tiada negara mampu menanganinya bersendirian. Kerjasama perisikan dan undang-undang antara negara diperlukan (contoh: kerjasama ASEAN). Malaysia telah menggubal Akta Antipemerdagangan Orang 2007 dan boleh meningkatkan penguatkuasaan. Dalam kesihatan, perkongsian data dan vaksin penting (pengalaman COVID-19). Malaysia boleh berperanan melalui PBB dan ASEAN dalam menggubal dasar bersama serta bantuan kemanusiaan.',
  rb('Tafsir infografik: isu merentas sempadan|Perlu kerjasama antarabangsa (contoh ASEAN/PBB)|Peranan Malaysia: undang-undang (ATIP 2007)|Peranan Malaysia: kesihatan/perkongsian data|Peranan dalam forum antarabangsa|Kesimpulan/nilai'),
  { kbat: true, stimulus: `> *Infografik (rekaan):* Dua ikon dengan anak panah merentasi peta Asia Tenggara: **"Pemerdagangan orang"** dan **"Penyakit berjangkit"**, dengan tajuk **"Tiada sempadan bagi ancaman ini."**` });
st('s5c10', 'sumber', 2, `> *Petikan (rekaan):* "Gelombang besar melanda pada pagi 26 Disember 2004. Dalam masa beberapa hari, pasukan penyelamat dan sukarelawan dari Malaysia tiba membawa ubat-ubatan, makanan dan khemah. Rakyat Malaysia pelbagai kaum mengumpul sumbangan di seluruh negara."`,
  'Berdasarkan petikan dan pengetahuan sejarah anda, jawab soalan berikut.', [
  op('(a)', 2, 'Namakan bencana tersebut dan **satu** kawasan yang terjejas yang dibantu Malaysia.', 'Tsunami; Aceh (atau Sri Lanka).', rb('Tsunami|Aceh / Sri Lanka')),
  op('(b)', 4, 'Jelaskan **dua** bentuk penglibatan Malaysia dalam isu kemanusiaan.', 'Menghantar pasukan penyelamat (F) seperti SMART ke kawasan bencana (H). NGO dan sukarelawan (F) seperti MERCY Malaysia memberi rawatan dan bantuan (H). (Juga: bantuan kepada rakyat Palestin dan pelarian Syria.)', rb('F: penglibatan pertama|H: contoh|F: penglibatan kedua|H: contoh')),
  op('(c)', 4, 'Pada pendapat anda, apakah kepentingan penglibatan rakyat dalam misi kemanusiaan kepada imej negara?', 'Mengangkat imej Malaysia sebagai negara prihatin; mengukuhkan hubungan diplomatik dengan negara dibantu; memupuk nilai kemanusiaan dan perpaduan dalam kalangan rakyat; menyokong peranan Malaysia di PBB dan OIC.', rb('Imej prihatin|Hubungan diplomatik|Nilai kemanusiaan/perpaduan|Peranan antarabangsa'))
], true);

SPM.add(META);
})();
