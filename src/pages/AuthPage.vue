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
              to="/auth"
              label="Sign In"
              icon="person"
            ></q-breadcrumbs-el>
          </q-breadcrumbs>
          <q-item-section> </q-item-section>
          <q-btn
            to="/auth"
            flat
            label="Sign In"
            class="btn btn-primary text-primary"
          ></q-btn>
          <LogoutBtn></LogoutBtn>
        </q-item>
      </div>
    </div>
    <!--breadcrumbs End-->
    <q-card class="q-mt-xl">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="white"
        active-bg-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <AuthComponent :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <AuthComponent :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useShopStore } from "stores/shopStore";

import AuthComponent from "components/AuthComponent.vue";
import LogoutBtn from "components/LogoutBtn.vue";

export default defineComponent({
  name: "AuthPage",
  components: { AuthComponent, LogoutBtn },
  data() {
    return {
      tab: "login",
    };
  },
  setup() {
    const store = useShopStore();
    return {
      store,
    };
  },
});
</script>
