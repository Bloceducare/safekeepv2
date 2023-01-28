import HeaderLogo from "assets/images/Header/safekeepLogo.svg";
import ChevronDown from "assets/images/Header/chevron-down.svg";
import Hamburger from "assets/images/Header/hamburger.svg";
import ModeSwitch from "assets/images/Header/Mode-switch.svg";

const Header = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-5  lg:py-[30px] flex flex-row w-full px-9 justify-between items-center text-center">
        <HeaderLogo className="h-9 w-40 lg:h-11 lg:w-44" />
        <div className= "hidden lg:flex max-w-md text-center h-full justify-between items-center">
            <p className="font-polySansTrial pr-4 text-base font-semibold">Home</p>
            <div className="pr-4 flex flex-row items-center justify-center">
                <p className="font-polySansTrial text-base font-semibold">Company</p>
               <div className=" pl-2">
                 <ChevronDown className="text-center"/>
               </div>
            </div>
            <div className="pr-4 flex flex-row items-center justify-center">
                <p className="font-polySansTrial text-base font-semibold">Resources</p>
               <div className=" pl-2">
                 <ChevronDown className="text-center"/>
               </div>
            </div>
             <div className="pr-4 flex flex-row items-center justify-center">
                <p className="font-polySansTrial text-base font-semibold">Support</p>
               <div className=" pl-2">
                 <ChevronDown className="text-center"/>
               </div>
            </div>
        </div>
        <div className=" hidden lg:flex items-center justify-center">
            <button className="font-paralucentLight text-white px-9 py-2 bg-safekeep-blue rounded-lg mr-8">
                Get Safekeep
            </button>
            <button>
                <ModeSwitch />
            </button>
        </div>
          <div className=" lg:hidden items-center justify-center">
            <button>
                <Hamburger />
            </button>
        </div>
    </div>
  )
}

export default Header;
