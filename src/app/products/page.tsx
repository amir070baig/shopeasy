import Link from "next/link"

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear',
    price: 199,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness + Notifications',
    price: 149,
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    description: 'Portable sound',
    price: 89,
  },
  {
    id: '4',
    name: 'Gaming Mouse',
    description: 'High precision',
    price: 59,
  },
  // Add more as needed
]

export default function ProductsPage(){
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Category</label>
          <select className="border px-3 py-2 rounded">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Sort by:</label>
          <select className="border px-3 py-2 rounded">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`}
            key={product.id}
            className="bg-white border rounded-xl p-4 hover:shadow transition"
          >
            <div className="w-full h-40 bg-gray-100 rounded mb-4">
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.description}</p>
              <span className="font-bold text-blue-600">${product.price}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
        <span className="text-sm">Page 1 of 3</span>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
      </div>
    </div>
  )
}