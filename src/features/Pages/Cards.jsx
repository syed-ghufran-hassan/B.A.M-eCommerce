import React from "react";
import "../styles/Card.css";
import { Card, Button } from "react-bootstrap";

function Cards(props) {
  const handleOnClickDetails = () => {
    props.onProductSelected(props.product);
  };

  return (
    <Card style={{ width: "18rem", padding: "0.5rem" }}>
      <Card.Img variant="top" src={props.product.image} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{props.product.title.slice(0, 35)}</Card.Title>
        <Card.Text>{props.product.description.slice(0, 150)}</Card.Text>
        <div>
          <Button onClick={handleOnClickDetails}>Details</Button>
          <Button>Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
