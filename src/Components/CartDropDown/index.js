import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./style.css";
export default function CardDropdown({ cartDropDownVis }) {
  const cartItemData = useSelector((state) => state.cartReducer);
  console.log(cartItemData);
  return (
    cartDropDownVis &&
    (cartItemData.cartItems.length > 0 ? (
      <div className="card-dropdown">
        {cartItemData.cartItems.map((item, idx) => (
          <Row key={idx} className="cart-item-dropdown">
            <Col lg={4}>
              <img src={item.image} alt="" />
            </Col>
            <Col lg={5}>
              <Row className="item-name">{item.name}</Row>
              <Row className="item-desc">
                <span>{item.quantity}X</span> ${item.price.toFixed(2)}
              </Row>
            </Col>
            <Col>
              <RiDeleteBin5Line />
            </Col>
          </Row>
        ))}
        <Row className="subtotal-container">
          <Col className="subtotal">
            <span>Subtotal</span>
          </Col>
          <Col className="subtotal-value">
            <span>220$</span>
          </Col>
        </Row>
      </div>
    ) : (
      <div className="card-dropdown empty">
        <HiOutlineShoppingBag />
        <span>SHOPPING CART IS EMPTY</span>
      </div>
    ))
  );
}
