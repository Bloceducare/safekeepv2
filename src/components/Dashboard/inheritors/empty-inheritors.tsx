import VideoImage from "assets/images/inheritors/video-player.png";
import EmptyIcon from "assets/images/inheritors/empty.svg";

const EmptyInheritors = () => {
  return (
  <div className="mx-auto flex flex-col items-center w-full max-w-[542px] p-5 bg-[#FFFFFF] mt-16 rounded-[10px] shadow-sm">
        <EmptyIcon  />
        <p className="text-[#101828] text-lg mt-3 font-semibold">No Inheritors</p>
        <p className="text-[#475467] text-sm text-center mt-1">Add a new Inheritor to your vault to view them here.</p>
        <button className="w-full bg-safekeep-blue rounded-lg py-4 mt-11 text-safekeep-white font-paralucentMedium text-sm leading-[14px]">Add Inheritor</button>
  </div>
  )
};

export default EmptyInheritors;
