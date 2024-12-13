import { DanceChallengeEntity } from "@/entities/dance-challenge";

export async function createDanceChallenge(data: DanceChallengeEntity) {
  const res = await fetch(`https://wowtopmilk.com.vn/api/dance-challenge`, {
    method: 'POST',
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