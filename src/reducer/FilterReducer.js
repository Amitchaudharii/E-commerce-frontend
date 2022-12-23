const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        FilterProducts: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        Grid_View: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        Grid_View: false,
      };

    case "SET_SORTING":
      return {
        ...state,
        Sorting_Value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let SortedData;
      const { FilterProducts, Sorting_Value } = state;
      let SortedProduct = [...FilterProducts];

      const sortingProducts = (a, b) => {
        if (Sorting_Value === "lowest") {
          return a.price - b.price;
        }

        if (Sorting_Value === "highest") {
          return b.price - a.price;
        }

        if (Sorting_Value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (Sorting_Value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      SortedData = SortedProduct.sort(sortingProducts);

      return {
        ...state,
        FilterProducts: SortedData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      // if (category !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter(
      //     (curElem) => curElem.category === category
      //   );
      // }

      // if (company !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter(
      //     (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
      //   );
      // }

      // if (color !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) =>
      //     curElem.colors.includes(color)
      //   );
      // }

      // if (price === 0) {
      //   tempFilterProduct = tempFilterProduct.filter(
      //     (curElem) => curElem.price == price
      //   );
      // } else {
      //   tempFilterProduct = tempFilterProduct.filter(
      //     (curElem) => curElem.price <= price
      //   );
      // }
      return {
        ...state,
        FilterProducts: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default FilterReducer;
