import { UserData } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCurrentUserAsync } from "../actions/userAction";
import { RootState } from "../store";

export interface UserState {
  currentUser: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
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
      });
  },
});

export const selectCurrentUserInfo = (state: RootState) =>
  state.user.currentUser;

export default userSlice.reducer;
