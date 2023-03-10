import HeaderLogo from "assets/images/HomeHero/hero-wheel.png";
import EtheruemLogo from "assets/images/HomeHero/ethereum-logo.svg";
import Image from "next/image";
import Wallet from "assets/images/HomeHero/wallet.svg";
import { LazyVideo } from "react-lazy-media";

const Hero = () => {
  return (
    <div className="relative max-w-full w-full px:8 lg:px-0 lg:pt-40 ">
      <div className="lg:hidden relative w-full flex justify-end -z-20">
        <Image alt="Hero Wheel" src={HeaderLogo} width="400" height="415" />
      </div>
      <div className="max-w-screen-2xl px-8 lg:px-9 w-full mx-auto z-[999]" style={{ zIndex: "999" }}>
        <div className=" p-2 lg:p-0 tracking-tight lg:tracking-normal lg:max-w-[771px] w-full lg:ml-32 z-50 text-4xl  leading-[48px] font-paralucentMedium lg:text-[69px] lg:leading-[83px]">
          <span>One Vault to </span> <span className="blog-author">Inherit </span> <span>Cryptocurrency Anytime, Automatically.</span>
          <div className="max-w-[592px] w-full ">
            <p className="pt-7 font-polySansTrial text-[#111111] text-base font-light lg:text-safekeep-blue-dark lg:text-lg">
              SafeKeep makes it safer to Trade, Inherit, Use, Sell and store crypto by providing a Highly Secured back-up and recovery vault, so you never loose your assets, ever again.
            </p>
          </div>
          <div className="mt-8 flex flex-col-reverse md:flex-row lg:mt-20 text-sm lg:text-lg leading-6 z-[999]">
            <button className="font-paralucentLight mt-4  md:mt-0 text-safekeep-blue px-8 py-3.5 border-solid border-[1px] rounded-lg mr-8">Read whitepaper</button>
            <a href="/dashboard" className="font-paralucentLight text-white px-24 py-3.5 bg-safekeep-blue rounded-lg mr-8 flex items-center justify-center cursor-pointer">
              {" "}
              <Wallet className="md:hidden mr-2.5" /> Get Safekeep
            </a>
          </div>
          <div className="flex flex-col md:flex-row mt-24 md:mt-20 items-center justify-center md:justify-start flex-nowrap">
            <p className="font-polySansTrial text-sm  md:pr-12 text-center">Secured by</p>
            <EtheruemLogo />
          </div>
          {/* <div className="inline-flex items-center">
            <span className="font-polySansTrial text-sm  text-center flex flex-nowrap m-0 p-0">Secured by</span>
            <EtheruemLogo className="scale-75 border border-red-500" />
          </div> */}
        </div>
      </div>
      <div className="absolute hidden lg:flex inset-0">
        <div className="relative w-full h-[950px] flex justify-end">
          <Image alt="Hero Wheel" src={HeaderLogo} />
        </div>
      </div>
      {/* <div className=" overflow-hidden">
        <div className="lg:grid grid-cols-10 mt-24 ">
          <div className="col-span-6">
            <div className="relative p-2 lg:p-0 tracking-tight lg:tracking-normal lg:max-w-[771px] w-full lg:ml-32 z-50 text-4xl  leading-[48px] font-paralucentMedium lg:text-[69px] lg:leading-[83px]">
              <span>One Vault to </span> <span className="blog-author">Inherit </span> <span>Cryptocurrency Anytime, Automatically.</span>
              <div className="max-w-[592px] w-full ">
                <p className="pt-7 font-polySansTrial text-[#111111] text-base font-light lg:text-safekeep-blue-dark lg:text-lg">
                  SafeKeep makes it safer to Trade, Inherit, Use, Sell and store crypto by providing a Highly Secured back-up and recovery vault, so you never loose your assets, ever again.
                </p>
              </div>
              <div className="mt-8 flex flex-col-reverse md:flex-row lg:mt-20 text-sm lg:text-lg leading-6 z-[999]">
                <button className="font-paralucentLight mt-4  md:mt-0 text-safekeep-blue px-8 py-3.5 border-solid border-[1px] rounded-lg mr-8">Read whitepaper</button>
                <a href="/dashboard" className="font-paralucentLight text-white px-24 py-3.5 bg-safekeep-blue rounded-lg mr-8 flex items-center justify-center cursor-pointer">
                  {" "}
                  <Wallet className="md:hidden mr-2.5" /> Get Safekeep
                </a>
              </div>
              <div className="flex flex-col md:flex-row mt-24 md:mt-20 items-center justify-center md:justify-start flex-nowrap">
                <p className="font-polySansTrial text-sm  md:pr-12 text-center">Secured by</p>
                <EtheruemLogo />
              </div>
            </div>
          </div>
          <div className="col-span-4 justify-self-end ">
            <div className=" border ">
              <LazyVideo autoplay={true} loop={true} controls={false} classes={["rounded-lg", "scale-[1.8]", "random"]} src={"/video/hero-vid.mp4"} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
