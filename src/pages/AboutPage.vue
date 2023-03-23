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
              to="/about"
              label="About"
              icon="info"
            ></q-breadcrumbs-el>
          </q-breadcrumbs>
          <q-item-section> {{ email }}</q-item-section>
          <SignInBtn></SignInBtn>
          <LogoutBtn></LogoutBtn>
        </q-item>
      </div>
    </div>
    <!--breadcrumbs End-->
    <div class="jumbotron jumbotron-con">
      <video autoplay muted loop poster="">
        <source src="../assets/dogfield.mp4" type="video/mp4" />
      </video>

      <div class="container text-white q-px-lg">
        <div class="col-1"></div>

        <div class="col-6"></div>
        <h1 class="display-4 q-mb-none text-center">Heckin' About Us</h1>
        <p id="jumbotronp" class="lead text-center">
          Heckin' Snackers provides fresh, and most importantly heckin'
          delicious snacks and food your dog will love garuanteed! Everything is
          organically sourced from the USA and will leave your pup heckin'
          happy!
        </p>
      </div>
      <!-- /.container -->
    </div>
    <div class="product-container q-ma-lg">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-8 q-mx-lg">
        <div>
          <h3 class="text-info q-mb-none">About Us</h3>

          <div class="image-right">
            <img
              src="../../public/images/sammystanding.jpeg"
              width="500"
              alt="Human Rights Logo"
            />
            <div>
              <p class="q-mt-none">
                Heckin' Snackers prides itself in supplying your pups both big
                and small with the most wholesome, delicious dog food on the
                market. We source all of our ingredients here in the US and use
                only natural ingredients, none of that heckin' artificial stuff.
                <br /><br />
                Each of our products is vet formulated to ensure your pup is
                getting the best nutrition possible. For all of your dogs' needs
                we have you covered whether it's dried kibble, wet food, or
                snackers to keep their tail wagging! We don't just stop at
                feeding your pup we know an active lifestyle is just as
                important that's why we also sell our very own dog toys and
                accessories to keep your pup heckin' occupied all day long.
                <br /><br />
                We don't just stop at feeding your pup we know an active
                lifestyle is just as important that's why we also sell our very
                own dog toys and accessories to keep your pup heckin' occupied
                all day long. We garuantee your pup will love our offerings or
                your money back!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>

</div>
  
  </q-page>
</template>
<style scoped>
html {
  padding: 0 1em;
  font-family: Calibri, sans-serif;
}

body {
  margin: auto;
  max-width: 42em;
}

img {
  max-width: 100%;
}

.image-left,
.image-right {
  margin: 1em 0;
}

@media (min-width: 20em) {
  .image-left,
  .image-right {
    display: flex;
    align-items: center;
  }

  .image-left img {
    margin-right: 1em;
    float: left; /* fallback */
  }

  .image-right img {
    order: 1;
    margin-left: 1em;
    float: right; /* fallback */
  }

  /* clearfix for fallback */
  .image-left::after,
  .image-right::after {
    content: "";
    display: block;
    clear: both;
  }
}

@media (min-width: 30em) {
  .image-left img,
  .image-right img {
    flex-shrink: 0;
  }
}
</style>

<script>
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";
import { useShopStore } from "stores/shopStore";
import LogoutBtn from "components/LogoutBtn.vue";
import ProductsList from "src/components/ProductsList.vue";
import SignInBtn from "src/components/SignInBtn.vue";

export default defineComponent({
  name: "AboutPage",
  setup() {
    const store = useShopStore();
    return {
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
  },
});
</script>
