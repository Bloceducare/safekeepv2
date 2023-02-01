import { useState } from "react";
import Carousel from "@components/carousel";
import Image from "next/image";
import GradientBtn from "@components/GradientBtn";
import Tabs from "@components/tabs";

const BlogCard = () => {
  return (
    <div>
      <Image src="/blog-one.svg" alt="blog image" width={300} height={300} />
      {/* <button className="blog-active-btn  font-polySansTrial text-xs mt-2">Safe Blog</button> */}

      <GradientBtn>Newest Update</GradientBtn>
      {/* <GradientBtn gradientClass="safe-gradient-glow">Newest Update</GradientBtn> */}

      <div>
        <h2 className="blog-title">Updates on the $50M Buyback Program</h2>
      </div>
    </div>
  );
};
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

const BlogPage = () => {
  const [currentCat, setCurrentCat] = useState("all");

  const handleSort = (item: string) => {
    setCurrentCat(item);
  };

  const addCurentClass = (item: string) => {
    if (item == currentCat) return "blog-active-btn";
  };
  return (
    <div className=" ">
      <div className="max-w-4xl mx-auto mt-12">
        <div className="max-w-4xl mx-auto mt-12 ">
          <div className="my-12 ">
            <button className="p-1 px-2 text-xs rounded-xl bg-safekeep-safeguard text-safe-light-100">Safe Blog</button>
            <h1 className="max-w-md my-1 text-3xl leading-tight font-paralucentLight blog-title">Discover articles and guides to help you Safegaurd your Digital Assets and More</h1>
            <p className="text-safe-dark-300">Welcome to the Safeblog</p>
          </div>
          <div className="mx-auto mt-16 ">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
      <Tabs tabArray={tabData} />
      <div className="max-w-4xl mx-auto mt-12">
        <div className="lg:grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-4">
            <BlogCard />
          </div>
          <div className="col-span-4">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
