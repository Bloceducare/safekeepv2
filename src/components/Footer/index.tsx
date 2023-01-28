import HeaderLogo from "assets/images/Header/safekeepLogo.svg";
import Github from "assets/images/Footer/github.svg";
import Discord from "assets/images/Footer/discord.svg";
import Telegram from "assets/images/Footer/telegram.svg";
import Twitter from "assets/images/Footer/twitter.svg";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-5  lg:py-[30px] flex flex-col w-full px-9 justify-between items-center text-center">
        <div className="pb-16 flex flex-col lg:flex-row justify-between w-full">
            <HeaderLogo className="h-9 w-40 lg:h-11 lg:w-44 lg:pr-4" />
            <div className="max-w-[545px] mt-6 lg:mt-0  lg:pr-4 sm:flex justify-between w-full">
                <div className="flex flex-col justify-start text-start pr-8 mt-6 sm:mt-0">
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Company</a>
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">About</a>
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Careers</a>
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Terms</a>
                    <a href="/" className=" font-polySansTrial text-base text-safekeep-gray">Privacy & Policy</a>
                </div>
                <div className="flex flex-col justify-start text-start pr-8 mt-6 sm:mt-0">
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Resources</a>
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Roadmap</a>
                    <a href="/" className=" font-polySansTrial text-base text-safekeep-gray">Press Kit</a>
                </div>
                <div className="flex flex-col justify-start text-start pr-8 mt-6 sm:mt-0">
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Support</a>
                    <a href="/" className="pb-6 font-polySansTrial text-base text-safekeep-gray">Get Help</a>
                    <a href="/" className=" font-polySansTrial text-base text-safekeep-gray">FAQ</a>
                </div>
            </div>
            <div className="max-w-[120px] mt-12 lg:mt-0 w-full">
                <div className="flex w-full justify-between text-safekeep-gray-300">
                    <Github />
                    <Discord />
                    <Telegram />
                    <Twitter />
                </div>
                <div className="bg-footer-gradient h-1 rounded-sm w-20 mx-auto mt-2 mb-1.5"/>
               <p className="font-polySansTrial text-sm font-light text-safekeep-blue-400 w-full"> 
                Say Hi!, Sometime
               </p>
            </div>
        </div>
        <div className="w-full flex justify-between flex-col-reverse lg:flex-row mb-40 lg:mb-[286px]">
            <div>
                <p className="font-paralucentLight text-sm tracking-wide text-safekeep-gray-300">© 2022 Safekeep Technologies, Inc.</p>
            </div>
            <div className="max-w-[355px] w-full flex flex-col justify-start mb-9 lg:mb-0">
                <p className="font-polySansTrial text-sm pb-6 text-start" 
                style={{
                    "background": "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
                    "-webkit-background-clip":" text",
                    "-webkit-text-fill-color": "transparent",
                    "background-clip": "text",
                    "text-fill-color": "transparent",
                    }}>
                    All of the latest Crypto Gist, and Weekly Updates directly into your Inbox.
                </p>
                <input placeholder="Placeholder Text" className="w-full h-12 px- py-2.5 px-3 rounded-sm border-2 border-solid border-safekeep-gray-400 text-safekeep-gray-600 text-base font-semibold"/>
                <p className="text-start pt-2 font-polySansTrial text-xs text-safekeep-gray-500">
                    No Spams, We promise ⚡️
                </p>
               <button className="font-paralucentLight max-w-[197px] w-full text-safekeep-white text-lg px-11 py-3.5 bg-safekeep-blue rounded-lg mt-10">
                     Get Safekeep
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer;
