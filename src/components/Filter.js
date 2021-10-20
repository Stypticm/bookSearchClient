// React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  booksSelector,
  filterGenre,
  filterReadUnread,
} from "../redux/booksStore";

// Random id
import { nanoid } from "nanoid";

export const Filter = () => {
  // Store
  const dispatch = useDispatch();
  // Reducers
  const { library } = useSelector(booksSelector);

  const handleFilter = (genre) => {
    dispatch(filterGenre(genre));
  };

  const uniqueGenre = () => {
    let unique = [];
    library.map((book) => {
      if (!unique.includes(book.genre)) unique.push(book.genre);
    });
    return unique;
  };

  const handleReadUnread = (status) => {
    dispatch(filterReadUnread(status));
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
        {uniqueGenre().map((book) => (
          <Col
            key={nanoid()}
            xs={12}
            className="filter_links"
            onClick={() => handleFilter(book)}
          >
            {book}
          </Col>
        ))}

        <Col xs={12} style={{ marginTop: "15px" }}>
          <h5>Filter Read/Unread</h5>
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => handleReadUnread(true)}
        >
          Read
        </Col>
        <Col
          xs={12}
          className="filter_links"
          onClick={() => handleReadUnread(false)}
        >
          Unread
        </Col>
      </Row>
    </div>
  );
};
