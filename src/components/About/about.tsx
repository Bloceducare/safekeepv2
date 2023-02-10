import Encryption from "./encryption";
import Line from "assets/images/line.svg";

const SingleAbout = () => {
  return (
    <div className="relative lg:max-w-[1457px] z-40 mx-auto w-full px-10 lg:px-24 py-11 lg:py-16 bg-safekeep-warning rounded-[38px] flex flex-col lg:flex-row justify-between place-items-end">
        <div className="lg:max-w-[475px] w-full flex flex-col">
            <div className="w-full">
                <p className="text-2xl leading-[38px] lg:text-5xl lg:leading-[58px] font-paralucentMedium">
                    What happens when you Loose your <span   
                    style={{
                    background: "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
                    //   @ts-ignore
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    "background-clip": "text",
                    "text-fill-color": "transparent"
                    }}>wallet access and Recovery Key Phrase?</span>
                </p>
                <p className="mt-11 text-sm lg:text-xl font-polySansTrial ">
                    Cryptocurrency users have misplaced about 20% of all existing tokens, due to forgotten password and keyphrases and unlike fiat currency which can potentially be recovered, it's highly unlikely that these tokens will not be returned to circulation.
                </p>
            </div>
            <div className="max-w-[425px] border-[1px] border-solid border-safekeep-shine flex p-1 items-center mt-20 lg:mt-44 h-5 rounded-3xl">
                <div className="w-2/4 bg-footer-gradient h-full rounded-3xl"/>
            </div>
        </div>
        <div className="lg:max-w-[634px] mt-11 lg:mt-0 w-full bg-footer-gradient rounded-[38px] h-[450px] lg:h-[500px] self-start">

        </div>
    </div>
  )
}

export default SingleAbout;
