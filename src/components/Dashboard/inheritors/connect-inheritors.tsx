import { useState } from 'react';
import VideoImage from 'assets/images/inheritors/video-player.png';
import ArrowLeft from 'assets/images/inheritors/back.svg';
import Image from 'next/image';
import ConnectedInheritors from './connected-inheritors';

const ConnectInheritors = () => {
  const [step, setStep] = useState(null);
  return (
    <>
      {step === 'connect' ? (
        <ConnectedInheritors setStep={setStep} />
      ) : (
        <div className="w-full mx-auto max-w-[1100px] mt-8">
          <div className="w-full lg:flex items-center gap-4 justify-between">
            <button>
              <ArrowLeft />
            </button>

            <button
              onClick={(e) => {
                setStep('connect');
              }}
              className="border border-solid rounded-lg border-[#01A0FF] text-[#01A0FF] px-10 py-2.5 text-sm leading-[14px] font-paralucentMedium"
            >
              Connect
            </button>
          </div>
          <div className="mx-auto flex flex-col items-center w-full max-w-[542px] py-7 px-5 bg-[#FFFFFF] mt-16 rounded-[10px] shadow-sm">
            <Image src={VideoImage} alt="video" className="w-full h-[274px] mb-7" />
            <p className="text-[#101828] text-lg font-semibold">Welcome to your Safevault</p>
            <p className="text-[#475467] text-sm text-center mt-1">
              We’re glad to have you onboard. Here are some quick tips to get you up and running.
            </p>
            <button
              onClick={(e) => {
                setStep('connect');
              }}
              className="w-full bg-safekeep-blue rounded-lg py-5 mt-5 text-safekeep-white font-paralucentMedium text-sm leading-[14px]"
            >
              Connect Inheritors
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectInheritors;
