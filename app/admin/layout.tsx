import HeaderDashboard from "@/ui/HeaderDashboard";
import { unstable_getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { authOptions } from "pages/api/auth/[...nextauth]";
import React, { use } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = use(unstable_getServerSession())
  console.log('session', session)
  return (
    <React.Fragment>
      <HeaderDashboard user={session?.user}/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </div>
    </React.Fragment>
  );
}
