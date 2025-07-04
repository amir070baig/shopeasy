import "./globals.css"
import {Inter} from "next/font/google"
import StoreProvider from "./StoreProvider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from 'react-hot-toast'


const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'ShopEasy – Online Store',
  description: 'Modern e-commerce frontend built with Next.js, Tailwind, Redux, and TypeScript',
}

export default function RootLayout({children}:{children: React.ReactNode}){
  return(
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <StoreProvider>
          <Header />
          <main className="min-h-screen max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </StoreProvider>
      </body>
    </html>
  )
}