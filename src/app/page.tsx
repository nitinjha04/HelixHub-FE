"use client";
import { Avatar, Button, FormControl, Input } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useEffect } from "react";
import { getCurrentUserAsync } from "@/store/actions/userAction";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import { selectCurrentUserInfo } from "@/store/reducers/userReducer";

export default function Home() {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUserInfo);
  
  console.log("currentUser", currentUser);
  const demoData = [
    {
      name: "Samantha William",
      class: "VII-A",
    },
    {
      name: "Samantha William",
      class: "VII-A",
    },
    {
      name: "Samantha William",
      class: "VII-A",
    },
    {
      name: "Samantha William",
      class: "VII-A",
    },
    {
      name: "Samantha William",
      class: "VII-A",
    },
  ];

  const demoDataMessage = [
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
  ];

  return (
    <div className="grid grid-cols-12 w-full h-full ">
      <div className="grid h-full overflow-auto no-scrollbar  grid-cols-12 col-span-12 lg:col-span-9 py-4 px-3 lg:px-8 pb-6  gap-6 w-full ">
        <div className=" row-span-3  col-span-12 flex  flex-col  gap-7">
          <div className="  col-span-12 flex justify-between ">
            <div className="mt-auto  text-defaultTextColor font-bold text-2xl">
              User Dashboard
            </div>
            <FormControl>
              <Input
                disableUnderline
                placeholder="Search here..."
                className=" bg-white rounded-[40px] px-3 py-1"
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
          </div>
          {currentUser && (
            <div className=" relative h-full flex flex-col justify-around rounded-default col-span-12 bg-[#FFFFFF]">
              <div className="absolute top-0 w-full h-31 rounded-t-[20px] bg-bgDefaultColor">
                <img
                  className="float-right"
                  src="/profile/profileBG.svg"
                  alt="profileBG"
                />
              </div>
              <div className=" flex flex-col pt-8 px-7 gap-3 justify-start items-start">
                <Avatar className=" w-28 h-28 border-8 border-white" />
                <span className="text-defaultTextColor font-bold text-xl lg:text-3xl">
                  {currentUser?.name?.first} {currentUser?.name?.last}
                </span>
              </div>
              <div className="flex flex-row py-2 pb-3 px-7 justify-between lg:justify-normal lg:gap-24 ">
               <div className=" flex flex-col lg:flex-row justify-between gap-7 lg:gap-24">
                  <div className=" flex flex-col gap-3 text-defaultTextColor font-semibold text-lg">
                    {currentUser.role}
                    <span className=" font-normal text-lg text-smallTextColor">
                      {currentUser.address}
                    </span>
                  </div>
                  <div className="  flex flex-col gap-3 font-normal text-lg text-smallTextColor">
                    Phone
                    <span className=" text-defaultTextColor font-semibold text-lg">
                      {currentUser?.phone?.toString().slice(0, 2)}{" "}
                      {currentUser?.phone?.toString().slice(2)}
                    </span>
                  </div>
               </div>
                <div className=" flex flex-col gap-3  font-normal text-lg text-smallTextColor">
                  Email
                  <span className=" text-defaultTextColor font-semibold text-lg">
                    {" "}
                    {currentUser.email}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" row-span-9 gap-6 grid grid-cols-12 col-span-12 ">
          <div className=" flex flex-col gap-8 w-full px-6 py-3 rounded-default bg-[#FFFFFF] col-span-12 lg:col-span-6 ">
            <div className=" flex justify-between">
              <div className=" text-defaultTextColor flex flex-col gap-1 font-bold text-xl lg:text-2xl text ">
                Contacts
                <span className=" flex gap-1 font-normal text-smallTextColor text-base">
                  You have
                  <p className="font-semibold text-defaultTextColor">741</p>
                  contacts
                </span>
              </div>
              <span className=" my-auto flex justify-center p-2 text-center rounded-full text-white bg-bgDefaultColor ">
                <AddIcon className=" my-auto text-center items-center" />
              </span>
            </div>
            <FormControl className="w-full">
              <Input
                disableUnderline
                placeholder="Search here..."
                className=" bg-white border-[1px] border-smallTextColor rounded-[40px] w-full px-3 py-1"
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
            <div className=" flex gap-5 flex-col">
              {demoData.slice(0, 5).map((data, index) => (
                <div key={index} className=" flex justify-between">
                  <div className=" flex gap-3">
                    <Avatar className="my-auto" />
                    <span className="flex flex-col font-semibold text-lg text-defaultTextColor">
                      {data.name}
                      <p className="font-normal text-sm text-smallTextColor">
                        Class {data.class}
                      </p>
                    </span>
                  </div>
                  <span className=" p-2 border-[1px] items-center flex justify-center border-smallTextColor  rounded-full w-10 h-10">
                    <MailOutlineIcon className=" text-smallTextColor  " />
                  </span>
                </div>
              ))}
            </div>
            <Button
              className=" py-3 mt-auto text-center items-center bg-[#4D44B51A] w-full rounded-[40px] text-bgDefaultColor  font-bold text-lg  "
              sx={{
                textTransform: "none",
              }}
            >
              View More
            </Button>
          </div>
          <div className="  flex flex-col gap-8 w-full px-6 py-3 rounded-default bg-[#FFFFFF] col-span-12 lg:col-span-6 ">
            <div className=" text-defaultTextColor  font-bold text-xl lg:text-2xl ">
              Messages
            </div>
            <FormControl className="w-full">
              <Input
                disableUnderline
                placeholder="Search here..."
                className=" bg-white border-[1px] border-smallTextColor rounded-[40px] w-full px-3 py-1"
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
            <div className=" w-full flex gap-4 flex-col">
              {demoDataMessage.slice(0, 5).map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full gap-3 border-b-[1px] border-smallTextColor pb-4"
                >
                  <div className=" flex gap-3">
                    <Avatar />
                    <span className=" text-defaultTextColor font-semibold text-sm">
                      {data.name}{" "}
                      <p className=" text-smallTextColor font-normal text-sm ">
                        {data.message.substring(0, 27)} ...
                      </p>
                    </span>
                  </div>
                  <p className=" text-smallTextColor font-normal text-sm items-start ">
                    {data.updatedAt}
                  </p>
                </div>
              ))}
            </div>
            <Button
              className=" py-3 mt-auto  text-center items-center bg-[#4D44B51A] w-full rounded-[40px] text-bgDefaultColor  font-bold text-lg  "
              sx={{
                textTransform: "none",
              }}
            >
              View More
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:flex bg-white overflow-auto no-scrollbar flex-col gap-8 px-6 py-6 hidden col-span-3 w-full">
        <div className=" h-fit flex gap-6 justify-end w-full">
          <NotificationsIcon className=" items-center my-auto" />
          <SettingsIcon className=" items-center my-auto" />
          {currentUser && (
            <div className=" flex gap-4 ">
              <span className=" text-defaultTextColor font-normal text-sm">
                {currentUser.name?.first}.
                <p className=" text-end items-end text-smallTextColor   ">
                  {currentUser.role}
                </p>
              </span>
              <Avatar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
