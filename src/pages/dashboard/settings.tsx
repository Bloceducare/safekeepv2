import DashboardLayout from '@components/Layout/dashboard';
import Image from '@components/primitives/image';
import Select, { SelectOption } from '@components/primitives/select';

const Settings = () => {
  return (
    <div className="w-full">
      <div className="bg-safekeep-white p-6">
        <div className="text-safekeep-blue-500 text-lg mb-6 font-paralucentMedium">General</div>
        <div className="pl-2 font-polySansTrial">
          <div className="flex mb-8 justify-between">
            <div>Basic Currency</div>
            <div>
              US
              {/* <Select name="lang">
              <div>US</div>
            </Select> */}
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <div>App Theme</div>
            <div>
              <Image src="/toggle-light.svg" width={40} height={40} />
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <div>Language</div>
            <div>
              <Select name="lang">
                <SelectOption value="eng">
                  <div>English</div>
                </SelectOption>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-10 flex flex-col justify-center mt-12 gap-4">
        <div className="w-full lg:col-span-4 bg-safekeep-white p-5">
          <div className="mb-8 text-lg text-safekeep-blue-500 font-paralucentMedium">Privacy</div>
          <div className="pl-2 font-polySansTrial">
            <div className="mb-8">Privacy Policy</div>
            <div className="mb-8">Terms of Service</div>
            <div className="mb-8">Partners</div>
          </div>
        </div>
        <div className="w-full lg:col-span-6 bg-safekeep-white p-5">
          <div className="mb-8 text-lg text-safekeep-blue-500 font-paralucentMedium">Company</div>
          <div className="pl-2 font-polySansTrial">
            <div className="mb-8">Whitepaper</div>
            <div className="mb-8">Careers</div>
            <div className="mb-8 flex justify-between">
              <div>Follow Us</div>
              <div className="flex gap-x-6">
                <div>
                  <Image src="/twitter.svg" width={20} height={10} />
                </div>
                <div>
                  <Image src="/github.svg" width={20} height={10} />
                </div>
                <div>
                  <Image src="/discord.svg" width={20} height={10} />
                </div>
                <div>
                  <Image src="/telegram.svg" width={20} height={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Settings.PageLayout = DashboardLayout;

export default Settings;
