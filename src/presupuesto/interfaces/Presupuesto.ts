export interface DetallesPresupuesto {
    fecha: string,
    mes: string,
    tipo: string,
    categoria: string,
    concepto: string,
    presupuesto: number,
    monto: number
}

export interface Presupuesto {
    id: number,
    nombre: string,
    datosPresupuesto: DetallesPresupuesto[]
}

export interface totalCat {
    presupuesto: number,
    monto: number
}