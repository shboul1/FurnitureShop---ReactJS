import * as CartConstants from "../../Redux/Cart/constants";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { withRouter } from "react-router";
import "./style.css";
function CartPage(props) {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch({
      type: CartConstants.REMOVE_ITEM,
      payload: id,
    });
  };
  const handleClearAllCartItems = () => {
    dispatch({
      type: CartConstants.REMOVE_ALL,
    });
  };
  return (
    <Container>
      <div className="cart-page" style={{ marginTop: "100px" }}>
        <Row className="justify-content-center main-title">Shopping Cart</Row>
        <Row>
          <Col lg={7}>
            {cartItems.map((item, idx) => (
              <div key={idx} className="product-in-cart">
                <RiDeleteBinLine
                  onClick={() => handleRemoveFromCart(item.id)}
                />
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <span>${item.price}</span>
                quantity
                <span>${item.price}</span>
              </div>
            ))}
            <Row className="d-flex justify-content-between">
              <Col>
                <div
                  className="continuo-shopping"
                  onClick={() => props.history.push("/")}
                >
                  <GoArrowLeft />
                  <span>CONTINUE SHOPPING</span>
                </div>
              </Col>
              <Col>
                {cartItems.length > 0 ? (
                  <div className="clear-all" onClick={handleClearAllCartItems}>
                    <RiDeleteBinLine />
                    <span>CLEAR SHOPPING CART</span>
                  </div>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Col>
          <Col lg={5}></Col>
        </Row>
      </div>
    </Container>
  );
}

export default withRouter(CartPage);
