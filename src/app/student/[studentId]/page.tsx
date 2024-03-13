"use client";
import { Avatar, Button, FormControl, Input } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Header from "@/partials/Header";
import { useEffect, useState } from "react";
import CustomPagination from "@/components/Pagination";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Schedule from "@/components/schedule/Schedule";
import useAuthorization from "@/components/hooks/useAuthorization";
import { useParams } from "next/navigation";
import { selectUserDetail } from "@/store/reducers/userReducer";
import { getUserDetailsAsync } from "@/store/actions/userAction";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";

export default function StudentDetails() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const userDetail = useAppSelector(selectUserDetail);
  const ProtectPage = useAuthorization(["Admin", "Teacher"]);

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

  useEffect(() => {
    const studentId = params.studentId.toString();
    dispatch(getUserDetailsAsync(studentId));
  }, [dispatch]);

  return (
    <div className=" grid grid-cols-12  px-6  h-full w-full  gap-6">
      <div className=" py-6 col-span-12">
        <Header title={"Student Details"}>
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
      {userDetail && (
        <>
          <div className=" grid h-full overflow-auto no-scrollbar grid-cols-12 col-span-12 lg:col-span-9   pb-6  gap-6 w-full ">
            <div className=" relative h-full flex flex-col justify-around rounded-default col-span-12 bg-[#FFFFFF]">
              <div className="absolute top-0 w-full h-24 rounded-t-[20px] bg-bgDefaultColor">
                <img
                  src="/profile/profileBG.svg"
                  alt="profileBG"
                  className=" h-24 float-end "
                />
              </div>
              <div className=" relative flex flex-col pt-8 px-7 gap-3 justify-start items-start">
                <Avatar className=" w-28 h-28 border-8 border-white" />
                <MoreHorizIcon className=" absolute right-0 bottom-1/2 " />

                <span className="text-defaultTextColor font-bold text-xl lg:text-3xl">
                  {userDetail.name?.first} {userDetail.name?.last}
                  <p className=" text-smallTextColor font-semibold text-lg">
                    {userDetail.role}
                  </p>
                </span>
              </div>
              <div className=" flex py-5 px-4 lg:px-0 w-full  ">
                <div className="flex flex-col md:flex-col lg:flex-row lg:justify-evenly w-full">
                  <div className="  flex flex-col gap-3 font-normal text-sm lg:text-lg text-smallTextColor">
                    Parents:
                    <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                      {userDetail.parentName?.first}
                    </span>
                  </div>
                  <div className="  flex flex-col gap-3 font-normal text-sm lg:text-lg text-smallTextColor">
                    Address
                    <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                      {/* TODO to change it dynamically  */}
                      Jakarta, Indonesia
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row flex-wrap lg:justify-evenly w-full">
                  <div className="  flex flex-col gap-3 font-normal text-sm lg:text-lg text-smallTextColor">
                    Phone
                    <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                      {userDetail?.phone?.toString().slice(0, 2)}{" "}
                      {userDetail?.phone?.toString().slice(2)}
                    </span>
                  </div>
                  <div className=" flex flex-col gap-3  font-normal text-sm lg:text-lg text-smallTextColor">
                    Email
                    <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                      {" "}
                      {userDetail.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" rounded-default bg-white flex flex-col  px-6 py-5 row-span-9 col-span-12 ">
              <div className=" w-full flex flex-col gap-5  ">
                <span className=" font-bold text-defaultTextColor text-xl  ">
                  Payment History
                </span>
              </div>
              <div className=" overflow-auto">
                <table className=" min-w-[600px] w-full pt-3 table-auto overflow-auto no-scrollbar">
                  <tbody className=" table-auto overflow-auto ">
                    {dataToShow.map((data) => (
                      <tr>
                        <th className=" flex gap-3 my-auto py-6  font-semibold text-lg text-defaultTextColor">
                          <span className="text-white bg-[#FF4550] rounded-full h-10 w-10 p-2 flex justify-center items-center ">
                            <TrendingUpIcon />
                          </span>
                          <p className=" my-auto">#{data.id.toString()}</p>
                        </th>
                        <th className=" py-6 font-normal text-sm text-smallTextColor">
                          {data.date}
                        </th>
                        <th className="  py-6 text-start item-start  font-semibold text-lg text-defaultTextColor">
                          <span className=" flex gap-1">
                            {" "}
                            <p>$</p>
                            {data.payment.toString()}
                          </span>
                        </th>
                        <th
                          className={`${
                            data.status === "Complete"
                              ? " text-[#4CBC9A] "
                              : data.status === "Canceled"
                              ? "text-[#A098AE]"
                              : "text-[#FF4550]"
                          } py-6  items-start text-start font-semibold text-lg`}
                        >
                          {data.status}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <CustomPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={4}
                tableData={demoData}
                setDataToShow={setDataToShow}
              />
            </div>
          </div>
          <Schedule />
        </>
      )}
    </div>
  );
}
