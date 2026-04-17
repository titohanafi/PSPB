export interface PackageDetail {
  label: string;
  value: string;
}

export interface PackageInfo {
  id: string;
  title: string;
  estimatedBudget: string;
  buildingArea?: string;
  details?: PackageDetail[];
  description: string;
}

export interface RevitalizationBuildingInfo extends PackageInfo {
  buildingName: string;
  revitalizationType: 'rehabilitasi' | 'pembangunan';
  classification?: 'ringan' | 'sedang' | 'berat';
}

// Data untuk Infrastruktur Digital
export const infrastructurePackages: Record<string, PackageInfo> = {
  internet: {
    id: 'internet',
    title: 'Jaringan Internet',
    estimatedBudget: 'Rp296.816.000,00',
    buildingArea: 'Data tidak tersedia',
    details: [
      { label: 'Biaya Instalasi', value: 'Rp50.000.000,00' },
      { label: 'Perangkat Jaringan', value: 'Rp150.000.000,00' },
      { label: 'Biaya Langganan (12 bulan)', value: 'Rp96.816.000,00' },
    ],
    description: 'Instalasi dan konfigurasi jaringan internet untuk satuan pendidikan mencakup pemasangan fiber optik, router, access point, dan langganan internet selama satu tahun.'
  },
  electricity: {
    id: 'electricity',
    title: 'Instalasi Listrik',
    estimatedBudget: 'Rp180.500.000,00',
    buildingArea: 'Data tidak tersedia',
    details: [
      { label: 'Panel Listrik', value: 'Rp45.000.000,00' },
      { label: 'Kabel & Instalasi', value: 'Rp85.500.000,00' },
      { label: 'Lampu & Saklar', value: 'Rp50.000.000,00' },
    ],
    description: 'Pemasangan dan perbaikan sistem kelistrikan di satuan pendidikan termasuk instalasi panel listrik, kabel, lampu, saklar, dan stop kontak sesuai standar keamanan.'
  }
};

// Dummy data untuk Revitalisasi Sekolah (akan diganti dengan data dari database)
export const revitalizationBuildings: RevitalizationBuildingInfo[] = [
  {
    id: 'building-1',
    buildingName: 'Lapangan',
    title: 'Lapangan',
    revitalizationType: 'rehabilitasi',
    classification: 'berat',
    estimatedBudget: 'Rp296.816.000,00',
    buildingArea: '500 m²',
    details: [
      { label: 'Perbaikan Permukaan', value: 'Rp150.000.000,00' },
      { label: 'Pengecatan Garis Lapangan', value: 'Rp20.816.000,00' },
      { label: 'Perbaikan Drainase', value: 'Rp126.000.000,00' },
    ],
    description: 'Rehabilitasi permukaan lapangan, pengecatan garis lapangan, dan perbaikan sistem drainase untuk memastikan lapangan dapat digunakan dengan aman dan nyaman.'
  },
  {
    id: 'building-2',
    buildingName: 'Toilet',
    title: 'Toilet',
    revitalizationType: 'rehabilitasi',
    classification: 'sedang',
    estimatedBudget: 'Rp125.500.000,00',
    buildingArea: '48 m²',
    details: [
      { label: 'Perbaikan Sanitasi', value: 'Rp65.000.000,00' },
      { label: 'Pengecatan & Keramik', value: 'Rp40.500.000,00' },
      { label: 'Perbaikan Plumbing', value: 'Rp20.000.000,00' },
    ],
    description: 'Rehabilitasi fasilitas toilet termasuk perbaikan sistem sanitasi, penggantian keramik, pengecatan, dan perbaikan sistem plumbing agar lebih higienis.'
  },
  {
    id: 'building-3',
    buildingName: 'Laboratorium',
    title: 'Laboratorium',
    revitalizationType: 'pembangunan',
    estimatedBudget: 'Rp850.000.000,00',
    buildingArea: '120 m²',
    details: [
      { label: 'Konstruksi Bangunan', value: 'Rp500.000.000,00' },
      { label: 'Peralatan Laboratorium', value: 'Rp250.000.000,00' },
      { label: 'Instalasi Listrik & Air', value: 'Rp100.000.000,00' },
    ],
    description: 'Pembangunan gedung laboratorium baru lengkap dengan peralatan laboratorium, instalasi listrik, dan sistem air untuk mendukung kegiatan praktikum siswa.'
  }
];