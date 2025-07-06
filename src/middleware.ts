import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const authPath = ['/login', '/signup'];
  const privateUrls = ['/create', '/dashboard', '/dashboard/profile','/dashboard/posts'];

  if (token && authPath.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!token && privateUrls.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/create',
    '/signup',
    '/login',
    '/dashboard/profile',
    '/dashboard/posts',
  ],
};
