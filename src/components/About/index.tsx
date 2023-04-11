// import Encryption from "./encryption";
import AnimatedSection from "@components/AnimatedSetion";
import LineSvg from "assets/images/line.svg";
import PhoneSvg from "assets/images/phone.svg";
import SingleAbout from "./about";
import IconSlider from "./slider";

const aboutData = [
  {
    id: 0,
    title: "What happens when you Loose your wallet access and Recovery Key Phrase?",
    description: `Cryptocurrency users have misplaced about 20% of all existing tokens, due to forgotten password and keyphrases and unlike fiat currency which can potentially be recovered, it's highly
    unlikely that these tokens will not be returned to circulation.`
  },
  {
    id: 1,
    title: "How  do you secure the future of your loved ones ",
    description: `Whether it's about leaving a legacy or providing for our family's financial security, the future can feel uncertain. But with our new safekeep dApp, you can take control of your family's future like never before.
    `
  },
  {
    id: 2,
    title: "How  do you explore web3 Transaction without worrying about cross-chain or app? ",
    description: `Cryptocurrency users have misplaced about 20% of all existing tokens, due to forgotten password and keyphrases and unlike fiat currency which can potentially be recovered, it's highly unlikely that these tokens will be returned to circulation.`
  }
];
const About = () => {
  return (
    <div className="relative max-w-full w-full  ">
      <div className="relative pt-12">
        <div className="px-8 lg:px-9 mb-20">
          <p className="font-paralucentMedium text-4xl  leading-[48px] lg:text-[69px] lg:leading-[83px] text-center max-w-[729px] w-full text-white mx-auto">
            safekeep prepares you for the <span className="blog-author font-paralucentDemiBold">unexpected</span>
          </p>
          {aboutData.map(i => (           
            <div  className="pt-10 lg:pt-22 w-full lg:mb-24">
              <SingleAbout {...i} />
            </div>       
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
