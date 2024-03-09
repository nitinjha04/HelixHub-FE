"use client";
import { Avatar, Button, FormControl, Input } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Header from "@/partials/Header";
import { useState } from "react";
import CustomPagination from "@/components/Pagination";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Schedule from "@/components/schedule/Schedule";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function TeacherDetails() {
  const demoData = [
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Pending",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Canceled",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
    {
      id: 12345678,
      date: "2 March 20212, 13:45 PM",
      payment: 50036,
      status: "Complete",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<
    { date: string; id: Number; status: String; payment: Number }[]
  >([]);

  return (
    <div className=" grid grid-cols-12  px-6  h-full w-full pb-4  gap-6">
      <div className=" py-6 col-span-12">
        <Header title={"Teacher Details"}>
          {" "}
          <FormControl className="w-full">
            <Input
              disableUnderline
              placeholder="Search here..."
              className=" bg-white  rounded-[40px] w-full px-3 py-1"
              startAdornment={
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                    fill="#4D44B5"
                  />
                </svg>
              }
            />
          </FormControl>
        </Header>
      </div>
      {/* <div className="grid h-full overflow-auto no-scrollbar grid-cols-12 col-span-12 lg:col-span-9   pb-6  gap-6 w-full "> */}
      <div className=" relative h-full overflow-auto no-scrollbar flex flex-col  rounded-default pb-6 col-span-12 lg:col-span-9  gap-6 w-full  bg-[#FFFFFF]">
        <div className="absolute top-0 w-full h-24 rounded-t-[20px] bg-bgDefaultColor">
          <img
            src="/profile/profileBG.svg"
            alt="profileBG"
            className=" h-24 float-end "
          />
        </div>
        <div className=" flex flex-col py-8 gap-5  px-7">
          <div className=" relative flex flex-col  gap-3 justify-start items-start">
            <Avatar className=" w-28 h-28 border-8 border-white" />
            <MoreHorizIcon className=" absolute right-0 bottom-1/2 " />
            <span className="text-defaultTextColor font-bold text-xl lg:text-3xl">
              Nabila Azalea
              <p className=" text-smallTextColor font-semibold text-lg">
                History Teacher
              </p>
            </span>
          </div>
          <div className=" gap-7 flex  w-full flex-wrap  ">
            {/* <div className=" flex flex-col lg:flex-row gap-7"> */}
            <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
              Jakarta, Indonesia
            </span>
            <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
              +91 93 1017 6922
            </span>
            {/* </div> */}
            <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
              nitinjha890@gmail.com
            </span>
          </div>
          <div className=" flex flex-col gap-4 font-bold text-xl text-defaultTextColor lg:text-2xl">
            About:
            <p className=" font-normal text-pretty   text-lg text-defaultTextColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className=" flex flex-col gap-4  font-bold text-xl text-defaultTextColor lg:text-2xl">
            Education:
            <div className=" flex flex-col gap-6 px-2 w-full">
              <div className=" gap-1 flex flex-col w-full">
                <div className="flex flex-row gap-4 font-semibold text-lg text-defaultTextColor">
                  <span className="h-1.5 w-1.5 rounded-full my-auto flex bg-defaultTextColor"></span>
                  History Major, University Akademi Historia
                </div>
                <p className="font-normal pl-5 text-lg text-smallTextColor">
                  2013-2017
                </p>
              </div>
              <div className=" gap-1 flex flex-col w-full">
                <div className="flex flex-row gap-4 font-semibold text-lg text-defaultTextColor">
                  <span className="h-1.5 w-1.5 rounded-full my-auto flex bg-defaultTextColor"></span>
                  History Major, University Akademi Historia
                </div>
                <p className="font-normal pl-5 text-lg text-smallTextColor">
                  2013-2017
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 font-bold text-xl text-defaultTextColor lg:text-2xl">
            Expertise:
            <p className=" font-normal text-lg text-defaultTextColor">
              World History, Philosophy, Prehistoric, Culture, Ancient
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Schedule />
    </div>
  );
}
