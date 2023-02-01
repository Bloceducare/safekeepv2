import ArrowLeft from "assets/images/blog/arrow-square-left.svg";
import ArrowRight from "assets/images/blog/arrow-square-right.svg";
import SingleBlog from "./blog";

const BlogSlider = () => {
  return (
  <div className="max-w-screen-2xl mx-auto py-5 mb-[100px] lg:mb-[300px] lg:py-[30px] flex flex-row w-full px-8 lg:px-9 justify-between items-center text-center">
    <button className="hidden lg:flex">
        <ArrowLeft />
    </button>
     <div className="relative max-w-[1242px] w-full items-center justify-center">
        <SingleBlog />
    </div>
    <button className="hidden lg:flex">
        <ArrowRight />
    </button>
   </div>
  )
}

export default BlogSlider;