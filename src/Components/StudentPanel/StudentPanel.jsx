import React from "react";
import { Outlet } from "react-router-dom";
import PanelNavbar from "./PanelNavbar";
import PanelSideMenu from "./PanelSideMenu";
import Dashboard from "./Dashboard";

const StudentPanel = () => {
  return (
    <div className="bg-[#242424] h-screen">
      <PanelNavbar />
      <div className="flex gap-10 m-5">
        <PanelSideMenu />
        <div className="border border-yellow-500 w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentPanel;
