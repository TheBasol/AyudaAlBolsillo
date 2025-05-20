import { ReactNode } from "react";
import { CloseButton } from "./Buttons/CloseButton";

interface Props {
  textButton: string,
  children: ReactNode,
  modalState: boolean,
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children,textButton,modalState,setModalState}:Props) => {
    return (
      <> 
        {
          modalState &&
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center bg-black z-20">
            {/*Agregar un boton para cerrar el modal independientememte del contenido */}
            <div className="flex flex-col  gap-2 bg-slate-200 w-[80%] h-[80%] rounded-md">
              <div onClick={() => setModalState(!modalState)} className="flex w-full justify-end pt-2">
                <CloseButton />
              </div>
              
              {/* Aqui se empezaria con el componente con los tags para el modal */}
              {children}
              {/* Aqui se termina el modal */}
              <button 
              className="bg-green-400 hover:bg-green-300 rounded-md px-3 py-2" 
              onClick={() => setModalState(!modalState)}>
                {textButton}
              </button>                    
            </div>
          </div>          
        }
      </>
    )
}