<template>
  <div class="window-height q-pa-xl">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      myInfiniteVariable: false,
    };
  },
  methods: {
    showNotification() {
      this.$q.notify("Some other message");
    },
  },
};
</script>
