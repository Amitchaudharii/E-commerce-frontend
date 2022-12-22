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

    default:
      return state;
  }
};

export default FilterReducer;
