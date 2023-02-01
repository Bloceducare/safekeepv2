import PageLayout from "@layout/page";
import Card from "./component/card";

const ContactUsView = () => {
  return (
    <>
      <div className="pt-12">
        <PageLayout>
          <h1 className="max-w-xl my-4 text-4xl font-light leading-tight blog-title font-paralucentLight">Can't find the answer to your question or Got A Direct Question?</h1>
          <p className="font-light font-paralucentLight text-safekeep-blue-600">Safekeep Customer Support is online 24/7 to help with your needs. </p>

          <div className="my-10">
            <button className="p-2 px-6 brand-btn-1 ">Safekeep Support</button>
          </div>

          <div>
            <div>Or send us an Email.</div>
            <div>
              <div className="relative flex max-w-sm ">
                <input className="w-full p-2 px-2 pl-8 border rounded-md " placeholder="..." />
                <img src="/contact-input.svg" className="absolute -translate-y-1/2 left-2 top-1/2" />
                <button className="flex items-center p-2 px-8 ml-8 brand-btn-1 ">
                  Send
                  <img src="/arrow-right-white.svg" alt="arrow right" className="ml-2" />
                </button>
              </div>
              <span className="text-xs font-light text-safekeep-blue-600 font-polySansTrial">*We respond almost immediately⚡️</span>
            </div>
          </div>
        </PageLayout>
        <div className="p-3 my-12 bg-safekeep-gradient-3 ">
          <div className="relative flex max-w-xs mx-auto">
            <input className="w-full p-2 px-4 border rounded-md" placeholder="Search for Questions" />
            <img src="/search-icon.svg" alt="search icon" className="absolute -translate-y-1/2 right-2 top-1/2" />
          </div>
        </div>
        <PageLayout>
          <div className="w-full">
            <div className="grid-cols-12 gap-4 lg:grid">
              {new Array(6).fill(1).map(item => (
                <div className="lg:col-span-3">
                  <Card />
                </div>
              ))}
            </div>
          </div>
        </PageLayout>
      </div>
    </>
  );
};

export default ContactUsView;
