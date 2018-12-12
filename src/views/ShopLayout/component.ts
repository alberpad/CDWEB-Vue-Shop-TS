import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import ProductList from '@/components/ProductList/component';

// Para evitar problemas de referencia cíclica entre ShopLayout y ProductList
// se ha cargado el componente ProducList de forma global (main.ts)

@Component({
  name: 'shop-layout',
  mixins: [Template],
  components: {
    ProductList,
  },
})
export default class ShopLayout extends Vue {}
