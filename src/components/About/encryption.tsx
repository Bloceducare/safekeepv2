import EtheruemLogo from "assets/images/HomeHero/ethereum-logo.svg";

const Encryption = () => {
  return (
  <div className="absolute w-full lg:-top-44 px-8 lg:px-9 -top-[192px]">
      <div className=" max-w-[1231px] mx-auto w-full py-16 px-11  bg-safekeep-encryption box-shadow-4xl rounded-2xl">
        <div className="mb-11 flex justify-between max-w-[990px]">
            <p   
            className="max-w-xs w-full text-2xl lg:text-4xl font-polySansTrial font-semibold"
             style={{
              background: "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}>
                Secured with the best Encrytion.
            </p>
            <p className="hidden md:flex max-w-[219px] w-full text-base font-polySansTrial font-light text-safekeep-gray-300">
                Safekeep architectural structure allows for the fast, most secure assets overview and encrption.
            </p>
        </div>
        <div className="mt-11 h-0.5 rounded-sm bg-[#E7E7E7] w-full">
            <div className="mt-11 h-0.5 rounded-sm bg-safekeep-safeguard w-3/4"/>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
            <EtheruemLogo className="mr-3 mt-12" />
            <EtheruemLogo className="mr-3 mt-12"  />
            <EtheruemLogo className="mr-3 mt-12" />
            <EtheruemLogo className="mr-3 mt-12" />
        </div>
    </div>
  </div>
  )
}

export default Encryption;
