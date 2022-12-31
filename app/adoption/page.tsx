// import { getPage0 } from '@/lib/pets/getSite'
import { petGetPage0 } from '@/lib/pets/pages/page0/getPage'
import { petGetPage0BySlug } from '@/lib/pets/pages/page0/getPageBySlug'
import { petGetAdoptionsBySiteId } from '@/lib/pets/product/getAdoption'
import { PetList } from '@/ui/PetList'
import React, { use } from 'react'

export default function Page() {
  // const adoptions = use(petGetAdoptionsBySiteId('adoption', process.env.SITE_URL as string))
  const page = use(petGetPage0BySlug('adoption', process.env.SITE_URL as string))
  console.log('page', page)
  return (
    <PetList page={page} />
  )
}
