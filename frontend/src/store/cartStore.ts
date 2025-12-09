import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/Product";
import type { CartItem } from "@/types/CartItem";

type CartState = {
  items: CartItem[];
  isOpen: boolean;

  openCart: () => void;
  closeCart: () => void;

  addItem: (product: Product) => void;
  removeItem: (id: number) => void;

  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (product) => {
        set(state => {
          const existing = state.items.find(i => i.id === product.id);

          if (existing) {
            return {
              items: state.items.map(i =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
              ),
            };
          }

          return {
            items: [...state.items, { ...product, qty: 1 }],
          };
        });

        get().openCart();
      },

      removeItem: (id) =>
        set(state => ({
          items: state.items.filter(i => i.id !== id),
        })),

      increaseQty: (id) =>
        set(state => ({
          items: state.items.map(i =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        })),

      decreaseQty: (id) =>
        set(state => {
          const item = state.items.find(i => i.id === id);
          if (!item) return state;

          if (item.qty <= 1) {
            return {
              items: state.items.filter(i => i.id !== id),
            };
          }

          return {
            items: state.items.map(i =>
              i.id === id ? { ...i, qty: item.qty - 1 } : i
            ),
          };
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);
