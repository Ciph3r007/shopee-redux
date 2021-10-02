import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getSubtotal } from "../store/productsSlice";

export const Context = createContext();

const ContextProvider = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      localStorage.setItem("products", JSON.stringify(data));
      setProducts(JSON.parse(localStorage.products));
    }

    if (!localStorage.getItem("products")) {
      getData();
    }
  }, []);

  return (
    <Context.Provider
      value={{
        products,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
