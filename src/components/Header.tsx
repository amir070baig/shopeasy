'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">
          🛍️ ShopEasy
        </Link>

        <nav className="space-x-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
