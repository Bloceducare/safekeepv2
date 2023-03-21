import Input from "@components/primitives/input";
import ArrowDown from "assets/images/inheritors/arrow-down.svg"

const FormTwo = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-1.5 py-3">
                <p className="text-2xl font-paralucentMedium text-[#001873]">Remove inheritor</p>
                <p className="text-sm font-dmSans text-[#606060]">The allocated balance would be transferred back into your vault unallocated balance</p>
            </div>
            <div className="bg-safekeep-hover rounded-lg px-4 py-2.5">
                <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Allocate Amount</p>
                <div className="w-full flex gap-2 items-center">
                    <Input name="amount" value="$5,000,000.03" className="w-full border-none focus:border-none px-0" />
                     <div className="rounded-[2px] bg-[#F0FCFF] text-xs font-dmSans text-[#0F1D40] py-0.5 px-1 leading-4 h-5">ETH</div>
                </div>
            </div>
            <ArrowDown className="mt-6 mx-auto" />
            <div className="w-full flex gap-3 mt-6 items-center">
                <div className="bg-safekeep-hover w-full rounded-lg px-4 py-2.5">
                    <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">My Wallet Balance</p>
                    <div className="w-full flex items-center">
                        <Input name="balance" value="$32,751,854.32" className="w-full border-none focus:border-none px-0" />
                    </div>
                </div>
            </div>
             <button className="w-full bg-safekeep-blue rounded-lg py-4 mt-6 text-safekeep-white font-paralucentMedium text-sm leading-[14px]">Proceed</button>
        </div>
    )
}

export default FormTwo;