'use client'
import { CloseButton } from "../Buttons/CloseButton";
import { SidebarMenuItem } from "./SidebarMenuItem";
import Image from 'next/image'

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

export const Sidebar =() => {

    
      const openSideBar = () => {
        const sidebar = document.getElementById('sidebar');
        sidebar?.classList.toggle('left-[-300px]');
      }

    return (
        <>
        <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer z-2" onClick={openSideBar}>
            <i className="bi bi-filter-left px-2 bg-sidebarGreen rounded-md"></i>
        </span>
  
        <nav id="sidebar" className="fixed top-0 bottom-0 p-2 w-[300px] left-[-300px] overflow-y-auto text-center bg-green-600 z-2">
  
          <div className="text-gray-100 text-xl">
  
            <div className="px-2.5 mt-1 flex justify-between items-center">
              <Image
                src="/logo_1_1.png" 
                alt="Ayuda al Bolsillo" 
                width={60} 
                height={20} 
              />

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

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-500 text-white">
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
          </div>
  
        </nav>
        </>
    );
}
  