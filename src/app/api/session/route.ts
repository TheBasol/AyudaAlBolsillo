import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const token = (await cookies()).get('authToken')?.value;
    
    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    // Buscar sesión activa
    const session = await prisma.session.findFirst({
      where: {
        token,
        expiresAt: { gt: new Date() }
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            lastName: true,
            role: true,
            hasActiveSub: true,
          }
        }
      }
    });

    if (!session) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      user: session.user
    });
  } catch (error) {
    console.error("Error al verificar sesión:", error);
    return NextResponse.json(
      { error: "Error al verificar sesión" },
      { status: 500 }
    );
  }
}