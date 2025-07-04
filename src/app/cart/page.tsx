'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/store/index'
import { removeFromCart, increaseQty, decreaseQty, clearCart, } from '@/store/cartSlice'
import Link from 'next/link'


export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return(
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Your Cart</h1>
       {
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">${item.price} each</p>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-2 py-1 border rounded hover:bg-gray-100"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-2 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className='text-right'>
              <p className="font-semibold">${item.price * item.quantity}</p>
              <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-sm text-red-500 hover:underline mt-1"
            >
              Remove
            </button>
            </div>

            <div className="text-right space-y-3">
              <p className="text-lg font-bold">Subtotal: ${subTotal.toFixed(2)}</p>
              <button
                onClick={() => dispatch(clearCart())}
                className="text-sm text-red-500 hover:underline"
              >
                Clear Cart
              </button>
            </div>
          </div>
        ))
       }
       <div>
        <Link
          href="/checkout"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </Link>
       </div>
    </div>
  )
}