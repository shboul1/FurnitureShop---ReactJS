import Navbar from "../Navbar";
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
import "./style.css";
export default function ProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const selectedProduct = products.filter((product) => product.id == id)[0];
  const options = {
    zoomWidth: 500,
    img: selectedProduct.productImage,
  };
  return (
    <div className="product-page">
      <Navbar Light={false} />
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {selectedProduct.productName}
            </Breadcrumb.Item>
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
                <h3 className="name">{selectedProduct.productName}</h3>
                <p className="price">${selectedProduct.productPrice}</p>
                <div className="rate">
                  {new Array(selectedProduct.productRate)
                    .fill("")
                    .map((star, idx) => (
                      <IoStarSharp key={idx} />
                    ))}
                </div>
                <p className="desc">{selectedProduct.description}</p>
              </div>
            </Row>
            <Row className="align-items-center mt-3">
              <Col lg={3}>1</Col>
              <Col lg={9}>
                <button className="add-to-cart">
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
      </Container>
    </div>
  );
}
