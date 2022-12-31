import { Page } from "@/src/interface/page.interface";

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

interface Props {
  page: Page
  url: string
}

export function CategoryList(props: Props) {
  const { page, url } = props
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {page.dataPage.seoPage.title}
        </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {page.pages?.map((data, i) => (
            <a key={i} href={`${url}/${data.slug}`} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                    className="h-full w-full object-cover object-center"
                    src={
                      data.dataPage.seoPage.image?.src ||
                      'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'
                    }
                    alt={
                      data.dataPage.seoPage.image?.alt || 'image description'
                    }
                  />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{data.dataPage.seoPage.title}</h3>
              {/* <p className="mt-1 text-lg font-medium text-gray-900">
                {data.price}
              </p> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
