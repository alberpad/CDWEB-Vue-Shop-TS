import { MutationTree } from 'vuex';
import { Product, ProductState } from './types';

type ProductMutationTree = MutationTree<ProductState>;

export const mutations: ProductMutationTree = {
  setProducts(state: ProductState, products: Product[]) {
    state.products = products;
  },
  productsError(state: ProductState, payload: string) {
    state.error = true;
    state.errorMessage = payload;
    state.products = [];
  },
};
