import { Site } from "@/src/interface/site.interface";

export const PET_GET_SITE = `
query PetGetSite($id: String!) {
  petGetSite(id: $id) {
    _id
    dataSite {
      name
      description
      type
      
      dbSite {
        uid
        label
        slug
      }
      infoSite{
        clientId
      }
      imageSite {
        banner {
          src
          alt
        }
        logo {
          src
          alt
        }
        icon {
          src
          alt
        }
      }
    }
    url
  }
}
`;

export async function petGetSite(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PET_GET_SITE,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetSite) 
}

export async function petGetSiteByAdmin(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query PetGetSite($id: String!) {
        petGetSite(id: $id) {
          dataSite {
            name
            adminSite{
              sid
            }
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetSite) 
}

export async function petGetSiteStoreNavigation(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: `
      query PetGetSite($id: String!) {
        petGetSite(id: $id) {
          _id
          dataSite {
            name
            description
            type{
              slug
            }
            imageSite {
              logo {
                src
                alt
              }
            }
          }
          pages{
            dataPage{
              type{
                slug
              }
              seoPage{
                title
              }
            }
            slug
            
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetSite) 
}


// export const sites: Site[] = [
//   {
//     _id: '63ab9288016e34e2760d12fa',
//     dataSite: {
//       name: "pelusita",
//       description: "site description",
//       type: "pets",
//       dbSite: [],
//       infoSite: {
//         domain: {
//           name: "pelusita",
//           dlt: "vercel.app"
//         },
//         clientId: "1234"
//       },
//       imageSite: {
//         logo: {
//           src: "/logo.png",
//           alt: " "
//         }
//       }
//     },
//     url: "pelusita.vercel.app",
//     pages: [
//       { 
//         _id: "12345",
//         dataPage: {
//           type: "page-blank",
//           seoPage:{
//             title: 'Home',
//             description: "page description",
//             href: "home",
//           }
//         },
//         slug: "home",
//         parentId: "63a07590f6e7d8a5a48fcf33",
//         siteId: "63a07590f6e7d8a5a48fcf33"
//       },
//       { 
//         _id: "12345",
//         dataPage: {
//           type: "category",
//           seoPage:{
//             title: 'Adopcíon',
//             description: "page description",
//             href: "adopcion",
//           }
//         },
//         slug: "adopcion",
//         parentId: "63a07590f6e7d8a5a48fcf33",
//         siteId: "63a07590f6e7d8a5a48fcf33",
//         pets: [{
//           _id: "qwer",
//           slug: "alex",
//           dataPet: {
//             seoPet: {
//               title: "alex",
//               description:"Alex fue rescatado de la perrera, de donde posiblemente no hubiera salido nunca. Terminó ahí debido a una denuncia, por una caso de síndrome de Noé, convivía junto a unos 20 animales entre perros y gatos, al recibir una denuncia fueron a sacar a todos los animales y terminaron en la perrera.",
//               href: "alex",
//               image: {
//                 src: "https://www.huellascallejeras.com/wp-content/uploads/2020/07/Alex-gato-en-adopcion-3.jpg",
//                 alt: "alex"
//               }
//             }
//           }
//         }]
//       },
//       { 
//         _id: "12345",
//         dataPage: {
//           type: "contact",
//           seoPage:{
//             title: 'Contacto',
//             description: "page description",
//             href: "contacto",
//           }
//         },
//         slug: "contacto",
//         parentId: "63a07590f6e7d8a5a48fcf33",
//         siteId: "63a07590f6e7d8a5a48fcf33"
//       },
//     ]
//   },
// ];

// export const pages0 = [
//   { 
//     _id: "12345",
//     dataPage: {
//       type: "page-blank",
//       seoPage:{
//         title: 'Home',
//         description: "page description",
//         href: "home",
//       }
//     },
//     slug: "home",
//     parentId: "63a07590f6e7d8a5a48fcf33",
//     siteId: "63a07590f6e7d8a5a48fcf33"
//   },
//   { 
//     _id: "12345",
//     dataPage: {
//       type: "category",
//       seoPage:{
//         title: 'Adopcíon',
//         description: "page description",
//         href: "adopcion",
//       }
//     },
//     slug: "adopcion",
//     parentId: "63a07590f6e7d8a5a48fcf33",
//     siteId: "63a07590f6e7d8a5a48fcf33",
//     pets: [
//       {
//       _id: "qwer",
//       slug: "alex",
//       dataPet: {
//         seoPet: {
//           title: "alex",
//           description:"Alex fue rescatado de la perrera, de donde posiblemente no hubiera salido nunca. Terminó ahí debido a una denuncia, por una caso de síndrome de Noé, convivía junto a unos 20 animales entre perros y gatos, al recibir una denuncia fueron a sacar a todos los animales y terminaron en la perrera.",
//           href: "alex",
//           image: {
//             src: "https://www.huellascallejeras.com/wp-content/uploads/2020/07/Alex-gato-en-adopcion-3.jpg",
//             alt: "alex"
//           }
//         }
//       }
//     },
//       {
//       _id: "qwers",
//       slug: "gorda",
//       dataPet: {
//         seoPet: {
//           title: "gorda",
//           description:"Gorda es una perra joven que fue rescatada hace un tiempo por una protectora de Oropesa. Lamentablemente la adopción no funcionó. Tras buscar incansablemente una casa de acogida para Gorda, esta no llegó y fue trasladada al refugio de Huellas callejeras en el que ahora forma parte de la manada. ",
//           href: "gorda",
//           image: {
//             src: "https://www.huellascallejeras.com/wp-content/uploads/2021/03/Gorda-perros-en-adopcion-castellon.jpg",
//             alt: "alex"
//           }
//         }
//       }
//     },
//   ]
//   },
//   { 
//     _id: "12345",
//     dataPage: {
//       type: "contact",
//       seoPage:{
//         title: 'Contacto',
//         description: "page description",
//         href: "contacto",
//       }
//     },
//     slug: "contacto",
//     parentId: "63a07590f6e7d8a5a48fcf33",
//     siteId: "63a07590f6e7d8a5a48fcf33"
//   },
// ]
// export async function getSite(id: string | undefined) {
//   // Assuming it always return expected categories
//   return sites.find((data) => data._id === id);
// }
// export async function getPage0(slug: string | undefined) {
//   // Assuming it always return expected categories
//   return pages0.find((data) => data.slug === slug);
// }