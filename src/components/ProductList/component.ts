import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import { State, Action, Mutation } from 'vuex-class';
import { Product } from '@/store/products/types';
import ProductItem from '@/components/ProductItem/component';

// const namespace: string = 'productModule';

@Component({
  name: 'product-list',
  mixins: [Template],
  components: {
    ProductItem,
  },
})
export default class ProducList extends Vue {
  private paginate: string[] = ['products'];
  private perPage: number = 3;

  @Action('fetchProducts', { namespace: 'productModule' })
  private fetchProducts!: () => void;

  @State('products', { namespace: 'productModule' })
  private products!: Product[];
  // @ts-ignore
  @Mutation('addProduct', { namespace: 'cartModule' })
  private addProduct!: any;

  private mounted(): void {
    this.fetchProducts();
  }
  private addProductToCart(product: Product) {
    this.addProduct(product);
  }
}
