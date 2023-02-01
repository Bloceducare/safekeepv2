import React, { useState } from "react";
import Image from "next/image";

interface ISlide {
  title: string;
  description: string;
  image: string;
}
interface IProps {
  slides: ISlide[];
}
const Carousel = ({ slides }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
      {" "}
      <div className="relative">
        <div className="max-w-[46rem] mx-auto overflow-hidden w-full">
          <div className="flex items-center h-58">
            <div className="grid items-center grid-cols-10">
              <div className="col-span-4">
                <img src={slides[currentSlide]?.image} className="w-full h-auto max-h-48" alt="ims" />
              </div>
              <div className="col-span-6 px-6 font-polySansTrial">
                <h2 className="mb-3 text-2xl font-bold blog-title ">{slides[currentSlide]?.title}</h2>
                <p className="text-sm">{slides[currentSlide]?.description.slice(0, 150)}</p>
                <button className="p-2 px-4 mt-2 rounded-md bg-safekeep-blue text-safekeep-white font-paralucentLight">Read Full Story</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full -translate-y-1/2 top-1/2 ">
          <div className="flex items-center justify-between ">
            <div>
              <button onClick={handlePrevious} className="p-2 text-black bg-white rounded-full">
                <img src="/arrow-left.svg" alt="arrow-right" className="m-0" />
              </button>
            </div>
            <div>
              <button 
              onClick={handleNext} 
              className="p-2 text-black bg-white rounded-full">
                <img src="/arrow-right.svg" alt="arrow-right" className="m-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <Image src={slides[currentSlide]?.image} alt="Blog Image" className="w-full md:w-auto" />
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
            {slides[currentSlide]?.title}
          </p>
          <p className="text-base mt-9 font-polySansTrial font-lignt">{slides[currentSlide]?.description.slice(0, 150)}</p>
          <button className="mt-9 bg-safekeep-blue py-3.5 px-10 rounded-lg text-safekeep-white font-paralucentLight text-lg">Read Full Story</button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
