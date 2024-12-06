export const sendAccumulationCode = async (code: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/accumulation-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}

export const getAccumulationCode = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/accumulation-user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}

