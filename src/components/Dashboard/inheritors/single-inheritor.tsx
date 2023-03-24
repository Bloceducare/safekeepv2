import Profile from "assets/images/inheritors/profile.svg";
import Copy from "assets/images/inheritors/copy.svg";
import EyeSvg from "assets/images/inheritors/eye.svg";
import TrendDown from "assets/images/inheritors/trend-down.svg";
import Trash from "assets/images/inheritors/trash.svg";
import EmptyIcon from "assets/images/inheritors/empty.svg";

const SingleInheritors = () => {
  return (
  <div className="mx-auto flex flex-col gap-2.5 items-center w-full p-2.5 bg-[#FFFFFF] mt-16 rounded-[10px] shadow-sm">
    <div className="w-full p-4 flex justify-between items-start">
        <div className="flex gap-2 items-center">
            <Profile />
            <div className="gap-1 flex flex-col">
                <div className="px-2 py-1 font-dmSans font-semibold text-[#0150B4] text-base bg-[#E6F1FF] rounded-3xl">
                    eth:0x45E7b6...8F497410
                </div>
                <p className="font-dmSans text-[#B5B5B5] text-xs">My Friend</p>
            </div>
        </div>
        <div className="flex gap-4">
            <Copy />
            <EyeSvg />
        </div>
    </div>
    <div className="w-full bg-[#F3FDFF] p-2.5 rounded-lg flex justify-between">
        <div>
            <p className="text-xs text-[#656A6B] font-polySansTrial">Allocated Balance</p>
            <div className="flex flex-col gap-1 mt-2">
                <p className="font-paralucentMedium text-xl text-[#001268]">
                    10.3274 ETH
                </p>
            </div>
        </div>
        <div className="flex flex-col justify-between items-end">
            <div className="flex gap-1 items-center">
                <TrendDown />
                <p className="text-xs text-[#FF5454] font-polySansTrial">1.10%(-5.18%)</p>
            </div>
            <button>
                <Trash />
            </button>
        </div>
    </div>
  </div>
  )
};

export default SingleInheritors;
