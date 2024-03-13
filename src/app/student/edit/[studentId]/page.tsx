"use client";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import UserForm from "@/components/user-form";
import { UserData } from "@/interface";
import {
  getUserDetailsAsync,
  updateUserAsync,
} from "@/store/actions/userAction";
import {
  selectUserDetail,
} from "@/store/reducers/userReducer";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditStudent = () => {
  const params = useParams();
  const userDetail = useAppSelector(selectUserDetail);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<UserData | null>(null);

  const handleFormSubmit = (data: UserData) => {
    setFormData(data);
    if (!formData) {
      console.error("Form data is null");
      return;
    }
    if (userDetail) {
      dispatch(
        updateUserAsync({
          id: userDetail._id,
          updateData: formData,
        })
      );
    } else {
      console.log("current user is undefined");
    }
    console.log("Form data submitted:", data);
  };

  useEffect(() => {
    const studentId = params.studentId.toString();
    dispatch(getUserDetailsAsync(studentId));
  }, [dispatch]);

  return (
    <>
      {userDetail && (
        <UserForm
          initialData={userDetail}
          title="Edit Student"
          subHeader="Parent Details"
          onSubmit={handleFormSubmit}
          student={true}
        />
      )}
    </>
  );
};

export default EditStudent;
