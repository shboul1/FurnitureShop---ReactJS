import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { IoIosOptions } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import "./style.css";
function Navbar() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const history = useHistory();
  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className={`navBar ${isNavOpen ? "opened" : ""}`}>
      <div className="navContainer">
        <div className="brand" onClick={() => history.push("/")}>
          <img src={Logo} alt="logo" className="brand-logo" />
        </div>

        <div className="links">
          <a onClick={() => history.push("/")}>Home</a>
          <a onClick={() => history.push("/products")}>Products</a>
          <a onClick={() => history.push("/cart")}>Cart</a>
        </div>

        <div className="options">
          <BsSearch />

          <div className="cart" onClick={() => history.push("/cart")}>
            <RiShoppingBagLine />
            <div className="cart-items-number">{cartItems.length}</div>
          </div>

          <VscAccount />
          <IoIosOptions />
          <GiHamburgerMenu className="burger" onClick={handleOpenNav} />
        </div>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
