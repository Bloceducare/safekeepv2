import Image from "next/image";
import GradientBtn from "@components/GradientBtn";
import Tabs from "@components/tabs";

const tabData = ["All Assets✨", "Typography", "Imagery", "Iconography", "Manual"];

const PressKitView = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <GradientBtn>Newest Update</GradientBtn>
          <h1 className="blog-title  text-3xl max-w-xl mx-auto my-4  font-paralucentLight">We make crypto assets safe and trustworthy for you to hodl, store and use as a means of value transfer</h1>
          <p className="blog-author">Welcome to our Brand Media Kit</p>
        </div>
        <div className="flex justify-center items-center my-4">
          <div>
            <button className="mr-3 bg-safekeep-safeguard  rounded-md  text-[#fff]  p-2 px-6 ">Download Manual</button>
            <button className="mr-3 bg-safekeep-safeguard  rounded-md  text-[#fff]  p-2 px-6">Download Kit</button>
          </div>
        </div>
      </div>
      <div>
        <Tabs tabArray={tabData} />
        <div className="max-w-3xl mx-auto">
          <div className="lg:grid grid-cols-12 gap-6">
            {/* {logoArray.map(item => (
              <div className="col-span-6 flex items-center justify-center border py-14">
                <div className="">
                  <Image src={item} width={150} height={300} alt={item} />
                </div>
              </div>
            ))} */}

            <div className="col-span-6 flex items-center justify-center border py-14 mb-6">
              <div className="">
                <Image src={"/safekeep-dark-bg.svg"} width={150} height={300} alt={"safekeep-dark-bg.svg"} />
              </div>
            </div>
            <div className="col-span-6 flex items-center justify-center border py-14 bg-safekeep-darky-blue mb-6">
              <div className="">
                <Image src={"/safekeep-light-bg.svg"} width={150} height={300} alt={"safekeep-dark-bg.svg"} />
              </div>
            </div>
            <div className="col-span-6 flex items-center justify-center border py-14 bg-safekeep-gray-900">
              <div className="">
                <Image src={"/safekeepmonotone-dark.svg"} width={150} height={300} alt={"safekeep-dark-bg.svg"} />
              </div>
            </div>

            <div className="col-span-6 flex items-center justify-center border py-14 bg-safekeep-gray-200">
              <div className="">
                <Image src={"/safekeepmonotone-light.svg"} width={150} height={300} alt={"safekeep-dark-bg.svg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressKitView;
