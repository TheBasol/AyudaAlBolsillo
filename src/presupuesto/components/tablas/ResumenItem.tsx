import { esGastoMayor } from "@/presupuesto/utils/PresupuestoUtils";
import { totalCat } from "../../interfaces/Presupuesto";

interface Props {
    montosTotal: {[key: string]: number[]},
    totalCategorias: { [key: string]: totalCat },
    ppLista: string[],
    tipo: string
}

export const ResumenItem = ( { montosTotal, totalCategorias, ppLista, tipo }:Props ) => {

    return (

        <div className="w-1/4 min-w-[300px] h-auto mx-auto rounded-lg">
            <h2 className="text-center p-1">{tipo === 'Egresos' ? 'Gastos': tipo} resumen</h2>

            <div className={`grid grid-cols-3 bg-${tipo === 'Ingresos' ? 'green' : 'red'}-200 font-bold text-gray-800 p-3 rounded-t-sm border-b border-gray-400`}>
                            <div>Categoria</div>
                            <div className="text-center">Ppto</div>
                            <div className="text-center">Real</div>
            </div>
            {
                ppLista.map((categoria,index) => {
                            
                    if (totalCategorias[categoria].presupuesto > 0 || totalCategorias[categoria].monto > 0) {
                      return(
                        <div key={index} className="bg-slate-100 grid grid-cols-3 gap-y-2 text-gray-800 text-sm">
                            {
                                <>
                                    <div className="py-1 px-4">{categoria}</div>
                                    <div className="text-center">$ {totalCategorias[categoria].presupuesto}</div>
                                    <div className={`text-center 
                                        ${esGastoMayor(totalCategorias[categoria].presupuesto,totalCategorias[categoria].monto,tipo)} font-bold`} >
                                        $ {totalCategorias[categoria].monto}
                                    </div>  
                                </>
                            }
                        </div>

                        )  
                    } else {
                        return (
                            <div key={index}></div>
                        )
                    }
                })
            }       
            <div className={`grid grid-cols-3 bg-${tipo === 'Ingresos' ? 'green' : 'red'}-200 font-bold text-gray-800 p-3 rounded-b-sm`}>
                    <div>Total</div>
                    <div className="text-center">$ {montosTotal[tipo][1]}</div>
                    <div className={`text-center ${esGastoMayor(montosTotal[tipo][1],montosTotal[tipo][0],tipo)}`}>
                        $ {montosTotal[tipo][0]}
                    </div>
            </div>             
        </div>
    );
}
  