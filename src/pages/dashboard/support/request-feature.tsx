import { SupportBodyContainer, SupportContainer, SupportHeader } from '@components/Dashboard/support/supportBox';
import DashboardLayout from '@components/Layout/dashboard';
import Button from '@components/primitives/button';
import InputFile from '@components/primitives/file';
import Input from '@components/primitives/input';
import TextArea from '@components/primitives/textarea';
import Feat from 'assets/images/support/feat.svg';

const RequestFeauture = () => {
  return (
    <SupportContainer>
      <SupportHeader
        icon={Feat}
        title="Request a Feature"
        description=" You can share any ideas, updates and features you feel would really make your experience on safekeep better.
                   "
      />
      <SupportBodyContainer>
        <div className="safe-darky mb-6">
          What can you call this feature
          <div className="mt-2">
            <Input
              name="name"
              placeholder="suggest a name"
              className="bg-[#F5F5F5] border-0 placeholder-safekeep-gray-300"
              placeholderClassName="placeholder-safekeep-gray-300"
            />
          </div>
        </div>
        <div className="safe-darky mb-6">
          What the feature can do.
          <div className="mt-2">
            <TextArea
              name="description"
              className="bg-[#F5F5F5] border-0 placeholder-safekeep-gray-300"
              placeholder="Tell us about the feature, any existing softwares with the feature, and  how you feel its going to help you safekeep your assets...."
            />
          </div>
        </div>
        <div className="safe-darky mb-6">
          What can you call this feature
          <div className="mt-2">
            <InputFile name="attachment" />
          </div>
        </div>

        <div className="flex gap-2 ">
          <Button type="outline" className="w-2/3">
            Cancel
          </Button>
          <Button className="w-full">Send</Button>
        </div>
      </SupportBodyContainer>
    </SupportContainer>
  );
};

RequestFeauture.PageLayout = DashboardLayout;
export default RequestFeauture;
