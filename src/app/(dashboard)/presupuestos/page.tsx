import { BudgetsGrid, ModalForm } from "@/components"
import prisma from "@/lib/prisma"

export default async function presupuesto() {

    const id_user = "138867a2-5087-4777-a9fe-ec6faf3a2b0a" // Reemplaza con el ID del usuario que deseas consultar

    const budgets = await prisma.user.findUnique({
        where: {
            id: id_user
        },
        select: {
            presupuestos: {
                select: {
                    id: true,
                    nombre: true,
                    isFavorite: true,
                },
                orderBy: {
                    isFavorite: 'desc' // favoritos primero (true antes que false)
                }
            }
        }
    });

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-green-100">
            {/* Header moderno */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Título con icono */}
                        <div className="flex items-center space-x-4">

                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    Mis Presupuestos
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Gestiona y monitorea tus finanzas personales
                                </p>
                            </div>
                        </div>

                        {/* Botón crear presupuesto */}
                        <div className="flex items-center gap-3">
                            <ModalForm>
                                <button className="group relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                                    <i className="bi bi-plus-circle text-lg group-hover:rotate-90 transition-transform duration-200"></i>
                                    <span className="hidden sm:inline">Crear Presupuesto</span>
                                    <span className="sm:hidden">Crear</span>
                                </button>
                            </ModalForm>
                        </div>
                    </div>
                </div>
            </header>

            {/* Contenido principal */}
            <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


                {/* Grid de presupuestos */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Todos los Presupuestos
                        </h2>

                    </div>

                    <BudgetsGrid budgets={budgets?.presupuestos || []} />
                </div>

                {/* Estado vacío */}
                {(!budgets?.presupuestos || budgets.presupuestos.length === 0) && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="bi bi-folder-plus text-4xl text-gray-400"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            No tienes presupuestos aún
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            Crea tu primer presupuesto para comenzar a gestionar tus finanzas personales
                        </p>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105">
                            <i className="bi bi-plus-circle mr-2"></i>
                            Crear mi primer presupuesto
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}