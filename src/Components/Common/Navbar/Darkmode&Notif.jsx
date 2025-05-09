import React from "react";
import darkIcon from "../../../assets/Navbar/Vector.svg";
import notification from "../../../assets/Navbar/notification-02.svg";

const DarkmodeNotif = () => {
  return (
    <div className="h-full flex items-center gap-1">
      <div className="w-14 h-full border rounded-full flex items-center justify-center">
        <img src={notification} alt="notification" />
      </div>
      <div className="w-14 h-full border rounded-full bgblack flex items-center justify-center">
        <img src={darkIcon} alt="darkIcon" />
      </div>
    </div>
  );
};

export default DarkmodeNotif;
