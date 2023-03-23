import Input from "@components/primitives/input";
import ModalDescription from "@components/primitives/modal/body";
import Lock from "@images/Dashboard/multi/lock.svg";
import Trash from "@images/Dashboard/multi/trash.svg";
import { useNetwork } from "wagmi";

const Content = () => {
  const { chain } = useNetwork();
  return (
    <div>
      <ModalDescription>
        <Lock className="mb-2 " />
      </ModalDescription>
      <div className="">
        <p className="text-2xl">
          <span className=" safe-darky">Add Signatory</span>
          🔗
        </p>
        <div className="text-safekeep-gray-100 text-sm mt-2 mb-3">Add additional Vault signatories and specify how many of them have to confirm a transaction before it gets executed.</div>
        <div className="bg-safekeep-hover p-2 rounded-[8px] mb-4">
          <p className="text-xs text-safekeep-gray-600">Wallet Address</p>
          <div className="flex justify-between">
            <div className="text-[#3A4662] max-w-[15rem] break-words ">0x45e7b6ad8dd0f02329ce34d21f4bb6218f497410</div>
            <div className="text-safekeep-gray-900 text-xs uppercase">{chain && chain?.name}</div>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-0 ">
          <div className="col-span-9  bg-safekeep-hover p-2 rounded-[8px]">
            <div>
              <p className="text-xs text-safekeep-gray-600">Signatory Name:</p>
              <Input showError={false} name="name" placeholder="Name" className="w-full bg-transparent hover:border-none focus:border-none  border-none font-dmSans text-2xl leading-6 pl-1"></Input>
            </div>
          </div>
          <div className="col-span-1 justify-self-end  flex items-center ">
            <Trash className="scale-150" />
          </div>
        </div>
      </div>
    </div>
  );
};
const AddMultiOne = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default AddMultiOne;
