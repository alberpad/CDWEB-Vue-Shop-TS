<template>
  <div v-if="cart.length">
    <b-table striped hover :items="cart" :fields="fields">
      <template slot="actions" slot-scope="cell">
        <b-button
          size="sm"
          variant="danger"
          @click.stop="removeProductFromCart(cell.item)"
        >Eliminar</b-button>
        <b-button
          size="sm"
          variant="danger"
          @click.stop="decrementProductFromCart(cell.item)"
        >-</b-button>
        <b-button
          size="sm"
          variant="success"
          @click.stop="incrementProductFromCart(cell.item)"
        >+</b-button>
      </template>
    </b-table>
    <b-alert show variant="success" class="text-center">Coste total: {{totalCost}}€</b-alert>
  </div>
  <b-alert v-else show variant="info">No hay productos en el carrito</b-alert>
  <!-- <div>{{totalCost}}</div> -->
</template>
