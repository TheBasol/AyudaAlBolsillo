import { BudgetTableList, MonthSelector } from "@/components";
import { BudgetDetail } from "@/interfaces";
import prisma from "@/lib/prisma";

interface Props {
    params: { params:Promise<{ id: string }> };
}

export default async function presupuesto(context : { params:Promise<{ id: string }> }) {

    const {id} = await context.params;
    const idParts = id.split('_');
    const budget_id = idParts[idParts.length - 1];

    const pp = await prisma.presupuesto.findUnique({
        where: { id: budget_id },
        select: {
            id: true,
            nombre: true,
            isFavorite: true,
            datosPresupuesto: {
                select: {
                    fecha: true,
                    mes: true,
                    tipo: true,
                    categoria: true,
                    concepto: true,
                    presupuesto: true,
                    monto: true
                }
            }
        }
    }) as BudgetDetail;

    console.log("Presupuesto encontrado:", pp);

    // Si no hay datos, mostrar mensaje informativo
    if (!pp || pp.datosPresupuesto.length === 0) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    {/* Card de estado vacío */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                        {/* Icono ilustrativo */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="bi bi-bar-chart text-3xl text-blue-600"></i>
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            No hay datos disponibles
                        </h3>
                        
                        {/* Descripción */}
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Agrega ingresos y gastos para ver un resumen financiero completo de tu presupuesto
                        </p>
                        
                        {/* Botón de acción */}
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                            <i className="bi bi-plus-circle mr-2"></i>
                            Agregar datos
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-green-100">
            {/* Header mejorado */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-around">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {pp?.nombre}
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Análisis financiero detallado
                            </p>
                        </div>


                        {/* Badge de favorito */}
                        {pp?.isFavorite && (
                            <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-200">
                                <i className="bi bi-star-fill text-yellow-500"></i>
                                <span className="text-sm font-medium">Favorito</span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                
                {/* Selector de mes */}
                <div className="mb-8">
                    <MonthSelector budget={pp}/>
                </div>

                {/* Contenido de tablas */}
                <div className="space-y-8">
                    <BudgetTableList budgets={pp}/>
                </div>

            </div>
        </main>
    )
}