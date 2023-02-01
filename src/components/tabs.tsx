import { useState } from "react";

interface IProps {
  tabArray: string[];
}
const Tabs = ({ tabArray = [] }: IProps) => {
  const [currentCat, setCurrentCat] = useState(tabArray?.[0] as string);

  const handleSort = (item: string) => {
    setCurrentCat(item);
  };

  const addCurentClass = (item: string) => {
    if (item == currentCat) return "blog-active-btn";
  };

  return (
    <>
      <div className="flex-wrap w-full px-8 py-8 mb-10 bg-safekeep-encryption lg:px-9 lg:mb-20">
        <div className="flex items-center justify-between max-w-2xl mx-auto font-light font-polySansTrial">
          {tabArray.map(item => (
            <div>
              <button onClick={() => handleSort(item)} className={`${addCurentClass(item)}  p-[0.35rem] px-4 capitalize`}>
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
