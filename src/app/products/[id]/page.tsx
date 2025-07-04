"use client"

import { useParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/index'
import { addToCart } from '@/store/cartSlice'
import toast from 'react-hot-toast' 

const dummyProducts = [
    {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality noise-cancelling over-ear headphones.',
    price: 199,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Track fitness, monitor heart rate, and more.',
    price: 149,
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    description: 'Crystal-clear sound in a compact body.',
    price: 89,
  },
  {
    id: '4',
    name: 'Gaming Mouse',
    description: 'Precision mouse with programmable buttons.',
    price: 59,
  },

]

export default function productDetailPage(){
  const {id} = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const product = dummyProducts.find((p) => p.id === id)

  if(!product) return <p>Product not found.</p>

  const handleAddToCart = () => {
    dispatch(addToCart({...product, quantity: 1}))
    toast.success('Added to cart!')
  }

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-80 bg-gray-100 rounded">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mb-6">{product.price}</p>

          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}