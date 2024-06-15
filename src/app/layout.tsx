import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/sass/main.scss';

export const metadata: Metadata = {
  title: 'Surf Camp',
  description: 'Surf Camp website',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
