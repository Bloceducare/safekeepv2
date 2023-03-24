import {useState} from "react";
import Select, {SelectOption} from "@components/primitives/select";
import TetherIcon from '@images/transfer/tether.svg';
import EthereumIcon from '@images/transfer/ethereum.svg';
import FormProvider from "@components/primitives/form-provider";
import TransferIcon from "@images/transfer/transfer-arrow.svg";
import DepositModal from "./deposit-modal";
import Input from "@components/primitives/input";

const Deposit = () => {
   const [showModal, setShowModal] = useState(false);
   const handleSubmit = (e)=>{
    setShowModal(true);
    console.log(e)
  }
  return (
    <div className="w-full">
      <div className="w-full mx-auto flex flex-col">
        <div className='w-full'>
          <FormProvider onSubmit={handleSubmit}>
            <div className="w-full flex flex-col lg:flex-row gap-4">
              {/* <div className="w-full lg:max-w-1/2 p-5 h-auto bg-safekeep-white rounded-lg">
                <p className="font-dmSans text-xs leading-5 text-safekeep-gray-600 pb-1">You are withdrawing</p>
                <div className="mt-6 bg-safekeep-hover p-2 rounded-lg">
                  <Select name="assetType" className="flex items-center bg-safekeep-hover border-none focus:border-none ">
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
                <div className='flex gap-4 flex-col w-full mt-7'>
                    <div className='w-full flex justify-between'>
                        <p className='text-sm font-dmSans text-[#3A4662]'>USDT Balance:</p>
                        <p className='text-base font-dmSans font-bold'>10.3274 USDT</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='text-sm font-dmSans text-[#3A4662]'>Network</p>
                        <div className='px-2 py-1 flex gap-2 items-center bg-[#E6F1FF] rounded-lg'>
                        <EthereumIcon />
                        <p className='text-xs text-safekeep-blue-700'>Ethereum</p>
                        </div>
                    </div>
                </div>
                <button type='submit' className="mt-5 w-full rounded-lg py-4 bg-safekeep-blue flex items-center justify-center font-paralucentMedium text-xs text-[#FFFFFF]">
                  Next
                </button>
              </div> */}
               <div className="w-full lg:max-w-[542px] p-5 h-auto bg-safekeep-white rounded-lg">
                 <p className="font-dmSans text-base leading-5 text-[#333D8A]">Deposit from wallet</p>
                 <div className="w-full relative flex mt-6 bg-[#FFFFFF] text-sm leading-4 font-medium border border-solid border-safekeep-blue-100 rounded">
                    <div className="w-full max-w-1/2 py-4 bg-safekeep-darky-blue flex items-center justify-center">
                      <p className="text-safekeep-white">
                        From Wallet
                      </p>
                    </div>
                    <div className="w-full max-w-1/2 py-4 text-safe-dark-main flex items-center justify-center">
                      <p>
                        To Vault
                      </p>
                    </div>
                    <div className='absolute z-50 left-1/2 top-0 bottom-0 flex items-center -ml-3'>
                    <TransferIcon />
                    </div>
                 </div>
                 <div className="w-full py-2 mt-6 px-4 bg-safekeep-hover">
                   <p className="font-dmSans text-xs leading-5 text-safekeep-gray-300 pb-1">Token to deposit</p>
                   <div className='w-full mt-4 flex flex-row items-center justify-between'>
                    <div className="w-full max-w-[151px] bg-safekeep-blue-100 rounded">
                      <Select name="assetType" className="flex items-center bg-safekeep-blue-100 rounded p-1 border-none focus:border-none ">
                        <SelectOption value="usdt">
                            <div className='flex gap-2 items-center text-sm'>
                            <TetherIcon></TetherIcon>
                            <p>TetherUSDT</p>
                            </div>
                        </SelectOption>
                        <SelectOption value="usdc">
                            <div className='flex gap-2 items-center text-sm'>
                            <TetherIcon></TetherIcon>
                            <p>USDC</p>
                            </div>
                        </SelectOption>
                      </Select>
                    </div>
                    <div className='w-full max-w-[151px]'>
                      <Input showError={false} name="amount" placeholder="Amount" className="h-full w-full max-w-[151px] bg-transparent hover:border-none focus:border-none  border-none font-dmSans text-2xl leading-6"></Input>
                    </div>
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
                          <p className='text-sm font-dmSans text-[#3A4662]'>Wallet Balance:</p>
                          <p className='text-base font-dmSans font-bold'>10.3274 USDT</p>
                      </div>
                      <div className='w-full flex justify-between'>
                          <p className='text-sm font-dmSans text-[#3A4662]'>Network Fee:</p>
                          <p className='text-base font-dmSans font-bold'>Ξ0.000042</p>
                      </div>
                  </div>
                  <button type='submit' className="mt-5 w-full rounded-lg py-4 bg-safekeep-blue flex items-center justify-center font-paralucentMedium text-xs text-safekeep-white">
                    Deposit
                  </button>
              </div>
            </div>
          </FormProvider>
        </div>
      </div>
      {
        showModal && (
          <DepositModal />
        )
      }
    </div>
  )
}

export default Deposit;