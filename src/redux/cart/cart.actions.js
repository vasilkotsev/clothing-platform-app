import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./constants/cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
}); /* payload is optional property,in this case we don't set it,
 because inside the cartReducer we dont use payload to set the new state */

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
