import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

// Main API
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value="Amit">{children}</AppContext.Provider>;
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
