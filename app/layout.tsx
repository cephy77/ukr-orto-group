import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import cn from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UKR ORTO GROUP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('bg-sky-100', inter.className)}>
        <Header />
        <div className='flex flex-col justify-between'>
          <main className="flex flex-col p-4 bg-sky-50 grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
