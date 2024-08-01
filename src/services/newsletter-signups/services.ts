import type { PostNewsletterSignupResponse } from './types';

export const postNewsletterSignup = async (email: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/newsletter-signups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { email } }),
  });

  return response.json() as Promise<PostNewsletterSignupResponse>;
};
