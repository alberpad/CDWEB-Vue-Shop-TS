import { MutationTree } from 'vuex';
import { ICart, CartState } from './types';
import { Product } from '../products/types';
import { find, filter } from 'lodash';

type CartMutationTree = MutationTree<CartState>;

export const mutations: CartMutationTree = {
  addProduct(state: CartState, product: Product) {
    const productInCart: Product | undefined = find(state.cart, {
      id: product.id,
    });
    if (!productInCart) {
      const copy: Product | undefined = Object.assign({}, product);
      copy.qty = 1;
      state.cart.push(copy);
    } else {
      productInCart.qty += 1;
    }
  },
  removeProductFromCart(state: CartState, product: Product) {
    state.cart = filter(state.cart, ({ id }) => id != product.id);
  },
  decrementProductFromCart(state: CartState, product: Product) {
    const productInCart: Product | undefined = find(state.cart, {
      id: product.id,
    });
    if (productInCart && productInCart.qty > 0) {
      productInCart.qty -= 1;
    }
  },
  incrementProductFromCart(state: CartState, product: Product) {
    const productInCart: Product | undefined = find(state.cart, {
      id: product.id,
    });
    if (productInCart) {
      productInCart.qty += 1;
    }
  },
};
