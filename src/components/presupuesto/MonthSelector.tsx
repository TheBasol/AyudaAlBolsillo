'use client';
import { BudgetDetail } from "@/interfaces";
import { useMonthSelectedStore } from "@/store";

interface Props {
  budget: BudgetDetail
}

export const MonthSelector = ( { budget }: Props ) => {
  const monthSlected = useMonthSelectedStore( state => state.month );
  const setMonth = useMonthSelectedStore( state => state.setMonth );

  const availableMonths = [...new Set(budget?.datosPresupuesto.map(item => item.mes))];
  
  return (
    <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Selector de mes */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="bi bi-calendar3 text-blue-600 text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">Período:</span>
          </div>
          
          <div className="relative">
            <select 
              name="mes" 
              value={monthSlected} 
              onChange={(e) => setMonth(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-800 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 cursor-pointer"
            >
              <option value="Todos">📊 Todos los meses</option>
              {availableMonths.map((item, index) => (
                <option key={index} value={item}>
                  📅 {item}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="bi bi-chevron-down text-gray-400 text-xs"></i>
            </div>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          {/* Indicador de selección */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-blue-700">
              {monthSlected === 'Todos' ? 'Vista completa' : `${monthSlected} seleccionado`}
            </span>
          </div>

          {/* Botón de descarga */}
          <button className="group relative flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
            <i className="bi bi-download text-white text-sm group-hover:scale-110 transition-transform duration-200"></i>
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Exportar datos
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            <span>
              {availableMonths.length} {availableMonths.length === 1 ? 'mes' : 'meses'} disponibles
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <i className="bi bi-clock"></i>
            <span>Última actualización: {new Date().toLocaleDateString('es-ES')}</span>
          </div>
          
          {monthSlected !== 'Todos' && (
            <button 
              onClick={() => setMonth('Todos')}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <i className="bi bi-arrow-clockwise text-xs"></i>
              Ver todos
            </button>
          )}
        </div>
      </div>
    </div>
  );
};