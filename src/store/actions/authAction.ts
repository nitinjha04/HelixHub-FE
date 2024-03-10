import TokenHelper from "@/helpers/Token.helper";
import { ErrorResponse, LoginData } from "@/interface";
import authService from "@/services/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

export const loginUserAsync = createAsyncThunk(
  "user/login",
  async (loginInfo: LoginData, { dispatch, rejectWithValue }) => {
    const router = useRouter();
    try {
      const response = await authService.login(loginInfo);
      TokenHelper.create(response.data.result.accessToken);
      router.push("/");
      return response.data.result;
    } catch (error) {
      const errorResponse = error as ErrorResponse; // Assume ErrorResponse interface is defined
      return rejectWithValue(errorResponse.data);
    }
  }
);
