import SuccessfulSvg from 'assets/images/sucess-loading.svg';

const Successful = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="text-[#0167E6] font-paralucentMedium text-lg">Claim Successful</p>
      <SuccessfulSvg />
      <p className=" font-dmSans text-xs text-safe-dark-main">Your Inheritance is available in your vault</p>
    </div>
  );
};

export default Successful;
