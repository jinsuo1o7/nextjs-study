import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    console.log('middle ware running!');
    if (request.nextUrl.pathname.startsWith('/products/4444')) {
        console.log('middle ware - redirect')
        return NextResponse.redirect(new URL('/products', request.url));
    }
}

export const config = {
    matcher: '/products/:path*',
}