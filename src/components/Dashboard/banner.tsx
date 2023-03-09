import Profile from '@images/Dashboard/profile.svg';
import Plus from '@images/Dashboard/plus.svg';
import MultiSigProfile from '@images/Dashboard/multisig-profile.svg';
import Copy from '@images/transfer/copy.svg';
import Eye from '@images/Dashboard/eye.svg';
import DirectUp from '@images/Dashboard/direct-up.svg';
import DirectDown from '@images/Dashboard/direct-down.svg';
import ArrowDown from '@images/Dashboard/arrow-down.svg';
import ArrowUp from '@images/Dashboard/arrow-up.svg';
import EthereumIcon from '@images/transfer/ethereum.svg';
import RoundVector from '@images/Dashboard/round-vector.png';
import DashboardImageOne from '@images/Dashboard/dashboard-image-one.png';
import Image from 'next/image';

const Banner = ({setSection, setTransferType}) => {

    const handleTransfer = (transferType: string) => {
        setSection('transfer')
        setTransferType(transferType)
    }

  return (
    <div className="w-full">
        <div className="lg:hidden flex mb-8 gap-4 w-full ">
            <Profile />
            <div className="flex flex-col">
                <div className="bg-safekeep-white rounded-[23px] text-[#0150B4] py-1 px-2 font-dmSans font-medium text-sm -tracking-wide">
                    eth:0x45E7b6...8F497410
                </div>
                <p className="font-dmSans mt-1 text-[#B5B5B5] text-xs">My Coinbase</p>
            </div>
            <button className="flex items-start ml-6">
                <Copy style={{color: '#B5B5B5'}} />
            </button>
            <button className="flex items-start">
                <Eye style={{color: '#B5B5B5'}} />
            </button>
        </div>
        <div className="w-full p-8 relative bg-safekeep-white rounded-lg">
        <div className="hidden lg:flex gap-5 justify-between">
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
            <div className='px-2 py-1 flex gap-2 h-6 items-center bg-[#E6F1FF] rounded-lg'>
                <EthereumIcon className="w-5 h-5" />
                <p className='text-xs text-safekeep-blue-700'>Ethereum</p>
            </div>
        </div>
        <div className="lg:mt-14 flex flex-col lg:flex-row gap-5 lg:gap-11">
            <div className="flex flex-col gap-4 border-b lg:border-b-0 pb-2 lg:pb-0 lg:border-r border-solid border-safekeep-blue-100 w-full lg:max-w-[250px]">
                <div className="flex flex-col items-center w-full lg:max-w-[205px]">
                    <div className="flex gap-5 font-polySansTrial w-full justify-between lg:justify-start items-center">
                        <p className="text-sm text-safe-dark-400">Vault Asset</p>
                        <div className="flex gap-0.5 items-center">
                            <DirectUp />
                            <p className="text-[10px] text-safe-green-700 leading-4">+1.2% (Ξ0.000001)</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1.5'>
                    <p className="text-[#8ABEFE] text-2xl font-dmSans leading-8">Ξ</p>
                    <p className="text-safe-dark-main leading-9 text-3xl font-paralucentMedium">10.3274 ETH</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 border-b pb-2 lg:pb-0 lg:border-b-0  lg:border-r border-solid border-safekeep-blue-100 w-full lg:max-w-[267px]">
                <div className="flex flex-col items-center w-full lg:max-w-[222px]">
                    <div className="flex gap-5 font-polySansTrial w-full justify-between lg:justify-start items-center">
                        <p className="text-sm text-safe-dark-400">Inheritor Asset</p>
                        <div className="flex gap-0.5 items-center">
                            <DirectDown />
                            <p className="text-[10px] text-[#FF0000] leading-4">-1.2%(Ξ0.000001)</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1.5'>
                    <p className="text-[#8ABEFE] text-2xl font-dmSans leading-8">Ξ</p>
                    <p className="text-safe-dark-main leading-9 text-3xl font-paralucentMedium">0.3274 ETH</p>
                </div>
            </div>
            <div className="gap-3 flex w-full flex-col">
                <p className="text-sm text-safe-dark-400 font-polySansTrial">Multisignatories</p>
                <div className="flex gap-0">
                    <MultiSigProfile />
                    <MultiSigProfile className="-ml-4" />
                    <MultiSigProfile className="-ml-4" />
                    <button className="-ml-4">
                        <Plus />
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-9 flex flex-col lg:flex-row gap-4">
            <button onClick={(e) => handleTransfer("deposit")} className="flex w-full lg:max-w-[197px] gap-2.5 items-center rounded-lg bg-[#0123F7] justify-center p-4 text-safekeep-white font-paralucentMedium text-sm">
                <ArrowDown />
                <p>Deposit Token</p>
            </button>
            <button onClick={(e) => handleTransfer("withdraw")} className="flex w-full lg:max-w-[197px] gap-2.5 rounded-lg border border-solid border-[#0123F7] items-center justify-center p-4 text-safekeep-blue font-paralucentMedium text-sm">
                <ArrowUp className="text-safekeep-blue" />
                <p>Withdraw</p>
            </button>

        </div>
        <Image src={DashboardImageOne} alt="background" className="hidden lg:flex absolute z-50 right-0 bottom-0" />
        <Image src={RoundVector} alt="background" className="hidden lg:flex absolute right-0 bottom-0" />
    </div>
    </div>
  )
}

export default Banner;