import { SET_CURRENT_USER } from "./constants/user.types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
