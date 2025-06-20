'use client'

import { getStatusMessage } from "@/utils";
import { useState } from "react";

interface Props {
    totalIncomes: number;
    totalExpenses: number;
}

export const AnalysisTable = ({totalExpenses, totalIncomes}:Props) => {

    const [showDetails, setShowDetails] = useState(false);
    
    // Financial calculations
    const balance = totalIncomes - totalExpenses;
    const expensePercentage = totalIncomes > 0 ? ((totalExpenses / totalIncomes) * 100).toFixed(1) : "0";
    const savingsPercentage = totalIncomes > 0 ? ((balance / totalIncomes) * 100).toFixed(1) : "0";
    
    // Determine financial status
    const financialStatus = balance > 0 
        ? "Superávit" 
        : balance < 0 
            ? "Déficit" 
            : "Equilibrio";

    
    const { message, color } = getStatusMessage(balance);

    return (
        <div className="bg-white rounded-lg w-[420px] shadow-md overflow-hidden">
            <div className="px-3 py-3 sm:px-6 sm:py-4 bg-gray-50 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">Resumen Financiero</h2>
                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto ${balance >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {financialStatus}
                </span>
            </div>
            
            <div className="p-3 sm:p-6">
                {/* Main balance with responsive visualization */}
                <div className="mb-4 sm:mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm sm:text-base font-medium text-gray-700">Saldo Total</h3>
                        <button 
                            onClick={() => setShowDetails(!showDetails)}
                            className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
                            aria-expanded={showDetails}
                            aria-controls="financial-details"
                        >
                            {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="mb-3 sm:mb-0">
                                <p className={`text-xl sm:text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {balance.toLocaleString('es-MX', {
                                        style: 'currency',
                                        currency: 'MXN',
                                        maximumFractionDigits: 0
                                    })}
                                </p>
                                <p className={`text-xs sm:text-sm ${color}`}>{message}</p>
                            </div>
                            <div className="sm:text-right">
                                <div className="text-xs sm:text-sm text-gray-500">Ahorro</div>
                                <div className={`text-base sm:text-lg font-semibold ${Number(savingsPercentage) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {savingsPercentage}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Expandable details with smooth transition */}
                <div 
                    id="financial-details" 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${showDetails ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    aria-hidden={!showDetails}
                >
                    <div className="mb-4 sm:mb-6 pt-2">
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Ingresos Totales</h4>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg sm:text-xl font-bold text-green-600">
                                        {totalIncomes.toLocaleString('es-MX', {
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
                                        {totalExpenses.toLocaleString('es-MX', {
                                            style: 'currency',
                                            currency: 'MXN',
                                            maximumFractionDigits: 0
                                        })}
                                    </p>
                                    <div className="text-xs sm:text-sm font-medium text-red-700">
                                        {expensePercentage}% de ingresos
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Recommendation based on financial status */}
                        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                            <h4 className="text-xs sm:text-sm font-medium text-blue-800 mb-1">Recomendación</h4>
                            <p className="text-xs sm:text-sm text-blue-700">
                                {balance > 0 
                                    ? `Estás ahorrando ${savingsPercentage}% de tus ingresos. Considera invertir parte de este excedente para hacer crecer tu dinero.`
                                    : balance < 0
                                        ? `Tus gastos superan tus ingresos en ${Math.abs(Number(savingsPercentage))}%. Identifica gastos no esenciales que puedas reducir.`
                                        : "Tus ingresos y gastos están equilibrados. Intenta generar un excedente para comenzar a ahorrar."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}