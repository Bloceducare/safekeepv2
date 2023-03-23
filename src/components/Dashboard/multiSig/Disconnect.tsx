import Button from "@components/primitives/button";
import Modal from "@components/primitives/modal";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Cancel from "@images/Dashboard/multi/multi-disc.svg";
import VaultIcon from "@images/Dashboard/multi/vault.svg";
import VaultSuccess from "@images/Dashboard/multi/vaultsuccess.svg";

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
      <div className="text-center flex flex-col justify-center">
        <div className="mx-auto">
          <Cancel />
        </div>
        <p className="text-2xl ">Disconnect Multi-Sig</p>
        <div className="text-safekeep-gray-100 text-sm mt-2 mb-3">
          This feature provides your with 2-factor authentication for transaction confirmations, are you sure you want to disconnect this feature?.
        </div>
      </div>
    </div>
  );
};
const Disconnect = ({ toggle, text }) => {
  const [removing, setRemovin] = useState(false);
  const [txnSuccess, setTxnSuccess] = useState(false);
  const removeSig = async () => {
    setTxnSuccess(false);
    setRemovin(true);
    await wait(3);
    setTxnSuccess(true);
    setRemovin(false);
    await wait(2);
    toggle();
    setTimeout(() => {
      setTxnSuccess(false);
    });
  };
  return (
    <>
      <Modal
        open={false}
        Toggle={
          <Dialog.Trigger asChild>
            <Button type="outline">{text}</Button>
          </Dialog.Trigger>
        }
      >
        {removing ? (
          <>
            <div className="text-center">
              <VaultIcon className="mx-auto" />
              <div className="l">Removing multi-signatory</div>
            </div>
          </>
        ) : txnSuccess ? (
          <>
            <div className="text-center">
              <VaultSuccess className="mx-auto" />
              <div className="">Multi-Sig Removed Successfully</div>
            </div>
          </>
        ) : (
          <>
            <Content />
            <Button onClick={removeSig} type="solid" className="mt-2">
              Disconnect
            </Button>
          </>
        )}
      </Modal>
    </>
  );
};

export default Disconnect;
