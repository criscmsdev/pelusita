import 'swiper/css/bundle';
import 'swiper/swiper.min.css';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/styles/globals.css';
import { petGetSiteStoreNavigation } from '@/lib/pets/site/getSite';
import { Header } from '@/ui/Header';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import React, { use } from 'react';
import { SessionAuthProvider } from '@/src/context/SessionContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = use(petGetSiteStoreNavigation(process.env.SITE_URL as string))
  const session = use(unstable_getServerSession())
  // console.log('session1', session)
  return (
    <html>
      <head>
        <title>Garritas</title>
        <link
          rel="icon"
          type="image/x-icon"
          className='remove-bg'
          href="/logo.png"
        />
      </head>
      <body>
      <SessionAuthProvider>
        <Header site={site} sid={session?.user.email as string}/>
        {children}
      </SessionAuthProvider>
      </body>
    </html>
  );
}
