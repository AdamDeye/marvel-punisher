import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import CharCard from './CharCards';
import Series from './Series'
import Comics from './Comics'

const NavBar = () => (

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="./CharCards">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="./CharCards">Characters</Nav.Link>
      <Nav.Link href="./Comics">Comics</Nav.Link>
      <Nav.Link href="./Series">Series</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)

export default NavBar