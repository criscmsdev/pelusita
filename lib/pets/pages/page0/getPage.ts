
import { Page } from "@/src/interface/page.interface";

export const PET_GET_PAGE0 = `
query PetGetPage0($id: String!){
  petGetPage0(id: $id){
    _id
    dataPage{
      seoPage{
        title
      }
    }
    slug

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

export async function petGetPage0(id: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PET_GET_PAGE0,
      variables: {id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetPage0) 
}

