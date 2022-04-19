import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import CounterInput from "react-counter-input";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeItemFromCart } from "../../../Redux/Cart/actions";
function CartItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <div className="product-in-cart">
      <RiDeleteBinLine onClick={() => handleRemoveFromCart(item.id)} />
      <img src={item.image} alt="" />
      <p>{item.name}</p>
      <span>${item.price}</span>
      <CounterInput
        count={item.quantity}
        min={1}
        max={100}
        onCountChange={(count) => setQuantity(count)}
      />
      <span>${(quantity * item.price).toFixed(2)}</span>
    </div>
  );
}
export default memo(CartItem);
