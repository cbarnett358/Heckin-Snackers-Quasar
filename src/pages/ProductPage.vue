<!--Page with product details(individual items)-->
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
              to="/shop"
              label="Shop"
              icon="sell"
            ></q-breadcrumbs-el
            >&nbsp;
            <q-breadcrumbs-el to="/products/:id" icon="pets"
              >&nbsp;&nbsp;{{ item.name }}</q-breadcrumbs-el
            >
          </q-breadcrumbs>
          <q-item-section> {{ email }}</q-item-section>
          <SignInBtn></SignInBtn>
          <LogoutBtn></LogoutBtn>
        </q-item>
      </div>
    </div>
    <!--breadcrumbs End-->

    <!--Product Img Start-->
    <div class="full-width row wrap justify-center q-pa-lg q-gutter-md">
      <q-card>
        <img :src="'./images/products/' + item.id + '.jpg'" />

        <q-linear-progress :value="0.6" color="primary"></q-linear-progress>
        <!--Product Img End-->

        <q-card>
          <!--Product Desc Start-->
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
          <!--Product Desc End-->

          <!--Product Rating Start-->
          <q-card-section class="q-pt-none">
            <RateProduct></RateProduct>
          </q-card-section>
          <!--Product Rating End-->
        </q-card>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import { useRoute } from "vue-router";
import firebase from "firebase/compat/app";
import LogoutBtn from "components/LogoutBtn.vue";
import SignInBtn from "src/components/SignInBtn.vue";
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
    LogoutBtn,
    SignInBtn,
    RateProduct,
  },
});
</script>

components: {
