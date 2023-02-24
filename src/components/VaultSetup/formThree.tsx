import { Dispatch, SetStateAction} from "react"
interface FormTwoProps {
    setStep: Dispatch<SetStateAction<string>>;
    formData: {
        vaultName?: string;
        backupAddress?: string;
        backupName?: string;
    }
}

const FormThree = ({setStep, formData}: FormTwoProps) => {
  return (
    <div className="flex w-full flex-col">
        <div className="p-8 max-w-[590px] mx-auto flex flex-col items-center w-full bg-safekeep-transparent rounded-[18px]">
            <div className="w-full h-[50px] lg:h-[114px] py-4 px-2 bg-safekeep-blue-100 rounded-lg flex justify-end items-start">
                <button onClick={()=> setStep("step-two")} className="hidden lg:block">
                    <p className="font-paralucentLight text-sm leading-4 text-[#01A0FF]">Back</p>
                </button>
            </div>
            <div className="flex w-full mt-6 items-center">
                <div className="w-[5%] bg-safekeep-safeguard h-[4px] rounded-l-lg"/>
                <div className="flex-shrink-0  h-[17px] w-[17px] bg-safekeep-safeguard rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    1
                </div>
                 <div className="w-full  h-[4px] bg-safekeep-safeguard"/>
                <div className="flex-shrink-0  h-[17px] w-[17px] bg-safekeep-safeguard rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    2
                </div>
                 <div className="w-full bg-safekeep-safeguard h-[4px]"/>
                <div className="flex-shrink-0 h-[17px] w-[17px] bg-safekeep-safeguard rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    3
                </div>
                <div className="w-[5%] bg-safe-light-600 h-[4px] rounded-r-lg"/>
            </div>
            <div className="mt-6 w-full">
                <p className="font-paralucentMedium tracking-tighter text-xl leading-5 lg:text-3xl lg:leading-9 text-[#011A91]">Review Safevault Information</p>
                <p className="mt-2 text-xs lg:text-sm font-dmSans leading-5 text-safekeep-gray-100 tracking-widest">You're about to create a new Safe and will have to confirm the transaction with your connected wallet.</p>
            </div>
            <div className="mt-6 lg:mt-10 w-full rounded-[18px] p-2.5 bg-[#F8F8F8] gap-6 flex flex-col">
                <div className="gap-2 flex flex-col w-full">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Network</label>
                    <div className="w-full bg-[#FFF] rounded  h-9 border-none focus:border-none focus:outline-none p-2 flex gap-1">
                        <p className="font-dmSans text-sm leading-4 text-[#3A4662]">Ethereum Mainnet</p>
                    </div>
                </div>
                <div className="gap-2 flex flex-col w-full">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Safevault name:</label>
                    <div className="w-full bg-[#FFF] rounded  h-9 border-none focus:border-none focus:outline-none p-2 flex gap-1">
                        <p className="font-dmSans text-sm leading-4 text-[#3A4662]">{formData?.vaultName}</p>
                    </div>
                </div>
                <div className="gap-2 flex flex-col w-full">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Ping Interval</label>
                    <div className="w-full bg-[#FFF] rounded  h-9 border-none focus:border-none focus:outline-none p-2 flex gap-1">
                        <p className="font-dmSans text-sm leading-4 text-[#3A4662]">6 Months after inactivity</p>
                    </div>
                </div>
                 <div className="gap-2 flex flex-col w-full">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Connected Wallet</label>
                    <div className="w-full bg-[#FFF] rounded  h-9 border-none focus:border-none focus:outline-none p-2 flex gap-1">
                        <p className="font-dmSans text-sm leading-4 text-[#3A4662]">eth:0x45E7b6ad8dD0f02329ce34D21F4bB6218F497410</p>
                        <div className="w-auto flex gap-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 w-full flex justify-between mt-8 text-[#3A4662] font-sm leading-5 tracking-widest font-dmSans">
                <p>
                    Network Fee
                </p>
                <p>
                    ≈ 0.00432 ETH
                </p>

            </div>
            <button type="submit" className="mt-6 w-full bg-safekeep-blue rounded-lg py-4 font-paralucentMedium text-safe-light-100 text-sm leading-[14px]">
                Next
            </button>
        </div>
    </div>
  )
}

export default FormThree;