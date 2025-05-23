'use client'

import { useState, useEffect } from 'react';

export const AmortizacionCredito = () => {
    // Estado para los inputs del formulario
    const [montoCredito, setMontoCredito] = useState<number>(10);
    const [tasaInteres, setTasaInteres] = useState<number>(1);
    const [plazoAnios, setPlazoAnios] = useState<number>(1);
    const [abonoExtraMensual, setAbonoExtraMensual] = useState<number>(0);
    
    // Estado para los resultados calculados
    const [pagoMensual, setPagoMensual] = useState<number>(0);
    const [interesesTotales, setInteresesTotales] = useState<number>(0);
    const [pagoTotal, setPagoTotal] = useState<number>(0);
    const [tablaAmortizacion, setTablaAmortizacion] = useState<any[]>([]);
    const [mensualidadesAhorradas, setMensualidadesAhorradas] = useState<number>(0);
    const [ahorroInteres, setAhorroInteres] = useState<number>(0);
    
    // Estado para controlar la pestaña activa
    const [pestanaActiva, setPestanaActiva] = useState<string>("fija-plazo");
    
    // Estado para controlar si la tabla está expandida (para móviles)
    const [tablaExpandida, setTablaExpandida] = useState<boolean>(false);

    // Calcular amortización cuando cambien los valores
    useEffect(() => {
        calcularAmortizacion();
    }, [montoCredito, tasaInteres, plazoAnios, abonoExtraMensual, pestanaActiva]);

    // Función para calcular la amortización del crédito
    const calcularAmortizacion = () => {
        if (!montoCredito || !tasaInteres || !plazoAnios) return;

        const montoPrestamo = montoCredito;
        const interesMensual = tasaInteres / 100 / 12;
        const plazoMeses = plazoAnios * 12;
        
        // Cálculo del pago mensual con fórmula de amortización
        const pagoMensualFijo = montoPrestamo * interesMensual * Math.pow(1 + interesMensual, plazoMeses) 
                              / (Math.pow(1 + interesMensual, plazoMeses) - 1);
        
        setPagoMensual(pagoMensualFijo);
        
        // Simulación de la amortización
        let saldoPrestamo = montoPrestamo;
        let saldoPrestamoSinAbono = montoPrestamo;
        let interesAcumulado = 0;
        let interesAcumuladoSinAbono = 0;
        let tabla = [];
        let meses = 0;
        let mesesSinAbono = 0;
        
        // Solo aplicar abono extra si estamos en la modalidad "fija-menos" (Mensualidad Fija - Menos tiempo)
        const abonoExtra = pestanaActiva === "fija-menos" ? abonoExtraMensual : 0;

        // Cálculo con abono extra
        while (saldoPrestamo > 0 && meses < 1000) { // Límite para evitar bucles infinitos
            meses++;
            const interesMes = saldoPrestamo * interesMensual;
            interesAcumulado += interesMes;
            
            let pagoCapital = pagoMensualFijo - interesMes;
            if (pagoCapital > saldoPrestamo) pagoCapital = saldoPrestamo;
            
            // Añadir abono extra si está habilitado
            let abonoAplicado = 0;
            if (abonoExtra > 0) {
                abonoAplicado = Math.min(abonoExtra, saldoPrestamo - pagoCapital);
                pagoCapital += abonoAplicado;
            }
            
            const nuevaSaldo = saldoPrestamo - pagoCapital;
            
            tabla.push({
                mes: meses,
                deudaInicial: parseFloat(saldoPrestamo.toFixed(2)),
                pagoMensual: parseFloat((interesMes + pagoCapital).toFixed(2)),
                intereses: parseFloat(interesMes.toFixed(2)),
                pagoCapital: parseFloat(pagoCapital.toFixed(2)),
                deudaFinal: parseFloat(nuevaSaldo.toFixed(2))
            });
            
            saldoPrestamo = nuevaSaldo;
            if (saldoPrestamo <= 0.01) saldoPrestamo = 0;
        }
        
        // Cálculo sin abono extra para comparar
        while (saldoPrestamoSinAbono > 0 && mesesSinAbono < 1000) {
            mesesSinAbono++;
            const interesMes = saldoPrestamoSinAbono * interesMensual;
            interesAcumuladoSinAbono += interesMes;
            
            let pagoCapital = pagoMensualFijo - interesMes;
            if (pagoCapital > saldoPrestamoSinAbono) pagoCapital = saldoPrestamoSinAbono;
            
            saldoPrestamoSinAbono -= pagoCapital;
            if (saldoPrestamoSinAbono <= 0.01) saldoPrestamoSinAbono = 0;
        }
        
        // Calcular ahorros y totales
        const mensualidadesAhorradas = pestanaActiva === "fija-menos" ? mesesSinAbono - meses : 0;
        const ahorroIntereses = pestanaActiva === "fija-menos" ? interesAcumuladoSinAbono - interesAcumulado : 0;
        
        setTablaAmortizacion(tabla);
        setInteresesTotales(parseFloat(interesAcumulado.toFixed(2)));
        setPagoTotal(parseFloat((montoPrestamo + interesAcumulado).toFixed(2)));
        setMensualidadesAhorradas(mensualidadesAhorradas);
        setAhorroInteres(parseFloat(ahorroIntereses.toFixed(2)));
    };

    // Función para exportar la tabla como CSV
    const exportarCSV = () => {
        if (tablaAmortizacion.length === 0) return;
        
        const cabeceras = ["Mes", "Deuda inicial", "Pago mensual", "Intereses", "Pago a capital", "Deuda final"];
        const filas = tablaAmortizacion.map(fila => [
            fila.mes, 
            fila.deudaInicial, 
            fila.pagoMensual, 
            fila.intereses, 
            fila.pagoCapital, 
            fila.deudaFinal
        ]);
        
        const contenidoCSV = [
            cabeceras.join(','),
            ...filas.map(fila => fila.join(','))
        ].join('\n');
        
        const blob = new Blob([contenidoCSV], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const enlace = document.createElement('a');
        enlace.href = url;
        enlace.setAttribute('download', 'tabla_amortizacion.csv');
        enlace.click();
    };

    // Función para exportar como PDF (simulado)
    const exportarPDF = () => {
        alert('Función para exportar a PDF. En una implementación real, generaría un PDF con la tabla de amortización.');
    };

    // Formateo de moneda
    const formatoMoneda = (valor: number) => {
        return valor.toLocaleString('es-MX', { 
            style: 'currency', 
            currency: 'MXN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-6">
                Calculadora de amortización de crédito
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna de formulario */}
                <div className="lg:col-span-1">
                    <div className="p-4 rounded-lg shadow-sm border bg-gray-50 border-gray-200">
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                    Monto del crédito <span className="text-blue-500 ml-1">●</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                                    <input
                                        type="number"
                                        value={montoCredito}
                                        onChange={(e) => setMontoCredito(Number(e.target.value))}
                                        className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                        placeholder="Ingresa el monto"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                    Tasa de interés anual <span className="text-blue-500 ml-1">●</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">%</span>
                                    <input
                                        type="number"
                                        value={tasaInteres}
                                        onChange={(e) => setTasaInteres(Number(e.target.value))}
                                        className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                        placeholder="Tasa de interés"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                    Plazo en años <span className="text-blue-500 ml-1">●</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={plazoAnios}
                                        onChange={(e) => setPlazoAnios(Number(e.target.value))}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                        placeholder="Plazo en años"
                                    />
                                </div>
                            </div>
                            
                            {/* Abono extra mensual - Solo mostrar si la pestaña activa es fija-menos */}
                            {pestanaActiva === "fija-menos" && (
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        Abono extra mensual <span className="text-blue-500 ml-1">●</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                                        <input
                                            type="number"
                                            value={abonoExtraMensual}
                                            onChange={(e) => setAbonoExtraMensual(Number(e.target.value))}
                                            className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                            placeholder="Abono extra mensual"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Columna de resultados */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <h2 className="text-base font-medium mb-4 text-gray-700">Resultados</h2>
                        
                        {/* Pestañas de tipo de cálculo */}
                        <div className="mb-6 border-b">
                            <div className="flex">
                                <button
                                    onClick={() => setPestanaActiva("fija-plazo")}
                                    className={`py-2 px-4 text-sm font-medium ${
                                        pestanaActiva === "fija-plazo"
                                            ? "border-b-2 border-blue-500 text-blue-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Mensualidad fija - Plazo fijo
                                </button>
                                <button
                                    onClick={() => setPestanaActiva("fija-menos")}
                                    className={`py-2 px-4 text-sm font-medium ${
                                        pestanaActiva === "fija-menos"
                                            ? "border-b-2 border-blue-500 text-blue-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Mensualidad Fija - Menos tiempo
                                </button>
                            </div>
                        </div>
                        
                        {/* Cards con resultados */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            {pestanaActiva === "fija-plazo" ? (
                                <>
                                    {/* Pago mensual */}
                                    <div className="flex flex-col items-center text-center p-4">
                                        <p className="text-xs text-gray-600">Pago mensual</p>
                                        <div className="mt-3 bg-blue-100 w-full py-4 rounded-md">
                                            <p className="text-lg font-semibold">{formatoMoneda(pagoMensual)}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Intereses totales */}
                                    <div className="flex flex-col items-center text-center p-4">
                                        <p className="text-xs text-gray-600">Intereses totales</p>
                                        <div className="mt-3 bg-green-100 w-full py-4 rounded-md">
                                            <p className="text-lg font-semibold">{formatoMoneda(interesesTotales)}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Pago total */}
                                    <div className="flex flex-col items-center text-center p-4">
                                        <p className="text-xs text-gray-600">Pago total</p>
                                        <div className="mt-3 bg-teal-100 w-full py-4 rounded-md">
                                            <p className="text-lg font-semibold">{formatoMoneda(pagoTotal)}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Pago mensual */}
                                    <div className="flex flex-col items-center text-center p-4">
                                        <p className="text-xs text-gray-600">Pago mensual</p>
                                        <div className="mt-3 bg-blue-100 w-full py-4 rounded-md">
                                            <p className="text-lg font-semibold">{formatoMoneda(pagoMensual)}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Intereses totales */}
                                    <div className="flex flex-col items-center text-center p-4">
                                        <p className="text-xs text-gray-600">Intereses totales</p>
                                        <div className="mt-3 bg-green-100 w-full py-4 rounded-md">
                                            <p className="text-lg font-semibold">{formatoMoneda(interesesTotales)}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Pago total */}
                                    <div className="flex flex-col items-center text-center p-4">
                                        <p className="text-xs text-gray-600">Pago total</p>
                                        <div className="mt-3 bg-teal-100 w-full py-4 rounded-md">
                                            <p className="text-lg font-semibold">{formatoMoneda(pagoTotal)}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        
                        {/* Tabla de amortización con scroll */}
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-base font-medium text-gray-700">Tabla de amortización</h3>
                                <div className="flex items-center">
                                    <span className="text-xs text-gray-600 mr-2">Exportar como:</span>
                                    <button 
                                        onClick={exportarCSV}
                                        className="p-1 text-gray-600 hover:text-gray-900 bg-gray-100 rounded mx-1"
                                        title="Exportar como CSV"
                                    >
                                        CSV
                                    </button>
                                </div>
                            </div>
                            
                            {/* Contenedor con scroll */}
                            <div className="overflow-x-auto">
                                {/* Contenedor con altura fija y scroll vertical */}
                                <div className="max-h-[400px] overflow-y-auto border border-gray-200 rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50 sticky top-0 z-10">
                                            <tr>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Mes
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Deuda inicial
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Pago mensual
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Intereses
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Pago a capital
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Deuda final
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {tablaAmortizacion.map((fila) => (
                                                <tr key={fila.mes} className="hover:bg-gray-50">
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{fila.mes}</td>
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{formatoMoneda(fila.deudaInicial)}</td>
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{formatoMoneda(fila.pagoMensual)}</td>
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{formatoMoneda(fila.intereses)}</td>
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{formatoMoneda(fila.pagoCapital)}</td>
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{formatoMoneda(fila.deudaFinal)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}