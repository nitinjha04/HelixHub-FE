import { UpdateData, UserData } from "@/interface";
import userService from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsersAsync = createAsyncThunk<UserData[], void>(
  "user/allUsers",
  async () => {
    try {
      const response = await userService.getAllUsers();
      return response.data.result;
    } catch (error) {
      console.log("error occurred", error);
    }
  }
);
export const getUserDetailsAsync = createAsyncThunk<UserData, string>(
  "user/userDetail",
  async (id) => {
    try {
      const response = await userService.getUserDetail(id);
      return response.data.result;
    } catch (error) {
      console.log("error occurred", error);
    }
  }
);
export const getCurrentUserAsync = createAsyncThunk<UserData>(
  "user/currentUser",
  async () => {
    const response = await userService.getCurrentUser();
    return response.data.result;
  }
);
export const updateUserAsync = createAsyncThunk<
  void,
  { id: string; updateData: UpdateData }
>("user/updateUser", async ({ id, updateData }) => {
  const response = await userService.updateUser(id, updateData);
  return response.data.result;
});
