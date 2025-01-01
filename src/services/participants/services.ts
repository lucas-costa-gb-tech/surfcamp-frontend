import type { PostParticipantResponse } from './types';

export const postParticipant = async (firstName: string, lastName: string, email: string, event: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/participants`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { firstName, lastName, email, event } }),
  });

  return response.json() as Promise<PostParticipantResponse>;
};
