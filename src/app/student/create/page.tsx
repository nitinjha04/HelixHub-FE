"use client";
import useAuthorization from "@/components/hooks/useAuthorization";
import UserForm from "@/components/user-form";
import { UpdateData } from "@/interface";
import userService from "@/services/user.service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateStudent = () => {
  const router = useRouter();
  const ProtectPage = useAuthorization(["Admin", "Teacher"]);

  const [formData, setFormData] = useState<UpdateData | null>(null);

  const handleFormSubmit = async (data: UpdateData) => {
    setFormData(data);

    if (!formData) {
      console.log("Form data is null");
      return;
    }

    try {
      const response = await userService.createUserWithoutPassword(formData);
      if (response.data.result) {
        router.push(`/student/${response.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }

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
