<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-mt-lg">
    <q-input
      outlined
      v-model="name"
      label="Name"
      hint="Name"
      class="bg-white q-mb-l"
    />

    <q-input
      outlined
      v-model="email"
      label="Email"
      hint="Email"
      class="bg-white q-mb-lg q-mt-lg"
    />

    <q-input
      outlined
      v-model="message"
      label="Message"
      hint="Message"
      class="bg-white q-mb-lg"
    />

    <q-btn
      type="reset"
      color="white"
      flat
      label="Reset"
      class="q-mr-md bg-info"
    />

    <q-btn type="submit" color="primary" label="Submit" />
  </q-form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactForm",
  //how to make a contact form component in vue js 3 and quasar framework with success and error messages and validation using q-form and q-input and send the data of the form to cbarnett2813@gmail.com

  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  //send the form to cbarnett2813@gmail.com email
  methods: {
    onSubmit() {
      this.$q.notify({
        message: "Thank you for your message",
        color: "primary",
        position: "top",
      });
    },

    onReset() {
      this.$q.notify({
        message: "Form has been reset",
        color: "negative",
        position: "top",
      });
    },
  },
});
</script>
