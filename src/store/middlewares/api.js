import axios from "axios";
import { cartActions } from "../productsSlice";

const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== cartActions.apiCallBegan.type) return next(action);

    // next(action); // Optional: to show in devtools
    const { allProducts } = getState();
    if (!allProducts.length) {
      const { data } = await axios.get(action.payload.url);
      dispatch(cartActions.productsReceived({ data }));
    }
  };

export default api;
