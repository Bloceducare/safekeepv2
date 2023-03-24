import DashboardLayout from "@components/Layout/dashboard";
import Transfer from "@components/Dashboard/Transfer";

const WithdrawToken = () => {
  return (
    <>
      <Transfer transferType="withdraw" />
    </>
  );
};

WithdrawToken.PageLayout = DashboardLayout;
export default WithdrawToken;