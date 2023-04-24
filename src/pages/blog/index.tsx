import type { NextPage } from 'next';
import Head from 'next/head';
import BlogHero from '@components/BlogHero';
import Blogs from '@components/Blogs';
import Tabs from '@components/tabs';
import PageLayout from '@layout/page';

const tabData = ['All Articles✨', 'tutorial', 'safety', 'product', 'company'];

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <BlogHero />
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full">
          <Tabs tabArray={tabData} />
        </div>

        <PageLayout>
          <Blogs />
        </PageLayout>
      </div>
    </>
  );
};

export default Blog;
