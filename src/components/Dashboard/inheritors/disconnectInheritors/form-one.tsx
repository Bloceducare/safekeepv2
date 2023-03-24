import Input from "@components/primitives/input";
import TrashSquare from "assets/images/inheritors/trash-square.svg"

const FormOne = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-1.5 py-3">
                <p className="text-2xl font-paralucentMedium text-[#001873]">Remove inheritor</p>
                <p className="text-sm font-dmSans text-[#606060]">Remove the inheritors Eth Wallet Address, the allocated assets will be transfered back into your unallocated vault</p>
            </div>
            <div className="bg-safekeep-hover rounded-lg px-4 py-2.5">
                <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Inheritors Wallet Address</p>
                <div className="w-full flex gap-2 items-center">
                    <Input name="address" value="0x45E7b6ad8dD0f02329ce34D21..18F497410" className="w-full border-none focus:border-none px-0" />
                </div>
            </div>
            <div className="w-full flex gap-3 mt-4 items-center">
                <div className="bg-safekeep-hover w-full rounded-lg px-4 py-2.5">
                    <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Inheritors Name</p>
                    <div className="w-full flex items-center">
                        <Input name="name" value="my coinbase" className="w-full border-none focus:border-none px-0" />
                    </div>
                </div>
            </div>
             <button className="w-full bg-safekeep-blue rounded-lg py-4 mt-6 text-safekeep-white font-paralucentMedium text-sm leading-[14px]">Next</button>
        </div>
    )
}

export default FormOne;