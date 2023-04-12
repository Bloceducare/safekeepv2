import HeaderLogo from "assets/images/HomeHero/hero-wheel.png";
import EtheruemLogo from "assets/images/HomeHero/ethereum-logo.svg";
import Image from "next/image";
import Button from "@components/primitives/button";
import ConnectButton from "@components/ConnectButton";
import AnimateText from "./AnimatedActionText";


const Hero = () => {
  
  return (
    <div className="relative max-w-full w-full px:8 lg:px-0 lg:pt-40 hero-gradient pb-12">
      <div className="lg:hidden relative w-full flex justify-end z-20">
        <Image alt="Hero Wheel" src={HeaderLogo} width="400" height="400" />
      </div>
      <div className="max-w-screen-2xl px-8 lg:px-9 w-full mx-auto z-[999]" >
        <div className=" p-2 lg:p-0 tracking-tight lg:tracking-normal lg:max-w-[771px] w-full lg:ml-32 z-50 text-4xl  leading-[48px] font-paralucentMedium lg:text-[69px] lg:leading-[83px]">
         <div className="font-paralucentMedium">

         One Vault to {" "}          
          <AnimateText />  

          <span className=" md:text-[#0000] blog-author ">
          Cryptocurrency
            </span>         
           <> Anytime, Automatically.</>
           
         </div>
          <div className="max-w-[592px] w-full ">

       
            <p className="pt-7 font-polySansTrial text-[#111111] text-base font-light lg:text-safekeep-blue-dark lg:text-lg">
              SafeKeep makes it safer to Trade,
               Inherit, Use, Sell and store crypto by providing a Highly Secured back-up and recovery vault, so you never loose your assets, ever again.
            </p>
          </div>
          <div className="font-paralucentLight mt-8 flex md:justify-start md:gap-4 flex-col-reverse md:flex-row lg:mt-20 text-sm lg:text-lg leading-6 z-[999]">
          <Button type="outline" className=" px-16" onlyBtn>
            Read whitepaper
            </Button>
          <ConnectButton>
          <Button className="my-3 md:m-0 px-16 w-full" onlyBtn>
          Get Safekeep
            </Button>
            </ConnectButton>
          
            
          </div>
          <div className="flex flex-nowrap  mt-24 md:mt-20 items-center justify-center md:justify-start ">
            <p className="font-polySansTrial text-sm  pr-4 md:pr-12 text-center">Secured by</p>
            <EtheruemLogo />
          </div>      
        </div>
      </div>
      <div className="absolute hidden lg:flex top-0 right-0">
        <div className="relative w-full h-[830px] flex justify-end">
          <Image alt="Hero Wheel" src={HeaderLogo} width="500" height="300" />
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
