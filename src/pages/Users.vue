<template>
  <spinner v-if="user === null" />
  <div v-else>
    <q-toolbar class="bg-teal-5 text-white shadow-2" style="max-width: 650px">
      <q-toolbar-title>Users</q-toolbar-title>
    </q-toolbar>
    <users-lists v-for="item in user" :key="item.id" :list="item"></users-lists>
  </div>
</template>

<script>
import UsersLists from "src/template/UsersLists.vue";
import { getUsers } from "../utils/hooks/getUsers";

export default {
  components: { UsersLists },
  data() {
    return {
      user: null,
    };
  },

  async mounted() {
    this.user = await getUsers();
  },
};
</script>

<style lang="scss" scoped></style>
