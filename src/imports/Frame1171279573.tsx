function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[24px] pt-[8px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#2f3031] text-[19px] whitespace-nowrap">Rincian Konten Belajar</p>
    </div>
  );
}

function Select() {
  return (
    <div className="absolute right-[12px] size-[20px] top-[12px]" data-name="select">
      <div className="absolute inset-[-10%]" data-name="Filled / Navigation / arrow_drop_down">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #45474A)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] h-[72px] items-start relative shrink-0 w-full" data-name="Select with label">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#2f3031] text-[15px] w-[328px]">Materi Sumber Belajar</p>
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Select">
          <div className="absolute bg-white left-0 right-0 rounded-[4px] top-0" data-name="Text field">
            <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#65686c] text-[15px] w-[296px]">Pilih materi sumber belajar</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#808489] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <Select />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <Frame2 />
    </div>
  );
}