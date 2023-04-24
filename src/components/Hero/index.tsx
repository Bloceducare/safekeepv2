const HeroTemplate = ({ children }) => {
  return (
    <div className="hero-gradient py-10">
      <div className="max-w-5xl px-8 mx-auto ">
        <div
          className="flex justify-between flex-wrap h-[calc(100vh-72px)]  items-center  [&>div>p:first-child]:bg-safe-light-700 [&>div>p:first-child]:rounded-2xl [&>div>p:first-child]:text-safekeep-white [&>div>p:first-child]:md:text-xl [&>div>p:first-child]:text-sm [&>div>p:first-child]:py-2 [&>div>p:first-child]:px-4 [&>div>p:first-child]:mb-6 [&>div>p:first-child]:uppercase [&>div>p:first-child]:inline-block [&>p]:font-dmSans [&>p:last-child]:text-safekeep-gray-300 [&>div]:max-w-xl 
          [&>div>h1]:font-paralucentMedium   [&>div>h1]:lg:text-[40px] [&>div>h1]:lg:leading-[48px] [&>div>h1]:text-2xl [&>div>h1]:my-4 [&>div>h1]:text-safe-darky
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
