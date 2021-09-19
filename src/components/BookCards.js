// React
import React from "react";

// Redux
import { useDispatch } from "react-redux";
import { removeBook, readedBook } from "../redux/booksStore";

// Bootstrap
import { Button, Card, Form } from "react-bootstrap";

export const BookCards = ({ name, author, genre, readed, id }) => {
  // Store
  const dispatch = useDispatch();

  // Delete Button
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeBook(id))
  };

  // Readed button
  const handleChangeReaded = (e) => {
    e.preventDefault()
    dispatch(readedBook(id, readed))
  };

  return (
    <Card className="mb-3">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>Author: {author}</Card.Title>
        <Card.Title>Genre: {genre}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
          massa et tincidunt aliquam. Curabitur bibendum nunc ac ipsum
          vulputate.
        </Card.Text>
        <Form.Check
          type="checkbox"
          label="Readed"
          defaultChecked={readed}
          onChange={handleChangeReaded}
        />
        <Button variant="danger" onClick={handleDelete}>
          Delete book
        </Button>
      </Card.Body>
    </Card>
  );
};
