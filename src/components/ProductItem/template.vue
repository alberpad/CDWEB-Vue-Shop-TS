<template>
  <b-card
    :title="product.name"
    :img-src="product.picture"
    iomg-top
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-button
      block
      variant="warning"
      @click="$emit('addToCart', product)"
    >
      Añadir al carrito
    </b-button>
  </b-card>
</template>
