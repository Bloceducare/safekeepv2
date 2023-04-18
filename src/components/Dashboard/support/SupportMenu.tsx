import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AngleDown from 'assets/images/Faq/angle-down.svg';
import Image from '../../primitives/image';
import Msg from 'assets/images/support/message-text.svg';
import ReportBug from 'assets/images/support/report-bug.svg';
import HelpComm from 'assets/images/support/help-comm.svg';
import Feat from 'assets/images/support/feat.svg';
import NewFeat from 'assets/images/support/new.svg';
import Support from '@images/Dashboard/support.svg';
import { DashOtherLinks } from '../../Layout/dashboard';
import Link from 'next/link';

const SupportDropdownMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const { events } = useRouter();
  const toggleMenu = () => setOpen(!isOpen);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    events.on('routeChangeStart', closeMenu);
    return () => events.off('routeChangeStart', closeMenu);
  }, [events]);

  const handleStopProgation = (e) => {
    console.log('trying to stop Event');
    e.stopPropagation();
  };
  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-safekeep-hover rounded-lg pr-2"
        onClick={(e) => {
          console.log('I an cakkkedl');
          e.stopPropagation();
          toggleMenu();
        }}
      >
        <div>
          <DashOtherLinks aLink={false} id={0} title="Support" icon={Support} />
        </div>

        <div>
          <DropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
            <DropdownMenu.Trigger asChild>
              <button
                className=" inline-flex items-center justify-center    outline-none  "
                aria-label="Customise options"
              >
                <AngleDown className={`${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[260px] py-3 bg-safekeep-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade "
                sideOffset={5}
              >
                <DropdownMenu.Item
                  disabled
                  className=" leading-none  rounded-[3px] px-5 relative select-none outline-none data-[disabled]:text-safekeep-blue-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1"
                >
                  <div className="flex py-3" onClick={handleStopProgation}>
                    <Image src="/reply.svg" className="mx-3" width={10} height={10} />
                    <div className="flex items-center    group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                      <Msg className="mr-2" />
                      <div className="safe-darky">Talk to Safekeep</div>
                    </div>
                  </div>
                </DropdownMenu.Item>

                <DropdownMenu.Item className="  leading-none rounded-[3px] px-5  relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
                  <Link href="/dashboard/support/report-a-bug">
                    <div className="flex py-3">
                      <Image src="/reply.svg" className="mx-3" width={10} height={10} />
                      <div className="flex items-center    group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                        <ReportBug className="mr-2" />
                        <div className="safe-darky">Report Bug</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  disabled
                  className=" leading-none rounded-[3px]  px-5 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1"
                >
                  <div className="flex py-3  ">
                    <Image src="/reply.svg" className="mx-3" width={10} height={10} />
                    <div className="flex items-center   group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                      <HelpComm className="mr-2" />
                      <div className="safe-darky">Help Community</div>
                    </div>
                  </div>
                </DropdownMenu.Item>

                <DropdownMenu.Item className=" px-5 leading-nonerounded-[3px]  relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1">
                  <Link href="/dashboard/support/request-feature">
                    <div className="flex py-3 ">
                      <Image src="/reply.svg" className="mx-3" width={10} height={10} />
                      <div className="flex items-center   group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                        <Feat className="mr-2" />
                        <div className="safe-darky">Request Feature</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  disabled
                  className=" px-5 leading-none rounded-[3px]   relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-safekeep-blue-400 data-[highlighted]:text-violet1"
                >
                  <div className="flex py-3 justify-between items-center">
                    <div className="flex">
                      <Image src="/reply.svg" className="mx-3" width={10} height={10} />
                      <div className="flex items-center   group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                        <NewFeat className="mr-2" />
                        <div className="safe-darky">What is New</div>
                      </div>
                    </div>
                    <div className="bg-safe-green-700 mr-3 w-2 h-2 rounded-full"></div>
                  </div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  );
};

export default SupportDropdownMenu;
