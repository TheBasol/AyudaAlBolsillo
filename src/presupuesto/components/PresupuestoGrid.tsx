'use client'

import Link from "next/link";
import { Presupuesto } from "@/generated/prisma";
import { useEffect, useRef, useState } from "react";
import { copyPp, deletePp, getExcelDataMain, toogleFavorite} from "../utils/PresupuestoUtils";

export const PresupuestoGrid = ({ presupuestosItem }: { presupuestosItem: Presupuesto[] }) => {

  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [id, setId] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

    
  const handleContextMenu = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setId(e.currentTarget.id)
      setPosition({ x: centerX, y: centerY });
      setVisible(true);

  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>        
      {
        presupuestosItem.map((item,index) => (
          <div key={index} className="bg-green-400 hover:bg-green-300
          cursor-pointer flex items-center justify-between w-4/5 md:w-3/5 rounded-md">
            <Link className="flex-1 p-2" href={`/dashboard/presupuesto/${item.id}`}  
            as={`/dashboard/presupuesto/${item.nombre}_${item.id}`}>
              <h2 className="px-2">{item.nombre}</h2>
            </Link>
            <div onClick={() => toogleFavorite(item.id,item.isFavorite)}>
              { item.isFavorite ? <i className="text-white bi bi-star-fill"></i>  : <i className="bi bi-star text-white"></i> }                
            </div>
            <i id={item.id} onClick={handleContextMenu} className="text-white bi bi-three-dots-vertical px-2 relative h-full"></i>         
          </div>

        ))
      }

        {visible && (
          <div
            id={id}
            ref={menuRef}
            className="absolute bg-white shadow-lg border rounded-md z-50"
            style={{ top: position.y, left: position.x }}
          >
            <button onClick={() => getExcelDataMain(id)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Descargar Excel
            </button>
            <button onClick={() => copyPp(id,setVisible)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Duplicar
            </button>
            <button onClick={() => deletePp(id,setVisible)} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Eliminar
            </button>
          </div>
        )}
    </>
  );
}
    