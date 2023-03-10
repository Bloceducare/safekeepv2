import { ConnectKitButton } from "connectkit";
import WalletLogo from "../../public/wallet-header.svg";

interface IProps {
  children?: React.ReactNode;
}
const ConnectButton = ({ children }: IProps) => {
  return (
    <>
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress, ensName }) => {
          return (
            <>
              {children ? (
                <button onClick={show}>{children}</button>
              ) : (
                <>
                  <button onClick={show} className="w-full flex p-1 py-2 mx-1 text-center items-center justify-center text-[#fff] border rounded-lg bg-safekeep-blue mb-4 lg:mb-0">
                    <div className="mr-2">
                      <WalletLogo className="fill-[#fff] " />
                    </div>
                    {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
                  </button>
                </>
              )}
            </>
          );
        }}
      </ConnectKitButton.Custom>
    </>
  );
};

export default ConnectButton;
