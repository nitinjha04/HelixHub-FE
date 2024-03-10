"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

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
