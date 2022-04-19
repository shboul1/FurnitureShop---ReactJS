import * as CartConstants from "./constants";
import { notifySuccess } from "../../Components/ToastsNotifications";
export const addItemToCart = (product) => (dispatch) => {
  dispatch({
    type: CartConstants.ADD_ITEM,
    payload: product,
  });
  notifySuccess("Succesfully added to cart");
};
export const removeItemFromCart = (id) => (dispatch) => {
  dispatch({
    type: CartConstants.REMOVE_ITEM,
    payload: id,
  });
  notifySuccess("Succesfully removed from cart");
};
export const removeAllItemsFromCart = () => (dispatch) => {
  dispatch({
    type: CartConstants.REMOVE_ALL,
  });
  notifySuccess("Succesfully removed from cart");
};
