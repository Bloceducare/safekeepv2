import Button from "@components/primitives/button";
import ModalDescription from "@components/primitives/modal/body";
import { Sig } from "@pages/dashboard/multi-sig";
import { PlusIcon } from "@radix-ui/react-icons";
import Email from "@images/dashboard/multi/email.svg";

const Content = () => {
  return (
    <div>
      <ModalDescription>
        <Email className="mb-2" />
      </ModalDescription>
      <div className="">
        <p className="text-2xl">
          <span className=" safe-darky">Multi-Signatory Invited</span>
        </p>
        <div className="text-safekeep-gray-100 text-sm mt-2 mb-3">Notification has been sent to your Multi-signatory, they can now effect and approve transactions on this vault.</div>
        <div className="my-6">
          <Sig hideActions />
        </div>
        <div className="w-1/2 my-3 mb-4">
          <Button type="outline" className="flex items-center">
            <PlusIcon className="mr-1 " />
            Add Another Signatory
          </Button>
        </div>
      </div>
    </div>
  );
};
const SuccessAdd = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default SuccessAdd;
