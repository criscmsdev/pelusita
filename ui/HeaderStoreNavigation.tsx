'use client'

import { Fragment, use, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, WrenchScrewdriverIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames, getQuery } from '@/src/utils'
import { Site } from '@/src/interface/site.interface'
import { useUI } from '@/src/context/UIContext'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { unstable_getServerSession } from 'next-auth'
import { usePathname } from 'next/navigation'
const featured = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hand_tools.jpg/1200px-Hand_tools.jpg',
    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
  },
  {
    name: 'Basic Tees',
    href: '#',
    imageSrc: 'https://d3nqlc6zkdn9bc.cloudfront.net/wp-content/uploads/2021/06/06152651/Conoce-las-herramientas-que-no-deben-faltar-en-tu-hogar.jpg',
    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
  },
]

const navigation = {
  categories: [
    {
      id: 'herramientas',
      name: 'Herramientas',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Herramientas Eléctricas',
          items: [
            { name: 'Amoladoras', href: '#' },
            { name: 'Atornilladoras', href: '#' },
            { name: 'Taladros', href: '#' },
            { name: 'Rotomartillos', href: '#' },
            { name: 'Sierras coladoras y circulares', href: '#' },
            { name: 'Sierras ingletadoras', href: '#' },
            { name: 'Ligadoras y Pulidoras', href: '#' },
            { name: 'Cepillos', href: '#' },
            { name: 'Cortadoras', href: '#' },
            { name: 'Herramientas estacionarias', href: '#' },
            { name: 'Herramientas Inalámbricas', href: '#' },
            { name: 'Brocas', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Herramientas Manuales',
          items: [
            { name: 'Alicates', href: '#' },
            { name: 'Destornilladores', href: '#' },
            { name: 'Juegos de herramientas', href: '#' },
            { name: 'LLaves', href: '#' },
            { name: 'Martillos', href: '#' },
            { name: 'Sierras y cuchillos', href: '#' },
            { name: 'Otras Herramientas', href: '#' },
          ],
        },
        {
          id: 'organizacion',
          name: 'Organización y Almacenaje',
          items: [
            { name: 'Cajas de herramientas', href: '#' },
            { name: 'Organizadores', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Ferretería',
          items: [
            { name: 'Herraje', href: '#' },
            { name: 'Escaleras', href: '#' },
            { name: 'Re-Pegamentos y cintas', href: '#' },
            { name: 'Cajas Fuertes', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

interface Props {
  site: Site
  email: string
  
}

export function HeaderStoreNavigation(props: Props) {
  const { site, email } = props
  // console.log('email', email)
  const { toggleMenu: {value, actions: {toggle, setLeft, setRight}}, toggleSlideOversCarts, toggleSearch} = useUI()
  const query = getQuery()
  if (query[0] === 'admin') return null
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={value} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={toggle}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={setLeft}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-orange-600 border-orange-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-orange-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={setRight}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://res.cloudinary.com/agglobal-com/image/upload/v1662060345/fierros/ecommerce/Store_Front_Logo.png"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {site.pages?.map((category, i) => (
                    <Popover key={i} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-orange-600 text-orange-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.dataPage.type === "category" && category.dataPage.seoPage.title}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-40">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-3 gap-y-10 gap-x-8 py-16">
                                    
                                    <div className="col-span-2 grid grid-cols-4 gap-y-10 gap-x-8 text-sm">
                                      {category.pages?.map((section, i) => (
                                        <div key={i}>
                                          <p id={`${i}-heading`} className="font-medium text-gray-900">
                                            {section.dataPage.seoPage.title}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${i}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.pages?.map((item, i) => (
                                              <li key={i} className="flex">
                                                <a href={item.slug} className="hover:text-gray-800">
                                                  {item.dataPage.seoPage.title}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8">
                                      {featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {
                    !email ? 
                  <div onClick={() => signIn("google")} className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </div>
                  :
                  <div onClick={() => signOut()} className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign Out
                  </div>
                  }
                </div>
                

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link href="/admin" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Dashboard</span>
                    <WrenchScrewdriverIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

                <div className="flex lg:ml-6">
                  <div onClick={toggleSearch.actions.toggle} className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <div onClick={toggleSlideOversCarts.actions.toggle} className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
