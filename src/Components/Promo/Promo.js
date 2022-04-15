import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromoCard from "./PromoCard/PromoCard";
import "./style.css";
export default function Promo() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} sm={12}>
          <PromoCard
            promoText={"FALL-WINTER CLEARANCE SALES GET UP TO 50% OFF"}
            promoImage="promo1"
          />
        </Col>
        <Col lg={6} sm={12}>
          <PromoCard promoText={"CHAIRS NEW ARRIVAL"} promoImage="promo2" />
        </Col>
      </Row>
    </Container>
  );
}
