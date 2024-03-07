import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/partials/Sidebar";
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>{children}</Sidebar>
        <ToastContainer />
      </body>
    </html>
  );
}
