import React from "react";
import ChairImage from "../../../assets/images/chair.jpg";
import loungeImage from "../../../assets/images/lounge.jpg";
import tableImage from "../../../assets/images/tabels.jpg";
import lightImage from "../../../assets/images/lighting.jpg";
export default function CategoryCard({ categoryName, categoryImage }) {
  const Images = {
    chair: ChairImage,
    lounge: loungeImage,
    lighing: lightImage,
    tabels: tableImage,
  };
  return (
    <div className="CategoryCard">
      <img src={Images[categoryImage]} alt="" />
      <p className="CategoryCardText">{categoryName}</p>
    </div>
  );
}
