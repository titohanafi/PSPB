import { useState } from "react";
import imgImage1 from "figma:asset/9bdac03739b00acb6d6000e7c768841a916d8d33.png";
import imgBannerCarousel from "figma:asset/141226fb086431d61c995f04972068663dbb8e2b.png";
import svgPaths from "./svg-vvs1keay2m";
import { X } from "lucide-react";
import { Button } from "../app/components/Button";

// Type definition for school data
type SchoolData = typeof schoolsData[0];

// Data sekolah dengan koordinat di peta
const schoolsData = [
  {
    id: 1,
    name: "SMA NEGERI 3 SUMATRA BARAT",
    npsn: "69945190",
    level: "SMA",
    students: 120,
    location: "Kab. Sijunjung, Sumatera Barat",
    lat: 380,
    lng: 680,
    teachersPNS: 15,
    teachersNonPNS: 5,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 2,
    name: "SDN 30 KOTA TANGERANG",
    npsn: "20202317",
    level: "SD",
    students: 100,
    location: "Kota Tangerang, Banten",
    lat: 420,
    lng: 520,
    teachersPNS: 12,
    teachersNonPNS: 3,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 3,
    name: "SDN SLEMAN 2",
    npsn: "20202319",
    level: "SD",
    students: 100,
    location: "Kab. Sleman, DI Yogyakarta",
    lat: 450,
    lng: 660,
    teachersPNS: 10,
    teachersNonPNS: 4,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 4,
    name: "SMP NEGERI 5 BANDUNG",
    npsn: "20203456",
    level: "SMP",
    students: 250,
    location: "Kota Bandung, Jawa Barat",
    lat: 340,
    lng: 780,
    teachersPNS: 20,
    teachersNonPNS: 8,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 5,
    name: "SMAN 12 JAKARTA",
    npsn: "20204567",
    level: "SMA",
    students: 189,
    location: "Jakarta Selatan, DKI Jakarta",
    lat: 480,
    lng: 590,
    teachersPNS: 18,
    teachersNonPNS: 7,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 6,
    name: "SMAN 99 PALAPA",
    npsn: "20205678",
    level: "SMA",
    students: 150,
    location: "Kota Jakarta, DKI Jakarta",
    lat: 530,
    lng: 610,
    teachersPNS: 22,
    teachersNonPNS: 6,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 7,
    name: "SDN MENTENG 01 PAGI",
    npsn: "20206789",
    level: "SD",
    students: 180,
    location: "Jakarta Pusat, DKI Jakarta",
    lat: 630,
    lng: 600,
    teachersPNS: 16,
    teachersNonPNS: 5,
    mapsLink: "https://maps.google.com"
  },
  {
    id: 8,
    name: "SMP NEGERI 1 SURABAYA",
    npsn: "20207890",
    level: "SMP",
    students: 220,
    location: "Kota Surabaya, Jawa Timur",
    lat: 510,
    lng: 680,
    teachersPNS: 25,
    teachersNonPNS: 4,
    mapsLink: "https://maps.google.com"
  },
];

// Popover nama sekolah untuk hover state
function SchoolNamePopover({ school, mapTransform }: { school: SchoolData; mapTransform: { scale: number; x: number; y: number } }) {
  const counterScale = 1 / mapTransform.scale;
  
  return (
    <div 
      className="absolute bg-card rounded-lg shadow-lg px-3 py-2 z-[25] pointer-events-none border border-border" 
      style={{ 
        left: `${school.lng}px`, 
        top: `${school.lat - 60}px`,
        transform: `translateX(-50%) scale(${counterScale})`,
        transformOrigin: 'center top'
      }}
    >
      <p className="text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
        {school.name}
      </p>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-card border-r border-b border-border transform rotate-45"></div>
    </div>
  );
}

// Detail Card untuk click state
function SchoolDetailCard({ school, onClose, onSelectSchool, mapTransform }: { 
  school: SchoolData; 
  onClose: () => void; 
  onSelectSchool?: (school: SchoolData) => void;
  mapTransform: { scale: number; x: number; y: number };
}) {
  const counterScale = 1 / mapTransform.scale;
  const counterX = -mapTransform.x;
  const counterY = -mapTransform.y;
  
  return (
    <div 
      className="absolute left-1/2 top-1/2 bg-card rounded-lg shadow-xl p-6 w-[400px] z-[35] border border-border transition-transform duration-500 ease-out" 
      style={{
        transform: `translate(-50%, -50%) scale(${counterScale}) translate(${counterX}px, ${counterY}px)`
      }}
    >
      <Button
        closeButton
        onClick={onClose}
        className="absolute -top-2 -right-2 shadow-md z-10"
        aria-label="Tutup detail"
      >
        <X className="w-4 h-4 text-foreground" />
      </Button>
      
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-foreground" style={{ fontSize: 'var(--action-size)', fontWeight: 'var(--action-weight)', lineHeight: 'var(--action-height)' }}>
            {school.name}
          </p>
          <p className="text-muted-foreground mt-1" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', lineHeight: 'var(--body-small-height)' }}>
            NPSN: {school.npsn}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="overflow-clip shrink-0 w-5 h-5">
            <svg className="w-full h-full" fill="none" viewBox="0 0 22 18">
              <path d={svgPaths.p5a0ba00} fill="var(--icon-secondary)" />
            </svg>
          </div>
          <p className="text-foreground" style={{ fontSize: 'var(--body-small-size)', fontWeight: 'var(--body-small-weight)', lineHeight: 'var(--body-small-height)' }}>
            Jenjang: {school.level} • Jumlah Murid: {school.students}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--badge-info)' }}>
            <p className="text-foreground whitespace-nowrap" style={{ fontSize: 'var(--body-small-bold-size)', fontWeight: 'var(--body-small-bold-weight)', lineHeight: 'var(--body-small-bold-height)' }}>Akses Internet</p>
          </div>
          <div className="px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--badge-info)' }}>
            <p className="text-foreground whitespace-nowrap" style={{ fontSize: 'var(--body-small-bold-size)', fontWeight: 'var(--body-small-bold-weight)', lineHeight: 'var(--body-small-bold-height)' }}>
              Revitalisasi Sekolah
            </p>
          </div>
        </div>
        
        {/* Button Pilih Sekolah Ini */}
        <Button
          onClick={() => {
            console.log('🔵 Button "Pilih Sekolah Ini" diklik, school:', school);
            console.log('🔵 onSelectSchool callback exists?', !!onSelectSchool);
            if (onSelectSchool) {
              console.log('🔵 Calling onSelectSchool...');
              onSelectSchool(school);
              console.log('🔵 onSelectSchool called successfully');
            } else {
              console.log('❌ onSelectSchool is undefined/null');
            }
          }}
          className="w-full"
          color="blue"
          size="md"
        >
          Pilih Sekolah Ini
        </Button>
      </div>
    </div>
  );
}

// List item sekolah
function SchoolListItem({ 
  school, 
  onClick,
  onHover,
  onHoverEnd,
  isSelected
}: { 
  school: SchoolData; 
  onClick: () => void;
  onHover: () => void;
  onHoverEnd: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      className="flex items-start px-6 py-4 relative shrink-0 w-[428px] min-h-[88px] cursor-pointer transition-colors"
      style={{
        backgroundColor: isSelected 
          ? 'var(--primary-50)' 
          : 'var(--surface-default)'
      }}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'var(--surface-hovered)';
        }
      }}
      onMouseOut={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'var(--surface-default)';
        }
      }}
    >
      <div aria-hidden="true" className="absolute border-border border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col gap-3 items-start w-full">
        <div className="flex flex-col gap-1 items-start w-full">
          <p className="leading-6 text-foreground w-full text-left" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>{school.name}</p>
          <p className="leading-4 text-foreground w-full text-left" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>NPSN: {school.npsn}</p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="flex gap-1 items-center shrink-0">
            <div className="overflow-clip relative shrink-0 w-6 h-6">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 18">
                <path d={svgPaths.p5a0ba00} fill="var(--icon-secondary)" />
              </svg>
            </div>
            <p className="leading-5 text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>Jenjang: {school.level}</p>
          </div>
          <div className="h-1 w-3 shrink-0">
            <svg className="block size-full" fill="none" viewBox="0 0 12 4">
              <circle cx="6" cy="2" fill="currentColor" className="text-foreground" r="2" />
            </svg>
          </div>
          <p className="leading-5 text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>Jumlah Murid: {school.students}</p>
        </div>
      </div>
    </button>
  );
}

// Sidebar Filter Panel
function FilterPanel({ onSchoolClick, onSchoolHover, onSchoolHoverEnd, selectedSchoolId }: { 
  onSchoolClick: (school: SchoolData) => void;
  onSchoolHover: (school: SchoolData) => void;
  onSchoolHoverEnd: () => void;
  selectedSchoolId: number | null;
}) {
  return (
    <div className="absolute bg-card content-stretch flex flex-col items-start left-0 top-[136px] z-10 max-h-[calc(100vh-136px)] overflow-hidden">
      <div className="bg-[var(--surface-default)] content-stretch flex flex-col gap-4 items-start p-6 relative shrink-0 w-[428px]">
        <p className="leading-[24px] not-italic relative shrink-0 text-foreground w-full" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-medium)' }}>Peta Persebaran Kebutuhan Kontribusi</p>
        
        {/* Search Input */}
        <div className="bg-[var(--surface-default)] relative rounded shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-2 items-center pl-3 pr-4 py-3 relative w-full">
              <div className="relative shrink-0 size-[20px]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 14.5752 14.5752">
                  <path d={svgPaths.p3fd0d100} fill="var(--icon-secondary)" />
                </svg>
              </div>
              <p className="flex-[1_0_0] leading-[22px] min-h-px min-w-px not-italic relative" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--border)' }}>Cari nama sekolah atau NPSN</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none" style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }} />
        </div>
        
        {/* Filter Tipe Kontribusi */}
        <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-1 h-[72px] items-start relative shrink-0 w-full">
            <p className="leading-[22px] not-italic relative shrink-0 text-foreground w-[328px]" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-normal)' }}>Tipe Kontribusi</p>
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
              <div className="absolute bg-[var(--surface-default)] left-0 right-0 rounded top-0">
                <div className="content-stretch flex items-start overflow-clip px-4 py-3 relative rounded-[inherit] w-full">
                  <p className="leading-[22px] not-italic relative shrink-0 text-foreground w-[296px]" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-normal)' }}>Revitalisasi Sekolah</p>
                </div>
                <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded" style={{ borderColor: 'var(--border)' }} />
              </div>
              <div className="absolute right-[12px] size-[20px] top-[12px]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 10 5">
                  <path d="M0 0L5 5L10 0H0Z" fill="var(--icon-secondary)" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Filter Provinsi dan Kota/Kab */}
          <div className="content-stretch flex gap-3 items-start relative shrink-0 w-full">
            <div className="bg-[var(--surface-default)] flex-[1_0_0] min-h-px min-w-px relative rounded">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-2 items-center pl-3 pr-4 py-3 relative w-full">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 14.5752 14.5752">
                      <path d={svgPaths.p3fd0d100} fill="var(--icon-secondary)" />
                    </svg>
                  </div>
                  <p className="flex-[1_0_0] leading-[22px] min-h-px min-w-px not-italic relative truncate" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--border)' }}>Semua Provinsi</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded" style={{ borderColor: 'var(--border)' }} />
            </div>
            <div className="bg-[var(--surface-default)] flex-[1_0_0] min-h-px min-w-px relative rounded">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-2 items-center pl-3 pr-4 py-3 relative w-full">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 14.5752 14.5752">
                      <path d={svgPaths.p3fd0d100} fill="var(--icon-secondary)" />
                    </svg>
                  </div>
                  <p className="flex-[1_0_0] leading-[22px] min-h-px min-w-px not-italic relative truncate" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--border)' }}>Semua Kota/Kab.</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded" style={{ borderColor: 'var(--border)' }} />
            </div>
          </div>
          
          {/* Toggle 3T */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-2 items-center relative shrink-0">
              <div className="h-[28px] relative shrink-0 w-[50px]">
                <div className="absolute border border-solid h-[28px] left-0 rounded-[100px] top-0 w-[50px]" style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--border-light)' }} />
                <div className="absolute inset-[7.14%_48%_7.14%_4%]">
                  <div className="absolute inset-[-16.67%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                      <g filter="url(#filter0_d_2014_2670)">
                        <circle cx="16" cy="16" fill="white" r="12" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_2014_2670" width="32" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2014_2670" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_2014_2670" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-[14%] overflow-clip right-[58%] top-1/4">
                  <div className="absolute left-[-2px] size-[18px] top-[-2px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 10.5 10.5">
                      <path d={svgPaths.p30e60a80} fill="var(--icon-secondary)" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="leading-[22px] not-italic relative shrink-0 text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>Tampilkan hanya daerah 3T</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p11e5c600} fill="var(--icon-secondary)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* School List */}
      <div className="content-stretch flex flex-col h-[744px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full pb-[400px]" style={{ scrollbarWidth: 'none' }}>
        {schoolsData.map((school) => (
          <SchoolListItem
            key={school.id}
            school={school}
            onClick={() => onSchoolClick(school)}
            onHover={() => onSchoolHover(school)}
            onHoverEnd={onSchoolHoverEnd}
            isSelected={selectedSchoolId === school.id}
          />
        ))}
      </div>
    </div>
  );
}

// Banner gradient overlay
function ImageContainer() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundImage: "linear-gradient(-2.91499deg, rgba(30, 31, 31, 0.7) 28.831%, rgba(30, 31, 31, 0) 95.279%)" }} />
    </div>
  );
}

export default function ExplorePageFilterOnRenovasiSekolah({ onSelectSchool, onClose }: { 
  onSelectSchool?: (school: {
    name: string;
    npsn: string;
    level: string;
    students: number;
    teachersPNS: number;
    teachersNonPNS: number;
    location: string;
    mapsLink: string;
  }) => void;
  onClose?: () => void;
}) {
  const [selectedSchool, setSelectedSchool] = useState<SchoolData | null>(null);
  const [hoveredSchool, setHoveredSchool] = useState<SchoolData | null>(null);
  const [mapTransform, setMapTransform] = useState({ scale: 1, x: 0, y: 0 });

  const handleSchoolClick = (school: SchoolData) => {
    setSelectedSchool(school);
    
    const modalCenterX = 720;
    const modalCenterY = 450;
    const offsetX = (modalCenterX - 180 - school.lng) / 1.5;
    const offsetY = (modalCenterY - school.lat) / 1.5;
    
    setMapTransform({ scale: 1.5, x: offsetX, y: offsetY });
  };

  const handleSchoolHover = (school: SchoolData) => {
    setHoveredSchool(school);
  };

  const handleSchoolHoverEnd = () => {
    setHoveredSchool(null);
  };
  
  const handleClose = () => {
    setMapTransform({ scale: 1, x: 0, y: 0 });
    setSelectedSchool(null);
    setHoveredSchool(null);
    onClose?.();
  };
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedSchool && e.target === e.currentTarget) {
      setMapTransform({ scale: 1, x: 0, y: 0 });
      setSelectedSchool(null);
    }
  };

  const handleCloseDetailCard = () => {
    setMapTransform({ scale: 1, x: 0, y: 0 });
    setSelectedSchool(null);
  };

  return (
    <>
      {/* Overlay Background */}
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-8" onClick={handleBackdropClick}>
        {/* Modal Container */}
        <div 
          className="bg-white relative w-full max-w-[1440px] h-full max-h-[900px] rounded-lg shadow-2xl overflow-hidden" 
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Close Button */}
          <Button
            closeButton
            onClick={handleClose}
            className="absolute top-4 right-4 z-[100] shadow-lg pointer-events-auto"
            aria-label="Tutup"
          >
            <X className="w-6 h-6 text-foreground" />
          </Button>

          {/* Map Container dengan transform untuk zoom/pan */}
          <div 
            className="absolute h-[1024px] left-[180px] top-1/2 w-[1530px] transition-transform duration-500 ease-out" 
            style={{ 
              transform: `translateY(-50%) scale(${mapTransform.scale}) translate(${mapTransform.x}px, ${mapTransform.y}px)`,
              transformOrigin: 'center center'
            }}
          >
            {/* Peta Background */}
            <div className="absolute inset-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
            
            {/* Marker titik-titik sekolah di peta */}
            {schoolsData.map((school) => {
              const isSelected = selectedSchool?.id === school.id;
              const isHovered = hoveredSchool?.id === school.id;
              const counterScale = 1 / mapTransform.scale;
              
              return (
                <div 
                  key={school.id}
                  className="absolute z-[20]"
                  style={{ 
                    left: `${school.lng}px`, 
                    top: `${school.lat}px`,
                    transform: `scale(${counterScale})`,
                    transformOrigin: 'center center'
                  }}
                >
                  {isSelected ? (
                    /* Pin point icon untuk selected state */
                    <div className="relative -translate-x-1/2 -translate-y-full w-8 h-10">
                      <svg className="absolute block size-full drop-shadow-lg" fill="none" viewBox="0 0 32 40">
                        {/* Pin shadow */}
                        <ellipse cx="16" cy="38" rx="6" ry="2" fill="black" opacity="0.2" />
                        
                        {/* Pin body */}
                        <path 
                          d="M16 0C9.373 0 4 5.373 4 12c0 8.5 12 28 12 28s12-19.5 12-28c0-6.627-5.373-12-12-12z" 
                          fill="var(--primary)" 
                        />
                        
                        {/* Pin inner circle */}
                        <circle cx="16" cy="12" r="5" fill="white" />
                        
                        {/* Pin center dot */}
                        <circle cx="16" cy="12" r="3" fill="var(--primary)" />
                      </svg>
                      
                      {/* Pulse animation ring */}
                      <svg className="absolute block w-8 h-8 top-0 left-1/2 -translate-x-1/2 animate-ping opacity-75" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="12" fill="var(--primary)" opacity="0.3" />
                      </svg>
                    </div>
                  ) : (
                    /* Regular dot untuk non-selected state */
                    <div className={`relative -translate-x-1/2 -translate-y-1/2 w-4 h-4`}>
                      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
                        <circle 
                          cx="8" 
                          cy="8" 
                          fill={isHovered ? "var(--accent)" : "var(--ring)"} 
                          r="8" 
                        />
                      </svg>
                      {isHovered && (
                        <svg className="absolute block size-full animate-ping opacity-75" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" fill="var(--accent)" r="8" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Popover nama sekolah saat hover */}
            {hoveredSchool && <SchoolNamePopover school={hoveredSchool} mapTransform={mapTransform} />}
            
            {/* Detail Card lengkap */}
            {selectedSchool && (
              <SchoolDetailCard 
                school={selectedSchool} 
                onClose={handleCloseDetailCard}
                onSelectSchool={onSelectSchool}
                mapTransform={mapTransform}
              />
            )}
          </div>

          {/* Sidebar Filter Panel */}
          <FilterPanel 
            onSchoolClick={handleSchoolClick}
            onSchoolHover={handleSchoolHover}
            onSchoolHoverEnd={handleSchoolHoverEnd}
            selectedSchoolId={selectedSchool?.id || null}
          />
          
          {/* Banner Carousel */}
          <div className="absolute h-[136px] left-0 top-0 w-[428px] z-10">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerCarousel} />
            <ImageContainer />
            <p className="absolute bottom-[60px] leading-[22px] left-[calc(50%-190px)] not-italic text-white translate-y-full w-[380px]" style={{ fontSize: 'var(--heading-small-size)', fontWeight: 'var(--font-weight-bold)' }}>Bersama, kita wujudkan pendidikan bermutu untuk semua</p>
          </div>
        </div>
      </div>
    </>
  );
}