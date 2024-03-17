"use client";
import userService from "@/services/user.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthorization = (
  allowedRoles: string[],
  redirectTo: string = "/unauthorized"
) => {
  const router = useRouter();

  useEffect(() => {
    const api = async () => {
      const response = await userService.getCurrentUser();
      if (response.data.result) {
        const userRole = response.data.result.role;
        if (!allowedRoles.includes(userRole)) {
          router.push(redirectTo); // Redirect to unauthorized access page or default route
        }
      } // Implement this function to get the user's role from the authentication state
    };
    api();
  }, []);

  // Return an empty component to be used as a placeholder for protected routes
  return () => null;
};

export default useAuthorization;
