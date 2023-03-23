<template>
  <q-btn
    icon="search"
    round
    flat
    @click="open('top')"
    class="bg-none q-mr-lg"
  />
  <q-dialog v-model="dialog" :position="position">
    <q-card style="width: 350px">
      <q-linear-progress :value="0.6" color="primary" />
      <q-card-section>
        <q-form>
          <q-input
            condensed
            v-model="search"
            label="Search"
            filled
            type="textarea"
          />
        </q-form>
        //hide search until user starts typing

        <div v-for="item in filteredProducts" :key="item.id">
          <q-item clickable :to="'/products/' + item.id">
            <q-item-section>
              <q-item-label 
                v-if="search.length > 0"

              
              class="text-info q-my-sm text-h5">{{
                item.name
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { ref, computed } from "vue";
import { useShopStore } from "stores/shopStore";

export default defineComponent({
  name: "SearchBar",

  setup() {
    const dialog = ref(false);
    const position = ref("top");
    const store = useShopStore();
    const search = ref("");
    const filteredProducts = computed(() => {
      return store.products.filter((product) => {
        return product.name.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    return {
      store,
      search,
      filteredProducts,
      dialog,
      position,

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
  data() {
    return {
      user: "",
      email: "",
    };
  },
  
  methods: {
    searchProduct() {
      this.$router.push({ name: "Product", params: { id: item.id } });
    },
  },
});
</script>
