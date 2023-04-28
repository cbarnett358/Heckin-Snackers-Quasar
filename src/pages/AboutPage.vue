<!--Page with all products-->
<template>
  <q-page>
    <!--breadcrumbs-->
    <div class="q-gutter-sm bg-white">
      <div class="q-mx-sm">
        <q-item class="text-right q-gutter-sm">
          <q-item-section>   <q-breadcrumbs class="text-info ">
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
              to="/info"
              label="About"
              icon="info"
            ></q-breadcrumbs-el>
          </q-breadcrumbs></q-item-section> 
          <q-item-section class="text-info 
          
          "> {{ user }}</q-item-section>
        

<q-btn round color="none
" 
flat dense
icon="account_circle"
text-color="primary"
size="md"

>




        <q-menu>
          <q-list >
            <q-item  clickable v-close-popup>
              <q-item-section class="text-info" 
              >Signed In As: <br>{{user}}</q-item-section>
              
            </q-item>
          
            <q-separator />
    
            <q-item clickable v-close-popup>
              <q-item-section><LogoutBtn></LogoutBtn>
</q-item-section>
            </q-item>
          
          
          </q-list>
        </q-menu>
      </q-btn>



        </q-item>
      </div>
    </div>
   
    <!--breadcrumbs End-->
    <div class="jumbotron jumbotron-con">
      <video autoplay muted loop poster="">
        <source src="../assets/dogfield.mp4" type="video/mp4" />
      </video>

      <div class="container text-white q-px-lg  q-py-lg product-container">
        <div class="col-1"></div>

        <div class="col-6  "></div>
        <h1 class="display-4 q-mb-none text-center">Heckin' About Us</h1>
        <p id="jumbotronp" class="lead text-center q-mt-md">
          Heckin' Snackers provides fresh, and most importantly heckin'
          delicious snacks and food your dog will love garuanteed! Everything is
          organically sourced from the USA and will leave your pup heckin'
          happy!
        </p>
      </div>
      <!-- /.container -->
    </div>
    <div class="product-container q-ma-lg">
      <div class="row q-mb-xl  q-px-md ">
          <div class="col-12 col-md-4 q-mt-xl">
            <img
              src="../../public/images/winston.png"
              width="225"
              alt="Human Rights Logo"
            />
          </div>
          <div class="col-12 col-md-8">
            <h3 class="text-info q-mb-md">About Us</h3>

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
            <q-btn
              id="my-button"
              class="q-mt-lg q-mr-md"
              color="primary"
              square
              label="SHOP OUR PRODUCTS"
              icon="pets"
              to="/shop"
            />
            <q-btn
              class="q-mt-lg q-mr-md"
              color="info"
              square
              id="secondary-button"
              text-color="white"
              label="CONTACT US"
              icon="mail"
              to="/contact"
            />
          </div>
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
    
  },
});
</script>
