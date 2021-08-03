// React
import React from "react";
import { useBooksStore } from "../BooksContext";

// Bootstrap
import { Button, Card, Form } from "react-bootstrap";

export const BookCards = ({ name, genre, readed, id }) => {
  // Store
  const booksStore = useBooksStore();

  // Delete Button
  const handleDelete = (e) => {
    e.preventDefault()
    booksStore.removeBook(id)
  }

  return (
    <Card className="mb-3">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>Genre: {genre}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Form.Check type="checkbox" label="Readed" defaultChecked={readed} />
        <Button variant="danger" onClick={handleDelete}>Delete book</Button>
      </Card.Body>
    </Card>
  );
};
