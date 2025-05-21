'use client'
import { CloseButton } from "../Buttons/CloseButton";
import { SidebarMenuItem } from "./SidebarMenuItem";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  {
    path: '/dashboard/presupuesto',
    title: 'Presupuesto',
    subTitle: 'Visualizacion',
    icon: <i className="bi bi-piggy-bank-fill"></i>
  },
  {
    path: '/dashboard/calcular_interes',
    title: 'Calculadoras',
    subTitle: 'Contador Client side',
    icon: <i className="bi bi-cash-coin"></i>
  }
]

export const Sidebar = () => {
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);
    
    const openSideBar = () => {
      const sidebar = document.getElementById('sidebar');
      sidebar?.classList.toggle('left-[-300px]');
    }
    
    const handleLogout = async () => {
      try {
        setLoggingOut(true);
        
        // Llamar al endpoint de logout
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error('Error al cerrar sesión');
        }
        
        // Limpiar datos de sesión del almacenamiento local
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        
        // Redirigir al login
        router.push('/login');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        // Podrías mostrar una notificación de error aquí
      } finally {
        setLoggingOut(false);
      }
    };

    return (
        <>
        <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer z-2" onClick={openSideBar}>
            <i className="bi bi-filter-left px-2 bg-sidebarGreen rounded-md"></i>
        </span>
  
        <nav id="sidebar" className="fixed top-0 bottom-0 p-2 w-[300px] left-[-300px] overflow-y-auto text-center bg-green-600 z-2">
  
          <div className="text-gray-100 text-xl">
  
            <div className="px-2.5 mt-1 flex justify-between items-center">
              <Link href={'/dashboard'} onClick={openSideBar}>
                <Image
                  src="/logo_1_1.png" 
                  alt="Ayuda al Bolsillo" 
                  width={60} 
                  height={20} 
                />              
              </Link>


              <div onClick={openSideBar}>
                <CloseButton/>                
              </div>

            </div>
  
            <hr className="my-2 text-gray-600" />
          </div>
          
          <div className="flex flex-col h-[86%] justify-between gap-2 mt-2">
            <div>
              {
                menuItems.map((item,index) => (
                  <SidebarMenuItem key={index} openSideBar={openSideBar} path={item.path} title={item.title} subTitle={item.subTitle} icon={item.icon}></SidebarMenuItem>
                ))
              }              
            </div>

            <button 
              onClick={handleLogout}
              disabled={loggingOut}
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-500 text-white w-full"
            >
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200">
                {loggingOut ? 'Cerrando sesión...' : 'Cerrar sesión'}
              </span>
            </button>
          </div>
  
        </nav>
        </>
    );
}