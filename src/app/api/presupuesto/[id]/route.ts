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

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {

    const { nombre, datosPresupuesto, isFavorite } = await request.json();
    const { id } = await context.params;

    const todo = await getTodo(id);
    if (!todo) {
        return NextResponse.json({message: 'Presupuesto con id '+id+' no existe'}, {status:404});
    }

    //verificar si esta la sesion

    const updateData = {
        deleteMany: {},
        create: datosPresupuesto['create']
    }


    const updateBudget = await prisma.presupuesto.update({
        where: { id },
        data: {
            nombre,
            datosPresupuesto: updateData
        },  
    });


    return NextResponse.json(updateBudget, {status: 201});
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { isFavorite } = await request.json();
        const { id } = await context.params;

        const todo = await getTodo(id);
        if (!todo) {
            return NextResponse.json(
                { message: 'Presupuesto con id ' + id + ' no existe' }, 
                { status: 404 }
            );
        }

        const updatedBudget = await prisma.presupuesto.update({
            where: { id },
            data: { isFavorite }
        });

        return NextResponse.json(updatedBudget, { status: 200 });

    } catch (error) {
        console.error('Error updating favorite:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' }, 
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;

        // Verificar que el presupuesto existe
        const todo = await getTodo(id);
        if (!todo) {
            return NextResponse.json(
                { message: 'Presupuesto con id ' + id + ' no existe' }, 
                { status: 404 }
            );
        }

        // Eliminar el presupuesto
        const deletedBudget = await prisma.presupuesto.delete({
            where: { id }
        });

        return NextResponse.json(
            { 
                message: 'Presupuesto eliminado exitosamente',
                deletedBudget 
            }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('Error deleting budget:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' }, 
            { status: 500 }
        );
    }
}