import { getGradient, GraficoItem, PastelItem, porcentajes,ppEgresos } from "@/presupuesto";
import { totalCat } from "../interfaces/Presupuesto";

interface Props {
    montosTotal: {[key: string]: number[]},
    totalCategorias: { [key: string]: totalCat },
    existen: boolean,
    tipo: string
}

export const GraficosGrid = ( { montosTotal, totalCategorias, existen, tipo }:Props ) => {

    const { datosGraficaCircular } = getGradient(totalCategorias,montosTotal,tipo)

    let tipoPp = tipo === 'Egresos' ? 'Gastos' : tipo

    return (
      <>
        {
          existen &&    
          <>
            {
              datosGraficaCircular.length > 0 && tipo != 'Vs' ?
              <PastelItem datosGraficaCircular={datosGraficaCircular} tipo={tipoPp}/>             
              :
              <GraficoItem datosGraficar={montosTotal}/>  
            }
          </>    
        }
      </>
      );
}

  