import { GetterTree } from 'vuex';
import { Product } from '@/store/products/types';
import { ICart, CartState } from '@/store/cart/types';
import { RootState } from '@/store/types';

type CartGetter = GetterTree<CartState, RootState>;

export const getters: CartGetter = {
  totalCost(state: CartState): number {
    return state.cart.reduce((sum, product) => {
      // return parseFloat(product.price) * product.qty + sum;
      return product.price * product.qty + sum;
    }, 0);
  },
};
