import Image from "next/image";
import Link from "next/link";
import { dummyProducts } from "@/data/products";

export default function Home(){


  return(
    <div className="space-y-6">
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl px-6 py-12">
        <div className="max-w-xl">
          <h1 className="text-gray-800 md:text-5xl text-3xl font-bold">Welcome to ShopEasy</h1>
          <p className="text-lg text-gray-700 mb-6">Discover the best products at the lowest prices. Shop smart, shop easy.</p>
          <Link 
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-medium transition"
          >Shop Now</Link>
        </div>
        <div className="hidden md:block">
          <Image 
            src="/images/shopping-hero.jpg"
            alt="shopping"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Fashion', 'Home', 'Toys'].map((category) => (
            <div
            key={category}
            className="bg-white border p-6 rounded-xl text-center hover:shadow transition"
            >
              <span className="text-lg font-medium">{category}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dummyProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl p-4 border hover:shadow transition"
            >
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}