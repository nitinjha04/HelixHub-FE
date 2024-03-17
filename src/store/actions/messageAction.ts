import { Messages } from "@/interface";
import messageService from "@/services/message.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

class MessageAction {
  latestMessageInfoAsync = createAsyncThunk<any[], void>(
    "message/latestMessageInfo",
    async () => {
      try {
        const response = await messageService.latestMessageInfo();
        return response.data.result;
      } catch (error) {
        console.log("error occurred", error);
      }
    }
  );

  getMessagesAsync = createAsyncThunk<
    Messages[],
    { receiver: string | undefined }
  >("message/getMessages", async (data) => {
    try {
      const response = await messageService.getMessage(data);
      return response.data.result;
    } catch (error) {
      console.log("error occurred", error);
    }
  });

  sendMessagesAsync = createAsyncThunk<void, Messages>(
    "message/sentMessages",
    async (data) => {
      try {
        const response = await messageService.postMessage(data);
        return response.data.result;
      } catch (error) {
        console.log("error occurred", error);
      }
    }
  );
}

export default new MessageAction();
