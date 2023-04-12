import ProgressSvg from 'assets/images/progress-loader.svg';

const InProgress = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="font-paralucentMedium text-lg">Transaction in Progress</p>
      <ProgressSvg />
    </div>
  );
};

export default InProgress;
