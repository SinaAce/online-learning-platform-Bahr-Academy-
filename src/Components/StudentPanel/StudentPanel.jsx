import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const StudentPanel = () => {
  return (
    <div className="bg-[#242424] h-screen">
      <NavLink to="/panel">dashboard</NavLink>
      <NavLink to="/panel/profile">profile</NavLink>
      <Outlet />
    </div>
  );
};

export default StudentPanel;
