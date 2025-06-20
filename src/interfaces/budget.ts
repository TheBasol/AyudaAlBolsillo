// Tipos para valores específicos
export type TransactionType = 'Ingreso' | 'Egreso';
export type TransactionCategory = 'Sueldo' | 'Negocio' | 'Servicios' | 'Gastos' | 'Ahorro' | 'Deudas' | 'Otros';
export const transactionExpensesType: string[] = ['Servicios', 'Gastos', 'Ahorro', 'Deudas']
export const transactionIncomeType: string[] = ['Sueldo', 'Negocio','Inversion','Otros']

// Interface para un elemento individual de presupuesto
export interface BudgetTransaction {
  fecha: Date;
  mes: string;
  tipo: TransactionType;
  categoria: TransactionCategory;
  concepto: string;
  presupuesto: number;
  monto: number;
}

// Interface para el presupuesto completo
export interface BudgetDetail {
  id: string;
  nombre: string;
  isFavorite: boolean;
  datosPresupuesto: BudgetTransaction[];
}

// Interface para el resultado de Prisma (opcional - con posibles campos null)
export interface PrismaBudgetDetail {
  id: string;
  nombre: string;
  isFavorite: boolean;
  datosPresupuesto: BudgetTransaction[];
}

// Interface para los props del componente de página
export interface BudgetPageProps {
  params: { 
    id: string 
  };
}