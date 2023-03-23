<template>

<div class="row q-col-gutter-lg
">
      <div class="
      col-12
        col-sm-6
        col-md-4
     
        "  v-for="item in store.products.slice(0,3)" :key="item.id" v-bind="item.id" transition="scale"

      >
        <div class="my-content"
     
        
        ><q-card>

  <img :src="'./images/products/' + item.id + '.jpg'" @click="open('top')" />
  <q-card-section>
    <div class="text-h5 text-primary">{{ item.name }}</div>
    <div class="text-subtitle3 text-">
      {{ item.cost }}&nbsp;&nbsp;&nbsp;
      <!--<q-rating size="1em" color="info" icon="pets"></q-rating>-->
      
    </div>
  </q-card-section>

  <q-card-actions>
    <q-btn
      label="DETAILS"
      class="bg-info text-white"
      :to="'products/' + item.id"
    ></q-btn>
    <q-btn
      flat
      @click="store.addToCart(item)"
      class="btn btn-primary bg-primary text-white"
      >Add to Cart</q-btn
    >
  </q-card-actions>

</q-card>
</div>
      </div>
    </div>


</template>

<script>

import { defineComponent } from 'vue';
import { useShopStore } from "stores/shopStore";


export default defineComponent({

name: "FeaturedItems",

setup() {

const store = useShopStore();

return {

store,






}

}
    
    })



</script>

