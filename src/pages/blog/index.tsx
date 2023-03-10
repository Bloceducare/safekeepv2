import type { NextPage } from "next";
import Head from "next/head";
import BlogHero from "@components/BlogHero";
import BlogSlider from "@components/BlogSlider";
import Blogs from "@components/Blogs";
import Tabs from "@components/tabs";
import PageLayout from "@layout/page";
import slides from "@data/blog/slides"


const tabData = ["All Articles✨", "tutorial", "safety", "product", "company"];

const Blog: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Blogs</title>
      </Head>
      <PageLayout>
        <BlogHero />

        <div className="mb-12">
          <BlogSlider slides={slides} />
        </div>
      </PageLayout>
      <div className="w-full">
        <Tabs tabArray={tabData} />
      </div>

      <PageLayout>
        <div className="grid-cols-12 gap-6 lg:grid">
          <div className="col-span-4 mb-6">
            <Blogs />
          </div>
          <div className="col-span-4 mb-6">
            <Blogs />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Blog;
