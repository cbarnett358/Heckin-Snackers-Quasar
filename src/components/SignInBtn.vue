<template>
  <q-btn
    to="/auth"
    flat

    label="Sign In"
    v-if="!isUserLoggedIn"
    
    class="btn btn-primary text-primary"
  ></q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignInBtn",
//hide button if user is logged in

  setup() {
    const isUserLoggedIn = false;
    return {
      isUserLoggedIn,

      
    };
  },



  methods: {
    signIn() {
      console.log("Sign in");
    },
    signOut() {
      console.log("Sign out");
    },
  },

  



  
  


});

</script>
