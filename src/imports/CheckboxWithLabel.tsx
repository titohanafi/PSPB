export default function CheckboxWithLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full" data-name="Checkbox with label">
      <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#808489] border-solid left-1/2 rounded-[4px] size-[18px] top-1/2" data-name="Checkbox" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#2f3031] text-[15px]">Saya bersedia dihubungi oleh Kemendikdasmen melalui informasi yang saya berikan serta terbuka untuk diskusi lanjutan mengenai potensi kerja sama ini.</p>
    </div>
  );
}