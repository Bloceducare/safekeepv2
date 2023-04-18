import { useState } from 'react';
import Logo from '@images/Header/safekeepLogo.svg';
import SmallLogo from 'assets/images/safekeep-logo-small.svg';
import WalletLogo from 'assets/images/wallet-3.svg';
import navs, { Dashfooter, newFeature, smallScreenNavs, safevaultNavs } from '@config/navs';
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
import SideArrow from 'assets/images/side-arrow.svg';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface ILink {
  id: number;
  title: string;
  icon: string;
  href?: string;
  aLink?: boolean;
  marginBottom?: boolean;
}

export const DashOtherLinks = ({ ...data }: ILink & { soon?: boolean }) => {
  const { title, soon = false, icon: Icon, aLink = true, marginBottom = true } = data;
  const router = useRouter();
  const isActive = data.href === router.pathname;
  // const isActive = false;
  console.log(isActive, data.href, router.pathname);
  const { href } = data;
  return (
    <>
      {aLink ? (
        <>
          {' '}
          <Link
            href={data.href ?? '/'}
            className={` hover:bg-safekeep-hover hover:text-safekeep-gray-200 hover:font-bold text-safekeep-gray-200  rounded-lg`}
          >
            <div
              className={`flex justify-between items-center px-2 ${marginBottom ? 'mb-4' : 'mb-0 py-3'} ${
                isActive ? 'bg-safekeep-blue text-safekeep-white ' : 'text-safekeep-gray-200'
              } rounded-lg`}
            >
              <div className="flex flex-col items-center text-red-500 lg:flex-row">
                <div className="lg:mr-2 text-red-500 z-50 h-6 w-6">
                  <Icon />
                </div>
                <span className=" font-dmSans">{title}</span>
              </div>
              {!!soon && (
                <div>
                  <span className="p-1 px-2 text-xs border rounded-full text-safe-green-700 border-safe-green-700">
                    SOON
                  </span>
                </div>
              )}
            </div>
          </Link>
        </>
      ) : (
        <>
          {' '}
          <div className="flex justify-between items-center py-2.5 px-2">
            <div className="flex items-center">
              {/* @ts-ignore */}
              <Icon className="mr-2" />
              <span className="text-safekeep-gray-200 font-dmSans">{title}</span>
            </div>
            {!!soon && (
              <div>
                <span className="p-1 px-2 text-xs border rounded-full text-safe-green-700 border-safe-green-700">
                  SOON
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
const NavLink = ({ ...data }: ILink) => {
  const Icon = data.icon;
  const router = useRouter();
  const isActive = data.href === router.pathname;
  // const isActive = false;
  const { href } = data;
  return (
    <Link
      href={href}
      className={`${
        isActive ? 'bg-safekeep-blue text-safekeep-white ' : ''
      } flex  items-center  px-2 py-2.5 rounded-md `}
    >
      <div className="flex">
        <div className="mr-2">
          <div className="mr-2">
            <Icon />
          </div>
        </div>
        <div>
          <span
            className={isActive ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#001873] to-[#011A91] '}
          >
            {data.title}
          </span>
        </div>
      </div>
    </Link>
  );
};

const NavLinks = () => {
  const [openSafevault, setOpenSafevault] = useState(false);
  return (
    <>
      {navs.map((item) => {
        if (item.title === 'Safevault') {
          const Icon = item.icon;
          const router = useRouter();
          const isActive = item.href === router.pathname;
          return (
            <div
              className={`mb-4 flex gap-1 justify-between items-center w-full pr-2 safekeep-darky-blue hover:bg-safekeep-hover hover:text-safekeep-gray-200 rounded-lg ${
                isActive ? 'bg-safekeep-blue text-safekeep-white ' : ''
              } flex  items-center  px-2 py-2.5 rounded-md cursor-pointer`}
              key={item.id}
              onClick={(e) => setOpenSafevault(!openSafevault)}
            >
              <Link href={item.href} className="flex">
                <div className="mr-2">
                  <div className="mr-2">
                    <Icon />
                  </div>
                </div>
                <div>
                  <span
                    className={
                      isActive ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#001873] to-[#011A91] '
                    }
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
              <ChevronDownIcon
                className={`${openSafevault ? 'rotate-180' : ''}`}
                onClick={(e) => setOpenSafevault(!openSafevault)}
              ></ChevronDownIcon>
            </div>
          );
        } else {
          return (
            <div className="mb-4 safekeep-darky-blue hover:bg-safekeep-hover rounded-lg" key={item.id}>
              <NavLink {...item} />
            </div>
          );
        }
      })}
      <div className={`flex flex-col gap-2 transition-all duration-100 ${openSafevault ? 'flex' : 'hidden'}`}>
        {safevaultNavs.map((item) => (
          <div className="safekeep-darky-blue hover:bg-safekeep-hover rounded-lg flex items-center" key={item.id}>
            <SafevaultSvg item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

const SafevaultSvg = ({ item }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <SideArrow />
        <div className="max-w-[237px] w-full ml-2.5">
          <DashOtherLinks {...item} marginBottom={false} />
        </div>
      </div>
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
      <div className="relative">
        <div className="bg-safekeep-white h-[100vh] col-span-3 p-4 pt-10 pl-12 overflow-auto overflow-x-hidden overflow-y-scroll pr-7 font-dmSans lg:fixed lg:max-w-[350px] lg:w-full hidden lg:flex lg:flex-col lg:justify-between">
          <div className={`lg:flex lg:flex-col lg:justify-between lg:max-h-[1100px]`}>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6 ">
                <div className="">
                  <Logo className="h-12" />
                </div>
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <NavLinks />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <div className="">
                  <div className="mb-6 font-medium tracking-widest uppercase">new features</div>
                  {newFeature.map((item) => (
                    <div key={item.id}>
                      <DashOtherLinks {...item} />
                    </div>
                  ))}
                </div>
                <DashOtherLinks href="/dashboard/settings" id={0} title="Settings" icon={Settings} />
                <SupportDropdownMenu />
                <div className="hover:bg-safekeep-hover rounded-lg">
                  <DashOtherLinks href={pathname} aLink={false} id={2} title="Logout" icon={Logout} />
                </div>

                {/* {Dashfooter.map(item => (
              <div key={item.id}>               
                <DashOtherLinks {...item} />
              </div>
            ))} */}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-safe-dark-main font-dmSans ">
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
          </div>
        </div>

        <div className=" w-full lg:pl-[350px] ">
          <div className="flex items-center justify-between p-4 lg:hidden">
            <div>
              <div className="">
                <SmallLogo />
              </div>
            </div>
            <div className="flex">
              <img className="scale-125" src="/search-icon.svg" alt="search icon" />
              <WalletLogo className="ml-4 scale-125" />
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

      <div className="fixed bottom-0 w-full  p-8 py-4 border z-30 bg-safekeep-white border-3 text-safekeep-gray-300 lg:hidden">
        <div className="flex justify-between">
          {smallScreenNavs.map((item) => (
            <div key={item.id} className="text-[#929292] z-50">
              <DashOtherLinks {...item} />
            </div>
          ))}
          <DashOtherLinks href="/dashboard/settings" id={3} title="Settings" icon={Settings} />
          <DashOtherLinks href="/dashboard/settings" id={4} title="More" icon={Settings} />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
