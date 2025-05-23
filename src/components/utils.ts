export type ModalVariant = 'info' | 'success' | 'error' | 'warning' | 'default';

// Asegúrate de que la interfaz ModalProps esté actualizada
export interface ModalProps {
  modalState: boolean;
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info' | 'default';
  onClose?: () => void;  // Añade esta prop
}