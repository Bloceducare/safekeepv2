import Link from "next/link";
import HeaderLogo from "@images/Header/safekeepLogo.svg";
import ChevronDown from "@images/Header/chevron-down.svg";
import Hamburger from "@images/Header/hamburger.svg";
import ModeSwitch from "@images/Header/mode-switch.svg";

const Header = () => {
  return (
    <div className="bg-header-background shadow-3xl backdrop-blur-xl z-[100]">
      <div className="max-w-screen-2xl mx-auto py-5 lg:py-[30px] flex flex-row w-full px-8 lg:px-9 justify-between items-center text-center">
        <Link href="/">
          <HeaderLogo className="w-40 h-9 lg:h-11 lg:w-44" />
        </Link>
        <div className="items-center justify-between hidden h-full max-w-md text-center lg:flex">
          <Link href="/">
            <p className="pr-4 text-base font-semibold font-polySansTrial">Home</p>
          </Link>
          <Link href="/about">
            <div className="flex flex-row items-center justify-center pr-4">
              <p className="text-base font-semibold font-polySansTrial">Company</p>
              <div className="pl-2 ">
                <ChevronDown className="text-center" />
              </div>
            </div>
          </Link>
          <div className="flex flex-row items-center justify-center pr-4">
            <p className="text-base font-semibold font-polySansTrial">Resources</p>
            <div className="pl-2 ">
              <ChevronDown className="text-center" />
            </div>
          </div>
          <Link href="/contact-us">
            <div className="flex flex-row items-center justify-center pr-4">
              <p className="text-base font-semibold font-polySansTrial">Support</p>
              <div className="pl-2 ">
                <ChevronDown className="text-center" />
              </div>
            </div>
          </Link>
        </div>
        <div className="items-center justify-center hidden lg:flex">
          <button className="py-2 mr-8 text-white rounded-lg font-paralucentLight px-9 bg-safekeep-blue">Get Safekeep</button>
          <button>
            <ModeSwitch />
          </button>
        </div>
        <div className="items-center justify-center lg:hidden">
          <button>
            <Hamburger />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
