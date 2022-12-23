import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  FilterProducts: [],
  all_products: [],
  Grid_View: true,
  Sorting_Value: "lowest",
  filters: {
    text: "",
    // category: "all",
    // company: "all",
    // color: "all",
    // maxPrice: 0,
    // price: 0,
    // minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // set Grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // Sorting Function
  const setSorting = (e) => {
    let sortValue = e.target.value;
    return dispatch({ type: "SET_SORTING", payload: sortValue });
  };

  // update the filter values
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // Sorting Products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        setSorting,
        updateFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
