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
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import AnimatedSection from "@components/AnimatedSetion";


import { motion } from "framer-motion";
import Button from "@components/primitives/button";

const partnersIm = ["/metamask-logo.svg", "/eth-logo.svg"]
const AnimatedImage = ({im}) => {
  return (
  <>
 <div className="border">
    <div className="relative  overflow-x-hidden h-12 w-full"   
      >   

      
      {partnersIm.map((path, index) => (
        <motion.img
          key={index}
          src={path}
          alt={`animated-image-${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: index === 0 ? 0 : "-100%",
            maxWidth: "none"
          }}
          animate={{ left: index === 0 ? "100%" : 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,           
            ease: "linear",
            delay: index * 5
          }}
        />
      ))}

      {/* <motion.img 
      src={im}  
      initial={{
        left:"0%"
      }}
      animate={{ left: "100%" }}  
      transition={{
        duration: 5,
        repeat: Infinity,       
        ease: "linear"
      }}
      className="absolute" />
     */}
    </div>
    </div>
  </>
  );
};

const Partners = ()=>{

  return (
    <div className="flex justify-evenly">
      {partnersIm.map((im)=> { 
        console.log(im)
        return <AnimatedImage im={im} />
      })
       
      }
    </div>
  )
}

const Features = () => {
  const [showDashTwo, setShowDashTwo] = useState(false);
  useEffect(() => {
    const element = document.getElementById("dash-icon");
    // window.addEventListener(
    //   "scroll",
    //   () => {
    //     if (!element) return;
    //     var offset = element.getBoundingClientRect().top - element.offsetParent.getBoundingClientRect().top;
    //     const top = window.pageYOffset + window.innerHeight - offset;

    //     if (top >= element.scrollHeight) {
    //       setShowDashTwo(true);
    //       // console.log("bottom");
    //     } else {
    //       setShowDashTwo(false);
    //     }
    //   },
    //   { passive: false }
    // );
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
          <div className="flex flex-wrap text-left  justify-center items-end ">
            <div className="max-w-[10rem] border p-4 rounded-[10px] lg:mr-4 mb-8">
             <AnimatedSection>
             <div className="w-11 h-11 my-4">
                <Image width={40} height={40} src="/user-square.svg" alt="user-icon" />
              </div>
              Assign a percentage of your Tokens to Inheritors
             </AnimatedSection>
            </div>
            <div className="max-w-[18rem] border p-4 rounded-[10px] mb-8">
          <AnimatedSection>
          <span className="text-safe-light-700">
                <div className="w-11 h-11 mb-2">
                  <Image width={40} height={40} src="/home-hashtag.svg" alt="security-icon" />
                </div>
                Multiple Security? Why not,
              </span>{" "}
              Add Multi-signatories to confirm transactions on your vault.
          </AnimatedSection>
            </div>
          </div>
          <div className="flex flex-wrap text-left lg:-translate-x-10  justify-center ">
            <div className="text-xl max-w-[18rem] border p-4 rounded-[10px] lg:mr-4 mb-8 px-4">
            <AnimatedSection>
            <span className="text-safe-light-700">
                <div className="mb-2">
                  <Image width={40} height={40} src="/glass.svg" alt="ux-experience-icon" />
                </div>
                New to Crypto?
              </span>{" "}
              Safekeep has the cleanest, smoothest Experience.
            </AnimatedSection>
            </div>
            <div className="max-w-[13rem] border p-4 rounded-[10px] px-4  text-xl">
          <AnimatedSection>
          <div className=" my-4 mb-8 flex justify-between items-center">
                <div>
                  <Image width={40} height={40} src="/safekeep-icon-home.svg" alt="security-icon" />
                </div>
                <div>
                  <button className="bg-safekeep-blue text-safe-light-100 text-xs rounded-full p-1 px-2">coming soon</button>
                </div>
              </div>
              Contribute to new features on SafekeepDAO
          </AnimatedSection>
            </div>
          </div>
          <div className="flex flex-wrap text-left  justify-center items-end lg:translate-x-10 text-xl ">
            <div
              className="
            lg:-translate-y-3
            max-w-[13rem] border p-4 rounded-[10px] lg:mr-4 mb-8 px-4  lg:my-0 mt-8"
            >
     <AnimatedSection>
     <div className="my-4">
                <Image width={40} height={40} src="/swap-icon.svg" alt="swap-icon" />
              </div>
              Swap, Trade, Bridge and Sell tokens on Multichains.
     </AnimatedSection>
            </div>
            <div className="hidden lg:block w-[18rem] border p-2 rounded-[10px] mb-8 lg:h-44"></div>
          </div>
        </div>
      </div>
  <AnimatedSection>
      <div className="text-center max-w-2xl mx-auto  lg:p-0 p-5">
        <div className="text-safe-light-100 bg-safekeep-grey-200 inline-block rounded-3xl lg:py-2 py-4 px-4 lg:text-xl md:text-lg text-sm text-center mx-auto font-medium uppercase mb-6">
          get an inside tour of safekeep dapp
        </div>      

        <p className="text-4xl hidden lg:block   mx-auto  text-safekeep-blue leading-tight mb-16">Looking to Experience safekeep before giving it a shot</p>
        <div className="overflow-x-hidden relative flex justify-center items-center  -z-20 md:hidden">
  <div className="absolute">   
  <div>
    <Image className="mx-auto relative z-20" src="/profile-ui.png" alt="profile ui" width={200} height={200} />
    <div className="max-w-sm border p-8 rounded-[10px] bg-[white] relative box-white z-30 mx-3  ">     
      <div className="text-gray-900 font-semibold">Get an Insider view</div>
      <div className="ext-gray-600">Looking to see how safekeep can help you protect your assets, explore our demo app</div>
   <div>
    <Button onlyBtn className="w-full mt-6">View Demo</Button>
   </div>
    </div>


  </div>
  </div>
<svg 
className="z-10 relative"
width="414" height="731" viewBox="0 0 414 731" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M522.404 495.091L522.577 495.19H522.618C530.337 500.551 535.844 508.536 538.109 517.657C540.393 526.854 539.223 536.569 534.82 544.961C530.417 553.353 523.088 559.84 514.219 563.194C505.369 566.541 495.599 566.534 486.754 563.177L476.183 557.178L476.182 557.177L342.383 480.974L341.866 480.68L341.462 481.116C318.639 505.739 288.965 522.972 256.259 530.599L255.679 530.734V531.329V691.621C255.657 701.276 252.026 710.574 245.499 717.692C238.971 724.81 230.018 729.234 220.395 730.095C210.772 730.957 201.174 728.194 193.484 722.349C185.813 716.518 180.592 708.038 178.841 698.568V531.102V530.511L178.268 530.373C147.457 522.92 119.394 506.887 97.3334 484.137L96.9165 483.707L96.405 484.018L-38.6465 566.212L-38.6504 566.215L-44.2755 569.686C-52.7689 573.978 -62.5455 574.998 -71.7438 572.553C-80.9521 570.105 -88.9361 564.354 -94.1725 556.399C-99.4089 548.443 -101.531 538.84 -100.135 529.42C-98.7405 520.019 -93.9384 511.458 -86.6419 505.364L-76.4475 499.138L-76.4463 499.137L57.0487 417.93L57.5497 417.625L57.3747 417.065C47.3667 385.052 47.1038 350.789 56.6193 318.626L56.7881 318.056L56.2711 317.762L-80.293 240.044L-80.2978 240.042L-90.5271 234.119C-97.992 228.224 -103.026 219.79 -104.668 210.424C-106.314 201.04 -104.44 191.38 -99.4043 183.29C-94.369 175.201 -86.5259 169.251 -77.3757 166.579C-68.2336 163.909 -58.428 164.698 -49.8317 168.795L-44.2807 171.927L-44.2775 171.929L94.6403 251.202L95.1528 251.494L95.5576 251.065C117.9 227.375 146.647 210.683 178.306 203.017L178.879 202.878V202.288V32.4336C180.629 22.9691 185.843 14.4941 193.507 8.66258C201.189 2.81738 210.778 0.0494487 220.396 0.901224C230.013 1.753 238.966 6.16307 245.5 13.2672C252.033 20.3714 255.677 29.6576 255.717 39.3063V201.909V202.504L256.296 202.639C286.764 209.744 314.647 225.193 336.817 247.253L337.234 247.668L337.736 247.362L470.511 166.533L470.513 166.532L480.966 160.121C489.672 156.687 499.329 156.519 508.15 159.649C516.992 162.787 524.394 169.024 528.982 177.203C533.569 185.382 535.031 194.947 533.095 204.122C531.162 213.286 525.97 221.439 518.483 227.07L513.016 230.461L513.011 230.464L378.192 312.465L377.683 312.775L377.87 313.342C388.577 345.669 389.314 380.466 379.985 413.216L379.824 413.782L380.335 414.073L516.638 491.793L516.638 491.794L522.404 495.091ZM218.036 479.646H218.038C248.381 479.646 277.484 467.616 298.961 446.195C320.438 424.774 332.535 395.713 332.595 365.388V365.387C332.595 342.798 325.896 320.716 313.343 301.931C300.79 283.147 282.948 268.502 262.07 259.847C241.193 251.192 218.216 248.916 196.045 253.306C173.874 257.697 153.502 268.556 137.503 284.513C121.505 300.469 110.598 320.807 106.16 342.956C101.723 365.105 103.955 388.072 112.573 408.954C121.191 429.836 135.81 447.697 154.581 460.279C173.352 472.861 195.434 479.601 218.036 479.646Z" stroke="url(#paint0_linear_2633_50201)" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_2633_50201" x1="217" y1="129.5" x2="217" y2="680.918" gradientUnits="userSpaceOnUse">
<stop stop-color="#01A6FF" stop-opacity="0"/>
<stop offset="0.413193" stop-color="#0125F7"/>
<stop offset="1" stop-color="#01A6FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>
        <div id="dash-icon" className="relative hidden md:block">
          <div className={`max-w-xs absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-safe-light-100 z-50 p-3 px-4 rounded-md transition ${showDashTwo ? "block" : "hidden"}`}>
            <div className="mb-6 text-sm">Looking to see how safekeep can help you protect your assets, explore our demo app</div>
            <button className="bg-safekeep-blue p-1 text-safe-light-100 px-4 rounded-full w-full">View Demo</button>
          </div>
        
          <div
            className={`borer relative before:absolute  before:w-full before:left-1/2 before:-translate-x-1/2 before:h-[${height - height * 0.16}px] z-40 before:content-[''] 
          before:bg-safe-dark-main/20
            before:border 
            before:mt-4 before:w-[90%]           
            before:${showDashTwo ? "flex" : "hidden"}
             `}          
          >
            {/* @ts-ignore */}
            <Image src="dashboard-icon.svg" alt="dashboard-icon" width={900} height={900} ref={refDash} />
          </div>
        </div>
      </div>
  </AnimatedSection>
  <AnimatedSection>
      <div className="text-center max-w-5xl mx-auto ">
        <div className="text-safe-light-100 bg-safekeep-grey-200 inline-block rounded-3xl lg:py-2 py-4 px-4 lg:text-xl text-lg text-center mx-auto uppercase mb-6">Safekeep Ecosystem</div>
        <p className="text-4xl  mx-auto  text-safekeep-blue leading-tight mb-16">Safekeep is the safest, most secure crypto vault to explore web3 without risk.</p>

    <div className="">
        <div className="lg:grid grid-cols-6 gap-6   lg:p-0 p-5 " >
          <div className="col-span-3 lg:mb-0 mb-12 ">
            <div className="bg-safekeep-blue-100 pl-12 pt-12 rounded-t-2xl">
            <div className="relative ">
              <div className="">
                <Image src="safe-home-one.svg" height={550} width={550} alt="dash-img-icon" className="rounded-[8px]" />
              </div>
              <div className="absolute  top-1/2 -translate-y-1/2 ">
                <div className="0">

                <Image src="transaction-card.svg" className="scale-[0.8] rounded-[8px]" height={550} width={550} alt="dash-img-icon" />
                </div>
              </div>
            </div>
            </div>

            <div className="flex justify-between items-center -mt-2 ">
              <div>
                <AnimatedSection>
                <div className="flex items-center  mt-4">
                  <img src="/user-square.svg" alt="" className="scale-75" />

                  <div>
                    <p className="lg:text-2xl text-xl font-medium safe-darky ">Multi-Sig Security.</p>
                  </div>
                </div>
                <p className="text-left">Bard is Google's artificial intelligence chatbot. It will work exactly like ChatGPT, that is, users will be able to use the chatbot through conversation.</p>
            
                  </AnimatedSection>
              </div>
              <div className="pl-4  hidden md:flex">
                <AnimatedSection>
                <Image src="/safekeep-3d.svg" height={380} width={380} alt="safekeep-3d.svg" />
             
                </AnimatedSection>
              </div>
            </div>
          </div>
          <div className=" col-span-3 lg:translate-y-[15rem] lg:mb-0 mb-12">
            <div className="rounded-2xl bg-safekeep-blue pl-5 pt-5 ">
              <div className="mr-5">
                <AnimatedSection>

                <Image src="wallets-icon.svg" height={550} width={550} alt="wallets-icon" />
                </AnimatedSection>
              </div>
              <div className="text-safekeep-white ">
              <AnimatedSection>
              <div className="flex flex-wrap items-center mt-6">
                  <img className="md:mr-4  " src="/wallet-2.svg" alt="wallet icon" />
                  <p className="md:text-2xl md:my-0 my-2 font-medium">Connect with a Non-Custodian Wallet</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    {" "}
                    <p className="text-left md:text-base text-xs mb-6">Safekeep supports a wide range of Non-Costodian wallets as well as ERC-20 Tokens.</p>
                  </div>
                  <div className="md:block hidden" >
                    <img className="mr-4 rounded-br-2xl  " src="/pan-two.svg" alt="pan-two-icon" />
                  </div>
                </div>
              </AnimatedSection>
              </div>
            </div>
          </div>
        </div>

    </div>

        <div className="lg:grid grid-cols-6 gap-6 lg:translate-y-[15rem]  lg:p-0 p-5 lg:mb-[20rem] ">
          <div className="col-span-3">
            <div className="flex  justify-center lg:justify-start">
              <AnimatedSection className="flex">
              <Image className="lg:flex hidden" width={150} height={400} src="./assets-home-dash-left.svg" alt="assets-home-dash-left" />
              <Image width={300} height={200} src="./assets-home-dash.svg" alt="assets-home-dash" />
              <Image className="lg:flex hidden" width={150} height={400} src="./assets-home-dash-right.svg" alt="assets-home-dash-rights" />
           
              </AnimatedSection>
            </div>
            <div className=" ">
           <AnimatedSection>
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
           </AnimatedSection>
            </div>
          </div>
          <div className="col-span-3  bg-gradient-to-r  from-[#0171FD]/40 to-[#1AE52D]/40 empty-home-gradient  lg:h-36 hidden lg:flex "></div>
        </div>
      </div>
  </AnimatedSection>
    </div>
  );
};
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Head>
        <title>SafeKeep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
          <Hero />
              <About />
        <Features />    
        <AnimatedSection>
        <Faq />
        </AnimatedSection>
        <AnimatedSection>
        <Cta />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
