import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AngleDown from "assets/images/Faq/angle-down.svg";
import Image from '../../primitives/image';
import Msg from "assets/images/support/message-text.svg"
import ReportBug from "assets/images/support/report-bug.svg"
import HelpComm from "assets/images/support/help-comm.svg"
import Feat from "assets/images/support/feat.svg"
import NewFeat from "assets/images/support/new.svg"
import Settings from '@images/Dashboard/settings.svg';
import { DashOtherLinks } from '../../Layout/dashboard';
import Link from 'next/link';


const SupportDropdownMenu = () => {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)
 
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    router.events.on("routeChangeStart", closeMenu);
    return () => router.events.off("routeChangeStart", closeMenu);
  }, [router.events]);

  return (
    <DropdownMenu.Root  open={isOpen} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        {/* <div>
        <DashOtherLinks href="/dashboard/settings" id={0} title="Settings" icon={Settings} />
        </div> */}
        <button
          className=" inline-flex items-center justify-center    outline-none  "
          aria-label="Customise options"
        >
          <AngleDown className={`${isOpen ? 'rotate-180':''}`} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-safekeep-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade "
          sideOffset={5}
        >       

          <DropdownMenu.Item className="leading-none  rounded-[3px]  relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
          <div className='flex py-3   '>           
            <Image src="/reply.svg" className='mx-3' width={10} height={10} />
            <div className="flex items-center    group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">          
              <Msg className="mr-2" />
             <div className="safe-darky">
             Talk to Safekeep
             </div>
            </div>
          </div>
          </DropdownMenu.Item> 

           <DropdownMenu.Item className="  leading-none rounded-[3px]  relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
          <div className='flex py-3'>           
            <Image src="/reply.svg" className='mx-3' width={10} height={10} />
            <div className="flex items-center    group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">          
              <ReportBug className="mr-2" />
             <div className="safe-darky">
             Report  Bug
             </div>
            </div>
          </div>
          </DropdownMenu.Item>  

          <DropdownMenu.Item className=" leading-none rounded-[3px]   relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
          <div className='flex py-3  '>           
            <Image src="/reply.svg" className='mx-3' width={10} height={10} />
            <div className="flex items-center   group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">          
              <HelpComm className="mr-2" />
             <div className="safe-darky">
             Help Community
             </div>
            </div>
          </div>
          </DropdownMenu.Item> 

            <DropdownMenu.Item className="  leading-nonerounded-[3px]  relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
          
          <Link href="/dashboard/support/request-feature">
          <div className='flex py-3 ' >  
               
            <Image src="/reply.svg" className='mx-3' width={10} height={10} />
            <div className="flex items-center   group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">          
              <Feat className="mr-2" />
             <div className="safe-darky">
             Request Feature
             </div>
            </div>
          
          </div>
          </Link>  
      
          </DropdownMenu.Item> 
          <DropdownMenu.Item className="  leading-none rounded-[3px]   relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
          <div className='flex py-3'>           
            <Image src="/reply.svg" className='mx-3' width={10} height={10} />
            <div className="flex items-center   group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">          
              <NewFeat className="mr-2" />
             <div className="safe-darky">
             What is New
             </div>
            </div>
          </div>
          </DropdownMenu.Item> 

  </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SupportDropdownMenu;
