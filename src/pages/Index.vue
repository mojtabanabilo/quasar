<template>
  <div class="bg-teal-5 window-height">
    <h1>index</h1>
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
