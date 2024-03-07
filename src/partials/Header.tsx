import React from "react";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <div className=" flex justify-between w-full">
      <span className=" text-defaultTextColor font-bold text-xl lg:text-4xl">Students</span>
      <div className=" h-fit flex gap-4">
        <NotificationsIcon className=" items-center my-auto" />
        <SettingsIcon className=" items-center my-auto" />
        <div className=" flex gap-4 ">
          <span className=" text-defaultTextColor font-normal text-sm">
            Nabila A.
            <p className=" text-end items-end text-smallTextColor   ">Admin</p>
          </span>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
