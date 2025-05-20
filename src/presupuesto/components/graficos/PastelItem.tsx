'use client'

import { GraficoCirculo } from "@/presupuesto"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface Props {
  datosGraficaCircular: GraficoCirculo[],
  tipo: string
}

export const PastelItem = ({ datosGraficaCircular, tipo}:Props) => {

  // Adaptar datos para Recharts
  const data = datosGraficaCircular.map(item => ({
    name: item.name,
    value: item.porcentaje, 
    color: item.color
  }));

  // Personalización del renderizado de etiquetas - MEJORADO PARA CENTRAR
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const RADIAN = Math.PI / 180;
    // Ajustamos el radio para posicionar mejor las etiquetas
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6; // Ajustado de 0.5 a 0.6
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Solo mostrar etiquetas para segmentos con más de 5%
    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle" // Cambiado para centrar siempre el texto
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold" // Agregado para mejor visibilidad
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    ) : null;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-md rounded border border-gray-200">
          <p className="font-medium">{`${payload[0].name}`}</p>
          <p className="text-gray-700">{`${payload[0].value.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-lg font-semibold mb-3">Distribución de {tipo}</h2>
      
      {/* Gráfica con Recharts */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              // Añadido para mejorar la apariencia
              paddingAngle={1}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {datosGraficaCircular.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-4 h-4 inline-block rounded" style={{ background: item.color }}></span>
            <span>{item.name} ({item.porcentaje}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}
