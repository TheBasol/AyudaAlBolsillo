import { BudgetDetail, BudgetTransaction } from '@/interfaces';
import { VALID_MONTHS } from '@/utils';
import { create } from 'zustand'



type ValidMonth = typeof VALID_MONTHS[number];

interface MonthSelectedState {
    month: string;
    setMonth: (newMonth: string) => void;
    getValidMonths: () => readonly string[];
}

export const useMonthSelectedStore = create<MonthSelectedState>((set, get) => ({
    month: 'Todos',
    setMonth: (newMonth: string) => {
        // Verificar si el mes es válido
        const isValidMonth = VALID_MONTHS.includes(newMonth as ValidMonth);
        
        // Si no es válido, usar "Todos" como fallback
        const validatedMonth = isValidMonth ? newMonth : 'Todos';
        
        set({ month: validatedMonth });
        
    },
    
    // Método helper para obtener la lista de meses válidos
    getValidMonths: () => VALID_MONTHS
}));
