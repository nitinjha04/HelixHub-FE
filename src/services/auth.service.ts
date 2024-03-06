import httpservice from "@/config/httpservice";
import { LoginData, RegisterData } from "@/interface";

class AuthService {
  login = async (data: LoginData): Promise<any> => {
    try {
      const response = await httpservice.post("api/user/login", {
        ...data,
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  register = async (data: RegisterData): Promise<any> => {
    try {
      const response = await httpservice.post("/api/user/register", {
        ...data,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new AuthService();
