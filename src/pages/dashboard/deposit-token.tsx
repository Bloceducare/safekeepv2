import DashboardLayout from "@components/Layout/dashboard";
import Transfer from "@components/Dashboard/Transfer";

const DepositToken = () => {
  return (
    <>
      <Transfer transferType="deposit" />
    </>
  );
};

DepositToken.PageLayout = DashboardLayout;
export default DepositToken;
