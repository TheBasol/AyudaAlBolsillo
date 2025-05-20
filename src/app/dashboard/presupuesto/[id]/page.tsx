import { BackButton } from "@/components";
import { prisma } from "@/lib/prisma";
import { ListarTablas } from "@/presupuesto/components/listado/ListarTablas";

interface Props {
    params: { id:string };
}

export default async function presupuestoSelected(context :Props) {

  let { id } = await context.params;
  id = id.slice(id.indexOf('_')+1, id.length)


  const presupuesto = await prisma.presupuesto.findFirst(
      {where: {id},
      include: {
          datosPresupuesto: true
      }}
  );

  return (
    <div className="min-h-screen flex justify-start items-center flex-col relative pt-10 -z-1">

      <BackButton/>

      <ListarTablas 
        id={presupuesto?.id} 
        nombre={presupuesto?.nombre} 
        datosPresupuesto={presupuesto?.datosPresupuesto} 
      />

    </div>
  );
}
  