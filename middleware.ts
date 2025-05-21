import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas públicas que no requieren autenticación
const publicRoutes = ['/login', '/registro', '/', '/api/auth'];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Verificar si la ruta es pública
  const isPublicRoute = publicRoutes.some(route => 
    path === route || path.startsWith('/api/seed')
  );
  
  if (isPublicRoute) {
    return NextResponse.next();
  }
  
  // Verificar token de sesión
  const authToken = request.cookies.get('authToken')?.value;
  
  if (!authToken && !path.startsWith('/api/')) {
    // Redirigir al login si no hay token y es una ruta protegida no-API
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  if (!authToken && path.startsWith('/api/')) {
    // Devolver error 401 para solicitudes API sin token
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};