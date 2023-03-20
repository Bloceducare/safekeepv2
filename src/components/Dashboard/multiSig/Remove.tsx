import ModalDescription from "@components/primitives/modal/body";
import Email from "assets/images/dashboard/multi/email.svg";
import Button from "@components/primitives/button";
import Modal from "@components/primitives/modal";
import * as Dialog from "@radix-ui/react-dialog";
import { Sig } from "@pages/dashboard/multi-sig";
import { useState } from "react";
import RemovingSig from "./Removing";
import SuccessRemove from "./SuccessRemove";

const wait = async (wait: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("done");
    }, wait * 1000);
  });
};
const Content = () => {
  return (
    <div>
      <ModalDescription>
        <Email className="mb-2" />
      </ModalDescription>
      <div className="">
        <p className="text-2xl">Remove Signatory 🔗</p>
        <div className="text-safekeep-gray-100 text-sm mt-2 mb-3">Add additional Vault signatories and specify how many of them have to confirm a transaction before it gets executed.</div>

        <div className="my-3">
          <Sig hideActions />
        </div>
      </div>
    </div>
  );
};
const RemoveSig = () => {
  const [removing, setRemovin] = useState(false);
  const [txnSuccess, setTxnSuccess] = useState(false);
  const removeSig = async () => {
    setTxnSuccess(false);
    setRemovin(true);
    await wait(3);
    setTxnSuccess(true);
    setRemovin(false);
  };
  return (
    <>
      <Modal
        open={true}
        Toggle={
          <Dialog.Trigger asChild>
            <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              Remove
            </button>
          </Dialog.Trigger>
        }
      >
        {removing ? (
          <RemovingSig />
        ) : txnSuccess ? (
          <>
            <SuccessRemove />
          </>
        ) : (
          <>
            <Content />
            <Button onClick={removeSig} type="solid" className="mt-2">
              Remove
            </Button>
          </>
        )}
      </Modal>
    </>
  );
};

export default RemoveSig;
