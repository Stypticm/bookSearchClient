// React
import React from "react";

// Bootstrap
import { Button, Card, Form } from "react-bootstrap";

export const BookCards = ({ name, author, genre, readed, id }) => {
  // Store

  // Delete Button
  const handleDelete = (e) => {
    // booksStore.removeBook(id);
  };

  // Readed button
  const handleChangeReaded = (e) => {
    // booksStore.readedBtn(id);
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
