import httpservice from "@/config/httpservice";
import { UpdateData } from "@/interface";

class UserService {
  getAllUsers = async () => {
    try {
      const response = await httpservice.get("api/user");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getCurrentUser = async () => {
    try {
      const response = await httpservice.get("api/user/own");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateUser = async (id: string, updateData: UpdateData) => {
    try {
      const response = await httpservice.put(`api/user/update/${id}`, {
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
