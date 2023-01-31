import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="max-w-xs mx-auto mb-12">
        <div className="mx-auto text-center ">
          <Image src="/star-icon.svg" alt="start icon" width={300} height={300} />
        </div>
        <div className="font-polySansTrial">
          <div className="font-bold blog-author text-xl my-2">Getting Started</div>
          <p className="text-safekeep-gray-900 text-[14px] ">Everything you need to know to start using Safekeep Dashboard</p>
          <div className="mt-4">
            <div className="text-[13px] font-light ">
              <span className="blog-title  ">Safekeep Team</span>
              <span className="text-safekeep-gray-200 ml-2">October 21, 2022</span>
              <div className="h-[2px] bg-safekeep-glow w-full mt-6"></div>
            </div>
            <div className="flex justify-between items-center my-4">
              <div>
                <div className="w-8 h-8 bg-safekeep-glow rounded-full"></div>
              </div>
              <div>
                <button className="brand-btn-1 p-2 px-4 text-[14px]">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
