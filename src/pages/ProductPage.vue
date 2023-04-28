<!--Page with product details(individual items)-->
<template>
  <q-page>
    
    <!--breadcrumbs-->
    <div class="q-gutter-sm bg-white">
      <div class="q-mx-sm">
        <q-item class="text-right q-gutter-sm">
          <q-item-section>      <q-breadcrumbs class="text-info">
            <template v-slot:separator>
              <q-icon
                size="1em"
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
            ></q-breadcrumbs-el
            >&nbsp;
            <q-breadcrumbs-el to="/products/:id" icon="pets"
              >&nbsp;&nbsp;{{ item.name }}</q-breadcrumbs-el
            >
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

      

        <q-card class="product-container">
       
    <div class="row">
      <div class="col-12 col-md-6 "> 

        <q-img
      
     
            :src="'./images/products/' + item.id + '.jpg'"
            style="max-width: align-self: start;" 
          ></q-img>
        </div>

      <div class="col-12 col-md-6 q-pa-lg ">
        <h4 class="q-mb-none q-mt-sm text-primary">{{ item.name }}</h4>
            <p class="q-my-sm">{{ item.description }}</p>
            <q-btn
              flat
              @click="store.addToCart(item)"
              class="q-mt-none btn btn-primary bg-primary text-white"
              >Add to Cart</q-btn>
              <RateProduct></RateProduct>

              </div>
    </div>
    <div class="container">
      <p  v-for="review in reviews" :key="review.id">{{ review.name }}</p>

    </div>
  </q-card>

      </div>

    
  

    <!--Product Img Start

    <div class="full-width row wrap justify-center q-pa-lg q-gutter-md">
      <q-card>
        <img :src="'./images/products/' + item.id + '.jpg'" />

        <q-linear-progress :value="0.6" color="primary"></q-linear-progress>
        Product Img End

        <q-card>
          Product Desc Start
          <q-card-section>
            <h3 class="q-mb-none q-mt-sm text-primary">{{ item.name }}</h3>
            <p class="q-my-sm">{{ item.description }}</p>
            <q-btn
              flat
              @click="store.addToCart(item)"
              class="q-mt-none btn btn-primary bg-primary text-white"
              >Add to Cart</q-btn
            >
          </q-card-section>
         Product Desc End

       
          <q-card-section class="q-pt-none">
            <RateProduct></RateProduct>
          </q-card-section>
        </q-card>
      </q-card>
    </div>-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import { useRoute } from "vue-router";
import firebase from "firebase/compat/app";
import LogoutBtn from "components/LogoutBtn.vue";
import RateProduct from "src/components/RateProduct.vue";

export default defineComponent({
  name: "ProductPage",

  setup() {
    const route = useRoute();
    const id = route.params.id;
    const store = useShopStore();
    const item = store.products.find((item) => item.id == id);

    return {
      id,
      item,
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

  components: {
    RateProduct,
    LogoutBtn,
},
});
</script>

components: {
