import imgRectangle682 from "figma:asset/556a699ad75247b2eb1dbc7283ee994b8a0149c3.png";

function Frame() {
  return (
    <div className="content-stretch flex h-[150px] items-start justify-between not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Helvetica_Now_Display:Medium',sans-serif] leading-[75px] relative shrink-0 text-[#111] text-[64px] w-[655px]">Core ERP Modules in Smart Business 24</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#3c3c3c] text-[16px] w-[408px]">Smart Business 24 offers a comprehensive set of ERP modules that can be implemented gradually based on business priorities.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-full items-start leading-[30px] not-italic relative shrink-0 w-[306.667px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Sales & CRM`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Lead management, quotations, sales orders, invoicing, customer history, POS integration.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-full items-start leading-[30px] not-italic relative shrink-0 w-[306.667px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Procurement & Inventory`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Supplier management, purchase orders, GRN, stock valuation, inventory movement, reorder control.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-full items-start leading-[30px] not-italic relative shrink-0 w-[306.667px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">Manufacturing</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Production planning, bill of materials (BOM), work orders, quality control, wastage tracking.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[30px] not-italic relative shrink-0 w-[306.667px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`HR & Payroll`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Employee records, attendance, leave, payroll processing, performance tracking.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame8 />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[306.667px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Administration & Security`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">Role-based access, approval hierarchies, audit logs, system configuration.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[306.667px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111] text-[24px]">{`Finance & Accounting`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3c3c3c] text-[16px] w-[min-content] whitespace-pre-wrap">{`General ledger, accounts payable & receivable, budgeting, approvals, financial statements.`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[40px] items-center leading-[30px] not-italic relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame10 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[60px] h-[500px] items-end relative shrink-0 w-full">
      <Frame5 />
      <div className="h-[500px] pointer-events-none relative rounded-[10px] shrink-0 w-[807px]">
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[286.6%] left-[0.04%] max-w-none top-[-117.1%] w-[99.92%]" src={imgRectangle682} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#4ac4f0] border-solid inset-[-2px] rounded-[12px]" />
      </div>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative size-full">
      <Frame />
      <Frame6 />
    </div>
  );
}