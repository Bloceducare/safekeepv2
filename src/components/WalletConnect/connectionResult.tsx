import Logo from "assets/images/ConnectWallet/logo.svg";
import SuccessLogo from "assets/images/ConnectWallet/success.svg";
import FailureLogo from "assets/images/ConnectWallet/failure.svg";
import CircleLogo from "assets/images/ConnectWallet/circle-logo.svg";
import MetaMask from "assets/images/ConnectWallet/metamask.svg";
import Coinbase from "assets/images/ConnectWallet/coinbase.svg";
import TrustWallet from "assets/images/ConnectWallet/trust-wallet.svg";
import Wallet from "assets/images/ConnectWallet/wallet-connect.svg";

const ConnectionResult = () => {
  return (
   <div className="w-full pt-11 pb-14 flex flex-col justify-center items-center px-8 lg:max-w-[595px] mx-auto bg-[#FFFFFF] rounded-[18px]">
    <p className="pb-14 font-paralucentMedium text-2xl tracking-tight text-[#011A91]">
        Wallet connect Successfully
    </p>
    <div className="flex">
        <div className="border-4 w-[110px] flex items-center justify-center h-[110px] border-[#0123F7] rounded-full bg-white">
            <MetaMask className="h-[63px] w-[68px]"/>
        </div>
        <CircleLogo className="-ml-8 z-10" />
        <SuccessLogo className="-ml-8 z-20" />
    </div>
    <p className="pt-20 font-paralucentMedium text-base tracking-tight text-[#001268]">
        Successfully connected your Metamask wallet to safekeep
    </p>
   </div>
  )
}

export default ConnectionResult;