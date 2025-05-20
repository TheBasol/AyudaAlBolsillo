'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';



interface Props {
    datosGraficar: {[key: string]: number[]}
}

export const GraficoItem = ({datosGraficar}:Props) => {
    // Preparar los datos para Recharts
    const data = Object.keys(datosGraficar).map((item, index) => {
        const valor = datosGraficar[item][0];
        return {
            name: item,
            valor: valor,
            color: index === 0 ? '#22c55e' : '#ef4444' // Verde para ingresos, rojo para gastos
        };
    });

    // Encontrar el valor máximo para establecer el dominio del eje Y
    const maxValue = Math.max(...data.map(item => item.valor)) * 1.1; // 10% extra para margen

    // Personalizar tooltip
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 shadow-md border border-gray-200 rounded">
                    <p className="font-medium">{`${label}`}</p>
                    <p className="text-gray-700">{`${payload[0].value.toLocaleString('es-MX', {
                        style: 'currency',
                        currency: 'MXN'
                    })}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex flex-col justify-around items-center mx-auto">
            <h2 className="text-lg font-semibold text-center mb-4">Ingresos vs Gastos</h2>
            
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis 
                            domain={[0, maxValue]}
                            tickFormatter={(value) => `$${value.toLocaleString()}`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            dataKey="valor"
                            name="Monto"
                            fill="#8884d8" // Default color
                            radius={[4, 4, 0, 0]} // Bordes redondeados en la parte superior
                            animationDuration={1000}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Leyenda */}
            <div className="flex justify-center gap-3 mb-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="w-4 h-4 inline-block rounded" 
                            style={{ backgroundColor: item.color }}></span>
                        <span>{item.name}: {item.valor.toLocaleString('es-MX', {
                            style: 'currency', 
                            currency: 'MXN',
                            maximumFractionDigits: 0
                        })}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
