'use client';

import { Sidebar } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function DashboardLayout({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Función para verificar si hay una sesión activa
    const checkSession = async () => {
      try {
        // Intentar obtener usuario de almacenamiento local
        const userFromStorage = sessionStorage.getItem('user') || localStorage.getItem('user');
        
        // Si no hay usuario almacenado, verificar con el servidor
        if (!userFromStorage) {
          const response = await fetch('/api/session');
          const data = await response.json();
          
          if (!response.ok || !data.authenticated) {
            // No autenticado, redirigir a login
            router.push('/login');
            return;
          }
          
          // Guardar información del usuario en sessionStorage
          sessionStorage.setItem('user', JSON.stringify(data.user));
        }
        
        // Usuario autenticado
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error verificando sesión:', error);
        // En caso de error, redirigir al login
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [router]);

  // Mostrar pantalla de carga mientras se verifica la sesión
  if (isLoading) {
    return <p>login...</p>;
  }

  // Solo mostrar el contenido si está autenticado
  return isAuthenticated ? (
    <div className="bg-slate-200 font-[Poppins] overflow-x-auto w-full">
      <Sidebar />
      {children}
    </div>
  ) : null; // No renderizar nada mientras se redirige
}