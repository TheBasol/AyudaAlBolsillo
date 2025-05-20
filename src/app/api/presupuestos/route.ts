import { prisma } from "@/lib/prisma";
import { DetallesPresupuesto } from "@prisma/client";
import { NextResponse,NextRequest } from "next/server";
import * as yup from 'yup';

// obtener todo
export async function GET(request: Request) {

    const presupuestos = await prisma.presupuesto.findMany({
        orderBy: {nombre: 'asc', isFavorite:'desc'},
        include: {
            datosPresupuesto: true
        }
    })

    return NextResponse.json(presupuestos)
}


export async function POST(request: Request) {

    const { nombre, datosPresupuesto } = await request.json()

    let dataPp: DetallesPresupuesto[] = 
    datosPresupuesto.map(({ fecha, presupuestoMainId,id, ...rest }: DetallesPresupuesto) => ({
        ...rest,
        fecha: new Date(fecha)
    }));

    //new Date()

    try {
        const pp = await prisma.presupuesto.create({
            data: {
              nombre,
              isFavorite: false,
              datosPresupuesto: {
                create:dataPp
              }
            },
        });

        return NextResponse.json(pp)
        
    } catch (error) {
        console.log(error)
    }




}