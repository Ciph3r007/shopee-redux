import { createAction, createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    cartItems: [],
    quantityById: {},
    totalQuantity: 0,
  },

  reducers: {
    productsReceived: (state, action) => {
      state.allProducts = action.payload.data;
    },

    itemIncremented: (state, action) => {
      const { product } = action.payload;

      if (!state.quantityById[product.id]) state.cartItems.push(product);

      state.quantityById[product.id] =
        (state.quantityById[product.id] || 0) + 1;
      state.totalQuantity += 1;
    },

    itemDecremented: (state, action) => {
      const { product } = action.payload;

      if (state.quantityById[product.id] === 1) {
        const index = state.cartItems.findIndex(
          (item) => item.id === product.id
        );
        state.cartItems.splice(index, 1);
      }

      state.totalQuantity -= 1;
      state.quantityById[product.id] -= 1;
    },

    itemRemoved: (state, action) => {
      const { product } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === product.id);
      state.cartItems.splice(index, 1);
      state.totalQuantity -= state.quantityById[product.id];
      state.quantityById[product.id] = 0;
    },

    cartEmptied: (state, action) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.quantityById = {};
    },
  },
});

export const getSubtotal = createSelector(
  (state) => state.cartItems,
  (state) => state.quantityById,
  (cartItems, quantityById) =>
    cartItems
      .reduce(
        (accumulator, current) =>
          accumulator + current.price * quantityById[current.id],
        0
      )
      .toFixed(2)
);

const apiCallBegan = createAction("api/apiCallBegan");
const loadProducts = () =>
  apiCallBegan({ url: "https://fakestoreapi.com/products" });

export const cartActions = { ...slice.actions, apiCallBegan, loadProducts };
export default slice.reducer;
