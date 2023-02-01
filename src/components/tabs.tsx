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
      <div className="p-3 my-12 bg-safekeep-gradient-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto text-sm font-light font-polySansTrial">
          {tabArray.map(item => (
            <div>
              <button onClick={() => handleSort(item)} className={`${addCurentClass(item)}`}>
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
