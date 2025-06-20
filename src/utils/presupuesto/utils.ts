import { BudgetTransaction } from "@/interfaces";
import { useRouter } from "next/navigation";

export const ppEgresos: string[] = ['Servicios', 'Gastos', 'Ahorro', 'Deudas']
export const ppIngresos: string[] = ['Sueldo', 'Negocio','Inversion','Otros']

export const VALID_MONTHS = [
    'Todos',
    'Enero',
    'Febrero', 
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
] as const;

export const getBudgetTotals = (budgets: BudgetTransaction[], selectedMonth: string) => {

  const filteredBudgets = selectedMonth === 'Todos' 
    ? budgets 
    : budgets.filter((budget) => budget.mes === selectedMonth);

  // Calcular todos los totales en un solo bucle
  const calculations = filteredBudgets.reduce((acc, transaction) => {
    const { tipo, categoria, monto, presupuesto } = transaction;
    
    // Totales por tipo
    acc.totalsByType[tipo] = (acc.totalsByType[tipo] || 0) + monto;
    acc.budgetedByType[tipo] = (acc.budgetedByType[tipo] || 0) + presupuesto;
    
    // Totales por categoría separados por tipo
    if (!acc.totalsByTypeAndCategory[tipo]) {
      acc.totalsByTypeAndCategory[tipo] = {};
      acc.budgetedByTypeAndCategory[tipo] = {};
    }
    
    acc.totalsByTypeAndCategory[tipo][categoria] = (acc.totalsByTypeAndCategory[tipo][categoria] || 0) + monto;
    acc.budgetedByTypeAndCategory[tipo][categoria] = (acc.budgetedByTypeAndCategory[tipo][categoria] || 0) + presupuesto;
    
    return acc;
  }, {
    totalsByType: {} as Record<string, number>,
    budgetedByType: {} as Record<string, number>,
    totalsByTypeAndCategory: {} as Record<string, Record<string, number>>,
    budgetedByTypeAndCategory: {} as Record<string, Record<string, number>>
  });

  // Extraer los resultados
  const { totalsByType, budgetedByType, totalsByTypeAndCategory, budgetedByTypeAndCategory } = calculations;

  // Formato para totales por tipo
  const totalAmounts = {
    'Ingresos': [totalsByType['Ingreso'] || 0, budgetedByType['Ingreso'] || 0],
    'Egresos': [totalsByType['Egreso'] || 0, budgetedByType['Egreso'] || 0]
  };

  // Formato para totales por categoría separados por tipo
  const amountsByCategory = {
    'Ingresos': {} as Record<string, [number, number]>,
    'Egresos': {} as Record<string, [number, number]>
  };

  // Llenar categorías de Ingresos
  if (totalsByTypeAndCategory['Ingreso']) {
    Object.keys(totalsByTypeAndCategory['Ingreso']).forEach(category => {
      amountsByCategory['Ingresos'][category] = [
        totalsByTypeAndCategory['Ingreso'][category] || 0,
        budgetedByTypeAndCategory['Ingreso'][category] || 0
      ];
    });
  }

  // Llenar categorías de Egresos
  if (totalsByTypeAndCategory['Egreso']) {
    Object.keys(totalsByTypeAndCategory['Egreso']).forEach(category => {
      amountsByCategory['Egresos'][category] = [
        totalsByTypeAndCategory['Egreso'][category] || 0,
        budgetedByTypeAndCategory['Egreso'][category] || 0
      ];
    });
  }

  return {
    totalAmounts,
    amountsByCategory,
    filteredBudgets
  };
}
// Determine message and color based on financial status
export const getStatusMessage = (balance:number) => {
    if (balance > 0) {
        return {
            message: "Estás ahorrando. ¡Excelente trabajo!",
            color: "text-green-600"
        };
    } else if (balance < 0) {
        return {
            message: "Tus gastos superan tus ingresos, considera reducir gastos.",
            color: "text-red-600"
        };
    } else {
        return {
            message: "Tus ingresos y gastos están equilibrados.",
            color: "text-yellow-600"
        };
    }
};

export const isExpenseHigher = (budget: number, amount: number, type: string) => {
    if (type === 'Egresos') {
        return budget > amount ? "text-green-500" : budget < amount ? "text-red-500" : "";
    } else {
        return budget < amount ? "text-green-500" : budget > amount ? "text-red-500" : "";
    }
}

export const loadBudget = async (id_budget:string) => {

  let budget = null;

  try {
    budget = await fetch(`/api/presupuesto/${id_budget}`)
    .then(res => res.json()) 
  } catch (error) {
    budget = [{
        id: '',fecha: '', mes: '', tipo: 'Ingreso', categoria: '', concepto: '', presupuesto: 0, monto: 0
    }]
  }

  return budget
};

export const formatDateForInput = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString().split('T')[0]; // "yyyy-MM-dd"
}

//requests 
export const deleteBudget = async (budgetId: string) => {
  try {
      const response = await fetch(`/api/presupuesto/${budgetId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          }
      });
  
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al eliminar el presupuesto');
      }

  } catch (error) {
      console.error('Error deleting budget:', error);
      throw error;
  }
};

export const toggleFavorite = async (budgetId:string,isFavorite:boolean) => {
  try {
      const response = await fetch(`/api/presupuesto/${budgetId}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ isFavorite: !isFavorite }),
      });

      if (!response.ok) {
          throw new Error('Error al actualizar');
      }
      
  } catch (error) {
      // Revertir si hay error
      console.error('Error:', error);
      alert('Error al actualizar favorito');
  } 
};