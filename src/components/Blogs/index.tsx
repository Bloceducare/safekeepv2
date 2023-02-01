import BlogTabs from "./blogTabs";
import SingleBlog from "./singleBlog";

const Blogs = () => {
  return (
    <div className="w-full mx-auto lg:pt-40 mb-20 lg:mb-40">
        <BlogTabs />
        <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-9">
            <SingleBlog />
            {/* <button className="">
                Load More
            </button> */}
        </div>
        
    </div>
  )
}

export default Blogs;
