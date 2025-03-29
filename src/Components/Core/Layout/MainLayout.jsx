import { Outlet } from "react-router-dom";
import Navbar from "../../Common/Navbar/Navbar";

const MainLayout = () => {
  return <div className="w-[1440px] mx-auto">
    <Navbar />
    <Outlet />
  </div>;
};

export default MainLayout;
