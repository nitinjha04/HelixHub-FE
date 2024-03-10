"use client";
import { useAppSelector } from "@/components/hooks/reduxHook";
import UserForm from "@/components/user-form";
import { UpdateData } from "@/interface";
import { selectCurrentUserInfo } from "@/store/reducers/userReducer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditStudent = () => {
  const [formData, setFormData] = useState<UpdateData | null>(null);

  const handleFormSubmit = (data: UpdateData) => {
    setFormData(data);
    // You can perform any additional actions with the form data here
    console.log("Form data submitted:", data);
  };
  const demoData = {
    name: {
      first: "John",
      last: "Doe",
    },
    dob: "1990-01-01",
    pob: "New York",
    phone: 1234567890,
    email: "john.doe@example.com",
    address: "123 Main St",
    parentName: {
      first: "Jane",
      last: "Doe",
    },
    parentEmail: "jane.doe@example.com",
    parentPhone: "0987654321",
    parentAddress: "456 Elm St",
    university: "Example University",
    degreeStartDate: "2010-09-01",
    degreeEndDate: "2014-06-30",
    degree: "Bachelor of Science",
    universityCity: "Anytown",
  };
  const currentUser = useAppSelector(selectCurrentUserInfo);

  return (
    <>
      {currentUser && (
        <UserForm
          initialData={currentUser}
          title="Edit Student"
          subHeader="Parent Details"
          onSubmit={handleFormSubmit}
          student={false}
          // register={register}
          // handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default EditStudent;
