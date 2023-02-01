import Image from "next/image";
import { ISlide } from "interface";

const SingleBlog = ({ ...data }: ISlide) => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:flex-row">
      <Image width={300} height={300} src={data.image} alt="Blog Image" className="w-full md:w-auto" />
      <div className=" w-full md:max-w-[552px] text-left ml-8">
        <p
          className="text-3xl font-semibold font-polySansTrial"
          style={{
            background: "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
            //   @ts-ignore
            "-webkit-background-clip": " text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent"
          }}
        >
          {data.title}
        </p>
        <p className="text-base mt-9 font-polySansTrial font-lignt">{data.description}</p>
        <button className="mt-9 bg-safekeep-blue py-3.5 px-10 rounded-lg text-safekeep-white font-paralucentLight text-lg">Read Full Story</button>
      </div>
    </div>
  );
};

export default SingleBlog;
