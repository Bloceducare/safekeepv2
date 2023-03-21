import DashboardLayout from "@components/Layout/dashboard";
import Cancel from "@images/Dashboard/multi/multi-disc.svg";
import Lock from "@images/Dashboard/multi/lock.svg";
import Edit from "@images/Dashboard/multi/message-edit.svg";
import Verify from "@images/Dashboard/multi/verify.svg";
import { useState } from "react";
import Select, { SelectOption } from "@components/primitives/select";
import Image from "@components/primitives/image";
import * as Dialog from "@radix-ui/react-dialog";
import Modal from "@components/primitives/modal";
import AddMultiOne from "@components/Dashboard/multiSig/AddMultiOne";
import AddMultiTwo from "@components/Dashboard/multiSig/AddMultiTwo";
import useMultiStep from "../../hooks/useMultiStep";
import Button from "@components/primitives/button";
import RemoveSig from "@components/Dashboard/multiSig/Remove";
import SuccessAdd from "@components/Dashboard/multiSig/SuccessAdd";
import Disconnect from "@components/Dashboard/multiSig/Disconnect";

const MultiStatusBox = ({ btnAction = () => {}, title = "", description = "", buttonText = "", maxW = false }) => {
  return (
    <div>
      <div className={`bg-safekeep-white ${maxW ? "" : "max-w-[32rem]"} m-auto p-5 text-center mt-8 rounded-lg border-safekeep-gray-200 border box-shadow-one`}>
        <div className="mx-auto inline-block mb-1 ">
          <Cancel />
        </div>
        <div className="text-safekeep-gray-900 text-[18px]">{title}</div>
        <div className="text-[14px] line-[10px] text-safekeep-gray-600 mb-6 mt-4">{description}</div>
        <div className="mt-4">
          <Button onClick={btnAction} type="solid">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

const NotConnected = ({ connect }) => {
  const data = {
    title: "Multi-Sig Not Connected",
    description: "View all your transactions on your Safevault by adding assets & Tokens.",
    buttonText: "Connect feature",
    btnAction: connect
  };
  return (
    <>
      <MultiStatusBox {...data} />
    </>
  );
};

const totalStep = 2;
const ModalContent = () => {
  const { currentStep, prev, next, isFirstStep, isLastStep } = useMultiStep(totalStep);
  const MultiSteps = [AddMultiOne, AddMultiTwo];
  const CurrentStep = MultiSteps[currentStep];
  const [txnSuccess, setTxnSuccess] = useState(false);
  const nextStep = () => {
    if (currentStep < totalStep - 1) return next();
    setTxnSuccess(true);
  };
  return (
    <>
      <Modal
        open={false}
        Toggle={
          <Dialog.Trigger asChild>
            <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              Open
            </button>
          </Dialog.Trigger>
        }
      >
        {txnSuccess ? <SuccessAdd /> : <CurrentStep />}

        <div className={`mt-2  ${txnSuccess ? "block w-full" : isFirstStep ? "" : "flex justify-between"}`}>
          <div>
            <Button className={`px-4 ${txnSuccess ? "hidden" : isFirstStep ? "hidden" : "flex"}`} onClick={prev}>
              Prev
            </Button>
          </div>
          <div>
            <Button className={`px-4 ${txnSuccess ? "block w-full" : ""}`} onClick={nextStep}>
              {txnSuccess ? "Done" : isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export const Sig = ({ className = "", hideActions = false }) => {
  return (
    <>
      <div className="">
        <div className={`flex justify-between ${className}`}>
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-safekeep-blue-500 mr-2"></div>
            <div>
              <div className="text-safe-green-800 bg-safe-green-100  p-1 rounded-xl px-2">eth:0x45E7b6...8F497410</div>
              <div className="text-xs text-safekeep-gray-200">My Friend</div>
            </div>
          </div>
          {!hideActions && (
            <div className="flex items-center">
              <div className="mr-3">
                <button>
                  <Image width={20} height={20} src="/copy.svg" />
                </button>
              </div>
              <div className="mr-3">
                <button>
                  <Image width={20} height={20} src="/eye.svg" />
                </button>
              </div>
              <div className="mr-3">
                <RemoveSig>
                  <button>
                    <Image width={20} height={20} src="/trash.svg" />
                  </button>
                </RemoveSig>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Connected = () => {
  const data = {
    title: "No Multi-signatories",
    description: "Add a new wallet as a Multi-signatory to your vault.",
    buttonText: "Add Multi-Sig",
    maxW: true
  };
  const [sig] = useState(1);
  return (
    <>
      <div className="lg:grid grid-cols-10 gap-4  mt-4 flex flex-col-reverse ">
        <div className="col-span-6 bg-safekeep-white p-10 rounded-2xl lg:mb-0 mb-4">
          <Lock />
          <p className="text-safekeep-gray-300 mt-3 mb-4 ">
            Add, remove and replace or rename existing Multisignatories. Wallet names are only stored locally and will never be shared with us or any third parties.
          </p>
          <ModalContent />
          {sig == 0 ? <MultiStatusBox {...data} /> : <Sig />}
        </div>
        <div className="col-span-4 ">
          <div className="bg-safekeep-white p-10 rounded-2xl">
            <Edit className="scale-125" />
            <p className="text-safekeep-gray-300 mt-3 ">Set the number of authentications needed for transactions.s</p>
            <div>
              <Select name="sig" className="bg-safekeep-blue-100 p-3 border rounded-2xl mt-3">
                <SelectOption value="select one">Option A</SelectOption>
                <SelectOption value="select tow">Option B</SelectOption>
              </Select>
            </div>

            <div className="mt-6">
              <p className="text-xs text-safekeep-blue-500 mb-2">Required Confirmations</p>
              <div className="inline-flex bg-safekeep-green-100 rounded-xl p-2 px-3 items-center  ">
                <Verify className="mr-1" />
                <span>2/3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const MultiSig = () => {
  const [isConnected, setIsConnected] = useState(false);
  const toggle = () => {
    setIsConnected(state => !state);
  };
  return (
    <>
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <svg className="scale-[2] rounded-sm mr-5 bg-safekeep-white " width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[18px] text-safekeep-blue-500">Manage Multi-Signatories.</p>
          </div>
          <div>
            {isConnected ? (
              <>
                <Disconnect toggle={toggle} text="Disconnect" />
              </>
            ) : (
              <button onClick={toggle} className="border-safekeep-blue rounded-md px-4 py-2 text-safekeep-blue-700 border">
                Connect
              </button>
            )}
          </div>
        </div>
        {isConnected ? <Connected /> : <NotConnected connect={toggle} />}
      </div>
    </>
  );
};

MultiSig.PageLayout = DashboardLayout;
export default MultiSig;
