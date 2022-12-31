import { CreateUser, User } from "@/src/interface/user.interface";

export async function petCreateUser(input: CreateUser):Promise<User> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     query: `
     mutation PetCreateUser($input: CreateUser!) {
      petCreateUser(input: $input) {
        _id
        dataUser{
          username
          role
          image{
            src
          }
        }
        email
      }
    }
     `,
     variables: {input},
   }),
 })
 .then(res => res.json())
 .then((res)=> res.data)
 .then((result) => result.petCreateUser) 
}