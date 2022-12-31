import { Image, Seo, UpdateDate } from "./site.interface";

export interface Pet {
  _id: string;
  dataPet: DataPet;
  siteId: string
  parentId: string
  slug: string
}

export interface DataPet {
  type: Type
  // mark: Type
  // inStock: number
  // price: number
  // discountPrice: number
  // promotion: Type
  details: string
  race: string
  featured: string
  specs: string
  tags: {
    uid: string
    text: string
    slug: string
  }
  imagePet: Image[]
  seoPet: Seo
  updateDate: UpdateDate
}

export interface Type {
  label: string
  slug: string
}

export interface ListPet {
  page: ConnectionPet
  pageData: PageDataPet
}
export interface ConnectionPet {
  edges: EdgePet[]
  pageInfo: PageInfoPet
}
export interface EdgePet {
  cursor: string
  node: Pet
}
export interface PageInfoPet {
  startCursor: string
  endCursor: string
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export interface PageDataPet {
  count: number
  limit: number
  offset:number
}
