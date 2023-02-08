import WalletLogo from "../../public/wallet-header.svg";
import { ConnectKitButton } from "connectkit";

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
            <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <>
                    <button onClick={show} className="w-full flex p-1 py-2 mx-1 text-center items-center justify-center text-[#fff] border rounded-lg bg-safekeep-blue">
                    <div className="mr-2">
                      <WalletLogo className="fill-[#fff] " />
                    </div>
                    {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
                  </button>
                  {/* { isConnected && (
                    <>
                    <input className="modal-state" id="modal-3" type="checkbox" defaultChecked={true}/>
                    <div className="modal">
                        <label className="modal-overlay color-red-50"></label>
                        <div className="modal-content flex flex-col gap-5">
                          <label for="modal-3" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                          <h2 className="text-xl">Modal title 3</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
                          <div class="flex gap-3">
                            <button class="btn btn-error btn-block">Delete</button>
                            <button class="btn btn-block">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                } */}
                </>
                );
              }}
            </ConnectKitButton.Custom>
        </div>
      </div>
      <div className="w-full p-2 mt-10 text-center rounded-lg text-safekeep-white bg-safekeep-blue-700 font-dmSans">Connecting your wallet is like “logging in” to Safekeep.</div>
    </div>
  );
};

export default ConnectWallet;
