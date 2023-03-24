import SendSquare from '@images/Dashboard/send-square.svg';
import ReceiveSquare from '@images/Dashboard/receive-square.svg';
import BSCSvg from '@images/Dashboard/bsc-svg.svg';
import CloseSquare from '@images/Dashboard/close-square.svg';
import TickSquare from '@images/Dashboard/tick-square.svg';
import ApeImage from '@images/Dashboard/ape-image.svg';
import ChevronDown from '@images/Dashboard/chevron-down.svg';

const SingleTransaction = () => {
  return (
    <div className="w-full">
        <div className="w-full hidden lg:flex flex-col">
            <div className="border-solid flex gap-2 border-[#E7E7E7] border-t border-b px-3 py-5 font-dmSans font-medium text-sm">
            <div className="w-full max-w-[15%] flex items-center gap-2">
                <SendSquare /> 
                <p>Sent</p>
            </div>
            <div className="w-full max-w-[15%] flex items-center justify-center">
                <p>0.36 ETH</p>
            </div>
            <div className="w-full max-w-[15%] flex items-center justify-center">
                <ApeImage />
                <ApeImage className="-ml-2" />
                <ApeImage className="-ml-2" />
                <ApeImage className="-ml-2" />
            </div>
            <div className="w-full max-w-[20%] flex items-center justify-center">
                <p>0x8712128....086C81</p>
            </div>
            <div className="w-full max-w-[15%] flex gap-1 items-center justify-center">
                <BSCSvg />
                <p>BSC</p>
            </div>
            <div className="w-full max-w-[20%] gap-4 flex items-center justify-center">
                <button className="flex gap-1 text-[#B50000] py-1 items-center justify-center rounded-[11px] bg-[#FFE6E6] max-w-[98px] w-full">
                Failed
                <CloseSquare/>
                </button>
                <ChevronDown />
            </div>
            </div>
            <div className="border-solid flex gap-2 border-[#E7E7E7] border-b px-3 py-5 font-dmSans font-medium text-sm">
            <div className="w-full max-w-[15%] flex items-center gap-2">
                <ReceiveSquare /> 
                <p>Received</p>
            </div>
            <div className="w-full max-w-[15%] flex items-center justify-center">
                <p>0.36 ETH</p>
            </div>
            <div className="w-full max-w-[15%] flex items-center justify-center">
                <ApeImage />
                <ApeImage className="-ml-2" />
                <ApeImage className="-ml-2" />
                <ApeImage className="-ml-2" />
            </div>
            <div className="w-full max-w-[20%] flex items-center justify-center">
                <p>0x8712128....086C81</p>
            </div>
            <div className="w-full max-w-[15%] flex gap-1 items-center justify-center">
                <BSCSvg />
                <p>BSC</p>
            </div>
            <div className="w-full max-w-[20%] gap-4 flex items-center justify-center">
                <button className="flex gap-1 text-[#008800] py-1 items-center justify-center rounded-[11px] bg-[#E6FEE6] max-w-[98px] w-full">
                Success
                <TickSquare/>
                </button>
                <ChevronDown />
            </div>
            </div>
        </div>
        <div className='w-full lg:hidden p-5 flex flex-col gap-5 items-center mx-auto mt-10 bg-[#FFFFFF] rounded-[10px]'>
            <div className="flex w-full gap-2 justify-between">
                <div className=" w-auto flex gap-2">
                    <SendSquare /> 
                    <p>Sent</p>
                </div>
                <div className="z-20 flex items-center justify-center">
                    <ApeImage />
                    <ApeImage className="-ml-2" />
                    <ApeImage className="-ml-2" />
                    <ApeImage className="-ml-2" />
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className=" flex items-center justify-center">
                    <p>0.36 ETH</p>
                </div>
                <div className=" flex gap-1 items-center justify-center">
                    <BSCSvg />
                    <p>BSC</p>
                </div>
            </div>
            <div className="w-full">
                <p>0x8712128....086C81</p>
            </div>
            <div className="w-full gap-4 flex justify-between items-center border-t border-solid border-safe-light-600 pt-4">
                <button className="flex gap-1 text-[#008800] py-1 items-center justify-center rounded-[11px] bg-[#E6FEE6] max-w-[98px] w-full">
                    Success
                    <TickSquare/>
                </button>
                <ChevronDown />
            </div>
        </div>
    </div>
  )
}

export default SingleTransaction;