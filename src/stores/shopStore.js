import { defineStore } from "pinia";


//how to sort items by catergory and price in ascending order

export const useShopStore = defineStore("counter", {
  
  state: () => ({
    
    isCartDrawerOpen: false,

    cart: [],

    cartQuantity: 0,

    cartTotal: 0,

    products: [
      {
        name: "Heckin' Canned",
        cost: "$18.49",
        qty: 0,
        rating: "",
        category: "snackers",
        description:
          "Tasty canned dog food that your little buddy will keep coming back to!",
        id: 1,
      },
      {
        name: "Heckin' Kibble",
        cost: "$34.99",
        rating: "",
        qty: 0,
        category: "snackers",
        description:
          "Our Heckin' Delicious Kibble made with real lamb and sweet potato!",
        id: 2,
      },
      {
        name: "Heckin' Treats",
        cost: "$10.49",
        rating: "",
        qty: 0,
        category: "snackers",
        description: "Heckin' Treats your dog will love!",
        id: 3,
      },
      {
        name: "Heckin' Bone",
        id: 4,
        cost: "$13.19",
        qty: 0,
        rating: "",
        category: "snackers",
        description: "A Heckin' Big Bone.",
      },
      {
        name: "Heckin' Bowl",
        id: 5,
        cost: "$11.99",
        qty: 0,
        rating: "",
        category: "accessories",
        description: "Heckin' Chow Down.",
      },
      {
        name: "Heckin' Ball",
        id: 6,
        cost: "$7.29",
        qty: 0,
        rating: "",
        category: "toys",
        description: "Play Some Heckin' Fetch.",
      },
    ],

    user: null,

    order: null,
  }),

  getters: {
    getFormattedTotal(state) {
      `Total: ${centsToDollars(state.cartTotal)}`;
      return centsToDollars(state.cartTotal);
      
    },

    getCartQuantity(state) {
      return state.cartQuantity;
      //save cart quantity to local storage
      
      
    },
    

    //display only 2 products from the array in the shop page '
    getProducts(state) {
      return state.products.slice(0, 2);
    },
  },
  computed: {
    //how to add filters for search bar
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
        
      });
    },
  },




  //Cart drawer
  actions: {
    toggleCartDrawer() {
      this.isCartDrawerOpen = !this.isCartDrawerOpen;
    },
    // update logged user
    updateUser(user) {
      this.user = user;
    },

    updateOrder(order) {
      this.order = order;
    },

    updateOrderByKey({ key, value }) {
      this.order.orderInfo[key] = value;
    },

    //rate each product 1-5 stars and display average rating for each product
    rateProduct(product, rating) {
      product.rating = rating;

      let total = 0;
      let count = 0;

      this.products.forEach((product) => {
        if (product.rating) {
          total += product.rating;
          count++;
        }
      });
      this.averageRating = total / count;

      return this.averageRating;
    },

    //quasar save cart to local storage

    
    checkoutCart() {
      this.cart = [];
      this.cartTotal = 0;
      this.cartQuantity = 0;

      
    },
    //show two products for Featured Products component only

    //sort and display only the first 2 items in the array and ignore filters
    sortProducts() {
      this.products.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      this.products.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
      this.products = this.products.slice(0, 2);
    },



    //only show items in the array with the category of accessories
    showAccessories() {
      this.products.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      this.products.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
      this.products = this.products.filter((product) => {
        return product.category === "accessories";
      });
    },

    //only show items in the array with the category of snackers
    showSnackers() {
      this.products.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      this.products.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
      this.products = this.products.filter((product) => {
        return product.category === "snackers";
      });
    },

    sortItemsById() {
      this.products.sort((a, b) => a.id - b.id);
    },

    //sort items in store by price in ascending order

    sortItemsByPriceDesc() {
      this.products.sort(
        (a, b) => dollarsToCents(b.cost) - dollarsToCents(a.cost)
      );
    },

    sortItemsByPriceAsc() {
      this.products.sort(
        (a, b) => dollarsToCents(a.cost) - dollarsToCents(b.cost)
      );
    },

    resetProducts() {
      this.products.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      this.products.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
    },

    //Cart actions (add, remove, clear, and cart total) and save cart to local storage

    addToCart(item) {
      //save cart items in local storage
      localStorage.setItem("cart", JSON.stringify(this.cart));
      //save cart total in local storage


      let cartItem = this.cart.find((x) => x.id === item.id);

      this.isCartDrawerOpen = true;

      if (cartItem) {

        cartItem.qty++;
      } else {
        this.cart.push({ ...item, qty: 1 });
      }
      this.cartQuantity++;
//save cart quantity in local storage
      localStorage.setItem("cartQuantity", JSON.stringify(this.cartQuantity));
      

      this.cartTotal += dollarsToCents(item.cost);
    
      
    },




  

    //Remove item from cart
    removeFromCart(item) {

      //save cart items in local storage
      localStorage.setItem("cart", JSON.stringify(this.cart));
      //don't allow negative numbers
      if (this.cartQuantity === 0) {
        return;
      }

      let cartItem = this.cart.find((x) => x.id === item.id);

      if (cartItem.qty > 1) {
        cartItem.qty--;
        this.cartQuantity--;
        this.cartTotal -= dollarsToCents(item.cost);
      } else {
        this.cart = this.cart.filter((x) => x.id !== item.id);
        this.cartQuantity--;
        this.cartTotal -= dollarsToCents(item.cost);
      }
      
    },

    //Clears all items from cart
    clearCart() {
      //save cart items in local storage
      this.cart = [];
      this.cartQuantity = 0;
      this.cartTotal = 0;
    },

    //Checkout
    updateCart() {
      this.cartQuantity = this.cart.length;
      this.cartTotal = this.cart.reduce(
        (item) => total + dollarsToCents(item.cost),
        0
      );
    },

    //Remove item from cart
  },
});



    
var dollarsToCents = function (amount) {
  if (typeof amount !== "string" && typeof amount !== "number") {
    throw new Error("Amount passed must be of type String or Number.");
  }

  return Math.round(
    100 *
      parseFloat(
        typeof amount === "string" ? amount.replace(/[$,]/g, "") : amount
      )
  );
};

var centsToDollars = function (amount) {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    
  });
};
