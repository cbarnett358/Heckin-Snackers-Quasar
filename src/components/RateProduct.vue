<template>
  <h3 class="text-info q-mb-sm">Review Product</h3>

  <q-rating
    v-model="store.rating"
    
    icon="pets"
    color="info"
    size="md"
    :max-value="5"
  ></q-rating>
  <q-input
    v-model="text"
    label="Review"
    filled
    class="q-mt-md"

    type="textarea"
    autogrow
    placeholder="Enter your review"
  ></q-input>
  <q-btn
    class="q-mt-md"
    color="primary"
    label="Submit"
    @click="rateProduct"

  ></q-btn>
  
 







 

</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import firebase from "firebase/compat/app";

export default defineComponent({
  name: "RateProduct",


//rate product from an array of 1-5
  //display error message if user is not logged in


  setup() {
    const store = useShopStore();
    const text = "";
    const rateProduct = () => {
      const db = firebase.firestore();
      db.collection("reviews").add({
        name: store.name,
        text: text,

        
        rating: store.rating,

      });
    };
    
    const reviews = [];
    const getReviews = () => {

      const db = firebase.firestore();

      db.collection("reviews")
        .get()
        
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            reviews.push(doc.data());

            
          });
        });
    };
    getReviews();
    return {
      store,


      text,
      rateProduct,
      reviews,
    };


  },







});
</script>

