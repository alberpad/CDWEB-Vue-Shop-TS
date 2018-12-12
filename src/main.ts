import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './plugins';
// import ProducList from '@/components/ProductList/component';

Vue.config.productionTip = false;

// Para evitar problemas de referencia cíclica entre ShopLayout y ProductList
// se carga el componente ProducList de forma global (main.ts)
// Vue.component('product-list', ProducList);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
