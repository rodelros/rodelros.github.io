import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fly Flair",
  description: "Test Flair site",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
