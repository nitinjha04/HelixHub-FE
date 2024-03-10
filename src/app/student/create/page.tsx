"use client";
import useAuthorization from "@/components/hooks/useAuthorization";
import UserForm from "@/components/user-form";
import { UpdateData } from "@/interface";
import React, { useState } from "react";

const CreateStudent = () => {
  const ProtectPage = useAuthorization(["Admin", "Teacher"]);

  const [formData, setFormData] = useState<UpdateData | null>(null);

  const handleFormSubmit = (data: UpdateData) => {
    setFormData(data);
    // You can perform any additional actions with the form data here
    console.log("Form data submitted:", data);
  };

  return (
    <>
      <UserForm
        title="New Student"
        subHeader="Parent Details"
        onSubmit={handleFormSubmit}
        student={true}
      />
    </>
  );
};

export default CreateStudent;
