import Image from "next/image";
import { useRouter } from "next/router";

import blogContent from "@data/blog/content";

const Blog = () => {
  const router = useRouter();
  const { author, title, content, tags, coverImg, createdAt } = blogContent;
  return (
    <>
      <div className="max-w-2xl mx-auto px-4 pt-12">
        <button className="bg-safekeep-safeguard p-1 px-6 rounded-full text-[#fff] my-8">Back to Blog</button>
        <div className="">
          <h1 className="max-w-xl font-paralucentMedium text-5xl leading-tight">{title}</h1>
          <div className="">
            <div className="flex my-6 items-center">
              <div className="border rounded-full px-3 p-1">Newest Update⚡️</div>
              <div className="flex ml-8">
                <div className="blog-author">{author}</div>
                <div className="ml-1">{createdAt}</div>
              </div>
            </div>
            <div className="flex  justify-center my-12">
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
