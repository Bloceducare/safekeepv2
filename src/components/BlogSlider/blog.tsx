import Image from "next/image";
import { ISlide } from "interface";
import Button from "@components/primitives/button";

const SingleBlog = ({ ...data }: ISlide & {className?:string}) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full md:flex-row ${data?.className}`}>
      <Image width={300} height={300} src={data.image} alt="Blog Image" className="w-full md:w-auto" />
      <div className=" w-full md:max-w-[552px] text-left ml-8">
        <p
          className="text-2xl  font-polySansTrial"
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
     
        <p className="text-base mt-9 font-polySansTrial text-safekeep-gray-400">{data.description}</p>
        <div className="flex my-8">
          <div className="mr-2 safe-darky">Safekeep Team ✨</div>
          <div className="text-safekeep-gray-200"> October 21, 2022</div>
        </div>
        <Button type="outline" onlyBtn className="mt-8">
        Read More
        </Button>
      </div>
    </div>
  );
};

export default SingleBlog;
