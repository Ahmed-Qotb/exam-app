import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = new Set(["/sign-in", "/sign-up", "/forget-password"]);
const privatePages = new Set(["/dashboard", "/quiz-history" , "/"]);

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = await getToken({ req });

  // ? Block logged in users from accessing auth pages
  if (authPages.has(pathname)) {
    if (token) {
      const redirectUrl = new URL("/dashboard", req.url);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  // ? Block non logged in users from accessing private pages
  if (privatePages.has(pathname)) {
    if (!token) {
      const redirectUrl = new URL("/sign-in", req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
