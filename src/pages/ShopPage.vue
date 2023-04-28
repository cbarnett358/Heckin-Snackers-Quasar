<!--Page with all products-->
<template>
  <q-page >
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
              to="/shop"
              label="Shop"
              icon="sell"
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

   
    <div class="jumbotron jumbotron-con">
      <video autoplay muted loop poster="">
        <source src="../assets/AdobeStock_391618271.mp4" type="video/mp4" />
      </video>

      <div class="container text-white q-px-lg
      q-py-lg product-container
      ">
        <div class="col-1"></div>
        <div class="col-6"></div>
        <h1 class="display-4 q-mb-none text-center">Shop Our Snackers</h1>
        <p id="jumbotronp" class="lead text-center q-mt-md">
          Heckin' Snackers provides fresh, and most importantly heckin'
          delicious snacks and food your dog will love garuanteed! Everything is
          organically sourced from the USA and will leave your pup heckin'
          happy!
        </p>
      </div>
      <!-- /.container -->
    </div>
    <div class="product-container q-ma-lg q-px-lg">
    <div class="row q-mb-lg">
     
        <div >
          <h3 class="text-info q-mb-none ">
            SHOP OUR PRODUCTS
            <q-btn-dropdown class="flat" color="primary" label="Sort">
              <q-list>
                <q-item clickable @click="store.sortItemsByPriceDesc">
                  <q-item-section>Price: High-Low</q-item-section>
                </q-item>

                <q-item clickable @click="store.sortItemsByPriceAsc">
                  <q-item-section>Price: Low-High</q-item-section>
                </q-item>
              
              </q-list>
            </q-btn-dropdown>
          </h3>
     

        <div class="text-info q-pb-md " id="productAmount">
          heckin' {{ store.products.length }} products available.
        </div>
      </div>
      <div class="col"></div>
    </div>

    <div class="row wrap justify-center">
      <ProductsList></ProductsList>
    </div>
    <div class="row q-pb-xl">
      <div class="col-1"></div>
      <div class="col-6"></div>
    </div></div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";

import { useShopStore } from "stores/shopStore";
import ProductsList from "src/components/ProductsList.vue";
import LogoutBtn from "src/components/LogoutBtn.vue";

export default defineComponent({
  name: "ShopPage",
  setup() {
    const store = useShopStore();
    return {
      store,
      onItemClick() {},
    };
  },
  data() {
    return {
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
  components: { ProductsList, LogoutBtn },
});
</script>
