<template>
  <div class="
  w-full bg-primary 
  ">
    <div class="row product-container  q-py-lg">
      <h3
      class="text-white q-my-sm"
      >Sign Up For Our Newsletter!</h3>
      <div class="col-12 col-md-8">  <q-input
    class="bg-white "
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
  ></q-input></div>
      <div class="col-12 col-md-4">

        <q-img
        class="
       float-right
    
        "
        src="/images/sammysit.png" style="max-width: 300px" />

      </div>
    </div></div>

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
