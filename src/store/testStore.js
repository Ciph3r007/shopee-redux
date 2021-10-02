import getStore from "./configureStore";
import { cartActions } from "./productsSlice";
import { getProducts } from "./productsService";

const store = getStore();
const products = getProducts();

store.dispatch(cartActions.itemIncremented({ product: products[0] }));
