<template>
  <div id="app" class="mt-5">
    <shop-layout>
      <template slot="product-list">
        <product-list></product-list>
      </template>
      <template slot="cart">
        <cart></cart>
      </template>
    </shop-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import ProducList from '@/components/ProductList/component';
import ShopLayout from '@/views/ShopLayout/component';
import Cart from '@/components/Cart/component';

@Component({
  components: {
    //ProducList,
    ShopLayout,
    Cart
  },
})
export default class App extends Vue {

}
</script>
