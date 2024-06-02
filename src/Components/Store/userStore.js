import { create } from "zustand";

const useCardStore = create((set)=> ({
    selectedCards : [],
    addCard: (userID)=> (
            set((state)=> ({selectedCards: [...state.selectedCards, userID]}))
    ),
    removeCard: (userID)=> (
        set((state)=> ({
            selectedCards: state.selectedCards.filter((id)=> id !== userID)
        }))
    ),
}))

export default useCardStore;