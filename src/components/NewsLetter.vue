<template>
  <q-input
    class="bg-white q-mb-xl"
    style="min-width: 100px"
    filled
    v-model="email"
    label="Email"
  >
    <template v-slot:after>
      <q-btn
        class="text-primary q-mx-sm"
        round
        dense
        flat
        @click="submit"
        icon="send"
      /> </template
  ></q-input>
</template>
<script>
export default {
  name: "NewsLetter",
  data() {
    return {
      email: "",
    };
  },

  methods: {
    submit() {
      this.$q.notify({
        message:
          "Thank you for signing up to our newsletter. You will receive an email shortly.",
        color: "primary",
        position: "top",
      });

      this.email = "";
    },
  },
};
</script>
