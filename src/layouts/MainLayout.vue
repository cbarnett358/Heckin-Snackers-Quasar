<template>
  <q-layout view="hHh lpR lfr">
    <q-page-container>
      <MainHeader></MainHeader>

      <CartDrawer></CartDrawer>
      <MainFooter></MainFooter>
      <router-view />
    </q-page-container>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
      :duration="500"
      :behavior="'smooth'"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <q-btn fab icon="arrow_drop_up" color="info"></q-btn>
    </q-page-scroller>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";

import CartDrawer from "src/components/CartDrawer.vue";
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "src/components/MainFooter.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    CartDrawer,
    MainHeader,
    MainFooter,
  },

  setup() {
    const store = useShopStore();

    return {
      store,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "primary",
        width: "5px",
        opacity: 0.75,
      },
      barStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "primary",
        width: "5px",
        opacity: 0.75,
      },
    };
  },
});
</script>
