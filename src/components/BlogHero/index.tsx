

const BlogHero = () => {
  return (
    <div className="w-full px-8 pt-20 pb-32 mx-auto max-w-screen-2xl lg:px-9 lg:">
        <button className="bg-safekeep-safeguard px-4 py-2 rounded-[30px] font-polySansTrial font-light text-safekeep-white text-[11px] leading-[11px]">Safe Blog</button>
        <p 
          className="mt-1 font-paralucentLight text-4xl  leading-[48px] lg:text-[57px] lg:leading-[68px] max-w-[753px] w-full" 
          style={{
              background: "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
        >Discover articles and guides to help you Safegaurd your Digital Assets and More</p>
        <p className="font-polySansTrial pt-2 text-lg text-[#8A90BC] lg:text-2xl">Welcome to the Safeblog</p>
    </div>
  )
}

export default BlogHero;
