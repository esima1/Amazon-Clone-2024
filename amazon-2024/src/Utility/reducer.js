import { Type } from "./action.type";
export const initialState = {
  basket: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // check if the item exists
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
