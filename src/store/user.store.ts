import userService from "@/services/user.service";
import { create } from "zustand";

type UserStore = {
  user: Record<string, any>;
  getCurrentUser: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {},
  getCurrentUser: async () => {
    try {
      const response = await userService.getCurrentUser();
      if (response?.data?.result) {
        set({ user: response.data.result });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
