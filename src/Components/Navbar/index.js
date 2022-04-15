import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { IoIosOptions } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className={`navbar ${isNavOpen ? "opened" : ""}`}>
      <div className="brand">
        <img src={Logo} alt="logo" className="brand-logo" />
      </div>

      <div className="links">
        <a>Home</a>
        <a>Shop</a>
        <a>Blog</a>
        <a>Portfolio</a>
        <a>Pages</a>
        <a>Contact</a>
      </div>

      <div className="options">
        <BsSearch />
        <RiShoppingBagLine />
        <VscAccount />
        <IoIosOptions />
        <GiHamburgerMenu className="burger" onClick={handleOpenNav} />
      </div>
    </nav>
  );
}
