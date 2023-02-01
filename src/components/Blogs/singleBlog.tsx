import Image from "next/image";
import BlogImage from "assets/images/blog/blog-image.png";

const SingleBlog = () => {
  return (
    <div className="max-w-[346px] w-full">
        <Image src={BlogImage} alt="Blog Image" className="w-full md:w-auto" />
        <button className="bg-safekeep-safeguard px-4 py-2 rounded-[30px] font-polySansTrial font-light mt-9 text-safekeep-white text-[11px] leading-[11px]">Safe Blog</button>
        <p 
           className="mt-5 font-polySansTrial text-2xl"
           style={{
              background: "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}>Updates on the $50M Buyback Program</p>
        <p className="mt-4 font-polySansTrial text-[#606060] text-base  font-light">In keeping with Nexo’s impeccable track record for transparency and our promise to provide regular progress report</p>
        <p className="mt-4">
            <span className="font-polySansTrial text-xs text-safekeep-blue font-light">Safekeep Team</span>
            <span>✨</span>
            <span className="font-polySansTrial text-xs text-[#B5B5B5] font-light">October 21, 2022</span>
        </p>
        <button className="mt-5 border border-solid border-safekeep-blue rounded-lg py-1.5 px-5 font-paralucentLight text-safekeep-blue text-base">Read more</button>
    </div>
  )
}

export default SingleBlog;
