import httpservice from "@/config/httpservice";
import { UpdateData } from "@/interface";



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

  updateUser = async (updateData: UpdateData) => {
    try {
      const response = await httpservice.post("api/user/update", {
        ...updateData,
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new UserService();
