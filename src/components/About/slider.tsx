import SliderIconOne from "assets/images/slider/slider-logo-one.svg";
import SliderIconTwo from "assets/images/slider/slider-logo-two.svg";

const IconSlider = () => {
  return (
  <div className="w-full overflow-hidden">
   <div className="flex w-full pb-14">
     <div className="flex shrink-0">
        <SliderIconOne />
        <p className="font-paralucentMedium text-8xl leading-[119px] pl-4"  
         style={{
              background: "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
        >Introducing Safekeep Finance</p>
    </div>
    <div className="flex shrink-0">
        <SliderIconTwo />
        <p className="font-paralucentMedium text-8xl leading-[119px] pl-4"  
         style={{
              background: "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
        >Introducing Safekeep Finance</p>
    </div>
   </div>
   <div className="flex w-full">
     <div className="flex shrink-0">
        <SliderIconOne />
        <p className="font-paralucentMedium text-8xl leading-[119px] pl-4"  
         style={{
              background: "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
        >Introducing Safekeep Finance</p>
    </div>
    <div className="flex shrink-0">
        <SliderIconTwo />
        <p className="font-paralucentMedium text-8xl leading-[119px] pl-4"  
         style={{
              background: "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
              //   @ts-ignore
              "-webkit-background-clip": " text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
            }}
        >Introducing Safekeep Finance</p>
    </div>
   </div>
  </div>
  )
}

export default IconSlider;
