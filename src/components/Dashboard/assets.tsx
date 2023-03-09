import Bezier from '@images/Dashboard/bezier.svg';
import EthereumIcon from '@images/Dashboard/ethereum.svg';
import TetherIcon from '@images/transfer/tether.svg';
import DashboardImageTwo from '@images/Dashboard/dashboard-image-two.png';
import AvatarGroup from '@images/Dashboard/avatar-group.png';
import InheritorsLogo from '@images/Dashboard/inheritors.svg';
import Image from 'next/image';

const Assets = ({setSection}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 lg:justify-between">
        <div className="w-full order-1 lg:max-w-[33%] bg-[#FFFFFF] rounded-lg py-6 px-5">
            <div className="flex justify-between">
                <p className='font-paralucentMedium text-lg leading-5 text-[#333D8A]'>My Assets</p>
                <button onClick={(e)=> setSection('vaultProfile')} className="rounded-lg py-2 px-4 bg-safekeep-blue-100 text-sm text-[#0123F7] tracking-wide">
                    View All
                </button>
            </div>
            <div className="w-full mt-5 gap-4 flex flex-col font-dmSans">
                <div className="w-full flex justify-between font-dmSans text-sm leading-5 text-safe-dark-400">
                    <p>Token</p>
                    <p>Value</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className='flex gap-2 items-center'>
                        <EthereumIcon className="text-[#627EEA] h-8 w-8" />
                        <p className="font-medium text-sm leading-4">Ethereum</p>
                    </div>
                    <div className="font-bold text-base leading-5">10.3274 ETH</div>
                </div>
                  <div className="flex justify-between items-center">
                    <div className='flex gap-2 items-center'>
                        <TetherIcon className="text-[#627EEA] h-8 w-8" />
                        <p className="font-medium text-sm leading-4">Tether</p>
                    </div>
                    <div className="font-bold text-base leading-5">10.3274 USDT</div>
                </div>
            </div>
        </div>
        <div className="w-full order-3 lg:order-2 lg:max-w-[33%] bg-[#FFFFFF] relative rounded-lg p-4 lg:p-[30px]">
            <div className='flex flex-col z-20 gap-20 justify-between w-full'>
                <div className="w-full gap-4 flex flex-col">
                    <div className="py-2 px-4 z-20 bg-[#FFFFFF] w-full max-w-[79px] rounded-[30px] font-light text-[#0123F7] text-[11px] leading-[11px] font-polySansTrial">
                        Update⚡️
                    </div>
                    <p className='z-20 w-full max-w-[224px] font-paralucentMedium text-2xl leading-7 text-safe-dark-main'>Send, Swap and Bridge tokens coming soon to safekeep!</p>
                </div>
                <button className="z-20 font-paralucentMedium w-full max-w-[197px] py-2.5 px-8 rounded-lg bg-safekeep-blue text-safekeep-white text-sm flex items-center gap-2">
                    <Bezier />
                   <p>Coming Soon</p>
                </button>
            </div>
            <Image src={DashboardImageTwo} alt="background" className="absolute top-0 left-0 w-full h-full" />
        </div>
         <div className="w-full order-2 lg:order-3 flex flex-col justify-between lg:max-w-[33%] bg-[#FFFFFF] relative rounded-lg p-5">
           <div>
             <div className='bg-[#F2F2F2] rounded-lg p-8 flex items-center justify-center'>
                <Image src={AvatarGroup} alt="avatar" />
            </div>
            <div className="gap-4 flex items-center mt-3 font-paralucentMedium text-xl leading-5 text-[#333D8A]">
                <InheritorsLogo />
                <p>Inheritors</p>
            </div>
            <p className="mt-3 font-dmSans text-sm leading-5 tracking-widest">Allocate a percentage of your token to wallets as inheritors.</p>
           </div>
            <button className=" font-paralucentMedium w-full py-2.5 px-8 rounded-lg justify-center bg-safekeep-blue text-safekeep-white text-sm flex items-center gap-2">
                Explore Safevault
            </button>
        </div>
    </div>
  )
}

export default Assets;