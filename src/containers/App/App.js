// React
import React from "react";

// MobX
import { observer } from "mobx-react-lite";

//Store
import { useBooksStore } from "../../BooksContext";

// Import Components
import { BookCards } from "../../components/BookCards";
import { AddBook } from "../../components/AddBook";
import { Filter } from "../../components/Filter";

// Style
import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, NavDropdown, Navbar } from "react-bootstrap";

export const App = observer(() => {
  const booksStore = useBooksStore();

  return (
    <div className="App">
      <div className="header">
        <div>
          <Navbar.Brand className="brand">Book Search</Navbar.Brand>
        </div>
        <div>
          <AddBook />
          <Button variant="outline-dark" className="button-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-person"
              viewBox="1 1 14 14"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </Button>
        </div>
      </div>
      <Row className="content-body" style={{ marginLeft: 0 }}>
        <Col sm={4} className="content-body__left-side">
          <Filter />
        </Col>
        <Col sm={8} className="content-body__main-content">
          <Row>
            <Col xs={12}>
              <NavDropdown title="Sort by: ">
                <NavDropdown.Item onClick={() => console.log('sort by name')}>Name</NavDropdown.Item>
                <NavDropdown.Item onClick={() => console.log('sort by rank')}>Rank</NavDropdown.Item>
                <NavDropdown.Item onClick={() => console.log('sort by unreaded')}>Unreaded</NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col xs={12}>
              {booksStore.books.map((book) =>
                book.show === true ? (
                  <BookCards
                    key={book.id}
                    name={book.name}
                    genre={book.genre}
                    readed={book.readed}
                    id={book.id}
                  />
                ) : (
                  ""
                )
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
});
