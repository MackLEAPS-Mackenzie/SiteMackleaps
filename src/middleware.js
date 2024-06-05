import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/pt", request.url));
  }
  return NextResponse.next();
}
