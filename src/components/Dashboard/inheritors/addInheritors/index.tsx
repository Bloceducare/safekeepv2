import FormProvider from "@components/primitives/form-provider";
import FormOne from "./form-one";
import FormTwo from "./form-two";
import FormThree from "./form-three";
import FormFour from "./form-four";
import FormProfile from "assets/images/inheritors/form-profile.svg"
import Close from "assets/images/inheritors/close.svg"
import Modal from "@components/primitives/modal";
import ModalDescription from "@components/primitives/modal/body";
import ModalTitle from "@components/primitives/modal/title";

const AddInheritors = () => {
    const handleSubmit = (e)=>{
        console.log(e)
    }
    return (
   <Modal open={true} className=" w-full max-w-[318px] p-9 lg:max-w-[462px] bg-[#FFFFFF] mx-auto">
        <div className="w-full">
            <ModalTitle>
                 <FormProfile />
            </ModalTitle>
           <ModalDescription>
                <div>
                    <div>
                        <FormProvider onSubmit={handleSubmit}>
                            <FormOne />
                        </FormProvider>
                    </div>
                </div>
           </ModalDescription>
        </div>
   </Modal>
    )
}

export default AddInheritors;
