import axios from "axios";
import { cartActions } from "../productsSlice";
import { store } from "../configureStore";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== cartActions.apiCallBegan.type) return next(action);

    // next(action); // Optional: to show in devtools

    const state = store.getState();
    if (!state.allProducts.length) {
      const { data } = await axios.get(action.payload.url);
      dispatch(cartActions.productsReceived({ data }));
    }
  };

export default api;
