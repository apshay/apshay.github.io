import './globals.css';
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: '#0E1011',
}

export const metadata = {
  title: 'Aiden Shay',
  description: 'Aiden\'s personal portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
