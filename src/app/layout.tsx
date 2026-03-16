'use client'
import { Geist, Geist_Mono } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/app/lib/Store/store'
import Headr from '@/app/ui/Heders/layout'
import Footer from '@/app/ui/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <Headr/>
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
          </Provider>
      </body>
    </html>
  )
}
