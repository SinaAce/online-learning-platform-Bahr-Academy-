import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import DarkmodeNotif from "./Darkmode&Notif";

const Navbar = () => {
  return (
    <div className="w-full flex h-14 justify-between m-1">
      <Logo />
      <Menu />
      <DarkmodeNotif />
    </div>
  );
};

export default Navbar;
