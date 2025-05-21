import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, rememberMe } = body;

    // Validar entrada
    if (!email || !password) {
      return NextResponse.json(
        { error: "Correo electrónico y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Buscar usuario por email
    const user = await prisma.user.findUnique({
      where: { email, isActive: true },
    });

    // Verificar si el usuario existe
    if (!user) {
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    // Generar token y crear sesión
    const token = uuidv4();
    
    // Calcular fecha de expiración (7 días para "recordarme", 24 horas para sesión normal)
    const expiresAt = new Date();
    if (rememberMe) {
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 días
    } else {
      expiresAt.setHours(expiresAt.getHours() + 24); // 24 horas
    }

    // Crear sesión en la base de datos
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Configurar cookie con el token
    (await cookies()).set({
      name: 'authToken',
      value: token,
      expires: expiresAt,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    // Devolver información de usuario
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        role: user.role,
        isActive: user.isActive,
        hasActiveSub: user.hasActiveSub,
      },
      expiresAt: session.expiresAt,
    });
  } catch (error) {
    console.error("Error en login:", error);
    return NextResponse.json(
      { error: "Error durante el proceso de inicio de sesión" },
      { status: 500 }
    );
  }
}