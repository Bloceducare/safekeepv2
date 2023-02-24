// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@lib/auth'


export const config = {
  matcher: ['/api/vault/:path*']
}

export async function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  const {status , reason } = await  isAuthenticated(request)
  if (!status) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: reason }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    )
  }
  return NextResponse.next();
}