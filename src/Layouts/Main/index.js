import React from "react";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Landing from "../../Components/Landing";
import Navbar from "../../Components/Navbar";
import ProductsCarousel from "../../Components/ProductsCarousel";
import Promo from "../../Components/Promo/Promo";
export default function Main() {
  return (
    <>
      <Navbar />
      <Landing />
      <Categories />
      <ProductsCarousel />
      <Promo />
      <Footer />
    </>
  );
}
