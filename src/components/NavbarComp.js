import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default function NavbarCompFunc(propscallingName) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className='navbar-brand'>{propscallingName.title}</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-link'> {propscallingName.pagename1} </Link>
            <Link to="/about" className='nav-link'>{propscallingName.pagename2 }</Link>
            <Link to="/contact" className='nav-link'>{propscallingName.pagename3 }</Link>
            <NavDropdown title={propscallingName.pagename4 } id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
             {propscallingName.number}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// Properties Datatype 
// NavbarCompFunc.propTypes = {
//   title: PropTypes.string,
//   pagename1: PropTypes.string,
//   pagename2: PropTypes.string,
//   pagename3: PropTypes.string,
//   href: PropTypes.string.isRequired,
//   number: PropTypes.number
// }
// default values of props
// NavbarCompFunc.defaultProps = {
//   title: 'company name',
//   href: 'company url',
//   pagename1: 'page 1',
//   pagename2: 'page 2',
//   pagename3: 'page 3 dropdown',
//   number: 'number'
// }