'use client'
import { totalCat } from "../interfaces/Presupuesto";
import { ppEgresos, ppIngresos } from "../utils/PresupuestoUtils";
import { ResumenItem } from "./tablas/ResumenItem";
import { useState } from "react";

interface Props {
    montosTotal: {[key: string]: number[]},
    totalCategorias: { [key: string]: totalCat },
    existen: boolean
}

export const TablasResumen = ({ montosTotal, totalCategorias, existen }: Props) => {
    const [showDetails, setShowDetails] = useState(false);
    
    // Cálculos financieros
    const ingresos = montosTotal['Ingresos'][0] || 0;
    const egresos = montosTotal['Egresos'][0] || 0;
    const saldo = ingresos - egresos;
    const porcentajeGastos = ingresos > 0 ? ((egresos / ingresos) * 100).toFixed(1) : "0";
    const porcentajeAhorro = ingresos > 0 ? ((saldo / ingresos) * 100).toFixed(1) : "0";
    
    // Determinar el estado financiero
    const estadoFinanciero = saldo > 0 
        ? "Superávit" 
        : saldo < 0 
            ? "Déficit" 
            : "Equilibrio";
    
    // Determinar mensaje y color basados en el estado financiero
    const getMensajeEstado = () => {
        if (saldo > 0) {
            return {
                mensaje: "Estás ahorrando. ¡Excelente trabajo!",
                color: "text-green-600"
            };
        } else if (saldo < 0) {
            return {
                mensaje: "Tus gastos superan tus ingresos, considera reducir gastos.",
                color: "text-red-600"
            };
        } else {
            return {
                mensaje: "Tus ingresos y gastos están equilibrados.",
                color: "text-yellow-600"
            };
        }
    };
    
    const { mensaje, color } = getMensajeEstado();

    // Si no hay datos, mostrar mensaje informativo
    if (!existen) {
        return (
            <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="text-center py-6 sm:py-8">
                    <h3 className="text-lg font-medium text-gray-500">No hay datos disponibles para mostrar</h3>
                    <p className="mt-2 text-sm text-gray-400">Agrega ingresos y gastos para ver un resumen financiero</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-4/5 flex flex-wrap gap-3">
            {/* Tarjeta de Resumen Principal - Responsive para todos los tamaños */}
            <div className="bg-white rounded-lg w-[420px]  shadow-md overflow-hidden border border-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto">
                <div className="px-3 py-3 sm:px-6 sm:py-4 bg-gray-50 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">Resumen Financiero</h2>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto ${saldo >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {estadoFinanciero}
                    </span>
                </div>
                
                <div className="p-3 sm:p-6">
                    {/* Saldo principal con visualización responsive */}
                    <div className="mb-4 sm:mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm sm:text-base font-medium text-gray-700">Saldo Total</h3>
                            <button 
                                onClick={() => setShowDetails(!showDetails)}
                                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
                                aria-expanded={showDetails}
                                aria-controls="detalles-financieros"
                            >
                                {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
                            </button>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div className="mb-3 sm:mb-0">
                                    <p className={`text-xl sm:text-2xl font-bold ${saldo >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {saldo.toLocaleString('es-MX', {
                                            style: 'currency',
                                            currency: 'MXN',
                                            maximumFractionDigits: 0
                                        })}
                                    </p>
                                    <p className={`text-xs sm:text-sm ${color}`}>{mensaje}</p>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-xs sm:text-sm text-gray-500">Ahorro</div>
                                    <div className={`text-base sm:text-lg font-semibold ${Number(porcentajeAhorro) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {porcentajeAhorro}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Detalles expandibles con transición suave */}
                    <div 
                        id="detalles-financieros" 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${showDetails ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        aria-hidden={!showDetails}
                    >
                        <div className="mb-4 sm:mb-6 pt-2">
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                                    <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Ingresos Totales</h4>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg sm:text-xl font-bold text-green-600">
                                            {ingresos.toLocaleString('es-MX', {
                                                style: 'currency',
                                                currency: 'MXN',
                                                maximumFractionDigits: 0
                                            })}
                                        </p>
                                        <div className="text-xs sm:text-sm font-medium text-green-700">
                                            100%
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-red-50 rounded-lg p-3 sm:p-4 border border-red-200">
                                    <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Egresos Totales</h4>
                                    <div className="flex items-center justify-between">
                                        <p className="text-lg sm:text-xl font-bold text-red-600">
                                            {egresos.toLocaleString('es-MX', {
                                                style: 'currency',
                                                currency: 'MXN',
                                                maximumFractionDigits: 0
                                            })}
                                        </p>
                                        <div className="text-xs sm:text-sm font-medium text-red-700">
                                            {porcentajeGastos}% de ingresos
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Recomendación basada en el estado financiero */}
                            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                                <h4 className="text-xs sm:text-sm font-medium text-blue-800 mb-1">Recomendación</h4>
                                <p className="text-xs sm:text-sm text-blue-700">
                                    {saldo > 0 
                                        ? `Estás ahorrando ${porcentajeAhorro}% de tus ingresos. Considera invertir parte de este excedente para hacer crecer tu dinero.`
                                        : saldo < 0
                                            ? `Tus gastos superan tus ingresos en ${Math.abs(Number(porcentajeAhorro))}%. Identifica gastos no esenciales que puedas reducir.`
                                            : "Tus ingresos y gastos están equilibrados. Intenta generar un excedente para comenzar a ahorrar."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablas detalladas por tipo - Stack en móvil, lado a lado en desktop */}
            <div className="flex flex-col gap-3 lg:flex-row justify-center items-stretch max-w-4xl mx-auto">
                {(montosTotal["Ingresos"][0] > 0 || montosTotal["Ingresos"][1] > 0) && (

                            <ResumenItem 
                                montosTotal={montosTotal} 
                                totalCategorias={totalCategorias} 
                                ppLista={ppIngresos} 
                                tipo={"Ingresos"}
                            />

                )}
                
                {(montosTotal["Egresos"][0] > 0 || montosTotal["Egresos"][1] > 0) && (

                            <ResumenItem 
                                montosTotal={montosTotal} 
                                totalCategorias={totalCategorias} 
                                ppLista={ppEgresos} 
                                tipo={"Egresos"}
                            />

                )}
            </div>
        </div>
    );
}
