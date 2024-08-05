import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Flair Airlines - Best prices on flights in Canada"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body>{children}
      </body>
    </html>
  );
}
