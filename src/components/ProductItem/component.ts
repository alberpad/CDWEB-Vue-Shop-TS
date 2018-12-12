import { Component, Vue, Prop } from 'vue-property-decorator';
import Template from './template.vue';
import { Product } from '@/store/products/types';
const namespace: string = 'productModule';

@Component({
  name: 'ProductItem',
  mixins: [Template],
})
export default class ProductItem extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  public product!: Product;
}
