'use client';
import { LoadingButton } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-md animate-fadeIn">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Cabecera */}
          <div className="px-8 pt-8 pb-6">
            <div className="text-center mb-8 animate-scaleIn">
              <h1 className="text-3xl font-bold text-gray-800">Iniciar Sesión</h1>
              <p className="text-gray-500 mt-2">Bienvenido a Ayuda al Bolsillo</p>
            </div>

            {/* Mensajes de éxito o error */}
            {successMessage && (
              <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                {successMessage}
              </div>
            )}
            
            {error && (
              <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form  className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all hover:border-gray-400"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all hover:border-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>


              {/* Botón de inicio de sesión */}
            <LoadingButton loadgingText='Iniciando Sesion...' text='Iniciar Sesion' loading={loading}></LoadingButton>
            </form>
          </div>
          
          {/* Pie de página */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 text-center animate-fadeIn">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link href="/auth/register" className="font-medium text-green-600 hover:text-green-500 transition-colors">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
}