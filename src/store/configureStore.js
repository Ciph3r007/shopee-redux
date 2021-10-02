import { configureStore } from "@reduxjs/toolkit";
import reducer from "./productsSlice";

export default function () {
  return configureStore({ reducer });
}
