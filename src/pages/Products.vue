<template>
  <div>
    <products-card v-for="(item) in product" :key="item.id" :card="item"></products-card>
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

  watch: {
    product() {
      console.log(this.product);
    },
  },
};
</script>

<style lang="scss"></style>
