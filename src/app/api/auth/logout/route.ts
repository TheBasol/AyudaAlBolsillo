import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    // Obtener token de las cookies
    const authToken = (await cookies()).get('authToken')?.value;
    
    if (authToken) {
      // Eliminar la sesión de la base de datos
      await prisma.session.deleteMany({
        where: {
          token: authToken
        }
      });
      
      // Eliminar la cookie
      (await
            // Eliminar la cookie
            cookies()).delete('authToken');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error durante el cierre de sesión:", error);
    return NextResponse.json(
      { error: "Error al cerrar sesión" },
      { status: 500 }
    );
  }
}