import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = localFont(
  {
    src: '../../public/fonts/bright.ttf',
    display: 'swap',
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}