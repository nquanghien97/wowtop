export interface RegisterUser {
  phone_number: string
  full_name: string
  mother_dob: Date
  child_dob: Date
  province: string
  district: string
  ward: string
  address: string
  password: string
}

export interface LoginUser {
  phone_number: string
  password: string
}

export interface ChangePassword {
  old_password: string
  new_password: string
}