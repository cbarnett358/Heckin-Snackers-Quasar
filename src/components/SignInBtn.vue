<template>
  <q-btn
    to="/auth"
    flat
    label="Sign In"
    class="btn btn-primary text-primary"
  ></q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignInBtn",
});
</script>
