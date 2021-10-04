import { createAction, createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    allProducts: [],
    items: [],
    itemQuantity: {},
    totalQuantity: 0,
  },

  reducers: {
    productsReceived: (state, action) => {
      state.allProducts = action.payload.data;
    },

    itemIncremented: (cart, action) => {
      const { product } = action.payload;

      if (!cart.itemQuantity[product.id]) cart.items.push(product);

      cart.itemQuantity[product.id] = (cart.itemQuantity[product.id] || 0) + 1;
      cart.totalQuantity += 1;
    },

    itemDecremented: (cart, action) => {
      const { product } = action.payload;

      if (cart.itemQuantity[product.id] === 1) {
        const index = cart.items.findIndex((item) => item.id === product.id);
        cart.items.splice(index, 1);
      }

      cart.totalQuantity -= 1;
      cart.itemQuantity[product.id] -= 1;
    },

    itemRemoved: (cart, action) => {
      const { product } = action.payload;
      const index = cart.items.findIndex((item) => item.id === product.id);
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

export const getSubtotal = createSelector(
  (state) => state.items,
  (state) => state.itemQuantity,
  (items, itemQuantity) =>
    items
      .reduce(
        (accumulator, current) =>
          accumulator + current.price * itemQuantity[current.id],
        0
      )
      .toFixed(2)
);

const apiCallBegan = createAction("api/apiCallBegan");
const loadProducts = () =>
  apiCallBegan({ url: "https://fakestoreapi.com/products" });

export const cartActions = { ...slice.actions, apiCallBegan, loadProducts };
export default slice.reducer;
