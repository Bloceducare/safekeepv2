import type { NextPage } from "next";
import Head from "next/head";
import Hero from "components/Hero";
import About from "@components/About";
import Ecosystem from "@components/Ecosystem";
import Development from "@components/Development";
import Cta from "@components/Cta";
import Faq from "@components/Faq";
import slides from "@data/blog/slides";
import BlogSlider from "@components/BlogSlider";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>SafeKeep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <Hero />
        <About />
        <Ecosystem />
        <Development />
        <Cta />
        <Faq />
        <BlogSlider slides={slides} />
      </div>
    </div>
  );
};

export default Home;
