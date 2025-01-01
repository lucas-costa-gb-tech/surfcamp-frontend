import type { ReactNode } from 'react';

export type SignupFormProps = Readonly<{
  headline: string;
  content: ReactNode;
  eventId: string;
}>;
