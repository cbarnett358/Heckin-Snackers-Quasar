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
          </q-breadcrumbs>
          <q-item-section>{{ email }} </q-item-section>

          <SignInBtn></SignInBtn>
          <LogoutBtn></LogoutBtn>
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
      q-py-lg
      
      ">
        <div class="product-container">
        <h1 class="display-4 q-mb-none text-center">The Tastiest Treats That Your Pup Will Love</h1>
        <p id="jumbotronp" class="lead text-center">
          Heckin' Snackers provides fresh, and most importantly heckin'
          delicious snacks and food your dog will love garuanteed! Everything is
          organically sourced from the USA and will leave your pup heckin'
          happy!
        </p>
        <div class="row wrap justify-center q-px-md q-gutter-lg q-pb-lg">
          <q-btn to="/shop" flat class="btn btn-primary bg-primary text-white"
            >Shop Snackers</q-btn
          >
          <q-btn to="/info" flat class="btn btn-secondary bg-info text-white"
            >Our Purpose</q-btn
          ></div>
        </div>
      </div>
      <!-- /.container -->
    </div>
    <!--Jumbotron video End-->
<div class="product-container q-ma-lg">
  <h2 class="text-primary ">Featured Items</h2>
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
import SignInBtn from "src/components/SignInBtn.vue";
import ProductsList from "src/components/ProductsList.vue";
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
  components: { LogoutBtn, NewsLetter, SignInBtn, FeaturedItems },
});
</script>
