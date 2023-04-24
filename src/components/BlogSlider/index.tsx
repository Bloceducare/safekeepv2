import { useState } from 'react';
import ArrowLeft from 'assets/images/blog/arrow-square-left.svg';
import ArrowRight from 'assets/images/blog/arrow-square-right.svg';
import SingleBlog from './blog';
import { ISlide } from 'interface';
import AnimatedSection from '@components/AnimatedSetion';

interface IProps {
  slides: ISlide[];
}
export const BlogSlider = ({ slides }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // max-w-screen-2xl mx-auto py-5 lg:py-[30px] flex flex-row w-full px-8 lg:px-9 justify-between items-center text-center relative
  return (
    <div className="max-w-screen-2xl mx-auto py-5 lg:py-[30px] px-8 lg:px-9 text-center">
      {/* <button className="absolute left-0 -translate-y-1/2 lg:flex top-1/2 hidden">
        <ArrowLeft onClick={handlePrevious} />
      </button> */}
      {/* <div className="relative max-w-[1242px] lg:flex hidden w-full items-center justify-center">
        <SingleBlog {...slides[currentSlide]} />
      </div> */}
      <div className="grid-cols-12 gap-6 lg:grid">
        {slides.map((slide) => (
          <AnimatedSection key={slide.id} className="lg:col-span-4">
            <SingleBlog {...{ className: 'mb-12 ', ...slide }} />
          </AnimatedSection>
        ))}
      </div>
      {/* <button className="absolute right-0 -translate-y-1/2 lg:flex top-1/2 hidden">
        <ArrowRight onClick={handleNext} />
      </button> */}
    </div>
  );
};

const Blog = () => {
  return <></>;
};

export default BlogSlider;
