import { Product } from "@/src/interface/product.interface";

export async function petGetAdoptionBySlug(slug: string, siteId: string):Promise<Product> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query PetGetAdoptionBySlug($slug: String!, $siteId: String!){
        petGetAdoptionBySlug(slug: $slug, siteId: $siteId){
          _id
          slug
          dataProduct{
            seoProduct{
              title
              description
            }
            imageProduct{
              src
              alt
            }
          }
          
        }
      }
      
      `,
      variables: {slug, siteId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetAdoptionBySlug) 
}

