import { useState } from "react";
import ArrowLeft from "assets/images/blog/arrow-square-left.svg";
import ArrowRight from "assets/images/blog/arrow-square-right.svg";
import SingleBlog from "./blog";
import { ISlide } from "interface";

interface IProps {
  slides: ISlide[];
}
const BlogSlider = ({ slides }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // lg:grid grid-cols-3

  return (
    <div className="max-w-screen-2xl mx-auto py-5 lg:py-[30px] flex flex-row w-full px-8 lg:px-9 justify-between items-center text-center relative">
      <button className="absolute left-0 -translate-y-1/2 lg:flex top-1/2">
        <ArrowLeft onClick={handlePrevious} />
      </button>
      <div className="relative max-w-[1242px] w-full items-center justify-center">
        <SingleBlog {...slides[currentSlide]} />
      </div>
      <button className="absolute right-0 -translate-y-1/2 lg:flex top-1/2">
        <ArrowRight onClick={handleNext} />
      </button>
    </div>
  );
};

export default BlogSlider;
