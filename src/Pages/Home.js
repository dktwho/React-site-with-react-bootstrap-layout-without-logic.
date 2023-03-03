import React from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, Card, Button, CardGroup } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <CarouselBox/>
 
    <Container>
      <h2 className='text-center m-4'>Our team</h2>
      <CardGroup>

      <Card bg='info' border="dark" className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Randall_Packer_400x400.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        <Button className='m-2' variant="dark">More</Button>
      </Card.Body>
    </Card>

    <Card bg='info' border="dark" className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://chebyshev.spbu.ru/wp-content/uploads/2017/07/Zograf-Petr-Georgievich-e1500027892888-400x400.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        <Button className='m-2' variant="dark">More</Button>
      </Card.Body>
    </Card>

    <Card bg='info' border="dark" className='m-3'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://acllive.com/wp-content/uploads/2022/10/Buddy-Guy-Blank-400x400.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        <Button className='m-2' variant="dark">More</Button>
      </Card.Body>
    </Card>
      </CardGroup>

    </Container>

   
    </>
  )
}

export default Home
