import React from 'react'
import { Col, Row, Container, ListGroup, Card } from 'react-bootstrap'

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col md='9'>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png" alt="..." width='64' height='64'/>
          </div>
         <div className="flex-grow-1 ms-3 m-3">
          Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.
         </div>
      </div>

      <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png" alt="..." width='64' height='64'/>
          </div>
         <div className="flex-grow-1 ms-3 m-3">
          Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.
         </div>
      </div>

      <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png" alt="..." width='64' height='64'/>
          </div>
         <div className="flex-grow-1 ms-3 m-3">
          Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.
         </div>
      </div>
        </Col>

        <Col md='3'>
          <h5>Categories</h5>
          <Card>
          <ListGroup variant='flush'>
              <ListGroup.Item variant="success">JavaScript</ListGroup.Item>
              <ListGroup.Item variant="success">Python</ListGroup.Item>
              <ListGroup.Item variant="success">C#</ListGroup.Item>
              <ListGroup.Item variant="success">Go</ListGroup.Item>
              <ListGroup.Item variant="success">Rust</ListGroup.Item>
           </ListGroup>
          </Card>

          <Card className='mt-3' bg='light'>
            <Card.Body>
              <Card.Title>
                Side Widget
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum incidunt, blanditiis aut ducimus iure?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
