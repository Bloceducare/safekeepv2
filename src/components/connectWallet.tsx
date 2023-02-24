
import ConnectButton from "./ConnectButton";

const ConnectWallet = () => {
  return (
    <div>
      <div className="bg-[#fff] p-4 rounded-xl">
        <div className="mb-4">
          <img src="/connect-safekeep-logo.svg" alt="logo" />
        </div>
        <div className="mb-2 text-2xl ">
          <span className="blog-title font-paralucentMedium">Welcome</span>
          👋🏻
        </div>
        <div className="font-dmSans">To use Safekeep, You Need to Connect your Non-Custodian Wallet</div>
        <div className="flex justify-between my-8 lg:flex-nowrap flex-wrap-reverse">
          <button className="w-full p-1 mx-1 text-center border rounded-lg border-safekeep-blue ">I don't have a Wallet</button>
          <ConnectButton />
        </div>
      </div>
      <div className="w-full p-2 mt-4 px-8 rounded-lg text-safekeep-white bg-safe-light-800 font-dmSans text-sm">Connecting your wallet is like “logging in” to Safekeep.</div>
    </div>
  );
};

export default ConnectWallet;
