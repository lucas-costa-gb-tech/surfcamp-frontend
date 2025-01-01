import type { ChangeEvent } from 'react';

export type TextInputProps = Readonly<{
  name: string;
  value: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}>;
