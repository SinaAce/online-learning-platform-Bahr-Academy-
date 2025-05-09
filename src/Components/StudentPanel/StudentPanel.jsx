import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PanelNavbar from "./PanelNavbar";
import PanelSideMenu from "./PanelSideMenu";
import Dashboard from "./Dashboard";
import axios from "../../API/ApiConfig";

const StudentPanel = () => {
  const [userInfo, setUserInfo] = useState("");

  const user = async () => {
    try {
      const res = await axios.get("/SharePanel/GetProfileInfo");
      setUserInfo(res.data);
    } catch {
      console.log("data error ...");
    }
  };

  useEffect(() => {
    user();
  }, []);
  return (
    <div className="bg-[#242424] h-screen">
      <PanelNavbar userInfo={userInfo}/>
      <div className="flex gap-10 m-5">
        <PanelSideMenu />
        <div className="border border-yellow-500 w-4/5">
          <Outlet context={{ userInfo }} />
        </div>
      </div>
    </div>
  );
};

export default StudentPanel;
