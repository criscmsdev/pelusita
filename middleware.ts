
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { petGetSiteByAdmin, petGetSiteStoreNavigation } from "./lib/pets/site/getSite"

export default withAuth(
  async function middleware(req) {
    // const site = await petGetSiteByAdmin(process.env.SITE_URL as string)
    // req.cookies.set({name: 'garritas', value: site.dataSite.adminSite.map(data => data.sid).toString() })
    // console.log('req', req.cookies.getAll())
    // console.log('req', req.cookies.get('garritas')?.value.split(','))
    // // const token = await getToken({ req })
    // console.log('token', token)
  },
  {
    callbacks: {
      authorized: ({req, token }) => ['63abcb04917bc476dc32a604', '63ad1b2f47ad9db0a03b9bae'].includes(token?.sid as string),
      // authorized: ({req, token }) => req.cookies.get('garritas')!.value.split(',').includes(token?.sub!),
      
    },
  }
)

export const config = { matcher: ["/admin/:path*"] }