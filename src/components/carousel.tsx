import React, { useState } from "react";

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
            <button onClick={handleNext} className="p-2 text-black bg-white rounded-full">
              <img src="/arrow-right.svg" alt="arrow-right" className="m-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
