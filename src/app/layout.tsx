"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useEffect } from "react";
import { useAppSelector } from "@/components/hooks/reduxHook";
import { selectCurrentUserInfo } from "@/store/reducers/userReducer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();


  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const value = localStorage.getItem("helixhub-token");
      if (!value) {
        router.push("/login");
      }
    }
  }, []);

  

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Sidebar>{children}</Sidebar>
          <ToastContainer />
        </body>
      </html>
    </Provider>
  );
}
