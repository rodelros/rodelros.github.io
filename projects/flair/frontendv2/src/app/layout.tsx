import Header from '@/components/header/header';
import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Flair Airlines - Best Flights Deals in Canada',
}

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={averta.className}>
      <head>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
        <link type="image/png" rel="apple-touch-icon" href="60x60@3x.png" sizes="180x180" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
