import type { ReactNode } from 'react';

export type SignupFormProps = Readonly<{
  eventId: string;
  headline: string;
  content: ReactNode;
  pricing: {
    single: number;
    shared: number;
  };
}>;
