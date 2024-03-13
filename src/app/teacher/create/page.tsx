"use client";
import useAuthorization from "@/components/hooks/useAuthorization";
import UserForm from "@/components/user-form";
import { UserData } from "@/interface";
import userService from "@/services/user.service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateTeacher = () => {
  const ProtectPage = useAuthorization(["Admin"]);
  const router = useRouter();

  const [formData, setFormData] = useState<UserData | null>(null);

  const handleFormSubmit = async (data: UserData) => {
    setFormData(data);

    if (!formData) {
      console.log("Form data is null");
      return;
    }
    formData.role = "Teacher";

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
        title="New Teacher"
        subHeader="Education"
        onSubmit={handleFormSubmit}
        student={false}
      />
    </>
  );
};

export default CreateTeacher;
