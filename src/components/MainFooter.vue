<template>
  <q-footer elevated class="bg-info text-center">
<div
class="q-py-md"
>

    <q-img src="/images/heckinwhite.png"
   width="150px" 
    />

  </div>
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
