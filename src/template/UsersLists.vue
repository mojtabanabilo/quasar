<template>
  <div class="q-pa-md q-gutter-md q-col-gutter-md" style="max-width: 650px">
    <q-item clickable v-ripple class="q-col-12 q-md-6 q-lg-4 q-responsive q-compact"
      :style="{ flexDirection: screenWidth < 590 ? 'column' : 'row' }">
      <q-item-section avatar>
        <q-avatar>
          <img :src="list.avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">{{ list.name }}</q-item-label>
        <q-item-label caption lines="2" class="text-weight-bold">
          <span>{{ list.role }}</span> - {{ list.email }}
        </q-item-label>
        <q-item-label>
          <span class="text-weight-medium">password :</span> {{ list.password }}
        </q-item-label>
      </q-item-section>

      <q-item-section side top>{{ list.updatedAt }}</q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth, // اندازه اولیه صفحه
    };
  },
  props: ["list"],
  created() {
    window.addEventListener('resize', this.updateScreenWidth); // بروز رسانی اندازه صفحه هنگام تغییر اندازه مرورگر
  },
  destroyed() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
@media (max-width: 400px) {
  .q-item {
    flex-direction: column;
    /* مرتب‌سازی المان‌ها به صورت ستونی در صفحات کوچک */
  }

  .q-item-section {
    text-align: center;
    /* تراز وسط نوشته‌ها */
  }
}
</style>
