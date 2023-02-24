import { Dispatch, SetStateAction} from "react"
import Input from "../primitives/input";
import { useFormProvider } from '../primitives/form-provider';
import FormAlert from "@components/primitives/form-alert";
interface FormTwoProps {
    setStep: Dispatch<SetStateAction<string>>;
}

const FormTwo = ({setStep}: FormTwoProps) => {
      const formContext = useFormProvider();
  return (
    <div className="flex w-full flex-col">
        <div className="p-8 max-w-[590px] mx-auto flex flex-col items-center w-full bg-safekeep-transparent rounded-[18px]">
            <div className="w-full h-[50px] lg:h-[114px] py-4 px-2 bg-safekeep-blue-100 rounded-lg flex justify-end items-start">
                <button onClick={()=> setStep("step-one")} className="hidden lg:block">
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
                 <div className="w-full bg-safe-light-600 h-[4px]"/>
                <div className="flex-shrink-0 h-[17px] w-[17px] bg-[#CCCCCC] rounded-full flex items-center justify-center text-safe-light-100 text-xs leading-[14px] tracking-tighter">
                    3
                </div>
                <div className="w-[5%] bg-safe-light-600 h-[4px] rounded-r-lg"/>
            </div>
            <div className="mt-6 w-full">
                <p className="font-paralucentMedium tracking-tighter text-xl leading-5 lg:text-3xl lg:leading-9 text-[#011A91]">Add a backup address</p>
                <p className="mt-2 text-xs lg:text-sm font-dmSans leading-5 text-safekeep-gray-100 tracking-widest">your backup address is authorized to claim all you unallocated Token Balance if you are away for 6 months.</p>
            </div>
            <div className="mt-6 lg:mt-10 w-full">
                <div className="w-full flex flex-wrap lg:flex-nowrap gap-2.5">
                <div className="bg-[#FFF] py-2 gap-1 w-full flex-shrink-0 lg:flex-shrink lg:max-w-[57%] px-3.5 rounded-[3px]">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Wallet Address</label>
                        <Input name="backupAddress" showError={false}  required className="w-full h-6 border-none focus:border-none focus:outline-none px-0 rounded-none"/>
                </div>
                <div className="bg-[#FFF] py-2 gap-1 w-full max-w-[35%] px-3.5 rounded-[3px]">
                    <label className="text-safekeep-gray-600 text-xs leading-5">Local name</label>
                        <Input name="backupName" showError={false} required className="w-full h-6 border-none focus:border-none focus:outline-none px-0"/>
                </div>
                    <div className="gap-6 rounded-lg max-w-auto flex items-center w-auto">
                    </div>
                </div>
                  {(formContext?.errors["backupAddress"]?.type === 'required' || formContext?.errors["backupName"]?.type === 'required') && (
                        <FormAlert css={{ fontSize: '12px', color: '#FFFFFF', fontFamily: 'Beausite' }}>These fields are required</FormAlert>
                    )}
                <button type="submit" className="mt-6 w-full bg-safekeep-blue rounded-lg py-4 font-paralucentMedium text-safe-light-100 text-sm leading-[14px]">
                Next
                </button>
            </div>
            <p className="mt-6 font-dmSans font-medium leading-4 text-sm tracking-widest">
                By continuing, you agree to our <span className="text-[#00AF00]">terms</span> of use and <span className="text-[#00AF00]">privacy policy</span>.
            </p>
        </div>
    </div>
  )
}

export default FormTwo;