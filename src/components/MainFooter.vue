<template>
  <q-footer elevated class="bg-info">
    <q-toolbar>
      <q-toolbar-title>
        <a href="/#">
          <img src="../../public/images/heckinwhite.png" height="60"
        /></a>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";

export default defineComponent({
  name: "MainFooter",
  setup() {
    const store = useShopStore();

    return {
      store,
    };
  },
});
</script>
