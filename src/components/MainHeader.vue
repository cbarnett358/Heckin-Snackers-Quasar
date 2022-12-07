<template>
  <q-header elevated class="bg-white text-primary">
    <q-toolbar>
      <q-toolbar-title class="q-py-md">
        <a href="/" class="q-mx-sm">
          <img
            src="/images/dog.gif"
            height="60"
            alt="Heckin Snackers Logo" /></a
      ></q-toolbar-title>

      <SearchBar></SearchBar>
    
      <div class="q-mr-lg">
        <q-btn
          round
          icon="shopping_basket"
          flat
          @click="store.toggleCartDrawer"
          :class="{ 'drawer-open': store.isCartDrawerOpen }"
        >
          <q-badge color="red" floating>{{ store.cartQuantity }}</q-badge>
        </q-btn>
      </div>
    </q-toolbar>

    <!--Tabs Start-->

    <q-tabs
      inline-label
      :breakpoint="0"
      input-class="text-left"
      align="justify"
      class="bg-primary text-white shadow-2 q-px-lg"
    >
      <q-route-tab label="Home" to="/"></q-route-tab>
      <q-route-tab label="Products" to="/shop"></q-route-tab>
      <q-route-tab
        v-if="$q.screen.gt.sm"
        to="/info"
        name="about"
        label="About"
        exact
      ></q-route-tab>
      <q-route-tab
        v-if="$q.screen.gt.sm"
        to="/contact"
        name="contact"
        label="Contact"
      ></q-route-tab>
      <q-btn-dropdown
        v-if="$q.screen.lt.md"
        auto-close
        stretch
        flat
        label="More..."
      >
        <q-list>
          <q-item class="text-primary" clickable to="/info">
            <q-item-section>About</q-item-section>
          </q-item>

          <q-item class="text-primary" clickable to="/contact">
            <q-item-section>Contact</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-tabs>
  </q-header>

  <!--Tabs End-->
</template>
<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";
import SearchBar from "./SearchBar.vue";

export default defineComponent({
  name: "MainHeader",
  setup() {
    const store = useShopStore();
    return {
      store,
    };
  },
  components: { SearchBar },
});
</script>
