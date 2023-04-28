<!--Page with all products-->
<template>
  <q-page>
        <!--breadcrumbs-->
        <div class="q-gutter-sm bg-white">
      <div class="q-mx-sm">
        <q-item class="text-right q-gutter-sm">
          <q-item-section>   <q-breadcrumbs class="text-info ">
            <template v-slot:separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              ></q-icon>
            </template>

            <q-breadcrumbs class="text-info">
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
          </q-breadcrumbs></q-item-section> 
          <q-item-section class="text-info 
          
          "> {{ user }}</q-item-section>
        

<q-btn round color="none
" 
flat dense
icon="account_circle"
text-color="primary"
size="md"

>




        <q-menu>
          <q-list >
            <q-item  clickable v-close-popup>
              <q-item-section class="text-info" 
              >Signed In As: <br>{{user}}</q-item-section>
              
            </q-item>
          
            <q-separator />
    
            <q-item clickable v-close-popup>
              <q-item-section><LogoutBtn></LogoutBtn>
</q-item-section>
            </q-item>
          
          
          </q-list>
        </q-menu>
      </q-btn>



        </q-item>
      </div>
    </div>
    <!--breadcrumbs End-->
  
    <div class="container q-ma-xl">

      

<q-card class="product-container q-pa-lg q-pb-xl">
     
  <h3 class="text-info ">CONTACT US</h3>
      <ContactForm></ContactForm>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";
import { useShopStore } from "stores/shopStore";
import LogoutBtn from "src/components/LogoutBtn.vue";
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
