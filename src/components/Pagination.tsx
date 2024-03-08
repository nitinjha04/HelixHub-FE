"use client";
import React, { useEffect } from "react";

interface PaginationProps {
  pageSize: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  tableData: any[];
  setDataToShow: (data: any[]) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  pageSize,
  currentPage,
  setCurrentPage,
  tableData,
  setDataToShow,
}) => {
  const totalPages = Math.ceil(tableData.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  // Determine the start and end page numbers to display
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(startPage + 2, totalPages);

  // Adjust startPage if endPage is equal to totalPages
  startPage = Math.max(1, endPage - 2);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const showData = tableData.slice(startIndex, endIndex);
    setDataToShow(showData);
  }, [currentPage, pageSize, tableData]);

  return (
    <div className="flex flex-col gap-6  lg:flex-row  w-full justify-between px-6 py-4">
      <span className=" lg:mx-0 mx-auto flex gap-1 text-[#A098AE] font-normal text-sm my-auto">
        Showing
        <p className=" text-[#363B64]  ">
          {startIndex + 1}-{Math.min(endIndex, tableData.length)}
        </p>{" "}
        from
        <p className=" text-[#363B64]  "> {tableData.length}</p> data
      </span>
      <div className=" lg:mx-0 mx-auto flex ">
        <div
          className={`my-auto pr-3 cursor-pointer ${
            currentPage === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          // disabled={currentPage === 1}
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
          className={`my-auto pl-3 cursor-pointer ${
            currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
          }`}
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
  );
};

export default CustomPagination;
