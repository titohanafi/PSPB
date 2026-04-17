import svgPaths from "./svg-nipaa6ie80";

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic pb-[24px] pt-[8px] relative shrink-0 text-[#2f3031] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[19px] whitespace-nowrap">Pilih Kontribusi Revitalisasi Sekolah</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-[16px] w-[min-content]">
        <span className="leading-[24px]">{`Anda dapat memilih salah satu `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">atau</span>
        <span className="leading-[24px]">{` lebih dari satu kebutuhan kontribusi. `}</span>
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#808489] border-solid left-1/2 rounded-[4px] size-[18px] top-1/2" data-name="Checkbox" />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2f3031] text-[16px]">Lapangan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#65686c] text-[12px]">Rehabilitasi</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame42 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2f3031] text-[14px]">Estimasi dana yang dibutuhkan: Rp 10,000,000</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="domain_disabled">
        <div className="absolute inset-[3.52%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.31 22.31">
            <path d={svgPaths.p1d511700} fill="var(--fill-0, #45474A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Luas Tapak Bangunan: 95.4</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function PriorityHigh() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="priority_high">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="priority_high">
          <g id="Vector">
            <path d={svgPaths.p1ca5c380} fill="var(--fill-0, #45474A)" />
            <path d="M10 3H14V15H10V3Z" fill="var(--fill-0, #45474A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[4px] relative shrink-0 w-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4">
        <g id="Frame 1171279549">
          <circle cx="6" cy="2" fill="var(--fill-0, #2F3031)" id="Ellipse 393" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Nilai Kerusakan: 10%</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PriorityHigh />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Klasifikasi: Rusak Ringan</p>
      <Frame9 />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[401px]">
      <Frame20 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#65686c] text-[12px] w-[min-content]">Kerusakan yang tidak mempengaruhi struktur utama bangunan dan masih memungkinkan kegiatan belajar mengajar berjalan seperti biasa. Biasanya bersifat kosmetik atau bisa diperbaiki dengan perawatan ringan.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame21 />
      <Frame8 />
      <Frame1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[24px] py-[20px] relative w-full">
        <Frame30 />
        <Frame29 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#808489] border-solid left-1/2 rounded-[4px] size-[18px] top-1/2" data-name="Checkbox" />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2f3031] text-[16px]">Toilet</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#65686c] text-[12px]">Rehabilitasi</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame39 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2f3031] text-[14px]">Estimasi dana yang dibutuhkan: Rp 15,000,000</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="domain_disabled">
        <div className="absolute inset-[3.52%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.31 22.31">
            <path d={svgPaths.p1d511700} fill="var(--fill-0, #45474A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Luas Tapak Bangunan: 95.4</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function PriorityHigh1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="priority_high">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="priority_high">
          <g id="Vector">
            <path d={svgPaths.p28611780} fill="var(--fill-0, #C68B24)" />
            <path d="M7 3H11V15H7V3Z" fill="var(--fill-0, #C68B24)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1fd3b1f0} fill="var(--fill-0, #C68B24)" />
            <path d="M13 3H17V15H13V3Z" fill="var(--fill-0, #C68B24)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[4px] relative shrink-0 w-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4">
        <g id="Frame 1171279549">
          <circle cx="6" cy="2" fill="var(--fill-0, #2F3031)" id="Ellipse 393" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Nilai Kerusakan: 45%</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PriorityHigh1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Klasifikasi: Rusak Sedang</p>
      <Frame10 />
      <Frame4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[401px]">
      <Frame26 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#65686c] text-[12px] w-[min-content]">Kerusakan yang mulai memengaruhi kenyamanan dan keselamatan, tapi struktur utama bangunan (seperti fondasi dan kolom) masih dalam kondisi stabil. Sekolah masih bisa beroperasi dengan keterbatasan.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[24px] py-[20px] relative w-full">
        <Frame32 />
        <Frame33 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#808489] border-solid left-1/2 rounded-[4px] size-[18px] top-1/2" data-name="Checkbox" />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2f3031] text-[16px]">Laboratorium Biologi</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#65686c] text-[12px]">Rehabilitasi</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame40 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2f3031] text-[14px]">Estimasi dana yang dibutuhkan: Rp 25,000,000</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="domain_disabled">
        <div className="absolute inset-[3.52%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.31 22.31">
            <path d={svgPaths.p1d511700} fill="var(--fill-0, #45474A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Luas Tapak Bangunan: 95.4</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function PriorityHigh2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="priority_high">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="priority_high">
          <g id="Vector">
            <path d={svgPaths.p1d61f600} fill="#E02D38" />
            <path d="M4 3H8V15H4V3Z" fill="#E02D38" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1ca5c380} fill="#E02D38" />
            <path d="M10 3H14V15H10V3Z" fill="#E02D38" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p621bcc0} fill="#E02D38" />
            <path d="M16 3H20V15H16V3Z" fill="#E02D38" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[4px] relative shrink-0 w-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4">
        <g id="Frame 1171279549">
          <circle cx="6" cy="2" fill="var(--fill-0, #2F3031)" id="Ellipse 393" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Nilai Kerusakan: 85%</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PriorityHigh2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Klasifikasi: Rusak Berat</p>
      <Frame13 />
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[401px]">
      <Frame28 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#65686c] text-[12px] w-[min-content]">Kerusakan besar yang memengaruhi struktur utama bangunan, sehingga sekolah tidak aman digunakan. Aktivitas belajar harus dihentikan atau dipindahkan.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame27 />
      <Frame12 />
      <Frame6 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[24px] py-[20px] relative w-full">
        <Frame34 />
        <Frame35 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#808489] border-solid left-1/2 rounded-[4px] size-[18px] top-1/2" data-name="Checkbox" />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2f3031] text-[16px]">Lapangan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#65686c] text-[12px]">Pembangunan Gedung Baru</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame41 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2f3031] text-[14px]">Estimasi dana yang dibutuhkan: Rp 10,000,000</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="domain_add">
        <div className="absolute inset-[8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
            <path d={svgPaths.pefd7af0} fill="var(--fill-0, #45474A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2f3031] text-[14px] whitespace-nowrap">Luas Tapak Bangunan: 95.4</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame38 />
      <Frame14 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[24px] py-[20px] relative w-full">
        <Frame36 />
        <Frame37 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

export default function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame11 />
      <Frame31 />
    </div>
  );
}