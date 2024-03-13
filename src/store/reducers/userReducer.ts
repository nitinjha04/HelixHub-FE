import { UserData } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getAllUsersAsync,
  getCurrentUserAsync,
  updateUserAsync,
  getUserDetailsAsync,
} from "../actions/userAction";
import { RootState } from "../store";

export interface UserState {
  currentUser: UserData | null;
  allUser: UserData[] | null;
  userDetail: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  allUser: [],
  currentUser: null,
  userDetail: null,
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
      .addCase(getUserDetailsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getUserDetailsAsync.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.userDetail = action.payload;
          state.error = null;
        }
      )
      .addCase(getUserDetailsAsync.rejected, (state, action) => {
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
export const selectUserDetail = (state: RootState) => state.user.userDetail;
export const selectAllUsers = (state: RootState) => state.user.allUser;

export default userSlice.reducer;
