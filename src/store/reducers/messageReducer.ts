import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Messages } from "@/interface";
import messageAction from "../actions/messageAction";

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
      .addCase(messageAction.latestMessageInfoAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        messageAction.latestMessageInfoAsync.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.latestMessageInfo = action.payload;
          state.error = null;
        }
      )
      .addCase(messageAction.getMessagesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        messageAction.getMessagesAsync.fulfilled,
        (state, action: PayloadAction<Messages[]>) => {
          state.loading = false;
          state.messages = action.payload;
          state.error = null;
        }
      )
      .addCase(messageAction.sendMessagesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(messageAction.sendMessagesAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(messageAction.sendMessagesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const selectUserMessages = (state: RootState) => state.message.messages;
export const selectLatestMessageInfo = (state: RootState) =>
  state.message.latestMessageInfo;

export default messageSlice.reducer;
