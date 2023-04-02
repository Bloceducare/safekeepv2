import Input from '@components/primitives/input';
import TrashSquare from 'assets/images/inheritors/trash-square.svg';

const FormFour = ({ formData, setConnectType }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-1.5 py-3">
        <p className="text-2xl font-paralucentMedium text-[#001873]">Add Inheritor</p>
      </div>
      <div className="rounded-lg bg-safekeep-hover">
        <div className="bg-safekeep-hover px-4 py-2.5">
          <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Inheritors Wallet Address</p>
          <div className="w-full flex gap-2 items-center">
            <Input name="inheritorAddress" value={formData?.address} className="w-full border-none focus:border-none" />
          </div>
        </div>
        <div className="w-full flex gap-3 bg-safekeep-hover">
          <div className="bg-safekeep-hover w-full lg:max-w-[50%] px-4 py-2.5">
            <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Inheritors Name</p>
            <div className="w-full flex gap-2 items-center">
              <Input name="inheritorsName" value={formData?.name} className="w-full border-none focus:border-none" />
            </div>
          </div>
          <div className="bg-safekeep-hover w-full lg:max-w-[50%] px-4 py-2.5">
            <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Allocate Amount</p>
            <div className="w-full flex gap-2 items-center">
              <Input
                name="inheritorsAmount"
                value={formData?.amount}
                className="w-full border-none focus:border-none"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          setConnectType('inheritors');
        }}
        className="w-full bg-safekeep-blue rounded-lg py-4 mt-6 text-safekeep-white font-paralucentMedium text-sm leading-[14px]"
      >
        Create inheritor
      </button>
    </div>
  );
};

export default FormFour;
