import { Outlet } from "react-router-dom";
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";

const Main = () => {
  return (
    <>
      {/* header*/}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
