export const initialState = {
  json_data: [],
  filter_types: [],
  add_to_cart: [],
  searched_array: [],
  item_quantity: [],
};

export const actionTypes = {
  JSON_DATA: "JSON_DATA",
  FILTER_TYPES: "FILTER_TYPES",
  ADD_TO_CART: "ADD_TO_CART",
  SEARCHED_ARRAY: "SEARCHED_ARRAY",
  ITEM_QUANTITY: "ITEM_QUANTITY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "JSON_DATA":
      return { ...state, json_data: action.item.json_data };

    case "FILTER_TYPES":
      return { ...state, filter_types: action.item.filter_types };

    case "ADD_TO_CART":
      return { ...state, add_to_cart: action.item.add_to_cart };

    case "SEARCHED_ARRAY":
      return { ...state, searched_array: action.item.searched_array };

    case "ITEM_QUANTITY":
      return { ...state, item_quantity: action.item.item_quantity };

    default:
      return state;
  }
};

export default reducer;
