// React
import React from "react";

// Bootstrap
import { Card, Form } from "react-bootstrap";

function bookCards() {

  return (
    <Card className="mb-3">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Form.Check type="checkbox" label="Readed" />
      </Card.Body>
    </Card>
  );
}

export default bookCards;
