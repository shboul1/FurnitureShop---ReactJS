import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { Row } from "react-bootstrap";
export default function ProductCard({
  productImage,
  productName,
  productType,
  productRate,
  productPrice,
  isNew,
}) {
  return (
    <div className="product-card">
      {isNew && <div className="isNew">New</div>}
      <Row>
        <img src={productImage} alt="productImage" />
      </Row>
      <Row>
        <span className="product-type">{productType}</span>
      </Row>
      <Row>
        <div className="product-rate">
          {new Array(productRate).fill("").map((rate, idx) => (
            <IoStarSharp key={idx} />
          ))}
        </div>
      </Row>
      <Row>
        <div className="product-name">{productName}</div>
      </Row>
      <Row>
        <div className="product-price">${productPrice}</div>
      </Row>
      <Row>
        <div className="product-btn-add-to-card">
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
