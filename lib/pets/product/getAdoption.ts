import { Product } from "@/src/interface/product.interface";

export const PET_GET_PRODUCT_BY_SITE_ID = `
query PetGetAdoptionsBySiteId($type: String!, $siteId: String!) {
  petGetAdoptionsBySiteId(type: $type, siteId: $siteId) {
    _id
    slug
  }
}
`;

export async function petGetAdoptionsBySiteId(type: string, siteId: string):Promise<Product> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PET_GET_PRODUCT_BY_SITE_ID,
      variables: {type, siteId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetAdoptionsBySiteId) 
}

