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

      <div class="container text-white q-px-lg">
        <div class="col-1"></div>
        <div class="col-6"></div>
        <h1 class="display-4 q-mb-none text-center">Heckin' Snackers</h1>
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
        </div>
      </div>
      <!-- /.container -->
    </div>
    <!--Jumbotron video End-->

    <!--Content Start-->
    <div class="row">
      <div class="col-1"></div>
      <div class="col-6">
        <h3 class="text-info q-mb-md">TOP SELLERS</h3>
      </div>
      <div class="col"></div>
    </div>

    <!--Product List Start-->
    <div class="row wrap justify-center q-px-md q-gutter-lg q-pb-lg">
      <ProductsList></ProductsList>
    </div>
    <div class="row q-pb-xl">
      <div class="col-1"></div>
      <div class="col-6">
        <q-btn flat class="btn btn-primary bg-primary text-white" to="/shop"
          >Shop All</q-btn
        >

        <p></p>
      </div>
    </div>
    <!--Product List End-->

    <!--Newsletter Start-->
    <div class="q-pb-xl">
      <div class="row bg-primary">
        <div class="q-mx-xl q-pl-xl text-info col-8">
          <div>
            <h3 class="text-white q-mb-sm">Sign Up To Our Newsletter</h3>
            <p class="text-white">Keep up to date with all the latest news!</p>
            <footer><NewsLetter></NewsLetter></footer>
          </div>
        </div>
        <img src="../../public/images/sammysit.png" width="200" />
      </div>
      <div class="ma-lg col-4"></div>
    </div>
    <!--Newsletter Start-->
  </q-page>
</template>
<style scoped>
html {
  padding: 0 1em;
  font-family: Calibri, sans-serif;
}

body {
  margin: auto;
  max-width: 42em;
}

img {
  max-width: 100%;
}

.image-left,
.image-right {
  margin: 1em 0;
}

@media (min-width: 20em) {
  .image-left,
  .image-right {
    display: flex;
    align-items: center;
  }

  .image-left img {
    margin-right: 1em;
    float: left; /* fallback */
  }

  .image-right img {
    order: 1;
    margin-left: 1em;
    float: right; /* fallback */
  }

  /* clearfix for fallback */
  .image-left::after,
  .image-right::after {
    content: "";
    display: block;
    clear: both;
  }
}

@media (min-width: 30em) {
  .image-left img,
  .image-right img {
    flex-shrink: 0;
  }
}
</style>
<script>
import { defineComponent } from "vue";

import { useShopStore } from "stores/shopStore";
import LogoutBtn from "src/components/LogoutBtn.vue";

import firebase from "firebase/compat/app";
import NewsLetter from "src/components/NewsLetter.vue";
import SignInBtn from "src/components/SignInBtn.vue";
import ProductsList from "src/components/ProductsList.vue";

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

  components: { LogoutBtn, NewsLetter, SignInBtn, ProductsList },
});
</script>
