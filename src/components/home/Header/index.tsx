import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSIWE } from "connectkit";
import Link from "next/link";
import HeaderLogo from "@images/Header/safekeepLogo.svg";
import ChevronDown from "@images/Header/chevron-down.svg";
import Hamburger from "@images/Header/hamburger.svg";
import ModeSwitch from "@images/Header/mode-switch.svg";
import ConnectButton from "@components/ConnectButton";
import { useAccount } from "wagmi";
import React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import MobileHeader from "./mobile-header";


const Header = () => {
  const { signedIn } = useSIWE();
  const { address } = useAccount();
  const router = useRouter();
  console.log(signedIn, address, "", router);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (signedIn && address) {
      // router.push("/dashboard");
    }
  }, [signedIn, address]);
// 
  return (
    <div className="bg-[#E5F1FF] ">
      <div className="md:bg-[#fff]/70 bg-[#fff]/50  w-full left-0 top-0">
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
            <ConnectButton>
              <div className="py-2 mr-8 trounded-lg font-paralucentLight px-9 rounded-[8px] bg-safekeep-blue  text-safekeep-white"> Get Safekeep</div>
            </ConnectButton>
            <ModeSwitch />
          </div>
          <div className="items-center justify-center lg:hidden">
            <MobileHeader />          
          </div>
        </div>
      <div >  
      </div>
      </div>
     
    </div>
  );
};

export default Header;
