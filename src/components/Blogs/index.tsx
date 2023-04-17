import BlogSlider from "@components/BlogSlider";
import slides from "@data/blog/slides";
import AnimatedSection from "@components/AnimatedSetion";



const Blog = ()=>{
    return (
      <>
     <AnimatedSection>
         <div className="text-center mb-8">
        <p className="font-paralucentMedium text-4xl leading-[48px] lg:text-[69px] lg:leading-[83px] text-safekeep-blue">Safekeep Blog</p>
        <p className="safe-darky font-dm">
        Discover articles and guides to help you Safegaurd your Digital Assets and More
        </p>
        </div>
         <BlogSlider slides={slides} />
         </AnimatedSection>
         
      </>
    )
  }


  export default Blog