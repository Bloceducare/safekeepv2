import Select, {SelectOption} from '@components/primitives/select';
import TetherIcon from '@images/transfer/tether.svg';
import Input from '@components/primitives/input';
import QrCodeIcon from '@images/transfer/QrCode.svg';
import EthereumIcon from '@images/transfer/ethereum.svg';

const StepOne = () => {
  return (
    <div className="w-full">
        <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-2">
        <div className='w-full lg:max-w-[145px]'>
            <p className="font-dmSans text-[10px] leading-3 text-safekeep-gray-600 pb-1">Token To Withdraw</p>
            <div className=' z-50 py-3.5 h-[60px] px-2 bg-[#F8F8F8] rounded-lg w-full'>
            <Select name="assetType" className="flex items-center">
            <SelectOption value="usdt">
                <div className='flex gap-2 items-center'>
                <TetherIcon></TetherIcon>
                <p>USDT</p>
                </div>
            </SelectOption>
            <SelectOption value="usdc">
                <div className='flex gap-2 items-center'>
                <TetherIcon></TetherIcon>
                <p>USDC</p>
                </div>
            </SelectOption>
            </Select>
        </div>
        </div>
        <div className='w-full lg:max-w-[379px]'>
            <p className="font-dmSans text-[10px] leading-3 text-safekeep-gray-600 pb-1">Amount to Withdraw</p>
            <Input name="amount" placeholder="Amount to Withdraw" type='number' required className="w-full h-[60px] py-3.5 px-2 bg-[#F8F8F8] rounded-[3px] border-none focus:border-none focus:outline-none" />
        </div>
        </div>
        <div className="mt-5">
            <p className="font-dmSans text-[10px] leading-3 text-safekeep-gray-600 pb-1">Recipient</p>
            <div className='bg-[#F8F8F8] h-[60px] flex items-center pr-4'>
            <Input name="address" showError={false} placeholder="paste wallet address here" required className="w-full h-[60px] py-3.5 px-2 bg-[#F8F8F8] rounded-none focus:bg-none border-none focus:border-none focus:outline-none" />
            <button>
                <QrCodeIcon />
            </button>
            </div>
        </div>
        <div className='flex gap-4 flex-col w-full mt-7'>
            <div className='w-full flex justify-between'>
                <p className='text-sm font-dmSans text-[#3A4662]'>Network</p>
                <div className='px-2 py-1 flex gap-2 items-center bg-[#E6F1FF] rounded-lg'>
                <EthereumIcon />
                <p className='text-xs text-safekeep-blue-700'>Ethereum</p>
                </div>
            </div>
            <div className='w-full flex justify-between'>
                <p className='text-sm font-dmSans text-[#3A4662]'>Balance:</p>
                <p className='text-base font-dmSans font-bold'>10.3274 USDT</p>
            </div>
            <div className='w-full flex justify-between'>
                <p className='text-sm font-dmSans text-[#3A4662]'>Network Fee:</p>
                <p className='text-base font-dmSans font-bold'>Ξ0.000042</p>
            </div>
        </div>
        <button type='submit' className="mt-5 w-full rounded-lg py-4 bg-safekeep-blue flex items-center justify-center font-paralucentMedium text-xs text-[#FFFFFF]">
        Next
        </button>
    </div>
  )
}

export default StepOne;