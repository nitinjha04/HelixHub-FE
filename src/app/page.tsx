"use client";

import { useUserStore } from "@/store/user.store";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { user, getCurrentUser } = useUserStore();

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
    <main className="grid grid-cols-12 w-full h-full ">
      <div className="grid grid-cols-12 col-span-9 py-2 px-4 gap-5 bg-[#F3F4FF]  w-full ">
        <div className=" col-span-12 ">
          <div className="h-8">Dashboard</div>
          <div></div>
        </div>
        <div className=" rounded-[20px] col-span-12 bg-[#FFFFFF]"></div>
        <div className="  gap-5 grid grid-cols-12 col-span-12 ">
          <div className="rounded-[20px] bg-[#FFFFFF] col-span-6 "></div>
          <div className="rounded-[20px] bg-[#FFFFFF] col-span-6 "></div>
        </div>
        <div className=" rounded-[20px] col-span-12 bg-[#FFFFFF]"></div>
      </div>
      <div className=" col-span-3"></div>
    </main>
  );
}
