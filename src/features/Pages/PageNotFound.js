import React from 'react'
import "../styles/PageNotFound.css"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>404 Page Not Found</Card.Title>
        <Card.Text>
          You can got back to the main page by clicking in the button. Thanks!
        </Card.Text>
        <Link to={{ pathname: "/" }}>
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">BAM E-Commerce</Card.Footer>
    </Card>
  )
}

export default PageNotFound
