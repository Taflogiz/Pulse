
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PULSE | Enjoy The Script",
  description: "Discover, read and sell digital novels."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
