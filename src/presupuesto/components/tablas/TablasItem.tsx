import { DetallesPresupuesto } from "@prisma/client";
import { totalCat } from "../../interfaces/Presupuesto";

import { esGastoMayor, ModalPresupuestoForm} from "@/presupuesto";


interface Props {
    ppFiltrado: Record<string, DetallesPresupuesto[]>,
    totalCat: { [key: string]: totalCat },
    ppData: DetallesPresupuesto[]
    existen: boolean,
    tipo: string
}

export const TablasItem = ( {ppFiltrado, totalCat, existen,tipo,ppData}: Props ) => {

    return (
      <>
            {
                existen &&

                Object.keys(ppFiltrado).map((ppNombre,index) =>  (

                                        
                    <div key={index} className="flex flex-col h-auto justify-center items-center gap-1 w-1/4 min-w-[300px] mx-auto mb-6 borde">
                        <h2>{ppNombre}</h2>

                        <div id="pp" className="flex flex-1 flex-col min-w-[300px] justify-center">
                            <div className={`grid grid-cols-[1fr_1fr_1fr_0.5fr] p-2 bg-${tipo === 'Ingresos' ? 'green' : 'red'}-200 font-bold text-gray-800 border-b border-gray-400 py-3 rounded-t-sm`}>
                                <div className="flex justify-center items-center">Categoria</div>
                                <div className="text-center flex justify-center items-center">Ppto</div>
                                <div className="text-center flex justify-center items-center">Real</div>
                            </div>
                            
                            <div className="flex justify-center  flex-col bg-slate-100 text-gray-800 min-h-[80px]  text-sm">
                                {
                                    ppFiltrado[ppNombre].map(({concepto,presupuesto,monto,id,presupuestoMainId},index) => {
                                        let color = esGastoMayor(presupuesto,monto,tipo)
                                        return(
                                            <div key={index} className="grid grid-cols-[1fr_1fr_1fr_0.5fr] gap-1 min-w-[340px]">
                                                <p className="py-2 px-4 flex justify-start items-center">{concepto}</p>
                                                <p className="py-2 px-4 text-center flex justify-center items-center">$ {presupuesto}</p>
                                                <p className={`py-2 px-4 text-center flex justify-center items-center ${color} font-bold`}>
                                                    $ {monto}
                                                </p>
                                                <div className="flex items-center cursor-pointer">
                                                    <ModalPresupuestoForm 
                                                        id={presupuestoMainId} 
                                                        nombrePp={ppNombre} 
                                                        textButton="Modificar Presupuesto" 
                                                        dataPp={ppData}
                                                        idTarget={id}>
                                                        <i className="bi bi-pencil text-lg p-2 rounded-md cursor-pointer hover:bg-green-300"></i>
                                                    </ModalPresupuestoForm>
                                                </div>
                                            </div>
                                    )})
                                }
                            </div>

                            <div className={`grid grid-cols-[1fr_1fr_1fr_0.5fr] bg-${tipo === 'Ingresos' ? 'green' : 'red'}-200 font-bold text-gray-800 border-b border-gray-400 py-3 rounded-b-sm`}>
                                <div className="flex justify-center items-center">Total</div>
                                <div className="text-center flex justify-center items-center">$ {totalCat[ppNombre].presupuesto}</div>
                                <div className={`text-center flex justify-center items-center ${esGastoMayor(totalCat[ppNombre].presupuesto,totalCat[ppNombre].monto,tipo)}`}>
                                    $ {totalCat[ppNombre].monto}
                                </div>
                            </div>
                        </div>

                    </div>
                ))


            }
      </>
    );
}
  