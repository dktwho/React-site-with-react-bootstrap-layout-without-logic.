import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Contacts = () => {
  return (

    <Container style={{width: '500px'}}>
      <h1 className='text-center'>Contact us</h1>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows="3" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form>
    </Container>
   
  )
}

export default Contacts
