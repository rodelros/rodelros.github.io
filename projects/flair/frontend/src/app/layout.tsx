import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import { GoogleTagManager } from '@next/third-parties/google' 


export const metadata: Metadata = {
  title: "Flair Airlines - Best prices on flights in Canada"
};

const averta = localFont({
  src:[
    {path: '../../public/fonts/averta/Averta-Regular.woff2', weight: '400', style: 'normal'},
    {path: '../../public/fonts/averta/Averta-Bold.woff2', weight: '700', style: 'normal'},
    {path: '../../public/fonts/averta/Averta-Black.woff2', weight: '900', style: 'normal'},
    {path: '../../public/fonts/averta/Averta-Semibold.woff2', weight: '600', style: 'normal'},
  ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={averta.className}>
      <GoogleTagManager gtmId="GTM-NZPX55P" />
      
      <head>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body>

      <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZPX55P" 
            height="0" 
            width="0" 
            style={{display: "none", visibility: "hidden"}}>
          </iframe>
        </noscript>


        <Header />
        {children}
      </body>
    </html>
  );
}
