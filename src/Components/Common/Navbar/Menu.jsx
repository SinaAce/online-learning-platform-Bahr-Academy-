import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-full w-4/12 bg-[#2F2F2F] rounded-[56px] text-[#FCFCFC] flex items-center justify-center gap-7 ml-24">
      <span>خانه</span>
      <span>دوره ها </span>
      <span>بلاگ ها</span>
      <span>درباره ما</span>
      <span className="bg-[#3772FF] p-2 rounded-3xl text-[#FCFCFC]">
        ثبت نام یا ورود
      </span>
    </div>
  );
};

export default Menu;
