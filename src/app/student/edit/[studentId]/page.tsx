"use client";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import UserForm from "@/components/user-form";
import { UserData } from "@/interface";

import UserAction from "@/store/actions/userAction";

import { selectUserDetail } from "@/store/reducers/userReducer";
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
        UserAction.updateUserAsync({
          id: userDetail._id || "",
          updateData: formData,
        })
      );
    } else {
      console.log("current user is undefined");
    }
  };

  useEffect(() => {
    const studentId = params.studentId.toString();
    dispatch(UserAction.getUserDetailsAsync(studentId));
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
