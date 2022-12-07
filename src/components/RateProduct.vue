<template>
  <h3 class="text-info q-mb-sm">Review Product</h3>

  <q-form>
    <q-rating
      v-model="rating"
      class="q-mb-md q-mt-md"
      color="primary"
      icon="pets"
      size="lg"
      :max-value="5"
      :value="rating"
      @input="updateRating"
    />
    <q-input
      class="q-mb-md"
      v-model="review"
      label="Review"
      filled
      type="textarea"
    />

    <q-btn label="Submit Review" color="primary" @click="submitReview" />
  </q-form>

  <div v-for="review in reviews" :key="review.id">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ review.name }}</div>
        <div class="text-subtitle2">{{ review.date }}</div>
        <div class="text-subtitle2">{{ review.rating }}</div>
        <div class="text-subtitle2">{{ review.review }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import firebase from "firebase/compat/app";

export default defineComponent({
  name: "RateProduct",
  setup() {
    const store = useShopStore();
    const rateProduct = (product) => {
      store.rateProduct(product);
    };
    return {
      store,
      rateProduct,
    };
  },
  //using q-rating rate product 1-5 stars and save to  firestore db and display on product page

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

  methods: {
    addReview() {
      const db = firebase.firestore();
      db.collection("reviews").add({
        text: this.text,
        user: this.user,
        email: this.email,
      });
    },
  },

  actions: {
    addReview({ commit }, payload) {
      commit("addReview", payload);
    },
  },

  mutations: {
    addReview(state, payload) {
      state.reviews.push(payload);
    },
  },

  getters: {
    reviews(state) {
      return state.reviews;
    },
  },
});
</script>
