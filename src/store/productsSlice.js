import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemQuantity: {},
    totalQuantity: 0,
  },

  reducers: {
    itemIncremented: (cart, action) => {
      const { product } = action.payload;

      if (!cart.itemQuantity[product.id]) cart.items.push(product);

      cart.itemQuantity[product.id] = (cart.itemQuantity[product.id] || 0) + 1;
      cart.totalQuantity += 1;
    },

    itemDecremented: (cart, action) => {
      const { product } = action.payload;

      if (cart.itemQuantity[product.id] === 1) {
        const index = cart.items.indexOf(product);
        cart.items.splice(index, 1);
      }

      cart.totalQuantity -= 1;
      cart.itemQuantity[product.id] -= 1;
    },

    itemRemoved: (cart, action) => {
      const { product } = action.payload;
      const index = cart.items.indexOf(product);
      cart.items.splice(index, 1);
      cart.totalQuantity -= cart.itemQuantity[product.id];
      cart.itemQuantity[product.id] = 0;
    },

    cartEmptied: (cart, action) => {
      cart.items = [];
      cart.totalQuantity = 0;
      cart.itemQuantity = {};
    },
  },
});

export const cartActions = slice.actions;
export default slice.reducer;
