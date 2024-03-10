import { UpdateData, UserData } from "@/interface";
import userService from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUserAsync = createAsyncThunk<UserData>(
  "user/currentUser",
  async () => {
    const response = await userService.getCurrentUser();
    return response.data.result;
  }
);
export const updateUserAsync = createAsyncThunk<void, UpdateData>(
  "user/updateUser",
  async (updateData) => {
    const response = await userService.updateUser(updateData);
    return response.data.result;
  }
);
