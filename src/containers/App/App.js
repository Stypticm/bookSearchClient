// React
import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
// useSelector - читаем данные из store
// useDispatch - получение actions
import {
  booksSelector,
  fetchBooks,
  sortByName,
  searchBook,
} from "../../redux/booksStore";

// Import Components
import { BookCards } from "../../components/BookCards";
import { AddBook } from "../../components/AddBook";
import { Filter } from "../../components/Filter";
import { Loading } from "../../components/Loading";

// Style
import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Row,
  NavDropdown,
  Navbar,
  FormControl,
  InputGroup,
} from "react-bootstrap";

export const App = () => {
  // Reducers
  const { library, loading, error } = useSelector(booksSelector);
  const dispatch = useDispatch();

  // Get data first time
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderLibrary = () => {
    if (loading) return <Loading />;
    if (error) return <p>Ошибка запросы...</p>;
    if (library.length === 0) return <p>Книги не найдены</p>;

    return library.map((book) => (
      <BookCards
        key={book.id}
        name={book.name}
        author={book.author}
        genre={book.genre}
        readed={book.readed}
        show={book.show}
        id={book.id}
      />
    ));
  };

  const sortName = () => {
    dispatch(sortByName());
  };

  const handleSearch = (e) => {
    dispatch(searchBook(e.target.value));
  };

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
            <Col style={{ display: "flex", justifyContent: "space-between" }}>
              <Col xs={4}>
                <NavDropdown title="Sort by: ">
                  <NavDropdown.Item onClick={sortName}>Name</NavDropdown.Item>
                </NavDropdown>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Search</InputGroup.Text>
                  <FormControl
                    aria-label="searchBook"
                    onChange={(e) => handleSearch(e)}
                  />
                </InputGroup>
              </Col>
            </Col>
            <Col xs={12}>{renderLibrary()}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
