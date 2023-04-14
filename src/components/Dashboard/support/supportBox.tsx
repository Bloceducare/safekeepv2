import Input from '@components/primitives/input';

export const SupportContainer = ({ children }) => {
  return <div className="max-w-xl w-full">{children}</div>;
};
const Blank = () => <></>;
export const SupportHeader = ({ icon: Icon = Blank, title, description }) => {
  return (
    <>
      <div>
        <div className="flex">
          <Icon />
          <div className="text-safekeep-blue-500 font-paralucentMedium ml-1">{title}</div>
        </div>

        <div className="text-safe-dark-300 text-sm my-4">{description}</div>
      </div>
    </>
  );
};

export const SupportBodyContainer = ({ children }) => {
  return <div className="bg-safekeep-white w-full p-5 rounded-[8px]">{children}</div>;
};

export const SupportInput = ({ name, title }) => {
  return (
    <>
      <div className="safe-darky mb-6">
        {title}
        <div className="mt-2">
          <Input
            name={name}
            placeholder="suggest a name"
            className="bg-[#F5F5F5] border-0 placeholder-safekeep-gray-300"
            placeholderClassName="placeholder-safekeep-gray-300"
          />
        </div>
      </div>
    </>
  );
};

const SupportBox = () => {
  return <></>;
};
SupportBox.SupportInput = SupportInput;
SupportBox.SupportBodyContainer = SupportBodyContainer;
SupportBox.SupportHeader = SupportHeader;
SupportBox.SupportContainer = SupportContainer;

export default SupportBox;
