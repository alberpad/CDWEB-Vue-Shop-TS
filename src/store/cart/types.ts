import { Product } from '@/store/products/types';

export interface ICart {
  cart: Product[];
}
export interface CartState {
  cart: Product[];
  error: boolean;
  errorMessage: string;
}
