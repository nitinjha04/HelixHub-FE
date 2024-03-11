import { UpdateData, UserData } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getAllUsersAsync,
  getCurrentUserAsync,
  updateUserAsync,
} from "../actions/userAction";
import { RootState } from "../store";

export interface UserState {
  currentUser: UserData | null;
  allUser: UserData[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  allUser: [],
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllUsersAsync.fulfilled,
        (state, action: PayloadAction<UserData[]>) => {
          state.loading = false;
          state.allUser = action.payload;
          state.error = null;
        }
      )
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getCurrentUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getCurrentUserAsync.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.currentUser = action.payload;
          state.error = null;
        }
      )
      .addCase(getCurrentUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(
      //   updateUserAsync.fulfilled,
      //   (state, action: PayloadAction<UserData>) => {
      //     state.loading = false;
      //     state.currentUser = action.payload;
      //     state.error = null;
      //   }
      // )
      .addCase(updateUserAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const selectCurrentUserInfo = (state: RootState) =>
  state.user.currentUser;
export const selectAllUsers = (state: RootState) => state.user.allUser;

export default userSlice.reducer;
