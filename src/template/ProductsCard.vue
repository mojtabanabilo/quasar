<template>
  <q-card class="my-card p-none">
    <img :src="card.category.image" alt="Product Image" />

    <q-card-section>
      <div class="text-h6">{{ card.title }}</div>
      <div class="text-subtitle2">{{ card.category.name }}</div>
      <div class="text-subtitle2">{{ card.price }} $</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <p>{{ card.description }}</p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["card"],
};
</script>
