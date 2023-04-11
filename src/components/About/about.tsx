import Image from "next/image";
import PageLayout from "@layout/page";
import AnimatedSection from "@components/AnimatedSetion";

const SingleAbout = ({ title, description, id }) => {
  return (
    <PageLayout>
      <div className="p-6 bg-safekeep-blue-100 rounded-[8px] gap-4  lg:grid grid-cols-2 ">
        <div className={` col-span-1 ${id % 2 == 0 ? "" : "order-last"}`}>
          <AnimatedSection>
          <div className="w-full">
            <p className="text-2xl leading-[38px] lg:text-5xl lg:leading-[58px] font-paralucentMedium safe-darky">{title}</p>
            <p className="mt-11 text-xl font-polySansTrial ">{description}</p>
          </div>
          </AnimatedSection>
        </div>
        <div className=" mt-11 lg:mt-0 w-full  col-span-1 flex justify-center">
          <AnimatedSection>
          <Image src="/key-img-home.svg" alt="key-icon" height="480" width="480" className="rounded-[38px]" />
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
};

export default SingleAbout;
