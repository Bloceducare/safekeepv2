import type { NextPage } from 'next'
import Head from 'next/head'
import Faq from '@components/Faq';
import BlogSlider from '@components/BlogSlider';
import AboutHero from "@components/AboutHero"
import TextWithImage from '@components/TextWithImage';

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <AboutHero />
        <Faq />
        <TextWithImage />
        <BlogSlider />
      </div>
    </div>
  );
};

export default About;
