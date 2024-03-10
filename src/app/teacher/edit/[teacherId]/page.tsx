"use client";
import useAuthorization from "@/components/hooks/useAuthorization";
import UserForm from "@/components/user-form";
import React from "react";

const EditTeacher = () => {
  const ProtectPage = useAuthorization(["Admin"]);

  return (
    <>
      <UserForm title="Edit Teacher" subHeader="Education" />
    </>
  );
};

export default EditTeacher;
