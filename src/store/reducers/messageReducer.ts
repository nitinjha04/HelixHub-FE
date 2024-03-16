import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getMessagesAsync,
  latestMessageInfoAsync,
  sendMessagesAsync,
} from "../actions/messageAction";
import { RootState } from "../store";
import { Messages } from "@/interface";

export interface MessageState {
  messages: Messages[];
  latestMessageInfo: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  latestMessageInfo: [],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(latestMessageInfoAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        latestMessageInfoAsync.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.latestMessageInfo = action.payload;
          state.error = null;
        }
      )
      .addCase(getMessagesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getMessagesAsync.fulfilled,
        (state, action: PayloadAction<Messages[]>) => {
          state.loading = false;
          state.messages = action.payload;
          state.error = null;
        }
      )
      .addCase(sendMessagesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessagesAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendMessagesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const selectUserMessages = (state: RootState) => state.message.messages;
export const selectLatestMessageInfoAsync = (state: RootState) =>
  state.message.latestMessageInfo;

export default messageSlice.reducer;
