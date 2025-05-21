import { BackButton } from "@/components";
import { prisma } from "@/lib/prisma";
import { ModalPresupuestoForm } from "@/presupuesto";
import { PresupuestoGrid } from "@/presupuesto/components/PresupuestoGrid";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function presupuesto() {

  const session = await prisma.session.findFirst({
    where: {
      token: (await cookies()).get('authToken')?.value,
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
  })

  const user = await prisma.user.findFirst({  
    where: {
      id: session?.userId,
    },
    include: {
      presupuestos: true,
    }
  })

  const presupuestos = user?.presupuestos || []

  return (
    <div className="h-screen bg-slate-200">

      <h1 className="py-4 text-center text-top">Presupuestos</h1>

      <BackButton></BackButton>

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
  