import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  isAuth: false,
  isLoading: false,
  first_name: "",
  id: "",
  email: "",
  setAuth: async (access_token) => {
    set({ isLoading: true });
    try {
      const token = access_token || Cookies.get("access_token");
      await axios
        .get("http://localhost:5000/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          Cookies.set("access_token", token);
          set({
            first_name: data.first_name,
            id: data.userId,
            email: data.user_email,
          });
          set({ isAuth: true });
          set({ isLoading: false });
          return true;
        });
    } catch (error) {
      set({ isAuth: false });
      set({ isLoading: false });
    }
    return false;
  },
  Logout: () => {
    set({
      first_name: "",
      id: "",
      email: "",
    });
    set({ isAuth: false });
    Cookies.remove("access_token");
  },
}));

export default useAuthStore;
