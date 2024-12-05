export const sendOtp = async (phone_number: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/send-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone_number }),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}

export const verifyOtp = async ({ phone_number, otp }: { phone_number: string, otp: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/verify-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone_number, otp }),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}