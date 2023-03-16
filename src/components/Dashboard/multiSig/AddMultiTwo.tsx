import Button from "@components/primitives/button";
import Input from "@components/primitives/input";
import Modal from "@components/primitives/modal";
import ModalDescription from "@components/primitives/modal/body";
import * as Dialog from "@radix-ui/react-dialog";
import Email from "assets/images/dashboard/multi/email.svg";

const Content = () => {
  return (
    <div>
      <ModalDescription>
        <Email className="mb-2" />
      </ModalDescription>
      <div className="">
        <p className="text-2xl">
          <span className=" safe-darky">Multi-Sigs Email Address</span>
        </p>
        <div className="text-safekeep-gray-100 text-sm mt-2 mb-3">
          As a faster route, Safekeep sends an invite link to Multi-Signatories so they can approve the invite request at lightening speed.
        </div>

        <div className=" bg-safekeep-hover p-2 rounded-[8px]">
          <div className="  ">
            <div>
              <Input
                showError={false}
                name="email"
                placeholder="Enter email here"
                className="w-full bg-transparent hover:border-none focus:border-none  border-none font-dmSans text-2xl leading-6 pl-1"
              ></Input>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Button>Next</Button>
      </div>
    </div>
  );
};
const AddMultiTwo = () => {
  return (
    <>
      <Modal
        open={true}
        Toggle={
          <Dialog.Trigger asChild>
            <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              Open
            </button>
          </Dialog.Trigger>
        }
      >
        <Content />
      </Modal>
    </>
  );
};

export default AddMultiTwo;
