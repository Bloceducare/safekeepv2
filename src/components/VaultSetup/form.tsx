import {useState, Dispatch, SetStateAction} from "react"
import FormTwo from "./formTwo"
import FormOne from "./formOne"
import FormProvider from "../primitives/form-provider";

interface FormProps {
    setCreateVault: Dispatch<SetStateAction<boolean>>;
}

const Form = ({setCreateVault}: FormProps) => {
    const [step, setStep] = useState("step-one");

    const handleSubmit = (e)=>{
        if(step === "step-one") setStep("step-two")
        if(step === "step-two") setStep("step-three")
    }

     const handleBackButton = (e)=>{
        if(step === "step-one") setCreateVault(false)
        if(step === "step-two") setStep("step-one")
    }
    return (
    <div className="w-full">
        <div className="w-full max-w-[590px] mx-auto flex justify-end mb-3.5 lg:hidden">
            <button className="px-4 py-2 bg-safe-light-100 rounded-lg gap-2.5">
                <span onClick={handleBackButton} className="font-paralucentLight leading-4 text-sm text-[#01A0FF]">Back</span>
            </button>
        </div>
        {
            step === "step-one" && (
                <FormProvider onSubmit={handleSubmit}>
                    <FormOne setCreateVault={setCreateVault} />
                </FormProvider>
            )
        }
        {
            step === "step-two" && (
                <FormProvider onSubmit={handleSubmit}>
                    <FormTwo setStep={setStep} />
                </FormProvider>
            )
        }
    </div>
    )
}

export default Form;