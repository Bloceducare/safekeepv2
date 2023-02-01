import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import blogContent from "@data/blog/content";

const Blog = () => {
  const router = useRouter();
  const { author, title, content, tags, coverImg, createdAt } = blogContent;

  return (
    <>
      <Head>
        <title>Blog - {router.query.slug} </title>
      </Head>
      <div className="max-w-2xl px-4 pt-12 mx-auto">
        <button onClick={() => router.push("/blog")} className="bg-safekeep-safeguard p-1 px-6 rounded-full text-[#fff] my-8">
          Back to Blog
        </button>
        <div className="">
          <h1 className="max-w-xl text-5xl leading-tight font-paralucentMedium">{title}</h1>
          <div className="">
            <div className="flex flex-wrap items-center my-6">
              <div className="p-1 px-3 border rounded-full">Newest Update⚡️</div>
              <div className="flex mt-2 lg:ml-8 lg:mt-0 ">
                <div className="blog-author">{author}</div>
                <div className="ml-1">{createdAt}</div>
              </div>
            </div>
            <div className="flex justify-center my-12">
              <Image src={coverImg} width={600} height={600} alt="cover im" />
            </div>
            <div className="prose">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div  class="[&>div]:my-4">${content} </div>`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
