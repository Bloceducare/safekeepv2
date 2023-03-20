import DashboardLayout from "@components/Layout/dashboard";
import ConnectWallet from "@components/connectWallet";
import Dashboard from "@components/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

DashboardPage.PageLayout = DashboardLayout;
export default DashboardPage;
