// React
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useBooksStore } from "../BooksContext";

export const AddBook = () => {
  // Store
  const booksStore = useBooksStore();

  // Card state
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [readed, setReaded] = React.useState(false);
  const [show, setShow] = React.useState(false);

  // Modal form open/close
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Changes
  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };
  const handleChangeGenre = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };
  const handleChangeReaded = () => {
    setReaded(!readed);
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    booksStore.addBook(name, author, genre, readed, show);
    setReaded(false);
    setShow(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      await booksStore.books;
    };
    fetchData();
  }, [booksStore.books]);

  return (
    <>
      <Button
        variant="outline-dark"
        className="button-info"
        onClick={handleShow}
      >
        Add new book
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          className="bi bi-book"
          viewBox="0 0 14 18"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
        </svg>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Book name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book name"
                onChange={handleChangeName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Book author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book author"
                onChange={handleChangeAuthor}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter genre of the book"
                onChange={handleChangeGenre}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formReaded">
              <Form.Check
                type="checkbox"
                label="Readed"
                defaultChecked={readed}
                onChange={handleChangeReaded}
              />
            </Form.Group>

            <Modal.Footer className="justify-content-around">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
