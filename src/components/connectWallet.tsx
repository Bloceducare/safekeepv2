import WalletLogo from "../../public/wallet-header.svg";
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
        <div className="flex justify-between my-8">
          <button className="w-full p-1 mx-1 text-center border rounded-lg border-safekeep-blue ">I don't have a Wallet</button>
          <button className="w-full p-1 py-2 mx-1 text-center text-[#fff] border rounded-lg bg-safekeep-blue flex">
            <div className="mr-2">
              <WalletLogo className="fill-[#fff] " />
            </div>
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="w-full p-2 mt-10 text-center rounded-lg text-safekeep-white bg-safekeep-blue-700 font-dmSans">Connecting your wallet is like “logging in” to Safekeep.</div>
    </div>
  );
};

export default ConnectWallet;
