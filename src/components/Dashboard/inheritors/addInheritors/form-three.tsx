import Input from "@components/primitives/input";
import TrashSquare from "assets/images/inheritors/trash-square.svg"
import Select, {SelectOption}  from "@components/primitives/select";
import TetherIcon from '@images/transfer/tether.svg';
import BlueArrowDown from "assets/images/inheritors/arrow-down-blue.svg"

const FormThree = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-1.5 py-3">
                <p className="text-2xl font-paralucentMedium text-[#001873]">Allocate Token</p>
                <p className="text-sm font-dmSans text-[#606060]">Set the Token balance you want transferred to this Eth Wallet Address.</p>
            </div>
            <div className="flex gap-2">
                <div className="w-full max-w-[40%]">
                    <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Token To Allocate</p>
                    <div className=' z-[3000] py-3.5 h-[60px] px-2 bg-[#F8F8F8] rounded-lg w-full'>
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
                <div className="w-full max-w-[60%]">
                    <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Token Balance</p>
                    <div className="w-full flex gap-2 h-[60px] items-center bg-safekeep-hover rounded-lg">
                        <Input name="address" className="w-full h-full border-none focus:border-none" placeholder="23 USDT" />
                    </div>
                </div>
            </div>
             <div className=" w-full mt-6 border border-solid border-[#E6F1FF] relative">
                <BlueArrowDown className="absolute left-[50%] -top-3" />
                </div>
            <div className="mt-6">
                <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Allocate Amount</p>
                    <div className="w-full flex gap-2 items-center bg-safekeep-hover rounded-lg">
                        <Input name="address" className="w-full h-[60px]  border-none focus:border-none" placeholder="23 USDT" />
                    </div>
            </div>
             <button className="w-full bg-safekeep-blue rounded-lg py-4 mt-6 text-safekeep-white font-paralucentMedium text-sm leading-[14px]">Next</button>
        </div>
    )
}

export default FormThree;