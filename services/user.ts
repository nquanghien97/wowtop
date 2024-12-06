import { UpdateUserDTO } from "@/dto/user"

export const getCurrentUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
    next: {
      tags: ['user-data']
    }
  })
  return res.json()
}

export const updateUser = async (data: UpdateUserDTO) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
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