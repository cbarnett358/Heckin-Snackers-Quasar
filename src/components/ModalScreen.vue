<template>
  <q-dialog v-model="isDialogOpen"></q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const isDialogOpen = ref(false);
    async function fetchData() {
      // do some await things here

      // done with await update v-model (if using Composition API)
      isDialogOpen.value = false;
    }

    return {
      isDialogOpen,
      fetchData,
    };
  },
});
</script>
