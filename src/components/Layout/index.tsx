import Cta from "@components/home/Cta";
import Footer from "../Footer";
import Header from "../home/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Cta />
      <Footer />
    </>
  );
};

export default Layout;
