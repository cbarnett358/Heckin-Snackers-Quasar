<!--Page with all products-->
<template>
  <q-page>
    <!--breadcrumbs-->
    <div class="q-gutter-sm bg-white">
      <div class="q-mx-lg">
        <q-item class="text-right q-gutter-sm">
          <q-breadcrumbs class="text-info q-mt-md">
            <template v-slot:separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              ></q-icon>
            </template>

            <q-breadcrumbs-el
              to="/"
              label="Home"
              icon="home"
            ></q-breadcrumbs-el>
            <q-breadcrumbs-el
              to="/contact"
              label="Contact"
              icon="mail"
            ></q-breadcrumbs-el>
          </q-breadcrumbs>
          <q-item-section> {{ email }}</q-item-section>

          <SignInBtn></SignInBtn>
          <LogoutBtn></LogoutBtn>
        </q-item>
      </div>
    </div>
    <!--breadcrumbs End-->
    <div class="container q-mx-xl q-mb-xl">
      <h3 class="text-info q-mb-none">CONTACT US</h3>
      <ContactForm></ContactForm>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";
import { useShopStore } from "stores/shopStore";
import LogoutBtn from "src/components/LogoutBtn.vue";
import SignInBtn from "src/components/SignInBtn.vue";
import ContactForm from "src/components/ContactForm.vue";

export default defineComponent({
  name: "ContactPage",
  setup() {
    const store = useShopStore();
    return {
      store,
    };
  },
  components: {
    LogoutBtn,
    SignInBtn,
    ContactForm,
  },
  data() {
    return {
      text: "",
      user: "",
      email: "",
    };
  },

  created() {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.user = auth.displayName;
        this.email = auth.email;
      } else {
        console.log("user name is null");
      }
    });
  },
});
</script>
