import React, { memo } from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { addItemToCart } from "../../../Redux/Cart/actions";
import { Row, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
function ProductCard({ product }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
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
        <OverlayTrigger
          key={"left1"}
          placement={"left"}
          overlay={<Tooltip id={`tooltip-${"left"}`}>Quick Overview.</Tooltip>}
        >
          <div className="opt">
            <AiOutlineEye size={20} />
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key={"left2"}
          placement={"left"}
          overlay={<Tooltip id={`tooltip-${"left"}`}>Add to Wishlist</Tooltip>}
        >
          <div className="opt">
            <div className="opt">
              <AiOutlineHeart size={20} />
            </div>
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key={"left3"}
          placement={"left"}
          overlay={<Tooltip id={`tooltip-${"left"}`}>Add To Compare</Tooltip>}
        >
          <div className="opt">
            <div className="opt">
              <BiGitCompare size={20} />
            </div>
          </div>
        </OverlayTrigger>
      </div>
    </div>
  );
}
export default memo(ProductCard);
