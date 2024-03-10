"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthorization = (allowedRoles: string[]) => {
  const router = useRouter();

  //   useEffect(() => {
  //     const userRole = getUserRoleFromAuthState(); // Implement this function to get the user's role from the authentication state
  //     if (!allowedRoles.includes(userRole)) {
  //       router.push('/unauthorized'); // Redirect to unauthorized access page or default route
  //     }
  //   }, []);

  // Return an empty component to be used as a placeholder for protected routes
  return () => null;
};

export default useAuthorization;
