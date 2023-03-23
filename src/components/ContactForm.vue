<template>
    <q-form ref="form" @submit.prevent="sendEmail" class="q-gutter-md">
          <q-input
            color="primary"
            filled
            type="text"
            name="user_name"
            v-model="user_name"
            label="Name"
            hint="What's your name?"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Please type something']"
          />

          <q-input
            color="primary"
            filled
            v-model="email"
            name="user_email"
            label="Email"
            hint="What's your email?"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Please type something']"
          />

          <q-input
            color="primary"
            filled
            label="Message"
            name="message"
            v-model="message"
            hint="What's your message?"
            lazy-rules
            :rules="[(val) => val.length > 0 || 'Please type something']"
          />

          <div class="row justify-end">
            <q-btn
              icon="send"
              label="Send Message"
              type="submit"
              color="primary"
            />
          </div>
        </q-form>
</template>

<script>
import { defineComponent } from "vue";
import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "ContactForm",

  data() {
    return {
      user_name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_qh9trkf",
          "template_zzf5i2s",
          this.$refs.form.$el,
          "3SnUs-7tdrOK9w-Ac"
        )
        .then(
          (result) => {
            console.log(result.text);
            //send success message
            this.$q.notify({
              message: "Email sent successfully",
              color: "positive",
              position: "top",
              timeout: 3000,
            });
          },
          (error) => {
            console.log(error.text);
            this.$q.notify({
              message: "Email not sent",
              color: "negative",
              position: "top",
              timeout: 2000,
            });
            this.$refs.form.resetValidation();
          }
        );
      //send
    },
  },
});
</script>
