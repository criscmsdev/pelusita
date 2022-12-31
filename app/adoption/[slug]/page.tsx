import { petGetAdoptionBySlug } from '@/lib/pets/product/getProductBySlug';
import { ProductOverviewsPet } from '@/ui/ProductOverviewsPet';
import React, { use } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export default function Page(props: Props) {
  const {
    params: { slug },
  } = props;
  const product = use(petGetAdoptionBySlug(slug, process.env.SITE_URL as string))
  // console.log('product', product)
  return <ProductOverviewsPet product={product} />;
}

