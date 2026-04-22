import imgInfrastrukturDigital from "../../assets/infrastrukturdigital.jpg";
import imgRevitalisasiSekolah from "../../assets/revitalisasisekolah.jpg";
import imgPengembanganPlatform from "../../assets/platformdigital.jpg";
import imgSumberBelajar from "../../assets/sumberbelajarmurid.jpg";
import imgPendampinganGTK from "../../assets/pelatihangtk.jpg";
import imgKebutuhanLainnya from "../../assets/pendidikanlainnya.jpg";

export const cardDetails = [
  {
    category: "Digitalisasi Pembelajaran",
    title: "Infrastruktur Digital",
    description: "Terdapat ~16 ribu satuan pendidikan yang membutuhkan dukungan infrastruktur listrik dan internet untuk mendukung proses pembelajaran",
    imageUrl: imgInfrastrukturDigital,
    contributions: [
      {
        icon: "wifi",
        title: "Jaringan Internet",
        description: "Dukungan dalam bentuk penyediaan fasilitas konektivitas internet guna menunjang akses terhadap sumber belajar digital secara berkelanjutan."
      },
      {
        icon: "zap",
        title: "Infrastruktur Listrik",
        description: "Kontribusi berupa penyediaan sumber daya listrik yang stabil untuk memastikan keberlangsungan proses pembelajaran tanpa hambatan."
      }
    ],
    budget: "Rp 80 M",
    budgetPerSchool: "≈ Rp 5 juta/sekolah",
    progress: 45,
    needs: "~16,000 sekolah"
  },
  {
    category: "Peningkatan Kualitas Fasilitas",
    title: "Revitalisasi Sekolah",
    description: "Sekitar 123 ribu satuan pendidikan di Indonesia membutuhkan perbaikan dan pembaruan fasilitas belajar untuk menciptakan lingkungan pendidikan yang nyaman dan kondusif",
    imageUrl: imgRevitalisasiSekolah,
    contributions: [
      {
        icon: "building",
        title: "Renovasi Ruang Kelas",
        description: "Perbaikan dan pembaruan ruang kelas untuk menciptakan lingkungan belajar yang nyaman, aman, dan kondusif bagi siswa dan guru."
      },
      {
        icon: "bookopen",
        title: "Fasilitas Pendukung",
        description: "Penyediaan dan perbaikan fasilitas pendukung seperti perpustakaan, laboratorium, dan area bermain untuk mendukung kegiatan belajar mengajar."
      }
    ],
    budget: "Rp 2.1 T",
    budgetPerSchool: "≈ Rp 17 juta/sekolah",
    progress: 23,
    needs: "~123,000 sekolah"
  },
  {
    category: "Digitalisasi Pembelajaran",
    title: "Pengembangan Platform Digital",
    description: "Dukungan pengembangan dan integrasi platform digital untuk meningkatkan akses dan kualitas pembelajaran",
    imageUrl: imgPengembanganPlatform,
    budget: "Rp 300 M",
    budgetPerSchool: "Varies",
    progress: 30,
    needs: "Platform integration"
  },
  {
    category: "Peningkatan Kualitas Pembelajaran",
    title: "Bahan Ajar Digital",
    description: "Penyediaan materi pembelajaran berkualitas untuk berbagai jenjang pendidikan guna mendukung kegiatan belajar mengajar",
    imageUrl: imgSumberBelajar,
    budget: "Rp 200 M",
    budgetPerSchool: "Varies",
    progress: 20,
    needs: "Learning materials"
  },
  {
    category: "Peningkatan Kapasitas Guru",
    title: "Pendampingan Pelatihan GTK",
    description: "Program pelatihan dan pengembangan profesional bagi Guru dan Tenaga Kependidikan untuk meningkatkan kualitas pengajaran",
    imageUrl: imgPendampinganGTK,
    budget: "Rp 500 M",
    budgetPerSchool: "≈ Rp 2 juta/guru",
    progress: 15,
    needs: "~250,000 guru"
  },
  {
    category: "Dukungan Pendidikan",
    title: "Kebutuhan Pendidikan Lainnya",
    description: "Berbagai bentuk dukungan pendidikan termasuk beasiswa, program vokasi, dan kegiatan pendidikan lainnya",
    imageUrl: imgKebutuhanLainnya,
    budget: "Rp 400 M",
    budgetPerSchool: "Varies",
    progress: 10,
    needs: "Various needs"
  }
];