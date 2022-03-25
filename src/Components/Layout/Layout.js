import HeaderPublic from "../Common/HeaderPublic";
import Footer from "../Common/Footer";

const Layout = (props) => {
  return (
    <>
      <HeaderPublic />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
