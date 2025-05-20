import { DetallesPresupuesto } from "@prisma/client";
import { getDataPresupuestos, GraficosGrid, ppToTable, TablasItem, TablasResumen } from '@/presupuesto/index'

interface Props {
    params: DetallesPresupuesto[],
    mes: string
}

export const TablasGrid = ({params, mes}:Props) =>{

    const presupuestos: DetallesPresupuesto[] = params.filter( item => item.mes === mes || mes === 'Todos' )

    const { 
        montosTotal , 
        presupuestoFiltrado, 
        totalCategorias 
    } =  getDataPresupuestos(presupuestos,mes)

    let { presupuestosEg, presupuestosIng } = ppToTable(presupuestoFiltrado)

    return (
      <div className="flex flex-wrap gap-4 justify-start w-full h-full bg-slate-200 pt-10 pb-10">

        <div className="flex flex-wrap items-center justify-around w-full">
            <TablasResumen montosTotal={montosTotal} totalCategorias={totalCategorias} existen={presupuestos.length > 0}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-3 w-full">
            <GraficosGrid montosTotal={montosTotal} 
                totalCategorias={totalCategorias} 
                existen={presupuestos.length > 0} 
                tipo="Vs"/>
            <GraficosGrid montosTotal={montosTotal} 
                totalCategorias={totalCategorias} 
                existen={presupuestos.length > 0} 
                tipo="Egresos"/>
            <GraficosGrid montosTotal={montosTotal} 
                totalCategorias={totalCategorias} 
                existen={presupuestos.length > 0} 
                tipo="Ingresos"/>
            <TablasItem ppFiltrado={presupuestosEg}
                totalCat={totalCategorias}
                existen={Object.keys(presupuestosEg).length > 0}
                tipo="Egresos" 
                ppData={params}/>   
            <TablasItem ppFiltrado={presupuestosIng} 
                totalCat={totalCategorias} 
                existen={Object.keys(presupuestosIng).length > 0}
                tipo="Ingresos"
                ppData={params}/>   
        </div>            

      </div>
    );
}
  