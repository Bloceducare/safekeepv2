import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface BenefitProps {
    bgColor: string;
    topic: string;
    text: string;
    containerLeft: boolean;
    bgImage: string | StaticImageData;
    BgSvg: any;
    firstContainer: boolean;
}

const Benefit = ({bgColor, topic, text, containerLeft, bgImage, BgSvg, firstContainer}: BenefitProps) => {
  return (
  <div className={`w-full overflow-hidden flex flex-col items-end pb-0 max-w-[725px] h-[725px] rounded-[19px] self-start mt-8 ${bgColor} ${containerLeft? "lg:self-start lg:mr-9" : "lg:self-end"} ${firstContainer? "": "lg:-mt-32"}`}>
    <div className="w-full">
        <div className="p-16">
            <BgSvg />
            <div className="max-w-[515px] mt-14">
                <p>{topic}</p>
                <p className="mt-4">
                   {text}
                </p>

            </div>
        </div>
    </div>
    <Image src={bgImage} alt="benefit Image" />

  </div>
  )
}

export default Benefit;
