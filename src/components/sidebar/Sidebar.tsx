"use client";

import { Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { getCurrentUserAsync } from "@/store/actions/userAction";
import { selectCurrentUserInfo } from "@/store/reducers/userReducer";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUserInfo);


  const UserNavigation = [
    {
      index: 1,
      title: "Dashboard",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M28.3334 10.3333L18.3334 1.56668C17.4167 0.746752 16.2299 0.293457 15 0.293457C13.7701 0.293457 12.5834 0.746752 11.6667 1.56668L1.6667 10.3333C1.13732 10.8068 0.714869 11.3876 0.427489 12.0371C0.140109 12.6866 -0.00560967 13.3898 3.59199e-05 14.1V28.6667C3.59199e-05 29.9928 0.52682 31.2645 1.4645 32.2022C2.40218 33.1399 3.67395 33.6667 5.00004 33.6667H25C26.3261 33.6667 27.5979 33.1399 28.5356 32.2022C29.4733 31.2645 30 29.9928 30 28.6667V14.0833C30.0033 13.3759 29.8564 12.6759 29.5691 12.0295C29.2818 11.383 28.8606 10.8049 28.3334 10.3333ZM18.3334 30.3333H11.6667V22C11.6667 21.558 11.8423 21.1341 12.1549 20.8215C12.4674 20.5089 12.8913 20.3333 13.3334 20.3333H16.6667C17.1087 20.3333 17.5326 20.5089 17.8452 20.8215C18.1578 21.1341 18.3334 21.558 18.3334 22V30.3333ZM26.6667 28.6667C26.6667 29.1087 26.4911 29.5326 26.1785 29.8452C25.866 30.1577 25.4421 30.3333 25 30.3333H21.6667V22C21.6667 20.6739 21.1399 19.4022 20.2022 18.4645C19.2646 17.5268 17.9928 17 16.6667 17H13.3334C12.0073 17 10.7355 17.5268 9.79783 18.4645C8.86015 19.4022 8.33337 20.6739 8.33337 22V30.3333H5.00004C4.55801 30.3333 4.13409 30.1577 3.82152 29.8452C3.50896 29.5326 3.33337 29.1087 3.33337 28.6667V14.0833C3.33367 13.8467 3.38436 13.6128 3.48206 13.3973C3.57977 13.1818 3.72225 12.9895 3.90004 12.8333L13.9 4.08334C14.2042 3.81614 14.5952 3.66879 15 3.66879C15.4049 3.66879 15.7959 3.81614 16.1 4.08334L26.1 12.8333C26.2778 12.9895 26.4203 13.1818 26.518 13.3973C26.6157 13.6128 26.6664 13.8467 26.6667 14.0833V28.6667Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
    {
      index: 2,
      title: "Students",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 30 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M12.9288 37.75H3.75C1.67875 37.75 0 36.0713 0 34V23.5863C0 21.7738 1.29625 20.2213 3.07875 19.8975C5.72125 19.4163 10.2775 18.5875 12.855 18.12C14.2737 17.8612 15.7263 17.8612 17.145 18.12C19.7225 18.5875 24.2788 19.4163 26.9213 19.8975C28.7038 20.2213 30 21.7738 30 23.5863C30 26.3125 30 31.0825 30 34C30 36.0713 28.3212 37.75 26.25 37.75H12.9288ZM24.785 22.05L24.79 22.0563C25.0088 22.3838 25.06 22.795 24.9287 23.1662L24.0462 25.6662C23.9312 25.9925 23.685 26.2575 23.3675 26.3963L21.7075 27.12L22.3675 28.4412C22.5525 28.81 22.5425 29.2462 22.3425 29.6075L19.2075 35.25H26.25C26.94 35.25 27.5 34.69 27.5 34C27.5 31.0825 27.5 26.3125 27.5 23.5863C27.5 22.9825 27.0675 22.465 26.4738 22.3562L24.785 22.05ZM21.3663 21.4275L16.6975 20.5788C15.575 20.375 14.425 20.375 13.3025 20.5788L8.63375 21.4275L7.63625 22.9238L8.13 24.3213L10.5 25.3537C10.8138 25.4912 11.0575 25.7512 11.175 26.0737C11.2925 26.3962 11.2712 26.7525 11.1175 27.0588L10.1625 28.9688L13.6525 35.25H16.3475L19.8375 28.9688L18.8825 27.0588C18.7288 26.7525 18.7075 26.3962 18.825 26.0737C18.9425 25.7512 19.1862 25.4912 19.5 25.3537L21.87 24.3213L22.3638 22.9238L21.3663 21.4275ZM5.215 22.05L3.52625 22.3562C2.9325 22.465 2.5 22.9825 2.5 23.5863V34C2.5 34.69 3.06 35.25 3.75 35.25H10.7925L7.6575 29.6075C7.4575 29.2462 7.4475 28.81 7.6325 28.4412L8.2925 27.12L6.6325 26.3963C6.315 26.2575 6.06875 25.9925 5.95375 25.6662L5.07125 23.1662C4.94 22.795 4.99125 22.3838 5.21 22.0563L5.215 22.05ZM23.75 29V31.5C23.75 32.19 24.31 32.75 25 32.75C25.69 32.75 26.25 32.19 26.25 31.5V29C26.25 28.31 25.69 27.75 25 27.75C24.31 27.75 23.75 28.31 23.75 29ZM15 0.25C10.5163 0.25 6.875 3.89125 6.875 8.375C6.875 12.8587 10.5163 16.5 15 16.5C19.4837 16.5 23.125 12.8587 23.125 8.375C23.125 3.89125 19.4837 0.25 15 0.25ZM15 2.75C18.105 2.75 20.625 5.27 20.625 8.375C20.625 11.48 18.105 14 15 14C11.895 14 9.375 11.48 9.375 8.375C9.375 5.27 11.895 2.75 15 2.75Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/student",
    },
    {
      index: 3,
      title: "Teachers",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 30 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M0 34C0 36.0713 1.67875 37.75 3.75 37.75H26.25C28.3212 37.75 30 36.0713 30 34C30 31.0825 30 26.3125 30 23.5863C30 21.7738 28.7038 20.2213 26.9213 19.8975C24.2788 19.4163 19.7225 18.5875 17.145 18.12C15.7263 17.8612 14.2737 17.8612 12.855 18.12C10.2775 18.5875 5.72125 19.4163 3.07875 19.8975C1.29625 20.2213 0 21.7738 0 23.5863V34ZM17.885 20.795L19.7612 27.9288C20.0075 28.865 19.6775 29.8588 18.92 30.4638C18.28 30.9738 17.2713 31.7788 16.5713 32.3388C15.6525 33.0713 14.3475 33.0713 13.4287 32.3388C12.7287 31.7788 11.72 30.9738 11.08 30.4638C10.3225 29.8588 9.9925 28.865 10.2388 27.9288L12.115 20.795L3.52625 22.3562C2.9325 22.465 2.5 22.9825 2.5 23.5863V34C2.5 34.69 3.06 35.25 3.75 35.25C8.98 35.25 21.02 35.25 26.25 35.25C26.94 35.25 27.5 34.69 27.5 34C27.5 31.0825 27.5 26.3125 27.5 23.5863C27.5 22.9825 27.0675 22.465 26.4738 22.3562L17.885 20.795ZM15.2038 20.4288C15.0675 20.425 14.9325 20.425 14.7962 20.4288L12.6663 28.5312L14.9887 30.3837C14.995 30.39 15.005 30.39 15.0113 30.3837L17.3337 28.5312L15.2038 20.4288ZM15 0.25C10.5163 0.25 6.875 3.89125 6.875 8.375C6.875 12.8587 10.5163 16.5 15 16.5C19.4837 16.5 23.125 12.8587 23.125 8.375C23.125 3.89125 19.4837 0.25 15 0.25ZM15 2.75C18.105 2.75 20.625 5.27 20.625 8.375C20.625 11.48 18.105 14 15 14C11.895 14 9.375 11.48 9.375 8.375C9.375 5.27 11.895 2.75 15 2.75Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/teacher",
    },
    {
      index: 4,
      title: "Event",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M24 2.75H21.5V1.5C21.5 1.16848 21.3683 0.850537 21.1339 0.616117C20.8995 0.381696 20.5815 0.25 20.25 0.25C19.9185 0.25 19.6005 0.381696 19.3661 0.616117C19.1317 0.850537 19 1.16848 19 1.5V2.75H15.25V1.5C15.25 1.16848 15.1183 0.850537 14.8839 0.616117C14.6495 0.381696 14.3315 0.25 14 0.25C13.6685 0.25 13.3505 0.381696 13.1161 0.616117C12.8817 0.850537 12.75 1.16848 12.75 1.5V2.75H9V1.5C9 1.16848 8.8683 0.850537 8.63388 0.616117C8.39946 0.381696 8.08152 0.25 7.75 0.25C7.41848 0.25 7.10054 0.381696 6.86612 0.616117C6.6317 0.850537 6.5 1.16848 6.5 1.5V2.75H4C3.00544 2.75 2.05161 3.14509 1.34835 3.84835C0.645088 4.55161 0.25 5.50544 0.25 6.5V24C0.25 24.9946 0.645088 25.9484 1.34835 26.6517C2.05161 27.3549 3.00544 27.75 4 27.75H24C24.9946 27.75 25.9484 27.3549 26.6517 26.6517C27.3549 25.9484 27.75 24.9946 27.75 24V6.5C27.75 5.50544 27.3549 4.55161 26.6517 3.84835C25.9484 3.14509 24.9946 2.75 24 2.75ZM2.75 6.5C2.75 6.16848 2.8817 5.85054 3.11612 5.61612C3.35054 5.3817 3.66848 5.25 4 5.25H6.5V6.5C6.5 6.83152 6.6317 7.14946 6.86612 7.38388C7.10054 7.6183 7.41848 7.75 7.75 7.75C8.08152 7.75 8.39946 7.6183 8.63388 7.38388C8.8683 7.14946 9 6.83152 9 6.5V5.25H12.75V6.5C12.75 6.83152 12.8817 7.14946 13.1161 7.38388C13.3505 7.6183 13.6685 7.75 14 7.75C14.3315 7.75 14.6495 7.6183 14.8839 7.38388C15.1183 7.14946 15.25 6.83152 15.25 6.5V5.25H19V6.5C19 6.83152 19.1317 7.14946 19.3661 7.38388C19.6005 7.6183 19.9185 7.75 20.25 7.75C20.5815 7.75 20.8995 7.6183 21.1339 7.38388C21.3683 7.14946 21.5 6.83152 21.5 6.5V5.25H24C24.3315 5.25 24.6495 5.3817 24.8839 5.61612C25.1183 5.85054 25.25 6.16848 25.25 6.5V10.25H2.75V6.5ZM25.25 24C25.25 24.3315 25.1183 24.6495 24.8839 24.8839C24.6495 25.1183 24.3315 25.25 24 25.25H4C3.66848 25.25 3.35054 25.1183 3.11612 24.8839C2.8817 24.6495 2.75 24.3315 2.75 24V12.75H25.25V24Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
    {
      index: 5,
      title: "Finance",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M36.2362 21.8435C33.9952 21.0315 31.5093 21.212 29.4073 22.3374L25.9808 23.8788C25.704 22.3007 24.4919 21.1148 22.9959 21.0692C22.9871 21.069 17.8583 21.0111 17.8583 21.0111C13.7532 19.885 11.0858 21.332 9.56421 22.7579C9.25301 23.0496 8.97934 23.3498 8.73848 23.646C8.32788 23.2038 7.6031 23.0856 7.07455 23.3762L2.41891 25.9354C1.81506 26.2674 1.55233 26.9956 1.80558 27.6358L6.35549 39.1377C6.65447 39.8934 7.57327 40.2274 8.29019 39.8333L12.9458 37.2742C13.3822 37.0343 13.6392 36.5873 13.6533 36.1162H20.6018C21.7352 36.1162 22.8542 35.8185 23.8378 35.2553C23.8378 35.2553 36.9062 27.7589 36.9799 27.6919C38.81 26.027 38.8664 22.7966 36.2362 21.8435C37.2854 22.2237 33.9952 21.0315 36.2362 21.8435ZM8.33182 36.688L4.79643 27.7508L7.03267 26.5216L10.5681 35.4588L8.33182 36.688ZM35.2312 25.5773L22.4744 32.8826C21.9051 33.2087 21.2575 33.381 20.6016 33.381H12.6916L10.0357 26.667C10.2632 26.2034 10.7113 25.4342 11.4391 24.7522C12.9296 23.3555 14.8942 22.998 17.2787 23.6898C17.398 23.7244 17.5214 23.7427 17.6455 23.7441L22.9176 23.8034C23.0522 23.815 23.3007 24.1143 23.3007 24.5679C23.3007 25.035 23.0441 25.3327 22.9099 25.3327H17.7299V28.0679H22.9099C23.5516 28.0679 24.1488 27.8509 24.6459 27.4791L30.5775 24.8109C30.609 24.7968 30.6398 24.7815 30.67 24.765C32.0929 23.9914 33.7811 23.8636 35.3015 24.4145C35.9031 24.6327 35.4685 25.3364 35.2312 25.5773ZM26.9996 19.7079C21.5665 19.7079 17.1463 15.2874 17.1463 9.85393C17.1463 4.42051 21.5664 0 26.9996 0C32.4328 0 36.8528 4.42051 36.8528 9.85393C36.8528 15.2874 32.4327 19.7079 26.9996 19.7079ZM26.9996 2.73521C23.0771 2.73521 19.886 5.92863 19.886 9.85393C19.886 13.7792 23.0772 16.9727 26.9996 16.9727C30.9222 16.9727 34.1133 13.7791 34.1133 9.85393C34.1133 5.92872 30.9221 2.73521 26.9996 2.73521Z"
            fill="#C1BBEB"
          />
          <path
            d="M27.6358 8.73914C26.5464 8.29179 26.4622 8.09957 26.4622 7.87675C26.4622 7.73444 26.5328 7.40359 27.1871 7.40359C27.7857 7.40359 28.5315 7.73957 29.0575 8.08581L29.7892 6.16786C29.2668 5.8353 28.6319 5.54957 28.0383 5.4582V4.21094H26.0874V5.57957C24.9284 5.94487 24.2142 6.87136 24.2142 8.0247C24.2142 9.55222 25.4363 10.2342 26.6299 10.6991C27.5836 11.0827 27.6635 11.3764 27.6635 11.6216C27.6635 11.9988 27.3159 12.2425 26.778 12.2425C26.0765 12.2425 25.2609 11.8379 24.6899 11.3951L23.9858 13.3438C24.5681 13.7953 25.2421 14.0932 26.0005 14.2044V15.4968H27.9635V14.09C29.1587 13.7094 29.9237 12.7192 29.9237 11.5353C29.9237 9.87803 28.7011 9.17051 27.6358 8.73914Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
    {
      index: 6,
      title: "Food",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 28 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M8.25454 0.509085C5.96888 1.64218 4.04646 3.39307 2.7053 5.56319C1.36414 7.73331 0.657909 10.2358 0.666707 12.7869V18.7166C0.667766 19.5871 1.01403 20.4216 1.62954 21.0371C2.24506 21.6526 3.07957 21.9989 3.95004 21.9999H7.33337V31.9999C7.33337 32.4419 7.50897 32.8659 7.82153 33.1784C8.13409 33.491 8.55801 33.6666 9.00004 33.6666C9.44207 33.6666 9.86599 33.491 10.1786 33.1784C10.4911 32.8659 10.6667 32.4419 10.6667 31.9999V1.99992C10.6665 1.7159 10.5937 1.43664 10.4553 1.18863C10.3169 0.940621 10.1174 0.73207 9.8758 0.582749C9.6342 0.433428 9.35846 0.348286 9.07473 0.335395C8.79101 0.322503 8.50869 0.382289 8.25454 0.509085ZM7.33337 18.6833L4.00004 18.7166V12.7869C3.99504 11.3524 4.28884 9.93265 4.86274 8.61796C5.43664 7.30328 6.27805 6.12253 7.33337 5.15092V18.6833ZM24 1.99992V8.66659C23.9995 9.10844 23.8237 9.53203 23.5112 9.84446C23.1988 10.1569 22.7752 10.3327 22.3334 10.3333V1.99992C22.3334 1.55789 22.1578 1.13397 21.8452 0.821407C21.5327 0.508847 21.1087 0.333252 20.6667 0.333252C20.2247 0.333252 19.8008 0.508847 19.4882 0.821407C19.1756 1.13397 19 1.55789 19 1.99992V10.3333C18.5582 10.3327 18.1346 10.1569 17.8222 9.84446C17.5097 9.53203 17.3339 9.10844 17.3334 8.66659V1.99992C17.3334 1.55789 17.1578 1.13397 16.8452 0.821407C16.5327 0.508847 16.1087 0.333252 15.6667 0.333252C15.2247 0.333252 14.8008 0.508847 14.4882 0.821407C14.1756 1.13397 14 1.55789 14 1.99992V8.66659C14.0015 9.99222 14.5287 11.2631 15.4661 12.2005C16.4035 13.1379 17.6744 13.6651 19 13.6666V31.9999C19 32.4419 19.1756 32.8659 19.4882 33.1784C19.8008 33.491 20.2247 33.6666 20.6667 33.6666C21.1087 33.6666 21.5327 33.491 21.8452 33.1784C22.1578 32.8659 22.3334 32.4419 22.3334 31.9999V13.6666C23.659 13.6651 24.9299 13.1379 25.8673 12.2005C26.8047 11.2631 27.3319 9.99222 27.3334 8.66659V1.99992C27.3334 1.55789 27.1578 1.13397 26.8452 0.821407C26.5327 0.508847 26.1087 0.333252 25.6667 0.333252C25.2247 0.333252 24.8008 0.508847 24.4882 0.821407C24.1756 1.13397 24 1.55789 24 1.99992Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
    {
      index: 7,
      title: "User",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 30 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M21.1757 9.87493C21.1757 10.2187 21.1523 10.5624 21.1093 10.9023C21.1289 10.7656 21.1484 10.6249 21.164 10.4882C21.0703 11.1679 20.8906 11.8281 20.6289 12.4609C20.6796 12.3359 20.7343 12.2109 20.7851 12.0859C20.5234 12.7031 20.1875 13.2812 19.7773 13.8124C19.8593 13.707 19.9414 13.6015 20.0234 13.496C19.6171 14.0195 19.1445 14.4921 18.621 14.8984C18.7265 14.8163 18.832 14.7343 18.9375 14.6523C18.4062 15.0585 17.8281 15.3984 17.2109 15.6601C17.3359 15.6093 17.4609 15.5546 17.5859 15.5038C16.9531 15.7656 16.2929 15.9452 15.6132 16.039C15.75 16.0195 15.8906 15.9999 16.0273 15.9843C15.3437 16.0741 14.6562 16.0741 13.9726 15.9843C14.1093 16.0038 14.25 16.0234 14.3867 16.039C13.707 15.9452 13.0468 15.7656 12.414 15.5038C12.539 15.5546 12.664 15.6093 12.789 15.6601C12.1718 15.3984 11.5937 15.0624 11.0624 14.6523C11.1679 14.7343 11.2734 14.8163 11.3789 14.8984C10.8554 14.4921 10.3828 14.0195 9.97651 13.496C10.0585 13.6015 10.1406 13.707 10.2226 13.8124C9.81635 13.2812 9.47651 12.7031 9.21479 12.0859C9.26557 12.2109 9.32026 12.3359 9.37104 12.4609C9.10932 11.8281 8.92964 11.1679 8.83589 10.4882C8.85542 10.6249 8.87495 10.7656 8.89057 10.9023C8.80073 10.2187 8.80073 9.53118 8.89057 8.84759C8.87104 8.98431 8.85151 9.12493 8.83589 9.26165C8.92964 8.58196 9.10932 7.92181 9.37104 7.28899C9.32026 7.41399 9.26557 7.53899 9.21479 7.66399C9.47651 7.04681 9.81245 6.46868 10.2226 5.93743C10.1406 6.0429 10.0585 6.14837 9.97651 6.25384C10.3828 5.7304 10.8554 5.25774 11.3789 4.85149C11.2734 4.93352 11.1679 5.01556 11.0624 5.09759C11.5937 4.69134 12.1718 4.35149 12.789 4.08977C12.664 4.14056 12.539 4.19524 12.414 4.24602C13.0468 3.98431 13.707 3.80462 14.3867 3.71087C14.25 3.7304 14.1093 3.74993 13.9726 3.76556C14.6562 3.67571 15.3437 3.67571 16.0273 3.76556C15.8906 3.74602 15.75 3.72649 15.6132 3.71087C16.2929 3.80462 16.9531 3.98431 17.5859 4.24602C17.4609 4.19524 17.3359 4.14056 17.2109 4.08977C17.8281 4.35149 18.4062 4.68743 18.9375 5.09759C18.832 5.01556 18.7265 4.93352 18.621 4.85149C19.1445 5.25774 19.6171 5.7304 20.0234 6.25384C19.9414 6.14837 19.8593 6.0429 19.7773 5.93743C20.1836 6.46868 20.5234 7.04681 20.7851 7.66399C20.7343 7.53899 20.6796 7.41399 20.6289 7.28899C20.8906 7.92181 21.0703 8.58196 21.164 9.26165C21.1445 9.12493 21.125 8.98431 21.1093 8.84759C21.1523 9.18743 21.1718 9.53118 21.1757 9.87493C21.1796 10.6913 21.8906 11.4765 22.7382 11.4374C23.582 11.3984 24.3046 10.7499 24.3007 9.87493C24.2929 8.00384 23.7304 6.08977 22.6289 4.56634C22.332 4.15618 22.0156 3.75384 21.664 3.39056C21.3085 3.02337 20.9179 2.70696 20.5117 2.39837C19.7734 1.83587 18.9492 1.42181 18.0742 1.10149C14.5468 -0.191475 10.2929 0.960868 7.9062 3.86712C7.57807 4.26556 7.26557 4.67962 6.99995 5.12493C6.73432 5.56634 6.52729 6.03509 6.33588 6.51165C5.97651 7.39446 5.79291 8.33196 5.71869 9.28118C5.57416 11.1406 6.05854 13.082 7.02729 14.6757C7.96088 16.2148 9.37104 17.5351 11.0195 18.2812C11.5039 18.4999 11.9999 18.7031 12.5156 18.8476C13.0273 18.9882 13.5468 19.0663 14.0742 19.1288C15.0351 19.2421 16.0156 19.164 16.9648 18.9726C20.5703 18.2382 23.5898 15.1327 24.1484 11.4882C24.2304 10.957 24.2929 10.4257 24.2929 9.88665C24.2968 9.07024 23.5703 8.28509 22.7304 8.32415C21.8867 8.35149 21.1757 8.99993 21.1757 9.87493ZM26.3593 34.3007C25.5937 34.3007 24.8281 34.3007 24.0625 34.3007C22.2382 34.3007 20.4179 34.3007 18.5937 34.3007C16.3984 34.3007 14.2031 34.3007 12.0039 34.3007C10.1093 34.3007 8.21479 34.3007 6.31635 34.3007C5.42963 34.3007 4.54291 34.3085 3.65619 34.3007C3.55854 34.3007 3.46088 34.2929 3.36713 34.2812C3.50385 34.3007 3.64447 34.3202 3.78119 34.3359C3.62494 34.3124 3.4765 34.2695 3.33197 34.2109C3.45697 34.2617 3.58197 34.3163 3.70697 34.3671C3.55072 34.3007 3.40619 34.2148 3.26947 34.1093C3.37494 34.1913 3.48041 34.2734 3.58588 34.3554C3.46869 34.2577 3.35932 34.1523 3.26557 34.0351C3.3476 34.1406 3.42963 34.246 3.51166 34.3515C3.40619 34.2148 3.32416 34.0702 3.25385 33.914C3.30463 34.039 3.35932 34.164 3.4101 34.289C3.3515 34.1445 3.31244 33.9921 3.2851 33.8398C3.30463 33.9765 3.32416 34.1171 3.33979 34.2538C3.27729 33.7812 3.32025 33.2812 3.32025 32.8046C3.32025 32.246 3.32025 31.6913 3.32025 31.1327C3.32025 30.7148 3.34369 30.3007 3.39838 29.8867C3.37885 30.0234 3.35932 30.164 3.34369 30.3007C3.45307 29.4999 3.664 28.7148 3.98041 27.9687C3.92963 28.0937 3.87494 28.2187 3.82416 28.3437C4.12885 27.6327 4.51947 26.9648 4.99213 26.3515C4.9101 26.457 4.82807 26.5624 4.74604 26.6679C5.21869 26.0624 5.76166 25.5156 6.37104 25.0429C6.26557 25.1249 6.1601 25.207 6.05463 25.289C6.66791 24.8163 7.33588 24.4257 8.04682 24.121C7.92182 24.1718 7.79682 24.2265 7.67182 24.2773C8.41792 23.9648 9.19917 23.7499 10.0039 23.6406C9.86714 23.6601 9.72651 23.6796 9.58979 23.6952C10.1679 23.621 10.7421 23.6171 11.3242 23.6171C12.039 23.6171 12.7539 23.6171 13.4687 23.6171C15.1367 23.6171 16.8046 23.6171 18.4726 23.6171C19.1171 23.6171 19.7578 23.6132 20.4023 23.6952C20.2656 23.6757 20.125 23.6562 19.9882 23.6406C20.789 23.7499 21.5742 23.9609 22.3203 24.2773C22.1953 24.2265 22.0703 24.1718 21.9453 24.121C22.6562 24.4257 23.3242 24.8163 23.9375 25.289C23.832 25.207 23.7265 25.1249 23.6211 25.0429C24.2265 25.5156 24.7734 26.0585 25.2461 26.6679C25.164 26.5624 25.082 26.457 25 26.3515C25.4726 26.9648 25.8632 27.6327 26.1679 28.3437C26.1172 28.2187 26.0625 28.0937 26.0117 27.9687C26.3242 28.7148 26.539 29.496 26.6484 30.3007C26.6289 30.164 26.6093 30.0234 26.5937 29.8867C26.6679 30.4765 26.6718 31.0624 26.6718 31.6562C26.6718 32.3007 26.6718 32.9452 26.6718 33.5898C26.6718 33.8124 26.6796 34.0351 26.6523 34.2538C26.6718 34.1171 26.6914 33.9765 26.707 33.8398C26.6836 33.996 26.6406 34.1445 26.582 34.289C26.6328 34.164 26.6875 34.039 26.7382 33.914C26.6718 34.0702 26.5859 34.2148 26.4804 34.3515C26.5625 34.246 26.6445 34.1406 26.7265 34.0351C26.6289 34.1523 26.5234 34.2616 26.4062 34.3554C26.5117 34.2734 26.6171 34.1913 26.7226 34.1093C26.5859 34.2148 26.4414 34.2968 26.2851 34.3671C26.4101 34.3163 26.5351 34.2617 26.6601 34.2109C26.5156 34.2695 26.3632 34.3085 26.2109 34.3359C26.3476 34.3163 26.4882 34.2968 26.625 34.2812C26.539 34.2929 26.4492 34.2968 26.3593 34.3007C25.957 34.3046 25.5429 34.4726 25.2539 34.7577C24.9843 35.0273 24.7773 35.4726 24.7968 35.8632C24.8359 36.6992 25.4843 37.4374 26.3593 37.4257C27.8789 37.4023 29.2148 36.4101 29.6601 34.9531C29.8359 34.3749 29.7968 33.7538 29.7968 33.1601C29.7968 31.8007 29.8398 30.4531 29.6054 29.1054C29.2617 27.1327 28.2695 25.2773 26.9101 23.8202C25.5507 22.3632 23.7226 21.2929 21.789 20.8163C20.6796 20.5429 19.5625 20.4999 18.4296 20.4999C17.2656 20.4999 16.1054 20.4999 14.9414 20.4999C13.7929 20.4999 12.6484 20.4999 11.4999 20.4999C10.3398 20.4999 9.18745 20.5546 8.05854 20.8554C6.14057 21.3632 4.33588 22.4452 3.00385 23.914C1.6601 25.3945 0.687439 27.2538 0.371032 29.2382C0.160095 30.5702 0.203063 31.9062 0.203063 33.2499C0.203063 33.8671 0.167907 34.5117 0.390564 35.1015C0.679627 35.8593 1.14056 36.457 1.81635 36.9062C2.34369 37.2538 3.01166 37.4218 3.63666 37.4296C3.94135 37.4335 4.24604 37.4296 4.55072 37.4296C5.33197 37.4296 6.10932 37.4296 6.89057 37.4296C7.99995 37.4296 9.10542 37.4296 10.2148 37.4296C11.5039 37.4296 12.7929 37.4296 14.082 37.4296C15.4062 37.4296 16.7265 37.4296 18.0507 37.4296C19.2617 37.4296 20.4687 37.4296 21.6796 37.4296C22.6289 37.4296 23.5781 37.4296 24.5234 37.4296C25.0664 37.4296 25.6093 37.4296 26.1523 37.4296C26.2226 37.4296 26.2929 37.4296 26.3632 37.4296C27.1797 37.4296 27.9648 36.7109 27.9257 35.8671C27.8867 35.0156 27.2382 34.3007 26.3593 34.3007Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
    {
      index: 8,
      title: "Chat",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 38 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M32.3333 0.333252H15.6666C14.3405 0.333252 13.0688 0.860036 12.1311 1.79772C11.1934 2.7354 10.6666 4.00717 10.6666 5.33325V8.66659H5.66663C4.34054 8.66659 3.06877 9.19337 2.13109 10.1311C1.19341 11.0687 0.666627 12.3405 0.666627 13.6666V23.6666C0.666084 24.701 0.986385 25.7101 1.58339 26.5549C2.18039 27.3996 3.0247 28.0384 3.99996 28.3833V31.9999C4.00047 32.2952 4.07944 32.5851 4.22879 32.8399C4.37815 33.0947 4.59252 33.3052 4.84996 33.4499C5.09905 33.5911 5.38031 33.6657 5.66663 33.6666C5.96576 33.6665 6.25937 33.5859 6.51663 33.4333L14.4666 28.6666H22.3333C23.6594 28.6666 24.9311 28.1398 25.8688 27.2021C26.8065 26.2644 27.3333 24.9927 27.3333 23.6666V22.6166L31.4833 25.0999C31.7405 25.2526 32.0342 25.3332 32.3333 25.3333C32.6196 25.3324 32.9009 25.2578 33.15 25.1166C33.4074 24.9719 33.6218 24.7614 33.7711 24.5066C33.9205 24.2518 33.9994 23.9619 34 23.6666V20.0499C34.9752 19.7051 35.8195 19.0663 36.4165 18.2216C37.0135 17.3768 37.3338 16.3677 37.3333 15.3333V5.33325C37.3333 4.00717 36.8065 2.7354 35.8688 1.79772C34.9311 0.860036 33.6594 0.333252 32.3333 0.333252ZM24 23.6666C24 24.1086 23.8244 24.5325 23.5118 24.8451C23.1992 25.1577 22.7753 25.3333 22.3333 25.3333H14C13.7008 25.3333 13.4072 25.4139 13.15 25.5666L7.33329 29.0499V26.9999C7.33329 26.5579 7.1577 26.134 6.84514 25.8214C6.53258 25.5088 6.10865 25.3333 5.66663 25.3333C5.2246 25.3333 4.80068 25.1577 4.48812 24.8451C4.17555 24.5325 3.99996 24.1086 3.99996 23.6666V13.6666C3.99996 13.2246 4.17555 12.8006 4.48812 12.4881C4.80068 12.1755 5.2246 11.9999 5.66663 11.9999H10.6666V15.3333C10.6666 16.6593 11.1934 17.9311 12.1311 18.8688C13.0688 19.8065 14.3405 20.3333 15.6666 20.3333H23.5333L24 20.6166V23.6666ZM34 15.3333C34 15.7753 33.8244 16.1992 33.5118 16.5118C33.1992 16.8243 32.7753 16.9999 32.3333 16.9999C31.8913 16.9999 31.4673 17.1755 31.1548 17.4881C30.8422 17.8006 30.6666 18.2246 30.6666 18.6666V20.7166L24.85 17.2333C24.5927 17.0806 24.2991 17 24 16.9999H15.6666C15.2246 16.9999 14.8007 16.8243 14.4881 16.5118C14.1756 16.1992 14 15.7753 14 15.3333V5.33325C14 4.89122 14.1756 4.4673 14.4881 4.15474C14.8007 3.84218 15.2246 3.66659 15.6666 3.66659H32.3333C32.7753 3.66659 33.1992 3.84218 33.5118 4.15474C33.8244 4.4673 34 4.89122 34 5.33325V15.3333Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
    {
      index: 9,
      title: "Latest Activity",
      icons: (
        <svg
          width="20"
          height="30"
          viewBox="0 0 34 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M20.8834 27.3332H20.5334C19.828 27.2632 19.1632 26.9702 18.6357 26.4966C18.1082 26.0231 17.7454 25.3937 17.6 24.6999L13.1334 3.99989L8.53337 14.6666C8.40326 14.9647 8.18875 15.2182 7.91629 15.3959C7.64383 15.5736 7.32532 15.6677 7.00004 15.6666H2.00004C1.55801 15.6666 1.13409 15.491 0.821529 15.1784C0.508969 14.8658 0.333374 14.4419 0.333374 13.9999C0.333374 13.5579 0.508969 13.1339 0.821529 12.8214C1.13409 12.5088 1.55801 12.3332 2.00004 12.3332H5.90004L10.0834 2.68322C10.365 2.03566 10.845 1.49425 11.4541 1.13707C12.0633 0.77989 12.7701 0.625384 13.4727 0.695832C14.1753 0.76628 14.8374 1.05804 15.3636 1.52905C15.8897 2.00006 16.2526 2.62597 16.4 3.31656L20.8667 23.9999L25.4667 13.3666C25.5917 13.0622 25.8041 12.8016 26.0769 12.6178C26.3498 12.4339 26.671 12.3349 27 12.3332H32C32.4421 12.3332 32.866 12.5088 33.1786 12.8214C33.4911 13.1339 33.6667 13.5579 33.6667 13.9999C33.6667 14.4419 33.4911 14.8658 33.1786 15.1784C32.866 15.491 32.4421 15.6666 32 15.6666H28.1L23.9167 25.3166C23.6613 25.9107 23.2385 26.4178 22.6999 26.7759C22.1613 27.1339 21.5301 27.3276 20.8834 27.3332Z"
            fill="#C1BBEB"
          />
        </svg>
      ),
      link: "/",
    },
  ];

  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!!currentUser) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {!pathname.includes("/login") ? (
        <Box className=" no-scrollbar grid grid-cols-12    lg:h-screen">
          <Box
            className={`lg:col-span-2 transition-transform transform ease-in-out duration-300 ${
              openSidebar
                ? "  translate-x-0 absolute lg:sticky"
                : "-translate-x-full lg:translate-x-0  absolute lg:sticky"
            } z-50 no-scrollbar min-h-[500px]  h-full overflow-y-auto  max-w-[289px] lg:min-w-full   left-0  lg:flex flex-col w-full justify-start items-center bg-bgDefaultColor`}
          >
            <Box className="  flex poppins-bold justify-around lg:mx-auto py-4 ">
              <span className="text-2xl mx-auto lg:text-4xl flex text-[#FB7D5B]">
                Helix <p className="text-white">-Hub</p>
              </span>
              <ChevronLeftIcon
                fontSize="medium"
                className=" flex lg:hidden my-auto rounded-full bg-white m-3"
                onClick={() => setOpenSidebar(false)}
              />
            </Box>
            <Box className="flex h-full flex-col w-full text-[#C1BBEB] justify-end items-end ">
              <Box className="w-[85%] flex justify-between flex-col h-full">
                {UserNavigation.map((nav, index) => (
                  <Box
                    key={nav.index}
                    onClick={() => {
                      router.push(nav.link);
                    }} // Handle click event
                    className={` cursor-pointer hover:bg-[#F3F4FF] hover:text-bgDefaultColor font-medium text-base min-h-[47px] pl-3 text-start rounded-l-2xl flex items-center w-full ${
                      pathname === nav.link
                        ? "bg-[#F3F4FF] text-bgDefaultColor"
                        : ""
                    }`}
                  >
                    {nav.icons && (
                      <Box
                        className={`${
                          pathname === nav.link ? "text-bgDefaultColor" : ""
                        }`}
                      >
                        {nav.icons}
                      </Box>
                    )}
                    {nav.title}
                  </Box>
                ))}
              </Box>
              <Box className="pl-10 pt-5 flex poppins-bold items-center text-sm text-start w-full">
                Helix-Hub - School Dashboard
              </Box>
              <Box className="pl-10 py-3 flex poppins-sm items-center text-sm text-start w-full">
                Made with ♥ by nitin
              </Box>
            </Box>
          </Box>
          <Box className="h-[38px] border-b-[1px] border-gray-400 lg:hidden flex col-span-12 justify-between px-3 py-2 bg-[#FFFFFF]">
            <div onClick={() => setOpenSidebar(true)}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.5H17.525M2 5.5H17.525M2 15.5H12.35"
                  stroke="#111928"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Box className="text-lg leading-3 poppins-bold text-center my-auto ">
              <span className="text-[#FB7D5B]">Helix</span>
              -Hub
            </Box>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Box>
          <Box className="  bg-[#F3F4FF] col-span-12 overflow-auto no-scrollbar lg:col-span-10">
            {children}
          </Box>
        </Box>
      ) : (
        <div className=" bg-[#F3F4FF]">{children}</div>
      )}
    </>
  );
};

export default Sidebar;
