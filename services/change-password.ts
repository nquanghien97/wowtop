export const changePassword = async ({ old_password, new_password } : { old_password: string, new_password: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/change-password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ old_password, new_password }),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}