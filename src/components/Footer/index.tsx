import React from "react";
import HeaderLogo from "@images/Header/safekeepLogo.svg";
import Github from "@images/Footer/github-2.svg";
import Discord from "@images/Footer/discord.svg";
import Telegram from "@images/Footer/telegram.svg";
import Twitter from "@images/Footer/twitter.svg";
import Image from "@components/primitives/image";


const Footer = () => {  

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  return (
   <div >  

    <div className="relative mx-auto -mb-48 mt-20 z-20" > 
      <Image
     onClick={handleOnClick}      
       src="/back-to-top.svg" alt="back-to-top" width={300} height={300}
        className="text-center mx-auto cursor-pointer" />
    </div>

    <div className="relative max-w-6xl mx-auto p-4 backdrop-blur-md  bg-[white]/75 z-50">
    <HeaderLogo className="h-9 w-40 lg:hidden my-3 mb-8 " />
    <div className="md:grid grid-cols-12  flex  flex-col-reverse ">
      <div className="col-span-6 ">
     <div className="max-w-[12rem]">
     <HeaderLogo className="h-9 w-40 lg:h-11 lg:w-44 lg:pr-4 hidden  lg:flex  " />
      <div className="font-dmSans max-w-xs my-12 text-safekeep-gray-900">
      One vault to hold, trade and save cryptocurrency built on ethereum.
      </div>
      <div>
      <div className="flex items-center gap-3 text-[#000] my-3">
        <Discord />
            <Github  className="scale-[0.7]"/>
            
            <Telegram />
            <Twitter />
          </div> 
          <p className="text-safekeep-blue-400 font-dmSans text-sm mt-2">
          © {
          new  Date().getFullYear()
          } Safekeep Finance.
          </p>      
      </div>
     </div>
      </div>
      <div className="col-span-6 ">
        <div  className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-6">
              <div className="flex justify-between lg:mb-0  mb-4">
                <div>
                  <div className="text-safekeep-blue-700 font-semibold mb-4  font-dmSans">Company</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">About</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Career 
                  <span className="font-dmSans font-medium rounded-full p-1 px-3 text-[12px] ml-2 border border-safekeep-blue-600 text-safekeep-blue-600">We are hiring </span>
                  </div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Terms</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Privacy policy</div>
                </div>
                <div>
                <div>
                  <div className="text-safekeep-blue-700 font-semibold mb-4  font-dmSans">Resources</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Roadmap</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Press kit</div>
                </div>

                </div>
              </div>
            </div>
            <div  className="md:col-span-6">
            <div className="flex justify-between ">
                <div>
                  <div className="text-safekeep-blue-700 font-semibold mb-4  font-dmSans">Support</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Blog</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">Reach Us</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">FAQs</div>
                </div>
                <div>
                <div>
                  <div className="text-safekeep-blue-700 font-semibold mb-4  font-dmSans">Community</div>
                  <div className="text-safekeep-blue-400  text-sm mb-3 font-dmSans">SafeDAO</div>
                </div>

                </div>
              </div>

            </div>
        </div>
        </div>
    </div>
    </div>
   </div>
  );
};

export default Footer;
