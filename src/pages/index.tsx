import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "@components/primitives/image";
import Hero from "@components/home/Hero";
import About from "@components/About";
import Development from "@components/Development";
import Cta from "@components/home/Cta";
import Faq from "@components/home/Faq";
import slides from "@data/blog/slides";
import BlogSlider from "@components/BlogSlider";
import DashboardIcon from "../../public/dashboard-icon.svg";
import WalletIcon from "../../public/wallet-header.svg";

const Features = () => {
  const [showDashTwo, setShowDashTwo] = useState(false);
  useEffect(() => {
    const element = document.getElementById("dash-icon");
    window.addEventListener(
      "scroll",
      () => {
        if (!element) return;
        var offset = element.getBoundingClientRect().top - element.offsetParent.getBoundingClientRect().top;
        const top = window.pageYOffset + window.innerHeight - offset;

        if (top >= element.scrollHeight) {
          setShowDashTwo(true);
          // console.log("bottom");
        } else {
          setShowDashTwo(false);
        }
      },
      { passive: false }
    );
  }, []);

  const refDash = useRef(null);
  // var height = refDash?.current?.offsetHeight;
  var height = refDash?.current?.offsetHeight;

  return (
    <div>
      <div>
        <div className="text-center max-w-2xl mx-auto  lg:p-0 p-5">
          <div className="text-safe-light-100 bg-safekeep-grey-200 inline-block rounded-3xl lg:py-2 py-4 px-4 lg:text-xl text-lg text-center mx-auto uppercase mb-6">What can you do on safekeep</div>
          <p className="text-4xl  mx-auto  text-safekeep-blue leading-tight mb-16">With Safekeep, You can Trade, Backup, Assign and Inherit Crypto Tokens on the most user-friendly Dashboard.</p>
          <div className="flex flex-wrap text-left  justify-center items-end">
            <div className="max-w-[10rem] border p-2 rounded-[10px] lg:mr-4 mb-8">
              <div className="w-11 h-11 my-4">
                <Image width={40} height={40} src="/user-square.svg" alt="user-icon" />
              </div>
              Assign a percentage of your Tokens to Inheritors
            </div>
            <div className="max-w-[18rem] border p-2 rounded-[10px] mb-8">
              <span className="text-safe-light-700">
                <div className="w-11 h-11 mb-2">
                  <Image width={40} height={40} src="/home-hashtag.svg" alt="security-icon" />
                </div>
                Multiple Security? Why not,
              </span>{" "}
              Add Multi-signatories to confirm transactions on your vault.
            </div>
          </div>
          <div className="flex flex-wrap text-left lg:-translate-x-10  justify-center ">
            <div className="text-xl max-w-[18rem] border p-2 rounded-[10px] lg:mr-4 mb-8 px-4">
              <span className="text-safe-light-700">
                <div className="mb-2">
                  <Image width={40} height={40} src="/glass.svg" alt="ux-experience-icon" />
                </div>
                New to Crypto?
              </span>{" "}
              Safekeep has the cleanest, smoothest Experience.
            </div>
            <div className="max-w-[13rem] border p-2 rounded-[10px] px-4  text-xl">
              <div className=" my-4 mb-8 flex justify-between items-center">
                <div>
                  <Image width={40} height={40} src="/safekeep-icon-home.svg" alt="security-icon" />
                </div>
                <div>
                  <button className="bg-safekeep-blue text-safe-light-100 text-xs rounded-full p-1 px-2">coming soon</button>
                </div>
              </div>
              Contribute to new features on SafekeepDAO
            </div>
          </div>
          <div className="flex flex-wrap text-left  justify-center items-end lg:translate-x-10 text-xl ">
            <div
              className="
            lg:-translate-y-3
            max-w-[13rem] border p-2 rounded-[10px] lg:mr-4 mb-8 px-4"
            >
              <div className="my-4">
                <Image width={40} height={40} src="/swap-icon.svg" alt="swap-icon" />
              </div>
              Swap, Trade, Bridge and Sell tokens on Multichains.
            </div>
            <div className="hidden lg:block w-[18rem] border p-2 rounded-[10px] mb-8 lg:h-44"></div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto  lg:p-0 p-5">
        <div className="text-safe-light-100 bg-safekeep-grey-200 inline-block rounded-3xl lg:py-2 py-4 px-4 lg:text-xl text-lg text-center mx-auto uppercase mb-6">
          get an inside tour of safekeep dapp
        </div>
        <p className="text-4xl  mx-auto  text-safekeep-blue leading-tight mb-16">Looking to Experience safekeep before giving it a shot</p>
        <div id="dash-icon" className="relative">
          <div className={`max-w-xs absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-safe-light-100 z-50 p-3 px-4 rounded-md transition ${showDashTwo ? "block" : "hidden"}`}>
            <div className="mb-6 text-sm">Looking to see how safekeep can help you protect your assets, explore our demo app</div>
            <button className="bg-safekeep-blue p-1 text-safe-light-100 px-4 rounded-full w-full">View Demo</button>
          </div>
          {/* {height} */}
          {/* {height - height * 0.16} */}
          <div
            className={`borer relative before:absolute  before:w-full before:left-1/2 before:-translate-x-1/2 before:h-[${height - height * 0.16}px] z-40 before:content-[''] 
          before:bg-safe-dark-main/20
            before:border 
            before:mt-4 before:w-[90%]           
            before:${showDashTwo ? "flex" : "hidden"}
            `}
            // before:transition-all
            // before:ease-in-out
            // before:delay-150
            // before:duration-1000
          >
            {/* @ts-ignore */}
            <Image src="dashboard-icon.svg" alt="dashboard-icon" width={900} height={900} ref={refDash} />
          </div>
        </div>
      </div>
      <div className="text-center max-w-5xl mx-auto ">
        <div className="text-safe-light-100 bg-safekeep-grey-200 inline-block rounded-3xl lg:py-2 py-4 px-4 lg:text-xl text-lg text-center mx-auto uppercase mb-6">Safekeep Ecosystem</div>
        <p className="text-4xl  mx-auto  text-safekeep-blue leading-tight mb-16">Safekeep is the safest, most secure crypto vault to explore web3 without risk.</p>

        <div className="lg:grid grid-cols-6 gap-6   lg:p-0 p-5">
          <div className="col-span-3 lg:mb-0 mb-12 ">
            <div className="relative">
              <div className="">
                <Image src="safe-home-one.svg" height={550} width={550} alt="dash-img-icon" className="rounded-[8px]" />
              </div>
              <div className="absolute  top-1/2 -translate-y-1/2">
                <Image src="transaction-card.svg" className="scale-[0.8] rounded-[8px]" height={550} width={550} alt="dash-img-icon" />
              </div>
            </div>
            <div className="flex justify-between items-center -mt-2">
              <div>
                <div className="flex items-center">
                  <img src="/user-square.svg" alt="" className="scale-75" />

                  <div>
                    <p className="lg:text-2xl text-xl font-medium safe-darky">Multi-Sig Security.</p>
                  </div>
                </div>
                <p className="text-left">Bard is Google's artificial intelligence chatbot. It will work exactly like ChatGPT, that is, users will be able to use the chatbot through conversation.</p>
              </div>
              <div className="pl-4">
                {/* <img className="scale-125" src="/safekeep-3d.svg" alt="safekeep-3d.svg" /> */}
                <Image src="/safekeep-3d.svg" height={380} width={380} alt="safekeep-3d.svg" />
              </div>
            </div>
          </div>
          <div className=" col-span-3 lg:translate-y-[15rem] lg:mb-0 mb-12">
            <div className="rounded-2xl bg-safekeep-blue pl-5 pt-5 ">
              <div className="mr-5">
                <Image src="wallets-icon.svg" height={550} width={550} alt="wallets-icon" />
              </div>
              <div className="text-safekeep-white ">
                <div className="flex items-center mt-6">
                  <img className="mr-4  " src="/wallet-2.svg" alt="wallet icon" />
                  <p className="text-2xl">Connect with a Non-Custodian Wallet</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    {" "}
                    <p className="text-left">Safekeep supports a wide range of Non-Costodian wallets as well as ERC-20 Tokens.</p>
                  </div>
                  <div>
                    <img className="mr-4 rounded-br-2xl  " src="/pan-two.svg" alt="pan-two-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-6 gap-6 lg:translate-y-[15rem]  lg:p-0 p-5 lg:mb-[20rem] ">
          <div className="col-span-3">
            <div className="flex  justify-center lg:justify-start">
              <Image className="lg:flex hidden" width={150} height={400} src="./assets-home-dash-left.svg" alt="assets-home-dash-left" />
              <Image width={300} height={200} src="./assets-home-dash.svg" alt="assets-home-dash" />
              <Image className="lg:flex hidden" width={150} height={400} src="./assets-home-dash-right.svg" alt="assets-home-dash-rights" />
            </div>
            <div className=" ">
              <div className="flex items-center mt-6">
                <img className="mr-4  " src="/bitcoin-icon.svg" alt="bitcoin icon" />
                <p className="text-2xl safe-darky">Assets Transparency.</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {" "}
                  <p className="text-left py-4 text-md">Safekeep provides unparalleled transparency, giving you a clear view of your Vault and transactions.</p>
                </div>
                <div>
                  <img className="mr-4 rounded-br-2xl  " src="/crypto-icon.svg" alt="crypto-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3  bg-gradient-to-r  from-[#0171FD]/40 to-[#1AE52D]/40 empty-home-gradient  lg:h-36 hidden lg:flex "></div>
        </div>
      </div>
    </div>
  );
};
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>SafeKeep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <div className="mb-24">
          <Hero />
        </div>
        <About />
        <Features />

        {/* <Ecosystem /> */}
        {/* <Development /> */}
        <Faq />
        <Cta />
        {/* <BlogSlider slides={slides} /> */}
      </div>
    </div>
  );
};

export default Home;
