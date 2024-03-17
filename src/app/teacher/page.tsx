"use client";
import Header from "@/partials/Header";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Input,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useEffect, useState } from "react";
import CustomPagination from "@/components/Pagination";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useAuthorization from "@/components/hooks/useAuthorization";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import { selectAllUsers } from "@/store/reducers/userReducer";
import { UserData } from "@/interface";
import UserAction from "@/store/actions/userAction";

const Teachers = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(selectAllUsers);
  const ProtectPage = useAuthorization(["Admin"]);

  const demoData = [
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
    {
      name: "Dimitres Viga",
      subject: "Mathematics",
    },
  ];

  // for moreIcon
  const [more, setMore] = useState<null | HTMLElement>(null);
  const moreOpen = Boolean(more);

  // pagination

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<UserData[]>([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);

  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      // lg
      setPageSize(8);
    } else if (window.innerWidth >= 768) {
      // md
      setPageSize(4);
    } else {
      // sm
      setPageSize(2);
    }
  }, []);

  useEffect(() => {
    if (allUsers) {
      const filtered = allUsers.filter(
        (user) =>
          user?.name?.first?.toLowerCase().includes(search.toLowerCase()) &&
          user.role === "Teacher"
      );
      setFilteredUsers(filtered);
    }
  }, [allUsers, search]);

  useEffect(() => {
    dispatch(UserAction.getAllUsersAsync());
  }, [dispatch]);

  return (
    <div className="px-6 py-6 flex flex-col gap-6">
      <Header title={"Teachers"} />
      <div className=" flex flex-col lg:flex-row gap-5 justify-between">
        <FormControl>
          <Input
            onChange={(e) => setSearch(e.target.value)}
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
            onClick={() => router.push("/teacher/create")}
            className=" py-1 px-8 whitespace-nowrap text-center items-center bg-bgDefaultColor w-full rounded-[40px] text-white  font-normal text-lg  "
            sx={{
              textTransform: "none",
            }}
          >
            <AddIcon /> New Teacher
          </Button>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-5 h-full w-full ">
        {dataToShow.map((data, index) => (
          <div
            key={index}
            className=" z-10 relative col-span-12 md:col-span-6 lg:col-span-3 rounded-default h-full w-full justify-center items-center py-6 flex flex-col gap-4 mx-auto my-auto  bg-white"
          >
            <IconButton
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                setMore(event.currentTarget);
              }}
              className="absolute z-20 top-1 right-0  mx-0"
            >
              <MoreHorizIcon
                sx={{
                  right: 20,
                }}
              />
            </IconButton>
            <Menu
              elevation={1}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={more}
              open={moreOpen}
              onClose={() => setMore(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => router.push(`teacher/edit/${data._id}`)}>
                Edit
              </MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
            <Avatar
              className="cursor-pointer"
              onClick={() => router.push(`/teacher/${data._id}`)}
              sx={{ width: 100, height: 100 }}
            />
            <span
              onClick={() => router.push(`/teacher/${data._id}`)}
              className="cursor-pointer font-bold text-xl lg:text-2xl text-defaultTextColor "
            >
              {data.name?.first}
              <p className=" mx-auto text-center items-center font-normal text-lg text-smallTextColor">
                {data.subject}
              </p>
            </span>
            <div className="flex gap-3 pt-4">
              <span className=" p-2 bg-bgDefaultColor items-center flex justify-center   rounded-full w-10 h-10">
                <PhoneIcon className=" text-white  " />
              </span>
              <span className=" p-2 bg-bgDefaultColor items-center flex justify-center   rounded-full w-10 h-10">
                <MailOutlineIcon className=" text-white  " />
              </span>
            </div>
          </div>
        ))}
      </div>
      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        tableData={filteredUsers || []}
        setDataToShow={setDataToShow}
      />
    </div>
  );
};

export default Teachers;
