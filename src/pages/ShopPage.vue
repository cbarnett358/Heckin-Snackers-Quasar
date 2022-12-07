<!--Page with all products-->
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
            ></q-breadcrumbs-el>
          </q-breadcrumbs>
          <q-item-section>{{ email }}</q-item-section>

          <SignInBtn></SignInBtn>
          <LogoutBtn></LogoutBtn>
        </q-item>
      </div>
    </div>
    <!--breadcrumbs End-->

    <div class="jumbotron jumbotron-con">
      <video autoplay muted loop poster="">
        <source src="../assets/AdobeStock_391618271.mp4" type="video/mp4" />
      </video>

      <div class="container text-white q-px-lg">
        <div class="col-1"></div>
        <div class="col-6"></div>
        <h1 class="display-4 q-mb-none text-center">Shop Our Snackers</h1>
        <p id="jumbotronp" class="lead text-center">
          Heckin' Snackers provides fresh, and most importantly heckin'
          delicious snacks and food your dog will love garuanteed! Everything is
          organically sourced from the USA and will leave your pup heckin'
          happy!
        </p>
      </div>
      <!-- /.container -->
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-6">
        <div>
          <h3 class="text-info q-mb-none q-ml-sm">
            SHOP OUR PRODUCTS
            <q-btn-dropdown class="flat" color="primary" label="Sort">
              <q-list>
                <q-item clickable @click="store.sortItemsByPriceDesc">
                  <q-item-section>Price: High-Low</q-item-section>
                </q-item>

                <q-item clickable @click="store.sortItemsByPriceAsc">
                  <q-item-section>Price: Low-High</q-item-section>
                </q-item>
                <q-item clickable @click="store.sortItemsByPriceAsc">
                  <q-item-section>Sort By Catergory</q-item-section>
                </q-item>

                <q-item clickable @click="store.sortProducts">
                  <q-item-section>Top Sellers</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="store.showSnackers">
                  <q-item-section>Show Snackers</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="store.showToys">
                  <q-item-section>Show Toys</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="store.showAccessories">
                  <q-item-section>Show Accessories</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="store.resetProducts">
                  <q-item-section>Reset Filter</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </h3>
        </div>

        <div class="text-info q-pb-md q-mx-sm" id="productAmount">
          heckin' {{ store.products.length }} products available.
        </div>
      </div>
      <div class="col"></div>
    </div>

    <div class="row wrap justify-center q-px-md q-gutter-lg q-pb-lg">
      <ProductsList></ProductsList>
    </div>
    <div class="row q-pb-xl">
      <div class="col-1"></div>
      <div class="col-6"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";

import { useShopStore } from "stores/shopStore";
import ProductsList from "src/components/ProductsList.vue";
import LogoutBtn from "src/components/LogoutBtn.vue";
import SignInBtn from "src/components/SignInBtn.vue";

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
  components: { ProductsList, LogoutBtn, SignInBtn },
});
</script>
