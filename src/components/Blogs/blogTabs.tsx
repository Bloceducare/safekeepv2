

const BlogTabs = () => {
  return (
    <div className="w-full bg-safekeep-encryption py-8 px-8 lg:px-9 mb-10 lg:mb-20 overflow-hidden">
        <div className=" max-w-[735px] w-full mx-auto flex justify-between items-center overflow-x-auto">
            <button className="bg-safekeep-safeguard px-6 py-2 rounded-[30px] font-polySansTrial font-light text-safekeep-white text-base mr-3 shrink-0">
                All Articles✨
            </button>
            <p className="font-polySansTrial font-light text-base mr-3 shrink-0">
                Safety Related
            </p>
            <p className="font-polySansTrial font-light text-base mr-3 shrink-0">
                Tutorials
            </p>
            <p className="font-polySansTrial font-light text-base mr-3 shrink-0">
                Product
            </p>
            <p className="font-polySansTrial font-light text-base mr-3 shrink-0">
                Company
            </p>
        </div>
    </div>
  )
}

export default BlogTabs;
