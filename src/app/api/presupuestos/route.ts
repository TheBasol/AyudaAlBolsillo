import { prisma } from "@/lib/prisma";
import { DetallesPresupuesto } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse,NextRequest } from "next/server";
import * as yup from 'yup';

// obtener todo
export async function GET(request: Request) {
    try {
        // Obtener parámetros de la URL
        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');
        
        // Convertir el parámetro limit a número si está presente
        const limit = limitParam ? parseInt(limitParam, 10) : undefined;
        
        // Obtener el token de autenticación de las cookies
        // Nota: cookies() no es asíncrona, no necesita await
        const authToken = (await cookies()).get('authToken')?.value;
        
        if (!authToken) {
            return NextResponse.json(
                { error: "Usuario no autenticado" },
                { status: 401 }
            );
        }

        // Buscar la sesión activa para obtener el ID del usuario
        const session = await prisma.session.findFirst({
            where: {
                token: authToken,
                expiresAt: { gt: new Date() }
            },
            include: {
                user: {
                    select: {
                        role: true
                    }
                }
            }
        });

        if (!session) {
            return NextResponse.json(
                { error: "Sesión inválida o expirada" },
                { status: 401 }
            );
        }

        // Filtrar presupuestos por usuario, excepto si es ADMIN que ve todos
        const where = session.user?.role === 'ADMIN' 
            ? {} 
            : { userId: session.userId };

        // Construir opciones de consulta
        const queryOptions: any = {
            where,
            orderBy: [
                { isFavorite: 'desc' },
                { updatedAt: 'desc' },
                { nombre: 'asc' }
            ],
            include: {
                datosPresupuesto: true
            }
        };
        
        // Añadir limit solo si está definido
        if (limit && !isNaN(limit) && limit > 0) {
            queryOptions.take = limit;
        }

        // Ejecutar la consulta con las opciones construidas
        const presupuestos = await prisma.presupuesto.findMany(queryOptions);

        return NextResponse.json(presupuestos);
    } catch (error) {
        console.error("Error al obtener presupuestos:", error);
        return NextResponse.json(
            { error: "Error al obtener los presupuestos" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { nombre, datosPresupuesto } = await request.json();

        // Obtener el token de autenticación de las cookies
        const authToken = (await cookies()).get('authToken')?.value;
        
        if (!authToken) {
            return NextResponse.json(
                { error: "Usuario no autenticado" },
                { status: 401 }
            );
        }

        // Buscar la sesión activa para obtener el ID del usuario
        const session = await prisma.session.findFirst({
            where: {
                token: authToken,
                expiresAt: { gt: new Date() }
            }
        });

        if (!session) {
            return NextResponse.json(
                { error: "Sesión inválida o expirada" },
                { status: 401 }
            );
        }

        // Transformar los datos de presupuesto para manejar las fechas
        let dataPp: DetallesPresupuesto[] = 
        datosPresupuesto.map(({ fecha, presupuestoMainId, id, ...rest }: DetallesPresupuesto) => ({
            ...rest,
            fecha: new Date(fecha)
        }));

        // Crear el presupuesto con el userId obtenido de la sesión
        const pp = await prisma.presupuesto.create({
            data: {
                nombre,
                isFavorite: false,
                userId: session.userId, // Asociar al usuario de la sesión
                datosPresupuesto: {
                    create: dataPp
                }
            },
        });

        return NextResponse.json(pp);
        
    } catch (error) {
        console.error("Error al crear presupuesto:", error);
        return NextResponse.json(
            { error: "Error al crear el presupuesto" },
            { status: 500 }
        );
    }
}