import { create } from "zustand";
// import { getUser, getUserId } from "../services/users";
import { UserEntity } from "../entities/user";

interface AuthStore {
  user: UserEntity
  setUser: (user: UserEntity | ((prev: UserEntity) => UserEntity)) => void
  loading: boolean
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: {
    id: -1,
    phone_number: '',
    full_name: '',
    mother_dob: '',
    child_dob: '',
    province: '',
    district: '',
    ward: '',
    address: '',
    role: '',
    points_accumulation: 0
  },
  loading: false,
  setUser: (item) =>
    set((state) => ({
      user: typeof item === "function" ? item(state.user) : item,
    }))
}))