
import { User } from "@/src/interface/user.interface";
import { petCreateUser } from "./createUser";


export async function petGetUserByEmail(email: string, siteId: string):Promise<User> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query PetGetUserByEmail($email: String!, $siteId: String!) {
        petGetUserByEmail(email: $email, siteId: $siteId) {
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
      variables: {email, siteId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.petGetUserByEmail) 
}


export const oAUthToDbUser = async( oAuthemail: string, oAuthusername: string, oAuthimage: string, oAuthprovider:string ) => {
  try {
    const user = await petGetUserByEmail(oAuthemail, process.env.SITE_URL as string)
    if ( user ) {
        const { _id, dataUser, email } = user;
        const { username, role, image } = dataUser
        const { src } = image
        return { sid: _id, username, email, role, image: src };
    } 
  } catch (error) {
    console.log(error);
  }

    const newUser = await petCreateUser({ username: oAuthusername, email: oAuthemail, password: '@@@@@@', role: 'USER_ROL', image: oAuthimage, siteId: process.env.SITE_URL as string, oAuth: oAuthprovider})  
    // graphQLClient.request(CREATE_USER, { input: { email: oAuthEmail.toLowerCase(), username: oAuthUserName.toLowerCase(), password: '@@@@@@', role: 'USER_ROL', image: oAuthPicture, site: '1234567', oAuth: aAuthProvider } })
      const { _id, dataUser, email } = newUser;
      const { username, role, image } = dataUser;
      const { src } = image
    return { sid:_id, username, email, role, image: src };
}