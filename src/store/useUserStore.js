import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useUserStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      biker: null,
      loginUser: async (email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/loginUser",
            {
              email: email,
              password: password,
            }
          );
          const token = response.data.token;
          const user = response.data.user;
          set(() => ({ token, user }));
          return response;
        } catch (error) {}
      },
      loginBiker: async (email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/loginBiker",
            {
              email: email,
              password: password,
            }
          );
          const token = response.data.token;
          const biker = response.data.biker;
          set(() => ({ token, biker }));
          return response;
        } catch (error) {}
      },
    }),
    {
      name: "User", // unique name
    }
  )
);
