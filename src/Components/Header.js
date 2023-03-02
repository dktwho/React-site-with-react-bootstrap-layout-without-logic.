

import React from 'react'
import { Navbar,  Container, Nav, FormControl, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'

const Header = () => {
  return (
      <>
      <Navbar fixed="top" collapseOnSelect expend="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img 
            src={logo} 
            alt="Logo"
            width="30"
            height="30"
            className='d-inline-block align-top'
            /> React site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About as</Nav.Link>
              <Nav.Link href='/contacts'>Contacts</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav>
            <Form className='d-flex' >
              <FormControl type="text" placeholder="search" className="mr-sm-2"/> 
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default Header
