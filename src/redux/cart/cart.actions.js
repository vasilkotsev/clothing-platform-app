import { TOGGLE_CART_HIDDEN } from "./constants/cart.types";

const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
}); /* payload is optional property,in this case we don't set it,
 because inside the cartReducer we dont use payload to set the new state */

export default toggleCartHidden;
