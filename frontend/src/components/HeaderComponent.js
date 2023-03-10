import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { Button, Form, InputGroup } from 'react-bootstrap';

function HeaderComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">BEST ONLINE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <NavDropdown title="ALL" id="collasible-nav-dropdown">
                <NavDropdown.Item>Electronics</NavDropdown.Item>
                <NavDropdown.Item>Cars</NavDropdown.Item>
                <NavDropdown.Item>Books</NavDropdown.Item>
              </NavDropdown>
              <Form.Control type="text" placeholder="Search here" />
              <Button variant='warning'>
                <i className="bi bi-search text- dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/admin/orders">Admin
              <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            {/* <Nav.Link as={Link} to="/cart">

              CART
            </Nav.Link> */}
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/user/my-orders" eventKey="/user/my-orders">My Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user" eventKey="/user">My Profile</NavDropdown.Item>
              <NavDropdown.Item >Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/login">Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">Register
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">CART <span className='ms-1'></span><i className="bi bi-cart4"></i><Badge pill bg="danger">2</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent 
