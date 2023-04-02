import Input from '@components/primitives/input';
import TrashSquare from 'assets/images/inheritors/trash-square.svg';

const FormOne = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-1.5 py-3">
        <p className="text-2xl font-paralucentMedium text-[#001873]">Add Inheritor</p>
        <p className="text-sm font-dmSans text-[#606060]">
          Add additional Vault signatories and specify how many of them have to confirm a transaction before it gets
          executed.
        </p>
      </div>
      <div className="bg-safekeep-hover rounded-lg px-4 py-2.5">
        <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Wallet Address:</p>
        <div className="w-full flex gap-2 items-center">
          <Input name="address" className="w-full border-none focus:border-none" required showError={false} />
          <div className="rounded-[2px] bg-[#F0FCFF] text-xs font-dmSans text-[#0F1D40] py-0.5 px-1 leading-4 h-5">
            ETH
          </div>
        </div>
      </div>
      <div className="w-full flex gap-3 mt-4 items-center">
        <div className="bg-safekeep-hover w-full rounded-lg px-4 py-2.5">
          <p className="text-xs font-dmSans text-[#B2B7C2] mb-1">Signatory Name:</p>
          <div className="w-full flex items-center">
            <Input name="name" className="w-full border-none focus:border-none" required showError={false} />
          </div>
        </div>
        <TrashSquare />
      </div>
      <button
        type="submit"
        className="w-full bg-safekeep-blue rounded-lg py-4 mt-6 text-safekeep-white font-paralucentMedium text-sm leading-[14px]"
      >
        Next
      </button>
    </div>
  );
};

export default FormOne;
