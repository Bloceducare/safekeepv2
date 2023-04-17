import AnimatedSection from "@components/AnimatedSetion";
import Cta from "@components/home/Cta";
import Faq from "@components/home/Faq";
import Button from "@components/primitives/button";
import Image from "@components/primitives/image";
import PageLayout from "@layout/page";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Hero=()=>{
  return (
    <div className="hero-gradient">
      <div className="max-w-5xl px-8 mx-auto ">
        <div className="flex justify-between flex-wrap h-[calc(100vh-72px)]  items-center" >
          <div className="max-w-xl ">
            <div className="pill-btn-grey inline-block font-dmSans">Support</div>
            <div className="safe-darky font-paralucentMedium lg:text-[40px] lg:leading-[48px] text-2xl my-4">
            Can’t find the answer to your question or Got A Direct Question?
            </div>
            <p className="text-safekeep-gray-300 font-dmSans">
            Safekeep Customer Support is online 24/7 to help with your needs. 
            </p>
          </div>
          <div>
            <Image src="/star.svg" width={200} height ={200} />
          </div>
        </div>
      </div>

    </div>
  )
}

const Contact = ()=>{
  return (
    <div className="-mt-8 flex gap-5 justify-center mb-16 flex-wrap lg:-mt-16 ">
      <div className="max-w-md bg-safekeep-white p-5 text-center mx-4 rounded-[8px] xbox-shadow">
        <div className="font-paralucentMedium text-2xl text-[#000]">Email Us</div>
        <div className="font-dmSans text-[#000]  mt-4">Send us questions, comments, or a poem right here without leaving your browser</div>
        <div>
          <input name="contact " className="border rounded-md py-3 px-2 text-safekeep-gray-300  w-full border-safekeep-blue-300 my-5" />
          <Button onlyBtn className="w-full">Send</Button>
        </div>
      </div>
          <div className="max-w-sm bg-safekeep-white p-5 text-center mx-4 rounded-[8px]  lg:max-h-52 xbox-shadow ">
        <div className="font-paralucentMedium text-2xl text-[#000]">Message us here</div>
        <div className="font-dmSans text-[#000]">Send us questions, comments, or a poem right here without leaving your browser</div>
              
          <Button onlyBtn type="outline" className="w-full my-8">Chat</Button>
      
      </div>
    </div>
  )
}


const ContactBox = ()=>{
  return <div className="bg-safekeep-blue-100 lg:col-span-1 md:col-span-2 rounded-[8px] p-5 m-8 ">
    <img src="/bitcoin.svg" />
    <div>
      <p className="text-safe-dark-main font-dmSans text-xl font-medium mt-10">How to add crypto to Coinbase Wallet</p>
      <p className="text-safe-dark-300 text-xs font-dmSans my-2">Learn the basics about importing, transferring, and sending crypto</p>
      <p className="text-safe-dark-main font-paralucentMedium mt-8 flex  items-center">Read 
      <ArrowRightIcon  className="ml-2 "/>
      </p>
    </div>
  </div>
}
const HelpCenter = ()=>{
  const [currentTab, setCurrentTab] = useState("all")

  const handleSetTab =(tab)=>{
   setCurrentTab(tab)
  }

  return (
    <div className="my-16 py-16">
           <div className="text-center"><div className="pill-btn-grey inline-block font-dmSans ">Help center</div></div>
           <div className="bg-safekeep-blue-100 p-4  lg:py-6">
            <PageLayout className="flex justify-between flex-wrap">
            <div className="relative w-full lg:w-1/3 lg:mb-0 mb-4">
                <input
                  placeholder="Search questions"
                  className="w-full placeholder:font-dmSans placeholder:text-sm p-2 border rounded-md bg-safekeep-white placeholder:text-safekeep-gray-400 py-3 "
                />
                <img
                  className="absolute scale-110 -translate-y-1/2 right-4 top-1/2"
                  src="/search-icon.svg"
                  alt="search icon"
                />
              </div>
              <div className="flex items-center">
                <div className="flex gap-2 items-center flex-wrap"> 
                  <button onClick={()=>handleSetTab("all")} className={`rounded-full  text-lg py-2 px-6 font-dmSans ${currentTab =='all' ? 'bg-safekeep-blue text-safekeep-white':''}`}>All ✨</button>
                  <button onClick={()=>handleSetTab("basics")}  className={`rounded-full  text-lg py-2 px-6 font-dmSans ${currentTab =='basics' ? 'bg-safekeep-blue text-safekeep-white':''}`}>Basics of web3</button>
                  <button onClick={()=>handleSetTab("defi")}  className={`rounded-full  text-lg py-2 px-6 font-dmSans ${currentTab =='defi' ? 'bg-safekeep-blue text-safekeep-white':''}`}>Defi</button>
                  <button onClick={()=>handleSetTab("safedao")}  className={`rounded-full  text-lg py-2 px-6 font-dmSans ${currentTab =='safedao' ? 'bg-safekeep-blue text-safekeep-white':''}`}>SafeDAO</button>
                  <button onClick={()=>handleSetTab("company")}  className={`rounded-full  text-lg py-2 px-6 font-dmSans ${currentTab =='company' ? 'bg-safekeep-blue text-safekeep-white':''}`}>Company</button>
                </div>
              </div>
            </PageLayout>

           </div>
           <PageLayout>
            <div className="lg:grid md:grid grid-cols-4 gap-4 lg:gap-1  mt-16">
            {
              new Array(8).fill(null).map((item)=>(<AnimatedSection key={item}>
                 <ContactBox />
              </AnimatedSection>))
            }
            </div>
           </PageLayout>
    </div>
  )
}
const ContactUsView = () => {
  return (
    <>
    <Hero />
    <Contact />
    <HelpCenter />
    <Faq />
    <Cta />    
    </>
  );
};

export default ContactUsView;
