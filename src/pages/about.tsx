import type { NextPage } from "next";
import Head from "next/head";
import Faq from "@components/home/Faq";
import BlogSlider from "@components/BlogSlider";
import AboutHero from "@components/AboutHero";
import TextWithImage from "@components/TextWithImage";
import slides from "@data/blog/slides";
import Image from "@components/primitives/image";
import PageLayout from "@layout/page";

const Explainer = () => {
  return (
    <div className="flex justify-center -translate-y-16 pb-16">
      <Image className="scale-125" src={"/explainer-place.svg"} width={500} height={500} alt="placeholder" />
    </div>
  );
};

const Partners = () => {
  return (
    <PageLayout className="mb-32 ">
      <div className="text-center">
        <div className="pill-btn-grey inline-block ">Partners</div>
        <div className="lg:grid grid-cols-3 flex flex-col">
          <div className="col-span-1 justify-self-center self-center  my-10">
            <Image src={"/eth-logo.svg"} alt="eth-logo" height={150} width={150} />
          </div>
          <div className="col-span-1 justify-self-center self-center my-10">
            <Image src={"/celo-logo.svg"} alt="eth-logo" height={150} width={150} />
          </div>
          <div className="col-span-1 justify-self-center justify-items-center self-center my-10">
            <Image src={"/metamask-logo.svg"} alt="eth-logo" height={150} width={150} />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 flex justify-center flex-col">
          <div className="col-span-1 justify-self-center self-center my-10">
            <Image src={"/unstoppable-logo.svg"} alt="eth-logo" height={150} width={150} />
          </div>
          <div className="col-span-1 justify-self-center self-center my-10">
            <Image src={"/polygon-logo.svg"} alt="eth-logo" height={150} width={150} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const TeamMember = ({ name = "Daniel Ezekwe", role = "Founder & CEO", imgUrl = "/team-icon.svg" }) => {
  return (
    <div className="flex justify-center flex-col rounded-xl shadow-xl  p-4 ">
      <Image className="mx-auto" src={imgUrl} alt="eth-logo" height={70} width={70} />
      <p className="text-3xl mb-1">{name}</p>
      <p className="text-safekeep-blue-700/50 ">{role}</p>
    </div>
  );
};
const Team = () => {
  return (
    <PageLayout className="text-center">
      <div className="pill-btn-grey inline-block ">brains and minds</div>
      <div className="text-safekeep-blue text-4xl mb-10">The Safekeep Team</div>
      <div className="lg:grid grid-cols-3 flex flex-col">
        {new Array(6).fill(null).map((_, idx) => (
          <div key={idx} className="col-span-1 justify-self-center self-center  my-10">
            <TeamMember />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};
const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>About US</title>
      </Head>
      <div className="w-full">
        <AboutHero />
        <Explainer />
        <Partners />
        <Team />
        <Faq />
        <TextWithImage />
        <BlogSlider slides={slides} />
      </div>
    </div>
  );
};

export default About;
