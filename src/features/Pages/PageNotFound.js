import React from 'react'
import "../styles/PageNotFound.css"
import { Container, Row, Col } from 'react-bootstrap';

function PageNotFound() {
  return (
    <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          <div className='card'>
            <div className='card-header'>404</div>
            <div className='card-body'>
              <h5 className='card-title'>Custom Error Page</h5>
              <p className='card-text'>
                Edit Custom 404 error page <code>src/pages/NotFound.js</code>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PageNotFound
