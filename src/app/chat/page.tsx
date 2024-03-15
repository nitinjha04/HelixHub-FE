"use client";
import Header from "@/partials/Header";
import { Avatar, Button, FormControl, Input } from "@mui/material";
import React, { useEffect } from "react";
import * as io from "socket.io-client";

const Chat = () => {
  const socket = io.connect("http://localhost:53321");

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

  const sendMessage = () => {
    socket.emit("send_msg", { message: "hello" });
  };

  useEffect(() => {
    socket.on("receive_msg", (data: any) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <div className="px-6 py-6 flex flex-col gap-6">
      <Header title={"Chat"} />
      <div className="flex bg-white rounded-default w-full h-full">
        <div className="lg:w-1/4 hidden border-r-[1px] border-r-inputBoxColor  lg:flex flex-col gap-4 px-4 py-5">
          <div className=" w-full flex flex-col gap-5">
            <span className=" font-bold text-xl lg:text-2xl text-defaultTextColor ">
              Messages
            </span>
            <FormControl>
              <Input
                disableUnderline
                placeholder="Search here..."
                className=" border-[1px] border-[#A098AE] bg-white rounded-[40px] px-3 py-1"
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
          <div className=" h-full  flex flex-col gap-4">
            <span>Groups</span>
            <div className=" w-full max-h-52 flex gap-5 flex-col pb-5 overflow-auto no-scrollbar">
              {demoDataMessage.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full gap-3 border-b-[1px] border-smallTextColor pb-4"
                >
                  <div className=" flex gap-3">
                    <Avatar />
                    <span className=" text-defaultTextColor font-semibold text-sm">
                      {data.name}{" "}
                      <p className=" text-smallTextColor font-normal text-sm ">
                        {data.message.substring(0, 15)} ...
                      </p>
                    </span>
                  </div>
                  <p className=" text-smallTextColor font-normal text-sm items-start ">
                    {data.updatedAt}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" h-full  flex flex-col gap-4">
            <span>Chats</span>
            <div className=" w-full max-h-52 flex gap-5 flex-col pb-5 overflow-auto no-scrollbar">
              {demoDataMessage.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full gap-3 border-b-[1px] border-smallTextColor pb-4"
                >
                  <div className=" flex gap-3">
                    <Avatar />
                    <span className=" text-defaultTextColor font-semibold text-sm">
                      {data.name}{" "}
                      <p className=" text-smallTextColor font-normal text-sm ">
                        {data.message.substring(0, 15)} ...
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
              className=" py-3 text-center items-center bg-[#4D44B51A] w-full rounded-[40px] text-bgDefaultColor  font-bold text-lg  "
              sx={{
                textTransform: "none",
              }}
            >
              View More
            </Button>
          </div>
        </div>
        <div className="lg:w-3/4 w-full h-full flex flex-col">
          <div className="flex px-6 py-4 border-b-[1px] border-b-inputBoxColor w-full ">
            <div className=" flex gap-4">
              <Avatar className=" my-auto" />
              <span className=" font-bold text-xl lg:text-2xl text-defaultTextColor flex flex-col">
                Samantha William
                <p className=" font-normal text-lg text-smallTextColor flex gap-2">
                  <span className=" w-3 h-3 my-auto bg-green-400 rounded-full"></span>
                  Online
                </p>
              </span>
            </div>
          </div>
          <div className="border-b-[1px] border-inputBoxColor px-6 w-full h-full min-h-[29rem] lg:min-h-[34rem]"></div>
          <div className=" min-h-24 px-6 h-full w-full my-auto">
            <FormControl className=" h-full my-auto flex  w-full">
              <Input
                disableUnderline
                placeholder="Write your message..."
                className=" my-auto border-[1px] border-[#A098AE] bg-white rounded-[40px] px-6 py-3"
                endAdornment={
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
        </div>
      </div>
    </div>
  );
};

export default Chat;
