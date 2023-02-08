import PhoneSvg from "assets/images/Ecosystem/phoneImage.png";
import EcosystemSvg from "assets/images/Ecosystem/ecosystem-background.svg";
import Image from "next/image";
import BenefitsImageOne from "assets/images/Ecosystem/benefits-image-one.png";
import BenefitsSvg from "assets/images/Ecosystem/lock.svg";
import Benefit from "./benefit";

const benefits = [
    {
    bgColor: "bg-safekeep-main",
    topic: "Bulletproof Security",
    text: "Safekeep has the industry’s first Active DEX offering competitive swap fees, deflationary mechanics, next-generation staking and farming, a simple yet dynamic UI, and offers the highest levels of safety.",
    containerLeft: true,
    bgImage: BenefitsImageOne,
    BgSvg: BenefitsSvg,
    },
    {
    bgColor: "bg-safekeep-yellow-100",
    topic: "Bulletproof Security",
    text: "Safekeep has the industry’s first Active DEX offering competitive swap fees, deflationary mechanics, next-generation staking and farming, a simple yet dynamic UI, and offers the highest levels of safety.",
    containerLeft: false,
    bgImage: BenefitsImageOne,
    BgSvg: BenefitsSvg,
    },
    {
    bgColor: "bg-safekeep-green-100",
    topic: "Bulletproof Security",
    text: "Safekeep has the industry’s first Active DEX offering competitive swap fees, deflationary mechanics, next-generation staking and farming, a simple yet dynamic UI, and offers the highest levels of safety.",
    containerLeft: true,
    bgImage: BenefitsImageOne,
    BgSvg: BenefitsSvg,
    }
]

const Ecosystem = () => {
  return (
    <div className="relative max-w-full w-full mb-20 lg:mb-32 -mt-[50px] lg:-mt-[120px] flex flex-col items-center">
       <div className="px-8 lg:px-9">
           <div>
                <Image src={PhoneSvg} alt="phone image" />
                <div className="h-4 bg-[#D9D9D9] blur-lg max-w-[620px] mx-auto"/>
           </div>
           <div className="max-w-7xl mx-auto items-center flex flex-col mt-80 mb-[461px]">
            <p className="font-polySansTrial tracking-tight text-sm text-center text-safekeep-gray lg:text-xl">The Safekeep Ecosystem</p>
            <p 
            className="font-paralucentDemiBold text-center mt-4 text-4xl tracking-tight leading-[48px] lg:mt-11 lg:text-[69px] lg:leading-[83px]"    
             style={{
              background: "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
            >Safekeep is the fast, safest, most secure crypto vault to explore web3 without the risks it posses!.</p>
           </div>
       </div>
         <div className="max-w-screen-2xl z-40 mx-auto px-8 lg:px-9 flex flex-col w-full">
            {
                benefits.map((item, index)=>{
                    return (
                        <Benefit {...item} key={item.topic} firstContainer={index === 0}/>
                    )
                })
            }
           </div>
       <div className="absolute inset-0">
        <EcosystemSvg className="w-full" />
       </div>
    </div>
  )
}

export default Ecosystem;
