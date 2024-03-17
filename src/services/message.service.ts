import httpservice from "@/config/httpservice";

class MessageService {
  latestMessageInfo = async () => {
    try {
      const response = await httpservice.get("/api/chat/getLatestMessage");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getMessage = async (data: any) => {
    try {
      const response = await httpservice.post("/api/chat/get", {
        ...data,
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  postMessage = async (data: any) => {
    try {
      const response = await httpservice.post("/api/chat/send", {
        ...data,
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new MessageService();
