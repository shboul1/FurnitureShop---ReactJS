import Slider from "react-slick";
import productImage1 from "../../assets/images/product-03.jpg";
import { Container } from "react-bootstrap";
import ProductCard from "../ProductCard/index";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";
export default function ProductsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const products = [
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: true,
    },
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: true,
    },
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: false,
    },
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: false,
    },
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: false,
    },
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: true,
    },
    {
      id: 0,
      productImage: productImage1,
      productName: "Creative Office Chair",
      productType: "royal",
      productRate: 5,
      productPrice: 99,
      isNew: true,
    },
  ];
  return (
    <Container>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={idx}>
            <ProductCard
              productImage={product.productImage}
              productName={product.productName}
              productType={product.productType}
              productRate={product.productRate}
              productPrice={product.productPrice}
              isNew={product.isNew}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
}