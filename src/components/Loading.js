import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
