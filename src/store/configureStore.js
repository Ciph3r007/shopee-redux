import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import api from "./middlewares/api";
import reducer from "./productsSlice";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: " root",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export const persistor = persistStore(store);
