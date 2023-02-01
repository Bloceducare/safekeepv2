import Image from "next/image";
import BlogImage from "assets/images/blog/blog-image.png";

const SingleBlog = () => {
  return (
   <div className="w-full flex items-center justify-center flex-col md:flex-row">
    <Image src={BlogImage} alt="Blog Image" className="w-full md:w-auto" />
    <div className=" w-full md:max-w-[552px] text-left ml-8">
        <p   
        className="text-3xl font-polySansTrial font-semibold"
        style={{
              background: "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
        >Green Blockchain Summit 2.0: Agenda at a Glance</p>
        <p className="mt-9 font-polySansTrial font-lignt text-base">Ethereum’s shift to Proof of Stake consensus, known as the Merge, has dramatically cut Polygon’s carbon dioxide emissions, opening the path to going beyond being carbon negative and toward empowering others to do the same. The conversation has shifted from blockchain sustainability to blockchain as a sustaina...</p>
        <button className="mt-9 bg-safekeep-blue py-3.5 px-10 rounded-lg text-safekeep-white font-paralucentLight text-lg">Read Full Story</button>
    </div>
   </div>
  )
}

export default SingleBlog;