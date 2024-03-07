"use client";

import { LineChart } from "@/components/charts";
import { useUserStore } from "@/store/user.store";
import { Avatar, Button, FormControl, Input, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrintIcon from "@mui/icons-material/Print";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Home() {
  const router = useRouter();

  const { user, getCurrentUser } = useUserStore();

  const tableData = [
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
    {
      title: "samantha willian",
      id: "ID 123456789",
      class: "VII A",
      payment: "$ 50,036",
    },
  ];

  // for pagination

  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const studentsToShow = tableData.slice(startIndex, endIndex);

  // Determine the start and end page numbers to display
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(startPage + 2, totalPages);

  // Adjust startPage if endPage is equal to totalPages
  startPage = Math.max(1, endPage - 2);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const value = localStorage.getItem("helixhub-token");
      if (!value) {
        router.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <main className="grid grid-cols-12 w-full h-full   ">
      <div className="grid h-full overflow-auto no-scrollbar  grid-cols-12 col-span-12 lg:col-span-9 py-4 px-4 gap-5   w-full ">
        <div className=" row-span-3  col-span-12 flex  flex-col gap-5">
          <div className="  col-span-12 flex justify-between ">
            <div className="mt-auto  text-defaultTextColor font-bold text-2xl">
              Dashboard
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
          <div className="  py-8 h-full flex justify-around rounded-[20px] col-span-12 bg-[#FFFFFF]">
            <div className=" flex flex-col lg:flex-row gap-5">
              <img
                className=" w-10 h-10 mx-auto lg:mx-0 lg:h-16  lg:w-16 "
                src="/dashboard/students.svg"
                title="student"
                alt="student"
              />
              <span className=" text-[#A098AE] font-normal text-base flex flex-col  ">
                Students{" "}
                <p className=" text-defaultTextColor font-bold text-lg mx-auto lg:mx-0 lg:text-2xl">
                  849
                </p>
              </span>
            </div>
            <div className=" flex flex-col lg:flex-row gap-5">
              <img
                className=" w-10 h-10 mx-auto lg:mx-0 lg:h-16  lg:w-16 "
                src="/dashboard/teachers.svg"
                title="student"
                alt="student"
              />
              <span className=" text-[#A098AE] font-normal text-base flex flex-col  ">
                Teachers{" "}
                <p className=" text-defaultTextColor font-bold text-lg mx-auto lg:mx-0 lg:text-2xl">
                  849
                </p>
              </span>
            </div>
            <div className=" flex flex-col lg:flex-row gap-5">
              <img
                className=" w-10 h-10 mx-auto lg:mx-0 lg:h-16  lg:w-16 "
                src="/dashboard/events.svg"
                title="student"
                alt="student"
              />
              <span className=" text-[#A098AE] font-normal text-base flex flex-col  ">
                Events{" "}
                <p className=" text-defaultTextColor font-bold text-lg mx-auto lg:mx-0 lg:text-2xl">
                  849
                </p>
              </span>
            </div>
            <div className=" flex flex-col lg:flex-row gap-5">
              <img
                className=" w-10 h-10 mx-auto lg:mx-0 lg:h-16  lg:w-16 "
                src="/dashboard/foods.svg"
                title="student"
                alt="student"
              />
              <span className=" text-[#A098AE] font-normal text-base flex flex-col  ">
                Food{" "}
                <p className=" text-defaultTextColor font-bold text-lg mx-auto lg:mx-0 lg:text-2xl">
                  849
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className=" row-span-9 rounded-[20px] col-span-12 bg-[#FFFFFF]">
          <LineChart />
        </div>
        <div className=" row-span-9 gap-5 grid grid-cols-12 col-span-12 ">
          <div className="rounded-[20px] bg-[#FFFFFF] col-span-12 lg:col-span-6 "></div>
          <div className="rounded-[20px] bg-[#FFFFFF] col-span-12 lg:col-span-6 "></div>
        </div>
        <div className=" h-fit flex flex-col gap-5 px-6 py-5 overflow-auto no-scrollbar rounded-[20px] col-span-12 bg-[#FFFFFF]">
          <span className=" font-bold text-defaultTextColor text-xl ">
            Unpaid Student Intuition
          </span>
          <table className=" table-auto  min-w-[700px]">
            <tbody>
              {studentsToShow.map((student) => (
                <tr key={student.id} className="">
                  <td className="   text-defaultTextColor font-semibold text-base py-4 flex gap-6 items-center">
                    <Avatar /> {student.title}
                  </td>
                  <td className=" py-4 font-semibold text-base text-bgDefaultColor ">
                    {student.id}
                  </td>
                  <td className=" py-4 flex gap-4 ">
                    <Avatar />
                    <span className=" font-normal text-sm text-[#A098AE] flex flex-col">
                      Class
                      <p className=" text-defaultTextColor font-semibold text-base ">
                        {" "}
                        {student.class}
                      </p>
                    </span>
                  </td>
                  <td className=" py-4 text-defaultTextColor font-semibold text-base ">
                    {student.payment}
                  </td>
                  <td className=" py-4 flex gap-5">
                    <PrintIcon />
                    <MoreHorizIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex min-w-[700px] justify-between my-4">
            <span className=" flex gap-1 text-[#A098AE] font-normal text-sm my-auto">
              Showing
              <p className=" text-[#363B64]  ">
                {startIndex + 1}-{Math.min(endIndex, tableData.length)}
              </p>{" "}
              from
              <p className=" text-[#363B64]  "> {tableData.length}</p> data
            </span>
            <div className=" flex ">
              <div
                className=" my-auto pr-3 cursor-pointer"
                onClick={() => {
                  if (currentPage > 1) {
                    handlePageChange(currentPage - 1);
                  }
                }}
                disabled={currentPage === 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="21"
                  viewBox="0 0 14 21"
                  fill="none"
                >
                  <path
                    d="M11.512 20.676L1.04803 11.236C0.600033 10.852 0.600033 10.148 1.04803 9.76403L11.512 0.324027C12.184 -0.283973 13.272 0.164026 13.272 1.06003L13.272 19.94C13.272 20.836 12.184 21.284 11.512 20.676Z"
                    fill="#A098AE"
                  />
                </svg>
              </div>
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button
                  key={startPage + index}
                  className={`px-4 font-normal text-base py-2 mx-1 rounded-full ${
                    currentPage === startPage + index
                      ? "shadow-xl bg-bgDefaultColor text-white border-2 border-bgDefaultColor"
                      : " bg-white text-[#A098AE] border-2 border-[#A098AE] hover:bg-[#ECECF5] hover:text-bgDefaultColor hover:border-bgDefaultColor "
                  }`}
                  onClick={() => handlePageChange(startPage + index)}
                >
                  {startPage + index}
                </button>
              ))}
              <div
                onClick={() => {
                  if (currentPage < totalPages) {
                    handlePageChange(currentPage + 1);
                  }
                }}
                disabled={currentPage === totalPages}
                className=" my-auto pl-3 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="21"
                  viewBox="0 0 14 21"
                  fill="none"
                >
                  <path
                    d="M2.48803 0.323973L12.952 9.76397C13.4 10.148 13.4 10.852 12.952 11.236L2.48803 20.676C1.81603 21.284 0.728027 20.836 0.728027 19.94L0.728028 1.05997C0.728028 0.163973 1.81603 -0.284027 2.48803 0.323973Z"
                    fill="#A098AE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex bg-white overflow-auto no-scrollbar flex-col gap-8 px-6 py-6 hidden col-span-3 w-full">
        <div className=" h-fit flex justify-between w-full">
          <NotificationsIcon className=" items-center my-auto" />
          <SettingsIcon className=" items-center my-auto" />
          <div className=" flex gap-4 ">
            <span className=" text-defaultTextColor font-normal text-sm">
              Nabila A.
              <p className=" text-end items-end text-smallTextColor   ">
                Admin
              </p>
            </span>
            <Avatar />
          </div>
        </div>
        <div className=" h-fit flex flex-col gap-6">
          <div className=" flex w-full justify-between">
            <div className=" font-bold text-2xl  flex-col flex justify-between text-defaultTextColor">
              Recent Students
              <span className=" flex gap-1 text-smallTextColor font-medium text-sm">
                You have<p className=" font-bold"> 456</p> students
              </span>
            </div>
            <AddIcon
              fontSize="large"
              className=" my-auto bg-defaultTextColor rounded-full text-white "
            />
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex justify-between">
              <div className=" flex gap-2">
                <Avatar />
                <span className=" text-defaultTextColor font-bold text-sm">
                  Samantha William
                  <p className=" text-smallTextColor font-normal">
                    Class VII A
                  </p>
                </span>
              </div>
              <MailOutlineIcon />
            </div>
            <div className=" flex justify-between">
              <div className=" flex gap-2">
                <Avatar />
                <span className=" text-defaultTextColor font-bold text-sm">
                  Samantha William
                  <p className=" text-smallTextColor font-normal">
                    Class VII A
                  </p>
                </span>
              </div>
              <MailOutlineIcon className=" text-defaultTextColor " />
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
          <div className=" flex flex-col ">
            <span className=" text-defaultTextColor font-bold text-xl pt-3">
              Messages
            </span>
            <div className=" flex flex-col pb-5 ">
              <div className="flex gap-3 border-b-[1px] border-smallTextColor py-4">
                <Avatar />
                <span className=" text-defaultTextColor font-semibold text-sm">
                  Samantha William{" "}
                  <p className=" text-smallTextColor font-normal text-sm ">
                    Lorem ipsum dolor ...
                  </p>
                </span>
                <p className=" text-smallTextColor font-normal text-sm items-start ">
                  12:45 PM
                </p>
              </div>
              <div className="flex gap-3 border-b-[1px] border-smallTextColor py-4">
                <Avatar />
                <span className=" text-defaultTextColor font-semibold text-sm">
                  Samantha William{" "}
                  <p className=" text-smallTextColor font-normal text-sm ">
                    Lorem ipsum dolor ...
                  </p>
                </span>
                <p className=" text-smallTextColor font-normal text-sm items-start ">
                  12:45 PM
                </p>
              </div>
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
          <div className="flex flex-col">
            <span className=" text-defaultTextColor font-bold text-xl py-3">
              Current Foods Menu
            </span>
            <div className="flex flex-col pb-5">
              <div className=" flex flex-col gap-4 py-3">
                <span className=" bg-[#C1BBEB] min-h-[160px] w-full rounded-[18px]"></span>
                <span className=" font-semibold text-lg text-defaultTextColor">
                  Beef Steak with Fried Potato
                  <p className=" font-normal text-sm text-smallTextColor">
                    Lorem ipsum dolor sit amet...
                  </p>
                </span>
              </div>
              <div className=" flex flex-col gap-4 py-3">
                <span className=" bg-[#C1BBEB] min-h-[160px] w-full rounded-[18px]"></span>
                <span className=" font-semibold text-lg text-defaultTextColor">
                  Beef Steak with Fried Potato
                  <p className=" font-normal text-sm text-smallTextColor">
                    Lorem ipsum dolor sit amet...
                  </p>
                </span>
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
        </div>
      </div>
    </main>
  );
}
