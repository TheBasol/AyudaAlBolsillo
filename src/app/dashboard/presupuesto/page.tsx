import { prisma } from "@/lib/prisma";
import { ModalPresupuestoForm } from "@/presupuesto";
import { PresupuestoGrid } from "@/presupuesto/components/PresupuestoGrid";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function presupuesto() {

  const presupuestos = await prisma.presupuesto.findMany({
    orderBy: {
      isFavorite: 'desc'},
  })

  return (
    <div className="h-screen bg-slate-200">

      <h1 className="py-4 text-center text-top">Presupuestos</h1>

      <div className="flex flex-col items-center justify-center pt-2 gap-2 w-full">

        <div className="flex mb-4 w-3/5">
            <ModalPresupuestoForm textButton="Crear Presupuesto" >
              <button className="bg-green-400 hover:bg-green-300 text-white px-4 py-2 rounded-xl cursor-pointer">
                Crear Presupuesto
              </button>
            </ModalPresupuestoForm>
        </div>

        <PresupuestoGrid presupuestosItem={presupuestos} />

      </div>

    </div>
  );
}
  