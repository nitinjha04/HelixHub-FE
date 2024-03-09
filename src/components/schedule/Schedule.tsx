import { Avatar } from "@mui/material";
import React from "react";

const Schedule = () => {
  return (
    <div className="lg:flex flex-col gap-5 overflow-auto no-scrollbar   hidden col-span-3 w-full">
      <div className="   rounded-default flex flex-col gap-2 bg-white text-defaultTextColor font-bold text-xl lg:text-2xl  px-5 py-5">
        Schedule Details
        <p className=" font-normal text-sm text-smallTextColor">
          Thursday, 10th April , 2021
        </p>
      </div>
      <div className="  border-l-[24px] border-l-bgDefaultColor flex flex-col gap-7 rounded-default px-5 py-3 bg-white">
        <span className="flex flex-col font-semibold text-lg text-defaultTextColor">
          Basic Algorithm
          <p className="font-normal text-sm text-smallTextColor">Algorithm</p>
        </span>
        <div className=" flex  justify-between">
          <div className=" flex justify-start items-start flex-col gap-1">
            <span className="flex gap-2 px-[2px]">
              <img
                src="/profile/calendar.svg"
                alt="calendar"
                className="  mx-auto "
              />
              <p className="font-normal text-sm text-smallTextColor">
                September 20, 2021
              </p>
            </span>
            <span className="flex gap-2">
              <img
                src="/profile/clock.svg"
                alt="clock"
                className="  mx-auto "
              />
              <p className="font-normal text-sm text-smallTextColor">
                09.00 - 10.00 AM
              </p>
            </span>
          </div>
          <Avatar className=" float-end my-auto xl:flex hidden" />
        </div>
      </div>
      <div className="  border-l-[24px] border-l-bgDefaultColor flex flex-col gap-7 rounded-default px-5 py-3 bg-white">
        <span className="flex flex-col font-semibold text-lg text-defaultTextColor">
          Basic Algorithm
          <p className="font-normal text-sm text-smallTextColor">Algorithm</p>
        </span>
        <div className=" flex  justify-between">
          <div className=" flex justify-start items-start flex-col gap-1">
            <span className="flex gap-2 px-[2px]">
              <img
                src="/profile/calendar.svg"
                alt="calendar"
                className="  mx-auto "
              />
              <p className="font-normal text-sm text-smallTextColor">
                September 20, 2021
              </p>
            </span>
            <span className="flex gap-2">
              <img
                src="/profile/clock.svg"
                alt="clock"
                className="  mx-auto "
              />
              <p className="font-normal text-sm text-smallTextColor">
                09.00 - 10.00 AM
              </p>
            </span>
          </div>
          <Avatar className=" float-end my-auto xl:flex hidden" />
        </div>
      </div>
      <div className="  border-l-[24px] border-l-bgDefaultColor flex flex-col gap-7 rounded-default px-5 py-3 bg-white">
        <span className="flex flex-col font-semibold text-lg text-defaultTextColor">
          Basic Algorithm
          <p className="font-normal text-sm text-smallTextColor">Algorithm</p>
        </span>
        <div className=" flex  justify-between">
          <div className=" flex justify-start items-start flex-col gap-1">
            <span className="flex gap-2 px-[2px]">
              <img
                src="/profile/calendar.svg"
                alt="calendar"
                className="  mx-auto "
              />
              <p className="font-normal text-sm text-smallTextColor">
                September 20, 2021
              </p>
            </span>
            <span className="flex gap-2">
              <img
                src="/profile/clock.svg"
                alt="clock"
                className="  mx-auto "
              />
              <p className="font-normal text-sm text-smallTextColor">
                09.00 - 10.00 AM
              </p>
            </span>
          </div>
          <Avatar className=" float-end my-auto xl:flex hidden" />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
