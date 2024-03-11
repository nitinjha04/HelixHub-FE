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
import CustomPagination from "@/components/Pagination";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useAuthorization from "@/components/hooks/useAuthorization";
import HeaderProfile from "@/components/HeaderProfile";

export default function Admin() {
  const ProtectPage = useAuthorization(["Admin"]);

  const router = useRouter();

  const { user, getCurrentUser } = useUserStore();

  const demoDataMessage = [
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
  ];
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

  // for pagination

  const tableData = [
    {
      title: "MUnna",
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

  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<
    { title: string; id: Number; class: String; payment: Number }[]
  >([]);

  // end pagination

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "",
      headerClassName: "hideRightSeparator",
      flex: 1,
      minWidth: 246,
      renderCell: (params) => (
        <div className="   text-defaultTextColor font-semibold text-base py-4 flex gap-6 items-center">
          <Avatar /> {params.value}
        </div>
      ),
    },
    {
      field: "id",
      headerName: "",
      headerClassName: "hideRightSeparator",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className=" py-4 font-semibold text-base text-bgDefaultColor ">
          {params.value}
        </div>
      ),
    },
    {
      field: "class",
      headerName: "",
      headerClassName: "hideRightSeparator",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className=" py-4 flex gap-4 ">
          <Avatar />
          <span className=" font-normal text-sm text-[#A098AE] flex flex-col">
            Class
            <p className=" text-defaultTextColor font-semibold text-base ">
              {" "}
              {params.value}
            </p>
          </span>
        </div>
      ),
    },
    {
      field: "payment",
      headerName: "",
      headerClassName: "hideRightSeparator",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <div className=" py-4 text-defaultTextColor font-semibold text-base ">
          {params.value}
        </div>
      ),
    },
    {
      field: "action b",
      headerName: "",
      headerClassName: "hideRightSeparator",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <div className=" py-4 flex gap-5">
          <PrintIcon />
          <MoreHorizIcon />
        </div>
      ),
    },
    // Add other columns as needed
  ];

  const rows = dataToShow.map((student, index) => ({
    title: student.title,
    id: student.id,
    class: student.class,
    payment: student.payment,
    // Add other row data properties as needed
  }));

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="grid grid-cols-12 w-full h-full   ">
      <div className="grid h-full overflow-auto no-scrollbar  grid-cols-12 col-span-12 lg:col-span-9 py-4 px-6 pb-6 gap-6   w-full ">
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
          <div className="  py-8 h-full flex justify-around rounded-default col-span-12 bg-[#FFFFFF]">
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
        <div className=" row-span-9 rounded-default col-span-12 bg-[#FFFFFF]">
          <LineChart />
        </div>
        <div className=" row-span-9 gap-7 grid grid-cols-12 col-span-12 ">
          <div className="rounded-default bg-[#FFFFFF] col-span-12 lg:col-span-6 "></div>
          <div className="rounded-default bg-[#FFFFFF] col-span-12 lg:col-span-6 "></div>
        </div>
        <div className=" h-fit  flex flex-col py-5 overflow-auto no-scrollbar rounded-default col-span-12 bg-[#FFFFFF]">
          <div className=" w-full flex flex-col gap-5 px-6">
            <span className=" font-bold text-defaultTextColor text-xl  ">
              Unpaid Student Intuition
            </span>
          </div>
          <div className=" bg-white rounded-2xl ">
            <DataGrid
              sx={{
                border: "none",
                "& .MuiDataGrid-sortIcon": {
                  display: "none", // Hide sort arrow icons
                },
                "& .MuiDataGrid-colCell": {
                  "&:hover": null,
                },
                "& .MuiDataGrid-colCellTitle": {
                  display: "none", // Hide column headers
                },
                "& .MuiDataGrid-header": {
                  height: 0, // Hide header
                },
                "&.MuiDataGrid-columnSeparator": { display: "none" },
                "& .hideRightSeparator > .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator":
                  {
                    display: "none",
                  },
              }}
              className=" border-none  "
              rowHeight={100}
              columns={columns}
              rows={rows}
              disableRowSelectionOnClick
              hideFooter
              disableColumnMenu
              disableColumnFilter
            />
            <CustomPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={5}
              tableData={tableData}
              setDataToShow={setDataToShow}
            />
          </div>
        </div>
      </div>
      <div className="lg:flex bg-white overflow-auto no-scrollbar flex-col gap-8 px-6 py-6 hidden col-span-3 w-full">
        {/* <HeaderProfile /> */}
        <div className=" h-fit flex  gap-6 justify-end w-full">
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
            <span className=" my-auto flex justify-center p-2 text-center rounded-full text-white bg-defaultTextColor ">
              <AddIcon className=" my-auto text-center items-center" />
            </span>
          </div>
          <div className=" flex flex-col gap-4">
            {demoData.slice(0, 4).map((data, index) => (
              <div key={index} className=" flex justify-between">
                <div className=" flex gap-3">
                  <Avatar className="my-auto" />
                  <span className="flex flex-col font-semibold text-sm text-defaultTextColor">
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
            <div className=" w-full flex gap-5 flex-col pb-5">
              {demoDataMessage.slice(0, 4).map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full gap-3 border-b-[1px] border-smallTextColor py-4"
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
    </div>
  );
}
