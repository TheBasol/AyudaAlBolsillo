'use client'
import { useState, useEffect } from "react";

type ModalVariant = 'info' | 'success' | 'error' | 'warning' | 'default';

interface Props {
  title?: string;
  message?: string;
  textButton?: string;
  modalState: boolean;
  variant?: ModalVariant;
  onClose?: () => void; // Añadir esta prop para notificar al componente padre
}

export const Modal = ({ 
  message, 
  variant = 'default', 
  modalState: initialModalState, 
  onClose 
}: Props) => {
    
    const [modalState, setModalState] = useState(initialModalState);
    const [fading, setFading] = useState(false);
    
    // Sincronizar el estado cuando initialModalState cambia
    useEffect(() => {
      if (initialModalState !== modalState) {
        setModalState(initialModalState);
        setFading(false);
      }
    }, [initialModalState]);
    
    // Efecto para hacer que el modal desaparezca después de 5 segundos
    useEffect(() => {
      let timer: NodeJS.Timeout;
      let fadeTimer: NodeJS.Timeout;
      
      // Solo iniciar el timer cuando el modal está visible
      if (modalState) {
        // Iniciar el desvanecimiento a los 3.5 segundos
        fadeTimer = setTimeout(() => {
          setFading(true);
        }, 3500);
        
        // Ocultar el modal a los 5 segundos
        timer = setTimeout(() => {
          setModalState(false);
          setFading(false); // Restaurar el estado para la próxima vez
          
          // Notificar al componente padre
          if (onClose) {
            onClose();
          }
        }, 5000);
      }
      
      // Limpiar los timers cuando el componente se desmonta o el estado cambia
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }, [modalState, onClose]);

    // El resto del código permanece igual...
    const variantStyles = {
      default: {
        bg: "bg-slate-200",
        icon: null,
        tittleModal: ''
      },
      info: {
        bg: "bg-blue-300",
        icon: (
          <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        tittleModal: 'Info'
      },
      success: {
        bg: "bg-green-300",
        icon: (
          <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        tittleModal: 'Proceso Exitoso'
      },
      error: {
        bg: "bg-red-300",
        icon: (
          <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        tittleModal: 'Error'
      },
      warning: {
        bg: "bg-yellow-300",
        icon: (
          <svg className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        tittleModal: 'Advertencia'
      }
    };
    
    const currentStyles = variantStyles[variant];

    return (
      <> 
        <style jsx global>{`
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          
          .fade-out {
            animation: fadeOut 1.5s ease-out forwards;
          }
        `}</style>

        
        {modalState && (
          <div className="fixed right-0 bottom-0 flex items-center w-[400px] justify-center z-50 p-4">
            <div 
              className={`flex flex-col rounded-lg shadow-xl overflow-hidden ${currentStyles.bg} w-full max-w-md transition-all transform duration-300 ease-in-out ${fading ? 'fade-out' : ''}`}
            >
              {/* Contenido del modal */}
              <div className="p-4 flex items-center justify-center gap-2">
                {currentStyles.icon && (
                  <div className="flex justify-center">
                    {currentStyles.icon}
                  </div>
                )}
                
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">{currentStyles.tittleModal}</h2>
                  <p className="text-center">{message}</p>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </>
    );
};