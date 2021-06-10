export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if (existingCartItem) {
  //   return cartItems.map((cartItem) => {
  //     if (cartItem.id === cartItemToAdd.id)
  //       return { ...cartItem, quantity: cartItem.quantity + 1 };
  //     return cartItem;
  //   });
  // }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
