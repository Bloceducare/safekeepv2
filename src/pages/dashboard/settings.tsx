import DashboardLayout from "@components/Layout/dashboard";

const Settings = () => {
  return (
    <div className="w-full">
      <div className="bg-safekeep-white p-6">
        <div className="text-safekeep-blue-500">General</div>
        <div className="flex justify-between">
          <div>Basic Currency</div>
          <div>Two</div>
        </div>
      </div>
    </div>
  );
};

Settings.PageLayout = DashboardLayout;

export default Settings;
