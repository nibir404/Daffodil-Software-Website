function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[36px] text-black">Blog</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Helvetica_Now_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[36px] text-black">FAQ</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[448px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="bg-white content-stretch flex items-center px-[20px] py-[10px] relative shrink-0 w-[448px]" data-name="Insight Menu">
          <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
          <Frame2 />
        </div>
        <div className="bg-white content-stretch flex items-center px-[20px] py-[10px] relative shrink-0 w-[448px]" data-name="Insight Menu">
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function MegaMenu() {
  return (
    <div className="bg-[#eef6ff] content-stretch flex gap-[24px] items-start p-[16px] relative rounded-[10px] shrink-0" data-name="Mega Menu">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[24px]">
      <MegaMenu />
    </div>
  );
}

export default function MegamenuInsight() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Megamenu Insight">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-[-2px] pointer-events-none rounded-[22px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}