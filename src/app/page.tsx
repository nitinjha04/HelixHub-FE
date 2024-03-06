"use client";

import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   // Check if local storage is supported by the browser
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     // Retrieve the value using the key
  //     const value = localStorage.getItem("school-token");
  //     if (value) {
  //       // Key exists in local storage
  //       router.push("/");
  //     } else {
  //       // Key doesn't exist in local storage
  //       router.push("/login");
  //     }
  //   }
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
