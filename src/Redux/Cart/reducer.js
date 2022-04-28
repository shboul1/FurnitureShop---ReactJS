import * as CartConstants from "./constants";
import { addItem } from "./utils";
const cartReducer = (
  initState = {
    cartItems: [],
    totalPrice: 0,
  },
  action
) => {
  switch (action.type) {
    case CartConstants.ADD_ITEM:
      return {
        cartItems: addItem(initState.cartItems, action.payload),
        totalPrice: initState.cartItems.map((item) => {
          let total = 0;
          total += item.quantity * item.price;
          return total;
        }),
      };
    case CartConstants.REMOVE_ITEM:
      return {
        cartItems: initState.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case CartConstants.REMOVE_ALL:
      return {
        cartItems: [],
      };
    default:
      return initState;
  }
};
export default cartReducer;
