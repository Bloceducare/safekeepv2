import Wallet from "assets/images/HomeHero/wallet.svg";

const Cta = () => {
  return (
   <div className="w-full px-8 lg:px-9">
     <div className="relative max-w-[1242px] mt-36 w-full mb-64 px-8 lg:px-9 h-[664px] bg-safekeep-blue-400 mx-auto rounded-2xl flex flex-col items-center justify-center">
        <p className="font-paralucentLight text-4xl leading-[48px] lg:text-[57px] lg:leading-[68px] max-w-[783px] text-center w-full self-center">
            Hold, Trade and Secure Your Tokens on Safekeep Vault
        </p>
         <a href="/dashboard" className="font-paralucentMedium text-sm text-safekeep-white mt-6 px-24 py-3.5 bg-safekeep-blue rounded-lg mr-8 flex items-center justify-center"> <Wallet className=" mr-2.5" /> Get Safekeep</a>
    </div>
   </div>
  )
}

export default Cta;