import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import "./style.css";
function ProductsPage() {
  const history = useHistory();
  return (
    <div className="products">
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
            >
              Products
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
      </Container>
    </div>
  );
}
export default withRouter(ProductsPage);
