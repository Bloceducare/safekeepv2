import PageLayout from "@layout/page";
import Card from "./component/card";

const ContactUsView = () => {
  return (
    <>
      <div className="pt-12">
        <PageLayout>
          <h1 className="blog-title text-4xl font-light font-paralucentLight max-w-xl leading-tight my-4">Can't find the answer to your question or Got A Direct Question?</h1>
          <p className="font-paralucentLight font-light text-safekeep-blue-600">Safekeep Customer Support is online 24/7 to help with your needs. </p>

          <div className="my-10">
            <button className="brand-btn-1 p-2 px-6 ">Safekeep Support</button>
          </div>

          <div>
            <div>Or send us an Email.</div>
            <div>
              <div className="max-w-sm relative  flex ">
                <input className="border px-2 p-2 pl-8 rounded-md w-full " placeholder="..." />
                <img src="/contact-input.svg" className="left-2 top-1/2 -translate-y-1/2 absolute" />
                <button className="brand-btn-1 ml-8 p-2 px-8  flex items-center ">
                  Send
                  <img src="/arrow-right-white.svg" alt="arrow right" className="ml-2" />
                </button>
              </div>
              <span className="text-safekeep-blue-600 text-xs font-light font-polySansTrial">*We respond almost immediately⚡️</span>
            </div>
          </div>
        </PageLayout>
        <div className="p-3 my-12 bg-safekeep-gradient-3 ">
          <div className="flex  max-w-xs mx-auto relative">
            <input className="border p-2 rounded-md w-full px-4" placeholder="Search for Questions" />
            <img src="/search-icon.svg" alt="search icon" className="absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <PageLayout>
          <div className="lg:grid grid-cols-12 gap-4">
            {new Array(8).fill(1).map(item => (
              <div className="lg:col-span-3">
                <Card />
              </div>
            ))}
          </div>
        </PageLayout>
      </div>{" "}
      <div className="pt-12">
        <PageLayout>
          <h1 className="blog-title text-4xl font-light font-paralucentLight max-w-xl leading-tight my-4">Can't find the answer to your question or Got A Direct Question?</h1>
          <p className="font-paralucentLight font-light text-safekeep-blue-600">Safekeep Customer Support is online 24/7 to help with your needs. </p>

          <div className="my-10">
            <button className="brand-btn-1 p-2 px-6 ">Safekeep Support</button>
          </div>

          <div>
            <div>Or send us an Email.</div>
            <div>
              <div className="max-w-sm relative  flex ">
                <input className="border px-2 p-2 pl-8 rounded-md w-full " placeholder="..." />
                <img src="/contact-input.svg" className="left-2 top-1/2 -translate-y-1/2 absolute" />
                <button className="brand-btn-1 ml-8 p-2 px-8  flex items-center ">
                  Send
                  <img src="/arrow-right-white.svg" alt="arrow right" className="ml-2" />
                </button>
              </div>
              <span className="text-safekeep-blue-600 text-xs font-light font-polySansTrial">*We respond almost immediately⚡️</span>
            </div>
          </div>
        </PageLayout>
        <div className="p-3 my-12 bg-safekeep-gradient-3 ">
          <div className="flex  max-w-xs mx-auto relative">
            <input className="border p-2 rounded-md w-full px-4" placeholder="Search for Questions" />
            <img src="/search-icon.svg" alt="search icon" className="absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <PageLayout>
          <div className="lg:grid grid-cols-12 gap-4">
            {new Array(8).fill(1).map(item => (
              <div className="lg:col-span-3">
                <Card />
              </div>
            ))}
          </div>
        </PageLayout>
      </div>
    </>
  );
};

export default ContactUsView;
