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
    <!-- < <div class="container q-mx-xl">
      <h3 class="text-info">About Us</h3>
      <div class="image-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/230px-HumanRightsLogo.svg.png"
          alt="Human Rights Logo"
        />
        <div>
          <p>
            The Human Rights Logo has its origin in the international “Logo for
            Human Rights” initiative, which was started in 2010. Its goal was to
            create an internationally recognized logo to support the global
            human rights movement. The winning logo was created by Predrag
            Stakić from Serbia.
          </p>
          <footer>(from Wikipedia)</footer>
        </div>
      </div>

      <div class="image-right">
        <img
          src="../../public/images/sammysit.png"
          alt="Human Rights Logo"
          width="300"
        />
        <div>
          <p>
            The Human Rights Logo has its origin in the international “Logo for
            Human Rights” initiative, which was started in 2010. Its goal was to
            create an internationally recognized logo to support the global
            human rights movement. The winning logo was created by Predrag
            Stakić from Serbia. The Human Rights Logo has its origin in the
            international “Logo for Human Rights” initiative, which was started
            in 2010. Its goal was to create an internationally recognized logo
            to support the global human rights movement. The winning logo was
            created by Predrag Stakić from Serbia.
          </p>
          <footer>(from Wikipedia)</footer>
        </div>
      </div>
    </div> -->

    <div class="row">
      <div class="col-1"></div>
      <div class="col-8 q-mx-lg">
        <div>
          <h3 class="text-info">About Us</h3>

          <div class="image-right">
            <img
              src="../../public/images/sammystanding.jpeg"
              width="500"
              alt="Human Rights Logo"
            />
            <div>
              <p>
                Integer velit erat, egestas sit amet nunc eu, posuere placerat
                lectus. Fusce eu velit pharetra, rutrum mauris vitae, commodo
                magna. Aenean a fringilla quam. Praesent vel justo eu tellus
                dignissim sodales id quis sem. Etiam tempor urna condimentum
                orci gravida blandit. Suspendisse vestibulum ultrices massa sit
                amet dignissim. Nam tincidunt tincidunt elit at tincidunt.
                Integer tempus rhoncus lacus cursus tincidunt. Duis vitae mi
                nunc. Pellentesque congue dui volutpat bibendum finibus. Proin
                interdum tristique risus. Aenean porttitor vehicula varius.
                Aliquam dignissim aliquet varius. Maecenas vitae nibh quam.
                Phasellus tempor nisi leo, sit amet pulvinar ligula varius eget.
                Morbi pharetra augue sed magna malesuada posuere. Fusce interdum
                pellentesque porta. Aenean commodo lacinia risus, eget viverra
                mauris viverra sit amet. Donec feugiat lorem dictum erat
                fermentum maximus. Aenean ex tellus, luctus ut varius eget,
                ultricies eu felis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <footer>(from Wikipedia)</footer>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>

    <div class="row wrap justify-center q-px-md q-gutter-lg q-pb-lg">
      <ProductsList></ProductsList>
    </div>
    <div class="row q-pb-xl">
      <div class="col-1"></div>
      <div class="col-6"></div>
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
