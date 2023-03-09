import ChevronLeft from '@images/transfer/arrow-left.svg';
import Profile from '@images/Dashboard/profile.svg';
import Eye from '@images/Dashboard/eye.svg';
import Copy from '@images/transfer/copy.svg';
import Ethereum from '@images/vault/ethereum.svg';
import TetherIcon from '@images/transfer/tether.svg';
import EthereumIcon from '@images/transfer/ethereum.svg';
import RoundVector from '@images/vault/vector.png';
import VaultImageOne from '@images/vault/bg-image.png';
import Image from 'next/image';

const VaultProfile = ({setSection}) => {
  return (
    <div className="w-full">
       <div className="flex flex-col gap-4 w-full max-w-[1058px] mx-auto">
            <div className="pb-6 flex gap-4 items-center">
                <button onClick={(e)=>setSection('dashboard')} className='bg-safekeep-white rounded flex items-center py-2 px-2.5'>
                    <ChevronLeft />
                </button>
                <p className='font-paralucentMedium text-xl leading-6 text-[#333D8A]'>Vault Profile</p>
            </div>
            <div className="w-full p-8 relative bg-safekeep-white rounded-lg">
                <div className=" flex gap-5 justify-between">
                    <div className="flex gap-4">
                        <Profile />
                        <div className="flex flex-col">
                            <div className="bg-safekeep-blue-100 rounded-[23px] text-[#0150B4] py-1 px-2 font-dmSans font-medium text-sm -tracking-wide">
                                eth:0x45E7b6...8F497410
                            </div>
                            <p className="font-dmSans mt-1 text-[#B5B5B5] text-xs">My Coinbase</p>
                        </div>
                        <button className="flex items-start">
                            <Copy style={{color: '#B5B5B5'}} />
                        </button>
                        <button className="flex items-start">
                            <Eye style={{color: '#B5B5B5'}} />
                        </button>
                    </div>
                    <div className='hidden lg:flex px-2 py-1 z-50 gap-2 h-6 items-center bg-[#E6F1FF] rounded-lg'>
                        <EthereumIcon className="w-5 h-5" />
                        <p className='text-xs text-safekeep-blue-700'>Ethereum</p>
                    </div>
                </div>
                <div className="mt-12 w-full flex flex-col lg:flex-row gap-2">
                    <button className="hidden lg:flex w-full lg:max-w-[185px] items-center rounded-lg bg-[#0123F7] justify-center py-2.5 px-4 text-safekeep-white font-paralucentMedium text-sm">
                        Switch Vaults
                    </button>
                    <button className="flex w-full lg:max-w-[185px] rounded-lg lg:border border-solid bg-[#0123F7] border-[0px] lg:bg-transparent border-[#0123F7] items-center justify-center py-2.5 px-4 text-safekeep-white lg:text-safekeep-blue font-paralucentMedium text-sm">
                        Disconnect wallet
                    </button>

                </div>
            <Image src={VaultImageOne} alt="background" className="hidden lg:flex absolute z-50 right-0 bottom-0" />
            <Image src={RoundVector} alt="background" className="hidden lg:flex absolute right-0 bottom-0" />
            </div>
            <div className="w-full">
                  <div className="w-full bg-[#FFFFFF] rounded-lg py-6 px-5">
                    <div className="flex justify-between">
                        <p className='font-paralucentMedium text-lg leading-5 text-[#333D8A]'>My Assets</p>
                    </div>
                    <div className="w-full mt-5 gap-4 flex flex-col font-dmSans">
                        <div className="w-full flex justify-between font-dmSans text-sm leading-5 text-safe-dark-400">
                            <p>Token</p>
                            <p>Value</p>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-[#DAE5E8] border-solid">
                            <div className='flex gap-2 items-center'>
                                <Ethereum className="text-[#627EEA] h-8 w-8" />
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
            </div>
       </div>
    </div>
  )
}

export default VaultProfile;