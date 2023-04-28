<template>
  <q-footer elevated class="bg-info text-center">
<div
class="q-py-md "
>

    <q-img src="/images/heckinwhite.png"
   width="180px" 
   class=" justify-center"
    />
    
    <div class="row 
    q-py-md  q-gutter-md  justify-center
    ">
    <q-btn
                id="my-button"
                target="_blank"
                round
                class="bg-white"
                href="https://www.linkedin.com/"
              >
                <q-avatar size="28px" square text-color="info">
                  <q-icon name="fab fa-linkedin-in"></q-icon>
                </q-avatar>
              </q-btn>
      <q-btn
                id="my-button"
                target="_blank"
                round

                class="bg-white"
                href="https://github.com/cbarnett358"
              >
                <q-avatar size="36px" square text-color="info">
                  <q-icon name="fab fa-github"></q-icon>
                </q-avatar>
              </q-btn>
              <q-btn
                id="my-button"
                target="_blank"
                round
                class="bg-white"
                href="https://www.behance.net/chrisb-designs"
              >
                <q-avatar size="28px" square text-color="info">
                  <q-icon name="fab fa-behance"></q-icon>
                </q-avatar>
              </q-btn>
              
    </div>


  
            

  </div>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";

export default defineComponent({
  name: "MainFooter",
  setup() {
    const store = useShopStore();

    return {
      store,
    };
  },
});
</script>
