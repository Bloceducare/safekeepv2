import Encryption from "./encryption";
import LineSvg from "assets/images/line.svg";
import PhoneSvg from "assets/images/phone.svg";
import SingleAbout from "./about";
import IconSlider from "./slider";

const About = () => {
  return (
    <div className="relative max-w-full w-full pt-64 pb-56 bg-safekeep-safeguard">
        <Encryption />
        <div className="relative pt-56">
          <div className="px-8 lg:px-9 mb-20">
              <p className="font-paralucentMedium text-4xl  leading-[48px] lg:text-[69px] lg:leading-[83px] text-center max-w-[729px] w-full text-white mx-auto">
                safekeep prepares you for the <span className="text-[#FBF8B0]  font-paralucentDemiBold">unexpected</span>
            </p>
            <div className="pt-20 lg:pt-44 w-full">
                <SingleAbout />
            </div>
          </div>
            <div className="absolute inset-0 w-full h-full ">
                <div className="max-w-5xl w-full h-full text-[#81C8FF] flex justify-between mx-auto">
                    <LineSvg className="h-full" />
                    <LineSvg className="h-full" />
                    <LineSvg className="h-full" />
                    <LineSvg className="h-full" />
                </div>
            </div>
        </div>
        <div className="px-8 lg:px-9">
            <PhoneSvg className="w-full" />
        </div>
            <IconSlider />
    </div>
  )
}

export default About;
