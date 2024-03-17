"use client";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import useAuthorization from "@/components/hooks/useAuthorization";
import UserForm from "@/components/user-form";
import { UserData } from "@/interface";
import UserAction from "@/store/actions/userAction";
import { selectUserDetail } from "@/store/reducers/userReducer";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTeacher = () => {
  const ProtectPage = useAuthorization(["Admin", "Teacher"]);
  const router = useRouter();
  const params = useParams();
  const userDetail = useAppSelector(selectUserDetail);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<UserData | null>(null);
  const teacherId = params.teacherId.toString();

  const handleFormSubmit = (data: UserData) => {
    setFormData(data);
    if (!formData) {
      console.error("Form data is null");
      return;
    }
    formData.role = "Teacher";
    if (userDetail) {
      dispatch(
        UserAction.updateUserAsync({
          id: userDetail._id,
          updateData: formData,
        })
      ).then(() => {
        router.push(`/teacher/${teacherId}`);
      });
    } else {
      console.log("current user is undefined");
    }
    console.log("Form data submitted:", data);
  };

  useEffect(() => {
    dispatch(UserAction.getUserDetailsAsync(teacherId));
  }, [dispatch]);

  return (
    <>
      {userDetail && (
        <UserForm
          initialData={userDetail}
          title="Edit Teacher"
          subHeader="Education"
          onSubmit={handleFormSubmit}
          student={false}
        />
      )}
    </>
  );
};

export default EditTeacher;
