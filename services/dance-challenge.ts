import { DanceChallengeEntity } from "@/entities/dance-challenge";

export async function createDanceChallenge(data: DanceChallengeEntity) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dance-challenge`, {
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