import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import api from "./middlewares/api";
import reducer from "./productsSlice";

const persistConfig = {
  key: " root",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export const persistor = persistStore(store);
