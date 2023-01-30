import AboutImage from "assets/images/About/background-one.png";
import AboutImageTwo from "assets/images/About/background-two.png";
import Image from "next/image";
import SpiralOneSvg from "assets/images/About/spiral.svg";
import Navigator from "assets/images/About/navigation.svg";

const AboutHero = () => {
  return (
    <div className="w-full max-w-full pb-32  lg:pb-64">
        <div className="relative max-w-full w-full">
            <Image src={AboutImageTwo} alt="background Image two" className="w-full h-full -z-20" />
            <div className="absolute inset-0 w-full h-full">
            <Image src={AboutImage} alt="background Image one" className="-z-10 w-full" />
            </div>
            <div className="absolute bottom-0 w-full hidden xl:flex left-66">
                    <SpiralOneSvg className="w-full" />
                </div>
                <div className="absolute top-40 w-full hidden xl:flex left-66 z-50 px-8 lg:px-9">
                <div className="max-w-[993px] mx-auto text-center">
                    <p className="font-paralucentMedium text-4xl  leading-[48px] lg:text-[57px] lg:leading-[68px] text-white">
                        We are Supercharging the Adoption of Web3 By Creating a Secured Vault to SAFEKEEP your Assets. 
                    </p>
                    <p className="font-polySansTrial text-lg max-w-[471px] mx-auto  text-[#99B9FF]">
                        More information about safekeep development team, probably one problem and what we forsee in 10 years
                    </p>
                </div>
            </div>
        </div>
        <div className="max-w-screen-2xl mx-auto -mt-80 px-8 lg:px-9 z-[999]" style={{zIndex: "9999"}}>
            <div className="max-w-[1228px] w-full py-11 px-12 bg-header-background backdrop-blur-xl rounded-xl">
                <Navigator />
                <div className="w-full h-[500px] bg-safekeep-blue rounded-xl mt-6" />
            </div>
        </div>
    </div>
  )
}

export default AboutHero;
