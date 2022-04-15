import React from "react";
import Categories from "../../Components/Categories";
import Landing from "../../Components/Landing";
import Navbar from "../../Components/Navbar";
import ProductsCarousel from "../../Components/ProductsCarousel";
export default function Main() {
  return (
    <>
      <Navbar />
      <Landing />
      <Categories />
      <ProductsCarousel />
    </>
  );
}
