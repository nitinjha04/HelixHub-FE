"use client";
import {
  Avatar,
  FormControl,
  IconButton,
  Input,
  Menu,
  MenuItem,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Header from "@/partials/Header";
import { useEffect, useState } from "react";
import Schedule from "@/components/schedule/Schedule";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useAuthorization from "@/components/hooks/useAuthorization";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import { selectUserDetail } from "@/store/reducers/userReducer";
import UserAction from "@/store/actions/userAction";

export default function TeacherDetails() {
  const ProtectPage = useAuthorization(["Admin"]);
  const router = useRouter();
  const params = useParams();
  const dispatch = useAppDispatch();
  const userDetail = useAppSelector(selectUserDetail);

  // for moreIcon
  const [more, setMore] = useState<null | HTMLElement>(null);
  const moreOpen = Boolean(more);

  useEffect(() => {
    const teacherId = params.teacherId.toString();
    dispatch(UserAction.getUserDetailsAsync(teacherId));
  }, [dispatch]);

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
      <div className=" relative h-full overflow-auto no-scrollbar flex flex-col  rounded-default pb-6 col-span-12 lg:col-span-9  gap-6 w-full  bg-[#FFFFFF]">
        <div className="absolute top-0 w-full h-24 rounded-t-[20px] bg-bgDefaultColor">
          <img
            src="/profile/profileBG.svg"
            alt="profileBG"
            className=" h-24 float-end "
          />
        </div>
        {userDetail && (
          <div className=" flex flex-col py-8 gap-5  px-7">
            <div className=" relative flex flex-col  gap-3 justify-start items-start">
              <Avatar className=" w-28 h-28 border-8 border-white" />
              <IconButton
                className=" absolute right-0 bottom-1/2 "
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setMore(event.currentTarget);
                }}
              >
                <MoreHorizIcon />
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
                <MenuItem onClick={() => router.push(`edit/${userDetail._id}`)}>
                  Edit
                </MenuItem>
                <MenuItem>Delete</MenuItem>
              </Menu>
              <span className="text-defaultTextColor font-bold text-xl lg:text-3xl">
                {userDetail.name?.first} {userDetail.name?.last}
                <p className=" text-smallTextColor font-semibold text-lg">
                  {userDetail.subject} Teacher
                </p>
              </span>
            </div>
            <div className=" gap-7 flex  w-full flex-wrap  ">
              <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                {/* TODO to change it dynamically */}
                Jakarta, Indonesia
              </span>
              <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                {userDetail?.phone?.toString().slice(0, 2)}{" "}
                {userDetail?.phone?.toString().slice(2)}
              </span>
              <span className=" text-defaultTextColor font-semibold text-sm lg:text-lg">
                {userDetail.email}
              </span>
            </div>
            <div className=" flex flex-col gap-4 font-bold text-xl text-defaultTextColor lg:text-2xl">
              About:
              <p className=" font-normal text-pretty   text-lg text-defaultTextColor">
                {userDetail.about}
              </p>
            </div>
            <div className=" flex flex-col gap-4  font-bold text-xl text-defaultTextColor lg:text-2xl">
              Education:
              <div className=" flex flex-col gap-6 px-2 w-full">
                {userDetail?.education?.map((data, index) => (
                  <div key={index} className=" gap-1 flex flex-col w-full">
                    <div className="flex flex-row gap-4 font-semibold text-lg text-defaultTextColor">
                      <span className="h-1.5 w-1.5 rounded-full my-auto flex bg-defaultTextColor"></span>
                      {data.degree}, {data.university}
                    </div>
                    <p className="font-normal pl-5 text-lg text-smallTextColor">
                      {data.degreeStartDate}-{data.degreeEndDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-4 font-bold text-xl text-defaultTextColor lg:text-2xl">
              Expertise:
              <p className=" font-normal text-lg text-defaultTextColor">
                {userDetail.expertise}
              </p>
            </div>
          </div>
        )}
      </div>
      <Schedule />
    </div>
  );
}
