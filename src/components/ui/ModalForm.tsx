'use client';

import { BudgetTransaction, transactionExpensesType, transactionIncomeType } from "@/interfaces";
import { useModalBudgetStore } from "@/store";
import { formatDateForInput, VALID_MONTHS } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    children?: React.ReactNode;
    budgets?: BudgetTransaction[];
    dataBudget?: { [key: string]: string };
}

export const ModalForm = ({children, budgets,dataBudget}:Props) => {

    const isOpenModal = useModalBudgetStore((state) => state.isModalOpen);
    const toggleModal = useModalBudgetStore((state) => state.toggleModal);

    const url = usePathname()
    const router = useRouter();

    const [name, setName] = useState('')
    const [newDataBudget, setDataBudget] = useState([{
        fecha: '' as any, mes: '', tipo: '', categoria: '', concepto: '', presupuesto: 0, monto: 0
    }])

    const handleChangeDato = (index: number, field:any, value: any) => {
        const nuevosDatos:any = [...newDataBudget]
        nuevosDatos[index][field] = value
        setDataBudget(nuevosDatos)

        if (field === 'fecha') {
            let month = value.split('-')[1]

            nuevosDatos[index]['mes'] = VALID_MONTHS[Number(month)-1]
            setDataBudget(nuevosDatos)
        } 
    }

    const addRow = () => {
        setDataBudget([...newDataBudget, {
            fecha: new Date(), mes: '', tipo: '', categoria: '', concepto: '', presupuesto: 0, monto: 0
        }])
    }

    const handleSubmit = async() => {

        const methodBudget = url.trim() === '/presupuestos' ? 'POST' : 'PUT';
        const requestUrl = url.trim() === '/presupuestos' ? '/api/presupuesto' : `/api/presupuesto/${dataBudget?.id}`;

        const budgetToRequest = newDataBudget.map(({fecha,...rest}) => ({   
            ...rest ,
            fecha: new Date(fecha).toISOString()
        }));

        const requestDataBudget = {
            nombre:name,
            datosPresupuesto: {
                create: budgetToRequest
            }
        }

        console.log('requestDataBudget', requestDataBudget);

        try {
            const response = await fetch(requestUrl, {
                method: methodBudget,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestDataBudget)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en el proceso');
            }

            router.refresh();

            toggleModal();
        } catch (error) {
            console.error('Error creating budget:', error);
            throw error;
        }

    }

    useEffect(() => {
        if (budgets) {
            setName(dataBudget?.nameBudget || '');

            
            setDataBudget(budgets.map((budget) => ({
                fecha: formatDateForInput(budget.fecha),            
                mes: budget.mes,
                tipo: budget.tipo || '',     
                categoria: budget.categoria || '',
                concepto: budget.concepto || '',    
                presupuesto: budget.presupuesto || 0,
                monto: budget.monto || 0    
            })));

        } else {
            // Resetear formulario para nuevo presupuesto
            setName('')
            setDataBudget([{
                fecha: formatDateForInput(new Date()), 
                mes: '', 
                tipo: '', 
                categoria: '', 
                concepto: '', 
                presupuesto: 0, 
                monto: 0
            }])
        }
    }, [isOpenModal])

    return (
        <>
            {
                children &&            
                <div onClick={toggleModal} className="cursor-pointer">
                    {children}
                </div>
            }


            {
                isOpenModal && (
                    <>
                        {/* Background black */ }
                        <div
                            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                        />
                        {/* Blur */ }
                        <div
                            onClick={ toggleModal }
                            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                        />            
                    </>
                )
            }

            {
                isOpenModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4">
                        {/* Modal Container - Responsive */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[95vh] sm:max-h-[90vh] flex flex-col">
                            
                            {/* Header - Sticky */}
                            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white rounded-t-xl sm:rounded-t-2xl sticky top-0 z-50">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                        <i className="bi bi-plus-circle text-white text-sm sm:text-lg"></i>
                                    </div>
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                        <span className="hidden sm:inline">Crear Presupuesto</span>
                                        <span className="sm:hidden">Nuevo Presupuesto</span>
                                    </h2>
                                </div>
                                
                                <button 
                                    onClick={toggleModal} 
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                                >
                                    <i className="bi bi-x text-gray-600 text-lg sm:text-xl"></i>
                                </button>
                            </div>

                            {/* Content - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                                
                                {/* Campo nombre */}
                                <div className="mb-4 sm:mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre del Presupuesto
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ej: Presupuesto Mensual Enero"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                                    />
                                </div>

                                {/* Campos dinámicos */}
                                <div className="space-y-4 sm:space-y-6">
                                    {newDataBudget.map((dato, i) => (
                                        <div key={i} className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                                <h3 className="text-sm sm:text-base font-medium text-gray-700">
                                                    Registro #{i + 1}
                                                </h3>
                                                {newDataBudget.length > 1 && (
                                                    <button 
                                                        onClick={() => {
                                                            const nuevosDatos = newDataBudget.filter((_, index) => index !== i);
                                                            setDataBudget(nuevosDatos);
                                                        }}
                                                        className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200"
                                                    >
                                                        <i className="bi bi-trash text-red-600 text-xs sm:text-sm"></i>
                                                    </button>
                                                )}
                                            </div>

                                            {/* Grid responsive para campos */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                                
                                                {/* Fecha */}
                                                <div className="sm:col-span-2 lg:col-span-1">
                                                    <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                                                        Fecha
                                                    </label>
                                                    <input 
                                                        type="date" 
                                                        value={dato.fecha} 
                                                        onChange={e => handleChangeDato(i, 'fecha', e.target.value)} 
                                                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent" 
                                                    />
                                                </div>

                                                {/* Tipo */}
                                                <div>
                                                    <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                                                        Tipo
                                                    </label>
                                                    <select 
                                                        value={dato.tipo} 
                                                        onChange={e => handleChangeDato(i, 'tipo', e.target.value)} 
                                                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                                                    >
                                                        <option value="s">Seleccionar</option>
                                                        <option value="Ingreso">Ingreso</option>
                                                        <option value="Egreso">Egreso</option>
                                                    </select>
                                                </div>

                                                {/* Categoría */}
                                                <div>
                                                    <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                                                        Categoría
                                                    </label>
                                                    <select 
                                                        value={dato.categoria} 
                                                        onChange={e => handleChangeDato(i, 'categoria', e.target.value)} 
                                                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
                                                    >
                                                        <option value="s">Seleccionar</option>
                                                        {
                                                            dato.tipo === 'Ingreso' && (
                                                                transactionIncomeType.map((tipo, index) => (
                                                                    <option key={index} value={tipo}>   
                                                                        {tipo}
                                                                    </option>
                                                            ))) 
                                                        }

                                                        {
                                                            dato.tipo === 'Egreso' && (
                                                                transactionExpensesType.map((tipo, index) => (
                                                                    <option key={index} value={tipo}>   
                                                                        {tipo}
                                                                    </option>
                                                            ))) 
                                                        }
                                                    </select>
                                                </div>

                                                {/* Concepto */}
                                                <div className="sm:col-span-2 lg:col-span-3">
                                                    <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                                                        Concepto
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Describe el concepto..." 
                                                        value={dato.concepto} 
                                                        onChange={e => handleChangeDato(i, 'concepto', e.target.value)} 
                                                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent" 
                                                    />
                                                </div>
                                                
                                                {/* Presupuesto */}
                                                <div className="sm:col-span-1">
                                                    <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                                                        Presupuestado
                                                    </label>
                                                    <input 
                                                        type="number" 
                                                        min={0} 
                                                        step={0.01}
                                                        placeholder="0.00" 
                                                        value={dato.presupuesto} 
                                                        onChange={e => handleChangeDato(i, 'presupuesto', Number(e.target.value))} 
                                                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent" 
                                                    />
                                                </div>

                                                {/* Monto Real */}
                                                <div className="sm:col-span-1">
                                                    <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                                                        Monto Real
                                                    </label>
                                                    <input 
                                                        type="number" 
                                                        min={0} 
                                                        step={0.01}
                                                        placeholder="0.00" 
                                                        value={dato.monto} 
                                                        onChange={e => handleChangeDato(i, 'monto', Number(e.target.value))} 
                                                        className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer - Sticky */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-6 border-t border-gray-200 bg-white rounded-b-xl sm:rounded-b-2xl sticky bottom-0">
                                
                                {/* Botón agregar fila */}
                                <button 
                                    onClick={addRow}  
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    <i className="bi bi-plus-circle"></i>
                                    <span>Agregar registro</span>
                                </button>

                                {/* Botones de acción */}
                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <button 
                                        onClick={toggleModal}
                                        className="flex-1 sm:flex-none px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        Cancelar
                                    </button>
                                    <button  
                                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-lg"
                                    >
                                        <i className="bi bi-check-circle"></i>
                                        <span onClick={handleSubmit}>Guardar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }        
        </>
    )
}