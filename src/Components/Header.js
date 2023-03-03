

import React from 'react'
import { Navbar,  Container, Nav, FormControl, Form, Button } from 'react-bootstrap'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';




import logo from './logo192.png'

const Header = () => {
  return (
      <>

      <Navbar sticky="top" collapseOnSelect expend="md" bg="dark" variant="dark">
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

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/blog" element={<Blog />}/>
          </Routes>
        </BrowserRouter>
      
    </>

  )
}

export default Header
