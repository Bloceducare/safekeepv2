import FailedSvg from 'assets/images/failed-loading.svg';

const Failed = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="text-[#FF0000] font-paralucentMedium text-lg">Transaction Unsuccessful</p>
      <FailedSvg />
      <p className=" font-dmSans text-xs text-safe-dark-main">Transaction was’nt approved</p>
    </div>
  );
};

export default Failed;
