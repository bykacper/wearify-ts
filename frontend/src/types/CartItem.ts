import type { Product } from "./Product";

export type CartItem = Product & { qty: number } 