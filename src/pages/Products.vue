<template>
  <div class="grid-container fit overflow-hidden">
    <spinner v-if="product === null" />
    <products-card v-else v-for="item in product" :key="item.id" :card="item"></products-card>
  </div>
</template>

<script>
import ProductsCard from "src/template/ProductsCard.vue";
import { getProducts } from "../utils/hooks/getProducts";

export default {
  components: { ProductsCard },
  data() {
    return {
      product: null,
    };
  },

  async mounted() {
    this.product = await getProducts();
  },
};
</script>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
}
</style>
