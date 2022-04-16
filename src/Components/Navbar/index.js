import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { IoIosOptions } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
export default function Navbar({ Light = true }) {
  const a = useSelector((state) => state);
  console.log(a);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const history = useHistory();
  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav
      className={`navbar ${isNavOpen ? "opened" : ""} ${
        Light ? "Light" : "Dark"
      }`}
    >
      <div className="navContainer">
        <div className="brand">
          <img src={Logo} alt="logo" className="brand-logo" />
        </div>

        <div className="links">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Shop", path: "/shop" },
          ].map((navLink, idx) => (
            <a key={idx} onClick={() => history.push(navLink.path)}>
              {navLink.name}
            </a>
          ))}
        </div>

        <div className="options">
          <BsSearch />
          <RiShoppingBagLine />
          <VscAccount />
          <IoIosOptions />
          <GiHamburgerMenu className="burger" onClick={handleOpenNav} />
        </div>
      </div>
    </nav>
  );
}
