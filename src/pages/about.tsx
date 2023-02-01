import type { NextPage } from "next";
import Head from "next/head";
import Faq from "@components/Faq";
import BlogSlider from "@components/BlogSlider";
import AboutHero from "@components/AboutHero";
import TextWithImage from "@components/TextWithImage";
import slides from "@data/blog/slides";

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>About US</title>
      </Head>
      <div className="w-full">
        <AboutHero />
        <Faq />
        <TextWithImage />
        <BlogSlider slides={slides} />
      </div>
    </div>
  );
};

export default About;
