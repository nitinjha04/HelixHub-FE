"use client";
import Header from "@/partials/Header";
import { Avatar, Button, FormControl, Input } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useEffect, useState } from "react";
import CustomPagination from "@/components/Pagination";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import useAuthorization from "@/components/hooks/useAuthorization";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import { selectAllUsers } from "@/store/reducers/userReducer";
import { UserData } from "@/interface";
import { getAllUsersAsync } from "@/store/actions/userAction";

const StudentsPage = () => {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(selectAllUsers);
  console.log("allUsers", allUsers);
  const ProtectPage = useAuthorization(["Admin", "Teacher"]);

  const tableData = [
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      name: "Samanta William",
      id: 123456789,
      createdAt: "March 25,2021",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<UserData[]>([]);

  //for grade colour

  const getRandomColor = () => {
    const colors = ["#4D44B5", "#FCC43E", "#FB7D5B"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log("getRandomColor", randomColor);
    return randomColor;
  };

  // const backgroundColor = getRandomColor(colors);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerClassName: " pl-2 font-semibold text-sm text-defaultTextColor",
      headerName: "Name",
      cellClassName: "",
      minWidth: 246,
      flex: 2,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="flex gap-4">
          <Avatar />
          <p className="  my-auto font-bold text-lg text-defaultTextColor">
            {params.value}
          </p>
        </div>
      ),
    },
    {
      field: "id",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "ID",
      cellClassName: "  font-semibold text-lg text-bgDefaultColor my-auto",
      minWidth: 150,
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "date",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "Date",
      cellClassName: " font-normal text-sm text-smallTextColor my-auto",
      minWidth: 150,
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "parent",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "Parent",
      cellClassName: "font-normal text-sm text-defaultTextColor my-auto",
      minWidth: 150,
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "city",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "City",
      cellClassName: "font-normal text-sm text-defaultTextColor my-auto",
      minWidth: 150,
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "contact",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "Contact",
      cellClassName: "",
      minWidth: 100,
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "grade",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "Grade",
      cellClassName: "",
      minWidth: 150,
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params) => (
        <span
          className={`bg-[#FB7D5B] flex justify-center h-10 w-20 my-auto rounded-[40px] text-center items-center text-white font-normal text-sm`}
        >
          <p className=" my-auto text-center items-center "> {params.value}</p>
        </span>
      ),
    },
    {
      field: "action",
      headerClassName: "font-semibold text-sm text-defaultTextColor",
      headerName: "Action",
      cellClassName: "",
      flex: 1,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div>
          <MoreHorizIcon className=" text-smallTextColor " />
        </div>
      ),
    },
  ];

  const rows = dataToShow
    ? dataToShow.map((data) => ({
        name: data.name?.first || "",
        id: `#${data._id}`,
        date: data.createdAt,
        parent: data.parentName?.first || "",
        city: data.address,
        contact: "",
        grade: data.grade,
        action: "",
      }))
    : [];

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  return (
    <div className="px-6 py-6 flex flex-col gap-6">
      <Header title={"Students"} />
      <div className=" flex flex-col lg:flex-row gap-5 justify-between">
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
        <div className=" flex gap-3">
          <Button
            className=" py-1 px-5 whitespace-nowrap text-center items-center border-2 border-solid border-bgDefaultColor w-full rounded-[40px] text-bgDefaultColor  font-normal text-lg  "
            sx={{
              textTransform: "none",
            }}
          >
            Newest <ArrowDropDownIcon />
          </Button>
          <Button
            className=" py-1 px-8 whitespace-nowrap text-center items-center bg-bgDefaultColor w-full rounded-[40px] text-white  font-normal text-lg  "
            sx={{
              textTransform: "none",
            }}
          >
            <AddIcon /> New Student
          </Button>
        </div>
      </div>
      {/* <table className=" table-auto bg-white  rounded-default h-full">
        <tbody>
          <tr>
            <th>
              <input type="checkbox" title="student" />
            </th>
            <th>Name</th>
            <th>ID</th>
            <th>Date</th>
            <th>Parent Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </tbody>
        <tbody>
          {dataToShow.map((student, index) => (
            <tr key={index}>
              <td>fd</td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                {student.name}
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                {student.id}
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                {student.createdAt}
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                {student.parentName}
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                {student.city}
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                sf
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                {student.grade}
              </td>
              <td className="text-defaultTextColor font-semibold text-base py-4 mx-auto items-center">
                sdf
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
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
          tableData={allUsers || []}
          setDataToShow={setDataToShow}
        />
      </div>
    </div>
  );
};

export default StudentsPage;
