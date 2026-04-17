// Konfigurasi konten untuk setiap program kontribusi
// Berdasarkan: /src/imports/konten-detail-kontribusi.md

export interface ContributionOption {
  value: string;
  label: string;
  prasyaratSubstansi?: string[];
  prasyaratTeknis?: string[];
  deskripsi?: string;
}

export interface ProgramContentConfig {
  fieldLabel: string;
  placeholder: string;
  options: ContributionOption[];
}

// 1. PENGEMBANGAN PLATFORM DIGITAL
export const platformDigitalContent: ProgramContentConfig = {
  fieldLabel: "Topik Konten Belajar",
  placeholder: "Pilih Topik",
  options: [
    {
      value: "sso-belajar-id",
      label: "Integrasi SSO Belajar ID",
      prasyaratSubstansi: [
        "Kemitraan berjalan dengan skema non komersial",
        "Tidak terdapat biaya dalam proses integrasi dan atau mendukung proses integrasi berlangsung",
        "Kementerian dan seluruh ekosistem pada Kementerian tidak mengeluarkan dana untuk membayar fitur atau servis yang diberikan oleh Mitra sesuai cakupan kerjasama",
        "Penyediaan fitur atau servis pada platform Mitra untuk mendukung kegiatan belajar mengajar",
        "Terdapat manfaat fitur atau service pada platform Mitra yang hanya diperoleh apabila integrasi Belajar.id dilaksanakan"
      ],
      prasyaratTeknis: [
        "Kesesuaian dan kemampuan integrasi SSO oleh Mitra terhadap sistem Akun BID",
        "Proses integrasi dapat menggunakan lookup atau whitelist berdasar informasi user pada masing-masing jenjang atau subdomain",
        "Kecocokan platform mitra dengan kebutuhan kementerian (digunakan oleh guru)"
      ]
    },
    {
      value: "integrasi-fitur-rumah-pendidikan",
      label: "Integrasi Fitur/Service pada Rumah Pendidikan",
      prasyaratSubstansi: [
        "Kemitraan berjalan dengan skema non komersial",
        "Tidak terdapat biaya dalam proses pengembangan atau integrasi fitur",
        "Kementerian dan seluruh ekosistem pada Kementerian tidak mengeluarkan dana untuk membayar fitur atau servis yang diberikan oleh Mitra sesuai cakupan kerjasama",
        "Kontribusi mitra sejalan dengan fungsi ruang yang dituju dan sesuai kebutuhan fitur kelompok sasaran utama (ekosistem pada pendidikan)",
        "Dukungan Mitra memiliki pendekatan berbasis kebutuhan pengguna (user-centered)",
        "Mitra mampu menyediakan dukungan berkelanjutan (pelatihan, pendampingan, atau dukungan teknis) di ruang yang dituju"
      ],
      prasyaratTeknis: [
        "Kesesuaian desain atau UI/UX pada sistem Rumah Pendidikan",
        "Lokasi infrastruktur (server dan data) berada di wilayah Indonesia",
        "Adanya implementasi 3-tier arsitektur sistem",
        "HTTPS aktif pada sistem Mitra"
      ]
    }
  ]
};

// 2. SUMBER BELAJAR MURID
export const sumberBelajarContent: ProgramContentConfig = {
  fieldLabel: "Materi Sumber Belajar",
  placeholder: "Pilih materi sumber belajar",
  options: [
    {
      value: "sd",
      label: "SD",
      prasyaratSubstansi: [
        "Materi sumber belajar sesuai Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) terbaru sesuai jenjang & mapel.",
        "Materi relevan, mudah dipahami, dan sesuai dengan jenjang murid.",
        "Materi sumber belajar sesuai dengan topik mata pelajaran yang diberikan.",
        "Pendekatan pembelajaran mengarah ke penguasaan konsep dan pengaplikasian dalam kehidupan sehari-hari, bukan hanya penyelesaian soal.",
        "Materi sumber belajar tidak monoton tapi ada keragaman bentuk (video, infografis, bahan bacaan murid, dsb)."
      ],
      prasyaratTeknis: [
        "Format kontribusi Sumber Belajar dalam bentuk video, dokumen/artikel, dan materi pembelajaran interaktif.",
        "Video Sumber Belajar disediakan dalam link YouTube aktif dengan resolusi minimum 720p dan durasi maksimal 15 menit.",
        "Dokumen/Artikel Sumber belajar disediakan dalam format PDF yang dapat diakses secara publik dan bukan dalam penyimpanan privat, dengan ukuran maksimal 10MB.",
        "Materi Pembelajaran Interaktif disediakan dalam format .zip, berisi file HTML5 dengan ukuran maksimal 16MB.",
        "Materi Pembelajaran Interaktif memiliki fitur interaksi (drag, drop, touch, dan swipe) dan dapat berjalan dengan baik di berbagai perangkat Interactive Flat Panel maupun Cross-Operating System dan Cross-Browser System."
      ]
    },
    {
      value: "smp",
      label: "SMP",
      prasyaratSubstansi: [
        "Materi sumber belajar sesuai Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) terbaru sesuai jenjang & mapel.",
        "Materi relevan, mudah dipahami, dan sesuai dengan jenjang murid.",
        "Materi sumber belajar sesuai dengan topik mata pelajaran yang diberikan.",
        "Pendekatan pembelajaran mengarah ke penguasaan konsep dan pengaplikasian dalam kehidupan sehari-hari, bukan hanya penyelesaian soal.",
        "Materi sumber belajar tidak monoton tapi ada keragaman bentuk (video, infografis, bahan bacaan murid, dsb)."
      ],
      prasyaratTeknis: [
        "Format kontribusi Sumber Belajar dalam bentuk video, dokumen/artikel, dan materi pembelajaran interaktif.",
        "Video Sumber Belajar disediakan dalam link YouTube aktif dengan resolusi minimum 720p dan durasi maksimal 15 menit.",
        "Dokumen/Artikel Sumber belajar disediakan dalam format PDF yang dapat diakses secara publik dan bukan dalam penyimpanan privat, dengan ukuran maksimal 10MB.",
        "Materi Pembelajaran Interaktif disediakan dalam format .zip, berisi file HTML5 dengan ukuran maksimal 16MB.",
        "Materi Pembelajaran Interaktif memiliki fitur interaksi (drag, drop, touch, dan swipe) dan dapat berjalan dengan baik di berbagai perangkat Interactive Flat Panel maupun Cross-Operating System dan Cross-Browser System."
      ]
    },
    {
      value: "sma-smk-umum",
      label: "SMA & SMK (Materi Umum)",
      prasyaratSubstansi: [
        "Materi sumber belajar sesuai Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) terbaru sesuai jenjang & mapel.",
        "Materi relevan, mudah dipahami, dan sesuai dengan jenjang murid.",
        "Materi sumber belajar sesuai dengan topik mata pelajaran yang diberikan.",
        "Pendekatan pembelajaran mengarah ke penguasaan konsep dan pengaplikasian dalam kehidupan sehari-hari, bukan hanya penyelesaian soal.",
        "Materi sumber belajar tidak monoton tapi ada keragaman bentuk (video, infografis, bahan bacaan murid, dsb)."
      ],
      prasyaratTeknis: [
        "Format kontribusi Sumber Belajar dalam bentuk video, dokumen/artikel, dan materi pembelajaran interaktif.",
        "Video Sumber Belajar disediakan dalam link YouTube aktif dengan resolusi minimum 720p dan durasi maksimal 15 menit.",
        "Dokumen/Artikel Sumber belajar disediakan dalam format PDF yang dapat diakses secara publik dan bukan dalam penyimpanan privat, dengan ukuran maksimal 10MB.",
        "Materi Pembelajaran Interaktif disediakan dalam format .zip, berisi file HTML5 dengan ukuran maksimal 16MB.",
        "Materi Pembelajaran Interaktif memiliki fitur interaksi (drag, drop, touch, dan swipe) dan dapat berjalan dengan baik di berbagai perangkat Interactive Flat Panel maupun Cross-Operating System dan Cross-Browser System."
      ]
    },
    {
      value: "smk-kejuruan",
      label: "SMK (Materi Kejuruan)",
      prasyaratSubstansi: [
        "Materi sumber belajar sesuai Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) terbaru sesuai jenjang & mapel.",
        "Materi relevan, mudah dipahami, dan sesuai dengan jenjang murid.",
        "Materi sumber belajar sesuai dengan topik mata pelajaran yang diberikan.",
        "Pendekatan pembelajaran mengarah ke penguasaan konsep dan pengaplikasian dalam kehidupan sehari-hari, bukan hanya penyelesaian soal.",
        "Materi sumber belajar tidak monoton tapi ada keragaman bentuk (video, infografis, bahan bacaan murid, dsb)."
      ],
      prasyaratTeknis: [
        "Format kontribusi Sumber Belajar dalam bentuk video, dokumen/artikel, dan materi pembelajaran interaktif.",
        "Video Sumber Belajar disediakan dalam link YouTube aktif dengan resolusi minimum 720p dan durasi maksimal 15 menit.",
        "Dokumen/Artikel Sumber belajar disediakan dalam format PDF yang dapat diakses secara publik dan bukan dalam penyimpanan privat, dengan ukuran maksimal 10MB.",
        "Materi Pembelajaran Interaktif disediakan dalam format .zip, berisi file HTML5 dengan ukuran maksimal 16MB.",
        "Materi Pembelajaran Interaktif memiliki fitur interaksi (drag, drop, touch, dan swipe) dan dapat berjalan dengan baik di berbagai perangkat Interactive Flat Panel maupun Cross-Operating System dan Cross-Browser System."
      ]
    },
    {
      value: "paud",
      label: "PAUD",
      prasyaratSubstansi: [
        "Materi sumber belajar sesuai Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) terbaru sesuai jenjang & mapel.",
        "Materi relevan, mudah dipahami, dan sesuai dengan jenjang murid.",
        "Materi sumber belajar sesuai dengan topik mata pelajaran yang diberikan.",
        "Pendekatan pembelajaran mengarah ke penguasaan konsep dan pengaplikasian dalam kehidupan sehari-hari, bukan hanya penyelesaian soal.",
        "Materi sumber belajar tidak monoton tapi ada keragaman bentuk (video, infografis, bahan bacaan murid, dsb)."
      ],
      prasyaratTeknis: [
        "Format kontribusi Sumber Belajar dalam bentuk video, dokumen/artikel, dan materi pembelajaran interaktif.",
        "Video Sumber Belajar disediakan dalam link YouTube aktif dengan resolusi minimum 720p dan durasi maksimal 15 menit.",
        "Dokumen/Artikel Sumber belajar disediakan dalam format PDF yang dapat diakses secara publik dan bukan dalam penyimpanan privat, dengan ukuran maksimal 10MB.",
        "Materi Pembelajaran Interaktif disediakan dalam format .zip, berisi file HTML5 dengan ukuran maksimal 16MB.",
        "Materi Pembelajaran Interaktif memiliki fitur interaksi (drag, drop, touch, dan swipe) dan dapat berjalan dengan baik di berbagai perangkat Interactive Flat Panel maupun Cross-Operating System dan Cross-Browser System."
      ]
    }
  ]
};

// 3. PENDAMPINGAN PELATIHAN GTK
export const pelatihanGTKContent: ProgramContentConfig = {
  fieldLabel: "Topik Materi Pelatihan",
  placeholder: "Pilih topik",
  options: [
    {
      value: "literasi-numerasi",
      label: "Literasi Numerasi",
      prasyaratSubstansi: [
        "Telah memiliki pengalaman dalam menyelenggarakan pelatihan pengembangan kompetensi Guru dan Tenaga Kependidikan, sesuai dengan bidang prioritas khususnya yang relevan dengan topik-topik prioritas terkait.",
        "Menyediakan materi pelatihan yang sesuai dengan kebutuhan pengembangan kompetensi Guru & Tenaga Kependidikan dan mendukung pencapaian tujuan pembelajaran sesuai dengan kebijakan Kemendikdasmen.",
        "Memiliki bukti atau dokumentasi yang menunjukkan dampak positif dari pelatihan yang telah dilaksanakan, seperti peningkatan hasil belajar, dan atau evaluasi peserta.",
        "Berkomitmen untuk tidak melakukan monetisasi terhadap peserta pada saat proses pelaksanaan pelatihan atau dalam pelaksanaan perjanjian kerjasama berlangsung."
      ],
      prasyaratTeknis: [
        "Mitra memiliki dukungan sumber daya yang memadai, termasuk narasumber, fasilitator, dan tim teknis, yang mampu mendukung pelaksanaan pelatihan secara daring, luring, maupun hybrid.",
        "Menyediakan media pembelajaran yang sesuai dengan kebutuhan pelatihan, seperti presentasi, video, bahan ajar interaktif, serta mendukung keterpaduan dengan platform digital yang digunakan.",
        "Bersedia memfasilitasi kebutuhan pelatihan, termasuk akomodasi penyediaan ruang daring atau lokasi kegiatan luring, konsumsi, transportasi, ATK serta suvenir atau goodie bag.",
        "Menyediakan silabus, modul, atau dokumen pendukung pelatihan lainnya yang terdokumentasi dengan baik dan dapat dikaji oleh pihak kementerian sebelum pelaksanaan.",
        "Narasumber, pelatih, atau fasilitator yang ditugaskan oleh mitra memiliki latar belakang dan keahlian yang sesuai dengan topik pelatihan yang disampaikan."
      ]
    },
    {
      value: "bimbingan-konseling",
      label: "Bimbingan Konseling",
      prasyaratSubstansi: [
        "Telah memiliki pengalaman dalam menyelenggarakan pelatihan pengembangan kompetensi Guru dan Tenaga Kependidikan, sesuai dengan bidang prioritas khususnya yang relevan dengan topik-topik prioritas terkait.",
        "Menyediakan materi pelatihan yang sesuai dengan kebutuhan pengembangan kompetensi Guru & Tenaga Kependidikan dan mendukung pencapaian tujuan pembelajaran sesuai dengan kebijakan Kemendikdasmen.",
        "Memiliki bukti atau dokumentasi yang menunjukkan dampak positif dari pelatihan yang telah dilaksanakan, seperti peningkatan hasil belajar, dan atau evaluasi peserta.",
        "Berkomitmen untuk tidak melakukan monetisasi terhadap peserta pada saat proses pelaksanaan pelatihan atau dalam pelaksanaan perjanjian kerjasama berlangsung."
      ],
      prasyaratTeknis: [
        "Mitra memiliki dukungan sumber daya yang memadai, termasuk narasumber, fasilitator, dan tim teknis, yang mampu mendukung pelaksanaan pelatihan secara daring, luring, maupun hybrid.",
        "Menyediakan media pembelajaran yang sesuai dengan kebutuhan pelatihan, seperti presentasi, video, bahan ajar interaktif, serta mendukung keterpaduan dengan platform digital yang digunakan.",
        "Bersedia memfasilitasi kebutuhan pelatihan, termasuk akomodasi penyediaan ruang daring atau lokasi kegiatan luring, konsumsi, transportasi, ATK serta suvenir atau goodie bag.",
        "Menyediakan silabus, modul, atau dokumen pendukung pelatihan lainnya yang terdokumentasi dengan baik dan dapat dikaji oleh pihak kementerian sebelum pelaksanaan.",
        "Narasumber, pelatih, atau fasilitator yang ditugaskan oleh mitra memiliki latar belakang dan keahlian yang sesuai dengan topik pelatihan yang disampaikan."
      ]
    },
    {
      value: "pembelajaran-mendalam",
      label: "Pembelajaran Mendalam",
      prasyaratSubstansi: [
        "Telah memiliki pengalaman dalam menyelenggarakan pelatihan pengembangan kompetensi Guru dan Tenaga Kependidikan, sesuai dengan bidang prioritas khususnya yang relevan dengan topik-topik prioritas terkait.",
        "Menyediakan materi pelatihan yang sesuai dengan kebutuhan pengembangan kompetensi Guru & Tenaga Kependidikan dan mendukung pencapaian tujuan pembelajaran sesuai dengan kebijakan Kemendikdasmen.",
        "Memiliki bukti atau dokumentasi yang menunjukkan dampak positif dari pelatihan yang telah dilaksanakan, seperti peningkatan hasil belajar, dan atau evaluasi peserta.",
        "Berkomitmen untuk tidak melakukan monetisasi terhadap peserta pada saat proses pelaksanaan pelatihan atau dalam pelaksanaan perjanjian kerjasama berlangsung."
      ],
      prasyaratTeknis: [
        "Mitra memiliki dukungan sumber daya yang memadai, termasuk narasumber, fasilitator, dan tim teknis, yang mampu mendukung pelaksanaan pelatihan secara daring, luring, maupun hybrid.",
        "Menyediakan media pembelajaran yang sesuai dengan kebutuhan pelatihan, seperti presentasi, video, bahan ajar interaktif, serta mendukung keterpaduan dengan platform digital yang digunakan.",
        "Bersedia memfasilitasi kebutuhan pelatihan, termasuk akomodasi penyediaan ruang daring atau lokasi kegiatan luring, konsumsi, transportasi, ATK serta suvenir atau goodie bag.",
        "Menyediakan silabus, modul, atau dokumen pendukung pelatihan lainnya yang terdokumentasi dengan baik dan dapat dikaji oleh pihak kementerian sebelum pelaksanaan.",
        "Narasumber, pelatih, atau fasilitator yang ditugaskan oleh mitra memiliki latar belakang dan keahlian yang sesuai dengan topik pelatihan yang disampaikan."
      ]
    },
    {
      value: "pengembangan-kompetensi-gtk",
      label: "Pengembangan Kompetensi Guru dan Tenaga Kependidikan",
      prasyaratSubstansi: [
        "Telah memiliki pengalaman dalam menyelenggarakan pelatihan pengembangan kompetensi Guru dan Tenaga Kependidikan, sesuai dengan bidang prioritas khususnya yang relevan dengan topik-topik prioritas terkait.",
        "Menyediakan materi pelatihan yang sesuai dengan kebutuhan pengembangan kompetensi Guru & Tenaga Kependidikan dan mendukung pencapaian tujuan pembelajaran sesuai dengan kebijakan Kemendikdasmen.",
        "Memiliki bukti atau dokumentasi yang menunjukkan dampak positif dari pelatihan yang telah dilaksanakan, seperti peningkatan hasil belajar, dan atau evaluasi peserta.",
        "Berkomitmen untuk tidak melakukan monetisasi terhadap peserta pada saat proses pelaksanaan pelatihan atau dalam pelaksanaan perjanjian kerjasama berlangsung."
      ],
      prasyaratTeknis: [
        "Mitra memiliki dukungan sumber daya yang memadai, termasuk narasumber, fasilitator, dan tim teknis, yang mampu mendukung pelaksanaan pelatihan secara daring, luring, maupun hybrid.",
        "Menyediakan media pembelajaran yang sesuai dengan kebutuhan pelatihan, seperti presentasi, video, bahan ajar interaktif, serta mendukung keterpaduan dengan platform digital yang digunakan.",
        "Bersedia memfasilitasi kebutuhan pelatihan, termasuk akomodasi penyediaan ruang daring atau lokasi kegiatan luring, konsumsi, transportasi, ATK serta suvenir atau goodie bag.",
        "Menyediakan silabus, modul, atau dokumen pendukung pelatihan lainnya yang terdokumentasi dengan baik dan dapat dikaji oleh pihak kementerian sebelum pelaksanaan.",
        "Narasumber, pelatih, atau fasilitator yang ditugaskan oleh mitra memiliki latar belakang dan keahlian yang sesuai dengan topik pelatihan yang disampaikan."
      ]
    },
    {
      value: "koding-ai",
      label: "Koding dan Kecerdasan Artifisial",
      prasyaratSubstansi: [
        "Telah memiliki pengalaman dalam menyelenggarakan pelatihan pengembangan kompetensi Guru dan Tenaga Kependidikan, sesuai dengan bidang prioritas khususnya yang relevan dengan topik-topik prioritas terkait.",
        "Menyediakan materi pelatihan yang sesuai dengan kebutuhan pengembangan kompetensi Guru & Tenaga Kependidikan dan mendukung pencapaian tujuan pembelajaran sesuai dengan kebijakan Kemendikdasmen.",
        "Memiliki bukti atau dokumentasi yang menunjukkan dampak positif dari pelatihan yang telah dilaksanakan, seperti peningkatan hasil belajar, dan atau evaluasi peserta.",
        "Berkomitmen untuk tidak melakukan monetisasi terhadap peserta pada saat proses pelaksanaan pelatihan atau dalam pelaksanaan perjanjian kerjasama berlangsung."
      ],
      prasyaratTeknis: [
        "Mitra memiliki dukungan sumber daya yang memadai, termasuk narasumber, fasilitator, dan tim teknis, yang mampu mendukung pelaksanaan pelatihan secara daring, luring, maupun hybrid.",
        "Menyediakan media pembelajaran yang sesuai dengan kebutuhan pelatihan, seperti presentasi, video, bahan ajar interaktif, serta mendukung keterpaduan dengan platform digital yang digunakan.",
        "Bersedia memfasilitasi kebutuhan pelatihan, termasuk akomodasi penyediaan ruang daring atau lokasi kegiatan luring, konsumsi, transportasi, ATK serta suvenir atau goodie bag.",
        "Menyediakan silabus, modul, atau dokumen pendukung pelatihan lainnya yang terdokumentasi dengan baik dan dapat dikaji oleh pihak kementerian sebelum pelaksanaan.",
        "Narasumber, pelatih, atau fasilitator yang ditugaskan oleh mitra memiliki latar belakang dan keahlian yang sesuai dengan topik pelatihan yang disampaikan."
      ]
    }
  ]
};

// 4. KEBUTUHAN PENDIDIKAN LAINNYA
export const kebutuhanLainnyaContent: ProgramContentConfig = {
  fieldLabel: "Jenis Dukungan",
  placeholder: "Pilih jenis dukungan yang ingin Anda ajukan",
  options: [
    {
      value: "beasiswa",
      label: "Beasiswa",
      deskripsi: "Dukungan kebutuhan individual bagi peserta didik untuk melaksanakan pembelajaran."
    },
    {
      value: "penanganan-anak-tidak-sekolah",
      label: "Penanganan Anak Tidak Sekolah",
      deskripsi: "Dukungan program pembelajaran untuk persiapan anak mengejar pelajaran dan kembali ke sekolah."
    },
    {
      value: "dukungan-vokasi",
      label: "Beragam Dukungan Pendidikan Vokasi",
      deskripsi: "Dukungan dalam bentuk penyediaan sumber daya dan/atau fasilitas untuk memperkuat pelaksanaan program pendidikan vokasi dalam perluasan akses peserta didik terhadap kesempatan belajar yang relevan."
    },
    {
      value: "kegiatan-pendidikan",
      label: "Kegiatan Pendidikan",
      deskripsi: "Dukungan terhadap pelaksanaan pembinaan tambahan dan memfasilitasi keikutsertaan bagi peserta didik berprestasi nasional sebagai persiapan menuju ajang kompetisi internasional."
    },
    {
      value: "publikasi-komunikasi",
      label: "Publikasi dan Komunikasi",
      deskripsi: "Dukungan terhadap publikasi, komunikasi, dan penempatan media dalam rangka memperluas jangkauan informasi publik serta memperkuat diseminasi kebijakan dan program."
    },
    {
      value: "lainnya",
      label: "Lainnya"
    }
  ]
};

// Mapping program title ke content config
export const programContentMapping: Record<string, ProgramContentConfig> = {
  "Pengembangan Platform Digital": platformDigitalContent,
  "Sumber Belajar Murid": sumberBelajarContent,
  "Pendampingan Pelatihan GTK": pelatihanGTKContent,
  "Kebutuhan Pendidikan Lainnya": kebutuhanLainnyaContent,
};

// Helper function untuk mendapatkan content config berdasarkan program title
export function getProgramContent(programTitle: string): ProgramContentConfig | null {
  return programContentMapping[programTitle] || null;
}