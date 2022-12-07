<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";

export default defineComponent({
  name: "App",

  setup() {
    const store = useShopStore();

    return {
      store,
    };
  },
});
</script>
