'use client'
import { isExpenseHigher } from "@/utils";
import clsx from "clsx";

interface Props {
    amountsByCategory: { [key: string]: Record<string, [number, number]>};
    totalAmounts: { [key: string]: number[] }
}

export const ResumeTable = ({ amountsByCategory, totalAmounts }: Props) => {

    return (
        <div className=" flex flex-wrap justify-center items-center gap-1">
            {
                totalAmounts && Object.keys(totalAmounts).length > 0 && (
                    Object.keys(totalAmounts).map((type) => (
                        <div key={type} className="min-w-[300px] mx-auto rounded-lg shadow-md overflow-x-auto">

 {/* Header de la categoría */}
                            <div className={clsx(
                                'px-6 py-4 border-b border-gray-200',
                                {
                                    'bg-gradient-to-r from-green-50 to-green-100': type === 'Ingresos',
                                    'bg-gradient-to-r from-red-50 to-red-100': type === 'Egresos'
                                }
                            )}>
                                <div className="flex items-center justify-between">
                                    <h3 className={clsx(
                                        'text-lg font-semibold',
                                        {
                                            'text-green-800': type === 'Ingresos',
                                            'text-red-800': type === 'Egresos'
                                        }
                                    )}>
                                        {type === 'Egresos' ? 'Gastos' : type} Resumen
                                    </h3>
                                    <span className={clsx(
                                        'px-3 py-1 rounded-full text-xs font-medium',
                                        {
                                            'bg-green-200 text-green-800': type === 'Ingresos',
                                            'bg-red-200 text-red-800': type === 'Egresos'
                                        }
                                    )}>
                                        {Object.keys(amountsByCategory[type] || {}).length} categorías
                                    </span>
                                </div>
                            </div>

                            {/* Contenido de la tabla */}
                            <div className="bg-white h-[400px] flex flex-col">
                                
                                {/* Headers de columnas */}
                                <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
                                    <div>Categoría</div>
                                    <div className="text-center">Presupuesto</div>
                                    <div className="text-center">Real</div>
                                </div>
                                
                                {/* Filas de datos con scroll */}
                                <div className="flex-1 overflow-y-auto">
                                    {Object.keys(amountsByCategory[type] || {}).map((category) => (
                                        <div 
                                            key={`${type}-${category}`} 
                                            className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            {/* Categoría */}
                                            <div className="flex items-center">
                                                <div className={clsx(
                                                    'w-2 h-2 rounded-full mr-3',
                                                    {
                                                        'bg-green-400': type === 'Ingresos',
                                                        'bg-red-400': type === 'Egresos'
                                                    }
                                                )}></div>
                                                <span className="text-sm font-medium text-gray-800 truncate">
                                                    {category}
                                                </span>
                                            </div>
                                            
                                            {/* Presupuesto */}
                                            <div className="text-center flex items-center justify-center">
                                                <span className="text-sm text-gray-600">
                                                    ${amountsByCategory[type][category][1].toLocaleString()}
                                                </span>
                                            </div>
                                            
                                            {/* Real */}
                                            <div className="text-center flex items-center justify-center">
                                                <span className={clsx(
                                                    'text-sm font-semibold px-2 py-1 rounded-md',
                                                    isExpenseHigher(amountsByCategory[type][category][1], amountsByCategory[type][category][0], type)
                                                )}>
                                                    ${amountsByCategory[type][category][0].toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer con totales */}
                                <div className={clsx(
                                    'grid grid-cols-3 gap-4 px-6 py-4 border-t-2 border-gray-200',
                                    {
                                        'bg-green-50': type === 'Ingresos',
                                        'bg-red-50': type === 'Egresos'
                                    }
                                )}>
                                    <div className="flex items-center">
                                        <span className="text-sm font-bold text-gray-800">Total</span>
                                    </div>
                                    <div className="text-center flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-800">
                                            ${totalAmounts[type][1]?.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="text-center flex items-center justify-center">
                                        <span className={clsx(
                                            'text-sm font-bold px-3 py-1 rounded-md',
                                            {
                                                'bg-green-200 text-green-800': type === 'Ingresos',
                                                'bg-red-200 text-red-800': type === 'Egresos'
                                            }
                                        )}>
                                            ${totalAmounts[type][0]?.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                        </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}