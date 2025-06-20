export const VersusTable = ({ totalAmounts }: { totalAmounts: { [key: string]: number[] } }) => {
     // Calcular totales
    const totalIngresos = totalAmounts['Ingresos']?.[0] || 0;
    const totalEgresos = totalAmounts['Egresos']?.[0] || 0;
    const balance = totalIngresos - totalEgresos;
    const maxTotal = Math.max(totalIngresos, totalEgresos);

    return (
        <>
                {/* Gráfica de Comparación Ingresos vs Egresos */}
                <div className="bg-white w-full lg:w-[86%] flex flex-col justify-between items-center rounded-lg shadow-md border border-gray-200 p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                        Ingresos vs Egresos
                    </h3>

                    {/* Gráfico de barras vertical comparativo */}
                    <div className="flex items-end justify-around w-full space-x-8 h-24">
                        
                        {/* Barra de Ingresos */}
                        <div className="flex w-[30%] flex-col items-center">
                            <div 
                                className="w-full bg-gradient-to-t  from-green-500 to-green-300 rounded-t transition-all duration-700 relative"
                                style={{ height: `${(totalIngresos / maxTotal) * 110}px` }}
                            >
                                {totalIngresos > 0 && (
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-green-600">
                                        ${(totalIngresos / 1000).toFixed(1)}K
                                    </div>
                                )}
                            </div>
                            <span className="text-xs text-gray-600 mt-1">Ingresos</span>
                        </div>

                        {/* Barra de Egresos */}
                        <div className="flex w-[30%] flex-col items-center">
                            <div 
                                className="w-full bg-gradient-to-t from-red-500 to-red-300 rounded-t transition-all duration-700 relative"
                                style={{ height: `${(totalEgresos / maxTotal) * 110}px` }}
                            >
                                {totalEgresos > 0 && (
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-red-600">
                                        ${(totalEgresos / 1000).toFixed(1)}K
                                    </div>
                                )}
                            </div>
                            <span className="text-xs text-gray-600 mt-1">Egresos</span>
                        </div>
                    </div>

                        {/* Balance */}
                        <div className="bg-gray-50 w-full rounded-lg p-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">Balance</span>
                                <span className={`text-lg font-bold ${
                                    balance >= 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {balance >= 0 ? '+' : ''}${balance.toLocaleString()}
                                </span>
                            </div>
                            
                            {/* Indicador visual del balance */}
                            <div className=" flex items-center space-x-2">
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    {balance >= 0 ? (
                                        <div 
                                            className="h-full bg-green-500 rounded-full transition-all duration-500"
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        <div 
                                            className="h-full bg-red-500 rounded-full transition-all duration-500"
                                            style={{ width: '100%' }}
                                        />
                                    )}
                                </div>
                                <span className={`text-xs font-medium ${
                                    balance >= 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {balance >= 0 ? 'Positivo' : 'Negativo'}
                                </span>
                            </div>
                        </div>
                </div>
        </>
    )
}