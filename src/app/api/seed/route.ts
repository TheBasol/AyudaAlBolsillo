
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    // Limpiar base de datos

    await prisma.presupuesto.deleteMany();
    await prisma.user.deleteMany();

    // Crear usuarios
    const hashedPassword = await bcrypt.hash("123456", 10);
    
    const adminUser = await prisma.user.create({
      data: {
        email: "admin@example.com",
        password: hashedPassword,
        name: "Admin",
        lastName: "Usuario",
        role: "ADMIN",
        isActive: true,
        hasActiveSub: true,
      }
    });

    const regularUser = await prisma.user.create({
      data: {
        email: "usuario@example.com",
        password: hashedPassword,
        name: "Usuario",
        lastName: "Regular",
        role: "USER",
        isActive: true,
        hasActiveSub: false,
      }
    });

    const premiumUser = await prisma.user.create({
      data: {
        email: "premium@example.com",
        password: hashedPassword,
        name: "Usuario",
        lastName: "Premium",
        role: "USER",
        isActive: true,
        hasActiveSub: true,
      }
    });


    // Crear presupuestos asociados a usuarios
    await prisma.presupuesto.create({
      data: {
        nombre: 'viaje familiar',
        isFavorite: true,
        userId: adminUser.id,
        datosPresupuesto: {
          create: [
            { fecha: new Date('2025-04-01'), mes: 'Abril', tipo: 'Ingreso', categoria: 'Sueldo', concepto: 'Pago mensual', presupuesto: 2500, monto: 2600 },
            { fecha: new Date('2025-04-03'), mes: 'Abril', tipo: 'Ingreso', categoria: 'Negocio', concepto: 'Venta de productos', presupuesto: 1000, monto: 1100 },
            { fecha: new Date('2025-04-07'), mes: 'Abril', tipo: 'Egreso', categoria: 'Servicios', concepto: 'Pago de electricidad', presupuesto: 200, monto: 190 },
            { fecha: new Date('2025-04-10'), mes: 'Abril', tipo: 'Egreso', categoria: 'Gastos', concepto: 'Ropa', presupuesto: 150, monto: 160 },
            { fecha: new Date('2025-04-15'), mes: 'Abril', tipo: 'Egreso', categoria: 'Ahorro', concepto: 'Cuenta de ahorros', presupuesto: 300, monto: 300 },
            { fecha: new Date('2025-04-18'), mes: 'Abril', tipo: 'Egreso', categoria: 'Deudas', concepto: 'Pago préstamo', presupuesto: 500, monto: 500 },
            { fecha: new Date('2025-04-20'), mes: 'Abril', tipo: 'Ingreso', categoria: 'Otros', concepto: 'Devolución impuestos', presupuesto: 400, monto: 400 },
          ],
        },
      },
    });
  
    await prisma.presupuesto.create({
      data: {
        nombre: 'universidad',
        isFavorite: false,
        userId: regularUser.id,
        datosPresupuesto: {
          create: [
            { fecha: new Date('2025-05-01'), mes: 'Mayo', tipo: 'Ingreso', categoria: 'Sueldo', concepto: 'Beca mensual', presupuesto: 1500, monto: 1500 },
            { fecha: new Date('2025-05-03'), mes: 'Mayo', tipo: 'Ingreso', categoria: 'Otros', concepto: 'Apoyo familiar', presupuesto: 800, monto: 850 },
            { fecha: new Date('2025-05-07'), mes: 'Mayo', tipo: 'Egreso', categoria: 'Servicios', concepto: 'Internet', presupuesto: 300, monto: 310 },
            { fecha: new Date('2025-05-10'), mes: 'Mayo', tipo: 'Egreso', categoria: 'Gastos', concepto: 'Material escolar', presupuesto: 200, monto: 190 },
            { fecha: new Date('2025-05-12'), mes: 'Mayo', tipo: 'Egreso', categoria: 'Ahorro', concepto: 'Guardado para laptop', presupuesto: 500, monto: 500 },
          ],
        },
      },
    });

    await prisma.presupuesto.create({
      data: {
        nombre: 'vacaciones',
        isFavorite: true,
        userId: premiumUser.id,
        datosPresupuesto: {
          create: [
            { fecha: new Date('2025-02-01'), mes: 'Febrero', tipo: 'Ingreso', categoria: 'Sueldo', concepto: 'Pago mensual', presupuesto: 2000, monto: 2100 },
            { fecha: new Date('2025-02-05'), mes: 'Febrero', tipo: 'Ingreso', categoria: 'Negocio', concepto: 'Venta de artículos', presupuesto: 800, monto: 850 },
            { fecha: new Date('2025-02-10'), mes: 'Febrero', tipo: 'Egreso', categoria: 'Servicios', concepto: 'Pago de hotel', presupuesto: 500, monto: 480 },
            { fecha: new Date('2025-02-15'), mes: 'Febrero', tipo: 'Egreso', categoria: 'Gastos', concepto: 'Comidas', presupuesto: 300, monto: 320 },
            { fecha: new Date('2025-02-20'), mes: 'Febrero', tipo: 'Ingreso', categoria: 'Otros', concepto: 'Bono extra', presupuesto: 500, monto: 550 },
            { fecha: new Date('2025-02-25'), mes: 'Febrero', tipo: 'Egreso', categoria: 'Ahorro', concepto: 'Fondo para emergencias', presupuesto: 400, monto: 400 },
      
            { fecha: new Date('2025-03-01'), mes: 'Marzo', tipo: 'Ingreso', categoria: 'Sueldo', concepto: 'Pago mensual', presupuesto: 2100, monto: 2100 },
            { fecha: new Date('2025-03-05'), mes: 'Marzo', tipo: 'Ingreso', categoria: 'Negocio', concepto: 'Freelance', presupuesto: 900, monto: 920 },
            { fecha: new Date('2025-03-10'), mes: 'Marzo', tipo: 'Egreso', categoria: 'Servicios', concepto: 'Transporte', presupuesto: 150, monto: 160 },
            { fecha: new Date('2025-03-15'), mes: 'Marzo', tipo: 'Egreso', categoria: 'Gastos', concepto: 'Recuerdos', presupuesto: 250, monto: 270 },
            { fecha: new Date('2025-03-20'), mes: 'Marzo', tipo: 'Ingreso', categoria: 'Otros', concepto: 'Reembolso', presupuesto: 200, monto: 200 },
            { fecha: new Date('2025-03-25'), mes: 'Marzo', tipo: 'Egreso', categoria: 'Deudas', concepto: 'Pago de tarjeta', presupuesto: 600, monto: 580 },
          ]
        }
      }
    });

    // Presupuesto sin usuario asignado
    await prisma.presupuesto.create({
      data: {
        nombre: 'Plantilla de ejemplo',
        isFavorite: false,
        datosPresupuesto: {
          create: [
            { fecha: new Date('2025-06-01'), mes: 'Junio', tipo: 'Ingreso', categoria: 'Sueldo', concepto: 'Salario base', presupuesto: 1800, monto: 1800 },
            { fecha: new Date('2025-06-05'), mes: 'Junio', tipo: 'Egreso', categoria: 'Servicios', concepto: 'Alquiler', presupuesto: 600, monto: 600 },
            { fecha: new Date('2025-06-10'), mes: 'Junio', tipo: 'Egreso', categoria: 'Gastos', concepto: 'Supermercado', presupuesto: 300, monto: 320 },
          ]
        }
      }
    });

    return NextResponse.json({
        message: 'Seed executed successfully',
        data: {
          users: await prisma.user.count(),
          presupuestos: await prisma.presupuesto.count(),
          detallesPresupuesto: await prisma.detallesPresupuesto.count(),
        }
    });
}