import { Product } from "@/src/interface/product.interface"
import Link from "next/link"

interface Props {
  title: string
  products: Product[]
}

export function ProductLists(props:Props) {
  const { title, products } = props
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <div key={i} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.dataProduct.seoProduct.image?.src || 'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'}
                  alt={product.dataProduct.seoProduct.image?.alt || ''}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.dataProduct.type.slug}/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.dataProduct.seoProduct.title}
                    </Link>
                  </h3>
                <p className="text-sm font-medium text-gray-900">{product.dataProduct.price} 100 Bs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
