import AboutImage from "assets/images/About/background-one.png";
import AboutImageTwo from "assets/images/About/background-two.png";
import Image from "next/image";
import SpiralOneSvg from "assets/images/About/spiral.svg";
import Navigator from "assets/images/About/navigation.svg";

const AboutHero = () => {
  return (
    <div className="w-full max-w-full py-24 lg:py-24 bg-safekeep-blue-100">
      <div className="relative max-w-full w-full">
        <div className=" px-8 lg:px-9">
          <div className="max-w-[993px] mx-auto text-center">
            <div className="pill-btn-grey inline-block text-center mx-auto font-dmSans md:text-xl text-sm ">what we do?</div>
            <p className="font-paralucentMedium text-4xl  leading-[48px] lg:text-[57px] lg:leading-[68px] text-white">
              We are Supercharging the Adoption of Web3 By Creating a Secured Vault to SAFEKEEP your Assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
