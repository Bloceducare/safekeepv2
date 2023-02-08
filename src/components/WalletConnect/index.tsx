import Logo from "assets/images/ConnectWallet/logo.svg";
import ChevronLeft from "assets/images/ConnectWallet/chevron-left.svg";
import ChevronRight from "assets/images/ConnectWallet/chevron-right.svg";
import MetaMask from "assets/images/ConnectWallet/metamask.svg";
import Coinbase from "assets/images/ConnectWallet/coinbase.svg";
import TrustWallet from "assets/images/ConnectWallet/trust-wallet.svg";
import Wallet from "assets/images/ConnectWallet/wallet-connect.svg";

const WalletConnect = () => {

  const walletOptions = [
    {
      name: "MetaMask",
      Logo: MetaMask
    },
      {
      name: "Coinbase",
      Logo: Coinbase
    },
      {
      name: "Trust Wallet",
      Logo: TrustWallet
    },
      {
      name: "Wallet Connect",
      Logo: Wallet
    },
  ]
  return (
   <div className="w-full px-8 lg:p-8 lg:max-w-[594px] mx-auto bg-safekeep-transparent rounded-[18px]">
    <div className="flex items-center justify-between">
        <Logo />
        <button className="px-5 py-2 font-paralucentLight text-[01A0FF] flex gap-x-1 items-center justify-center text-sm tracking-wide bg-safekeep-blue-100 rounded-lg">
         <ChevronLeft />   Back
        </button>
    </div>
    <p className="pt-4 font-paralucentMedium text-[#001873] text-3xl leading-[37px] tracking-tight">
      Welcome 👋🏻 
    </p>
    <p className="text-base tracking-tight leading-5 pt-2">
      Select your wallet from the options to get started.
    </p>
    <div className="pt-2 flex flex-col gap-2 w-full">
    {
      walletOptions.map(({name, Logo})=>{
        return(
            <div className="flex justify-between items-center bg-safekeep-white px-6 py-3 rounded-lg">
              <div className="flex items-center gap-x-5 font-paralucentMedium text-sm text-safekeep-blue">
                <Logo className="w-7 h-[26px]" />
                <p>{name}</p>
              </div>
              <ChevronRight />
            </div>
        )
      })
    }
    </div>
   </div>
  )
}

export default WalletConnect;