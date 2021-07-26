// React
import React from 'react';

// Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function bookCards({ title, text, img}) {
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default bookCards;