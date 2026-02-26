import { Link } from "react-router";

interface InsightsMegamenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InsightsMegamenu({ isOpen, onClose }: InsightsMegamenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Megamenu */}
      <div className="fixed left-0 right-0 top-20 z-40 pt-1">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[100px]">
          <div className="flex justify-end">
            <div className="w-[500px] bg-white rounded-[10px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.1)] overflow-hidden">
              <div className="bg-[#eef6ff] p-[16px]">
                <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
                  {/* Blog Menu Item */}
                  <Link
                    to="/blog"
                    onClick={onClose}
                    className="block bg-white px-[20px] py-[10px] border-b border-[#dadada] transition-all duration-200 hover:bg-gradient-to-r hover:from-[#cfffe8] hover:to-white"
                  >
                    <p className="font-['Helvetica_Now_Display'] text-[36px] text-black leading-normal text-left">
                      Blog
                    </p>
                  </Link>

                  {/* FAQ Menu Item */}
                  <Link
                    to="/faq"
                    onClick={onClose}
                    className="block bg-white px-[20px] py-[10px] transition-all duration-200 hover:bg-gradient-to-r hover:from-[#cfffe8] hover:to-white"
                  >
                    <p className="font-['Helvetica_Now_Display'] text-[36px] text-black leading-normal text-left">
                      FAQ
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
