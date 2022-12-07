const orders = {
  orders: {
    user_id: {
      // auth user_id
      user_orders: {
        order_id: {
          // unique id for order
          name: String,
          phone: String,
          address: String,
          cartItems: Array, // Array<cart>
          status: "pending" | "completed",
          step: 1 | 2 | 3 | 4,
        },
      },
    },
  },
};
