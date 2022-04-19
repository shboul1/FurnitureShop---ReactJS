import { useState } from "react";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Badge,
  Accordion,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { useHistory } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdGitCompare } from "react-icons/io";
import ReactImageZoom from "react-image-zoom";
import promoBrands from "../../assets/images/tt-promo-brand-desktop.png";
import CounterInput from "react-counter-input";
import { notifySuccess } from "../../Components/ToastsNotifications";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./style.css";
export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = products.filter((product) => product.id == id)[0];
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const options = {
    zoomWidth: 500,
    img: selectedProduct.image,
  };
  const handleAddtoCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: selectedProduct,
      });
    }
    notifySuccess("Succesfully added to cart");
  };
  return (
    <div className="product-page">
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => history.push("/products")}>
              Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedProduct.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="productContainer">
          <Col lg={6}>
            <ReactImageZoom {...options} />
          </Col>
          <Col lg={6}>
            <Row>
              {selectedProduct.isNew && (
                <Badge
                  bg="primary"
                  style={{ width: "40px", margin: "0px 0 15px 12px" }}
                >
                  New
                </Badge>
              )}
              <span className="sku">SKU: {selectedProduct.code}</span>
              <span className="availability">
                Availability: {selectedProduct.avaliability} in Stock
              </span>
            </Row>
            <Row>
              <div className="product-info">
                <h3 className="name">{selectedProduct.name}</h3>
                <p className="price">${selectedProduct.price}</p>
                <div className="rate">
                  {new Array(selectedProduct.rate).fill("").map((star, idx) => (
                    <IoStarSharp key={idx} />
                  ))}
                </div>
                <p className="desc">{selectedProduct.description}</p>
              </div>
            </Row>
            <Row className="align-items-center mt-3">
              <Col lg={3}>
                <CounterInput
                  count={1}
                  min={1}
                  max={10}
                  onCountChange={() => setQuantity((prev) => prev + 1)}
                />
              </Col>
              <Col lg={9}>
                <button className="add-to-cart" onClick={handleAddtoCart}>
                  <BiShoppingBag /> add to cart
                </button>
              </Col>
            </Row>
            <Row>
              <div className="list-btn">
                <span>
                  <AiOutlineHeart /> Add to wishlist
                </span>
                <span>
                  <IoMdGitCompare /> Add to compare
                </span>
              </div>
            </Row>
            <Row>
              <img src={promoBrands} className="mt-5" alt="" />
            </Row>
            <Row className="mt-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header>DESCRIPTION</Accordion.Header>
                  <Accordion.Body>{selectedProduct.description}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}
