'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen  bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-slate-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-green-600 font-bold text-xl">Ayuda al Bolsillo</span>
                <Image
                  src="/images/logo_1_1.png"
                  alt="Ayuda al Bolsillo Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8">
                </Image>
              </div>

            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
                Iniciar Sesión
              </Link>
              <Link href="/auth/register" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200">
                Registrarse
              </Link>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link href="/login" className="block text-base font-medium text-gray-700 hover:text-green-600">
                Iniciar Sesión
              </Link>
              <Link href="/registro" className="ml-4 block text-base font-medium bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-slate-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-200 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left px-4">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Decisiones financieras</span>
                  <span className="block text-green-600">más inteligentes</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Ayuda al Bolsillo es tu plataforma financiera con herramientas y calculadoras que te ayudan a tomar mejores decisiones sobre tu dinero, créditos e inversiones.
                </p>
                <div className="mt-8 sm:mt-10 space-x-3">
                  <Link href="/registro" className="rounded-md shadow-md py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-300 inline-flex items-center">
                    Comenzar gratis
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-green-50 to-indigo-100 flex items-center justify-center">
            <div className="relative w-4/5 h-4/5 sm:w-3/4 sm:h-3/4">
              <div className="absolute rounded-lg shadow-xl bg-white p-4 top-0 left-0 w-2/3 h-2/3 transform -rotate-6">
                <div className="w-full h-full bg-gradient-to-r from-green-50 to-green-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold text-green-700">Interés Compuesto</div>
                    <div className="text-sm text-green-600 mt-2">$10,000 → $17,908</div>
                    <div className="text-xs text-green-500">10 años @ 6%</div>
                  </div>
                </div>
              </div>
              <div className="absolute rounded-lg shadow-xl bg-white p-4 bottom-0 right-0 w-2/3 h-2/3 transform rotate-3">
                <div className="w-full h-full bg-gradient-to-r from-green-50 to-green-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold text-green-700">Crédito</div>
                    <div className="text-sm text-green-600 mt-2">Ahorra $3,245</div>
                    <div className="text-xs text-green-500">Con pagos adelantados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
