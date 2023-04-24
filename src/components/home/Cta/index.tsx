import Button from "@components/primitives/button";
import PageLayout from "@layout/page";
import Wallet from "assets/images/HomeHero/wallet.svg";
import { LazyVideo } from "react-lazy-media";
import ConnectButton from "@components/ConnectButton";

const Cta = () => {
  return (
    <>
      <PageLayout className="px-2 mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-safekeep-blue font-paralucentLight text-xl font-semibold lg:text-[40px] lg:leading-[68px]  text-center  mb-4 ">Trade and Secure Your Tokens on Safekeep </p>
            <ConnectButton>
            <Button onlyBtn className='flex font-paralucentMedium text-sm ' >
            {" "}
                <Wallet className="mr-2 " />
                Get Safekeep
            </Button>           
              </ConnectButton>           
            </div>
          </div>
          <LazyVideo autoplay={true} loop={true} controls={false} classes={["rounded-lg "]} src={"/video/cta-safekeep.mp4"} />
        </div>
        
                
      </PageLayout>
    </>
  );
};

export default Cta;
