"use client";
import useAuthorization from "@/components/hooks/useAuthorization";
import UserForm from "@/components/user-form";
import React from "react";

const CreateTeacher = () => {
  const ProtectPage = useAuthorization(["Admin"]);

  return (
    <>
      <UserForm title="New Teacher" subHeader="Education" />
    </>
  );
};

export default CreateTeacher;
