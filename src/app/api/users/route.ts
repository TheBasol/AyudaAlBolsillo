import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    // Si se proporciona un ID, devolver ese usuario específico
    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          name: true,
          lastName: true,
          isActive: true,
          hasActiveSub: true,
          role: true,
          createdAt: true,
          updatedAt: true,
          // No incluimos password por seguridad
          subscriptions: {
            select: {
              id: true,
              planType: true,
              isActive: true,
              startDate: true,
              endDate: true,
            }
          }
        }
      });

      if (!user) {
        return NextResponse.json(
          { error: "Usuario no encontrado" },
          { status: 404 }
        );
      }

      return NextResponse.json({ user });
    }

    // Si no hay ID, devolver todos los usuarios (con paginación)
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          lastName: true,
          isActive: true,
          hasActiveSub: true,
          role: true,
          createdAt: true,
          // No incluimos password por seguridad
          subscriptions: {
            select: {
              planType: true,
              isActive: true,
            }
          }
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.user.count()
    ]);

    return NextResponse.json({
      users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json(
      { error: "Error al obtener los usuarios" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, lastName, role } = body;

    // Validaciones básicas
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, contraseña y nombre son obligatorios" },
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "El email ya está registrado" },
        { status: 400 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        lastName: lastName || null,
        role: role || "USER",
        subscriptions: {
          create: {
            planType: "FREE",
            isActive: true,
          }
        }
      },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
        role: true,
        isActive: true,
        hasActiveSub: true,
        createdAt: true,
        subscriptions: {
          select: {
            id: true,
            planType: true,
            isActive: true,
          }
        }
      }
    });

    return NextResponse.json({ 
      message: "Usuario creado exitosamente", 
      user: newUser 
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json(
      { error: "Error al crear el usuario" },
      { status: 500 }
    );
  }
}

// PATCH /api/users - Actualizar un usuario
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, email, name, lastName, role, isActive, currentPassword, newPassword } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID de usuario requerido" },
        { status: 400 }
      );
    }

    // Verificar si el usuario existe
    const existingUser = await prisma.user.findUnique({
      where: { id }
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Preparar los datos para actualizar
    const updateData: any = {};

    if (email) updateData.email = email;
    if (name) updateData.name = name;
    if (lastName !== undefined) updateData.lastName = lastName;
    if (role) updateData.role = role;
    if (isActive !== undefined) updateData.isActive = isActive;

    // Si quiere actualizar la contraseña
    if (newPassword && currentPassword) {
      // Verificar la contraseña actual
      const passwordValid = await bcrypt.compare(currentPassword, existingUser.password);
      
      if (!passwordValid) {
        return NextResponse.json(
          { error: "La contraseña actual es incorrecta" },
          { status: 400 }
        );
      }
      
      // Hash de la nueva contraseña
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    // Actualizar el usuario
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
        role: true,
        isActive: true,
        hasActiveSub: true,
        updatedAt: true
      }
    });

    return NextResponse.json({ 
      message: "Usuario actualizado exitosamente", 
      user: updatedUser 
    });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json(
      { error: "Error al actualizar el usuario" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    if (!userId) {
      return NextResponse.json(
        { error: "ID de usuario requerido" },
        { status: 400 }
      );
    }

    // Verificar si el usuario existe
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    await prisma.user.delete({
      where: { id: userId }
    });

    return NextResponse.json({ 
      message: "Usuario eliminado exitosamente" 
    });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json(
      { error: "Error al eliminar el usuario" },
      { status: 500 }
    );
  }
}