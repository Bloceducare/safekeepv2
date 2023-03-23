import DashboardLayout from "@components/Layout/dashboard";
import VaultSetUp from "@components/VaultSetup";

const Vault = () => {
  return (
    <>
      <VaultSetUp />
    </>
  );
};

Vault.PageLayout = DashboardLayout;
export default Vault;
