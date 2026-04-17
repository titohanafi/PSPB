function Helper() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Helper">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#65686c] text-[12px] text-right">Jumlah karakter 0/500</p>
    </div>
  );
}

export default function TextAreaWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Text area with label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#2f3031] text-[15px] w-[328px]">Informasi Tambahan (Opsional)</p>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Text area">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal h-[78px] leading-[22px] not-italic relative shrink-0 text-[#808489] text-[15px] w-full">Sampaikan detail dukungan yang ingin Anda ajukan</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#808489] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Helper />
    </div>
  );
}