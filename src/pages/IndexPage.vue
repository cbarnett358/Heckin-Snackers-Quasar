<template>
  <q-page class="q-mb-xl">
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

            <q-breadcrumbs-el
              to="/"
              label="Home"
              icon="home"
            ></q-breadcrumbs-el>
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

    <!--Jumbotron video Start-->
    <div class="jumbotron jumbotron-con">
      <video autoplay muted loop poster="">
        <source src="../assets/AdobeStock_436785558.mp4" type="video/mp4" />
      </video>

      <div class="container fluid text-white q-px-lg
      q-py-lg product-container
      
      ">
       
        <h1 class="display-4 q-mb-none text-center">Heckin' Natural, and Delicious Dog Food</h1>
        <p id="jumbotronp" class="lead text-center q-mt-md 
        
        ">
          Heckin' Snackers provides fresh, and most importantly heckin'
          delicious snacks and food your dog will love garuanteed! Everything is
          organically sourced from the USA and will leave your pup heckin'
          happy!
        </p>
        <div class="row wrap justify-center q-px-md q-gutter-lg q-pb-lg">
          <q-btn to="/shop" flat class="btn btn-primary bg-primary text-white"
            >
            <q-icon name="pets" size="1.5em" class="q-mr-sm"></q-icon>
            Shop Snackers</q-btn
          >
          <q-btn to="/info" flat class="btn btn-secondary bg-info text-white"
            >
            <q-icon name="info" size="1.5em" class="q-mr-sm"></q-icon>
Our Purpose</q-btn
          ></div>
        </div>
      </div>
      <!-- /.container -->
  
    <!--Jumbotron video End-->
<div class="product-container q-px-md ">
  <h2 class="text-primary q-mb-md">Featured Products</h2>
  <FeaturedItems></FeaturedItems>

  <q-btn to="/shop" flat class="q-mt-lg q-mb-xl btn btn-primary bg-info text-white"
    >Shop All Products</q-btn>
  </div>

  <NewsLetter></NewsLetter>



    <!--Content Start-->
    
  
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import LogoutBtn from "src/components/LogoutBtn.vue";
import firebase from "firebase/compat/app";
import NewsLetter from "src/components/NewsLetter.vue";
import FeaturedItems from "src/components/FeaturedItems.vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    const store = useShopStore();
    return {
      store,
    };
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
  components: { LogoutBtn, NewsLetter, FeaturedItems },
});
</script>
