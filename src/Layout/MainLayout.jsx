import Footer from "../components/Shared/Footer/Footer";
import MainNav from "../components/Shared/Navbar/MainNav";
// import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
