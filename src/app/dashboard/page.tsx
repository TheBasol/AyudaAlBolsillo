'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PageDashboard() {
  // Estado para almacenar datos del usuario e información del dashboard
  const [userData, setUserData] = useState<any>(null);
  const [presupuestos, setPresupuestos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPresupuestos: 0,
    presupuestosFavoritos: 0,
    ultimaActividad: '-'
  });

  // Obtener datos cuando se monta el componente
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Obtener datos del usuario desde el almacenamiento
        const userString = sessionStorage.getItem('user') || localStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        setUserData(user);
        
        // Obtener los últimos presupuestos
        const res = await fetch('/api/presupuestos?limit=5');
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setPresupuestos(data);
          
          // Calcular estadísticas
          setStats({
            totalPresupuestos: data.length,
            presupuestosFavoritos: data.filter(p => p.isFavorite).length,
            ultimaActividad: data.length > 0 
              ? new Date(data[0].updatedAt).toLocaleDateString('es-ES') 
              : '-'
          });
        }
      } catch (error) {
        console.error('Error al cargar datos del dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Componente para las tarjetas de estadísticas
  const StatCard = ({ title, value, icon }: { title: string; value: string | number; icon: string }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className={`flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mr-4`}>
        <i className={`bi ${icon} text-xl`}></i>
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 lg:p-20 pt-16 min-h-screen bg-slate-100">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
        </div>
      ) : (
        <>
          {/* Encabezado */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              ¡Bienvenido{userData ? `, ${userData.name}!` : '!'}
            </h1>
            <p className="text-gray-600 mt-1">
              Aquí tienes un resumen de tu situación financiera
            </p>
          </div>

          {/* Tarjetas de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Total de Presupuestos" 
              value={stats.totalPresupuestos} 
              icon="bi-file-earmark-spreadsheet" 
            />
            <StatCard 
              title="Presupuestos Favoritos" 
              value={stats.presupuestosFavoritos} 
              icon="bi-star-fill" 
            />
            <StatCard 
              title="Última Actividad" 
              value={stats.ultimaActividad} 
              icon="bi-calendar-check" 
            />
          </div>

        {/* Sección de presupuestos recientes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Presupuestos Recientes</h2>
            <Link href="/dashboard/presupuesto" className="text-green-600 hover:text-green-800 text-sm font-medium hover:underline">
            Ver todos <i className="bi bi-arrow-right ml-1"></i>
            </Link>
        </div>
        
        {presupuestos.length > 0 ? (
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transacciones
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {presupuestos.map((presupuesto) => (
                    <tr key={presupuesto.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${presupuesto.isFavorite ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                            {presupuesto.isFavorite ? (
                            <i className="bi bi-star-fill text-yellow-400"></i>
                            ) : (
                            <i className="bi bi-file-text text-gray-500"></i>
                            )}
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{presupuesto.nombre}</div>
                            <div className="text-sm text-gray-500">
                            Creado: {new Date(presupuesto.createdAt).toLocaleDateString('es-ES')}
                            </div>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{presupuesto.datosPresupuesto?.length || 0} transacciones</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Activo
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link 
                        href={`/dashboard/presupuesto/${presupuesto.id}`}
                        className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors"
                        >
                        <i className="bi bi-eye mr-1"></i>
                        Ver
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        ) : (
            <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
                <i className="bi bi-file-earmark-plus text-4xl"></i>
            </div>
            <p className="text-gray-500 mb-4">No tienes presupuestos creados aún</p>
            <Link 
                href="/dashboard/presupuesto/crear" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
                Crear mi primer presupuesto
            </Link>
            </div>
        )}
        </div>

          {/* Tarjetas de acceso rápido */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Calculadora de Intereses</h3>
              <p className="text-gray-600 mb-4">Calcula intereses compuestos y simula ahorros e inversiones.</p>
              <Link 
                href="/dashboard/calcular_interes" 
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Ir a calculadora <i className="bi bi-arrow-right ml-1"></i>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Presupuesto Mensual</h3>
              <p className="text-gray-600 mb-4">Crea y administra tu presupuesto mensual de ingresos y gastos.</p>
              <Link 
                href="/dashboard/presupuesto" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Gestionar presupuesto <i className="bi bi-arrow-right ml-1"></i>
              </Link>
            </div>
            
            {!userData?.hasActiveSub && (
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md p-6 text-white hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Plan Premium</h3>
                  <div className="bg-white rounded-full px-2 py-1 text-xs font-bold text-purple-600">Recomendado</div>
                </div>
                <p className="mb-4 opacity-90">Desbloquea todas las funciones y lleva tus finanzas al siguiente nivel.</p>
                <Link 
                  href="/planes" 
                  className="inline-flex items-center px-4 py-2 bg-white text-purple-700 rounded-md shadow-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Ver planes <i className="bi bi-arrow-up-right ml-1"></i>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}