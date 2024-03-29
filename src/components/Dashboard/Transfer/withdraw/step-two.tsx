import { useState } from 'react';
import TetherIcon from '@images/transfer/tether.svg';
import EthereumIcon from '@images/transfer/ethereum.svg';
import Wallet from '@images/transfer/wallet.svg';
import Loaders from '@components/primitives/loaders';

const StepTwo = ({ formData }) => {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <div className="w-full">
      <p className="font-dmSans text-xs leading-5 text-safekeep-gray-600 pb-1">You are withdrawing</p>
      <div className="w-full mt-5 p-2 rounded bg-safekeep-hover">
        <div className="flex gap-2 items-center">
          <TetherIcon></TetherIcon>
          <p className="uppercase">{formData?.assetType}</p>
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="font-dmSans text-xs leading-5 mb-1 text-safekeep-gray-600 pb-1">Amount to withdraw</p>
        <div className="flex font-dmSans font-medium text-base uppercase text-[#000000] items-center w-full p-3 rounded border border-solid border-safekeep-gray-400">
          {formData?.amount} {formData?.assetType}
        </div>
      </div>
      <div className="flex gap-5 flex-col font-dmSans w-full mt-7">
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">Token:</p>
          <p className="text-sm">{formData?.assetType}</p>
        </div>
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">From:</p>
          <p className="text-sm break-all">0x45e7b6ad8dd0f02329ce34d21f4bb6218f497410</p>
        </div>
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">To:</p>
          <p className="text-sm break-all">{formData?.address}</p>
        </div>
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">Amount:</p>
          <p className="text-sm">{formData?.amount}</p>
        </div>
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">Network:</p>
          <p className="text-sm">Polygon</p>
        </div>
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">Network Fee:</p>
          <p className="text-sm">0.001853811491742 MATIC</p>
        </div>
        <div className="w-full flex gap-5 justify-between text-[#3A4662]">
          <p className="text-xs">Total:</p>
          <p className="text-sm">0.10 MATIC</p>
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-lg py-4 bg-safekeep-blue hover:opacity-80 flex items-center justify-center font-paralucentMedium text-xs text-[#FFFFFF] gap-2.5"
        onClick={(e) => {
          setShowLoader(true);
        }}
      >
        <Wallet /> Withdraw
      </button>
      {showLoader && <Loaders loaderTypes="failed" />}
    </div>
  );
};

export default StepTwo;
