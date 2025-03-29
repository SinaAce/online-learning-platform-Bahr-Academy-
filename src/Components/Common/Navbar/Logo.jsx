import React from "react";
import siteLogo from "../../../assets/Logo/logo.svg";
import siteLogoTitle from "../../../assets/Logo/Untitled-1 3.svg";

const Logo = () => {
  return (
    <div className="h-full flex items-center">
      <img src={siteLogo} alt="logo" />
      <img src={siteLogoTitle} alt="title" className="mt-2" />
    </div>
  );
};

export default Logo;
