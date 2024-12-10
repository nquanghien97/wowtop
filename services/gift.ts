export const getAllGifts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/gift`, {
    next: {
      tags: ['fetch-gift']
    }
  })
  return res.json()
}

export const exchangeGift = async ({ token, gift_id } : { token?: string, gift_id: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exchange-gift`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ gift_id })
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json()
}