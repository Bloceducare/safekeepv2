import type { NextPage } from "next";
import Head from "next/head";
import BlogHero from "@components/BlogHero";
import BlogSlider from "@components/BlogSlider";
import Blogs from "@components/Blogs";
import Tabs from "@components/tabs";
import PageLayout from "@layout/page";

const slides = [
  {
    id: 1,
    title: "Safekeep’s Partnership to Expand Interoperability ",
    description:
      "In keeping with Nexo’s impeccable track record for transparency and our promise to provide regular progress report. In keeping with Nexo’s impeccable track record for transparency and our promise to provide regular progress report. ",
    image: "/blog-two.svg"
  },
  {
    id: 2,
    title: "Green Blockchain Summit 2.0: Agenda at a Glance",
    description:
      "Ethereum’s shift to Proof of Stake consensus, known as the Merge, has dramatically cut Polygon’s carbon dioxide emissions, opening the path to going beyond being carbon negative and toward empowering others to do the same. The conversation has shifted from blockchain sustainability to blockchain as a sustaina...",
    image: "/blog-one.svg"
  }
];

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
