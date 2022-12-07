<template>
  <!--breadcrumbs-->
  <div class="q-pa-md q-gutter-sm bg-white">
    <div class="q-mx-lg">
      <q-breadcrumbs class="text-info q-mt-md">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary"></q-icon>
        </template>

        <q-breadcrumbs-el to="/" label="Home" icon="home"></q-breadcrumbs-el>

        <q-breadcrumbs-el
          label="Checkout"
          icon="shopping_basket"
        ></q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
  </div>
  <!--breadcrumbs End-->

  <div class="q-mx-lg q-mb-none q-mt-sm">
    <h3 class="text-info q-mb-none q-mx-lg">CHECKOUT</h3>
    <div class="q-pa-md">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step :name="1" title="Checkout" icon="info" :done="step > 1">
          <q-input
            class="q-mb-lg"
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            class="q-mb-lg"
            v-model="email"
            label="Your email *"
            hint="example@email.com"
            lazy-rules
            :rules="[
              (val) =>
                val.includes('@') || 'Please type a correct email address',
            ]"
          />
          <q-input
            filled
            class="q-mb-lg"
            v-model="phone"
            label="Phone # *"
            hint="222-222-2222"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            class="q-mb-lg"
            v-model="address"
            label="Your address *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            class="q-mb-lg"
            v-model="zipcode"
            label="Your zip code *"
            hint="Zipcode should be five digits"
            lazy-rules
            :rules="[
              (val) => (val && val.length === 5) || 'Please type 5 digits',
            ]"
          />
        </q-step>
        <q-step
          :name="2"
          title="Order Summary"
          caption="your order summary"
          icon="shopping_basket"
          :done="step > 2"
        >
          <div>
            <h3 class="text-info q-my-lg">Order Summary</h3>

            <q-list bordered separator class="bg-white">
              <q-item v-if="!store.cart.length" class="text-subtitle1">
                <q-item-section>Your cart is empty.</q-item-section>
              </q-item>

              <q-item> Phone: {{ name }} </q-item>
              <q-item> Email: {{ email }} </q-item>
              <q-item> Address: {{ address }} </q-item>
              <q-item> Phone: {{ phone }} </q-item>
              <q-item> Zipcode: {{ zipcode }} </q-item>
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
                <q-item-section
                  >Total: {{ store.getFormattedTotal }}</q-item-section
                >
              </q-item>
            </q-list>
          </div>
        </q-step>

        <q-step :name="3" title="Make Payment" icon="payments" :done="step > 3">
          <div id="payment-form">
            <h3 class="text-info q-my-lg">Enter your payment details</h3>
            <div
              class="q-mt-md q-mb-md text-negative"
              v-if="payment.submissionError"
            >
              <div id="card-errors" role="alert">
                {{ payment.submissionError }}
              </div>
            </div>

            <q-field
              label="Card Number"
              stack-label
              class="q-mb-md"
              :error-message="payment.errors['cardNumber']"
              :error="!isCardNumberValid"
            >
              <template v-slot:control>
                <div class="self-center full-width no-outline">
                  <div id="cardNumber" ref="cardNumber"></div>
                </div>
              </template>
            </q-field>

            <div class="row q-col-gutter-lg">
              <div class="col-6">
                <q-field
                  label="Card Expiry"
                  stack-label
                  class="q-mb-md"
                  :error-message="payment.errors['cardExpiry']"
                  :error="!isCardExpiryValid"
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline">
                      <div id="cardExpiry" ref="cardExpiry"></div>
                    </div>
                  </template>
                </q-field>
              </div>
              <div class="col-6">
                <q-field
                  label="Card CVC"
                  stack-label
                  class="q-mb-md"
                  :error-message="payment.errors['cardCvc']"
                  :error="!isCardCvcValid"
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline">
                      <div id="cardCvc" ref="cardCvc"></div>
                    </div>
                  </template>
                </q-field>
              </div>
            </div>

            <q-btn
              label="Make Payment"
              :loading="payment.loading"
              :disabled="!isCardValid || payment.loading"
              type="submit"
              color="primary"
              @click="submitForm"
            />
          </div>
        </q-step>

        <q-step :name="4" title="Order Complete" icon="local_shipping">
          <div>
            <h3 class="q-my-lg text-info">Purchase success!</h3>
            <p>
              Thank you for your order. We will contact you shortly to confirm
              your order.
            </p>
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <!-- <q-btn
              :label="step === 4 ? 'Done' : 'Continue'"
              type="submit"
              color="primary"
              @click="onContinue"
              v-if="showContinueButton"
            /> -->

            <q-btn
              v-if="step < 3"
              flat
              color="primary"
              @click="onBack"
              label="Back"
              class="q-ml-sm"
            />
            <q-btn
              :label="step === 4 ? 'Done' : 'Continue'"
              type="submit"
              color="primary"
              @click="onContinue"
              v-if="showContinueButton"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import { useShopStore } from "stores/shopStore";
import { ref, computed } from "vue";
import { updateOrder } from "../boot/firebase";

export default defineComponent({
  name: "CheckoutPage",
  setup() {
    const store = useShopStore();
    const progress1 = ref(0.25);
    const step = ref(1);
    const payment = ref({
      loading: false,
      stripe: null,
      elements: null,
      card: {
        cardNumber: null,
        cardExpiry: null,
        cardCvc: null,
      },
      errors: {
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
      },
      submissionError: null,
    });

    return {
      store,
      progress1,

      step,
      payment,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + "%"),
    };
  },

  computed: {
    name: {
      get() {
        return this.store?.order?.orderInfo?.name ?? "";
      },
      set(value) {
        this.store.updateOrderByKey({
          key: "name",
          value: value,
        });
      },
    },

    email: {
      get() {
        return this.store?.order?.orderInfo?.email ?? "";
      },
      set(value) {
        this.store.updateOrderByKey({
          key: "email",
          value: value,
        });
      },
    },

    phone: {
      get() {
        return this.store?.order?.orderInfo?.phone ?? "";
      },
      set(value) {
        this.store.updateOrderByKey({
          key: "phone",
          value: value,
        });
      },
    },
    zipcode: {
      get() {
        return this.store?.order?.orderInfo?.zipcode ?? "";
      },
      set(value) {
        this.store.updateOrderByKey({
          key: "zipcode",

          value: value,
        });
      },
    },

    address: {
      get() {
        return this.store?.order?.orderInfo?.address ?? "";
      },
      set(value) {
        this.store.updateOrderByKey({
          key: "address",
          value: value,
        });
      },
    },

    isCardNumberValid() {
      return this.isValid("cardNumber");
    },

    isCardExpiryValid() {
      return this.isValid("cardExpiry");
    },

    isCardCvcValid() {
      return this.isValid("cardCvc");
    },

    isCardValid() {
      return (
        this.isCardNumberValid && this.isCardExpiryValid && this.isCardCvcValid
      );
    },

    showContinueButton() {
      return this.step !== 3;
    },
  },

  watch: {
    step() {
      if (this.step === 3) {
        this.$nextTick(() => {
          this.onPreparePaymentPage();
        });
      }
    },
  },
  async onBack() {
    if (this.step === 1) {
      this.$router.push("/");
    } else {
      this.$refs.stepper.previous();
    }
  },

  async onContinue() {
    //when the step gets to 4 on click will return the user to the home page

    if (this.step === 4) {
      this.$router.push("/");
    } else {
      this.$refs.stepper.next();
    }

    if (this.step === 1) {
      const { orderId, orderInfo } = this.store.order;
      await updateOrder(orderId, orderInfo);
      this.$refs.stepper.next();
    } else {
      this.$refs.stepper.next();
    }
  },
  async submitForm(e) {
    e.preventDefault();
    try {
      this.payment.loading = true;
      this.payment.submissionError = null;
      const response = await this.payment.stripe.createToken(
        this.payment.card["cardNumber"]
      );
      const { error, token } = response;
      console.log("error:", error, "token:", token, "response:", response);
      if (error) {
        this.payment.submissionError = error.message;
      } else {
        this.resetForm();
        this.onSuccessfulPayment();
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.payment.loading = false;
    }
  },
  resetForm() {
    for (const [elementType, item] of Object.entries(this.payment.card)) {
      this.payment.card[elementType].clear();
    }
  },
  updated(e) {
    const elementType = e["elementType"];
    const error = e["error"];
    if (error) {
      this.payment.errors[elementType] = e["error"]["message"];
      return null;
    } else {
      if (this.payment.errors[elementType]) {
        this.payment.errors[elementType] = "";
      }
    }
  },
  isValid(elementType) {
    return this.payment.errors[elementType] === "";
  },
  errorMessage(elementType) {
    return this.isValid(elementType) ? this.errors[elementType] : false;
  },
  async onPreparePaymentPage() {
    const style = {
      base: {
        fontFamily:
          '"Roboto", "-apple-system", "Helvetica Neue", Helvetica, Arial, sans-serif',
        "::placeholder": {
          color: "#CFD7E0",
        },
      },
    };

    if (!this.payment.stripe) {
      // TODO: move to env
      this.payment.stripe = await loadStripe(
        "pk_test_51MBUjIJYzhfY0eqFNnN315LEfHqXYe81t46WFozrnAympdShGm7mlUxsPHmBk8gN67Lbl0HPNXE82znRCJYF5q3G00uGTX1MTL"
      ); //REPLACE THE KEY
    }
    if (!this.payment.elements) {
      const cardElements = ["cardNumber", "cardExpiry", "cardCvc"];
      this.payment.elements = this.payment.stripe.elements();
      cardElements.forEach((element) => {
        this.payment.card[element] = this.payment.elements.create(element, {
          style: style,
        });

        this.payment.card[element].mount("#" + element);
        this.payment.card[element].addEventListener("change", (e) =>
          this.updated(e)
        );
      });
    }
  },

  async onSuccessfulPayment() {
    //give the user a success message
    this.store.clearCart();
    this.$q.notify({
      message: "Payment Successful",
      color: "green",
      position: "top",
    });
    try {
      const orderId = this.store.order.orderId;
      this.payment.loading = true;
      if (orderId) {
        await updateOrder(orderId, {
          status: "complete",
        });
      }
      this.$refs.stepper.next();
    } catch (e) {
      this.payment.submissionError = e.message;
    } finally {
      this.payment.loading = false;
    }
  },
});
</script>
