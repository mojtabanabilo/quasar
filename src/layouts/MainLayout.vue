<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-teal-5 text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Online store
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/aboutUs" label="About Us" />
        <q-route-tab to="/products" label="Products" />
        <q-route-tab to="/users" label="Users" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <spinner v-if="category === null" />
      <div v-else class="q-pa-md" style="max-width: 350px">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section class="text-h6">Category</q-item-section>
          </q-item>
          <q-item clickable v-ripple v-for="item in category" :key="item.id">
            <q-item-section avatar>
              <img :src="item.image" alt="image-categories" width="40" class="rounded-borders" />
            </q-item-section>

            <q-item-section class="text-weight-medium">{{
              item.name
            }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { categories } from "../utils/hooks/getCategories";

export default {
  data() {
    return {
      category: null,
      left: false,
    };
  },

  async mounted() {
    this.category = await categories();
  },
};
</script>
