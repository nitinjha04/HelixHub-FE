"use client";
import CustomPagination from "@/components/Pagination";
import Header from "@/partials/Header";
import { FormControl, Input } from "@mui/material";
import React, { useState } from "react";

const Foods = () => {
  const demoData = [
    {
      name: "Beef Steak with Fried Potato",
      rating: 4.9,
      totalOrders: 1.456,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<
    {
      name: string;
      rating: Number;
      totalOrders: Number;
    }[]
  >([]);
  return (
    <div className=" px-6 py-6 flex flex-col gap-6">
      <Header title={"Foods"}>
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

      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={5}
        tableData={demoData}
        setDataToShow={setDataToShow}
      />
    </div>
  );
};

export default Foods;
