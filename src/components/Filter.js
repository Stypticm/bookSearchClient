// React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { booksSelector, filterGenre } from "../redux/booksStore";

export const Filter = () => {
  // Store
  const dispatch = useDispatch();
  // Reducers
  const { library } = useSelector(booksSelector);

  const handleFilter = (genre) => {
    // e.preventDefault()
    dispatch(filterGenre(genre));
  };

  return (
    <div>
      <Row
        className="justify-content-md-center"
        style={{ textAlign: "center" }}
      >
        <Col xs={12}>
          <h5>Filter on genre</h5>
        </Col>

        <Col
          xs={12}
          className="filter_links"
          onClick={() => handleFilter("all")}
        >
          All
        </Col>
        {library.map((book) => (
          <Col
            xs={12}
            className="filter_links"
            onClick={() => handleFilter(book.genre)}
          >
            {book.genre}
          </Col>
        ))}

        <Col xs={12} style={{ marginTop: "15px" }}>
          <h5>Filter Read/Unread</h5>
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => console.log("read books")}
        >
          Read
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => console.log("unread books")}
        >
          Unread
        </Col>
      </Row>
    </div>
  );
};
