
<template>
  <q-drawer
    v-model="store.isCartDrawerOpen"
    side="right"
    overlay
    elevated
    :width="400"
  >
    <h3 class="text-info q-px-md q-mb-sm">HECKIN' CART</h3>
    <div class="q-px-md q-mb-sm">{{ store.cartQuantity }} Items</div>

    <q-list bordered separator>
      <q-item v-if="!store.cart.length" class="text-subtitle1">
        <q-item-section>Your cart is empty.</q-item-section>
      </q-item>

      <q-item v-for="(item, i) in store.cart" :key="i">
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="'./images/products/' + item.id + '.jpg'" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.name }} </q-item-label>
          <q-item-label caption>{{ item.description }}</q-item-label>
          <q-item-label>{{ item.cost }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>x{{ item.qty }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn
            flat
            icon="add_circle"
            @click.prevent="store.addToCart(item)"
            class="btn text-green"
          ></q-btn>
          <q-btn
            flat
            icon="remove_circle"
            @click.prevent="store.removeFromCart(item)"
            class="btn text-red"
          ></q-btn>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item class="text-h6 q-pa-md text-right">
        <q-btn
          flat
          label="CLEAR CART"
          @click.prevent="store.clearCart(item)"
          class="btn btn-primary text-warning"
        ></q-btn>
        <q-item-section>Total: {{ store.getFormattedTotal }}</q-item-section>
      </q-item>

      <q-item class="q-pa-lg">
        <q-item-section>
          <q-btn
            flat
            icon="shopping_cart"
            label="CHECKOUT"
            class="btn btn-primary bg-primary text-white"
            :loading="isCreatingOrder"
            @click="processCheckout"
          ></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { useShopStore } from "stores/shopStore";
import { defineComponent, ref } from "vue";
import { createOrder } from "../boot/firebase";


export default defineComponent({
  name: "CartDrawer",
 




  





  setup() {
    const isCreatingOrder = ref(false);
    const store = useShopStore();

    return {
      store,
      isCreatingOrder,

      

    };
  },



//if not logged in and click checkout q.notify "please login to checkout" 


  methods: {
    async processCheckout() {
      this.isCreatingOrder = true;
      await createOrder();
      this.isCreatingOrder = false;      

      this.$router.push("/checkout")
        
    },

    
  },
});

</script>
