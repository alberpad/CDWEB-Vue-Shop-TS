import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState } from '@/store/types';
import { productModule } from '@/store/products';
import { cartModule } from '@/store/cart';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    appName: 'Tienda y carrito',
    appVersion: 'Versión 0.0.1',
  },
  modules: {
    productModule,
    cartModule,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
