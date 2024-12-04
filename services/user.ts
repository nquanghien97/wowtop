export const getUser = async (token: string) => {
  const user_id = token && JSON.parse(Buffer.from((token).split('.')[1], 'base64').toString('utf8')).user_id
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${user_id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return res.json()
}