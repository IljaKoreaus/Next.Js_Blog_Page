import { NextRequest, NextResponse } from "next/server";


export function proxy(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    // Exclude API routes, static files, image optimizations and png. files
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
}