import type { NextPage } from 'next'
import Head from 'next/head'
import BlogHero from '@components/BlogHero';
import BlogSlider from '@components/BlogSlider';
import Blogs from '@components/Blogs';

const Blog: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <BlogHero />
        <BlogSlider />
        <Blogs />
      </div>
    </div>
  );
};

export default Blog;
