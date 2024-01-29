import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/sass/main.scss";

export const metadata: Metadata = {
  title: "Surf Camp",
  description: "Surf Camp website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
