import Input from "@components/primitives/input";
import ModalDescription from "@components/primitives/modal/body";
import Email from "@images/Dashboard/multi/email.svg";

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
    </div>
  );
};
const AddMultiTwo = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default AddMultiTwo;
