import React from "react";
import promo1Img from "../../../assets/images/index-promo-img-05.jpg";
import promo2Img from "../../../assets/images/index-promo-img-06.jpg";
export default function PromoCard({ promoText, promoImage }) {
  const Images = {
    promo1: promo1Img,
    promo2: promo2Img,
  };
  return (
    <div className="PromoCard">
      <img src={Images[promoImage]} alt="" />
      <p className="PromoCardText">{promoText}</p>
    </div>
  );
}
