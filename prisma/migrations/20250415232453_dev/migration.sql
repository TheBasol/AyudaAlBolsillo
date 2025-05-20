-- CreateTable
CREATE TABLE "Presupuesto" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Presupuesto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallesPresupuesto" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "mes" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "concepto" TEXT NOT NULL,
    "presupuesto" DOUBLE PRECISION NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "presupuestoMainId" TEXT NOT NULL,

    CONSTRAINT "DetallesPresupuesto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetallesPresupuesto" ADD CONSTRAINT "DetallesPresupuesto_presupuestoMainId_fkey" FOREIGN KEY ("presupuestoMainId") REFERENCES "Presupuesto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
