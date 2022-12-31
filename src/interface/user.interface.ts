import { Image } from "./site.interface"

export interface User {
  _id: string
  email: string
  password: string
  dataUser: DataUser
}

interface DataUser {
  username: string
  role: string
  image: Image
}

export interface CreateUser {
  username: string
  email: string
  password: string
  role: string
  oAuth: string
  image: string
  siteId: string
  // input: {
  // }
}