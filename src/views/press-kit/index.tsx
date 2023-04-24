import Image from '@components/primitives/image';
import GradientBtn from '@components/GradientBtn';
import Tabs from '@components/tabs';
import HeroTemplate from '@components/Hero';
import AnimatedSection from '@components/AnimatedSetion';
import Button from '@components/primitives/button';

const tabData = ['All Assets✨', 'Typography', 'Imagery', 'Iconography', 'Manual'];

const HeroPressKit = () => {
  return (
    <HeroTemplate>
      <div>
        <p>press room</p>
        <h1>Safekeep Brand Assets</h1>
        <p>
          See what others are saying about safekeep and download our media kit. Need more info or want to organize an
          interview? Email us at
        </p>
      </div>
      <div>
        <Image src="/shield.svg" width={300} height={300} />
      </div>
    </HeroTemplate>
  );
};
const PressKitView = () => {
  return (
    <>
      <HeroPressKit />

      <AnimatedSection className="px-4">
        <div className="max-w-4xl mx-auto py-20">
          <div className="text-center">
            <p className="uppercase text-safe-light-100 bg-safekeep-gray-200 rounded-full inline-block px-4 py-2 font-dmSans mb-8">
              our mission is simple
            </p>
            <h1 className="safe-darky leading-10  text-4xl max-w-xl mx-auto my-4  font-paralucentMedium">
              We make crypto assets safe to hold, trade and inherit.
            </h1>
            <p className="blog-author mb-8">Welcome to our Brand Media Kit</p>
          </div>
          <div className="flex justify-center items-center my-4">
            <div>
              <button className="mr-3 font-paralucentMedium bg-safekeep-safeguard  rounded-md  text-[#fff]  p-2 px-6">
                Download Full Kit
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <div>
        <div className="max-w-3xl mx-auto pb-12">
          <AnimatedSection>
            <div className="lg:flex lg:gap-6 items-center body mx-4  justify-between bg-safekeep-blue-100 p-6 rounded-[8px] mb-12 ">
              <div className="lg:w-1/2">
                <div className="p-4">
                  <div className="font-paralucentMedium text-4xl text-safe-dark-900">Safekeep Primary Logo</div>
                  <p className="font-dmSans text-safe-light-900 mt-10">
                    Our primary logo combines our word mark, Safekeep and a clear and distinct logo icon. Wherever
                    possible, we aim to use our primary logo in full-color. For dark backgrounds, please make sure to
                    use our Inverted Primary Logo
                  </p>
                  <Button onlyBtn className="mt-6 lg:flex hidden">
                    Download Primary logos
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="border bg-[#fff]  py-14 mb-6 flex items-center justify-center rounded-[8px] ">
                  <Image src={'/safekeep-dark-bg.svg'} width={150} height={300} alt={'safekeep-dark-bg.svg'} />
                </div>
                <div className="border bg-safekeep-darky-blue rounded-[8px] py-14 flex items-center justify-center ">
                  <Image src={'/safekeep-light-bg.svg'} width={150} height={300} alt={'safekeep-dark-bg.svg'} />
                </div>
              </div>
              <Button onlyBtn className="mt-6 lg:hidden flex mx-auto">
                Download Primary logos
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="lg:flex lg:gap-6 items-center body mx-4 lg:flex-row-reverse justify-between bg-safekeep-blue-100 p-6 rounded-[8px] mb-12 ">
              <div className="lg:w-1/2">
                <div className="p-4">
                  <div className="font-paralucentMedium text-4xl text-safe-dark-900">Safekeep Monotone Logo</div>
                  <p className="font-dmSans text-safe-light-900 mt-10">
                    When our primary or full-color logos aren’t an option, use the monotone logo that provides the most
                    contrast.
                  </p>
                  <Button onlyBtn className="mt-6 lg:flex hidden">
                    Download Primary logos
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="border bg-safekeep-gray-900  py-14 mb-6 flex items-center justify-center rounded-[8px] ">
                  <Image src={'/safekeepmonotone-dark.svg'} width={150} height={300} alt={'safekeep-dark-bg.svg'} />
                </div>
                <div className="border bg-safekeep-gray-200 rounded-[8px] py-14 flex items-center justify-center ">
                  <Image src={'/safekeepmonotone-light.svg'} width={150} height={300} alt={'safekeep-dark-bg.svg'} />
                </div>
              </div>
              <Button onlyBtn className="mt-6 lg:hidden flex mx-auto">
                Download Primary logos
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="lg:flex lg:gap-6 items-center body mx-4  justify-between bg-safekeep-blue-100 p-6 rounded-[8px] mb-12 ">
              <div className="lg:w-1/2">
                <div className="p-4">
                  <div className="font-paralucentMedium text-4xl text-safe-dark-900">Safekeep Colour System</div>
                  <p className="font-dmSans text-safe-light-900 mt-10">
                    Our primary logo combines our word mark, Safekeep and a clear and distinct logo icon. Wherever
                    possible, we aim to use our primary logo in full-color. For dark backgrounds, please make sure to
                    use our Inverted Primary Logo
                  </p>
                  <Button onlyBtn className="mt-6 lg:flex hidden">
                    Download Primary logos
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="border mb-6 flex items-center justify-center gap-3  rounded-[8px] ">
                  <div className="lg:w-[55%] p-5 flex items-end  h-40  bg-safekeep-blue font-paralucentMedium text-safekeep-white">
                    <div>
                      <p className="font-paralucentMedium mb-1">safe BlueGuard</p>
                      <p className="font-sans text-[13px] mb-1">#0123F7</p>
                      <p className="font-sans text-[13px] ">R:1 G:35 B:247</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2  bg-safekeep-hover p-5 flex items-end  h-40  font-paralucentMedium text-safekeep-darkmain">
                    <div>
                      <p className="font-paralucentMedium mb-1">safe white</p>
                      <p className="font-sans text-[13px] mb-1 text-[#898989] ">#F8F8F8</p>
                      <p className="font-sans text-[13px] text-[#898989] ">R:248 G:248 B:248</p>
                    </div>
                  </div>
                </div>
                <div className="border gap-3  rounded-[8px] py-14 flex items-center justify-center ">
                  <div className="lg:w-[26%]  bg-[#4C00C8] p-5 flex items-end  h-40  font-paralucentMedium text-safekeep-darkmain">
                    <div>
                      <p className="font-paralucentMedium mb-1 text-safekeep-white">safe pur</p>
                      <p className="font-sans text-[13px] mb-1 text-[#898989] ">#4C00C8</p>
                      <p className="font-sans text-[13px] text-[#898989] ">R: 7 G: 0 B: 200</p>
                    </div>
                  </div>
                  <div className="lg:w-[26%]  bg-[#1FF100] p-5 flex items-end  h-40  font-paralucentMedium text-safekeep-darkmain">
                    <div>
                      <p className="font-paralucentMedium mb-1 text-[#000] ">safe Green</p>
                      <p className="font-sans text-[13px] mb-1 text-[#138800] ">#1FF100</p>
                      <p className="font-sans text-[13px] text-[#138800] ">R: 3 G: 241 B: 0</p>
                    </div>
                  </div>

                  <div className="lg:w-[26%]  bg-safekeep-blue p-5 text-safekeep-white  flex items-end  h-40  font-paralucentMedium ">
                    <div>
                      <p className="font-paralucentMedium mb-1  ">Safe Darky</p>
                      <p className="font-sans text-[13px] mb-1 ">#011A91</p>
                      <p className="font-sans text-[13px] ">R: 3 G: 241 B: 0</p>
                    </div>
                  </div>

                  <div className="lg:w-[24%]  bg-[#111111] p-5 text-safekeep-white  flex items-end  h-40  font-paralucentMedium "></div>
                </div>
              </div>
              <Button onlyBtn className="mt-6 lg:hidden flex mx-auto">
                Download Primary logos
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default PressKitView;
