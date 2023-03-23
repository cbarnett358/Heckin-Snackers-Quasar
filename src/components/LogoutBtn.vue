<template>
  <q-btn
    flat
    label="Sign Out"
    @click="logout"
    class="btn btn-primary text-info"
  ></q-btn>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import firebase from "firebase/compat/app";

export default defineComponent({
  name: "LogoutBtn",

  setup() {
    const store = useShopStore();

    return {
      store,
    };
  },




  methods: {
      

    logout() {


      firebase.auth().signOut();
      this.$router
        .push("/")
        .then(() => {

            this.$q.notify({
            message: "Sign Out Success.",
            color: "green",
            position: "top",
          });

          //refresh the page after 3 seconds
          setTimeout(() => {
            location.reload();
          }, 1000);


        })     
        .catch((error) =>
          this.$q.notify({
            message: "Sign Out Failed.",
            color: "red",
            position: "top",


          })
        );

    },
    
  },
  data() {
      
    return {
      user: "",
      email: "",
    };
  },
});
</script>
