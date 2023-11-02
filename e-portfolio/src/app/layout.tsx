import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UNC E-PORTFOLIO',
  description: 'Created by John Efraim Meraña',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  )
}
