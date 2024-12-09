import { UpdateUserDTO } from "@/dto/user"

export const getCurrentUser = async (token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/me`, {
    next: {
      tags: ['user-data']
    },
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return res.json()
}

export const updateUser = async (data: UpdateUserDTO) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/me`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}

export const getUser = async ({ type, token, param }: { type: 'phone_number' | 'user_id', token: string, param: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${param}?type=${type}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json()
}

export const findUserByPhoneNumber = async ({ token, phone_number }: { token: string, phone_number: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/phone_number?phone_number=${phone_number}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json()
}

export const forgotPassword = async ({ phone_number, password }: { phone_number: string, password: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/forgot-password?phone_number=${phone_number}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json()
}