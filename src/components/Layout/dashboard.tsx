import { useState } from 'react';
import Logo from '@images/Header/safekeepLogo.svg';
import navs, { Dashfooter, newFeature } from '@config/navs';
import GasStation from '@images/Dashboard/gas-station.svg';
import { IChild } from 'interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ConnectWallet from '@components/connectWallet';
import ConnectButton from '@components/ConnectButton';
import { useAccount } from 'wagmi';
import { truncateWalletAddress } from '@utils/index';
import Settings from '@images/Dashboard/settings.svg';
import Support from '@images/Dashboard/support.svg';
import Logout from '@images/Dashboard/logout.svg';
import SupportDropdownMenu from '@components/Dashboard/support/SupportMenu';

interface ILink {
  id: number;
  title: string;
  icon: string;
  href?: string;
  aLink?:boolean
}

export const DashOtherLinks = ({ ...data }: ILink & { soon?: boolean }) => {
  const { title, soon = false, icon: Icon , aLink=true} = data;
  return (
    <>
    {
      aLink ? <>    <Link href={data.href ?? '/'}>
      <div className="flex justify-between mb-6">
        <div className="flex">
          {/* @ts-ignore */}
          <Icon className="mr-2" />
          <span className="text-safekeep-gray-200 font-bold font-dmSans" >{title}</span>
        </div>
        {!!soon && (
          <div>
            <span className="p-1 px-2 text-xs border rounded-full text-safe-green-700 border-safe-green-700">SOON</span>
          </div>
        )}
      </div>
    </Link></> :<>  <div className="flex justify-between mb-6">
        <div className="flex">
          {/* @ts-ignore */}
          <Icon className="mr-2" />
          <span className="text-safekeep-gray-200 font-bold font-dmSans" >{title}</span>
        </div>
        {!!soon && (
          <div>
            <span className="p-1 px-2 text-xs border rounded-full text-safe-green-700 border-safe-green-700">SOON</span>
          </div>
        )}
      </div>
    
    
    </>
    }
 
    </>

  );
};
const NavLink = ({ ...data }: ILink) => {
  const Icon = data.icon;
  const router = useRouter();
  // const isActive = data.href === router.pathname;
  const isActive = false;
  const { href } = data;
  return (
    <Link
      href={href}
      className={`${isActive ? 'bg-safekeep-blue text-safekeep-white ' : ''} flex  items-center  p-2 rounded-md `}
    >
      <div className="mr-2">
        <div className="mr-2">
          <Icon />
        </div>
      </div>
      <div>
        <span className={isActive ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#001873] to-[#011A91] '}>
          {data.title}
        </span>
      </div>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      {navs.map((item) => (
        <div className="mb-6 safekeep-darky-blue " key={item.id}>
          <NavLink {...item} />
        </div>
      ))}
    </>
  );
};
const DashboardLayout = ({ children }: IChild) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { address } = useAccount();

  const toggleOpen = () => {
    setSidebarOpen((state) => !state);
  };
  const { pathname } = useRouter();
  
  return (
    <>
      <div className="relative grid-cols-12 lg:grid ">
        <div
          className={`h-screen col-span-3 p-4 pt-10 pl-12 overflow-scroll overflow-x-hidden overflow-y-scroll pr-7 font-dmSans   bg-safekeep-white lg:relative hidden w-full lg:block`}
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-6 ">
              <div className="">
                <Logo className="h-12" />
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="mb-12">
                <NavLinks />
              </div>
              <div className="">
                <div className="mb-6 font-medium tracking-widest uppercase">new features</div>
                {newFeature.map((item) => (
                  <div key={item.id}>
                    <DashOtherLinks {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <DashOtherLinks href="/dashboard/settings" id={0} title="Settings" icon={Settings} />         
            <SupportDropdownMenu />
            <DashOtherLinks href={pathname} id={2} title="Logout" icon={Logout} />

            {/* {Dashfooter.map(item => (
              <div key={item.id}>               
                <DashOtherLinks {...item} />
              </div>
            ))} */}
          </div>

          <div>
            <div className="flex items-center justify-between text-safe-dark-main font-bold ">
              <div className="text-[10px]">Privacy Policy</div>
              <div className="text-[10px]">Terms of Service</div>
              <div>
                <div className="flex items-center">
                  <GasStation className="mr-2" />
                  <span className=" text-xs">19.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9 ">
          <div className="flex items-center justify-between p-4 lg:hidden">
            <div>
              <div className="">
                <img src="safekeep-dark-bg.svg" alt="logo" className="w-2/3" />
              </div>
            </div>
            <div className="flex">
              <img className="scale-125" src="/search-icon.svg" alt="search icon" />
              <img className="ml-4 scale-125" src="/wallet-header.svg" alt="search icon" />
            </div>
          </div>
          <div className="justify-between hidden grid-cols-10 p-3 lg:grid header-background">
            <div className="col-span-2"></div>
            <div className="col-span-4 ">
              <div className="relative hidden lg:flex ">
                <input
                  placeholder="Search Assets,Transactions, Tokens..."
                  className="w-full p-2 border rounded-md bg-safekeep-white placeholder:text-safekeep-gray-400 "
                />
                <img
                  className="absolute scale-110 -translate-y-1/2 right-4 top-1/2"
                  src="/search-icon.svg"
                  alt="search icon"
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-end w-full">
                <div className="flex items-center">
                  <div>
                    <img className="mr-4" src="/ethereum-header.svg" alt="base-token-logo" />
                  </div>
                  <div>
                    <img className="mr-4" src="/profile-header.svg" alt="base-token-logo" />
                  </div>
                  <div className="flex items-center p-2 px-3 mx-4 rounded-full bg-safekeep-blue-100">
                    <ConnectButton>
                      <div className="flex items-center">
                        <div>
                          <img className="mr-2" src="/wallet-header.svg" alt="base-token-logo" />
                        </div>
                        <span className="text-sm font-medium text-black">{truncateWalletAddress(address, 5)}</span>
                      </div>
                    </ConnectButton>
                  </div>

                  <svg
                    onClick={toggleOpen}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="flex dark:text-white lg:hidden"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
                  </svg>

                  <div className="hidden lg:flex">
                    <img src="toggle-light.svg" alt="toggle-light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[calc(100vh-70px)] pb-32 border bg-safekeep-blue-100">
            <div className="flex justify-center px-3 mt-10 ">{children}</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full  p-8 py-4 border bg-safekeep-white border-3 text-safekeep-gray-300 lg:hidden">
        <div className="flex justify-between">
          <div>Overview</div>
          <div>SafeVault</div>
          <div>Settings</div>
          <div>More</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
