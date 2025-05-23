import { DetallesPresupuesto } from "@prisma/client"
import { totalCat } from "../interfaces/Presupuesto"
import { Dispatch, SetStateAction } from "react";
import { ModalProps } from "@/components";

//interfaces
export interface GraficoCirculo {
    name: string;
    color: string;
    porcentaje: number;
}

export interface Presupuesto {
    id: string;
    nombre: string;
    datosPresupuesto: DetallesPresupuesto[]
    isFavorite: boolean;
    createdAt: Date;
    updatedAt: Date;
}

//variables
export const categorias = ['Servicios', 'Gastos', 'Ahorro', 'Deudas', 'Sueldo',"Inversion" ,'Negocio', 'Otros']
export const tipos = ['Ingreso', 'Egreso']
export const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
export const ppEgresos: string[] = ['Servicios', 'Gastos', 'Ahorro', 'Deudas']
export const ppIngresos: string[] = ['Sueldo', 'Negocio','Inversion','Otros']

//funciones
export const getDataPresupuestos = (presupuestos:DetallesPresupuesto[], mes:string) =>{

    const presupuestoFiltrado: Record<string, DetallesPresupuesto[]> = {}
    const totalCategorias: { [key: string]: totalCat } = {};
    const montosTotal: {[key: string]: number[]} = { 'Ingresos': [0,0], 'Egresos': [0,0]}


    categorias.forEach(item=> {
        presupuestoFiltrado[item] = [] 
        totalCategorias[item] = { 'presupuesto': 0, 'monto': 0}
    });

    categorias.forEach((categoria,index) => {

        let porCategoria = { 'presupuesto': 0, 'monto': 0 }

        presupuestos.forEach(presupuesto=> {
            if (presupuesto.categoria === categoria) {
                presupuestoFiltrado[categoria].push(presupuesto)
                porCategoria['presupuesto'] += presupuesto.presupuesto
                porCategoria['monto'] += presupuesto.monto

                if (presupuesto.tipo === 'Ingreso') {
                    montosTotal['Ingresos'][0] += presupuesto.monto
                    montosTotal['Ingresos'][1] += presupuesto.presupuesto
                } else if (presupuesto.tipo === 'Egreso') {
                    montosTotal['Egresos'][0] += presupuesto.monto
                    montosTotal['Egresos'][1] += presupuesto.presupuesto
                }                
            }  

        })

        totalCategorias[categoria] = porCategoria
    });

    return {montosTotal, totalCategorias, presupuestoFiltrado};

}

export const esGastoMayor = (presupuesto: number, monto: number, tipo = 'Egresos') => {

    if (tipo === 'Egresos') {
        return presupuesto>monto ? "text-green-500": presupuesto<monto ? "text-red-500": ""; 
    } else {
        return presupuesto<monto ? "text-green-500": presupuesto>monto ? "text-red-500": ""; 
    }
    
}


export const porcentajes = (numeros:{[key: string]: number},sumaTotal:{[key: string]: number[]}, tipo:String) => {

    const coloresIngresos = ["#008f1f", "#1ca333", "#008f6c", "#1ca37e", "#249900","#003400","#98ff96"];
    const coloresEgresos = ["#dc5135","#ba3d28","#99281b","#78140d","#570000"]

    let coloresDisponibles = tipo === 'Egresos' ? [...coloresEgresos] : [...coloresIngresos]

    let montoGrafico = tipo === 'Egresos' ? sumaTotal['Egresos'][0] : sumaTotal['Ingresos'][0]

    const resultados = Object.keys(numeros).map((numero,index) => ({
        name: numero,
        color: coloresDisponibles[index],
        porcentaje: Number(((numeros[numero] / montoGrafico) * 100).toFixed(2))
    }));


    return resultados
}

export const getGradient = ( totalCategorias:{ [key: string]: totalCat }, montosTotal: {[key: string]: number[]},tipo:String) => {
    const ppFiltrados : {[key: string]: number} = { }

    Object.keys(totalCategorias).forEach(item => {

        let monto = totalCategorias[item].monto
        let filtro = tipo === 'Egresos' ? ppEgresos.includes(item) : ppIngresos.includes(item)

        if (filtro && monto) {
            ppFiltrados[item] = monto
        }
    })

    let datosGraficaCircular = porcentajes(ppFiltrados,montosTotal, tipo)

      
    let gradient = "";
    let start = 0;


    datosGraficaCircular.forEach((item) => {
        gradient += `${item.color} ${start}% ${start + item.porcentaje}%, `;
        start += item.porcentaje;
    }); 

    gradient = gradient.slice(0, -2);

    return { gradient, datosGraficaCircular }
}

export const ppToTable = (ppFiltrado:Record<string, DetallesPresupuesto[]>) => {

    let ppIng = Object.entries(ppFiltrado).filter(item => item[1].length > 0 && !ppEgresos.includes(item[0]))
    let ppEg = Object.entries(ppFiltrado).filter(item => item[1].length > 0 && !ppIngresos.includes(item[0]))

    const presupuestosIng = ppIng.reduce((acc, [clave, valor]) => {
        acc[clave] = valor; 
        return acc;
    }, {} as Record<string, DetallesPresupuesto[]>);

    const presupuestosEg = ppEg.reduce((acc, [clave, valor]) => {
        acc[clave] = valor; 
        return acc;
    }, {} as Record<string, DetallesPresupuesto[]>);

    return { presupuestosIng, presupuestosEg }
}

export const handleExport = async(datosPresupuesto:DetallesPresupuesto[] | undefined,nombre:string | undefined) => {

  let pp  = datosPresupuesto?.map( ({id, presupuestoMainId, ...rest}) => Object.values(rest))

  const body = {
    datosPresupuesto : pp
  }

  try {
    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( body)
    }); 
    const blob = await response.blob();
  
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre+'.xlsx';
    a.click();
  
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error al generar el Excel:', error);
    alert('Hubo un error al generar el archivo Excel.');
  }

}

export const getPp = async(id:string) => {
    try {
        const res = await fetch( '/api/presupuestos/'+id , {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }).then(res =>  res.json())


       return res

      } catch (err) {
        console.error(err)
        return 'error'
      }
}

export const getExcelDataMain = async(id:string) => {
    let dataPp:Presupuesto = await getPp(id)
    let datosPresupuesto = dataPp.datosPresupuesto
    let nombre = dataPp.nombre
    
    handleExport(datosPresupuesto,nombre)
}

export const deletePp = async(id_Pp:string,setVisible: Dispatch<SetStateAction<boolean>>,setModalController:(value: SetStateAction<ModalProps>) => void) => {
    try {
    const res = await fetch('/api/presupuestos/'+id_Pp , {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if (res.ok) {
            setModalController({ 
            modalState: true, 
            message: 'Presupuesto Eliminado', 
            variant: 'success' 
          });
        setVisible(false);

    } else {
          setModalController({ 
            modalState: true, 
            message: 'Presupuesto no Eliminado', 
            variant: 'success' 
          });
    }
    } catch (err) {
    console.error(err)
    }
}

export const copyPp = async(id_Pp:string,setVisible: Dispatch<SetStateAction<boolean>>) => {

    try {
      const res = await fetch('/api/presupuestos/'+id_Pp , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.ok) {
        alert('Presupuesto Copiado correctamente')
        setVisible(false);
      } else {
        alert('Error al borrar')
      }
    } catch (err) {
      console.error(err)
    }
  }

export const toogleFavorite = async( id_Pp:string, isFavorite: boolean) => {

    let body= {
      isFavorite: !isFavorite
    }

    try {
      const res = await fetch( '/api/presupuestos/'+id_Pp , {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body )
      })
      if (res.ok) {
        alert('Presupuesto modificado correctamente')
        
      } else {
        alert('Error al guardar')
      }
    } catch (err) {
      console.error(err)
    }
}