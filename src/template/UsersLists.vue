<template>
  <div class="q-pa-md" style="max-width: 650px">
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img :src="list.avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">{{ list.name }}</q-item-label>
        <q-item-label caption lines="2" class="text-weight-bold">
          <span>{{ list.role }}</span> -
          {{ list.email }}
        </q-item-label>
        <q-item-label>
          <span class="text-weight-medium">password :</span>
          {{ list.password }}
        </q-item-label>
      </q-item-section>

      <q-item-section side top>{{ list.updatedAt }}</q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>
