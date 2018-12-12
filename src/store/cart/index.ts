import { Module } from 'vuex';
import { state } from '@/store/cart/state';
import { mutations } from '@/store/cart/mutations';
import { getters } from './getters';
import { CartState } from '@/store/cart/types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type CartModule = Module<CartState, RootState>;

export const cartModule: CartModule = {
  namespaced,
  state,
  mutations,
  getters,
};
