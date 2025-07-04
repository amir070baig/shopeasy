'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const router = useRouter()

  const subTotal = cartItems.reduce((total, item) => 
    total + item.price * item.quantity, 0
  )

   if (cartItems.length === 0) {
    return <p>Your cart is empty. <button onClick={() => router.push('/products')} className="underline text-blue-600">Shop now</button></p>
  }

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className='space-y-6'>
        <h2 className="text-xl font-bold">Shipping Address</h2>
        <form className='space-y-4'>
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Address" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="City" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Postal Code" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Country" className="w-full p-3 border rounded" required />
        </form>

        <h2 className="text-xl font-bold pt-6">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type='radio' name='payment' defaultChecked></input>
            Credit/Debit Card
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            UPI / Net Banking
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>
        </div>
      </div>

      <div className="bg-white border p-6 rounded-xl space-y-6 h-fit">
        <h2 className='text-xl font-bold'>Order Summary</h2>
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <hr />
        <p className="text-lg font-semibold flex justify-between">
          <span>Subtotal:</span>
          <span>{subTotal.toFixed(2)}</span>
        </p>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition"
          onClick={() => alert('Order placed (UI only)!')}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}