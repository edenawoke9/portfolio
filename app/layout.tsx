import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eden Awoke',
  description: 'This is my personal portfolio'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='bg-black overflow-x-hidden'>{children}</body>
    </html>
  )
}
