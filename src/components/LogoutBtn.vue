<template>
   
  <q-btn
    flat
    label="Sign Out"
    v-if="isUserLoggedIn"


    @click="logout"
    class="btn btn-primary bg-info text-white"
  ></q-btn>
  <q-btn
    to="/auth"
    flat

    label="Sign In"
    v-if="!isUserLoggedIn"
   

    
    class="btn btn-primary  bg-primary text-white"
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

    signIn () {



    },

    

    


      

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
//this is requiring a refresh to show fix this

  computed: {
    isUserLoggedIn() {
      return this.store.user !== null;
      
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
