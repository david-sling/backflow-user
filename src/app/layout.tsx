import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BackFlow: The Elite Marketplace for Top-Rated System Designs"',
  description: 'Unveil the pinnacle of system design excellence on BackFlow - your exclusive portal to post, acquire, and collaborate on cutting-edge system design concepts. Dive into a world of innovation, network with industry leaders, and harness the power of SEO-optimized solutions today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
