import {prisma} from "@/lib/prisma";
import { DetallesPresupuesto, Presupuesto } from "@prisma/client";
import { NextResponse,NextRequest } from "next/server";
import * as yup from 'yup';

interface Segments {
    params: {
        id: string
    }
}


const getTodo = async( id:string): Promise<Presupuesto | null> => {

    const todo = await prisma.presupuesto.findFirst(
        {where: {id},
        include: {
            datosPresupuesto: true
        }}
    );

    return todo;
}


export async function GET(request: Request, context: { params: { id: string } }) {

    const { id } = context.params;

    const todo = await getTodo(id)

    if (!todo) {
        return NextResponse.json({message: 'todo con id'+id+ 'no existe'}, {status:404});
    }

    return NextResponse.json(todo)
}

const putSchema = yup.object({
    nombre: yup.string().optional(),
    isFavorite: yup.boolean().optional(),
    datosPresupuesto: yup.array().of(
      yup.object({
        fecha: yup.date().required(),
        mes: yup.string().required(),
        tipo: yup.string().required(),
        categoria: yup.string().required(),
        concepto: yup.string().required(),
        presupuesto: yup.number().required(),
        monto: yup.number().required(),
      })
    ).optional()
  });

export async function PUT(request: Request, context: { params: { id: string } }) {

    const { id } = await context.params;

    const { datosPresupuesto, nombre, isFavorite } = await putSchema.validate( await request.json() );
    let data = {}

    if (isFavorite === undefined) {
        data = { 
            nombre, 
            datosPresupuesto: {
                deleteMany: {},
                create: datosPresupuesto
            }
        }        
    } else {
        data = { 
            isFavorite
        }   
    }

    const updatedPp = await prisma.presupuesto.update({
        where: {id},
        data
    }) 

    return NextResponse.json(updatedPp)
}

export async function DELETE(request: Request, context: { params: { id: string } }) {

    const { id } = await context.params;

    const deletedPp = await prisma.presupuesto.delete({where: {id}}) 

    return NextResponse.json(deletedPp)
}

export async function POST(request: Request, context: { params: { id: string } }) {

    const { id } = await context.params;

    const Pp = await prisma.presupuesto.findFirst({
        where: { id },
        include: {
          datosPresupuesto: {
            select: {
                fecha:true,
                monto:true,
                mes: true,
                concepto:true,
                presupuesto:true,
                tipo: true,
                categoria: true
            }
          }
        }
    })

    let PpNombre = Pp?.nombre + ' Copia'

    const copyPp = await prisma.presupuesto.create({
        data: {
          nombre: PpNombre,
          isFavorite: Pp?.isFavorite,
          datosPresupuesto: {
            create: Pp?.datosPresupuesto
          }
        },
    })

    return NextResponse.json(copyPp)
}

