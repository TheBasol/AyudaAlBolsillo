'use client';

import { PieChartItem } from "./tables/PieChartItem";

interface Props {
    amountsByCategory: { [key: string]: Record<string, [number, number]>};
    totalAmounts: { [key: string]: number[] }
}

interface CategoryPercentage {
    name: string;
    color: string;
    percentage: number;
    amount: number;
}

export const PieChartGrid = ({ amountsByCategory, totalAmounts }: Props) => {

    // Función para calcular porcentajes de categorías por tipo
    const calculatePercentages = (type: 'Ingresos' | 'Egresos'): CategoryPercentage[] => {
        
        // Colores para cada tipo
        const incomeColors = ["#008f1f", "#1ca333", "#008f6c", "#1ca37e", "#249900", "#003400", "#98ff96"];
        const expenseColors = ["#dc5135", "#ba3d28", "#99281b", "#78140d", "#570000"];
        
        const availableColors = type === 'Egresos' ? [...expenseColors] : [...incomeColors];
        
        // Total del tipo (monto real [0])
        const totalForType = totalAmounts[type]?.[0] || 0;
        
        // Categorías del tipo específico
        const categoriesForType = amountsByCategory[type] || {};
        
        // Calcular porcentajes para cada categoría
        const results = Object.keys(categoriesForType).map((categoryName, index) => {
            const categoryAmount = categoriesForType[categoryName][0]; // monto real
            const percentage = totalForType > 0 ? Number(((categoryAmount / totalForType) * 100).toFixed(2)) : 0;
            
            return {
                name: categoryName,
                color: availableColors[index % availableColors.length],
                percentage,
                amount: categoryAmount
            };
        });

        // Ordenar por porcentaje descendente
        return results.sort((a, b) => b.percentage - a.percentage);
    };

    // Calcular porcentajes para Ingresos y Egresos
    const incomePercentages = calculatePercentages('Ingresos');
    const expensePercentages = calculatePercentages('Egresos');


    return (
        <>
            {/* tabla  pastel*/}
            <div className="flex flex-col w-full  justify-around items-center mx-auto">
                <PieChartItem type={"Ingresos"} data={incomePercentages} totalAmounts={totalAmounts} />           
            </div>
                    
            {/* tabla pastel */}   
            <div className="flex flex-col w-full justify-around items-center mx-auto">
                <PieChartItem type={"Egresos"} data={expensePercentages} totalAmounts={totalAmounts} />                    
            </div>
                    
        </>
    )
}