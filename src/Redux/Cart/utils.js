export const addItem = (cartItems, ItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...ItemToAdd, quantity: 1 }];
};
