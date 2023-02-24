import DashboardLayout from "@components/Layout/dashboard";
import ConnectWallet from "@components/connectWallet";
import { GetServerSideProps } from "next";

const walletHasToken = async (address: string): Promise<boolean> => {
  return true; // Your implementation of token-gated logic goes here
};

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const { address = "" } = await siwe?.getSession?.(req, res);

//   if (!address || !(await walletHasToken(address))) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/" // Redirect if wallet does not have the required token
//       }
//     };
//   }

//   return {
//     props: {}
//   };
// };
const Dashboard = () => {
  return (
    <>
      {/* Dashboard */}
      {/* <ConnectWallet /> */}
    </>
  );
};

Dashboard.PageLayout = DashboardLayout;
export default Dashboard;
