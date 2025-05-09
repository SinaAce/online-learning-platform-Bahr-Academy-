import React from "react";
import Logo from "../Common/Navbar/Logo";
import DarkmodeNotif from "../Common/Navbar/Darkmode&Notif";
import PanelTopMenu from "./PanelTopMenu";

const PanelNavbar = () => {
  return (
    <div className="h-14 w-full flex justify-between">
      <Logo />
      <div className="flex gap-3 whitetext items-center">
        <img src="" alt="pic" className="w-12 h-12 border rounded-full" />
        <div className="flex flex-col">
          <span>سلام سینا</span>
          <span>دانشجو</span>
        </div>
      </div>
      <PanelTopMenu />
      <DarkmodeNotif />
    </div>
  );
};

export default PanelNavbar;
