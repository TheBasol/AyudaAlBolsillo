import { useState } from "react";

interface CategoryPercentage {
    name: string;
    color: string;
    percentage: number;
    amount: number;
}

interface Props {
    type: 'Ingresos' | 'Egresos';
    data: CategoryPercentage[];
    totalAmounts: { [key: string]: number[] };
}

export const PieChartItem = ({type, data, totalAmounts}:Props) => {

    // Estados para hover
    const [hoveredIncomeIndex, setHoveredIncomeIndex] = useState<number | null>(null);
    const [hoveredExpenseIndex, setHoveredExpenseIndex] = useState<number | null>(null);

    // Función para crear el gráfico de pie con CSS
    const createPieChart = (data: CategoryPercentage[]) => {
        let accumulatedPercentage = 0;
        
        return data.map((item, index) => {
            const startAngle = accumulatedPercentage * 3.6; // Convert percentage to degrees
            accumulatedPercentage += item.percentage;
            const endAngle = accumulatedPercentage * 3.6;
            
            // Para crear segmentos de pie usando conic-gradient
            return {
                ...item,
                startAngle,
                endAngle,
                gradientStop: `${item.color} ${startAngle}deg ${endAngle}deg`
            };
        });
    };

    // Función para determinar si un punto está dentro de un segmento
    const isPointInSegment = (x: number, y: number, centerX: number, centerY: number, startAngle: number, endAngle: number, radius: number) => {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > radius || distance < 48) return false; // 48 es el radio interior
        
        let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
        if (angle < 0) angle += 360;
        
        return angle >= startAngle && angle <= endAngle;
    };

    // Función para manejar el movimiento del mouse sobre el gráfico
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, data: CategoryPercentage[], type: 'Ingresos' | 'Egresos') => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const pieSegments = createPieChart(data);
        let foundIndex = null;
        
        for (let i = 0; i < pieSegments.length; i++) {
            const segment = pieSegments[i];
            if (isPointInSegment(x, y, centerX, centerY, segment.startAngle, segment.endAngle, 112)) {
                foundIndex = i;
                break;
            }
        }
        
        if (type === 'Ingresos') {
            setHoveredIncomeIndex(foundIndex);
        } else {
            setHoveredExpenseIndex(foundIndex);
        }
    };

    const pieSegments = createPieChart(data);
    const gradientString = pieSegments.map(segment => segment.gradientStop).join(', ');
    const hoveredIndex = type === 'Ingresos' ? hoveredIncomeIndex : hoveredExpenseIndex;

    return (
            <div className="bg-white w-full lg:w-[86%] rounded-lg shadow-md py-4 px-5 border border-gray-200  flex flex-col">
                {/* Header más compacto */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-lg font-semibold ${
                        type === 'Ingresos' ? 'text-green-800' : 'text-red-800'
                    }`}>
                        {type}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                        type === 'Ingresos' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        ${(totalAmounts[type]?.[0] || 0).toLocaleString()}
                    </span>
                </div>

                {/* Gráfico de pie más grande y centrado */}
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <div 
                            className="w-56 h-56 rounded-full relative cursor-pointer"
                            style={{
                                background: `conic-gradient(${gradientString})`
                            }}
                            onMouseMove={(e) => handleMouseMove(e, data, type)}
                            onMouseLeave={() => {
                                if (type === 'Ingresos') {
                                    setHoveredIncomeIndex(null);
                                } else {
                                    setHoveredExpenseIndex(null);
                                }
                            }}
                        >
                            {/* Círculo interior más pequeño */}
                            <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-gray-800">{data.length}</div>
                                    <div className="text-xs text-gray-500">categorías</div>
                                </div>
                            </div>
                            
                            {/* Label solo para la categoría en hover */}
                            {hoveredIndex !== null && data[hoveredIndex] && (
                                <div
                                    className="absolute pointer-events-none"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 10
                                    }}
                                >
                                    <div className="bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg text-center shadow-lg">
                                        <div className="text-sm font-semibold">{data[hoveredIndex].name}</div>
                                        <div className="text-xs">{data[hoveredIndex].percentage.toFixed(1)}%</div>
                                        <div className="text-xs">${data[hoveredIndex].amount.toLocaleString()}</div>
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>

                {/* Barra de progreso más delgada - siempre al final */}
                <div className="mt-4">
                    <div className="text-xs text-gray-500 mb-1">Distribución:</div>
                    <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`h-full transition-all duration-300 ${
                                    hoveredIndex === index ? 'opacity-80 transform scale-y-125' : 'hover:opacity-80'
                                }`}
                                style={{
                                    backgroundColor: item.color,
                                    width: `${item.percentage}%`
                                }}
                                title={`${item.name}: ${item.percentage}%`}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
};