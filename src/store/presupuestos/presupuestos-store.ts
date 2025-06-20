import { create } from 'zustand'

interface ModalState {
    isModalOpen: boolean;

    toggleModal: () => void;
}

export const useModalBudgetStore = create<ModalState>((set) => ({
    isModalOpen: false,       
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));