'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Site } from '@/src/interface/site.interface';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getQuery } from '@/src/utils';

interface Props {
  site: Site;
  sid: string;
}

export function Header(props: Props) {
  const { site, sid } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const query = getQuery()
  if (query[0] === 'admin') return null
  
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/" className="p-2">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-14 remove-bg"
                  src={site.dataSite.imageSite?.logo?.src}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {site.pages
                ?.filter((data) =>
                  ['contact', 'adoption'].includes(data.dataPage.type.slug),
                )
                .map((data, i) => (
                  <Link
                    key={i}
                    href={`/${data.slug}`}
                    className="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    {data.dataPage.seoPage.title}
                  </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              {!sid ? (
                <div
                  onClick={() => signIn('google', { callbackUrl: '/admin' })}
                  className="cursor-pointer inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Log in
                </div>
              ) : (
                <div
                  onClick={() => signOut()}
                  className="cursor-pointer inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Sign Out
                </div>
              )}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-14 remove-bg"
                      src={site?.dataSite.imageSite?.logo?.src}
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {site.pages
                      ?.filter((data) =>
                        ['contact', 'adoption'].includes(
                          data.dataPage.type.slug,
                        ),
                      )
                      .map((data, i) => (
                        <Link
                          key={i}
                          href={`/${data.slug}`}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          {data.dataPage.seoPage.title}
                        </Link>
                      ))}
                  </div>
                  <div className="py-6">
                    
                    {!sid ? (
                <div
                  onClick={() => signIn('google', { callbackUrl: '/admin' })}
                className="cursor-pointer -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
              >
                Log in
              </div>
              ) : (
                <div
                  onClick={() => signOut()}
                  className="cursor-pointer -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                  Sign Out
                </div>
              )}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
