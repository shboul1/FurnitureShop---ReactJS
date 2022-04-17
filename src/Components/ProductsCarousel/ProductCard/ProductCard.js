import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as CartConstants from "../../../Redux/Cart/constants";
export default function ProductCard({ product }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch({
      type: CartConstants.ADD_ITEM,
      payload: product,
    });
  };
  return (
    <div className="product-card">
      {product.isNew && <div className="isNew">New</div>}
      <Row>
        <img
          onClick={() => history.push(`/product/${product.id}`)}
          src={product.image}
          alt="productImage"
        />
      </Row>
      <Row>
        <span className="product-type">{product.type}</span>
      </Row>
      <Row>
        <div className="product-rate">
          {new Array(product.rate).fill("").map((rate, idx) => (
            <IoStarSharp key={idx} />
          ))}
        </div>
      </Row>
      <Row>
        <div className="product-name">{product.name}</div>
      </Row>
      <Row>
        <div className="product-price">${product.price}</div>
      </Row>
      <Row>
        <div className="product-btn-add-to-card" onClick={handleAddToCart}>
          <BsHandbag /> add to cart
        </div>
      </Row>
      <div className="product-options">
        <AiOutlineEye size={25} />
        <AiOutlineHeart size={25} />
        <BiGitCompare size={25} />
      </div>
    </div>
  );
}
