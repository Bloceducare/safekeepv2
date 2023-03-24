import { Dispatch, SetStateAction} from "react"
import Input from "@components/primitives/input";

interface FormOneProps {
    setCreateVault:  Dispatch<SetStateAction<boolean>>;
}

const FormOne = ({setCreateVault}: FormOneProps) => {
  return (
    <div className="flex w-full flex-col">
        <div className="p-8 max-w-[590px] mx-auto flex flex-col items-center w-full bg-safekeep-transparent rounded-[18px]">
            <div className="w-full h-[50px] lg:h-[114px] py-4 px-2 bg-safekeep-blue-100 rounded-lg flex justify-end items-start">
                <button onClick={()=> setCreateVault(false)} className="hidden lg:flex">
                    <span className="font-paralucentLight text-sm leading-4 text-[#01A0FF]">Back</span>
                </button>
            </div>
            <div className="flex w-full mt-6 items-center">
                <div className="w-[5%] bg-safekeep-safeguard h-[4px] rounded-l-lg"/>
                <div className="flex-shrink-0  h-[17px] w-[17px] bg-safekeep-safeguard rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    1
                </div>
                 <div className="w-full bg-safe-light-600 h-[4px] rounded-l-lg"/>
                <div className="flex-shrink-0  h-[17px] w-[17px] bg-[#CCCCCC] rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    2
                </div>
                 <div className="w-full bg-safe-light-600 h-[4px] rounded-l-lg"/>
                <div className="flex-shrink-0 h-[17px] w-[17px] bg-[#CCCCCC] rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    3
                </div>
                <div className="w-[5%] bg-safe-light-600 h-[4px] rounded-r-lg"/>
            </div>
            <div className="mt-6 w-full">
                <p className="font-paralucentMedium tracking-tighter text-xl leading-5 lg:text-3xl lg:leading-9 text-[#011A91]">Give your Vault a Name</p>
                <p className="mt-2 text-xs lg:text-sm font-dmSans leading-5 text-safekeep-gray-100 tracking-widest">You are giving your new Safevault a Name, and it will house your assets.</p>
            </div>
            <div className="mt-6 lg:mt-10 w-full">
                <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-3.5">
                    <Input name="vaultName" placeholder="new_ethereum_safe" required className="w-full h-12"/>
                    <div className="py-1 px-2 lg:mt-2.5 gap-8 rounded-lg max-w-[98px] h-7 flex items-center w-full bg-[#E6F1FF]">
                    <p className="pl-2 text-xs text-[#0150B4] font-dmSans leading-7">Ethereum</p>
                    </div>
                </div>
                <button type="submit" className="mt-6 w-full bg-safekeep-blue rounded-lg py-4 font-paralucentMedium text-safe-light-100 text-sm leading-[14px]">
                Next
                </button>
            </div>
            <p className="mt-6 font-dmSans font-medium leading-4 text-sm tracking-widest">
                By continuing, you agree to our <span className="text-[#00AF00]">terms</span> of use and <span className="text-[#00AF00]">privacy policy</span>.
            </p>
        </div>
        <button className="mt-14 w-full max-w-[509px] font-paralucentMedium text-start mx-auto py-3 px-5 text-safekeep-blue-100 text-[11px] lg:text-sm leading-4 bg-[#55A0FE] lg:bg-safekeep-blue-700 rounded-lg">
              This name is only stored locally and will never be shared with us or any third parties. The new Safe will ONLY be available on Ethereum
        </button>
    </div>
  )
}

export default FormOne;