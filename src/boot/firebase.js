// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useShopStore } from "stores/shopStore";
import uniqid from "uniqid";
import { compileScript } from "vue/compiler-sfc";

// import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDp8xc0RSmIPo8V2UjTh4Mo2uyGG1gJ3HI",
  authDomain: "heckin-snackers.firebaseapp.com",
  projectId: "heckin-snackers",
  storageBucket: "heckin-snackers.appspot.com",
  messagingSenderId: "912862229478",
  appId: "1:912862229478:web:2e3c44a73123db5507dc27",
};

// Initialize Firebase
// if firebase isn't already initialize, initialize using the above credentials
if (!firebase.apps.length) {
  console.log("init firebase");
  firebase.initializeApp(firebaseConfig);
}

const store = useShopStore();

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      store.updateUser(user);
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

// TODO - Remove here later
firebase.getCurrentUser();

const db = firebase.firestore();

async function createOrder() {
  const userId = store.user.uid;
  const uniqId = uniqid();
  const order = {
    firstname: store.user?.firstname ?? "",
    lastname: store.user?.lastname ?? "",
    name: store.user?.name ?? "",
    phone: store.user?.phone ?? "",
    address: store.user?.address ?? "",
    email: store.user?.email ?? "",
    zipcode: store.user?.zipcode ?? "",
    cartItems: store.cart,
    status: "pending",
  };

  await db
    .collection("orders")
    .doc(userId)
    .collection("user_orders")
    .doc(uniqId)
    .set(order);

  store.updateOrder({
    orderId: uniqId,
   
  });

  console.log(order, "done");
}

async function updateOrder(orderId, payload) {
  if (!orderId) throw new Error("Order Id is required");

  const userId = store.user.uid;

  await db
    .collection("orders")
    .doc(userId)
    .collection("user_orders")
    .doc(orderId)
    .update(payload);
}

export default firebase;

export { db, createOrder, updateOrder };
