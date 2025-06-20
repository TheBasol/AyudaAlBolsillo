'use client';

import Image from 'next/image'
import Link from "next/link";
import { SidebarItem } from './SidebarItem';
import { useUiStore } from '@/store';
import clsx from 'clsx';

const menuItems = [
  {
    path: '/presupuestos',
    title: 'Presupuesto',
    subTitle: 'Visualizacion',
    icon: <i className="bi bi-piggy-bank-fill"></i>
  },
  {
    path: '/calculadoras',
    title: 'Calculadoras',
    subTitle: 'Contador Client side',
    icon: <i className="bi bi-cash-coin"></i>
  }
]

export const Sidebar = () => {

    const isSidebarOpen = useUiStore( state => state.isSidebarOpen);
    const toggleSidebar = useUiStore( state => state.toggleSidebar);

    return (
        <>
            <span onClick={toggleSidebar} className="absolute text-white text-4xl top-5 left-4 cursor-pointer z-20" >
                <i className="bi bi-filter-left px-2 bg-green-500 rounded-md"></i>
            </span>
    
            {
                isSidebarOpen && (
                    <>
                        {/* Background black */ }
                        <div
                            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                        />
                        {/* Blur */ }
                        <div
                            onClick={ toggleSidebar }
                            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                        />            
                    </>
                )
            }

            {/* Sidemenu */ }
            <nav className={
                clsx(
                    "fixed top-0 bottom-0 p-2 w-[300px] left-[-300px] overflow-y-auto text-center bg-green-500 z-20 transform transition-all duration-300",
                    {
                    "translate-x-full": isSidebarOpen
                    }
            )}>

                <div className="text-white text-xl">
        
                    <div className="px-2.5 mt-1 flex justify-between items-center">
                    <Link href={'/dashboard'} >
                        <Image
                        src="/images/logo_1_1.png" 
                        alt="Ayuda al Bolsillo" 
                        width={60} 
                        height={20} 
                        />              
                    </Link>

                        <span onClick={toggleSidebar} 
                            className="text-3xl cursor-pointer mr-2 text-white"  >
                                x
                        </span> 
                            



                    </div>
        
                    <hr className="my-2 text-gray-600" />
                </div>

                <div className="flex flex-col h-[86%] justify-between gap-2 mt-2">
                    <div>
                        {
                            menuItems.map((item,index) => (
                            <SidebarItem toggleSidebar={toggleSidebar} key={index} path={item.path} title={item.title} subTitle={item.subTitle} icon={item.icon}/>
                            ))
                        }              
                    </div>

                    <button className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-500 text-white w-full">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span className="text-[15px] ml-4 text-gray-200">
                            {'Cerrar sesión'}
                        </span>
                    </button>
                </div>
    
            </nav>
          
        </>
    );
}