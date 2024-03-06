import httpservice from "@/config/httpservice";

class UserService {
  getCurrentUser = async () => {
    try {
      const response = await httpservice.get("api/user/own");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new UserService();
