// React
import React from "react";
import { useBooksStore } from "../BooksContext";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

export const Filter = () => {
  // Store
  const booksStore = useBooksStore();

  return (
    <Row className="justify-content-md-center" style={{ textAlign: "center" }}>
      <Col xs={12}>
        <h5>Filter on genre</h5>
      </Col>
      <Col
        xs={12}
        className="filter_links"
        onClick={() => booksStore.filter("all")}
      >
        All
      </Col>
      <Col
        xs={12}
        className="filter_links"
        onClick={() => booksStore.filter("romantic")}
      >
        Romantic
      </Col>
      <Col
        xs={12}
        className="filter_links"
        onClick={() => booksStore.filter("history")}
      >
        History
      </Col>
      <Col
        xs={12}
        className="filter_links"
        onClick={() => booksStore.filter("comedy")}
      >
        Comedy
      </Col>
    </Row>
  );
};
