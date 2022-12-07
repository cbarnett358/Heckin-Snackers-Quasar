<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <img src="../../public/favicon.png" height="304" />
      <div style="font-size: 20vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Heckin' Dead End...</div>

      <q-btn
        class="q-mt-xl"
        color="info"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
