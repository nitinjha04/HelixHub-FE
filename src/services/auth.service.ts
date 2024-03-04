import httpservice from "@/config/httpservice";

interface LoginData {
  username?: string;
  email?: string;
  password: string;
}

interface RegisterData extends LoginData {
  phone: number;
}

class AuthService {
  login = async (data: LoginData): Promise<any> => {
    try {
      const response = await httpservice.post("api/users/login", {
        params: data,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  register = async (data: RegisterData): Promise<any> => {
    try {
      const response = await httpservice.post("/api/user/register", {
        params: data,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new AuthService();
