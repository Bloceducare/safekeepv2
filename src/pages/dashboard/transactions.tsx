import DashboardLayout from "@components/Layout/dashboard";
import Transaction from "@components/Dashboard/transaction";

const Vault = () => {
  return (
    <>
      <Transaction />
    </>
  );
};

Vault.PageLayout = DashboardLayout;
export default Vault;
