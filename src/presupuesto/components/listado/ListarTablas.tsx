'use client'
import { DetallesPresupuesto } from "@prisma/client";
import { useEffect, useState } from "react";
import { TablasGrid } from "../TablasGrid";
import { ModalPresupuestoForm } from "../ModalPresupuesto";
import { handleExport } from "@/presupuesto";


interface Props {
    id?: string;
    nombre?: string;
    datosPresupuesto?: DetallesPresupuesto[];
}

export const ListarTablas = ( { id, nombre,datosPresupuesto }: Props  ) => {

    const [selectedValue, setSelectedValue] = useState("Todos");

    let mesDisponible: string[] = []
  
    datosPresupuesto?.forEach(item => (
      !mesDisponible.includes(item.mes) ? mesDisponible.push(item.mes) : ""
    ))


    return (
      <>
      <div className="flex flex-row justify-center items-center gap-2">
        <h1 className="py-4 justify-start text-lg mb-2 font-semibold ">
          {nombre} </h1>

        <ModalPresupuestoForm 
              id={id} 
              nombrePp={nombre} 
              textButton="Modificar Presupuesto" 
              dataPp={datosPresupuesto}>
              <i className="bi bi-pencil text-lg mb-3 p-2 rounded-md cursor-pointer hover:bg-green-300"></i>
          </ModalPresupuestoForm>
      </div>

        <div className="flex justify-between items-center w-5/6">

          <div className="flex gap-2">
              <p>Mes</p>
              <select name="mes" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
              <option value="Todos">Todos</option>
              {
                  mesDisponible.map((item,index) => (
                  <option key={index} value={item}>{item}</option>
                  ))
              }
              </select>
          </div>
          <i onClick={()=>handleExport(datosPresupuesto,nombre)} className="bi bi-download p-2 rounded-md hover:bg-green-300 text-2xl cursor-pointer "></i> 
        </div>

        <TablasGrid params={datosPresupuesto || []} mes={selectedValue}/>    
      </>
    );
}

  