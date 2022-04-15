import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={3} xs={6}>
            <div className="categories">
              <h5>Categories</h5>
              <ul>
                <li>Chairs</li>
                <li>Tabels</li>
                <li>Sofas</li>
                <li>Bookcases</li>
                <li>Beds</li>
                <li>Kids bedroom</li>
              </ul>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div className="my-account">
              <h5>My Account</h5>
              <ul>
                <li>Account</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Compare</li>
                <li>Log in</li>
                <li>Register</li>
              </ul>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="newsletter">
              <h5>NEWSLETTER SIGNUP</h5>
              <p>
                Sign up for our e-mail and be the first who know our special
                offers! Furthermore, we will give a 15% discount on the next
                order after you sign up.
              </p>
              <div className="email-input">
                <input type="text" placeholder="Enter Your E-mail" />
                <button>JOIN US</button>
              </div>
              <div className="social-media">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
