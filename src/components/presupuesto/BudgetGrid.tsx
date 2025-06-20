'use client';
import { BudgetDetail, BudgetTransaction } from "@/interfaces";
import { PieChartGrid } from "./PieChartGrid";
import { VersusTable } from "./tables/VersusTable";
import { BudgetItems } from "./tables/BudgetItem";

interface Props {
    amountsByCategory: { [key: string]: Record<string, [number, number]>};
    totalAmounts: { [key: string]: number[] };
    filteredBudgets: BudgetTransaction[];
    dataBudget: { [key: string]: string };
}

export const BudgetGrid = ({ amountsByCategory, totalAmounts, filteredBudgets, dataBudget }: Props) => {
    
    return (
        <section className="w-full  mx-auto p-2 sm:p-4 lg:p-6 mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mt-3 w-full items-stretch">

                <PieChartGrid amountsByCategory={amountsByCategory} totalAmounts={totalAmounts} />

                <div className="flex justify-center">
                    <VersusTable totalAmounts={totalAmounts} />                    
                </div>

                <BudgetItems dataBudget={dataBudget} budgets={filteredBudgets} />

            </div>            
        </section>
    );
}