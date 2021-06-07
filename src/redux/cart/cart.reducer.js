import { TOGGLE_CART_HIDDEN } from "./constants/cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === TOGGLE_CART_HIDDEN) {
    return {
      ...state,
      hidden: !state.hidden /* we directly in reducer set new state value with switching (toggle)
      between the old opposite state value an the new one,
       instead to get and set action.payload value from the action */,
    };
  } else return state;
};

export default cartReducer;