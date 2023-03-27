import ArrowLeft from "assets/images/inheritors/back.svg";
import EmptyInheritors from "./empty-inheritors";
import Inheritors from "./inheritors";
import AddInheritors from "./addInheritors";
import DisconnectInheritors from "./disconnectInheritors";
import Button from "@components/primitives/button";

const ConnectedInheritors = () => {
  return (
    <div className="w-full mx-auto max-w-[1100px] mt-8">
      <div className="w-full lg:flex items-center gap-4 justify-between">
        <div className="flex gap-3">
          <button>
            <ArrowLeft />
          </button>
          <p className="font-paralucentMedium text-lg text-[#333D8A]">Inheritors</p>
        </div>

        <div className="flex gap-5">
          <Button type="solid">Add Inheritor</Button>
          <Button type="outline">Disconnect</Button>
        </div>
      </div>
      <div className="w-full mx-auto">
        <Inheritors />
        <AddInheritors />
        {/* <DisconnectInheritors /> */}
      </div>
    </div>
  );
};

export default ConnectedInheritors;
