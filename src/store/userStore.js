import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useUserStore = create(
  persist(
    immer((set) => ({
      user: null,
      setUser: (user) =>
        set((state) => {
          state.user = user;
        }),
      clearUser: () =>
        set((state) => {
          state.user = null;
        }),
    })),
    { name: "user" }
  )
);
