import prisma from "@/lib/prisma";
import {  Presupuesto } from "@prisma/client";
import { NextResponse,NextRequest } from "next/server";


const getTodo = async( id:string): Promise<Presupuesto | null> => {

    const todo = await prisma.presupuesto.findFirst(
        {where: {id}}
    );

    return todo;
}

export async function GET(request: Request, context: { params:Promise<{ id: string }> }) {

    const { id } = await context.params;

    const todo = await getTodo(id)

    if (!todo) {
        return NextResponse.json({message: 'todo con id'+id+ 'no existe'}, {status:404});
    }

    return NextResponse.json(todo)
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    console.log('body', body);

    const id_user = "138867a2-5087-4777-a9fe-ec6faf3a2b0a"

    // Crear el presupuesto con el userId obtenido de la sesión
    const createBudget = await prisma.presupuesto.create({
        data: {
            nombre: body.nombre,
            userId: id_user,
            isFavorite: false, 
            datosPresupuesto: body.datosPresupuesto,
        },
    });

    return NextResponse.json(createBudget, {status: 201});

}