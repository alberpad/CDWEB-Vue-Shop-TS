import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import { Getter, Mutation, State } from 'vuex-class';
import { Product } from '@/store/products/types';
import { ICart } from '@/store/cart/types';

const namespace: string = 'cartModule';

@Component({
  mixins: [Template],
})
export default class Cart extends Vue {
  public fields: string[] = ['name', 'qty', 'price', 'actions'];
  @State('cart', { namespace })
  private cart!: any;
  @Getter('totalCost', { namespace })
  private totalCost!: Function;
  @Mutation('removeProductFromCart', { namespace })
  private removeProductFromCart!: Function;
  @Mutation('incrementProductFromCart', { namespace })
  private incrementProductFromCart!: Function;
  @Mutation('decrementProductFromCart', { namespace })
  private decrementProductFromCart!: Function;
}
