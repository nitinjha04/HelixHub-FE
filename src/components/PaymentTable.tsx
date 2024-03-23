import React, { FC, useState } from "react";
import CustomPagination from "./Pagination";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Button } from "@mui/material";

interface PaymentProps {
  paymentData: any | undefined;
  heading: string;
  student: boolean;
}

const PaymentTable: FC<PaymentProps> = ({ paymentData, heading, student }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<
    { date: string; id: Number; status: String; payment: Number }[]
  >([]);

  return (
    <div className="flex flex-col  px-6 py-5 row-span-9 col-span-12  rounded-default bg-white ">
      <div className=" w-full flex flex-col gap-5  ">
        <span className=" font-bold text-defaultTextColor text-xl  ">
          {heading}
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
                {student &&
                  (data.status === "Unpaid" ? (
                    <Button variant="outlined" className=" hover:bg-bgDefaultColor hover:text-white border-smallTextColor border-[1px] text-smallTextColor transform-none">
                        Pay Now
                    </Button>
                  ) : (
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
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={4}
        tableData={paymentData}
        setDataToShow={setDataToShow}
      />
    </div>
  );
};

export default PaymentTable;
