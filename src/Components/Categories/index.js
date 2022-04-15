import React from "react";
import CategoryCard from "./CategoryCard";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
export default function Categories() {
  return (
    <Container fluid>
      <Row className="categories">
        <Col sm={12} lg={6}>
          <CategoryCard categoryName="CHAIRS" categoryImage={"chair"} />
        </Col>
        <Col>
          <Row>
            <Col>
              <CategoryCard categoryName="LOUNGE" categoryImage={"lounge"} />
            </Col>
            <Col>
              <CategoryCard categoryName="LIGHING" categoryImage={"lighing"} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CategoryCard categoryName="TABELS" categoryImage={"tabels"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
