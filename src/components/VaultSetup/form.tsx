import { useState, Dispatch, SetStateAction } from "react";
import FormTwo from "./formTwo";
import FormOne from "./formOne";
import FormProvider from "../primitives/form-provider";
import FormThree from "./formThree";
import VaultCreatedForm from "./vaultCreatedForm";
import LoadingModal from "./loadingModal";
import { useCreateVaultMutation } from "@services/api";

interface FormProps {
  setCreateVault: Dispatch<SetStateAction<boolean>>;
}

const Form = ({ setCreateVault }: FormProps) => {
  const [step, setStep] = useState("step-one");
  const [formData, setFormData] = useState({});
  const [createVaultMut, { ...actionStatus }] = useCreateVaultMutation();
  const vaultLoading = actionStatus?.isLoading;
  const vaultCreated = actionStatus?.isSuccess;

  const handleSubmit = async e => {
    setFormData(prevData => ({ ...prevData, ...e }));
    if (step === "step-one") {
      setStep("step-two");
      return;
    }
    if (step === "step-two") {
      setStep("step-three");
      return;
    }
    setStep("step-final");

    try {
      await createVaultMut({ ...formData, vaultAddress: "0xsampleVault" });
    } catch (e) {
      console.log(e, "Error");
    }
  };

  const handleBackButton = e => {
    if (step === "step-one") setCreateVault(false);
    if (step === "step-two") setStep("step-one");
    if (step === "step-three") setStep("step-two");
  };
  return (
    <div className="w-full">
      <div className="w-full max-w-[590px] mx-auto flex justify-end mb-3.5 lg:hidden">
        <button className="px-4 py-2 bg-safe-light-100 rounded-lg gap-2.5">
          <span onClick={handleBackButton} className="font-paralucentLight leading-4 text-sm text-[#01A0FF]">
            Back
          </span>
        </button>
      </div>
      {step === "step-one" && (
        <FormProvider onSubmit={handleSubmit}>
          <FormOne setCreateVault={setCreateVault} />
        </FormProvider>
      )}
      {step === "step-two" && (
        <FormProvider onSubmit={handleSubmit}>
          <FormTwo setStep={setStep} />
        </FormProvider>
      )}
      {step === "step-three" && (
        <FormProvider onSubmit={handleSubmit}>
          <FormThree setStep={setStep} formData={formData} actionStatus={actionStatus} />
        </FormProvider>
      )}
      {vaultLoading && !vaultCreated && <LoadingModal />}
      {vaultCreated && <VaultCreatedForm />}
    </div>
  );
};

export default Form;
