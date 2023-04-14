import { ConnectKitButton } from "connectkit";
import WalletLogo from "../../public/wallet-header.svg";

interface IProps {
  children?: React.ReactNode;
  className?:string
}
const ConnectButton = ({ children, className }: IProps) => {
  return (
    <>
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress, ensName }) => {
          return (
            <>
              {children ? (
                <span onClick={show} className={`cursor-pointer ${className}`}>{children}</span>
              ) : (
                <>
                  <button onClick={show} className={`w-full flex p-1 py-2 mx-1 text-center items-center justify-center text-[#fff] border rounded-lg bg-safekeep-blue mb-4 lg:mb-0 ${className}`}>
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
