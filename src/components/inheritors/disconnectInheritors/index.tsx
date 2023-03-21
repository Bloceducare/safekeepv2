import FormProvider from "@components/primitives/form-provider";
import FormOne from "./form-one";
import FormTwo from "./form-two";
import DisconnectProfile from "assets/images/inheritors/disconnect-profile.svg"
import Close from "assets/images/inheritors/close.svg"

const DisconnectInheritors = () => {
    const handleSubmit = (e)=>{
        console.log(e)
    }
    return (
         <div className="w-full">
        <input className="modal-state" id="modal-1" type="checkbox" checked/>
        <div className="modal">
            <label className="modal-overlay bg-[#000000] opacity-30" htmlFor="modal-1"></label>
            <div className="modal-content w-full max-w-[318px] p-9 lg:max-w-[462px] bg-[#FFFFFF] mx-auto">
                <div className="w-full flex justify-between">
                    <DisconnectProfile />
                    <Close />
                </div>
                <FormProvider onSubmit={handleSubmit}>
                    <FormOne />
                </FormProvider>
            </div>
        </div>
    </div>
    )
}

export default DisconnectInheritors;
