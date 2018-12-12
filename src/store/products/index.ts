import { Module } from 'vuex';
import { state } from '@/store/products/state';
import { mutations } from '@/store/products/mutations';
import { actions } from '@/store/products/actions';
import { ProductState } from '@/store/products/types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type ProductModule = Module<ProductState, RootState>;

export const productModule: ProductModule = {
  namespaced,
  state,
  mutations,
  actions,
};
