import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./style.css";
export default function SpinnerComponent() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" />
    </div>
  );
}
