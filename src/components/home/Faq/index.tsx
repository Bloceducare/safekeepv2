import AngleDown from "assets/images/Faq/angle-down.svg";

const Faq = () => {
  return (
    <div className="relative max-w-[1026px] w-full px-8 lg:px-9 mb-32 mx-auto flex flex-col text-black">
      <div className="text-center">
      <p className="font-paralucentMedium text-4xl leading-[48px] lg:text-[69px] lg:leading-[83px] text-safekeep-blue">FAQ</p>
      <p className="safe-darky font-dm">
      All the important questions you want answered, fast.
      </p>
      </div>
   
      <div className="mt-14">
        <div className="accordion-group">
          <div className="accordion">
            <input type="checkbox" id="toggle-15" className="accordion-toggle" />
            <label
              for="toggle-15"
              className="accordion-title text-2xl leading-[58px] font-paralucentMedium border-0"
              style={{
                background: "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
                //   @ts-ignore
                "-webkit-background-clip": " text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",          
                borderTop:"2px solid #E6F1FF",
              }}
            >
              What is Safekeep
            </label>
            <span className="accordion-icon">
              <AngleDown />
            </span>
            <div className="accordion-content text-content2 font-polySansTrial font-light text-lg">
              <div className="min-h-0">
                SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of crypto assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept
                in the Safekeep vault. - MVP and project deliverables <br /> <br />
                In the long run, we intend to develop safekeep finance up to become a blockchain powerhouse that offers it users the ability to Store, Trade, send and recieve Blockchain assets ranging
                from Crypto, Nfts, Tokens etc as well as a platforms to Swap and Bridge Assets alongside the Vault feature.
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="toggle-16" className="accordion-toggle" />
            <label
              for="toggle-16"
              className="accordion-title  text-2xl leading-[58px] font-paralucentMedium border-0"
              style={{
                background: "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
                //   @ts-ignore
                "-webkit-background-clip": " text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
                borderTop:"2px solid #E6F1FF",
              }}
            >
              How do i Protect my wallet
            </label>
            <span className="accordion-icon">
              <AngleDown />
            </span>
            <div className="accordion-content font-polySansTrial font-light text-lg">
              <div className="min-h-0">
                SafeKeep is a mobile and web blockchain application that provides easy back-up and recovery of crypto assets. It also allows for legacy inheritor(s) to be assigned crypto assets kept
                in the Safekeep vault. - MVP and project deliverables <br /> <br />
                In the long run, we intend to develop safekeep finance up to become a blockchain powerhouse that offers it users the ability to Store, Trade, send and recieve Blockchain assets ranging
                from Crypto, Nfts, Tokens etc as well as a platforms to Swap and Bridge Assets alongside the Vault feature.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
