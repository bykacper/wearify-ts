import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/Product";

type CartState = {
  items: Product[];
  isOpen: boolean;

  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  addItem: (product: Product) => void;
  removeItem: (index: number) => void;

  totalCost: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (product) => {
        set(state => ({
          items: [...state.items, product],
        }));

        get().openCart();
      },

      removeItem: (index) =>
        set(state => ({
          items: state.items.filter((_, i) => i !== index),
        })),

      totalCost: () =>
        get().items.reduce((sum, item) => sum + item.price, 0),
    }),
    {
      name: "cart-storage",
      partialize: state => ({
        items: state.items,
      }),
    }
  )
);
