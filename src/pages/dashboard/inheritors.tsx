import DashboardLayout from "@components/Layout/dashboard";
import Inheritors from "@components/Dashboard/inheritors";

const Vault = () => {
  return (
    <>
      <Inheritors />
    </>
  );
};

Vault.PageLayout = DashboardLayout;
export default Vault;
