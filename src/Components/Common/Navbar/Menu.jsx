import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-full w-4/12 bgblack rounded-[56px] whitetext flex items-center justify-center gap-7 ml-24">
      <span>خانه</span>
      <span>دوره ها </span>
      <span>بلاگ ها</span>
      <span>درباره ما</span>
      <span className="bgblue p-2 rounded-3xl whitetext">ثبت نام یا ورود</span>
    </div>
  );
};

export default Menu;
