import TokenHelper from "@/helpers/Token.helper";
import { LoginData, RegisterData } from "@/interface";
import authService from "@/services/auth.service";
import { create } from "zustand";

type AuthStore = {
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  login: async (data) => {
    try {
      console.log("store data 1", data);
      const response = await authService.login(data);

      if (response) {
        TokenHelper.create(response.data.result.accessToken);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  register: async (data) => {
    try {
      console.log("store data 1", data);
      const response = await authService.register(data);
      if (response) {
        TokenHelper.create(response.data.result.accessToken);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
}));
