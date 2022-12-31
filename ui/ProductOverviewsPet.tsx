// 'use client'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '@/src/utils';
import { Product } from '@/src/interface/product.interface';

import Markdown from 'markdown-to-jsx';
import { SwiperNavigation } from './SwiperNavigation';
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'La amoladora angular sin cables TE-AG 18/115 Li - Solo de Einhell es la amoladora angular más ligera de su clase y está equipada con una robusta caja de engranajes de aluminio. Como miembro de la familia Power X-Change, las baterías con celdas de iones de litio de alta calidad pueden utilizarse con todos los miembros de la familia Power X-Change. La batería y el cargador se venden por separado, por ejemplo, en forma de un práctico set para principiantes. Para obtener resultados óptimos de corte, esmerilado o desbaste, se recomienda la batería de 2,6 Ah Plus o superior. El mecanismo de inicio suave permite un arranque suave y la protección de puesta en marcha involuntaria garantiza una mayor seguridad para el usuario. El diseño fino con empuñadura ergonómica suave y el mango flexible adicional que se puede montar en tres posiciones hacen que el equipo sea fácil de manejar. El flujo de aire modificado garantiza una refrigeración óptima del dispositivo y ahorra esfuerzo a los engranajes. El protector del disco se puede ajustar rápidamente a cualquier trabajo gracias a su mecanismo de ajuste rápido. La protección contra sobrecargas garantiza una mayor seguridad y vida útil. El envío no incluye el disco de corte.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

const details = `
|                   |                   |
| -----------       | -----------       |
| Especie           | Gato              |
| Raza              | Común europeo     |
| Fecha nacimiento  | 2020-05-25        |
| Tamaño            | Grande            |
| Edad              | 1 año y 2 meses   |
| Sexo              | Macho             |
| Esterilizado      | No                |
| Peso              | 6Kg               |
`;
const specs = `
  - Miembro de la familia Power X-Change
  - La amoladora angular más ligera de su clase
  - Arranque suave Softstart y protección contra rearranque para una mayor seguridad del usuario
  - Protección contra sobrecargas para una larga vida útil
  - Flujo de aire modificado para una mejor refrigeración y una larga vida útil
  - Funcionamiento suave gracias al desacoplamiento del motor y la transmisión
  - Protección para el disco con regulación rápida
  - Robusta caja de engranajes de aluminio
  - Diseño fino con empuñadura ergonómica Softgrip
  - Mango adicional con montaje flexible en 3 posiciones
  - Recomendación para lograr unos resultados óptimos: Batería 2,6 Ah Plus y superior
  - Se suministra sin batería ni cargador (se venden por separado)
  - Se suministra sin disco de corte
`;

interface Props {
  product: Product;
}

export function ProductOverviewsPet(props: Props) {
  return (
    <div className="">
      <div className="pt-6">
        {/* Image gallery */}
        <div className=''>
          <SwiperNavigation images={props.product.dataProduct.imageProduct} />  
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {props.product.dataProduct.seoProduct.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            {/* <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              Senkata - El Alto
            </p> */}
            <div className="mt-10">
              <h2 className=" text-xl font-bold text-gray-900">
                Mis Datos
              </h2>

              <div className="mt-4 space-y-6 prose max-w-none">
                <Markdown>{details}</Markdown>
              </div>
            </div>



            <form className="mt-10">


              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-600 py-3 px-8 text-base font-medium text-white hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
              >
                Adoptar
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 prose max-w-none">
                <Markdown>
                  {props.product.dataProduct.seoProduct.description}
                </Markdown>
                {/* <p className="text-base text-gray-900">{product.description}</p> */}
              </div>
            </div>

            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div> */}

            {/* <div className="mt-10">
              <h2 className=" text-2xl font-bold text-gray-900">
                Detalles Técnicos
              </h2>

              <div className="mt-4 space-y-6 prose max-w-none">
                <Markdown>{details}</Markdown>
              </div>
            </div> */}
            {/* <div className="mt-10">
              <h2 className=" text-2xl font-bold text-gray-900">Especificaciones</h2>

              <div className="mt-4 space-y-6 prose max-w-none">
                <Markdown >
                  {specs}
                </Markdown>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
