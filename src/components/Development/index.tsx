import CheckSvg from "assets/images/Development/check.svg";

const Development = () => {
  return (
    <div className="relative max-w-full w-full pt-64 pb-32 bg-safekeep-development">
        <div className="overflow-hidden flex flex-row items-center justify-between gap-12">
            <div className="max-w-[395px] w-full h-[395px] bg-safekeep-green-100 shrink-0 rounded-xl" />
            <div className="px-4 py-4 lg:px-11 lg:py-8 max-w-[729px] w-full shrink-0 bg-safekeep-blue rounded-xl">
                <div className="w-full justify-between">
                    <div className="w-full flex justify-between items-center mb-10">
                        <CheckSvg  />
                       <div>
                         <button className="px-4 py-1 text-white h-auto border-solid border uppercase text-[10px] leading-[10px] font-polySansTrial border-[#FEFFFF] rounded-3xl">
                            done⚡️
                        </button>
                       </div>
                    </div>
                    <div className="w-full border-4 border-[rgba(255, 255, 255, 0.13)] border-solid rounded mb-14" />
                    <p className="font-polySansTrial text-white font-semibold text-5xl"> Full beta testing Liquidity pool selection</p>
                    <div className="w-full border-4 border-[rgba(255, 255, 255, 0.13)] border-solid rounded mt-14" />
                    <p className="font-polySansTrial text-2xl font-semibold mt-20">
                        <span className="text-safekeep-blue-400">May ⭐️</span>
                        <span className="text-safekeep-blue-100 pl-4">Q1 2022</span>
                    </p>
                </div>
            </div>
            <div  className="max-w-[595px] w-full h-[395px] bg-safekeep-red-100 shrink-0 rounded-xl"/>
        </div>
    </div>
  )
}

export default Development;
