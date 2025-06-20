'use client'
import { BudgetDetail } from "@/interfaces"
import { useMonthSelectedStore } from "@/store";
import { ResumeTable } from "./tables/ResumeTable";
import { AnalysisTable } from "./tables/AnalysisTable";
import { getBudgetTotals } from "@/utils";
import { BudgetGrid } from "./BudgetGrid";

interface Props {
  budgets: BudgetDetail
}

export const BudgetTableList = ({budgets}:Props ) => {

  const budget = budgets.datosPresupuesto;

  const selectedMonth = useMonthSelectedStore((state) => state.month);

  const { totalAmounts, amountsByCategory, filteredBudgets } = getBudgetTotals(budget, selectedMonth);

  // If no data, show informative message
  if (budget.length <= 0) {
      return (
          <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-center py-6 sm:py-8">
                  <h3 className="text-lg font-medium text-gray-500">No hay datos disponibles para mostrar</h3>
                  <p className="mt-2 text-sm text-gray-400">Agrega ingresos y gastos para ver un resumen financiero</p>
              </div>
          </div>
      );
  }

  return (
    <div className="flex flex-wrap gap-4 w-full h-full justify-center pt-10 bg-gradient-to-br from-slate-50 via-green-50 to-green-100">
      
      <div className="w-full flex justify-center gap-4 items-center flex-wrap ">
        <AnalysisTable 
          totalExpenses={totalAmounts['Egresos'][0]} 
          totalIncomes={totalAmounts['Ingresos'][0]} 
        />
        <ResumeTable 
          amountsByCategory={amountsByCategory} 
          totalAmounts={totalAmounts} 
        />  
      </div>

      <BudgetGrid amountsByCategory={amountsByCategory} 
        totalAmounts={totalAmounts} 
        filteredBudgets={filteredBudgets}
        dataBudget={ { id: budgets.id, nameBudget: budgets.nombre }  }
        />
    </div>
  );
}