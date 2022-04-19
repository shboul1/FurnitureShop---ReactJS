import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { ToastContainer } from "react-toastify";
import { withRouter } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { removeAllItemsFromCart } from "../../Redux/Cart/actions";
import { useHistory } from "react-router-dom";
import "./style.css";
import CartItem from "./CartItem/CartItem";
function CartPage(props) {
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleClearAllCartItems = () => {
    dispatch(removeAllItemsFromCart());
  };
  return (
    <Container>
      {cartItems.length > 0 ? (
        <div className="cart-page" style={{ marginTop: "100px" }}>
          <Row className="justify-content-center main-title">Shopping Cart</Row>
          <Row>
            <Col lg={7}>
              {cartItems.map((item, idx) => (
                <CartItem item={item} key={idx} />
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
                  <div className="clear-all" onClick={handleClearAllCartItems}>
                    <RiDeleteBinLine />
                    <span>CLEAR SHOPPING CART</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={5}></Col>
          </Row>
          <ToastContainer />
        </div>
      ) : (
        <div className="cart-page empty">
          <HiOutlineShoppingBag />
          <h2>SHOPPING CART IS EMPTY</h2>
          <p>You have no items in your shopping cart.</p>
          <button onClick={() => history.push("/")}>Continuo Shopping</button>
        </div>
      )}
    </Container>
  );
}

export default withRouter(CartPage);
