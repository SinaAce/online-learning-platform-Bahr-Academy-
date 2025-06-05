import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="h-full w-4/12 bgblack rounded-[56px] whitetext flex items-center justify-center gap-7 ml-24">
      <NavLink to='/'>خانه</NavLink>
      <NavLink to="/courses">دوره ها </NavLink>
      <span>بلاگ ها</span>
      <span>درباره ما</span>
      {token ? (
        <NavLink to="/panel" className="bgblue p-2 rounded-3xl whitetext">
          پنل کاربری
        </NavLink>
      ) : (
        <NavLink to="/login" className="bgblue p-2 rounded-3xl whitetext">
          ثبت نام یا ورود
        </NavLink>
      )}
    </div>
  );
};

export default Menu;
