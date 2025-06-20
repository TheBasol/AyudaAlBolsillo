'use client';
import { ModalForm } from "@/components/ui/ModalForm";
import { BudgetTransaction } from "@/interfaces";
import { useModalBudgetStore } from "@/store";
import { formatDateForInput, isExpenseHigher } from "@/utils";
import clsx from "clsx";

interface Props {
    budgets: BudgetTransaction[];
    dataBudget: { [key: string]: string };
}

export const BudgetItems = ({ budgets, dataBudget }: Props) => {

    // Agrupar filteredBudgets por categoría
    const budgetsByCategory = budgets.reduce((acc, budget) => {
        const { categoria } = budget;
        
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        
        acc[categoria].push(budget);
        
        return acc;
    }, {} as { [categoria: string]: BudgetTransaction[] });

     const toggleModal = useModalBudgetStore((state) => state.toggleModal);

    return (
        <>
            <ModalForm dataBudget={dataBudget} budgets={budgets}/>
            {
            Object.entries(budgetsByCategory).map(([categoria, budgets]) => {
                // Tomar el primer budget para obtener tipo
                const firstBudget = budgets[0];
                const tipo = firstBudget?.tipo;
            
                return (
                    <div key={categoria} className="bg-white shadow-lg rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        
                        {/* Header de la categoría */}
                        <div className={clsx(
                            'px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-gray-200',
                            {
                                'bg-gradient-to-r from-green-50 to-green-100': tipo === 'Ingreso',
                                'bg-gradient-to-r from-red-50 to-red-100': tipo === 'Egreso'
                            }
                        )}>
                            <div className="flex items-center justify-between">
                                <h3 className={clsx(
                                    'text-base sm:text-lg font-semibold truncate',
                                    {
                                        'text-green-800': tipo === 'Ingreso',
                                        'text-red-800': tipo === 'Egreso'
                                    }
                                )}>
                                    {categoria}
                                </h3>
                                <span className={clsx(
                                    'px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2',
                                    {
                                        'bg-green-200 text-green-800': tipo === 'Ingreso',
                                        'bg-red-200 text-red-800': tipo === 'Egreso'
                                    }
                                )}>
                                    {budgets.length} {budgets.length === 1 ? 'item' : 'items'}
                                </span>
                            </div>
                        </div>
            
                        {/* Contenido de la tabla */}
                        <div className="h-[300px] sm:h-[360px] flex flex-col">
                            
                            {/* Headers de columnas - Desktop */}
                            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_auto] gap-2 sm:gap-4 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gray-50 border-b border-gray-200 text-xs sm:text-sm font-medium text-gray-600">

                                <div className="text-center">Presupuestado</div>
                                <div className="text-center">Real</div>
                                <div className="text-center">Fecha</div>
                            </div>
                                            
                            {/* Filas de datos con scroll */}
                            <div className="flex-1 overflow-auto">
                                {budgets.map((budget, index) => {
                                    let color = isExpenseHigher(budget.presupuesto, budget.monto, budget.tipo);
                                    
                                    return (
                                        <div key={index}>
                                            {/* Vista Desktop */}
                                            <div className="hidden overflow-auto sm:grid grid-cols-[2fr_1fr_1fr_auto_auto] gap-2 sm:gap-4 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 group">
                                                {/* Concepto */}
                                                <div className="flex items-center">
                                                    <div className={clsx(
                                                        'w-2 h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0',
                                                        {
                                                            'bg-green-400': tipo === 'Ingreso',
                                                            'bg-red-400': tipo === 'Egreso'
                                                        }
                                                    )}></div>
                                                    <span className="text-xs sm:text-sm font-medium text-gray-800 ">
                                                        {budget.concepto}
                                                    </span>
                                                </div>
                                                
                                                {/* Presupuesto */}
                                                <div className="text-center flex items-center justify-center">
                                                    <span className="text-xs sm:text-sm text-gray-600">
                                                        ${budget.presupuesto.toLocaleString()}
                                                    </span>
                                                </div>
                                                
                                                {/* Real */}
                                                <div className="text-center flex items-center justify-center">
                                                    <span className={clsx(
                                                        'text-xs sm:text-sm font-semibold px-1 sm:px-2 py-1 rounded-md',
                                                        color
                                                    )}>
                                                        ${budget.monto.toLocaleString()}
                                                    </span>
                                                </div>
                                                
                                                <div className="text-center flex items-center justify-center w-[90px]">
                                                    <span className='text-xs sm:text-sm font-semibold px-1 sm:px-2 py-1 rounded-md'>
                                                        {formatDateForInput(budget.fecha)}
                                                    </span>                                                    
                                                </div>

                                                {/* Acción */}
                                                <div onClick={toggleModal} className="flex items-center justify-center">
                                                    <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center transition-colors duration-200 opacity-0 group-hover:opacity-100">
                                                        <i className="bi bi-pencil text-gray-500 text-xs sm:text-sm"></i>
                                                    </button>                                                        
                                                </div>

                                            </div>
            
                                            {/* Vista Mobile - Card Layout */}
                                            <div className="sm:hidden p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center min-w-0 flex-1">
                                                        <div className={clsx(
                                                            'w-2 h-2 rounded-full mr-2 flex-shrink-0 mt-1.5',
                                                            {
                                                                'bg-green-400': tipo === 'Ingreso',
                                                                'bg-red-400': tipo === 'Egreso'
                                                            }
                                                        )}></div>
                                                        <span className="text-sm font-medium text-gray-800 truncate">
                                                            {budget.concepto}
                                                        </span>
                                                    </div>

                                                    <button onClick={toggleModal} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                                                        <i className="bi bi-pencil text-gray-500 text-xs"></i>
                                                    </button>                                                        


                                                </div>
                                                
                                                <div className="grid grid-cols-2 gap-3 text-xs">
                                                    <div>
                                                        <span className="text-gray-500 block">Presupuesto:</span>
                                                        <span className="font-medium text-gray-800">
                                                            ${budget.presupuesto.toLocaleString()}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block">Real:</span>
                                                        <span className={clsx(
                                                            'font-semibold px-2 py-1 rounded-md inline-block',
                                                            color
                                                        )}>
                                                            ${budget.monto.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
            
                            {/* Footer con totales */}
                            <div className={clsx(
                                'border-t-2 border-gray-200',
                                {
                                    'bg-green-50': tipo === 'Ingreso',
                                    'bg-red-50': tipo === 'Egreso'
                                }
                            )}>
                                {/* Desktop Footer */}
                                <div className={clsx(
                                    'hidden sm:grid grid-cols-[2fr_1fr_1fr_auto] gap-2 sm:gap-4 px-3 sm:px-4 lg:px-6 py-3 sm:py-4'
                                )}>
                                    <div className="flex items-center">
                                        <span className="text-xs sm:text-sm font-bold text-gray-800">Total</span>
                                    </div>
                                    <div className="text-center flex items-center justify-center">
                                        <span className="text-xs sm:text-sm font-bold text-gray-800">
                                            ${budgets.reduce((sum, b) => sum + b.presupuesto, 0).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="text-center flex items-center justify-center">
                                        <span className={clsx(
                                            'text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-md',
                                            {
                                                'bg-green-200 text-green-800': tipo === 'Ingreso',
                                                'bg-red-200 text-red-800': tipo === 'Egreso'
                                            }
                                        )}>
                                            ${budgets.reduce((sum, b) => sum + b.monto, 0).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="w-6 sm:w-8"></div>
                                </div>
            
                                {/* Mobile Footer */}
                                <div className="sm:hidden p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-800">Total:</span>
                                        <div className="flex items-center gap-3">
                                            <div className="text-center">
                                                <div className="text-xs text-gray-500">Presupuesto</div>
                                                <div className="text-sm font-bold text-gray-800">
                                                    ${budgets.reduce((sum, b) => sum + b.presupuesto, 0).toLocaleString()}
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xs text-gray-500">Real</div>
                                                <div className={clsx(
                                                    'text-sm font-bold px-2 py-1 rounded-md',
                                                    {
                                                        'bg-green-200 text-green-800': tipo === 'Ingreso',
                                                        'bg-red-200 text-red-800': tipo === 'Egreso'
                                                    }
                                                )}>
                                                    ${budgets.reduce((sum, b) => sum + b.monto, 0).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
            }
            <div onClick={toggleModal}
            className="flex justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl min-h-[400px] border-4 border-green-300 border-dashed cursor-pointer">
                <i className="bi bi-plus-circle text-green-300 text-5xl"></i>
            </div>
        </>
    );
}