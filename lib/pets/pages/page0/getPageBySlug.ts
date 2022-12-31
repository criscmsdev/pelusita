
import { Page } from "@/src/interface/page.interface";

export const PET_GET_PAGE0_BY_SLUG = `
query PetGetPage0BySlug($slug: String!, $siteId: String!){
  petGetPage0BySlug(slug: $slug, siteId: $siteId){
    _id
    slug
    dataPage{
      seoPage{
        title
      }
    }
    adoptions{
      slug
      dataProduct{
        seoProduct{
          title
          image{
            src
            alt
          }
        }
      }
    }
    products{
      slug
      dataProduct{
        seoProduct{
          title
          image{
            src
            alt
          }
        }
      }
    }
  }
}

`;

export async function petGetPage0BySlug(slug: string, siteId: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PET_GET_PAGE0_BY_SLUG,
      variables: {slug, siteId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetPage0BySlug) 
}

