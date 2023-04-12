import React, { useState, useEffect } from "react";
import HeaderLogo from "@images/Header/safekeepLogo.svg";
import Github from "@images/Footer/github.svg";
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
    <div className="relative border max-w-screen-2xl mx-auto py-5 backdrop-blur-md  bg-[white]/75 z-50 lg:pt-[30px] flex flex-col w-full px-9 justify-between items-center text-center">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <HeaderLogo className="h-9 w-40 lg:h-11 lg:w-44 lg:pr-4" />
        <div className="max-w-[545px] mt-6 lg:mt-0  lg:pr-4 sm:flex justify-between w-full">
          <div className="flex flex-col justify-start text-start pr-8 mt-6 sm:mt-0">
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Company
            </a>
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              About
            </a>
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Careers
            </a>
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Terms
            </a>
            <a href="/" className=" font-polySansTrial text-base text-safekeep-gray">
              Privacy & Policy
            </a>
          </div>
          <div className="flex flex-col justify-start text-start pr-8 mt-6 sm:mt-0">
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Resources
            </a>
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Roadmap
            </a>
            <a href="/" className=" font-polySansTrial text-base text-safekeep-gray">
              Press Kit
            </a>
          </div>
          <div className="flex flex-col justify-start text-start pr-8 mt-6 sm:mt-0">
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Support
            </a>
            <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">
              Get Help
            </a>
            <a href="/" className=" font-polySansTrial text-base text-safekeep-gray">
              FAQ
            </a>
          </div>
        </div>
        <div className="max-w-[120px] mt-12 lg:mt-0 w-full">
          <div className="flex w-full justify-between text-safekeep-gray-300">
            <Github />
            <Discord />
            <Telegram />
            <Twitter />
          </div>        
        </div>
      </div>
      <div className="w-full flex justify-between flex-col-reverse lg:flex-row ">
        <div>
          <p className="font-paralucentLight text-sm tracking-wide text-safekeep-gray-300">© 2022 Safekeep Technologies, Inc.</p>
        </div>
    
      </div>
    </div>
   </div>
  );
};

export default Footer;
