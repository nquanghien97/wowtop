import { create } from "zustand";
import { UserEntity } from "../entities/user";

interface AuthStore {
  user: UserEntity | null
  setUser: (user: UserEntity | ((prev: UserEntity) => UserEntity) | null) => void
  loading: boolean
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  loading: false,
  setUser: (item) =>
    set((state) => ({
      user: typeof item === "function" ? item(state.user!) : item,
    }))
}))